export const DEFAULT_LOCALE = "en-US" as const
export const SITE_LOCALE_COOKIE = "amm-market.locale"

export const SUPPORTED_LOCALES = ["en-US", "es-ES", "fr-FR"] as const

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

const localeSet = new Set<string>(SUPPORTED_LOCALES)

export function isSupportedLocale(value: string | null | undefined): value is SupportedLocale {
  return value != null && localeSet.has(value)
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/") {
    return pathname
  }

  const segments = pathname.split("/")
  const candidate = segments[1]

  if (!isSupportedLocale(candidate)) {
    return pathname
  }

  const stripped = `/${segments.slice(2).join("/")}`.replace(/\/+/g, "/")
  return stripped === "/" ? "/" : stripped.replace(/\/$/, "") || "/"
}

export function addLocalePrefix(pathname: string, locale: string): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`
  const basePath = stripLocalePrefix(normalizedPath)

  if (locale === DEFAULT_LOCALE) {
    return basePath
  }

  return basePath === "/" ? `/${locale}` : `/${locale}${basePath}`
}

export function getLocalizedPathname(pathname: string, locale: string): string {
  return addLocalePrefix(pathname, locale)
}

export function getAlternateLanguageEntries(pathname: string): Record<string, string> {
  const basePath = stripLocalePrefix(pathname)

  return Object.fromEntries(
    SUPPORTED_LOCALES.map((locale) => [locale, getLocalizedPathname(basePath, locale)])
  )
}
