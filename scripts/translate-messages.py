#!/usr/bin/env python3
"""Translate messages/*.json chrome catalogs for all non-en locales."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    locales = [
        x
        for x in "zh-CN,zh-TW,hi,es,ar,fr,bn,pt,ru,ur,id,de,ja,fa,sw,vi,tr,ko,ha,it,th,pl,uk,nl,he".split(
            ","
        )
    ]
    en = ROOT / "messages" / "en.json"
    # Reuse content translate pipeline via temp path under content/en
    src = ROOT / "content" / "en" / "messages-ui.json"
    src.write_text(en.read_text())

    cmd = [
        sys.executable,
        str(ROOT / "scripts" / "translate-fast.py"),
        "--dir",
        "content/en",
        "--out-root",
        "content",
        "--locales",
        ",".join(locales),
        "--files",
        "messages-ui.json",
        "--workers",
        "8",
        "--force",
    ]
    print("Running", " ".join(cmd), flush=True)
    subprocess.check_call(cmd, cwd=ROOT)

    for locale in locales:
        path = ROOT / "content" / locale / "messages-ui.json"
        if not path.exists():
            print("missing", path)
            continue
        dest = ROOT / "messages" / f"{locale}.json"
        data = json.loads(path.read_text())
        dest.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
        print("updated", dest.name)


if __name__ == "__main__":
    main()
