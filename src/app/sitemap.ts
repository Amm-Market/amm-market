import { MetadataRoute } from 'next'

/**
 * Generates the sitemap.xml for the AMM Market website.
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
  const baseUrl = 'https://ammmarket.xyz'
  const now = new Date()
  
  // Main landing pages - highest priority
  const landingPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/early-access`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/developers`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lightpaper`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/open-spoke`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/stable-spoke`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/webapp`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/brand`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Developer documentation pages
  const developerDocs: MetadataRoute.Sitemap = [
    // Introduction section
    '/developers/introduction',
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
    '/developers/architecture/health-factor',
    '/developers/architecture/collateral-factors',
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
    '/developers/safety/insurance',
    // Legal section
    '/developers/legal',
    '/developers/legal/disclaimer',
  ].map(path => ({
    url: `${baseUrl}${path}`,
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
    '/blog/aave-v4-amm-spoke',
    '/blog/defi-ux-challenges',
    '/blog/amm-markets-lp-collateral',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Legal and utility pages - lowest priority
  const utilityPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  return [...landingPages, ...developerDocs, ...blogPosts, ...utilityPages]
}
