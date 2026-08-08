import { createPageMetadata } from "@/lib/i18n/page-metadata"
import type { Metadata } from "next"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

/**
 * Newsroom section layout with SEO metadata
 */
export async function generateMetadata() {
  return createPageMetadata("newsroom", "/newsroom", { ogType: "blog" })
}

export default function NewsroomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
