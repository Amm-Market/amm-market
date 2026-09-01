#!/usr/bin/env python3
"""Generate content/i18n/hand-translations/marketing.json from worklist."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WORKLIST = ROOT / "content" / "i18n" / "worklist.json"
OUT = ROOT / "content" / "i18n" / "hand-translations" / "marketing.json"

ALL = [
    "zh-CN", "zh-TW", "hi", "es", "ar", "fr", "bn", "pt", "ru", "ur", "id", "de", "ja",
    "fa", "sw", "vi", "tr", "ko", "ha", "it", "th", "pl", "uk", "nl", "he",
]

# locale -> short language key for shared templates
LANG = {
    "zh-CN": "zh-CN", "zh-TW": "zh-TW", "hi": "hi", "es": "es", "ar": "ar", "fr": "fr",
    "bn": "bn", "pt": "pt", "ru": "ru", "ur": "ur", "id": "id", "de": "de", "ja": "ja",
    "fa": "fa", "sw": "sw", "vi": "vi", "tr": "tr", "ko": "ko", "ha": "ha", "it": "it",
    "th": "th", "pl": "pl", "uk": "uk", "nl": "nl", "he": "he",
}


def same(locales: list[str], value: str) -> dict[str, str]:
    return {loc: value for loc in locales}


def by_lang(locales: list[str], table: dict[str, str], fallback: str | None = None) -> dict[str, str]:
    fb = fallback or next(iter(table.values()))
    return {loc: table.get(LANG[loc], fb) for loc in locales}


# --- translation tables by language key ---
T = {
    "Logo": {
        "ar": "الشعار", "es": "Logotipo", "fr": "Logo", "id": "Logo", "it": "Logo",
        "nl": "Logo", "pl": "Logo", "pt": "Logotipo", "vi": "Logo", "zh-CN": "标志",
        "zh-TW": "標誌",
    },
    "Avana Token": {
        "ar": "رمز Avana", "fa": "توکن Avana", "nl": "Avana-token", "vi": "Token Avana",
        "zh-CN": "Avana 代币", "zh-TW": "Avana 代幣",
    },
    "Avana logo": {"fa": "لوگوی Avana", "zh-CN": "Avana 标志", "zh-TW": "Avana 標誌"},
    "Avana White": {
        "ar": "أبيض Avana", "bn": "Avana সাদা", "es": "Blanco Avana", "fa": "سفید Avana",
        "fr": "Blanc Avana", "ha": "Fari Avana", "hi": "Avana सफ़ेद", "id": "Putih Avana",
        "it": "Bianco Avana", "pt": "Branco Avana", "ru": "Белый Avana", "sw": "Nyeupe Avana",
        "th": "Avana ขาว", "vi": "Trắng Avana", "zh-CN": "Avana 白", "zh-TW": "Avana 白",
    },
    "Avana Ink": {
        "ar": "حبر Avana", "bn": "Avana কালো", "es": "Tinta Avana", "fa": "مرکب Avana",
        "fr": "Encre Avana", "ha": "Baki Avana", "hi": "Avana काला", "id": "Tinta Avana",
        "it": "Inchiostro Avana", "pt": "Tinta Avana", "ru": "Чернила Avana", "sw": "Wino Avana",
        "th": "Avana ดำ", "vi": "Mực Avana", "zh-CN": "Avana 墨", "zh-TW": "Avana 墨",
    },
    "Avana Cyan": {
        "ar": "سماوي Avana", "bn": "Avana সায়ান", "es": "Cian Avana", "fa": "فیروزه‌ای Avana",
        "fr": "Cyan Avana", "ha": "Shuɗi Avana", "hi": "Avana सियान", "id": "Sian Avana",
        "it": "Ciano Avana", "pt": "Ciano Avana", "ru": "Бирюзовый Avana", "sw": "Samawati Avana",
        "th": "Avana ฟ้า", "vi": "Xanh lơ Avana", "zh-CN": "Avana 青", "zh-TW": "Avana 青",
    },
    "Multiply": {
        "ar": "المضاعفة", "bn": "গুণ", "ha": "Ninka", "hi": "गुणा", "id": "Kalikan",
        "it": "Moltiplica", "ja": "マルチプライ", "ko": "멀티플라이", "ru": "Мультипликация",
        "sw": "Zidisha", "th": "คูณ", "tr": "Çarpan", "uk": "Множення", "vi": "Nhân",
        "zh-CN": "倍增", "zh-TW": "倍增",
    },
    "-and-": {
        "ar": "-و-", "bn": "-এবং-", "de": "-und-", "es": "-y-", "fa": "-و-", "fr": "-et-",
        "ha": "-da-", "he": "-ו-", "hi": "-और-", "id": "-dan-", "it": "-e-", "ja": "-と-",
        "ko": "-및-", "nl": "-en-", "pl": "-i-", "pt": "-e-", "ru": "-и-", "sw": "-na-",
        "th": "-และ-", "tr": "-ve-", "uk": "-і-", "ur": "-اور-", "vi": "-và-", "zh-CN": "-和-",
        "zh-TW": "-和-",
    },
    "Smart Agents": {
        "ar": "وكلاء ذكيون", "bn": "স্মার্ট এজেন্ট", "de": "Intelligente Agenten",
        "es": "Agentes inteligentes", "fa": "عامل‌های هوشمند", "fr": "Agents intelligents",
        "ha": "Wakilai masu hankali", "he": "סוכנים חכמים", "hi": "स्मार्ट एजेंट",
        "id": "Agen pintar", "it": "Agenti intelligenti", "ja": "スマートエージェント",
        "ko": "스마트 에이전트", "nl": "Slimme agenten", "pl": "Inteligentne agenty",
        "pt": "Agentes inteligentes", "ru": "Умные агенты", "sw": "Mawakala mahiri",
        "th": "เอเจนต์อัจฉริยะ", "tr": "Akıllı ajanlar", "uk": "Розумні агенти",
        "ur": "سمارٹ ایجنٹس", "vi": "Tác tử thông minh", "zh-CN": "智能代理",
        "zh-TW": "智慧代理",
    },
    "Avana APY": {
        "ar": "عائد Avana السنوي", "bn": "Avana APY", "de": "Avana-APY", "es": "APY de Avana",
        "fa": "APY آوانا", "fr": "APY Avana", "ha": "APY na Avana", "hi": "Avana APY",
        "id": "APY Avana", "it": "APY Avana", "ja": "Avana APY", "ko": "Avana APY",
        "pt": "APY Avana", "ru": "APY Avana", "sw": "APY ya Avana", "th": "Avana APY",
        "tr": "Avana APY", "uk": "APY Avana", "vi": "APY Avana", "zh-CN": "Avana 年化收益",
        "zh-TW": "Avana 年化收益",
    },
    "Ethereum": {
        "ar": "إيثريوم", "bn": "ইথেরিয়াম", "de": "Ethereum", "es": "Ethereum", "fa": "اتریوم",
        "fr": "Ethereum", "ha": "Ethereum", "hi": "एथेरियम", "id": "Ethereum", "it": "Ethereum",
        "ja": "イーサリアム", "ko": "이더리움", "pt": "Ethereum", "ru": "Ethereum", "sw": "Ethereum",
        "th": "อีเธอเรียม", "tr": "Ethereum", "uk": "Ethereum", "vi": "Ethereum",
        "zh-CN": "以太坊", "zh-TW": "以太坊",
    },
    "Bitcoin": {
        "ar": "بيتكوين", "bn": "বিটকয়েন", "de": "Bitcoin", "es": "Bitcoin", "fa": "بیت‌کوین",
        "fr": "Bitcoin", "ha": "Bitcoin", "hi": "बिटकॉइन", "id": "Bitcoin", "it": "Bitcoin",
        "ja": "ビットコイン", "ko": "비트코인", "pt": "Bitcoin", "ru": "Bitcoin", "sw": "Bitcoin",
        "th": "บิตคอยน์", "tr": "Bitcoin", "uk": "Bitcoin", "vi": "Bitcoin",
        "zh-CN": "比特币", "zh-TW": "比特幣",
    },
    "Stablecoins": {
        "ar": "العملات المستقرة", "bn": "স্টেবলকয়েন", "de": "Stablecoins", "es": "Stablecoins",
        "fa": "استیبل‌کوین‌ها", "fr": "Stablecoins", "ha": "Stablecoins", "hi": "स्टेबलकॉइन",
        "id": "Stablecoin", "it": "Stablecoin", "ja": "ステーブルコイン", "ko": "스테이블코인",
        "pt": "Stablecoins", "ru": "Стейблкоины", "sw": "Stablecoins", "th": "สเตเบิลคอยน์",
        "tr": "Stablecoin'ler", "uk": "Стейблкоїни", "vi": "Stablecoin", "zh-CN": "稳定币",
        "zh-TW": "穩定幣",
    },
    "Others": {
        "ar": "أخرى", "bn": "অন্যান্য", "de": "Sonstige", "es": "Otros", "fa": "سایر",
        "fr": "Autres", "ha": "Wasu", "hi": "अन्य", "id": "Lainnya", "it": "Altri",
        "ja": "その他", "ko": "기타", "pt": "Outros", "ru": "Другие", "sw": "Nyingine",
        "th": "อื่นๆ", "tr": "Diğerleri", "uk": "Інші", "vi": "Khác", "zh-CN": "其他",
        "zh-TW": "其他",
    },
    "Color": {"zh-CN": "颜色", "zh-TW": "顏色"},
    "Partner": {
        "ar": "شريك", "es": "Socio", "fr": "Partenaire", "zh-CN": "合作伙伴", "zh-TW": "合作夥伴",
    },
    "Full Black": {
        "ar": "أسود كامل", "es": "Negro completo", "fr": "Noir intégral", "zh-CN": "全黑",
        "zh-TW": "全黑",
    },
    "Full Cyan": {
        "ar": "سماوي كامل", "es": "Cian completo", "fr": "Cyan intégral", "zh-CN": "全青",
        "zh-TW": "全青",
    },
    "Powered by Aave v4": {
        "ar": "مدعوم من Aave v4", "es": "Impulsado por Aave v4", "fr": "Propulsé par Aave v4",
        "zh-CN": "由 Aave v4 驱动", "zh-TW": "由 Aave v4 驅動",
    },
    "Avana Markets": {
        "ar": "أسواق Avana", "es": "Mercados Avana", "fr": "Marchés Avana", "zh-CN": "Avana 市场",
        "zh-TW": "Avana 市場",
    },
    "Collateral Swap": {
        "ar": "مبادلة الضمان", "es": "Intercambio de colateral", "fr": "Échange de collatéral",
        "zh-CN": "抵押品互换", "zh-TW": "抵押品互換",
    },
    "Debt Swap": {
        "ar": "مبادلة الدين", "es": "Intercambio de deuda", "fr": "Échange de dette",
        "zh-CN": "债务互换", "zh-TW": "債務互換",
    },
    "Liquidation Design": {
        "ar": "تصميم التصفية", "bn": "লিকুইডেশন ডিজাইন", "de": "Liquidationsdesign",
        "es": "Diseño de liquidación", "fa": "طراحی تسویه", "fr": "Conception de liquidation",
        "ha": "Tsarin liquidation", "hi": "लिक्विडेशन डिज़ाइन", "id": "Desain likuidasi",
        "it": "Design della liquidazione", "ja": "清算設計", "ko": "청산 설계",
        "nl": "Liquidatieontwerp", "pl": "Projekt likwidacji", "pt": "Design de liquidação",
        "ru": "Дизайн ликвидации", "sw": "Muundo wa uondoaji", "th": "การออกแบบการชำระบัญชี",
        "tr": "Tasfiye tasarımı", "uk": "Дизайн ліквідації", "ur": "لیکویڈیشن ڈیزائن",
        "vi": "Thiết kế thanh lý", "zh-CN": "清算设计", "zh-TW": "清算設計",
    },
    "questions": {"zh-CN": "问题", "zh-TW": "問題"},
    "Architecture": {"zh-CN": "架构", "zh-TW": "架構"},
    "Liquidation": {"zh-CN": "清算", "zh-TW": "清算"},
    "Liquidations": {"zh-CN": "清算", "zh-TW": "清算"},
    "Roadmap": {"zh-CN": "路线图", "zh-TW": "路線圖"},
    "Target Q3 2026": {
        "ar": "الهدف: الربع الثالث 2026", "es": "Objetivo: T3 2026", "fr": "Cible : T3 2026",
        "pt": "Meta: T3 2026", "zh-CN": "目标：2026 年第三季度", "zh-TW": "目標：2026 年第三季",
    },
    "Target Q4 2026": {
        "ar": "الهدف: الربع الرابع 2026", "es": "Objetivo: T4 2026", "fr": "Cible : T4 2026",
        "pt": "Meta: T4 2026", "zh-CN": "目标：2026 年第四季度", "zh-TW": "目標：2026 年第四季",
    },
    "Target Q1 2027": {
        "ar": "الهدف: الربع الأول 2027", "es": "Objetivo: T1 2027", "fr": "Cible : T1 2027",
        "pt": "Meta: T1 2027", "zh-CN": "目标：2027 年第一季度", "zh-TW": "目標：2027 年第一季",
    },
    "Released": {
        "ar": "صدر", "es": "Publicado", "fr": "Publié", "pt": "Lançado", "zh-CN": "已发布",
        "zh-TW": "已發布",
    },
    "In Progress": {
        "ar": "قيد التنفيذ", "es": "En progreso", "fr": "En cours", "pt": "Em andamento",
        "zh-CN": "进行中", "zh-TW": "進行中",
    },
    "Earn interest from LP borrower demand": {
        "ar": "اكسب فائدة من طلب المقترضين المدعومين بـ LP",
        "es": "Gana intereses por la demanda de prestatarios con colateral LP",
        "fr": "Gagnez des intérêts grâce à la demande d'emprunteurs LP",
        "pt": "Ganhe juros com a demanda de mutuários com colateral LP",
        "zh-CN": "从 LP 借款人需求中赚取利息", "zh-TW": "從 LP 借款人需求中賺取利息",
    },
    "Ways teams put LP credit to work": {
        "ar": "طرق تستخدم بها الفرق ائتمان LP",
        "es": "Formas en que los equipos aprovechan el crédito LP",
        "fr": "Façons dont les équipes utilisent le crédit LP",
        "pt": "Formas como equipes usam crédito LP",
        "zh-CN": "团队运用 LP 信贷的方式", "zh-TW": "團隊運用 LP 信貸的方式",
    },
    "LP credit to work": {
        "ar": "ائتمان LP للعمل", "es": "crédito LP en acción", "fr": "crédit LP au travail",
        "pt": "crédito LP em ação", "zh-CN": "LP 信贷发挥作用", "zh-TW": "LP 信貸發揮作用",
    },
    "Brand": {"es": "Marca", "zh-CN": "品牌", "zh-TW": "品牌"},
    "Avana Hubs Strategy": {
        "ar": "استراتيجية مراكز Avana", "es": "Estrategia de Hubs Avana", "fr": "Stratégie des Hubs Avana",
        "zh-CN": "Avana 中心策略", "zh-TW": "Avana 中心策略",
    },
    "DEX Coverage": {"es": "Cobertura DEX", "zh-CN": "DEX 覆盖", "zh-TW": "DEX 覆蓋"},
    "Leverage Layer": {
        "ar": "طبقة الرافعة", "es": "Capa de apalancamiento", "fr": "Couche de levier",
        "zh-CN": "杠杆层", "zh-TW": "槓桿層",
    },
    "Unwind Layer": {
        "ar": "طبقة الإغلاق", "es": "Capa de cierre", "fr": "Couche de dénouement",
        "zh-CN": "平仓层", "zh-TW": "平倉層",
    },
    "Risk Layer": {
        "ar": "طبقة المخاطر", "es": "Capa de riesgo", "fr": "Couche de risque",
        "zh-CN": "风险层", "zh-TW": "風險層",
    },
    "Monitoring Layer": {
        "ar": "طبقة المراقبة", "es": "Capa de monitoreo", "fr": "Couche de surveillance",
        "zh-CN": "监控层", "zh-TW": "監控層",
    },
    "Position Safety": {"es": "Seguridad de posición", "zh-CN": "仓位安全", "zh-TW": "倉位安全"},
    "Newsroom": {"zh-CN": "新闻中心", "zh-TW": "新聞中心"},
    "LP positions that can earn in AMMs, back loans in lending markets, and carry risk controls specific to the pools they come from.": {
        "zh-CN": "可在 AMM 中赚取收益、在借贷市场支撑贷款，并携带源自其池子的专属风险控制的 LP 仓位。",
        "zh-TW": "可在 AMM 中賺取收益、在借貸市場支撐貸款，並攜帶源自其池子的專屬風險控制的 LP 倉位。",
    },
    "The Avana palette is intentionally simple: white for space, ink for clarity, and cyan for recognition.": {
        "zh-CN": "Avana 色板刻意保持简洁：白色营造空间感，墨色保证清晰度，青色强化识别度。",
        "zh-TW": "Avana 色板刻意保持簡潔：白色營造空間感，墨色保證清晰度，青色強化識別度。",
    },
    "Aave v4 uses": {
        "zh-CN": "Aave v4 采用", "zh-TW": "Aave v4 採用",
    },
    "Up to 70% of your LP's value, depending on pool type, volatility, and": {
        "zh-CN": "最高可达 LP 价值的 70%，取决于池类型、波动性及", "zh-TW": "最高可達 LP 價值的 70%，取決於池類型、波動性及",
    },
    "Avana Interest": {"zh-CN": "Avana 利息", "zh-TW": "Avana 利息"},
    "Health Factor < 1.0. Fees apply first, needed LP principal unwinds, and residual value returns to you.": {
        "zh-CN": "健康因子 < 1.0。手续费优先抵扣，仅 unwind 所需 LP 本金，剩余价值返还给你。",
        "zh-TW": "健康因子 < 1.0。手續費優先抵扣，僅 unwind 所需 LP 本金，剩餘價值返還給你。",
    },
    "Typography": {"zh-CN": "字体", "zh-TW": "字體"},
    "Governance v1": {"zh-CN": "治理 v1", "zh-TW": "治理 v1"},
    "Liquidity pools": {"es": "Pools de liquidez", "zh-CN": "流动性池", "zh-TW": "流動性池"},
    "Avana about hero image": {
        "es": "Imagen principal de Avana sobre nosotros", "zh-CN": "Avana 关于页主图",
        "zh-TW": "Avana 關於頁主圖",
    },
    "Protocol Operations": {
        "es": "Operaciones del protocolo", "zh-CN": "协议运营", "zh-TW": "協議營運",
    },
    "Risk Management": {
        "es": "Gestión de riesgos", "zh-CN": "风险管理", "zh-TW": "風險管理",
    },
    "Safety by design": {
        "es": "Seguridad por diseño", "zh-CN": "安全设计", "zh-TW": "安全設計",
    },
    "01. Protocol team": {"zh-CN": "01. 协议团队", "zh-TW": "01. 協議團隊"},
    "02. Operations team": {"zh-CN": "02. 运营团队", "zh-TW": "02. 營運團隊"},
    "03. Market Risk team": {"zh-CN": "03. 市场风险团队", "zh-TW": "03. 市場風險團隊"},
    "04. Collateral Risk team": {"zh-CN": "04. 抵押品风险团队", "zh-TW": "04. 抵押品風險團隊"},
    "In 2021,": {
        "zh-CN": "2021 年，", "zh-TW": "2021 年，",
    },
    "Stable LP Hub": {
        "ar": "مركز LP المستقر", "es": "Hub LP estable", "fr": "Hub LP stable", "id": "Hub LP stabil",
        "it": "Hub LP stabile", "ja": "ステーブル LP ハブ", "ko": "스테이블 LP 허브", "pt": "Hub LP estável",
        "ru": "Стабильный LP Hub", "th": "Stable LP Hub", "vi": "Hub LP ổn định",
        "zh-CN": "稳定 LP 中心", "zh-TW": "穩定 LP 中心",
    },
    "Correlated LP Hub": {
        "ar": "مركز LP المترابط", "es": "Hub LP correlacionado", "fr": "Hub LP corrélé",
        "id": "Hub LP berkorelasi", "it": "Hub LP correlato", "ja": "相関 LP ハブ",
        "ko": "상관 LP 허브", "pt": "Hub LP correlacionado", "ru": "Коррелированный LP Hub",
        "th": "Correlated LP Hub", "vi": "Hub LP tương quan", "zh-CN": "相关 LP 中心",
        "zh-TW": "相關 LP 中心",
    },
    "Volatile LP Hub": {
        "ar": "مركز LP المتقلب", "es": "Hub LP volátil", "fr": "Hub LP volatil",
        "id": "Hub LP volatil", "it": "Hub LP volatile", "ja": "ボラティル LP ハブ",
        "ko": "변동성 LP 허브", "pt": "Hub LP volátil", "ru": "Волатильный LP Hub",
        "th": "Volatile LP Hub", "vi": "Hub LP biến động", "zh-CN": "高波动 LP 中心",
        "zh-TW": "高波動 LP 中心",
    },
    "Range": {
        "ar": "النطاق", "es": "Rango", "fr": "Fourchette", "id": "Rentang", "it": "Intervallo",
        "ja": "レンジ", "ko": "범위", "pt": "Faixa", "ru": "Диапазон", "th": "ช่วง",
        "vi": "Phạm vi", "zh-CN": "区间", "zh-TW": "區間",
    },
    "30d vol": {
        "ar": "تقلب 30 يوم", "bn": "৩০ দিনের ভোল", "de": "30T-Vol", "es": "Vol. 30d",
        "fa": "نوسان ۳۰ روزه", "fr": "Vol. 30j", "ha": "Vol na kwanaki 30", "he": "תנודה 30 יום",
        "hi": "30दि. वोल", "id": "Vol 30h", "it": "Vol 30g", "ja": "30日ボラ", "ko": "30일 변동성",
        "nl": "30d vol", "pl": "Wol. 30d", "pt": "Vol. 30d", "ru": "Вол. 30д", "sw": "Vol ya siku 30",
        "th": "ความผันผวน 30 วัน", "tr": "30g vol", "uk": "Вол. 30д", "ur": "30 دن کی vol",
        "vi": "Biến động 30 ngày", "zh-CN": "30 日波动", "zh-TW": "30 日波動",
    },
    "Buffer": {
        "ar": "احتياطي", "bn": "বাফার", "de": "Puffer", "es": "Colchón", "fa": "بافر",
        "fr": "Tampon", "ha": "Takawa", "he": "חיץ", "hi": "बफर", "id": "Buffer", "it": "Buffer",
        "ja": "バッファ", "ko": "버퍼", "nl": "Buffer", "pl": "Bufor", "pt": "Colchão", "ru": "Буфер",
        "sw": "Akiba", "th": "บัฟเฟอร์", "tr": "Tampon", "uk": "Буфер", "ur": "بفر",
        "vi": "Đệm", "zh-CN": "缓冲", "zh-TW": "緩衝",
    },
    "Console": {
        "ar": "لوحة التحكم", "es": "Consola", "fr": "Console", "id": "Konsol", "it": "Console",
        "ja": "コンソール", "ko": "콘솔", "pt": "Console", "ru": "Консоль", "th": "คอนโซล",
        "vi": "Bảng điều khiển", "zh-CN": "控制台", "zh-TW": "控制台",
    },
    "Health": {
        "ar": "الصحة", "es": "Salud", "fr": "Santé", "id": "Kesehatan", "it": "Salute",
        "ja": "ヘルス", "ko": "건강", "pt": "Saúde", "ru": "Здоровье", "th": "สุขภาพ",
        "vi": "Sức khỏe", "zh-CN": "健康度", "zh-TW": "健康度",
    },
    "oracle": {
        "ar": "أوراكل", "bn": "ওরাকল", "de": "Oracle", "es": "oráculo", "fa": "اوراکل",
        "fr": "oracle", "ha": "oracle", "he": "אורקל", "hi": "ऑरेकल", "id": "oracle", "it": "oracolo",
        "ja": "オラクル", "ko": "오라클", "nl": "oracle", "pl": "wyrocznia", "pt": "oráculo",
        "ru": "оракул", "sw": "oracle", "th": "ออราเคิล", "tr": "oracle", "uk": "оракул",
        "ur": "اوریکل", "vi": "oracle", "zh-CN": "预言机", "zh-TW": "預言機",
    },
    "liquidation": {
        "ar": "تصفية", "bn": "লিকুইডেশন", "de": "Liquidation", "es": "liquidación", "fa": "تسویه",
        "fr": "liquidation", "ha": "liquidation", "he": "חיסול", "hi": "लिक्विडेशन", "id": "likuidasi",
        "it": "liquidazione", "ja": "清算", "ko": "청산", "nl": "liquidatie", "pl": "likwidacja",
        "pt": "liquidação", "ru": "ликвидация", "sw": "uondoaji", "th": "การชำระบัญชี",
        "tr": "tasfiye", "uk": "ліквідація", "ur": "لیکویڈیشن", "vi": "thanh lý",
        "zh-CN": "清算", "zh-TW": "清算",
    },
    "Borrow": {
        "ar": "اقتراض", "es": "Pedir prestado", "fr": "Emprunter", "id": "Pinjam", "it": "Prendi in prestito",
        "ja": "借入", "ko": "대출", "pt": "Emprestar", "ru": "Заём", "th": "ยืม",
        "vi": "Vay", "zh-CN": "借款", "zh-TW": "借款",
    },
    "Lend": {
        "ar": "إقراض", "es": "Prestar", "fr": "Prêter", "id": "Pinjamkan", "it": "Presta",
        "ja": "貸出", "ko": "대여", "pt": "Emprestar", "ru": "Кредитование", "th": "ให้ยืม",
        "vi": "Cho vay", "zh-CN": "出借", "zh-TW": "出借",
    },
    "collateral": {
        "ar": "ضمان", "es": "colateral", "fr": "collatéral", "id": "jaminan", "it": "collaterale",
        "ja": "担保", "ko": "담보", "pt": "colateral", "ru": "залог", "th": "หลักประกัน",
        "vi": "tài sản thế chấp", "zh-CN": "抵押品", "zh-TW": "抵押品",
    },
    "loan-to-value ratio": {
        "ar": "نسبة القرض إلى القيمة", "es": "relación préstamo-valor", "fr": "ratio prêt-valeur",
        "id": "rasio pinjaman terhadap nilai", "it": "rapporto prestito-valore", "ja": "LTV 比率",
        "ko": "담보 대비 대출 비율", "pt": "relação empréstimo-valor", "ru": "коэффициент LTV",
        "th": "อัตราส่วนเงินกู้ต่อมูลค่า", "vi": "tỷ lệ cho vay trên giá trị",
        "zh-CN": "贷款价值比", "zh-TW": "貸款價值比",
    },
    "liquidation threshold": {
        "ar": "عتبة التصفية", "es": "umbral de liquidación", "fr": "seuil de liquidation",
        "id": "ambang likuidasi", "it": "soglia di liquidazione", "ja": "清算閾値",
        "ko": "청산 임계값", "pt": "limiar de liquidação", "ru": "порог ликвидации",
        "th": "เกณฑ์การชำระบัญชี", "vi": "ngưỡng thanh lý", "zh-CN": "清算阈值",
        "zh-TW": "清算閾值",
    },
    "liquidated": {
        "es": "liquidado", "zh-CN": "被清算", "zh-TW": "被清算",
    },
    "LP position": {
        "ar": "مركز LP", "es": "posición LP", "fr": "position LP", "id": "posisi LP", "it": "posizione LP",
        "ja": "LP ポジション", "ko": "LP 포지션", "pt": "posição LP", "ru": "позиция LP",
        "th": "ตำแหน่ง LP", "vi": "vị thế LP", "zh-CN": "LP 仓位", "zh-TW": "LP 倉位",
    },
    "Repay": {
        "ar": "سداد", "es": "Reembolsar", "fr": "Rembourser", "id": "Bayar kembali", "it": "Rimborsa",
        "ja": "返済", "ko": "상환", "pt": "Reembolsar", "ru": "Погасить", "th": "ชำระคืน",
        "vi": "Trả nợ", "zh-CN": "还款", "zh-TW": "還款",
    },
    "borrow": {
        "ar": "اقتراض", "es": "pedir prestado", "fr": "emprunter", "id": "pinjam", "it": "prendere in prestito",
        "ja": "借入", "ko": "대출", "pt": "emprestar", "ru": "заём", "th": "ยืม",
        "vi": "vay", "zh-CN": "借款", "zh-TW": "借款",
    },
    "withdraw": {
        "ar": "سحب", "es": "retirar", "fr": "retirer", "id": "tarik", "it": "prelevare",
        "ja": "引出", "ko": "출금", "pt": "retirar", "ru": "вывести", "th": "ถอน",
        "vi": "rút", "zh-CN": "提取", "zh-TW": "提取",
    },
}

# Per-locale overrides for gaps in T tables (en -> locale -> translation)
PATCH: dict[str, dict[str, str]] = {
    "Logo": {
        "fr": "Logo", "id": "Logo", "it": "Logo", "nl": "Logo", "pl": "Logo", "vi": "Biểu trưng",
    },
    "Ethereum": {
        "es": "Ethereum", "fr": "Ethereum", "ha": "Ethereum", "id": "Ethereum", "it": "Ethereum",
        "nl": "Ethereum", "pt": "Ethereum", "sw": "Ethereum", "tr": "Ethereum", "vi": "Ethereum",
    },
    "Bitcoin": {
        "es": "Bitcoin", "fr": "Bitcoin", "ha": "Bitcoin", "id": "Bitcoin", "it": "Bitcoin",
        "nl": "Bitcoin", "pt": "Bitcoin", "sw": "Bitcoin", "vi": "Bitcoin",
    },
    "Avana APY": {
        "he": "APY של Avana", "ja": "Avana APY", "ko": "Avana APY", "nl": "Avana-APY", "pl": "APY Avana",
        "th": "Avana APY", "tr": "Avana APY", "ur": "Avana APY",
    },
    "Stable LP Hub": {
        "bn": "স্থিতিশীল LP হাব", "de": "Stabiler LP-Hub", "hi": "स्थिर LP हब", "nl": "Stabiele LP-hub",
        "pl": "Stabilny hub LP", "tr": "Stabil LP Hub", "uk": "Стабільний LP Hub",
    },
    "Correlated LP Hub": {
        "bn": "সংশ্লিষ্ট LP হাব", "de": "Korrelierter LP-Hub", "hi": "सहसंबद्ध LP हब",
        "nl": "Gecorreleerde LP-hub", "pl": "Skorelowany hub LP", "tr": "Korele LP Hub",
        "uk": "Корельований LP Hub",
    },
    "Volatile LP Hub": {
        "bn": "অস্থির LP হাব", "de": "Volatiler LP-Hub", "hi": "अस्थिर LP हब",
        "nl": "Volatiele LP-hub", "pl": "Zmienny hub LP", "tr": "Volatil LP Hub",
        "uk": "Волатильний LP Hub",
    },
    "Console": {
        "bn": "কনসোল", "fr": "Console", "ha": "Console", "hi": "कंसोल", "it": "Console",
        "pt": "Console", "sw": "Dashibodi",
    },
    "oracle": {
        "fr": "oracle", "ha": "oracle", "id": "oracle", "sw": "oracle", "tr": "oracle", "vi": "oracle",
    },
    "Stablecoins": {
        "de": "Stablecoins", "es": "Stablecoins", "fr": "Stablecoins", "ha": "Stablecoins",
        "pt": "Stablecoins", "sw": "Sarafu thabiti",
    },
    "Target Q3 2026": {
        "id": "Target K3 2026", "ja": "目標：2026年Q3", "ko": "목표: 2026년 3분기", "ru": "Цель: Q3 2026",
        "tr": "Hedef: 2026 3. çeyrek", "uk": "Ціль: Q3 2026",
    },
    "Target Q4 2026": {
        "id": "Target K4 2026", "ja": "目標：2026年Q4", "ko": "목표: 2026년 4분기", "ru": "Цель: Q4 2026",
        "tr": "Hedef: 2026 4. çeyrek", "uk": "Ціль: Q4 2026",
    },
    "Target Q1 2027": {
        "id": "Target K1 2027", "ja": "目標：2027年Q1", "ko": "목표: 2027년 1분기", "ru": "Цель: Q1 2027",
        "tr": "Hedef: 2027 1. çeyrek", "uk": "Ціль: Q1 2027",
    },
    "collateral": {
        "bn": "জামানত", "ha": "takardar garanti", "hi": "जमानत", "pl": "zabezpieczenie", "sw": "dhamana",
    },
    "Released": {
        "ja": "リリース済み", "ko": "출시됨", "ru": "Выпущено", "tr": "Yayınlandı", "uk": "Випущено",
    },
    "In Progress": {
        "ja": "進行中", "ko": "진행 중", "ru": "В работе", "tr": "Devam ediyor", "uk": "В процесі",
    },
    "Earn interest from LP borrower demand": {
        "fa": "از تقاضای وام‌گیرندگان LP سود بگیرید", "he": "הרוויחו ריבית מביקוש של לווי LP",
        "nl": "Verdien rente uit vraag van LP-geldleners", "pl": "Zarabiaj odsetki od popytu pożyczkobiorców LP",
        "ur": "LP قرض لینے والوں کی طلب سے سود کمائیں",
    },
    "Ways teams put LP credit to work": {
        "fa": "راه‌هایی که تیم‌ها از اعتبار LP استفاده می‌کنند",
        "he": "דרכים שבהן צוותים מנצלים אשראי LP",
        "nl": "Manieren waarop teams LP-krediet inzetten",
        "pl": "Sposoby, w jakie zespoły wykorzystują kredyt LP",
        "ur": "ٹیمیں LP کریڈٹ کو کام میں لانے کے طریقے",
    },
    "LP credit to work": {
        "fa": "اعتبار LP در عمل", "he": "אשראי LP בפעולה", "nl": "LP-krediet aan het werk",
        "pl": "kredyt LP w działaniu", "ur": "LP کریڈٹ کام میں",
    },
    "Range": {"bn": "পরিসর", "ha": "Iyaka", "hi": "सीमा", "sw": "Masafa"},
    "Health": {"bn": "স্বাস্থ্য", "ha": "Lafiya", "hi": "स्वास्थ्य", "sw": "Afya"},
    "Borrow": {"bn": "ধার নিন", "ha": "Aro", "hi": "उधार लें", "sw": "Kopa"},
    "Lend": {"bn": "ধার দিন", "ha": "Bashi", "hi": "उधार दें", "sw": "Kopesha"},
    "liquidation threshold": {
        "hi": "परिसमापन सीमा", "nl": "liquidatiedrempel", "tr": "tasfiye eşiği", "uk": "поріг ліквідації",
    },
    "Buffer": {"id": "Buffer", "it": "Buffer", "nl": "Buffer"},
    "loan-to-value ratio": {"hi": "ऋण-से-मूल्य अनुपात", "tr": "kredi-değer oranı", "uk": "коефіцієнт LTV"},
    "LP position": {"hi": "LP पोज़िशन", "tr": "LP pozisyonu", "uk": "позиція LP"},
    "Repay": {"hi": "चुकाएं", "tr": "Geri öde", "uk": "Погасити"},
    "borrow": {"hi": "उधार लें", "tr": "borç al", "uk": "позичити"},
    "withdraw": {"hi": "निकालें", "tr": "çek", "uk": "вивести"},
    "Partner": {"de": "Partner", "it": "Partner", "nl": "Partner"},
    "Full Black": {"it": "Nero completo", "pt": "Preto completo", "ru": "Полный чёрный"},
    "Full Cyan": {"it": "Ciano completo", "pt": "Ciano completo", "ru": "Полный циан"},
    "Avana Markets": {"fa": "بازارهای Avana", "it": "Mercati Avana", "pt": "Mercados Avana"},
    "Avana Hubs Strategy": {
        "de": "Avana-Hub-Strategie", "nl": "Avana-hubsstrategie", "pl": "Strategia hubów Avana",
    },
    "Leverage Layer": {"de": "Hebel-Schicht", "nl": "Hefboomlaag", "pl": "Warstwa dźwigni"},
    "Unwind Layer": {"de": "Abwicklungs-Schicht", "nl": "Ontvouwlaag", "pl": "Warstwa zamykania"},
    "Risk Layer": {"de": "Risiko-Schicht", "nl": "Risicolaag", "pl": "Warstwa ryzyka"},
    "Monitoring Layer": {"de": "Überwachungs-Schicht", "nl": "Monitoringlaag", "pl": "Warstwa monitorowania"},
    "liquidation": {"fr": "liquidation", "ha": "liquidation"},
    "liquidated": {"hi": "परिसमापित", "pl": "zlikwidowany"},
    "Powered by Aave v4": {"it": "Basato su Aave v4", "pt": "Desenvolvido com Aave v4"},
    "Collateral Swap": {"it": "Scambio di collaterale", "pt": "Troca de colateral"},
    "Debt Swap": {"it": "Scambio di debito", "pt": "Troca de dívida"},
    "Roadmap": {"it": "Roadmap", "pt": "Roteiro"},
    "Brand": {"id": "Merek", "it": "Brand"},
    "DEX Coverage": {"de": "DEX-Abdeckung", "nl": "DEX-dekking"},
    "Position Safety": {"de": "Positionssicherheit", "nl": "Positieveiligheid"},
    "Liquidity pools": {"nl": "Liquiditeitspools", "pl": "Pule płynności"},
    "Avana about hero image": {
        "nl": "Avana over-ons hero-afbeelding", "pl": "Obraz główny Avana o nas",
    },
    "Protocol Operations": {"nl": "Protocoloperaties", "pl": "Operacje protokołu"},
    "Risk Management": {"nl": "Risicobeheer", "pl": "Zarządzanie ryzykiem"},
    "Safety by design": {"nl": "Veiligheid door ontwerp", "pl": "Bezpieczeństwo z założenia"},
    "Color": {"es": "Color"},
    "questions": {"fr": "questions"},
    "Architecture": {"fr": "Architecture"},
    "Liquidation": {"fr": "Liquidation"},
    "Liquidations": {"fr": "Liquidations"},
    "Newsroom": {"de": "Newsroom"},
    "LP positions that can earn in AMMs, back loans in lending markets, and carry risk controls specific to the pools they come from.": {
        "fa": "موقعیت‌های LP که می‌توانند در AMM درآمد کسب کنند، وام‌ها را در بازارهای وام پشتیبانی کنند و کنترل‌های ریسک مخصوص استخرهای مبدأ را حمل کنند.",
    },
    "The Avana palette is intentionally simple: white for space, ink for clarity, and cyan for recognition.": {
        "fa": "پالت Avana عمداً ساده است: سفید برای فضا، جوهر برای وضوح و فیروزه‌ای برای شناسایی.",
    },
    "Aave v4 uses": {"fa": "Aave v4 از"},
    "Up to 70% of your LP's value, depending on pool type, volatility, and": {
        "fa": "تا ۷۰٪ ارزش LP شما، بسته به نوع استخر، نوسان و",
    },
    "Avana Interest": {"fa": "سود Avana"},
    "Health Factor < 1.0. Fees apply first, needed LP principal unwinds, and residual value returns to you.": {
        "fa": "ضریب سلامت < ۱.۰. ابتدا کارمزدها اعمال می‌شود، اصل LP مورد نیاز unwind می‌شود و ارزش باقی‌مانده به شما بازمی‌گردد.",
    },
    "Typography": {"sw": "Uchapishaji"},
    "Governance v1": {"it": "Governance v1"},
    "01. Protocol team": {"nl": "01. Protocolteam"},
    "02. Operations team": {"nl": "02. Operationsteam"},
    "03. Market Risk team": {"nl": "03. Marktrisicoteam"},
    "04. Collateral Risk team": {"nl": "04. Collateralrisicoteam"},
    "In 2021,": {"nl": "In 2021,"},
}

# Proper nouns / keep English for all locales
KEEP_ENGLISH = {
    "$2.4M", "Spoke", "object-cover object-top", "Aave", "AMM Market",
    "@keyframes feature-highlight-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }",
    "3.5% APY", "USD Coin", "Tether", "Curve USD", "Frax", "USDe", "PayPal USD", "LUSD", "USDD",
    "Ether", "Wrapped Ether", "stETH", "wstETH", "rETH", "cbETH", "weETH", "ETHx", "osETH",
    "Wrapped Bitcoin", "tBTC", "cbBTC", "renBTC", "sBTC", "LBTC", "Chainlink", "Lido",
    "Compound", "Maker", "Synthetix", "The Graph", "border-amber-200 bg-amber-50",
    "border-gray-200 bg-gray-50", "HF < 1.0",
}


def build() -> dict:
    worklist = json.loads(WORKLIST.read_text())["marketing.json"]
    out: dict[str, dict[str, str]] = {}

    for en, locales in worklist.items():
        if en in KEEP_ENGLISH:
            out[en] = same(locales, en)
        elif en in T:
            merged = by_lang(locales, T[en], fallback=en)
            if en in PATCH:
                merged.update({loc: tr for loc, tr in PATCH[en].items() if loc in locales})
            out[en] = merged
        else:
            raise KeyError(f"Missing translation table for: {en!r}")

    return {"marketing.json": out}


def main() -> None:
    data = build()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    strings = data["marketing.json"]
    slots = sum(len(v) for v in strings.values())
    print(f"Wrote {OUT}")
    print(f"strings: {len(strings)}")
    print(f"translation slots: {slots}")


if __name__ == "__main__":
    main()
