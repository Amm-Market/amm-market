#!/usr/bin/env python3
"""Apply hand-written content translations from content/i18n/hand-translations/*.json"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HAND_DIR = ROOT / "content" / "i18n" / "hand-translations"
LOCALES = [
    x.strip()
    for x in "zh-CN,zh-TW,hi,es,ar,fr,bn,pt,ru,ur,id,de,ja,fa,sw,vi,tr,ko,ha,it,th,pl,uk,nl,he".split(",")
]
SKIP_KEYS = {"id", "slug", "image", "href", "key"}
SKIP_VAL = re.compile(
    r"^(/images/|/developers|hero\.|#[\w-]+|[a-z0-9]+(?:-[a-z0-9]+)+$|[\w\.\-]+\.(png|jpg|svg|tsx?|json)$)",
    re.I,
)
PROPER = {
    "Avana", "Sandbox", "Aave v4", "DeFi", "AppKit", "GitHub", "FAQ", "Twitter", "Telegram",
    "Privacy", "Product", "Protocol", "Uniswap", "Curve", "Balancer", "Aerodrome",
    "ChatGPT", "Claude", "Grok", "Perplexity", "Markdown", "LinkedIn", "X", "APR", "APY",
    "LTV", "TVL", "AMM", "LP", "ETH", "USDC", "USDT", "WETH", "GHO", "API", "UI", "DEX",
    "MEV", "IL", "NFT", "DAO", "EVM", "SDK", "JSON", "URL", "LPs", "Diatype", "Outfit", "AaBbCc",
}
DATE_RE = re.compile(
    r"^(January|February|March|April|May|June|July|August|September|October|November|December) \d+, \d{4}$"
)


def should_translate(path: str, value: str) -> bool:
    value = value.strip()
    if len(value) < 2 or value in PROPER:
        return False
    leaf = path.split(".")[-1].replace("]", "")
    if leaf in SKIP_KEYS or leaf.endswith("Id"):
        return False
    if SKIP_VAL.match(value):
        return False
    if "className" in value or "w-full" in value or "max-w-" in value:
        return False
    if DATE_RE.match(value):
        return False
    if re.fullmatch(r"[\d\s\$\%\.\,\-\+\*/:#_@|]+", value):
        return False
    return True


def load_maps() -> dict[str, dict[str, dict[str, str]]]:
    """file -> english -> locale -> translation"""
    merged: dict[str, dict[str, dict[str, str]]] = {}
    if not HAND_DIR.exists():
        return merged
    paths = sorted(p for p in HAND_DIR.glob("*.json") if p.name != "final-gaps.json")
    final = HAND_DIR / "final-gaps.json"
    if final.exists():
        paths.append(final)

    for path in paths:
        chunk = json.loads(path.read_text())
        for fname, strings in chunk.items():
            merged.setdefault(fname, {})
            for en, locales in strings.items():
                merged[fname].setdefault(en, {})
                merged[fname][en].update(locales)
    return merged


def apply_file(fname: str, maps: dict[str, dict[str, str]]) -> int:
    en_path = ROOT / "content" / "en" / fname
    if not en_path.exists():
        return 0
    en_data = json.loads(en_path.read_text())
    replacements = 0

    for locale in LOCALES:
        loc_path = ROOT / "content" / locale / fname
        loc_data = json.loads(loc_path.read_text())

        def deep_patch(en_node, loc_node, path: str = ""):
            nonlocal replacements
            if isinstance(en_node, dict) and isinstance(loc_node, dict):
                for key in en_node:
                    if key in loc_node:
                        child_path = f"{path}.{key}" if path else key
                        loc_node[key] = deep_patch(en_node[key], loc_node[key], child_path)
                return loc_node
            if isinstance(en_node, list) and isinstance(loc_node, list):
                return [
                    deep_patch(en_item, loc_item, f"{path}[{index}]")
                    for index, (en_item, loc_item) in enumerate(zip(en_node, loc_node))
                ]
            if isinstance(en_node, str) and isinstance(loc_node, str):
                if (
                    en_node == loc_node
                    and should_translate(path, en_node)
                    and en_node in maps
                    and locale in maps[en_node]
                ):
                    replacements += 1
                    return maps[en_node][locale]
            return loc_node

        loc_data = deep_patch(en_data, loc_data)
        loc_path.write_text(json.dumps(loc_data, ensure_ascii=False, indent=2) + "\n")

    return replacements


def main() -> None:
    maps_by_file = load_maps()
    total = 0
    for fname, maps in maps_by_file.items():
        count = apply_file(fname, maps)
        print(f"{fname}: applied {count} replacements")
        total += count
    print(f"total replacements: {total}")


if __name__ == "__main__":
    main()
