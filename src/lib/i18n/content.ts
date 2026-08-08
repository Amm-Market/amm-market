import { defaultLocale } from "@/i18n/locales"

/** Legal pages stay English until counsel-approved locale versions exist. */
export function isEnglishOnlyLegal(locale: string): boolean {
  return locale !== defaultLocale
}

/** FAQ/blog/docs bodies fall back to English when not localized. */
export function usesEnglishContentFallback(locale: string): boolean {
  return locale !== defaultLocale
}
