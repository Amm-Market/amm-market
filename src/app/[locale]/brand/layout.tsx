import { createPageMetadata } from "@/lib/i18n/page-metadata"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

export async function generateMetadata() {
  return createPageMetadata("brand", "/brand", {
    keywords: ["Avana brand","logo assets","brand kit","cyan logo","identity guidelines"],
  })
}

export default function BrandLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
