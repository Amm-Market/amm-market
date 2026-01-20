import type { Metadata } from "next"

/**
 * FAQ page metadata for SEO
 */
export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Get answers to common questions about AMM Market, LP collateral, borrowing, liquidation, health factors, and troubleshooting wallet connections.",
  openGraph: {
    title: "FAQ - AMM Market",
    description: "Find answers to frequently asked questions about borrowing against LP positions on Aave v4.",
    images: ["/og?title=Frequently%20Asked%20Questions&subtitle=Get%20answers%20about%20LP%20collateral%2C%20borrowing%2C%20and%20liquidation&type=faq"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og?title=Frequently%20Asked%20Questions&subtitle=Get%20answers%20about%20LP%20collateral%2C%20borrowing%2C%20and%20liquidation&type=faq"],
  },
}

/**
 * JSON-LD FAQ Schema for rich search results
 * This helps Google display FAQ rich snippets
 */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the core insight behind AMM Market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An LP position is not merely a bundle of two tokens; it is a sophisticated financial instrument whose value is composed of principal liquidity and accrued trading fees. AMM Market solves this by building on Aave v4's Hub-and-Spoke model."
      }
    },
    {
      "@type": "Question",
      name: "How does AMM Market handle LP positions as collateral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Users deposit their LP shares into AMM Market, which serves as collateral. The LP share remains active, continuing to earn fees while providing a line of credit through the Aave v4 Hub."
      }
    },
    {
      "@type": "Question",
      name: "How is my LP position valued for borrowing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Spoke uses a sophisticated oracle system to determine real-time value, taking into account current prices of underlying tokens and the specific price range of the LP. Based on this and a collateral factor, maximum borrowable amount is calculated."
      }
    },
    {
      "@type": "Question",
      name: "What happens during liquidation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A liquidator can repay a portion of the debt and seize a corresponding portion of the NFT's underlying assets, ensuring the system remains solvent. Users can reclaim accrued trading fees at any time without affecting collateralized status."
      }
    },
    {
      "@type": "Question",
      name: "What is the frontend fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AMM Market charges a flat frontend fee of 0.20% on each user action through the interface. This covers supplying collateral, borrowing, repaying, withdrawing, and claiming."
      }
    }
  ]
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
