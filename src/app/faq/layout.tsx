import type { Metadata } from "next"
import { faqSchema } from "@/app/faq/faq-content"
import { siteRoutes } from "@/lib/site"

/**
 * FAQ page metadata for SEO
 */
export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description:
    "Get answers about LP-backed borrowing, productive collateral, conservative valuation, health checks, liquidation, and interface fee policy in Avana.",
  alternates: {
    canonical: siteRoutes.faq,
  },
  openGraph: {
    title: "FAQ - Avana",
    url: siteRoutes.faq,
    description:
      "Find canonical answers about LP collateral, borrowing capacity, liquidation, and interface policy in Avana.",
    images: ["/og?title=Frequently%20Asked%20Questions&subtitle=Canonical%20answers%20about%20LP%20collateral%2C%20borrowing%20capacity%2C%20and%20liquidation&type=faq"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og?title=Frequently%20Asked%20Questions&subtitle=Canonical%20answers%20about%20LP%20collateral%2C%20borrowing%20capacity%2C%20and%20liquidation&type=faq"],
  },
}

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
