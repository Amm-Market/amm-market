/**
 * Locale-aware English-only notice for content that has not been reviewed yet.
 */
import { getLocale, getTranslations } from "next-intl/server"
import { defaultLocale } from "@/i18n/locales"
import { isEnglishOnlyLegal, usesEnglishContentFallback } from "@/lib/i18n/content"

type ContentKind = "legal" | "faq" | "docs" | "blog"

export async function EnglishOnlyNotice({ kind }: { kind: ContentKind }) {
  const locale = await getLocale()
  if (locale === defaultLocale) return null

  if (kind === "legal") {
    if (!isEnglishOnlyLegal(locale)) return null
  } else if (!usesEnglishContentFallback(locale)) {
    return null
  }

  const namespace = kind === "legal" ? "legal" : kind
  const t = await getTranslations(namespace)
  const badge = await getTranslations("legal")

  return (
    <div
      role="note"
      className="mb-6 rounded-lg border border-[#01AACF]/25 bg-[#01AACF]/6 px-4 py-3 text-sm leading-6 text-[#0F1518]"
    >
      <span className="font-medium text-[#01AACF]">{badge("englishOnlyBadge")}</span>
      <span className="ms-2">{t("englishOnlyNote")}</span>
    </div>
  )
}
