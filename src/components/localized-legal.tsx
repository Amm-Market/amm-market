import { getLocale } from "next-intl/server"
import { LocalizeStrings } from "@/components/localize-strings"
import { getLegalStringMap } from "@/lib/content-i18n/load-content"

export async function LocalizedLegal({
  kind,
  children,
}: {
  kind: "privacy" | "terms"
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const map = await getLegalStringMap(locale, kind)
  return <LocalizeStrings map={map}>{children}</LocalizeStrings>
}
