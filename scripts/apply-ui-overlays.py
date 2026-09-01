#!/usr/bin/env python3
"""Merge hand-written UI string overlays into messages/{locale}.json (no API)."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OVERLAYS = ROOT / "content" / "i18n" / "ui-overlays.json"


def deep_merge(base: dict, overlay: dict) -> dict:
    out = dict(base)
    for key, value in overlay.items():
        if key in out and isinstance(out[key], dict) and isinstance(value, dict):
            out[key] = deep_merge(out[key], value)
        elif (
            key in out
            and isinstance(out[key], list)
            and isinstance(value, list)
        ):
            merged = list(out[key])
            for index, item in enumerate(value):
                if item is None:
                    continue
                if index < len(merged):
                    if isinstance(merged[index], dict) and isinstance(item, dict):
                        merged[index] = deep_merge(merged[index], item)
                    else:
                        merged[index] = item
                else:
                    merged.append(item)
            out[key] = merged
        else:
            out[key] = value
    return out


def main() -> None:
    overlays = json.loads(OVERLAYS.read_text())
    for locale, patch in overlays.items():
        path = ROOT / "messages" / f"{locale}.json"
        if not path.exists():
            print("skip missing", locale)
            continue
        data = json.loads(path.read_text())
        merged = deep_merge(data, patch)
        path.write_text(json.dumps(merged, ensure_ascii=False, indent=2) + "\n")
        print("updated", path.name)


if __name__ == "__main__":
    main()
