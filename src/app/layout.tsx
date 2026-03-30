import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { GTProvider, T, getGT, getLocaleDirection } from "gt-next/server"
import { getAlternateLanguageEntries } from "@/lib/locales"
import getLocale from "@/i18n/getLocale"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

/**
 * RootLayout - The main layout wrapper for the entire application.
 * 
 * @description
 * This layout provides:
 * - Global self-hosted typography loading
 * - Header and Footer components
 * - SEO metadata defaults
 * - JSON-LD structured data for organization
 * 
 * Individual pages should override metadata as needed for SEO.
 */

/**
 * Default metadata for the application.
 * Individual pages should export their own metadata to override these defaults.
 * 
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getGT()
  const title = t("AMM Market - Borrow Against LP Positions on Aave v4")
  const description = t(
    "Unlock liquidity from your LP tokens. Borrow up to 80% against Uniswap, Curve, and Balancer positions while continuing to earn trading fees on Aave v4."
  )

  return {
    title: {
      default: title,
      template: "%s | AMM Market",
    },
    description,
    keywords: [
      "DeFi",
      "LP tokens",
      "liquidity provider",
      "collateral",
      "borrowing",
      "Aave v4",
      "Uniswap",
      "Curve",
      "Balancer",
      "AMM",
      "lending",
      "yield farming",
    ],
    authors: [{ name: "AMM Market Team" }],
    creator: "AMM Market",
    publisher: "AMM Market",
    openGraph: {
      type: "website",
      locale: locale.replace("-", "_"),
      url: "https://ammmarket.xyz",
      siteName: "AMM Market",
      title,
      description: t("Unlock liquidity from your LP tokens while continuing to earn trading fees."),
      images: [
        {
          url: "/og?title=AMM%20Market&subtitle=Borrow%20Against%20LP%20Positions%20on%20Aave%20v4",
          width: 1200,
          height: 630,
          alt: t("AMM Market - DeFi Liquidity Protocol"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("AMM Market - Borrow Against LP Positions"),
      description: t("Unlock liquidity from your LP tokens on Aave v4"),
      site: "@dexmini",
      creator: "@dexmini",
      images: ["/og?title=AMM%20Market&subtitle=Borrow%20Against%20LP%20Positions%20on%20Aave%20v4"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    applicationName: "AMM Market",
    category: "Finance",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL("https://ammmarket.xyz"),
    alternates: {
      canonical: "/",
      languages: getAlternateLanguageEntries("/"),
    },
  }
}

/**
 * Viewport configuration for responsive design
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
}

/**
 * JSON-LD structured data for organization
 * Helps search engines understand the organization behind the website
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AMM Market",
  url: "https://ammmarket.xyz",
  logo: "https://ammmarket.xyz/aave-logo.svg",
  description: "DeFi protocol enabling borrowing against LP positions on Aave v4",
  sameAs: [
    "https://twitter.com/dexmini",
    "https://github.com/aave",
    "https://discord.gg/aave",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://ammmarket.xyz/faq",
  },
}

/**
 * JSON-LD structured data for the website
 */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AMM Market",
  url: "https://ammmarket.xyz",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ammmarket.xyz/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const direction = await getLocaleDirection(locale)
  const t = await getGT()

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <head>
        {/* Preload critical hero image for faster LCP */}
        <link rel="preload" href="/images/Hero__4_.png" as="image" />
        <link
          rel="preload"
          href="/fonts/diatype/ABCDiatype-Regular-Trial.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-white font-sans">
        <GTProvider locale={locale}>
          {/* Skip to main content link for accessibility - WCAG 2.4.1 */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            {t("Skip to main content")}
          </a>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              <T>{children}</T>
            </main>
            <Footer />
          </div>
        </GTProvider>
        <Analytics />
      </body>
    </html>
  )
}
