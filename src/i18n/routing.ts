import { defineRouting } from "next-intl/routing"
import { defaultLocale, localeCodes } from "@/i18n/locales"

export const routing = defineRouting({
  locales: localeCodes,
  defaultLocale,
  localePrefix: "as-needed",
  localeDetection: false,
})
