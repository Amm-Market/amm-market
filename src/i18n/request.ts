import { hasLocale } from "next-intl"
import { getRequestConfig } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { loadMessages } from "@/lib/i18n/load-messages"

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  return {
    locale,
    messages: await loadMessages(locale),
  }
})
