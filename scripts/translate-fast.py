#!/usr/bin/env python3
"""Fast parallel JSON string-leaf translator (multi-engine via translators)."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import translators as ts

ROOT = Path(__file__).resolve().parents[1]
CACHE_PATH = ROOT / "content" / ".cache" / "gtrans.json"
_CACHE_LOCK = threading.Lock()

PROTECT = sorted(
    [
        "Aave v4",
        "Avana",
        "Aave",
        "Uniswap",
        "Balancer",
        "Curve",
        "Aerodrome",
        "GHO",
        "AppKit",
        "Sandbox",
        "DeFi",
        "ERC-20",
        "ARFC",
        "WETH",
        "USDC",
        "LINK",
        "ETH",
        "BTC",
        "LP",
        "AMM",
        "APR",
        "APY",
        "LTV",
        "TVL",
        "wstETH",
        "cbETH",
        "rETH",
        "cbBTC",
        "sUSDe",
        "USDe",
        "USDT",
        "AAVE",
    ],
    key=len,
    reverse=True,
)

# Prefer faster/more reliable free endpoints first.
ENGINES = ["bing", "yandex", "google", "sogou", "alibaba"]
# Primary target codes for cache keys + preferred engine language.
LOCALE_MAP = {
    "zh-CN": "zh",
    "zh-TW": "zh-TW",
    "he": "he",
}
# Some free engines use alternate BCP/legacy codes.
LANG_ALIASES = {
    "zh": ["zh", "zh-CN", "zh-CHS"],
    "zh-TW": ["zh-TW", "zh-CHT", "cht"],
    "he": ["he", "iw"],
    "bn": ["bn"],
    "fa": ["fa"],
    "ur": ["ur"],
    "sw": ["sw"],
    "ha": ["ha"],
    "hi": ["hi"],
}


def load_cache() -> dict:
    if CACHE_PATH.exists():
        try:
            return json.loads(CACHE_PATH.read_text())
        except Exception:
            return {}
    return {}


def save_cache(cache: dict) -> None:
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    tmp = CACHE_PATH.with_suffix(".json.tmp")
    tmp.write_text(json.dumps(cache, ensure_ascii=False))
    tmp.replace(CACHE_PATH)


def ck(target: str, text: str) -> str:
    return f"{target}:{hashlib.sha1(text.encode()).hexdigest()}"


def protect(text: str):
    mapping = {}
    out = text
    for i, token in enumerate(PROTECT):
        if token in out:
            key = f"⟦{i}⟧"
            mapping[key] = token
            out = out.replace(token, key)
    return out, mapping


def unprotect(text: str, mapping: dict) -> str:
    out = text
    for k, v in mapping.items():
        out = out.replace(k, v)
    return out


def collect_strings(node, bag: set):
    if isinstance(node, dict):
        for v in node.values():
            collect_strings(v, bag)
    elif isinstance(node, list):
        for v in node:
            collect_strings(v, bag)
    elif isinstance(node, str) and node.strip() and len(node) > 1:
        bag.add(node)


def apply_map(node, m: dict):
    if isinstance(node, dict):
        return {k: apply_map(v, m) for k, v in node.items()}
    if isinstance(node, list):
        return [apply_map(v, m) for v in node]
    if isinstance(node, str):
        return m.get(node, node)
    return node


def should_skip_translation(text: str) -> bool:
    s = text.strip()
    if len(s) < 2:
        return True
    if s.startswith("@/") or s.startswith("./") or s.startswith("../"):
        return True
    if s.startswith("http://") or s.startswith("https://"):
        return True
    if re.fullmatch(r"hero\.[A-Za-z0-9_.]+", s):
        return True
    if re.fullmatch(r"[\d\s\$\%\.\,\-\+\*/:#_@]+", s):
        return True
    if re.fullmatch(r"[\w\.\-]+\.(io|com|cc|finance|app|org|net|dev)", s, re.I):
        return True
    if re.fullmatch(r"[a-z0-9_\-\[\].:%/]+(?:\s+[a-z0-9_\-\[\].:%/]+){2,}", s, re.I) and not re.search(
        r"[A-Z][a-z]{2,}", s
    ):
        return True  # utility class piles
    if "className" in s or "useRef" in s or "useState" in s:
        return True
    # brand / tickers / pure identifiers that should stay EN
    if s in set(PROTECT) or re.fullmatch(r"[A-Z]{2,10}(?:/[A-Z]{2,10})*", s):
        return True
    if re.fullmatch(r"[A-Za-z0-9]+ / [A-Za-z0-9]+", s):
        return True
    return False


def translate_one(text: str, target: str) -> str:
    if should_skip_translation(text):
        return text
    targets = LANG_ALIASES.get(target, [target])
    protected, mapping = protect(text)
    chunks = protected.split("\n\n") if len(protected) > 1200 else [protected]
    out_chunks = []
    for chunk in chunks:
        if not chunk.strip():
            out_chunks.append(chunk)
            continue
        last = None
        done = False
        for engine in ENGINES:
            if done:
                break
            for lang in targets:
                if done:
                    break
                for attempt in range(2):
                    try:
                        out = ts.translate_text(
                            chunk[:4500],
                            translator=engine,
                            from_language="en",
                            to_language=lang,
                        )
                        # Reject captcha/noise tokens free engines sometimes return
                        cleaned = (out or "").strip()
                        if re.fullmatch(r"[a-z0-9]{12,48}", cleaned):
                            last = RuntimeError(f"garbled translation from {engine}")
                            continue
                        if out and out.strip() and out.strip() != chunk.strip():
                            out_chunks.append(out)
                            last = None
                            done = True
                            break
                        last = RuntimeError("empty/same translation")
                    except Exception as e:
                        last = e
                        # Unsupported language → try next alias/engine immediately
                        msg = str(e).lower()
                        if "unsupported" in msg or "to_language" in msg:
                            break
                        time.sleep(0.12 * (attempt + 1))
        if last is not None:
            print(f"  leave EN: {chunk[:60]}... ({last})", file=sys.stderr)
            out_chunks.append(chunk)
        time.sleep(0.01)
    return unprotect("\n\n".join(out_chunks), mapping)


def ratio_ok(src: Path, dest: Path, threshold: float = 0.85) -> bool:
    if not dest.exists():
        return False
    try:
        en = json.loads(src.read_text())
        loc = json.loads(dest.read_text())

        def leaves(node, out: list):
            if isinstance(node, dict):
                for v in node.values():
                    leaves(v, out)
            elif isinstance(node, list):
                for v in node:
                    leaves(v, out)
            elif isinstance(node, str):
                out.append(node)

        en_leaves: list[str] = []
        loc_leaves: list[str] = []
        leaves(en, en_leaves)
        leaves(loc, loc_leaves)
        if not en_leaves or len(en_leaves) != len(loc_leaves):
            return False
        hit = sum(1 for a, b in zip(en_leaves, loc_leaves) if a != b)
        return hit / len(en_leaves) >= threshold
    except Exception:
        return False


def translate_locale(
    locale: str,
    files: list[str],
    en_dir: Path,
    out_root: Path,
    workers: int,
    force: bool,
):
    target = LOCALE_MAP.get(locale, locale)
    if locale == "en":
        for name in files:
            src = en_dir / name
            if src.exists():
                dest = out_root / "en" / name
                dest.parent.mkdir(parents=True, exist_ok=True)
                dest.write_text(src.read_text())
        return

    # Unique strings across all requested files for this locale
    bag: set[str] = set()
    file_data: dict[str, object] = {}
    pending_files: list[str] = []
    for name in files:
        src = en_dir / name
        if not src.exists():
            print("missing", src)
            continue
        dest = out_root / locale / name
        if not force and ratio_ok(src, dest):
            print(f"skip translated {dest}", flush=True)
            continue
        data = json.loads(src.read_text())
        file_data[name] = data
        collect_strings(data, bag)
        pending_files.append(name)

    if not pending_files:
        return

    with _CACHE_LOCK:
        cache = load_cache()

    mapping: dict[str, str] = {}
    todo: list[str] = []
    for s in bag:
        if should_skip_translation(s):
            mapping[s] = s
            continue
        key = ck(target, s)
        with _CACHE_LOCK:
            hit = cache.get(key)
        if hit is not None:
            mapping[s] = hit
        else:
            todo.append(s)

    print(
        f"[{locale}] {len(pending_files)} files, {len(bag)} unique strings, {len(todo)} to translate",
        flush=True,
    )

    done = 0

    def work(s: str):
        return s, translate_one(s, target)

    if todo:
        with ThreadPoolExecutor(max_workers=workers) as ex:
            futs = [ex.submit(work, s) for s in todo]
            for fut in as_completed(futs):
                s, tr = fut.result()
                mapping[s] = tr
                key = ck(target, s)
                with _CACHE_LOCK:
                    cache = load_cache()
                    cache[key] = tr
                    if (done + 1) % 20 == 0:
                        save_cache(cache)
                done += 1
                if done % 20 == 0:
                    print(f"[{locale}] {done}/{len(todo)}", flush=True)
        with _CACHE_LOCK:
            cache = load_cache()
            for s in todo:
                cache[ck(target, s)] = mapping[s]
            save_cache(cache)

    for name in pending_files:
        out = apply_map(file_data[name], mapping)
        dest = out_root / locale / name
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
        print(f"[{locale}] wrote {dest}", flush=True)
        if name == "messages-ui.json":
            msg = ROOT / "messages" / f"{locale}.json"
            msg.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
            print(f"[{locale}] synced {msg}", flush=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dir", default="content/en")
    ap.add_argument("--out-root", default="content")
    ap.add_argument("--locales", required=True)
    ap.add_argument(
        "--files",
        default="messages-ui.json,faq.json,marketing.json,blog.json,legal.json,docs.json",
    )
    ap.add_argument("--workers", type=int, default=8)
    ap.add_argument("--locale-workers", type=int, default=2)
    ap.add_argument("--force", action="store_true")
    args = ap.parse_args()

    locales = [x.strip() for x in args.locales.split(",") if x.strip() and x.strip() != "en"]
    files = [x.strip() for x in args.files.split(",") if x.strip()]
    en_dir = (ROOT / args.dir).resolve()
    out_root = (ROOT / args.out_root).resolve()

    # Prioritize locale order as given (already size/importance ordered by finish script).
    locale_workers = max(1, min(args.locale_workers, len(locales) or 1))
    string_workers = max(2, args.workers)

    def run_locale(locale: str):
        try:
            translate_locale(locale, files, en_dir, out_root, string_workers, args.force)
            return locale, "ok"
        except Exception as e:
            print(f"ERROR {locale}: {e}", file=sys.stderr)
            return locale, str(e)

    if locale_workers <= 1:
        for locale in locales:
            print("job", run_locale(locale), flush=True)
    else:
        with ThreadPoolExecutor(max_workers=locale_workers) as ex:
            futs = {ex.submit(run_locale, loc): loc for loc in locales}
            for fut in as_completed(futs):
                print("job", fut.result(), flush=True)


if __name__ == "__main__":
    main()
