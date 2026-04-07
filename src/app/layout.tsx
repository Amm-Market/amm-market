import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { diatypeFont } from "@/app/site-fonts"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import {
  buildOgImagePath,
  DEFAULT_OG_DESCRIPTION,
  DEFAULT_OG_SUBTITLE,
  DEFAULT_SITE_DESCRIPTION,
  LOGO_PATH,
  SITE_NAME,
  SITE_URL,
  SOCIAL_HANDLE,
  siteRoutes,
  WORDMARK_PATH,
} from "@/lib/site"

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
export function generateMetadata(): Metadata {
  const title = `${SITE_NAME} - Borrow Against LP Positions on Aave v4`
  const description = DEFAULT_SITE_DESCRIPTION

  return {
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
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
    authors: [{ name: `${SITE_NAME} Team` }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_URL,
      siteName: SITE_NAME,
      title,
      description: DEFAULT_OG_DESCRIPTION,
      images: [
        {
          url: buildOgImagePath({
            title: SITE_NAME,
            subtitle: DEFAULT_OG_SUBTITLE,
          }),
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - DeFi Liquidity Protocol`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME} - Borrow Against LP Positions`,
      description: "Unlock liquidity from your LP tokens on Aave v4",
      site: SOCIAL_HANDLE,
      creator: SOCIAL_HANDLE,
      images: [buildOgImagePath({ title: SITE_NAME, subtitle: DEFAULT_OG_SUBTITLE })],
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
    applicationName: SITE_NAME,
    category: "Finance",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: "/",
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
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO_PATH}`,
  description: "DeFi protocol enabling borrowing against LP positions on Aave v4",
  sameAs: [
    "https://twitter.com/dexmini",
    "https://github.com/aave",
    "https://t.me/dexmini",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${SITE_URL}${siteRoutes.faq}`,
  },
}

/**
 * JSON-LD structured data for the website
 */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

const shouldRenderVercelInsights = process.env.VERCEL === "1" || Boolean(process.env.VERCEL_ENV)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={diatypeFont.variable}>
      <head>
        <link
          rel="preload"
          href={LOGO_PATH}
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href={WORDMARK_PATH}
          as="image"
          type="image/svg+xml"
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
        {/* Skip to main content link for accessibility - WCAG 2.4.1 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        {shouldRenderVercelInsights ? <SpeedInsights /> : null}
        {shouldRenderVercelInsights ? <Analytics /> : null}
      </body>
    </html>
  )
}
