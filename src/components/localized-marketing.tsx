import { getLocale } from "next-intl/server"
import { LocalizeStrings } from "@/components/localize-strings"
import { getMarketingMaps } from "@/lib/content-i18n/load-content"

/**
 * Localizes marketing page trees using exact phrase maps from
 * content/{locale}/marketing.json.
 */
export async function LocalizedMarketing({
  keys,
  children,
}: {
  keys: string[]
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const map = await getMarketingMaps(locale, keys)
  return <LocalizeStrings map={map}>{children}</LocalizeStrings>
}
