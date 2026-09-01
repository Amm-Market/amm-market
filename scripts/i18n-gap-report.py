#!/usr/bin/env python3
"""Report i18n gaps: UI messages and content catalogs vs English."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LOCALES = [
    x.strip()
    for x in "zh-CN,zh-TW,hi,es,ar,fr,bn,pt,ru,ur,id,de,ja,fa,sw,vi,tr,ko,ha,it,th,pl,uk,nl,he".split(",")
]
CONTENT_FILES = ["messages-ui.json", "faq.json", "marketing.json", "blog.json", "legal.json", "docs.json"]
SKIP_IDENTICAL = re.compile(
    r"^(http|@/|\./|\.\./|hero\.|/images/|[\d\s\$\%\.\,\-\+\*/:#_@]+$|[a-z0-9_\-\[\].:%/]+(?:\s+[a-z0-9_\-\[\].:%/]+){2,}$)",
    re.I,
)
PROPER_NOUNS = {
    "Avana",
    "Sandbox",
    "Aave",
    "Aave v4",
    "DeFi",
    "AppKit",
    "ARFC",
    "Aave ARFC",
    "ChatGPT",
    "Claude",
    "Grok",
    "Perplexity",
    "Uniswap",
    "Curve",
    "Balancer",
    "Aerodrome",
}


def leaf_values(node, out: list[str]) -> None:
    if isinstance(node, dict):
        for v in node.values():
            leaf_values(v, out)
    elif isinstance(node, list):
        for v in node:
            leaf_values(v, out)
    elif isinstance(node, str):
        out.append(node)


def should_count(s: str) -> bool:
    s = s.strip()
    if len(s) < 3:
        return False
    if s in PROPER_NOUNS:
        return False
    if SKIP_IDENTICAL.match(s):
        return False
    if "className" in s or "w-full" in s:
        return False
    return True


def ratio_translated(en_leaves: list[str], loc_leaves: list[str]) -> float | None:
    if len(en_leaves) != len(loc_leaves) or not en_leaves:
        return None
    translatable = [i for i, s in enumerate(en_leaves) if should_count(s)]
    if not translatable:
        return 1.0
    hit = sum(1 for i in translatable if en_leaves[i] != loc_leaves[i])
    return hit / len(translatable)


def main() -> None:
    en_msg = json.loads((ROOT / "messages/en.json").read_text())
    en_msg_leaves: list[str] = []
    leaf_values(en_msg, en_msg_leaves)

    print("=== UI messages (messages/{locale}.json) ===")
    for loc in LOCALES:
        path = ROOT / "messages" / f"{loc}.json"
        if not path.exists():
            print(f"{loc}: MISSING")
            continue
        loc_leaves: list[str] = []
        leaf_values(json.loads(path.read_text()), loc_leaves)
        r = ratio_translated(en_msg_leaves, loc_leaves)
        identical = sum(
            1
            for a, b in zip(en_msg_leaves, loc_leaves)
            if a == b and should_count(a)
        )
        print(f"{loc}: translated≈{r * 100:.1f}%  still-english={identical}")

    print("\n=== Content catalogs (content/{locale}/*.json) ===")
    for name in CONTENT_FILES:
        en_path = ROOT / "content/en" / name
        if not en_path.exists():
            continue
        en_leaves: list[str] = []
        leaf_values(json.loads(en_path.read_text()), en_leaves)
        print(f"\n--- {name} ({len(en_leaves)} leaves) ---")
        for loc in LOCALES:
            loc_path = ROOT / "content" / loc / name
            if not loc_path.exists():
                print(f"  {loc}: MISSING")
                continue
            loc_leaves: list[str] = []
            leaf_values(json.loads(loc_path.read_text()), loc_leaves)
            r = ratio_translated(en_leaves, loc_leaves)
            if r is None:
                print(f"  {loc}: SHAPE MISMATCH")
            else:
                print(f"  {loc}: translated≈{r * 100:.1f}%")


if __name__ == "__main__":
    main()
