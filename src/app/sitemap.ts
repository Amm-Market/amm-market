import { MetadataRoute } from 'next'
import { blogRoutes, SITE_URL, siteRoutes } from "@/lib/site"

/**
 * Generates the sitemap.xml for the Avana website.
 * 
 * @description
 * This file is automatically processed by Next.js to generate /sitemap.xml.
 * It includes all public pages organized by priority:
 * - Landing pages (priority 0.8-1.0)
 * - Developer documentation (priority 0.7)
 * - Blog posts (priority 0.6)
 * - Legal/utility pages (priority 0.3)
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  
  // Main landing pages - highest priority
  const landingPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}${siteRoutes.earlyAccess}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}${siteRoutes.developers}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}${siteRoutes.blog}`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${siteRoutes.lightpaper}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}${siteRoutes.faq}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${siteRoutes.borrow}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${siteRoutes.invest}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${siteRoutes.earn}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${siteRoutes.platform}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${siteRoutes.brand}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Developer documentation pages
  const developerDocs: MetadataRoute.Sitemap = [
    // Introduction section
    '/developers/introduction/key-concepts',
    '/developers/introduction/glossary',
    '/developers/introduction/testnet-roadmap',
    // Getting Started section
    '/developers/getting-started',
    '/developers/getting-started/borrow-assets',
    '/developers/getting-started/manage-loans',
    '/developers/getting-started/repay-loans',
    '/developers/getting-started/withdraw-collateral',
    '/developers/getting-started/claim-lp-fees',
    // Architecture section
    '/developers/architecture',
    '/developers/architecture/invest-spoke',
    '/developers/architecture/collateral-factors',
    '/developers/architecture/health-factor',
    '/developers/architecture/platform-fees',
    '/developers/architecture/incentives',
    // Integrations section
    '/developers/integrations',
    '/developers/integrations/allowed-pools',
    '/developers/integrations/price-oracles',
    '/developers/integrations/router-contract',
    // Liquidation section
    '/developers/liquidation',
    '/developers/liquidation/flow',
    '/developers/liquidation/examples',
    // Safety section
    '/developers/safety',
    '/developers/safety/contracts',
    '/developers/safety/bug-bounty',
    '/developers/safety/insurance',
    // Legal section
    '/developers/legal',
    '/developers/legal/disclaimer',
  ].map(path => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Blog posts
  const blogPosts: MetadataRoute.Sitemap = [
    '/blog/introducing-automate',
    '/blog/v1-1-release',
    '/blog/smart-contract-architecture',
    '/blog/integration-guide',
    '/blog/lp-collateral-guide',
    '/blog/hedge-lp-position',
    '/blog/institutional-use-cases',
    '/blog/security-deep-dive',
    '/blog/yield-looping-playbook',
    '/blog/unleashing-lp-tokens',
    blogRoutes.aaveV4AvanaSpoke,
    '/blog/defi-ux-challenges',
    blogRoutes.avanaLpCollateral,
  ].map(path => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Legal and utility pages - lowest priority
  const utilityPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}${siteRoutes.privacy}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}${siteRoutes.terms}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  return [...landingPages, ...developerDocs, ...blogPosts, ...utilityPages]
}
