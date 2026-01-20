# SEO Audit Report

**Audit Date:** January 20, 2026  
**Auditor Role:** Staff Engineer  
**Codebase:** AMM Market Landing Page & Developer Documentation  
**Overall SEO Score:** 40/100

---

## Executive Summary

The AMM Market website currently lacks essential SEO infrastructure. All 40+ pages inherit the same generic metadata from the root layout, there is no sitemap or robots.txt, and structured data is absent. This audit provides a comprehensive remediation plan.

---

## Critical Issues

### 1. Single Metadata for All Pages

**Current State:**
Only `src/app/layout.tsx` defines metadata:

```typescript
export const metadata: Metadata = {
  title: "Amm Market",
  description: "Amm Market is a protocol that integrates with DeFi dexes..."
}
```

**Impact:**
- All 40+ pages show identical title in search results
- Google may flag as duplicate content
- No page-specific keywords or descriptions
- Poor click-through rates from search results

**Affected Pages (Priority Order):**

| Page | Current Title | Required Title |
|------|--------------|----------------|
| `/` | Amm Market | AMM Market - Borrow Against LP Positions on Aave v4 |
| `/developers` | Amm Market | Developer Documentation - AMM Market |
| `/blog` | Amm Market | Blog & Updates - AMM Market |
| `/faq` | Amm Market | FAQ - Frequently Asked Questions - AMM Market |
| `/lightpaper` | Amm Market | Lightpaper - Technical Overview - AMM Market |
| `/early-access` | Amm Market | Early Access - Join the Waitlist - AMM Market |

---

### 2. Missing sitemap.xml

**Impact:**
- Search engines can't efficiently crawl all pages
- New pages may take weeks to be indexed
- No priority signals for important pages

**Solution:** Next.js 14+ native sitemap generation

---

### 3. Missing robots.txt

**Impact:**
- No crawl directives for search bots
- API routes may be indexed accidentally
- No sitemap reference for crawlers

---

### 4. No Structured Data (JSON-LD)

**Impact:**
- No rich snippets in search results
- Missing organization schema
- No FAQ schema for FAQ page
- No article schema for blog posts

---

## Implementation Plan

### Step 1: Create sitemap.ts

**File:** `src/app/sitemap.ts`

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ammmarket.xyz'
  
  // Static pages with their priorities and update frequencies
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/developers', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/blog', priority: 0.8, changeFrequency: 'daily' as const },
    { url: '/lightpaper', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/early-access', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/open-spoke', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/stable-spoke', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/webapp', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/brand', priority: 0.5, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  // Developer documentation pages
  const developerPages = [
    '/developers/introduction',
    '/developers/introduction/key-concepts',
    '/developers/introduction/glossary',
    '/developers/introduction/testnet-roadmap',
    '/developers/getting-started',
    '/developers/getting-started/borrow-assets',
    '/developers/getting-started/manage-loans',
    '/developers/getting-started/repay-loans',
    '/developers/getting-started/withdraw-collateral',
    '/developers/getting-started/claim-lp-fees',
    '/developers/architecture',
    '/developers/architecture/health-factor',
    '/developers/architecture/collateral-factors',
    '/developers/architecture/platform-fees',
    '/developers/architecture/incentives',
    '/developers/integrations',
    '/developers/integrations/allowed-pools',
    '/developers/integrations/price-oracles',
    '/developers/integrations/router-contract',
    '/developers/liquidation',
    '/developers/liquidation/flow',
    '/developers/liquidation/examples',
    '/developers/safety',
    '/developers/safety/contracts',
    '/developers/safety/insurance',
    '/developers/legal',
    '/developers/legal/disclaimer',
  ]

  // Blog posts
  const blogPosts = [
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
  ]

  const now = new Date()

  return [
    // Static pages
    ...staticPages.map(page => ({
      url: `${baseUrl}${page.url}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    
    // Developer docs
    ...developerPages.map(page => ({
      url: `${baseUrl}${page}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    
    // Blog posts
    ...blogPosts.map(page => ({
      url: `${baseUrl}${page}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
```

---

### Step 2: Create robots.ts

**File:** `src/app/robots.ts`

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://ammmarket.xyz'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/private/',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

---

### Step 3: Per-Page Metadata Templates

Each page should export its own metadata. Below are templates for key pages:

#### Homepage (`src/app/page.tsx`)
```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AMM Market - Borrow Against LP Positions on Aave v4',
  description: 'Unlock liquidity from your LP tokens. Borrow up to 80% against Uniswap, Curve, and Balancer positions while continuing to earn trading fees.',
  keywords: ['DeFi', 'LP tokens', 'collateral', 'borrowing', 'Aave v4', 'Uniswap', 'liquidity'],
  openGraph: {
    title: 'AMM Market - Borrow Against LP Positions',
    description: 'Unlock liquidity from your LP tokens on Aave v4',
    url: 'https://ammmarket.xyz',
    siteName: 'AMM Market',
    images: [
      {
        url: '/og/home.png',
        width: 1200,
        height: 630,
        alt: 'AMM Market - DeFi Liquidity Protocol',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMM Market - Borrow Against LP Positions',
    description: 'Unlock liquidity from your LP tokens on Aave v4',
    images: ['/og/home.png'],
  },
  alternates: {
    canonical: 'https://ammmarket.xyz',
  },
}
```

#### Developer Docs (`src/app/developers/page.tsx`)
```typescript
export const metadata: Metadata = {
  title: 'Developer Documentation - AMM Market',
  description: 'Technical documentation for integrating with AMM Market. Learn about LP token collateral, health factors, liquidation flows, and smart contract architecture.',
  keywords: ['AMM Market docs', 'DeFi documentation', 'smart contracts', 'LP collateral', 'integration guide'],
  openGraph: {
    title: 'Developer Documentation - AMM Market',
    description: 'Technical guides for building on AMM Market',
    url: 'https://ammmarket.xyz/developers',
    images: ['/og/developers.png'],
  },
}
```

#### Blog (`src/app/blog/page.tsx`)
```typescript
export const metadata: Metadata = {
  title: 'Blog & Updates - AMM Market',
  description: 'Latest news, technical deep-dives, and updates from the AMM Market team. Learn about DeFi innovations, LP strategies, and protocol development.',
  openGraph: {
    title: 'AMM Market Blog',
    description: 'DeFi insights and protocol updates',
    url: 'https://ammmarket.xyz/blog',
    type: 'website',
  },
}
```

---

### Step 4: JSON-LD Structured Data

#### Organization Schema (Root Layout)

Add to `src/app/layout.tsx`:

```typescript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AMM Market',
  url: 'https://ammmarket.xyz',
  logo: 'https://ammmarket.xyz/aave-logo.svg',
  sameAs: [
    'https://twitter.com/dexmini',
    'https://github.com/aave',
    'https://discord.gg/aave',
  ],
  description: 'DeFi protocol enabling borrowing against LP positions on Aave v4',
}

// In the layout's <head>:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
```

#### FAQ Schema (`src/app/faq/page.tsx`)

```typescript
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I have to sell or exit my LP position?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Your LP remains in the pool and continues earning trading fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can I borrow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Up to 70% of your LP value, depending on pool type and volatility.',
      },
    },
    // Add more FAQs...
  ],
}
```

#### Article Schema (Blog Posts)

```typescript
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Article Title',
  author: {
    '@type': 'Organization',
    name: 'AMM Market',
  },
  publisher: {
    '@type': 'Organization',
    name: 'AMM Market',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ammmarket.xyz/aave-logo.svg',
    },
  },
  datePublished: '2026-01-15',
  dateModified: '2026-01-20',
  image: 'https://ammmarket.xyz/og/blog-post.png',
}
```

---

## SEO Checklist

| Item | Status | Priority | Action Required |
|------|--------|----------|-----------------|
| Unique page titles | NOT DONE | Critical | Add metadata to each page |
| Meta descriptions | NOT DONE | Critical | Add descriptions to each page |
| sitemap.xml | NOT DONE | High | Create src/app/sitemap.ts |
| robots.txt | NOT DONE | High | Create src/app/robots.ts |
| Open Graph tags | NOT DONE | High | Add to page metadata |
| Twitter cards | NOT DONE | Medium | Add to page metadata |
| JSON-LD Organization | NOT DONE | Medium | Add to root layout |
| JSON-LD FAQ | NOT DONE | Medium | Add to FAQ page |
| JSON-LD Article | NOT DONE | Medium | Add to blog posts |
| Canonical URLs | NOT DONE | Low | Add alternates.canonical |
| OG Images | NOT DONE | Medium | Create /public/og/ images |
| Heading hierarchy | PARTIAL | Low | Audit h1-h6 usage |
| Image alt texts | DONE | N/A | Already implemented |
| Internal linking | PARTIAL | Low | Add more cross-links |

---

## Page-by-Page Metadata Requirements

### Landing Pages

| Page | Title | Description (max 160 chars) |
|------|-------|----------------------------|
| `/` | AMM Market - Borrow Against LP Positions on Aave v4 | Unlock liquidity from your LP tokens. Borrow up to 80% against Uniswap, Curve, and Balancer positions. |
| `/early-access` | Early Access - AMM Market | Join the waitlist for early access to AMM Market. Be first to borrow against your LP positions. |
| `/lightpaper` | Lightpaper - AMM Market Technical Overview | Deep dive into AMM Market architecture, risk models, and how LP token collateral works on Aave v4. |
| `/faq` | FAQ - AMM Market | Frequently asked questions about borrowing against LP tokens, liquidation, and DeFi lending. |

### Developer Documentation

| Page | Title | Description |
|------|-------|-------------|
| `/developers` | Developer Documentation - AMM Market | Technical guides for integrating with AMM Market protocol on Aave v4. |
| `/developers/introduction` | Introduction - AMM Market Docs | Get started with AMM Market. Learn key concepts and protocol architecture. |
| `/developers/getting-started` | Getting Started Guide - AMM Market | Step-by-step guide to depositing LP tokens and borrowing on AMM Market. |
| `/developers/architecture` | Protocol Architecture - AMM Market | Technical deep-dive into health factors, collateral factors, and liquidation mechanics. |

### Blog Posts

Each blog post should have unique metadata generated from its content:

| Page | Title Pattern | Description Pattern |
|------|--------------|---------------------|
| `/blog/[slug]` | {Post Title} - AMM Market Blog | {First 160 chars of post} |

---

## Technical SEO Improvements

### 1. Improve Core Web Vitals
- Add `priority` to above-fold images
- Use `loading="lazy"` for below-fold images
- Minimize layout shifts with explicit dimensions

### 2. Mobile Optimization
- Ensure `viewport` meta tag is set (currently in layout)
- Test touch targets are at least 48x48px
- Verify readable font sizes on mobile

### 3. URL Structure
Current URLs are clean and SEO-friendly:
- `/developers/getting-started/borrow-assets` ✓
- `/blog/introducing-automate` ✓

### 4. Internal Linking
Add more internal links between related pages:
- Blog posts should link to relevant docs
- Docs should cross-reference related sections
- Landing pages should link to detailed docs

---

## Implementation Priority

1. **Week 1 (Critical)**
   - [ ] Create sitemap.ts
   - [ ] Create robots.ts
   - [ ] Add metadata to homepage
   - [ ] Add metadata to developer landing page

2. **Week 2 (High)**
   - [ ] Add metadata to all developer subpages
   - [ ] Add metadata to blog pages
   - [ ] Create OG images for main pages

3. **Week 3 (Medium)**
   - [ ] Add JSON-LD Organization schema
   - [ ] Add JSON-LD FAQ schema
   - [ ] Add JSON-LD Article schema to blog

4. **Ongoing**
   - [ ] Monitor Google Search Console
   - [ ] Submit sitemap to Google
   - [ ] Track keyword rankings

---

## Verification Steps

After implementation:

1. **Validate sitemap:** Visit `/sitemap.xml`
2. **Validate robots:** Visit `/robots.txt`
3. **Test OG tags:** Use https://developers.facebook.com/tools/debug/
4. **Test Twitter cards:** Use https://cards-dev.twitter.com/validator
5. **Test JSON-LD:** Use https://validator.schema.org/
6. **Google Search Console:** Submit sitemap and monitor indexing

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2026-01-20 | 1.0 | Initial audit |

---

*This audit follows Google Search Essentials and Schema.org guidelines.*
