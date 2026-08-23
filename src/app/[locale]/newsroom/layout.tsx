import { createPageMetadata } from "@/lib/i18n/page-metadata"

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
