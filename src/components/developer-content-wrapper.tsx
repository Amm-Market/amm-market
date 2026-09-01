import type React from "react"
import dynamic from "next/dynamic"
import { headers } from "next/headers"
import { getLocale } from "next-intl/server"
import { LocalizeStrings } from "@/components/localize-strings"
import { docsPageKeyFromPath, getDocsStringMap } from "@/lib/content-i18n/load-content"
import { stripLocale } from "@/lib/i18n/path"

const DeferredPageNavigation = dynamic(
  () => import("./page-navigation").then((module) => module.PageNavigation),
  {
    loading: () => <div aria-hidden="true" className="mt-12 border-t border-border pt-6" />,
  },
)

export async function DeveloperContentWrapper({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  const headerStore = await headers()
  const rawPath = headerStore.get("x-pathname") || "/developers"
  const pathname = stripLocale(rawPath)
  const pageKey = docsPageKeyFromPath(pathname)
  const map = await getDocsStringMap(locale, pageKey)

  return (
    <div className="developer-content pb-20 lg:pb-24" data-developer-doc-shell>
      <LocalizeStrings map={map}>{children}</LocalizeStrings>
      <div data-export-skip>
        <DeferredPageNavigation />
      </div>
    </div>
  )
}
