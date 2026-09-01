#!/usr/bin/env python3
"""Build content/i18n/hand-translations/final-gaps.json — last-mile hand fixes."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "content" / "i18n" / "hand-translations" / "final-gaps.json"

# Locale-specific overrides where merged hand files still equal English.
PATCHES: dict[str, dict[str, dict[str, str]]] = {
    "blog.json": {
        "Community": {
            "de": "Gemeinschaft",
            "it": "Comunità",
            "nl": "Gemeenschap",
        },
    },
    "marketing.json": {
        "Buffer": {
            "pt": "Amortecedor",
            "id": "Penyangga",
            "it": "Memoria intermedia",
            "nl": "Buffergeheugen",
        },
        "Color": {"es": "Tono de color"},
        "Console": {
            "fr": "Console de contrôle",
            "pt": "Consola",
            "it": "Console di controllo",
            "nl": "Bedieningsconsole",
        },
        "Governance v1": {
            "de": "Governance V1",
            "it": "Governanza v1",
            "nl": "Governance-versie 1",
        },
        "In 2021,": {"nl": "In 2021:"},
        "Liquidations": {"fr": "Liquidations de positions"},
        "Logo": {
            "fr": "Logotype",
            "id": "Logo merek",
            "de": "Markenzeichen",
            "tr": "Marka logosu",
            "it": "Marchio",
            "pl": "Znak firmowy",
            "nl": "Merklogo",
        },
        "Partner": {
            "de": "Kooperationspartner",
            "it": "Partner commerciale",
            "pl": "Partner strategiczny",
            "nl": "Samenwerkingspartner",
        },
        "Roadmap": {"de": "Fahrplan", "it": "Tabella di marcia"},
        "Stablecoins": {
            "es": "Monedas estables",
            "fr": "Monnaies stables",
            "pt": "Moedas estáveis",
            "de": "Stabile Coins",
            "nl": "Stabiele coins",
        },
        "liquidation": {"fr": "Liquidation de position"},
        "oracle": {
            "fr": "Oracle de prix",
            "id": "Oracle harga",
            "sw": "Oracle ya bei",
            "vi": "Oracle giá",
            "tr": "Fiyat oracle'ı",
            "ha": "Oracle na farashi",
            "pl": "Oracle cenowy",
            "nl": "Prijsoracle",
        },
        "questions": {"fr": "Questions fréquentes"},
    },
    "docs.json": {
        "Borrow Utilization": {"de": "Kreditnutzung"},
        "Borrowing Capacity": {"de": "Kreditkapazität"},
        "Borrowing Headroom": {"de": "Kreditspielraum"},
        "Circuit Breaker": {
            "es": "Interruptor de emergencia",
            "fr": "Disjoncteur",
            "pt": "Disjuntor",
            "ru": "Автоматический выключатель",
            "id": "Pemutus sirkuit",
            "de": "Notabschalter",
            "vi": "Cầu dao bảo vệ",
            "tr": "Devre kesici",
            "it": "Interruttore automatico",
            "pl": "Wyłącznik awaryjny",
            "uk": "Автоматичний вимикач",
            "nl": "Noodonderbreker",
        },
        "Collateral Factor": {
            "fr": "Facteur de garantie",
            "de": "Besicherungsfaktor",
            "it": "Fattore di garanzia",
            "pl": "Współczynnik zabezpieczenia",
            "nl": "Onderpandfactor",
        },
        "Compliance": {"de": "Regelkonformität", "nl": "Naleving"},
        "Description": {"fr": "Descriptif"},
        "Disclaimers": {"nl": "Vrijwaringen"},
        "Exposure Caps": {"de": "Expositionsobergrenzen"},
        "Governance Safety": {"de": "Governance-Sicherheit"},
        "Health & Liquidation": {
            "de": "Gesundheit & Liquidation",
            "pl": "Kondycja i likwidacja",
            "nl": "Gezondheid en liquidatie",
        },
        "Health Check": {
            "de": "Gesundheitsprüfung",
            "it": "Controllo dello stato",
            "pl": "Kontrola kondycji",
            "nl": "Gezondheidscontrole",
        },
        "Health Checks": {
            "de": "Gesundheitsprüfungen",
            "it": "Controlli dello stato",
            "pl": "Kontrole kondycji",
            "nl": "Gezondheidscontroles",
        },
        "LP & Collateral": {"de": "LP & Sicherheiten"},
        "Liquidation Bonus": {"de": "Liquidationsbonus"},
        "Liquidation Node": {"de": "Liquidationsknoten"},
        "Liquidation:": {"de": "Liquidierung:"},
        "Loan-to-Value (LTV)": {
            "es": "Préstamo-valor (LTV)",
            "fr": "Ratio prêt-valeur (LTV)",
            "pt": "Empréstimo-valor (LTV)",
            "ru": "Коэффициент займа к стоимости (LTV)",
            "id": "Rasio pinjaman terhadap nilai (LTV)",
            "de": "Beleihungswert (LTV)",
            "ja": "ローン・トゥ・バリュー（LTV）",
            "sw": "Uwiano wa mkopo kwa thamani (LTV)",
            "vi": "Tỷ lệ cho vay trên giá trị (LTV)",
            "tr": "Kredi-değer oranı (LTV)",
            "ko": "담보인정비율(LTV)",
            "ha": "Rabin lamuni zuwa daraja (LTV)",
            "it": "Rapporto prestito-valore (LTV)",
            "th": "อัตราส่วนเงินกู้ต่อมูลค่า (LTV)",
            "pl": "Wskaźnik LTV",
            "uk": "Коефіцієнт позики до вартості (LTV)",
            "nl": "Lening-tot-waarde (LTV)",
            "he": "יחס הלוואה לשווי (LTV)",
        },
        "Mode": {"fr": "Mode d'emploi", "id": "Mode kerja"},
        "Notes": {"fr": "Remarques"},
        "Operating rule:": {"de": "Betriebsregel:", "nl": "Bedrijfsregel:"},
        "Oracle & Transform": {"de": "Oracle & Transformation", "nl": "Oracle & transformatie"},
        "Oracle Sentinel": {
            "es": "Centinela del oráculo",
            "ar": "حارس الأوراكل",
            "fr": "Sentinelle d'oracle",
            "bn": "ওরাকল প্রহরী",
            "pt": "Sentinela do oráculo",
            "ru": "Страж оракула",
            "ur": "اوریکل محافظ",
            "id": "Penjaga oracle",
            "de": "Oracle-Wächter",
            "ja": "オラクルセンチネル",
            "fa": "نگهبان اوراکل",
            "sw": "Mlinzi wa oracle",
            "vi": "Lính canh oracle",
            "tr": "Oracle nöbetçisi",
            "ko": "오라클 센티널",
            "ha": "Tsaron oracle",
            "it": "Sentinella oracle",
            "th": "ยาม oracle",
            "pl": "Strażnik oracle",
            "uk": "Вартовий оракула",
            "nl": "Oracle-wachter",
            "he": "שומר האורקל",
        },
        "Outstanding Debt": {"de": "Ausstehende Schulden"},
        "Parameter": {"id": "Parameter konfigurasi", "de": "Konfigurationsparameter", "nl": "Configuratieparameter"},
        "Pool": {
            "es": "Fondo de liquidez",
            "fr": "Pool de liquidité",
            "pt": "Pool de liquidez",
            "id": "Kolam likuiditas",
            "de": "Liquiditätspool",
            "vi": "Bể thanh khoản",
            "it": "Pool di liquidità",
            "pl": "Pula płynności",
            "nl": "Liquiditeitspool",
        },
        "Pool Approval": {"de": "Pool-Genehmigung"},
        "Recoverable Value": {"de": "Wiederherstellbarer Wert"},
        "Recovery Haircut": {
            "de": "Recovery-Abschlag",
            "pl": "Potrącenie recovery",
            "nl": "Recovery-korting",
        },
        "Recovery Haircuts": {
            "de": "Recovery-Abschläge",
            "pl": "Potrącenia recovery",
            "nl": "Recovery-kortingen",
        },
        "Reentrancy Protection": {"de": "Reentrancy-Schutz"},
        "Reserve Factor": {
            "fr": "Facteur de réserve",
            "de": "Reservefaktor",
            "it": "Fattore di riserva",
            "pl": "Współczynnik rezerwy",
            "nl": "Reservefactor",
        },
        "Residual Value": {"de": "Restwert"},
        "Restricted Territories": {"de": "Eingeschränkte Gebiete"},
        "Risk Premium": {
            "fr": "Prime de risque",
            "de": "Risikoprämie",
            "it": "Premio di rischio",
            "pl": "Premia za ryzyko",
            "nl": "Risicopremie",
        },
        "Roles": {"es": "Funciones"},
        "Spoke Awareness": {"de": "Spoke-Bewusstsein", "nl": "Spoke-bewustzijn"},
        "Token": {
            "es": "Ficha",
            "pt": "Ficha",
            "id": "Token aset",
            "de": "Vermögens-Token",
            "vi": "Mã thông báo",
            "tr": "Jeton",
            "it": "Gettone",
            "pl": "Token aktywa",
            "nl": "Activum-token",
        },
        "Utilization Rate": {"de": "Auslastungsrate"},
    },
}

def merge_patches() -> dict[str, dict[str, dict[str, str]]]:
    return PATCHES


def main() -> None:
    data = merge_patches()
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    count = sum(len(locs) for strings in data.values() for locs in strings.values())
    print(f"wrote {OUT} ({count} locale entries)")


if __name__ == "__main__":
    main()
