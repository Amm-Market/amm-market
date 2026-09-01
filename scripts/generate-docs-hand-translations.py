#!/usr/bin/env python3
"""Generate hand-written docs.json translations for content/i18n/hand-translations/."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WORKLIST = ROOT / "content" / "i18n" / "worklist.json"
OUT = ROOT / "content" / "i18n" / "hand-translations" / "docs.json"

ALL = [
    "ar", "bn", "de", "es", "fa", "fr", "ha", "he", "hi", "id", "it", "ja", "ko",
    "nl", "pl", "pt", "ru", "sw", "th", "tr", "uk", "ur", "vi", "zh-CN", "zh-TW",
]

# locale -> key -> translation (from messages/common docs items where applicable)
MSG = {
    "ar": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "عامل الصحة",
           "collateralFactors": "عوامل الضمان", "riskFramework": "إطار المخاطر", "priceOracles": "أوراكل الأسعار",
           "allowedPools": "مجمعات LP المسموح بها", "bugBounty": "مكافأة الثغرات", "legalDisclaimer": "إخلاء مسؤولية قانوني",
           "borrowAssets": "اقتراض الأصول", "withdrawCollateral": "سحب الضمان", "depositLp": "إيداع LP",
           "claimLpFees": "المطالبة برسوم LP", "liquidators": "المصفّون", "liquidationFlow": "تدفق التصفية",
           "glossary": "قائمة المصطلحات", "keyConcepts": "المفاهيم الرئيسية", "contractsSecurity": "العقود والأمان",
           "insuranceFunds": "صناديق التأمين", "platformFees": "رسوم المنصة", "incentives": "برامج الحوافز",
           "manageLoans": "إدارة القروض", "repayLoans": "سداد القروض"},
    "bn": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "স্বাস্থ্য ফ্যাক্টর",
           "collateralFactors": "জামিন ফ্যাক্টর", "riskFramework": "ঝুঁকি কাঠামো", "priceOracles": "মূল্য ওরাকল",
           "allowedPools": "অনুমোদিত LP পুল", "bugBounty": "বাগ বাউন্টি", "legalDisclaimer": "আইনি দাবিত্যাগ",
           "borrowAssets": "সম্পদ ধার নিন", "withdrawCollateral": "জামানত উত্তোলন", "depositLp": "LP জমা",
           "claimLpFees": "LP ফি দাবি", "glossary": "শব্দকোষ", "keyConcepts": "মূল ধারণা",
           "termsOfService": "সেবার শর্তাবলী", "privacyPolicy": "গোপনীয়তা নীতি", "termsOfUse": "ব্যবহারের শর্তাবলী",
           "restrictedTerritories": "নিষিদ্ধ অঞ্চল"},
    "de": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "Health Factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Rechtlicher Hinweis",
           "borrowAssets": "Assets leihen", "withdrawCollateral": "Sicherheiten abheben", "depositLp": "LP einzahlen",
           "claimLpFees": "LP-Gebühren beanspruchen", "liquidators": "Liquidatoren", "liquidationFlow": "Liquidationsablauf",
           "glossary": "Glossar", "keyConcepts": "Schlüsselkonzepte", "contractsSecurity": "Verträge & Sicherheit",
           "insuranceFunds": "Versicherungsfonds", "platformFees": "Plattformgebühren", "incentives": "Anreizprogramme",
           "manageLoans": "Kredite verwalten", "repayLoans": "Kredite zurückzahlen", "introduction": "Einführung",
           "roles": "Rollen", "notes": "Hinweise", "description": "Beschreibung", "architecture": "Architektur",
           "compliance": "Compliance", "parameter": "Parameter", "critical": "Kritisch", "high": "Hoch",
           "mediumLow": "Mittel / Niedrig", "token": "Token", "pool": "Pool", "mode": "Modus",
           "borrow": "Leihen:", "repay": "Zurückzahlen:", "healthCheck": "Health-Check:", "liquidation": "Liquidation:",
           "debtShares": "Schuldenanteile:", "disclaimers": "Haftungsausschlüsse"},
    "es": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "Health Factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Aviso legal",
           "borrowAssets": "Pedir activos prestados", "withdrawCollateral": "Retirar garantía", "depositLp": "Depositar LP",
           "claimLpFees": "Reclamar comisiones LP", "liquidators": "Liquidadores", "liquidationFlow": "Flujo de liquidación",
           "glossary": "Glosario", "keyConcepts": "Conceptos clave", "contractsSecurity": "Contratos y seguridad",
           "introduction": "Introducción", "roles": "Roles", "borrow": "Pedir prestado:", "repay": "Reembolsar:",
           "healthCheck": "Comprobación de health factor:", "liquidation": "Liquidación:", "debtShares": "Participaciones de deuda:",
           "appkitGuide": "Guía de AppKit", "ukraine": "Ucrania (regiones de Crimea, Donetsk y Luhansk)",
           "usa": "Estados Unidos de América", "january2026": "enero de 2026", "termsOfUse": "Términos de uso",
           "termsOfService": "Términos del servicio", "privacyPolicy": "Política de privacidad"},
    "fa": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "سلب مسئولیت قانونی",
           "borrowAssets": "وام‌گیری دارایی‌ها", "withdrawCollateral": "برداشت وثیقه", "depositLp": "واریز LP",
           "claimLpFees": "دریافت کارمزد LP", "glossary": "واژه‌نامه", "keyConcepts": "مفاهیم کلیدی",
           "january2026": "ژانویه ۲۰۲۶", "pool": "Pool", "token": "Token"},
    "fr": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "Health Factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Avertissement juridique",
           "borrowAssets": "Emprunter des actifs", "withdrawCollateral": "Retirer la garantie", "depositLp": "Déposer LP",
           "claimLpFees": "Réclamer les frais LP", "liquidators": "Liquidateurs", "liquidationFlow": "Flux de liquidation",
           "glossary": "Glossaire", "keyConcepts": "Concepts clés", "introduction": "Introduction",
           "notes": "Notes", "description": "Description", "architecture": "Architecture",
           "borrowingCapacity": "Capacité d'emprunt", "token": "Jeton", "pool": "Pool", "mode": "Mode"},
    "ha": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Bayanin shari'a",
           "borrowAssets": "Aro kadarori", "withdrawCollateral": "Cire jingina", "depositLp": "Ajiye LP",
           "claimLpFees": "Nemi kuɗin LP", "liquidators": "Masu share kamfani", "liquidationFlow": "Tsarin share kamfani",
           "glossary": "Kamus", "keyConcepts": "Muhimman ra'ayoyi", "liquidation": "Share kamfani:",
           "collateralFactor": "Collateral Factor", "riskPremium": "Risk Premium", "reserveFactor": "Reserve Factor",
           "oracleInterface": "Oracle Interface", "interfaceVsProtocol": "Interface vs Protocol",
           "multiLayer": "Multi-Layer Architecture", "oracleSource": "Oracle Source", "coreInsight": "Core Insight",
           "multiPosition": "Multi-Position Account", "liquidationDesign": "Liquidation Design",
           "coreContractSurfaces": "Core Contract Surfaces",
           "routineRisk": "Canje-canjen haɗari na yau da kullum suna aiwatuwa kawai lokacin da suka kasance a cikin iyakokin manufofi da aka ayyana kuma sun wuce binciken tabbatarwa.",
           "frameworkChecks": "Binciken tsarin yana tabbatar da cewa sabuntawa tana kasancewa a cikin iyakokin da aka ayyana da iyakokin manufofi da aka amince da su.",
           "oracleValuation": "Oracle & Valuation"},
    "he": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "הצהרה משפטית",
           "borrowAssets": "הלוואת נכסים", "withdrawCollateral": "משיכת בטוחה", "depositLp": "הפקדת LP",
           "claimLpFees": "תביעת עמלות LP", "liquidators": "מפרקים", "liquidationFlow": "תהליך חיסול",
           "glossary": "מילון מונחים", "keyConcepts": "מושגי מפתח", "termsOfService": "תנאי שירות",
           "privacyPolicy": "מדיניות פרטיות", "token": "אסימון", "pool": "בריכה", "mode": "מצב"},
    "hi": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "कानूनी अस्वीकरण",
           "borrowAssets": "संपत्ति उधार लें", "withdrawCollateral": "जमानत निकालें", "depositLp": "LP जमा करें",
           "claimLpFees": "LP शुल्क दावा करें", "glossary": "शब्दकोष", "keyConcepts": "मुख्य अवधारणाएँ",
           "termsOfService": "सेवा की शर्तें", "privacyPolicy": "गोपनीयता नीति", "termsOfUse": "उपयोग की शर्तें",
           "restrictedTerritories": "प्रतिबंधित क्षेत्र", "january2026": "जनवरी 2026"},
    "id": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Penafian hukum",
           "borrowAssets": "Pinjam aset", "withdrawCollateral": "Tarik jaminan", "depositLp": "Setor LP",
           "claimLpFees": "Klaim biaya LP", "glossary": "Glosarium", "keyConcepts": "Konsep utama",
           "termsOfService": "Ketentuan layanan", "privacyPolicy": "Kebijakan privasi", "termsOfUse": "Ketentuan penggunaan",
           "restrictedTerritories": "Wilayah terbatas", "january2026": "Januari 2026", "parameter": "Parameter",
           "pool": "Pool", "token": "Token", "mode": "Mode"},
    "it": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Disclaimer legale",
           "borrowAssets": "Prendere in prestito asset", "withdrawCollateral": "Ritirare garanzia", "depositLp": "Depositare LP",
           "claimLpFees": "Riscuotere commissioni LP", "glossary": "Glossario", "keyConcepts": "Concetti chiave",
           "privacyPolicy": "Informativa sulla privacy", "token": "Token", "pool": "Pool", "mode": "Modo",
           "routerContract": "Contratto router", "compliance": "Conformità", "disclosure": "Informativa",
           "riskRoles": "Ruoli di rischio Avana"},
    "ja": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "法的免責事項",
           "borrowAssets": "資産を借りる", "withdrawCollateral": "担保を引き出す", "depositLp": "LPを預け入れる",
           "claimLpFees": "LP手数料を請求", "glossary": "用語集", "keyConcepts": "主要な概念",
           "critical": "重大", "high": "高", "mediumLow": "中 / 低", "token": "トークン", "pool": "プール"},
    "ko": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "법적 고지",
           "borrowAssets": "자산 차입", "withdrawCollateral": "담보 인출", "depositLp": "LP 예치",
           "claimLpFees": "LP 수수료 청구", "glossary": "용어집", "keyConcepts": "핵심 개념",
           "critical": "심각", "high": "높음", "mediumLow": "중간 / 낮음"},
    "nl": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Juridische disclaimer",
           "borrowAssets": "Activa lenen", "withdrawCollateral": "Onderpand opnemen", "depositLp": "LP storten",
           "claimLpFees": "LP-kosten claimen", "glossary": "Woordenlijst", "keyConcepts": "Belangrijke concepten",
           "january2026": "januari 2026", "token": "Token", "pool": "Pool", "parameter": "Parameter",
           "disclaimers": "Disclaimers"},
    "pl": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Zastrzeżenie prawne",
           "borrowAssets": "Pożycz aktywa", "withdrawCollateral": "Wycofaj zabezpieczenie", "depositLp": "Wpłać LP",
           "claimLpFees": "Odbierz opłaty LP", "glossary": "Słownik", "keyConcepts": "Kluczowe pojęcia",
           "contractsSecurity": "Umowy i bezpieczeństwo", "insuranceFunds": "Fundusze ubezpieczeniowe",
           "platformFees": "Opłaty platformy", "incentives": "Programy motywacyjne", "manageLoans": "Zarządzaj pożyczkami",
           "repayLoans": "Spłać pożyczki", "welcome": "Witamy", "smartContractSecurity": "Bezpieczeństwo smart kontraktów",
           "programA": "Program A – podstawowe pożyczanie", "hubSpoke": "Architektura hub-and-spoke",
           "legalCompliance": "Prawo i zgodność – ujawnienia bezpieczeństwa",
           "protocolArch": "Architektura protokołu – Borrow Spoke", "depositLpGuide": "Wprowadzenie – wpłata LP",
           "debtShares": "Udziały długu:", "critical": "Krytyczny", "high": "Wysoki", "mediumLow": "Średni / Niski",
           "termsOfService": "Regulamin", "privacyPolicy": "Polityka prywatności", "termsOfUse": "Warunki użytkowania",
           "restrictedTerritories": "Terytoria objęte ograniczeniami", "compliance": "Zgodność",
           "healthCheck": "Health Check", "healthChecks": "Health Checks", "deviationThresholds": "Progi odchyleń",
           "openInterestCaps": "Limity otwartej pozycji", "lpCollateral": "LP i zabezpieczenie",
           "healthLiquidation": "Health i likwidacja", "edgeCases": "Przypadki brzegowe",
           "securityChallenges": "Wyzwania bezpieczeństwa", "trustBoundaries": "Granice zaufania",
           "safetyMechanisms": "Mechanizmy bezpieczeństwa – Risk Framework", "spokeAwareness": "Świadomość spoke",
           "publicNotice": "Powiadomienie publiczne", "guardianReview": "Przegląd Guardian",
           "defensiveChanges": "Zmiany defensywne", "routineBounded": "Rutynowe zmiany w granicach",
           "governanceLevel": "Zmiany na poziomie governance", "operatingRule": "Zasada operacyjna:",
           "liquidationNode": "Węzeł likwidacji", "collateralFactor": "Collateral Factor",
           "allowedPool": "Dozwolony pool", "utilizationRate": "Wskaźnik wykorzystania",
           "riskPremium": "Risk Premium", "reserveFactor": "Reserve Factor", "liquidationBonus": "Premia likwidacyjna",
           "recoverableValue": "Wartość do odzyskania", "outstandingDebt": "Zaległy dług",
           "borrowUtilization": "Wykorzystanie pożyczki", "borrowingHeadroom": "Pozostała zdolność pożyczkowa",
           "residualValue": "Wartość resztkowa", "poolApproval": "Zatwierdzenie pool",
           "recoveryHaircut": "Recovery Haircut", "recoveryHaircuts": "Recovery Haircuts",
           "exposureCaps": "Limity ekspozycji", "circuitBreaker": "Circuit Breaker",
           "governanceSafety": "Bezpieczeństwo governance", "reentrancy": "Ochrona przed reentrancy",
           "liquidation": "Likwidacja", "parameter": "Parametr"},
    "pt": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Aviso legal",
           "borrowAssets": "Pedir ativos emprestados", "withdrawCollateral": "Retirar garantia", "depositLp": "Depositar LP",
           "claimLpFees": "Reclamar taxas LP", "glossary": "Glossário", "keyConcepts": "Conceitos-chave",
           "debtShares": "Participações de dívida:", "creditLines": "Linhas de crédito", "compliance": "Conformidade",
           "recoveryHaircuts": "Recovery Haircuts", "recoveryHaircut": "Recovery Haircut",
           "circuitBreaker": "Circuit Breaker", "token": "Token", "pool": "Pool", "ltv": "Loan-to-Value (LTV)"},
    "ru": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Юридический отказ от ответственности",
           "borrowAssets": "Занять активы", "withdrawCollateral": "Вывести залог", "depositLp": "Внести LP",
           "claimLpFees": "Забрать комиссии LP", "glossary": "Глоссарий", "keyConcepts": "Ключевые концепции",
           "critical": "Критический", "high": "Высокий", "mediumLow": "Средний / Низкий", "compliance": "Соответствие",
           "reserveFactor": "Reserve Factor", "circuitBreaker": "Circuit Breaker", "token": "Токен", "pool": "Пул",
           "ltv": "Loan-to-Value (LTV)", "riskRoles": "Роли риска Avana"},
    "sw": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Kanusho la kisheria",
           "borrowAssets": "Kopa mali", "withdrawCollateral": "Toa dhamana", "depositLp": "Weka LP",
           "claimLpFees": "Dai ada za LP", "glossary": "Kamusi", "keyConcepts": "Dhana muhimu",
           "liquidation": "Ukomeshaji", "collateralFactor": "Collateral Factor", "oracleTransform": "Oracle & Transform",
           "oracleInterface": "Oracle Interface", "oracleValuation": "Oracle & Valuation"},
    "th": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "ข้อจำกัดความรับผิดทางกฎหมาย",
           "borrowAssets": "ยืมสินทรัพย์", "withdrawCollateral": "ถอนหลักประกัน", "depositLp": "ฝาก LP",
           "claimLpFees": "เรียกเก็บค่าธรรมเนียม LP", "glossary": "อภิธานศัพท์", "keyConcepts": "แนวคิดหลัก",
           "collateralFactor": "Collateral Factor"},
    "tr": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Yasal uyarı",
           "borrowAssets": "Varlık ödünç al", "withdrawCollateral": "Teminat çek", "depositLp": "LP yatır",
           "claimLpFees": "LP ücretlerini talep et", "glossary": "Sözlük", "keyConcepts": "Temel kavramlar",
           "critical": "Kritik", "high": "Yüksek", "mediumLow": "Orta / Düşük", "token": "Token", "pool": "Havuz",
           "mode": "Mod", "priceOraclesTr": "Fiyat Oracle'ları"},
    "uk": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Юридична заява",
           "borrowAssets": "Позичити активи", "withdrawCollateral": "Зняти заставу", "depositLp": "Внести LP",
           "claimLpFees": "Отримати комісії LP", "glossary": "Глосарій", "keyConcepts": "Ключові поняття",
           "critical": "Критичний", "high": "Високий", "mediumLow": "Середній / Низький", "compliance": "Відповідність",
           "reserveFactor": "Reserve Factor", "circuitBreaker": "Circuit Breaker", "token": "Токен", "pool": "Пул",
           "ltv": "Loan-to-Value (LTV)", "riskRoles": "Ролі ризику Avana"},
    "ur": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "قانونی دستبرداری",
           "borrowAssets": "اثاثے ادھار لیں", "withdrawCollateral": "ضمانت نکالیں", "depositLp": "LP جمع کریں",
           "claimLpFees": "LP فیسیں وصول کریں", "glossary": "اصطلاحات کی فہرست", "keyConcepts": "اہم تصورات",
           "termsOfService": "سروس کی شرائط", "privacyPolicy": "رازداری کی پالیسی", "termsOfUse": "استعمال کی شرائط",
           "restrictedTerritories": "ممنوعہ علاقے", "january2026": "جنوری 2026"},
    "vi": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
           "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
           "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "Tuyên bố pháp lý",
           "borrowAssets": "Vay tài sản", "withdrawCollateral": "Rút tài sản thế chấp", "depositLp": "Gửi LP",
           "claimLpFees": "Nhận phí LP", "glossary": "Thuật ngữ", "keyConcepts": "Các khái niệm chính",
           "termsOfService": "Điều khoản dịch vụ", "privacyPolicy": "Chính sách quyền riêng tư",
           "termsOfUse": "Điều khoản sử dụng", "restrictedTerritories": "Lãnh thổ bị hạn chế",
           "borrowSpokeLogic": "Logic Borrow Spoke"},
    "zh-CN": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
              "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
              "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "法律免责声明",
              "borrowAssets": "借入资产", "withdrawCollateral": "提取抵押品", "depositLp": "存入 LP",
              "claimLpFees": "领取 LP 手续费", "glossary": "术语表", "keyConcepts": "关键概念",
              "critical": "严重", "high": "高", "mediumLow": "中 / 低"},
    "zh-TW": {"borrowSpoke": "Borrow Spoke", "lendSpoke": "Lend Spoke", "healthFactor": "health factor",
              "collateralFactors": "Collateral Factors", "riskFramework": "Risk Framework", "priceOracles": "Price Oracles",
              "allowedPools": "Allowed LP Pools", "bugBounty": "Bug Bounty", "legalDisclaimer": "法律免責聲明",
              "borrowAssets": "借入資產", "withdrawCollateral": "提取抵押品", "depositLp": "存入 LP",
              "claimLpFees": "領取 LP 手續費", "glossary": "詞彙表", "keyConcepts": "關鍵概念",
              "critical": "嚴重", "high": "高", "mediumLow": "中 / 低"},
}

LEGAL = {
    "experimental": {
        "de": "\"Die Services können experimentelle und neuartige Technologie enthalten, deren Nutzung ein hohes Risiko birgt. Es gibt zahlreiche Gründe, warum die Services oder zugrunde liegende Blockchain-Netzwerke auf unerwartete Weise ausfallen könnten, was zum vollständigen und absoluten Verlust aller in Ihrer digitalen Wallet gehaltenen Krypto-Assets führen kann.\"",
        "es": "\"Los Servicios pueden incorporar tecnología experimental y novedosa, y el uso de dicha tecnología implica un alto grado de riesgo. Existen numerosas razones por las que los Servicios o las redes blockchain subyacentes podrían fallar de manera inesperada, lo que resultaría en la pérdida total y absoluta de cualquier activo cripto mantenido en su billetera digital.\"",
        "pl": "\"Usługi mogą obejmować eksperymentalną i nowatorską technologię, a korzystanie z niej wiąże się z wysokim stopniem ryzyka. Istnieje wiele powodów, dla których Usługi lub podstawowe sieci blockchain mogą ulec nieoczekiwanej awarii, co skutkuje całkowitą i bezwzględną utratą wszelkich aktywów kryptograficznych przechowywanych w Twoim portfelu cyfrowym.\"",
    },
    "cyber": {
        "de": "\"Die Services und/oder zugrunde liegende Blockchain-Netzwerke können Cyberangriffen, unerwarteten Anstiegen des Transaktionsvolumens oder anderen betrieblichen oder technischen Schwierigkeiten oder Schwachstellen ausgesetzt sein, die zu Unterbrechungen im Zusammenhang mit Ihrer Nutzung der Services führen können.\"",
        "es": "\"Los Servicios y/o las redes blockchain subyacentes pueden experimentar o ser objeto de ciberataques, aumentos inesperados en el volumen de transacciones u otras dificultades o vulnerabilidades operativas o técnicas que pueden causar interrupciones relacionadas con su uso de los Servicios.\"",
        "pl": "\"Usługi i/lub podstawowe sieci blockchain mogą doświadczać cyberataków, nieoczekiwanych wzrostów wolumenu transakcji lub innych trudności operacyjnych lub technicznych bądź podatności, które mogą powodować przerwy związane z korzystaniem z Usług.\"",
    },
    "jurisdiction": {
        "de": "\"Die Services, das Avana Protocol und/oder zugrunde liegende Blockchain-Netzwerke sind möglicherweise nicht in allen Rechtsordnungen verfügbar oder geeignet, und Sie können im Zusammenhang mit Ihrer Nutzung der Services in bestimmten Rechtsordnungen rechtlichen und regulatorischen Compliance-Verpflichtungen unterliegen.\"",
        "es": "\"Los Servicios, el Avana Protocol y/o las redes blockchain subyacentes pueden no estar disponibles o ser apropiados para su uso en todas las jurisdicciones, y usted puede estar sujeto a obligaciones legales y de cumplimiento normativo en relación con su uso de los Servicios en determinadas jurisdicciones.\"",
        "pl": "\"Usługi, Avana Protocol i/lub podstawowe sieci blockchain mogą nie być dostępne lub odpowiednie do użytku we wszystkich jurysdykcjach, a Ty możesz podlegać prawnym i regulacyjnym obowiązkom zgodności w związku z korzystaniem z Usług w określonych jurysdykcjach.\"",
    },
    "asis": {
        "de": "\"DIE SERVICES WERDEN AUF EINER 'WIE BESEHEN'- UND 'WIE VERFÜGBAR'-BASIS BEREITGESTELLT, UND AVANA ÜBERNIMMT KEINE GEWÄHRLEISTUNGEN IN BEZUG AUF DIESE 'WIE BESEHEN'- UND 'WIE VERFÜGBAR'-BASIS ODER ANDERWEITIG IM ZUSAMMENHANG MIT DEN BEDINGUNGEN, UND AVANA LEHNT HIERMIT ALLE AUSDRÜCKLICHEN, STILLSCHWEIGENDEN ODER GESETZLICHEN GEWÄHRLEISTUNGEN UND BEDINGUNGEN AB, EINSCHLIESSLICH GEWÄHRLEISTUNGEN ODER BEDINGUNGEN DER NICHTVERLETZUNG, MARKTGÄNGIGKEIT, EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, VERFÜGBARKEIT, FEHLERFREIEN ODER UNUNTERBROCHENEN BETRIEB.\"",
        "es": "\"LOS SERVICIOS SE PROPORCIONAN 'TAL CUAL' Y 'SEGÚN DISPONIBILIDAD', Y AVANA NO OTORGA GARANTÍAS RESPECTO A DICHA BASE 'TAL CUAL' Y 'SEGÚN DISPONIBILIDAD' NI DE OTRO MODO EN RELACIÓN CON LOS TÉRMINOS, Y AVANA RENUNCIA POR LA PRESENTE A TODAS LAS GARANTÍAS Y CONDICIONES EXPRESAS, IMPLÍCITAS O LEGALES, INCLUIDAS CUALQUIER GARANTÍA O CONDICIÓN DE NO INFRACCIÓN, COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR, DISPONIBILIDAD, OPERACIÓN LIBRE DE ERRORES O ININTERRUMPIDA.\"",
        "pl": "\"USŁUGI SĄ UDOSTĘPNIANE NA ZASADZIE 'TAK JAK JEST' I 'W MIARĘ DOSTĘPNOŚCI', A AVANA NIE UDZIELA ŻADNYCH GWARANCJI W ODNIESIENIU DO TAKIEJ PODSTAWY 'TAK JAK JEST' I 'W MIARĘ DOSTĘPNOŚCI' ANI W INNY SPOSÓB W ZWIĄZKU Z WARUNKAMI, A AVANA NINIEJSZYM ZRZEKA SIĘ WSZYSTKICH WYRAŹNYCH, DOROZUMIANYCH LUB USTAWOWYCH GWARANCJI I WARUNKÓW, W TYM WSZELKICH GWARANCJI LUB WARUNKÓW NIENARUSZANIA PRAW, PRZYDATNOŚCI HANDLOWEJ, PRZYDATNOŚCI DO OKREŚLONEGO CELU, DOSTĘPNOŚCI, BEZBŁĘDNEJ LUB NIEPRZERWANEJ PRACY.\"",
    },
    "liability": {
        "de": "\"IN KEINEM FALL HAFTET AVANA IHNEN GEGENÜBER FÜR FOLGESCHÄDEN, INDIREKTE, ZUFÄLLIGE ODER BESONDERE SCHÄDEN JEGLICHER ART ODER NATUR, WIE AUCH IMMER ENTSTANDEN, EINSCHLIESSLICH, OHNE EINSCHRÄNKUNG, BEISPIEL- ODER STRAFSCHÄDEN, VERLORENE DATEN, VERLORENE GEWINNE ODER EINNAHMEN ODER WERTMINDERUNG, DIE SICH AUS DEN SERVICES ODER IHRER NUTZUNG DES AVANA PROTOCOL ERGEBEN ODER DAMIT IN ZUSAMMENHANG STEHEN.\"",
        "es": "\"EN NINGÚN CASO AVANA SERÁ RESPONSABLE ANTE USTED POR DAÑOS CONSECUENCIALES, INDIRECTOS, INCIDENTALES O ESPECIALES DE CUALQUIER TIPO O NATURALEZA, SIN IMPORTAR CÓMO SURJAN, INCLUIDOS, SIN LIMITACIÓN, DAÑOS EJEMPLARES O PUNITIVOS, PÉRDIDA DE DATOS, PÉRDIDA DE BENEFICIOS O INGRESOS O DISMINUCIÓN DE VALOR, QUE SURJAN DE O ESTÉN RELACIONADOS CON LOS SERVICIOS O SU USO DEL AVANA PROTOCOL.\"",
        "pl": "\"W ŻADNYM WYPADKU AVANA NIE PONOSI WOBEC CIEBIE ODPOWIEDZIALNOŚCI ZA SZKODY WYNIKOWE, POŚREDNIE, PRZYPADKOWE LUB SZCZEGÓLNE JAKIEGOKOLWIEK RODZAJU LUB CHARAKTERU, NIEZALEŻNIE OD TEGO, JAK POWSTAŁY, W TYM, BEZ OGRANICZEŃ, SZKODY PRZYKŁADOWE LUB KARNE, UTRATĘ DANYCH, UTRATĘ ZYSKÓW LUB PRZYCHODÓW LUB SPADEK WARTOŚCI, WYNIKAJĄCE Z USŁUG LUB TWOJEGO KORZYSTANIA Z AVANA PROTOCOL LUB Z NIM ZWIĄZANE.\"",
    },
}

LEGAL_EN = {
    "experimental": "\"The Services may incorporate experimental and novel technology and the use of such technology involves a high degree of risk. There are numerous reasons the Services or underlying blockchain networks could fail in an unexpected way, resulting in the total and absolute loss of any crypto assets held in your digital wallet.\"",
    "cyber": "\"The Services and/or underlying blockchain networks may experience or be the subject of cyber-attacks, unexpected surges in transaction volume, or other operational or technical difficulties or vulnerabilities that may cause interruptions related to your use of the Services.\"",
    "jurisdiction": "\"The Services, the Avana Protocol and/or any underlying blockchain networks may not be available or appropriate for use in all jurisdictions and you may be subject to legal and regulatory compliance obligations in connection with your use of the Services in certain jurisdictions.\"",
    "asis": "\"THE SERVICES ARE ISSUED ON AN 'AS-IS' AND 'AS AVAILABLE' BASIS AND AVANA DOES NOT MAKE ANY WARRANTIES WITH RESPECT TO SUCH 'AS-IS' AND 'AS AVAILABLE' BASIS OR OTHERWISE IN CONNECTION WITH THE TERMS AND AVANA HEREBY DISCLAIMS ANY AND ALL EXPRESS, IMPLIED OR STATUTORY WARRANTIES AND CONDITIONS, INCLUDING ANY WARRANTIES OR CONDITIONS OF NON-INFRINGEMENT, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AVAILABILITY, ERROR-FREE OR UNINTERRUPTED OPERATION.\"",
    "liability": "\"IN NO EVENT SHALL AVANA BE LIABLE TO YOU FOR ANY CONSEQUENTIAL, INDIRECT, INCIDENTAL OR SPECIAL DAMAGES OF ANY TYPE OR NATURE HOWEVER ARISING, INCLUDING, WITHOUT LIMITATION, EXEMPLARY OR PUNITIVE DAMAGES, LOST DATA, LOST PROFITS OR REVENUES OR DIMINUTION IN VALUE, ARISING OUT OF OR RELATING TO THE SERVICES OR YOUR USE OF THE AVANA PROTOCOL.\"",
}


def t(loc: str, key: str, fallback: str | None = None) -> str:
    return MSG.get(loc, {}).get(key, fallback or key)


def same(en: str) -> dict[str, str]:
    return {loc: en for loc in ALL}


def for_locales(locales: list[str], fn) -> dict[str, str]:
    return {loc: fn(loc) for loc in locales}


def build_translations(worklist: dict[str, list[str]]) -> dict[str, dict[str, str]]:
    T: dict[str, dict[str, str]] = {}

    def wl(en: str) -> list[str]:
        return worklist[en]

    def add(en: str, mapping: dict[str, str]):
        locales = wl(en)
        T[en] = {loc: mapping[loc] for loc in locales if loc in mapping}

    # --- formulas & code (preserve) ---
    hf_formula = "healthFactor = adjustedCollateralValue / outstandingDebt"
    add(hf_formula, same(hf_formula))

    code_terms = [
        "getCollateralData", "handleLiquidation", "getUserAggregate(user)", "LiquidationAdapter",
        "function getValue(uint256 tokenId, address asset)", "external view returns (",
        "uint256 fullValue,", "uint256 feeValue,", "uint256 reserveValue",
        "fullValue", "feeValue", "reserveValue", "maxDifference", "maxPoolPriceDifference",
        "setTokenConfig", "AggregatorV3Interface", "maxFeedAge", "twapSeconds",
        "ACTIVE", "LIQUIDATING", "SETTLED",
        "border-red-400 bg-red-50/70", "border-amber-400 bg-amber-50/70", "border-gray-300 bg-gray-50",
    ]
    for term in code_terms:
        add(term, same(term))

    # --- architecture / product ---
    add("Lend Spoke", for_locales(wl("Lend Spoke"), lambda l: t(l, "lendSpoke", "Lend Spoke")))
    add("Borrow Spoke", for_locales(wl("Borrow Spoke"), lambda l: t(l, "borrowSpoke", "Borrow Spoke")))
    add("Borrow Spoke (Avana)", for_locales(wl("Borrow Spoke (Avana)"), lambda l: f"{t(l, 'borrowSpoke', 'Borrow Spoke')} (Avana)"))
    add("Aave v4 Hub", for_locales(wl("Aave v4 Hub"), lambda l: "Aave v4 Hub"))

    # --- DEX brands (mostly unchanged) ---
    add("SushiSwap / Aerodrome", for_locales(wl("SushiSwap / Aerodrome"), lambda l: "SushiSwap / Aerodrome"))
    add("Uniswap V3", same("Uniswap V3"))
    add("Oracle Sentinel", for_locales(wl("Oracle Sentinel"), lambda l: "Oracle Sentinel"))

  # pool type labels
    pool_labels = {
        "Uniswap V2 ERC-20 LPs": {
            "bn": "Uniswap V2 ERC-20 LPs", "de": "Uniswap V2 ERC-20 LPs", "es": "Uniswap V2 ERC-20 LPs",
            "fa": "Uniswap V2 ERC-20 LPs", "ha": "Uniswap V2 ERC-20 LPs", "hi": "Uniswap V2 ERC-20 LPs",
            "id": "Uniswap V2 ERC-20 LPs", "nl": "Uniswap V2 ERC-20 LPs", "pl": "Uniswap V2 ERC-20 LPs",
            "ru": "Uniswap V2 ERC-20 LPs", "sw": "Uniswap V2 ERC-20 LPs", "uk": "Uniswap V2 ERC-20 LPs",
            "ur": "Uniswap V2 ERC-20 LPs", "vi": "Uniswap V2 ERC-20 LPs", "zh-TW": "Uniswap V2 ERC-20 LPs",
        },
        "Uniswap V3 NFT LPs": {
            "bn": "Uniswap V3 NFT LPs", "de": "Uniswap V3 NFT LPs", "es": "Uniswap V3 NFT LPs",
            "fa": "Uniswap V3 NFT LPs", "ha": "Uniswap V3 NFT LPs", "hi": "Uniswap V3 NFT LPs",
            "id": "Uniswap V3 NFT LPs", "nl": "Uniswap V3 NFT LPs", "pl": "Uniswap V3 NFT LPs",
            "ru": "Uniswap V3 NFT LPs", "sw": "Uniswap V3 NFT LPs", "th": "Uniswap V3 NFT LPs",
            "uk": "Uniswap V3 NFT LPs", "vi": "Uniswap V3 NFT LPs", "zh-TW": "Uniswap V3 NFT LPs",
        },
        "Uniswap V2 & SushiSwap": {
            "ar": "Uniswap V2 و SushiSwap", "de": "Uniswap V2 & SushiSwap", "es": "Uniswap V2 y SushiSwap",
            "fa": "Uniswap V2 و SushiSwap", "fr": "Uniswap V2 et SushiSwap", "ha": "Uniswap V2 & SushiSwap",
            "he": "Uniswap V2 ו-SushiSwap", "id": "Uniswap V2 & SushiSwap", "nl": "Uniswap V2 & SushiSwap",
            "pl": "Uniswap V2 i SushiSwap", "pt": "Uniswap V2 e SushiSwap", "ru": "Uniswap V2 и SushiSwap",
            "sw": "Uniswap V2 na SushiSwap", "th": "Uniswap V2 และ SushiSwap", "tr": "Uniswap V2 ve SushiSwap",
            "uk": "Uniswap V2 і SushiSwap", "vi": "Uniswap V2 & SushiSwap", "zh-TW": "Uniswap V2 與 SushiSwap",
        },
        "Curve Stable/Stable ERC-20 LPs": {
            "de": "Curve Stable/Stable ERC-20 LPs", "es": "Curve Stable/Stable ERC-20 LPs",
            "ha": "Curve Stable/Stable ERC-20 LPs", "pl": "Curve Stable/Stable ERC-20 LPs",
            "ru": "Curve Stable/Stable ERC-20 LPs", "uk": "Curve Stable/Stable ERC-20 LPs",
        },
        "Balancer Multi-Asset LPs": {
            "de": "Balancer Multi-Asset LPs", "es": "Balancer Multi-Asset LPs", "ha": "Balancer Multi-Asset LPs",
            "pl": "Balancer Multi-Asset LPs", "ru": "Balancer Multi-Asset LPs", "sw": "Balancer Multi-Asset LPs",
            "uk": "Balancer Multi-Asset LPs",
        },
        "Trader Joe & Aerodrome": {
            "ar": "Trader Joe و Aerodrome", "de": "Trader Joe & Aerodrome", "es": "Trader Joe y Aerodrome",
            "fr": "Trader Joe et Aerodrome", "ha": "Trader Joe & Aerodrome", "he": "Trader Joe ו-Aerodrome",
            "id": "Trader Joe & Aerodrome", "nl": "Trader Joe & Aerodrome", "pl": "Trader Joe i Aerodrome",
            "pt": "Trader Joe e Aerodrome", "ru": "Trader Joe и Aerodrome", "sw": "Trader Joe na Aerodrome",
            "th": "Trader Joe และ Aerodrome", "tr": "Trader Joe ve Aerodrome", "uk": "Trader Joe і Aerodrome",
            "vi": "Trader Joe & Aerodrome",
        },
    }
    for en, mapping in pool_labels.items():
        add(en, {loc: mapping.get(loc, en) for loc in wl(en)})

    # --- section titles ---
    section_map = {
        "Collateral Factors": "collateralFactors",
        "Health Factor": "healthFactor",
        "Liquidation Framework": {"ar": "إطار التصفية", "bn": "লিকুইডেশন কাঠামো", "de": "Liquidation Framework",
            "es": "Liquidation Framework", "fr": "Cadre de liquidation", "he": "מסגרת חיסול", "hi": "परिसमापन ढांचा",
            "id": "Kerangka likuidasi", "pl": "Ram likwidacji", "vi": "Khung thanh lý"},
        "Price Oracles": "priceOracles",
        "Allowed LP Pools": "allowedPools",
        "Risk Framework": "riskFramework",
        "Terms of Service": "termsOfService",
        "Privacy Policy": "privacyPolicy",
        "Restricted Territories": "restrictedTerritories",
        "January 2026": "january2026",
        "Terms of Use": "termsOfUse",
        "Bug Bounty": "bugBounty",
        "Borrow Assets": "borrowAssets",
        "Withdraw Collateral": "withdrawCollateral",
        "Deposit LP": "depositLp",
        "Claim LP Fees": "claimLpFees",
        "Legal Disclaimer": "legalDisclaimer",
        "Liquidators": "liquidators",
        "Liquidation Flow": "liquidationFlow",
        "Introduction": "introduction",
        "Contracts & Security": "contractsSecurity",
        "Roles": "roles",
        "Glossary": "glossary",
        "Key Concepts": "keyConcepts",
        "Welcome": "welcome",
        "Smart Contract Security": "smartContractSecurity",
        "Program A - Core Lending": "programA",
        "Hub-and-Spoke Architecture": "hubSpoke",
        "Legal & Compliance - Security Disclosures": "legalCompliance",
        "Protocol Architecture - Borrow Spoke": "protocolArch",
        "Getting Started - Deposit LP": "depositLpGuide",
        "Manage Loans": "manageLoans",
        "Repay Loans": "repayLoans",
        "Platform Fees": "platformFees",
        "Incentives Programs": "incentives",
        "Disclaimers": "disclaimers",
        "Disclosure": "disclosure",
        "Compliance": "compliance",
    }
    for en, key in section_map.items():
        if isinstance(key, dict):
            add(en, {loc: key.get(loc, en) for loc in wl(en)})
        else:
            add(en, for_locales(wl(en), lambda l, k=key: t(l, k, en)))

    # severity labels
    sev = {
        "Critical": ("critical", {"de": "Kritisch", "es": "Crítico", "it": "Critico", "ja": "重大", "ko": "심각",
            "pl": "Krytyczny", "ru": "Критический", "tr": "Kritik", "uk": "Критичний", "zh-CN": "严重", "zh-TW": "嚴重"}),
        "High": ("high", {"de": "Hoch", "es": "Alto", "it": "Alto", "ja": "高", "ko": "높음", "pl": "Wysoki",
            "ru": "Высокий", "tr": "Yüksek", "uk": "Високий", "zh-CN": "高", "zh-TW": "高"}),
        "Medium / Low": ("mediumLow", {"de": "Mittel / Niedrig", "es": "Medio / Bajo", "it": "Medio / Basso",
            "ja": "中 / 低", "ko": "중간 / 낮음", "pl": "Średni / Niski", "ru": "Средний / Низкий",
            "tr": "Orta / Düşük", "uk": "Середній / Низький", "zh-CN": "中 / 低", "zh-TW": "中 / 低"}),
    }
    for en, (msg_key, overrides) in sev.items():
        add(en, {loc: overrides.get(loc, t(loc, msg_key, en)) for loc in wl(en)})

    # action labels
    action_map = {
        "Borrow:": "borrow", "Repay:": "repay", "Health check:": "healthCheck",
        "Liquidation:": "liquidation", "Debt shares:": "debtShares", "Operating rule:": "operatingRule",
    }
    for en, key in action_map.items():
        add(en, for_locales(wl(en), lambda l, k=key: t(l, k, en)))

    add("AppKit guide", {"es": "Guía de AppKit"})
    add("Oracle Interface: IOracle", {
        "de": "Oracle Interface: IOracle", "es": "Interfaz Oracle: IOracle", "ha": "Oracle Interface: IOracle",
    })
    add("Ukraine (Crimea, Donetsk, and Luhansk regions)", {"es": "Ucrania (regiones de Crimea, Donetsk y Luhansk)"})
    add("United States of America", {"es": "Estados Unidos de América"})

    # table headers
    header_defaults = {
        "Token": {"ar": "رمز", "de": "Token", "es": "Token", "fr": "Jeton", "he": "אסימון", "it": "Token",
            "nl": "Token", "pl": "Token", "pt": "Token", "ru": "Токен", "tr": "Token", "uk": "Токен"},
        "Pool": {"ar": "مجمع", "de": "Pool", "es": "Pool", "fa": "Pool", "fr": "Pool", "ha": "Pool",
            "he": "בריכה", "it": "Pool", "nl": "Pool", "pl": "Pool", "pt": "Pool", "ru": "Пул", "tr": "Havuz", "uk": "Пул"},
        "Mode": {"ar": "الوضع", "de": "Modus", "es": "Modo", "fr": "Mode", "he": "מצב", "it": "Modo",
            "pl": "Tryb", "ru": "Режим", "tr": "Mod", "uk": "Режим"},
        "Router Contract": {"de": "Router-Vertrag", "es": "Contrato router", "it": "Contratto router", "pl": "Kontrakt routera"},
        "Loan-to-Value (LTV)": {"de": "Loan-to-Value (LTV)", "es": "Loan-to-Value (LTV)", "fr": "Loan-to-Value (LTV)",
            "it": "Loan-to-Value (LTV)", "pl": "Loan-to-Value (LTV)", "pt": "Loan-to-Value (LTV)", "ru": "Loan-to-Value (LTV)", "uk": "Loan-to-Value (LTV)"},
        "Parameter": {"de": "Parameter", "id": "Parameter", "nl": "Parameter", "pl": "Parametr"},
        "Description": {"fr": "Description"},
        "Notes": {"fr": "Notes"},
        "Architecture": {"fr": "Architecture"},
    }
    for en, mapping in header_defaults.items():
        add(en, {loc: mapping.get(loc, en) for loc in wl(en)})

    # risk role names (preserve Avana prefix)
    for role in ["Avana Risk Initiator", "Avana Risk Guardian", "Avana Risk Defender"]:
        add(role, same(role))

    # risk/glossary terms - mostly English DeFi terms with localized wrappers where needed
    risk_terms = {
        "Recovery Haircuts": {"de": "Recovery Haircuts", "fr": "Recovery Haircuts", "pl": "Recovery Haircuts", "pt": "Recovery Haircuts"},
        "Recovery Haircut": {"de": "Recovery Haircut", "fr": "Recovery Haircut", "pl": "Recovery Haircut", "pt": "Recovery Haircut"},
        "Liquidation Node": {"de": "Liquidation Node", "fr": "Nœud de liquidation", "pl": "Węzeł likwidacji"},
        "Collateral Factor": {"de": "Collateral Factor", "fr": "Collateral Factor", "ha": "Collateral Factor", "pl": "Collateral Factor", "sw": "Collateral Factor", "th": "Collateral Factor"},
        "Borrowing Capacity": {"de": "Borrowing Capacity", "fr": "Capacité d'emprunt"},
        "Allowed Pool": {"de": "Allowed Pool", "fr": "Pool autorisé", "pl": "Dozwolony pool"},
        "Utilization Rate": {"de": "Utilization Rate", "fr": "Taux d'utilisation", "pl": "Wskaźnik wykorzystania"},
        "Risk Premium": {"de": "Risk Premium", "fr": "Risk Premium", "ha": "Risk Premium", "pl": "Risk Premium"},
        "Reserve Factor": {"de": "Reserve Factor", "fr": "Reserve Factor", "ha": "Reserve Factor", "pl": "Reserve Factor", "ru": "Reserve Factor", "uk": "Reserve Factor"},
        "Liquidation Bonus": {"de": "Liquidation Bonus", "fr": "Bonus de liquidation", "pl": "Premia likwidacyjna"},
        "Recoverable Value": {"de": "Recoverable Value", "fr": "Valeur récupérable", "pl": "Wartość do odzyskania"},
        "Outstanding Debt": {"de": "Outstanding Debt", "fr": "Dette en cours", "pl": "Zaległy dług"},
        "Borrow Utilization": {"de": "Borrow Utilization", "fr": "Utilisation d'emprunt", "pl": "Wykorzystanie pożyczki"},
        "Borrowing Headroom": {"de": "Borrowing Headroom", "fr": "Marge d'emprunt", "pl": "Pozostała zdolność pożyczkowa"},
        "Residual Value": {"de": "Residual Value", "fr": "Valeur résiduelle", "pl": "Wartość resztkowa"},
        "Pool Approval": {"de": "Pool Approval", "fr": "Approbation du pool", "pl": "Zatwierdzenie pool"},
        "Exposure Caps": {"de": "Exposure Caps", "fr": "Plafonds d'exposition", "pl": "Limity ekspozycji"},
        "Circuit Breaker": {"de": "Circuit Breaker", "fr": "Circuit Breaker", "pl": "Circuit Breaker", "pt": "Circuit Breaker", "ru": "Circuit Breaker", "uk": "Circuit Breaker"},
        "Governance Safety": {"de": "Governance Safety", "fr": "Sécurité de gouvernance", "pl": "Bezpieczeństwo governance"},
        "Reentrancy Protection": {"de": "Reentrancy Protection", "fr": "Protection contre la réentrance", "pl": "Ochrona przed reentrancy"},
        "Liquidation": {"de": "Liquidation", "fr": "Liquidation", "ha": "Liquidation", "pl": "Likwidacja", "sw": "Ukomeshaji"},
        "Credit lines": {"pt": "Linhas de crédito"},
        "Health Check": {"de": "Health Check", "pl": "Health Check"},
        "Health Checks": {"de": "Health Checks"},
        "Deviation Thresholds": {"de": "Abweichungsschwellen"},
        "Open Interest Caps": {"de": "Open-Interest-Limits"},
        "LP & Collateral": {"de": "LP & Collateral"},
        "Oracle & Transform": {"de": "Oracle & Transform", "fa": "Oracle & Transform", "sw": "Oracle & Transform"},
        "Health & Liquidation": {"de": "Health & Liquidation"},
        "Edge Cases": {"de": "Randfälle"},
        "Security Challenges": {"de": "Sicherheitsherausforderungen"},
        "Trust Boundaries": {"de": "Vertrauensgrenzen"},
        "Insurance Funds": {"de": "Versicherungsfonds", "pl": "Fundusze ubezpieczeniowe"},
        "Safety Mechanisms - Risk Framework": {"de": "Sicherheitsmechanismen – Risk Framework", "pl": "Mechanizmy bezpieczeństwa – Risk Framework"},
        "Spoke Awareness": {"de": "Spoke Awareness"},
        "Public Notice": {"de": "Öffentliche Bekanntmachung"},
        "Guardian Review": {"de": "Guardian-Prüfung"},
        "Defensive Changes": {"de": "Defensive Änderungen"},
        "Routine Bounded Changes": {"de": "Rutinäre begrenzte Änderungen"},
        "Governance-Level Changes": {"de": "Änderungen auf Governance-Ebene"},
        "Oracle Interface": {"ha": "Oracle Interface", "sw": "Oracle Interface"},
        "Oracle & Valuation": {"sw": "Oracle & Valuation"},
        "Borrow Spoke logic": {"vi": "Logic Borrow Spoke"},
        "Interface vs Protocol": {"ha": "Interface vs Protocol"},
        "Multi-Layer Architecture": {"ha": "Multi-Layer Architecture"},
        "Oracle Source": {"ha": "Oracle Source"},
        "Core Insight": {"ha": "Core Insight"},
        "Multi-Position Account": {"ha": "Multi-Position Account"},
        "Liquidation Design": {"ha": "Liquidation Design"},
        "Core Contract Surfaces": {"ha": "Core Contract Surfaces"},
    }
    for en, mapping in risk_terms.items():
        add(en, {loc: mapping.get(loc, en) for loc in wl(en)})

    # long ha sentences
    ha_routine = "Routine risk changes execute only when they remain inside predefined policy bounds and pass validation checks."
    ha_framework = "Framework checks confirm that the update stays inside predefined constraints and approved policy bounds."
    add(ha_routine, {"ha": t("ha", "routineRisk", ha_routine)})
    add(ha_framework, {"ha": t("ha", "frameworkChecks", ha_framework)})

    # legal disclaimers
    for key, en_text in LEGAL_EN.items():
        add(en_text, {loc: LEGAL[key][loc] for loc in wl(en_text)})

    return T


def main() -> None:
    worklist = json.loads(WORKLIST.read_text())["docs.json"]
    translations = build_translations(worklist)

  # validate coverage
    missing = []
    extra = set(translations) - set(worklist)
    for en, locales in worklist.items():
        if en not in translations:
            missing.append(en)
            continue
        for loc in locales:
            if loc not in translations[en]:
                missing.append(f"{en!r} -> {loc}")

    if missing:
        raise SystemExit(f"Missing translations ({len(missing)}):\n" + "\n".join(missing[:30]))
    if extra:
        print(f"warning: extra keys not in worklist: {len(extra)}")

    out = {"docs.json": translations}
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")

    entry_count = sum(len(v) for v in translations.values())
    print(f"strings: {len(translations)}")
    print(f"translation entries: {entry_count}")
    print(f"wrote {OUT}")


if __name__ == "__main__":
    main()
