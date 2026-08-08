#!/usr/bin/env python3
"""Translate JSON string leaves with free web engines (via `translators` package).

Usage:
  python3 scripts/translate-tree.py content/en/faq.json content/fr/faq.json fr
  python3 scripts/translate-tree.py --dir content/en --out-root content --locales fr,es --files faq.json --workers 4
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import translators as ts

ROOT = Path(__file__).resolve().parents[1]
CACHE_PATH = ROOT / "content" / ".cache" / "gtrans.json"

PROTECT = [
    "Avana",
    "Aave",
    "Uniswap",
    "Balancer",
    "Curve",
    "Aerodrome",
    "GHO",
    "AppKit",
    "LP",
    "AMM",
    "ETH",
    "WETH",
    "USDC",
    "BTC",
    "LINK",
    "APR",
    "APY",
    "LTV",
    "TVL",
    "DeFi",
    "ERC-20",
    "Sandbox",
    "ARFC",
    "Aave v4",
]

ENGINES = ["bing", "google", "mymemory"]

LOCALE_MAP = {
    "en": "en",
    "zh-CN": "zh",
    "zh-TW": "zh-TW",
    "hi": "hi",
    "es": "es",
    "ar": "ar",
    "fr": "fr",
    "bn": "bn",
    "pt": "pt",
    "ru": "ru",
    "ur": "ur",
    "id": "id",
    "de": "de",
    "ja": "ja",
    "fa": "fa",
    "sw": "sw",
    "vi": "vi",
    "tr": "tr",
    "ko": "ko",
    "ha": "ha",
    "it": "it",
    "th": "th",
    "pl": "pl",
    "uk": "uk",
    "nl": "nl",
    "he": "he",
}


def load_cache() -> dict:
    if CACHE_PATH.exists():
        try:
            return json.loads(CACHE_PATH.read_text())
        except Exception:
            return {}
    return {}


_cache_dirty = 0


def save_cache(cache: dict) -> None:
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False))


def protect(text: str) -> tuple[str, dict[str, str]]:
    mapping = {}
    out = text
    for i, token in enumerate(sorted(PROTECT, key=len, reverse=True)):
        if token in out:
            key = f"⟦P{i}⟧"
            mapping[key] = token
            out = out.replace(token, key)
    return out, mapping


def unprotect(text: str, mapping: dict[str, str]) -> str:
    out = text
    for key, token in mapping.items():
        out = out.replace(key, token)
        out = out.replace(key.replace("⟦", "⟦ ").replace("⟧", " ⟧"), token)
    return out


def cache_key(locale: str, text: str) -> str:
    return f"{locale}:{hashlib.sha1(text.encode('utf-8')).hexdigest()}"


def translate_once(text: str, target: str) -> str:
    last = None
    for engine in ENGINES:
        try:
            return ts.translate_text(
                text,
                translator=engine,
                from_language="en",
                to_language=target,
            )
        except Exception as e:
            last = e
            time.sleep(0.35)
    raise RuntimeError(f"all engines failed: {last}")


def translate_text(text: str, target: str, cache: dict) -> str:
    global _cache_dirty
    if not text or not str(text).strip():
        return text
    if not isinstance(text, str):
        return text
    if re.fullmatch(r"[\d\s\$\%\.\,\-\+\*/:#_@]+", text):
        return text
    if len(text) <= 2:
        return text

    ck = cache_key(target, text)
    if ck in cache:
        return cache[ck]

    protected, mapping = protect(text)
    parts = protected.split("\n\n")
    out_parts = []
    for part in parts:
        if not part.strip():
            out_parts.append(part)
            continue
        chunks = []
        if len(part) <= 900:
            chunks = [part]
        else:
            sentences = re.split(r"(?<=[.!?])\s+", part)
            buf = ""
            for s in sentences:
                if len(buf) + len(s) + 1 > 900:
                    if buf:
                        chunks.append(buf)
                    buf = s
                else:
                    buf = f"{buf} {s}".strip() if buf else s
            if buf:
                chunks.append(buf)

        translated_chunks = []
        for chunk in chunks:
            attempts = 0
            while True:
                try:
                    translated_chunks.append(translate_once(chunk, target))
                    break
                except Exception as e:
                    attempts += 1
                    if attempts >= 5:
                        print(f"  FAIL [{target}] leave EN: {e}", file=sys.stderr)
                        translated_chunks.append(chunk)
                        break
                    time.sleep(0.8 * attempts)
            time.sleep(0.04)
        out_parts.append(
            " ".join(translated_chunks) if len(translated_chunks) > 1 else translated_chunks[0]
        )

    result = unprotect("\n\n".join(out_parts), mapping)
    cache[ck] = result
    _cache_dirty += 1
    if _cache_dirty % 20 == 0:
        save_cache(cache)
    return result


def walk(node, target: str, cache: dict):
    if isinstance(node, dict):
        return {k: walk(v, target, cache) for k, v in node.items()}
    if isinstance(node, list):
        return [walk(v, target, cache) for v in node]
    if isinstance(node, str):
        return translate_text(node, target, cache)
    return node


def translate_file(src: Path, dest: Path, locale: str, cache: dict) -> None:
    src = src.resolve()
    dest = dest.resolve()
    target = LOCALE_MAP.get(locale, locale)
    if locale == "en" or target == "en":
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(src.read_text())
        return
    data = json.loads(src.read_text())
    print(f"[{locale}] {src.name} -> {target}", flush=True)
    out = walk(data, target, cache)
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
    save_cache(cache)
    print(f"[{locale}] wrote {dest}", flush=True)


def job(args_tuple):
    src, dest, locale = args_tuple
    cache = load_cache()
    translate_file(src, dest, locale, cache)
    return locale, str(dest)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("src", nargs="?")
    parser.add_argument("dest", nargs="?")
    parser.add_argument("locale", nargs="?")
    parser.add_argument("--dir")
    parser.add_argument("--out-root", default="content")
    parser.add_argument("--locales")
    parser.add_argument("--files")
    parser.add_argument("--workers", type=int, default=1)
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()

    cache = load_cache()

    if args.dir:
        en_dir = (ROOT / args.dir).resolve() if not Path(args.dir).is_absolute() else Path(args.dir)
        locales = [x.strip() for x in args.locales.split(",")]
        files = (
            [x.strip() for x in args.files.split(",")]
            if args.files
            else [p.name for p in sorted(en_dir.glob("*.json"))]
        )
        out_root = (ROOT / args.out_root).resolve()
        tasks = []
        for locale in locales:
            if locale == "en":
                continue
            for name in files:
                src = en_dir / name
                if not src.exists():
                    print("missing", src)
                    continue
                dest = out_root / locale / name
                if dest.exists() and not args.force and dest.stat().st_size > 100:
                    print(f"skip {dest}")
                    continue
                tasks.append((src, dest, locale))

        if args.workers <= 1:
            for t in tasks:
                translate_file(t[0], t[1], t[2], cache)
        else:
            with ThreadPoolExecutor(max_workers=args.workers) as ex:
                futs = [ex.submit(job, t) for t in tasks]
                for fut in as_completed(futs):
                    print("done", fut.result(), flush=True)
        return

    if not (args.src and args.dest and args.locale):
        parser.error("need src dest locale or --dir mode")
    translate_file(Path(args.src).resolve(), Path(args.dest).resolve(), args.locale, cache)


if __name__ == "__main__":
    main()
