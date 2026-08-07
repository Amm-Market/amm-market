#!/usr/bin/env bash
# Durable translation until all content catalogs are done for all locales.
set -u
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"
LOG=/tmp/avana-i18n-finish.log
echo "=== START $(date) ROOT=$ROOT ===" | tee -a "$LOG"

LOCALES="zh-CN,zh-TW,hi,es,ar,fr,bn,pt,ru,ur,id,de,ja,fa,sw,vi,tr,ko,ha,it,th,pl,uk,nl,he"
FILES="faq.json,marketing.json,blog.json,legal.json,docs.json,messages-ui.json"

cp -f messages/en.json content/en/messages-ui.json

apply_cache() {
  python3 - <<'PY' | tee -a "$LOG"
import json, hashlib
from pathlib import Path

def ck(target, text):
    return f"{target}:{hashlib.sha1(text.encode()).hexdigest()}"

LOCALE_MAP = {"zh-CN": "zh", "zh-TW": "zh-TW", "he": "he"}
cache_path = Path("content/.cache/gtrans.json")
cache = json.loads(cache_path.read_text()) if cache_path.exists() else {}

def collect(node, bag):
    if isinstance(node, dict):
        for v in node.values():
            collect(v, bag)
    elif isinstance(node, list):
        for v in node:
            collect(v, bag)
    elif isinstance(node, str) and node.strip():
        bag.add(node)

def apply_map(node, m):
    if isinstance(node, dict):
        return {k: apply_map(v, m) for k, v in node.items()}
    if isinstance(node, list):
        return [apply_map(v, m) for v in node]
    if isinstance(node, str):
        return m.get(node, node)
    return node

files = ["faq.json", "marketing.json", "blog.json", "legal.json", "docs.json", "messages-ui.json"]
locales = [p.name for p in Path("content").iterdir() if p.is_dir() and p.name not in {".cache", "en"}]
wrote = 0
for name in files:
    src = Path("content/en") / name
    if not src.exists():
        continue
    data = json.loads(src.read_text())
    bag = set()
    collect(data, bag)
    if not bag:
        continue
    for locale in locales:
        target = LOCALE_MAP.get(locale, locale)
        mapping = {}
        hit = 0
        for s in bag:
            key = ck(target, s)
            if key in cache:
                mapping[s] = cache[key]
                hit += 1
        # Apply any partial cache hits (writes help SSG + resume even under 85%).
        if hit / len(bag) >= 0.15:
            dest = Path("content") / locale / name
            dest.parent.mkdir(parents=True, exist_ok=True)
            out = apply_map(data, mapping)
            dest.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
            wrote += 1
            if name == "messages-ui.json" and hit / len(bag) >= 0.85:
                Path("messages").joinpath(f"{locale}.json").write_text(
                    json.dumps(out, ensure_ascii=False, indent=2) + "\n"
                )
print(f"apply wrote={wrote} cache={len(cache)}")
PY
}

progress() {
  python3 - <<'PY'
import json
from pathlib import Path

def leaves(n, o):
    if isinstance(n, dict):
        for v in n.values(): leaves(v, o)
    elif isinstance(n, list):
        for v in n: leaves(v, o)
    elif isinstance(n, str): o.append(n)

def ratio(en_p, loc_p):
    en_p, loc_p = Path(en_p), Path(loc_p)
    if not loc_p.exists(): return 0.0
    e, l = [], []
    leaves(json.loads(en_p.read_text()), e)
    try: leaves(json.loads(loc_p.read_text()), l)
    except: return 0.0
    if not e or len(e) != len(l): return 0.0
    return sum(1 for a,b in zip(e,l) if a!=b)/len(e)

locales = sorted(p.name for p in Path("content").iterdir() if p.is_dir() and p.name not in {".cache","en"})
files = ["faq.json","marketing.json","blog.json","legal.json","docs.json","messages-ui.json"]
total = 0
done = 0
for f in files:
    for loc in locales:
        total += 1
        if ratio(f"content/en/{f}", f"content/{loc}/{f}") >= 0.85:
            done += 1
print(f"PROGRESS {done}/{total}")
print(done == total)
PY
}

PASS=0
while true; do
  PASS=$((PASS+1))
  echo "=== pass $PASS $(date) ===" | tee -a "$LOG"
  apply_cache

  if progress | tee -a "$LOG" | tail -1 | grep -q True; then
    echo "ALL DONE $(date)" | tee -a "$LOG"
    exit 0
  fi

  # Smaller/high-impact files first; unique-string locale translate with multi-engine.
  PYTHONUNBUFFERED=1 python3 -u scripts/translate-fast.py \
    --locales "$LOCALES" \
    --files "messages-ui.json,faq.json,marketing.json,blog.json,legal.json,docs.json" \
    --workers 10 \
    --locale-workers 3 \
    >>"$LOG" 2>&1 || true

  apply_cache
  sleep 2

  if [ "$PASS" -ge 80 ]; then
    echo "Gave up after 80 passes $(date)" | tee -a "$LOG"
    exit 1
  fi
done
