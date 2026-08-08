import { defaultLocale, isAppLocale, localeCodes, type AppLocale } from "@/i18n/locales"
import { SITE_URL } from "@/lib/site"

export function stripLocale(pathname: string): string {
  const segments = pathname.split("/")
  const maybeLocale = segments[1]

  if (maybeLocale && isAppLocale(maybeLocale)) {
    const rest = segments.slice(2).join("/")
    return rest ? `/${rest}` : "/"
  }

  return pathname || "/"
}

export function withLocale(locale: string, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`
  if (!isAppLocale(locale) || locale === defaultLocale) {
    return normalized === "" ? "/" : normalized
  }
  if (normalized === "/") {
    return `/${locale}`
  }
  return `/${locale}${normalized}`
}

export function absoluteLocaleUrl(locale: string, path: string): string {
  return `${SITE_URL}${withLocale(locale, path)}`
}

export function languageAlternates(path: string): Record<string, string> {
  const alternates: Record<string, string> = {}
  for (const locale of localeCodes) {
    alternates[locale] = absoluteLocaleUrl(locale, path)
  }
  alternates["x-default"] = absoluteLocaleUrl(defaultLocale, path)
  return alternates
}

export function assertAppLocale(locale: string): AppLocale {
  return isAppLocale(locale) ? locale : defaultLocale
}
