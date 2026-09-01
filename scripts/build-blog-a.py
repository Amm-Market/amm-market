#!/usr/bin/env python3
"""Build content/i18n/hand-translations/blog-a.json from hand-written translation parts."""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts._blog_a_translations_part1 import SHORT_23, SHORT_14, SHORT_FR
from scripts._blog_a_translations_part6 import LONG_5


def main() -> None:
    worklist = json.loads((ROOT / "content/i18n/worklist.json").read_text())
    blog_wl = worklist["blog.json"]
    keys = list(blog_wl.keys())[:100]

    out: dict[str, dict[str, dict[str, str]]] = {"blog.json": {}}

    for key in keys:
        locales = blog_wl[key]
        translations: dict[str, str] = {}

        if key in SHORT_23:
            source = SHORT_23[key]
        elif key in SHORT_14:
            source = SHORT_14[key]
        elif key in SHORT_FR:
            source = SHORT_FR[key]
        elif key in LONG_5:
            source = LONG_5[key]
        else:
            raise KeyError(f"Missing translations for: {key!r}")

        for loc in locales:
            if loc not in source:
                raise KeyError(f"Missing locale {loc!r} for: {key[:60]!r}...")
            translations[loc] = source[loc]

        out["blog.json"][key] = translations

    dest = ROOT / "content/i18n/hand-translations/blog-a.json"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")

    total_entries = sum(len(v) for v in out["blog.json"].values())
    print(f"Wrote {dest}")
    print(f"Strings: {len(out['blog.json'])}")
    print(f"Translation entries: {total_entries}")


if __name__ == "__main__":
    main()
