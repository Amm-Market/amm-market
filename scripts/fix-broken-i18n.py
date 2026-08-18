#!/usr/bin/env python3
"""Fix broken chrome MT damage and residual docs terminology."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load(p: Path):
    return json.loads(p.read_text(encoding="utf-8"))


def save(p: Path, data) -> None:
    p.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def set_path(obj, path: str, value: str) -> None:
    parts: list = []
    buf = ""
    i = 0
    while i < len(path):
        c = path[i]
        if c == ".":
            if buf:
                parts.append(buf)
                buf = ""
        elif c == "[":
            if buf:
                parts.append(buf)
                buf = ""
            j = path.index("]", i)
            parts.append(int(path[i + 1 : j]))
            i = j
        else:
            buf += c
        i += 1
    if buf:
        parts.append(buf)
    cur = obj
    for part in parts[:-1]:
        cur = cur[part]
    cur[parts[-1]] = value


def flatten(obj, path: str = ""):
    if isinstance(obj, dict):
        for k, v in obj.items():
            yield from flatten(v, f"{path}.{k}" if path else k)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            yield from flatten(v, f"{path}[{i}]")
    elif isinstance(obj, str):
        yield path, obj


def walk_set(obj, replacer, path: str = "") -> None:
    if isinstance(obj, dict):
        for k, v in obj.items():
            p = f"{path}.{k}" if path else k
            if isinstance(v, str):
                nv = replacer(p, v)
                if nv is not None:
                    obj[k] = nv
            else:
                walk_set(v, replacer, p)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            p = f"{path}[{i}]"
            if isinstance(v, str):
                nv = replacer(p, v)
                if nv is not None:
                    obj[i] = nv
            else:
                walk_set(v, replacer, p)


def replace_all_strings(obj, pairs) -> int:
    ops = 0

    def rec(node):
        nonlocal ops
        if isinstance(node, dict):
            for k, v in list(node.items()):
                if isinstance(v, str):
                    nv = v
                    for a, b in pairs:
                        if isinstance(a, re.Pattern):
                            nv2 = a.sub(b, nv)
                        else:
                            nv2 = nv.replace(a, b)
                        if nv2 != nv:
                            ops += 1
                            nv = nv2
                    node[k] = nv
                else:
                    rec(v)
        elif isinstance(node, list):
            for i, v in enumerate(node):
                if isinstance(v, str):
                    nv = v
                    for a, b in pairs:
                        if isinstance(a, re.Pattern):
                            nv2 = a.sub(b, nv)
                        else:
                            nv2 = nv.replace(a, b)
                        if nv2 != nv:
                            ops += 1
                            nv = nv2
                    node[i] = nv
                else:
                    rec(v)

    rec(obj)
    return ops


HASH = re.compile(r"^[a-z0-9]{16,}$")
TOKEN = re.compile(r"[⟦⟧]")

EXPLICIT = {
    "fr": {
        "common.mega.openMultiplyDesc": "Utilisez des positions AMM comme collatéral pour une exposition gérée dans le pool.",
        "common.mega.reviewModelDesc": "Comment le Hub, les Spokes, la tarification et les contrôles s'articulent.",
        "common.docs.items.borrowSpoke": "Borrow Spoke",
        "common.docs.items.lendSpoke": "Lend Spoke",
        "common.docs.items.allowedPools": "Pools LP autorisés",
    },
    "de": {
        "common.mega.reviewModelDesc": "Wie Hub, Spokes, Preisgestaltung und Kontrollen zusammenspielen.",
        "common.docs.items.borrowSpoke": "Borrow Spoke",
        "common.docs.items.lendSpoke": "Lend Spoke",
        "common.nav.aaveArfc": "Aave ARFC",
        "common.footer.twitter": "Twitter",
        "common.footer.github": "GitHub",
        "meta.team": "Avana Team",
    },
    "nl": {
        "common.mega.openMultiplyDesc": "Gebruik AMM-posities als onderpand voor beheerde exposure in de pool.",
        "common.nav.aaveArfc": "Aave ARFC",
        "common.nav.privacy": "Privacy",
        "common.footer.github": "GitHub",
        "common.footer.telegram": "Telegram",
        "common.tags.product": "Product",
        "common.tags.protocol": "Protocol",
        "meta.team": "Avana Team",
    },
    "it": {
        "common.docs.items.allowedPools": "Pool LP consentiti",
        "common.nav.aaveArfc": "Aave ARFC",
        "common.nav.privacy": "Privacy",
        "common.footer.twitter": "Twitter",
        "common.footer.github": "GitHub",
    },
    "es": {"common.nav.aaveArfc": "Aave ARFC"},
    "ar": {"common.nav.aaveArfc": "Aave ARFC"},
    "ha": {"common.nav.aaveArfc": "Aave ARFC"},
    "ja": {
        "common.nav.aaveArfc": "Aave ARFC",
        "common.footer.github": "GitHub",
    },
    "ko": {"common.nav.aaveArfc": "Aave ARFC"},
    "pl": {
        "common.nav.aaveArfc": "Aave ARFC",
        "common.footer.github": "GitHub",
        "common.footer.telegram": "Telegram",
    },
    "pt": {
        "common.nav.aaveArfc": "Aave ARFC",
        "common.footer.social": "Social",
        "common.footer.twitter": "Twitter",
        "common.footer.github": "GitHub",
    },
    "ru": {"common.nav.aaveArfc": "Aave ARFC"},
    "sw": {"common.nav.aaveArfc": "Aave ARFC"},
    "th": {
        "common.nav.aaveArfc": "Aave ARFC",
        "common.footer.github": "GitHub",
    },
    "tr": {"common.nav.aaveArfc": "Aave ARFC"},
    "vi": {
        "common.nav.aaveArfc": "Aave ARFC",
        "common.footer.twitter": "Twitter",
        "common.footer.github": "GitHub",
    },
}

BAD_SUBS = [
    (re.compile(r"\bEmprunter un rayon\b", re.I), "Borrow Spoke"),
    (re.compile(r"\bRayon de prêt\b", re.I), "Lend Spoke"),
    (re.compile(r"\bLeihspeiche\b", re.I), "Borrow Spoke"),
    (re.compile(r"\bVerleihen Sie Speiche\b", re.I), "Lend Spoke"),
    (re.compile(r"\bles rayons\b", re.I), "les Spokes"),
    (re.compile(r"\bSpeichen\b"), "Spokes"),
    (re.compile(r"\ben piscine\b", re.I), "dans le pool"),
    (re.compile(r"\bPiscines autorisées LP\b", re.I), "Pools LP autorisés"),
    (re.compile(r"\bPiscine consentite LP\b", re.I), "Pool LP consentiti"),
    (re.compile(r"\bin het zwembad\b", re.I), "in de pool"),
]


def fix_chrome() -> int:
    en_ui = load(ROOT / "content/en/messages-ui.json")
    en_flat = dict(flatten(en_ui))
    ops = 0

    for loc_dir in sorted((ROOT / "content").iterdir()):
        if not loc_dir.is_dir() or loc_dir.name == "en":
            continue
        loc = loc_dir.name
        for rel in [f"content/{loc}/messages-ui.json", f"messages/{loc}.json"]:
            p = ROOT / rel
            if not p.exists():
                continue
            data = load(p)
            for path, val in EXPLICIT.get(loc, {}).items():
                if path in en_flat:
                    try:
                        set_path(data, path, val)
                        ops += 1
                    except (KeyError, TypeError, IndexError) as e:
                        print(f"set fail {loc} {path}: {e}")

            def replacer(path: str, s: str, _en=en_flat):
                nonlocal ops
                if HASH.match(s.strip()) or TOKEN.search(s):
                    if path in _en:
                        ops += 1
                        return _en[path]
                out = s
                for pat, rep in BAD_SUBS:
                    nout = pat.sub(rep, out)
                    if nout != out:
                        out = nout
                if out != s:
                    ops += 1
                    return out
                return None

            walk_set(data, replacer)
            save(p, data)
    return ops


def fix_docs() -> int:
    ops = 0
    locale_pairs = {
        "he": [
            ("מסגרת פירוק", "מסגרת חיסול"),
            ("נקודת כניסת הפירוק", "נקודת הכניסה לחיסול"),
            ("נקודת כניסת פירוק", "נקודת כניסה לחיסול"),
            ("זכאי לפירוק", "זכאי לחיסול"),
            ("לפירוק", "לחיסול"),
            ("הפירוק", "החיסול"),
            ("פירוק", "חיסול"),
            ("בריאות ופירוק", "בריאות וחיסול"),
        ],
        "fa": [
            ("چارچوب انحلال", "چارچوب لیکوییدیشن"),
            ("مرز انحلال", "آستانه لیکوییدیشن"),
            ("برای انحلال", "برای لیکوییدیشن"),
            ("نقطه ورود انحلال", "نقطه ورود لیکوییدیشن"),
            ("آستانه انحلال", "آستانه لیکوییدیشن"),
            ("انحلال", "لیکوییدیشن"),
        ],
        "ur": [
            ("فیس کا علاج", "فیسوں کا سلوک"),
        ],
        "de": [
            ("Kerninsight", "Kerneinsicht"),
            ("Fee-Behandlung", "Behandlung von Gebühren"),
            ("LP-Collateral-Verhalten", "Verhalten von LP-Sicherheiten"),
            ("LP-Collateral", "LP-Sicherheiten"),
            ("Hub-Ausleihe", "Hub-Kreditaufnahme"),
        ],
        "ja": [
            (
                "Avana の基本概念を理解すること、これには LP 担保の挙動、保守的評価、Hub の借入、及び清算が含まれます。",
                "Avanaの基本概念：LP担保の挙動、保守的な評価、Hubでの借入、そして清算。",
            ),
        ],
        "ko": [
            (
                "Avana의 핵심 개념을 이해하기, 여기에는 LP 담보 행동, 보수적 평가, Hub 대출, 및 청산이 포함됩니다.",
                "Avana의 핵심 개념: LP 담보 행동, 보수적 평가, Hub 대출, 청산.",
            ),
        ],
        "sw": [
            ("viwango vya kufilisishwa", "viwango vya likwidisheni"),
            ("mpaka wa kufilisi", "mpaka wa likwidisheni"),
            ("kufilisishwa", "likwidisheni"),
            ("kufilisi", "likwidisheni"),
            ("Ufilisi", "Likwidisheni"),
            ("ufilisi", "likwidisheni"),
        ],
        "ha": [
            ("Core Insight", "Fahimta Ta Asali"),
            ("Oracle & Kima", "Oracle da ƙima"),
            ("Lafiya & Liquidation", "Lafiya da liquidashon"),
            ("Maganin Kuɗi", "Yadda ake kula da kuɗaɗen kudin shiga"),
            ("Tsarin Liquidation", "Tsarin liquidashon"),
            (re.compile(r"\bLiquidation\b"), "liquidashon"),
            (re.compile(r"\bliquidation\b"), "liquidashon"),
            ("ɗaukar kaya na LP", "doka ta LP"),
            ("halayen haɗin kai na LP", "halayen doka ta LP"),
        ],
    }

    for loc, pairs in locale_pairs.items():
        p = ROOT / f"content/{loc}/docs.json"
        data = load(p)
        ops += replace_all_strings(data, pairs)
        save(p, data)
        print(f"docs {loc} ok")

    pl_title_map = {
        "Protocol Architecture - Borrow Spoke": "Architektura protokołu — Borrow Spoke",
        "Getting Started - Deposit LP": "Pierwsze kroki — wpłata LP",
        "Safety Mechanisms - Risk Framework": "Mechanizmy bezpieczeństwa — ramy ryzyka",
        "Legal & Compliance - Security Disclosures": "Prawo i zgodność — ujawnienia bezpieczeństwa",
        "Liquidation Framework": "Ramy likwidacji",
        "Core reguły": "Kluczowe reguły",
        "Główny insight": "Kluczowy wniosek",
    }
    pl = load(ROOT / "content/pl/docs.json")
    ops += replace_all_strings(pl, list(pl_title_map.items()))
    save(ROOT / "content/pl/docs.json", pl)
    print("docs pl ok")
    return ops


def verify() -> None:
    bad = re.compile(
        r"⟦|⟧|^[a-z0-9]{16,}$|\brayons\b|Speiche|Leihspeiche|zwembad|piscine|"
        r"Piscine consentite|Emprunter un rayon|Rayon de prêt|Verleihen Sie Speiche",
        re.I,
    )
    print("\n=== chrome residual ===")
    for loc_dir in sorted((ROOT / "content").iterdir()):
        if not loc_dir.is_dir() or loc_dir.name == "en":
            continue
        p = loc_dir / "messages-ui.json"
        if not p.exists():
            continue
        hits = []
        for path, s in flatten(load(p)):
            if bad.search(s) or HASH.match(s.strip()):
                hits.append((path, s[:90]))
        if hits:
            print(loc_dir.name, hits[:8])
    print("\n=== docs residual ===")
    checks = {
        "he": "פירוק",
        "fa": "انحلال",
        "fr": "rayon",
        "de": "Kerninsight",
        "pl": "Protocol Architecture - Borrow Spoke",
        "ur": "فیس کا علاج",
    }
    for loc, needle in checks.items():
        data = load(ROOT / f"content/{loc}/docs.json")
        n = sum(1 for _, s in flatten(data) if needle in s)
        print(f"{loc} '{needle}': {n}")


def main() -> None:
    c = fix_chrome()
    d = fix_docs()
    print(f"chrome ops={c} docs ops={d}")
    verify()


if __name__ == "__main__":
    main()
