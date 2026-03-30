import { cookies, headers } from "next/headers"
import { DEFAULT_LOCALE, SITE_LOCALE_COOKIE, isSupportedLocale } from "@/lib/locales"

const GT_LOCALE_COOKIE = "generaltranslation.locale"

export default async function getLocale() {
  const cookieStore = await cookies()
  const appLocale = cookieStore.get(SITE_LOCALE_COOKIE)?.value

  if (isSupportedLocale(appLocale)) {
    return appLocale
  }

  const cookieLocale = cookieStore.get(GT_LOCALE_COOKIE)?.value

  if (isSupportedLocale(cookieLocale)) {
    return cookieLocale
  }

  const headerList = await headers()
  const acceptLanguage = headerList.get("accept-language")?.split(",").map((value) => value.split(";")[0]?.trim())

  for (const candidate of acceptLanguage ?? []) {
    if (isSupportedLocale(candidate)) {
      return candidate
    }
  }

  return DEFAULT_LOCALE
}
