import { createPageMetadata } from "@/lib/i18n/page-metadata"
import type { ReactNode } from "react"

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
