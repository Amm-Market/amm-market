import type { Metadata } from "next"
import { getLocale } from "next-intl/server"
import { defaultLocale } from "@/i18n/locales"
import { loadDocsContent } from "@/lib/content-i18n/load-content"

/**
 * Locale-aware docs <title> / description from content/{locale}/docs.json meta.
 */
export async function createDocsMetadata(
  pageKey: string,
  fallback: { title: string; description: string },
): Promise<Metadata> {
  const locale = await getLocale()
  if (locale === defaultLocale) {
    return { title: fallback.title, description: fallback.description }
  }

  try {
    const docs = await loadDocsContent(locale)
    const page = docs[pageKey]
    if (page?.meta?.title || page?.meta?.description) {
      return {
        title: page.meta.title || fallback.title,
        description: page.meta.description || fallback.description,
      }
    }
  } catch {
    // fall through
  }

  return { title: fallback.title, description: fallback.description }
}
