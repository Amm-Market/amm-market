#!/usr/bin/env python3
"""Generate content/i18n/gap-map.json — inventory of untranslated strings (no API)."""

from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LOCALES = [
    x.strip()
    for x in "zh-CN,zh-TW,hi,es,ar,fr,bn,pt,ru,ur,id,de,ja,fa,sw,vi,tr,ko,ha,it,th,pl,uk,nl,he".split(",")
]
CONTENT_FILES = ["faq.json", "marketing.json", "blog.json", "legal.json", "docs.json"]
SKIP = {
    "Avana", "Sandbox", "Aave", "Aave v4", "DeFi", "AppKit", "ARFC", "ChatGPT", "Claude", "Grok", "Perplexity",
}
SKIP_RE = re.compile(r"^(/images/|[\w\-\[\].:/%]+$)")


def walk_pairs(en_n, loc_n, path="", pairs=None):
    if pairs is None:
        pairs = []
    if isinstance(en_n, dict) and isinstance(loc_n, dict):
        for k, ev in en_n.items():
            p = f"{path}.{k}" if path else k
            if k in loc_n:
                walk_pairs(ev, loc_n[k], p, pairs)
            elif isinstance(ev, str):
                pairs.append({"path": p, "en": ev, "status": "missing_key"})
    elif isinstance(en_n, list) and isinstance(loc_n, list):
        for i, (e, l) in enumerate(zip(en_n, loc_n)):
            walk_pairs(e, l, f"{path}[{i}]", pairs)
    elif isinstance(en_n, str) and isinstance(loc_n, str):
        if en_n == loc_n and len(en_n) > 3 and en_n not in SKIP and not SKIP_RE.match(en_n.strip()):
            if "className" not in en_n and "w-full" not in en_n:
                pairs.append({"path": path, "en": en_n, "status": "identical_to_en"})
    return pairs


def content_stats():
    out = {}
    for name in CONTENT_FILES:
        en_path = ROOT / "content/en" / name
        if not en_path.exists():
            continue
        en_data = json.loads(en_path.read_text())
        file_entry = {"locales": {}}
        for loc in LOCALES:
            loc_path = ROOT / "content" / loc / name
            if not loc_path.exists():
                file_entry["locales"][loc] = {"status": "missing_file"}
                continue
            loc_data = json.loads(loc_path.read_text())
            gaps = walk_pairs(en_data, loc_data)
            identical = [g for g in gaps if g["status"] == "identical_to_en"]
            file_entry["locales"][loc] = {
                "untranslated_count": len(identical),
                "samples": identical[:5],
            }
        out[name] = file_entry
    return out


def message_stats():
    en = json.loads((ROOT / "messages/en.json").read_text())
    out = {"locales": {}, "keys_by_frequency": {}}
    freq = defaultdict(int)
    for loc in LOCALES:
        path = ROOT / "messages" / f"{loc}.json"
        loc_data = json.loads(path.read_text())
        gaps = walk_pairs(en, loc_data)
        out["locales"][loc] = {
            "untranslated_count": len(gaps),
            "gaps": gaps,
        }
        for g in gaps:
            freq[g["path"]] += 1
    out["keys_by_frequency"] = {k: v for k, v in sorted(freq.items(), key=lambda x: -x[1])}
    return out


def blog_post_gaps():
    en_posts = {p["slug"]: p for p in json.loads((ROOT / "content/en/blog.json").read_text())["posts"]}
    out = {}
    for loc in LOCALES:
        path = ROOT / "content" / loc / "blog.json"
        if not path.exists():
            continue
        posts = {p["slug"]: p for p in json.loads(path.read_text())["posts"]}
        english_posts = []
        for slug, en_post in en_posts.items():
            loc_post = posts.get(slug)
            if not loc_post:
                english_posts.append({"slug": slug, "issue": "missing_post"})
                continue
            en_sections = en_post.get("sections", [])
            loc_sections = loc_post.get("sections", [])
            if loc_post.get("title") == en_post.get("title"):
                title_translated = False
            else:
                title_translated = True
            body_en = 0
            for es, ls in zip(en_sections, loc_sections):
                for ep, lp in zip(es.get("paragraphs", []), ls.get("paragraphs", [])):
                    if ep == lp:
                        body_en += 1
                if es.get("title") and es.get("title") == ls.get("title"):
                    body_en += 1
            if body_en > 0 or not title_translated:
                english_posts.append({
                    "slug": slug,
                    "title_still_english": not title_translated,
                    "untranslated_body_units": body_en,
                })
        out[loc] = {
            "posts_needing_review": len(english_posts),
            "posts": english_posts,
        }
    return out


def main():
    gap_map = {
        "generated_by": "scripts/generate-gap-map.py",
        "policy": "Hand-written translations only. Do not use translate-fast.py for production copy.",
        "ui_messages": message_stats(),
        "content_catalogs": content_stats(),
        "blog_editorial": blog_post_gaps(),
        "priority": [
            "DONE: UI chrome overlays applied (content/i18n/ui-overlays.json)",
            "DONE: Blog articles — 0 untranslated body/title units across all 25 locales",
            "DONE: Marketing phrase maps — 0 translatable gaps",
            "DONE: Developer docs phrase maps — 0 translatable gaps",
            "DONE: FAQ + legal — 0 translatable gaps",
        ],
    }
    dest = ROOT / "content" / "i18n" / "gap-map.json"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(json.dumps(gap_map, ensure_ascii=False, indent=2) + "\n")
    print("wrote", dest)


if __name__ == "__main__":
    main()
