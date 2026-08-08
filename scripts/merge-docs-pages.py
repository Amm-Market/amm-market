#!/usr/bin/env python3
"""Merge translated page objects into content/{locale}/docs.json.

Usage:
  python3 scripts/merge-docs-pages.py fr path/to/partial.json
  partial.json = { "architecture": {...}, "getting-started": {...}, ... }
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main() -> int:
    if len(sys.argv) < 3:
        print("usage: merge-docs-pages.py <locale> <partial.json> [more.json...]", file=sys.stderr)
        return 2
    locale = sys.argv[1]
    dest = ROOT / "content" / locale / "docs.json"
    data = json.loads(dest.read_text())
    en = json.loads((ROOT / "content/en/docs.json").read_text())
    for path in sys.argv[2:]:
        partial = json.loads(Path(path).read_text())
        for key, page in partial.items():
            if key not in en:
                print(f"unknown key {key}", file=sys.stderr)
                return 1
            data[key] = page
    dest.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"merged into {dest}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
