export const localeCodes = [
  "en",
  "zh-CN",
  "zh-TW",
  "hi",
  "es",
  "ar",
  "fr",
  "bn",
  "pt",
  "ru",
  "ur",
  "id",
  "de",
  "ja",
  "fa",
  "sw",
  "vi",
  "tr",
  "ko",
  "ha",
  "it",
  "th",
  "pl",
  "uk",
  "nl",
  "he",
] as const

export type AppLocale = (typeof localeCodes)[number]

export const defaultLocale: AppLocale = "en"

export type LocaleDefinition = {
  code: AppLocale
  label: string
  dir: "ltr" | "rtl"
  ogLocale: string
}

/** Speaker-count order (matches header dropdown). */
export const locales: readonly LocaleDefinition[] = [
  { code: "en", label: "English", dir: "ltr", ogLocale: "en_US" },
  { code: "zh-CN", label: "简体中文", dir: "ltr", ogLocale: "zh_CN" },
  { code: "zh-TW", label: "繁體中文", dir: "ltr", ogLocale: "zh_TW" },
  { code: "hi", label: "हिन्दी", dir: "ltr", ogLocale: "hi_IN" },
  { code: "es", label: "Español", dir: "ltr", ogLocale: "es_ES" },
  { code: "ar", label: "العربية", dir: "rtl", ogLocale: "ar_AR" },
  { code: "fr", label: "Français", dir: "ltr", ogLocale: "fr_FR" },
  { code: "bn", label: "বাংলা", dir: "ltr", ogLocale: "bn_BD" },
  { code: "pt", label: "Português", dir: "ltr", ogLocale: "pt_PT" },
  { code: "ru", label: "Русский", dir: "ltr", ogLocale: "ru_RU" },
  { code: "ur", label: "اردو", dir: "rtl", ogLocale: "ur_PK" },
  { code: "id", label: "Bahasa Indonesia", dir: "ltr", ogLocale: "id_ID" },
  { code: "de", label: "Deutsch", dir: "ltr", ogLocale: "de_DE" },
  { code: "ja", label: "日本語", dir: "ltr", ogLocale: "ja_JP" },
  { code: "fa", label: "فارسی", dir: "rtl", ogLocale: "fa_IR" },
  { code: "sw", label: "Kiswahili", dir: "ltr", ogLocale: "sw_KE" },
  { code: "vi", label: "Tiếng Việt", dir: "ltr", ogLocale: "vi_VN" },
  { code: "tr", label: "Türkçe", dir: "ltr", ogLocale: "tr_TR" },
  { code: "ko", label: "한국어", dir: "ltr", ogLocale: "ko_KR" },
  { code: "ha", label: "Hausa", dir: "ltr", ogLocale: "ha_NG" },
  { code: "it", label: "Italiano", dir: "ltr", ogLocale: "it_IT" },
  { code: "th", label: "ไทย", dir: "ltr", ogLocale: "th_TH" },
  { code: "pl", label: "Polski", dir: "ltr", ogLocale: "pl_PL" },
  { code: "uk", label: "Українська", dir: "ltr", ogLocale: "uk_UA" },
  { code: "nl", label: "Nederlands", dir: "ltr", ogLocale: "nl_NL" },
  { code: "he", label: "עברית", dir: "rtl", ogLocale: "he_IL" },
] as const

export function isAppLocale(value: string): value is AppLocale {
  return (localeCodes as readonly string[]).includes(value)
}

export function getLocaleDefinition(locale: string): LocaleDefinition {
  return locales.find((entry) => entry.code === locale) ?? locales[0]
}

export function getLocaleDir(locale: string): "ltr" | "rtl" {
  return getLocaleDefinition(locale).dir
}
