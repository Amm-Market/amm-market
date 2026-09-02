import { createPageMetadata } from "@/lib/i18n/page-metadata"

export const dynamic = "force-static"

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
