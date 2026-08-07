/**
 * Server wrapper that localizes developer doc bodies without rewriting every page.
 */
import { getLocale } from "next-intl/server"
import { LocalizeStrings } from "@/components/localize-strings"
import { docsPageKeyFromPath, getDocsStringMap } from "@/lib/content-i18n/load-content"

export async function LocalizedDocBody({
  pageKey,
  children,
}: {
  pageKey?: string
  children: React.ReactNode
}) {
  const locale = await getLocale()
  // Infer key is harder without pathname on server; callers pass pageKey.
  const key = pageKey ?? "hub"
  const map = await getDocsStringMap(locale, key)
  return <LocalizeStrings map={map}>{children}</LocalizeStrings>
}

export { docsPageKeyFromPath }
