import { revalidateTag, unstable_cache } from "next/cache"

/**
 * Shared marketing content for the newsroom and blog surfaces.
 *
 * Keeping this data in one server-only module removes duplication across pages
 * and lets us cache reads with tags for low-cost revalidation later.
 */
export type BlogTag = "News" | "Community" | "Learn" | "Development" | "Partners"
export type TagFilter = "All" | BlogTag

export type BlogPost = {
  id: number
  date: string
  title: string
  description: string
  slug: string
  image: string
  category: string
  tag: BlogTag
}

export type NewsroomPost = {
  date: string
  title: string
  byline: string
  description: string
  href: string
}

export type NewsroomCollection = "home" | "borrow" | "invest" | "earn" | "platform"

export const blogTagOptions: readonly TagFilter[] = [
  "All",
  "News",
  "Community",
  "Learn",
  "Development",
  "Partners",
] as const

export const BLOG_CONTENT_TAG = "blog-posts"
export const NEWSROOM_CONTENT_TAG = "newsroom-posts"

const blogPosts: readonly BlogPost[] = [
  {
    id: 1,
    date: "January 23, 2026",
    title: "Introducing Automate: Set-and-Forget LP Management",
    description: "Meet Automate—Avana's automation layer for hands-off LP management. Auto-compound fees, rebalance positions, and protect against liquidation.",
    slug: "introducing-automate",
    image: "/images/blog/introducing-automate.png",
    category: "Product",
    tag: "Community",
  },
  {
    id: 2,
    date: "January 22, 2026",
    title: "Avana v1.1: New Features and Improvements",
    description: "Announcing Avana v1.1—multi-position collateral, improved oracles, gas optimizations, and a refreshed dashboard experience.",
    slug: "v1-1-release",
    image: "/images/blog/v1-1-release.png",
    category: "Product",
    tag: "News",
  },
  {
    id: 3,
    date: "January 21, 2026",
    title: "Smart Contract Architecture: Avana Technical Reference",
    description: "Deep technical reference for Avana's smart contract architecture—Hub and Spoke design, oracle integration, and key functions.",
    slug: "smart-contract-architecture",
    image: "/images/blog/smart-contract-architecture.png",
    category: "Developers",
    tag: "Development",
  },
  {
    id: 4,
    date: "January 20, 2026",
    title: "Building on Avana: Integration Guide for Developers",
    description: "A comprehensive guide to integrating with Avana—SDK setup, core functions, event handling, and best practices.",
    slug: "integration-guide",
    image: "/images/blog/integration-guide.png",
    category: "Developers",
    tag: "Development",
  },
  {
    id: 5,
    date: "January 19, 2026",
    title: "Beginner's Guide to LP Collateral: Risks and Rewards",
    description: "Understanding LP positions as collateral—LTV, impermanent loss, liquidation, and fee harvesting explained for new users.",
    slug: "lp-collateral-guide",
    image: "/images/blog/lp-collateral-guide.png",
    category: "For LPs",
    tag: "Learn",
  },
  {
    id: 6,
    date: "January 18, 2026",
    title: "Avana Empowering Liquidity Providers With Collateral",
    description: "How LP tokens can function as productive collateral, unlocking capital efficiency and layered yield strategies.",
    slug: "avana-lp-collateral",
    image: "/images/blog/amm-markets-lp-collateral.png",
    category: "For LPs",
    tag: "Community",
  },
  {
    id: 7,
    date: "January 17, 2026",
    title: "How Avana Solves DeFi User Experience Challenges",
    description: "Unifying trading, liquidity, and lending into a single human-centered system for accessible DeFi.",
    slug: "defi-ux-challenges",
    image: "/images/blog/defi-ux-challenges.png",
    category: "Product",
    tag: "News",
  },
  {
    id: 8,
    date: "January 16, 2026",
    title: "Borrowing Against Uniswap LP Tokens via Aave v4's Avana Spoke",
    description: "Technical deep-dive into how the Hub-and-Spoke architecture enables LP-backed lending.",
    slug: "aave-v4-avana-spoke",
    image: "/images/blog/aave-v4-amm-spoke.png",
    category: "Developers",
    tag: "Development",
  },
  {
    id: 9,
    date: "January 15, 2026",
    title: "Unleashing Your LP Tokens with Aave's Avana",
    description: "From conservative stablecoin strategies to advanced leverage plays—make your LP tokens work harder.",
    slug: "unleashing-lp-tokens",
    image: "/images/blog/unleashing-lp-tokens.png",
    category: "For LPs",
    tag: "Community",
  },
  {
    id: 10,
    date: "January 14, 2026",
    title: "Advanced Playbook: Yield Looping Safely with LP Collateral",
    description: "A disciplined guide to yield looping—safe patterns, leverage guidelines, and stress testing for experienced traders.",
    slug: "yield-looping-playbook",
    image: "/images/blog/yield-looping-playbook.png",
    category: "For LPs",
    tag: "Learn",
  },
  {
    id: 11,
    date: "January 13, 2026",
    title: "Security Deep-Dive: How Avana Manages LP Risk",
    description: "Hub-and-Spoke isolation, position-aware oracles, health checks, and liquidation mechanics explained.",
    slug: "security-deep-dive",
    image: "/images/blog/security-deep-dive.png",
    category: "Developers",
    tag: "Development",
  },
  {
    id: 12,
    date: "January 12, 2026",
    title: "How to Hedge Your LP Position: Practical Strategies",
    description: "Clear, actionable hedging recipes—from stablecoin buffers to delta-neutral farms and options overlays.",
    slug: "hedge-lp-position",
    image: "/images/blog/hedge-lp-position.png",
    category: "For LPs",
    tag: "Learn",
  },
  {
    id: 13,
    date: "January 11, 2026",
    title: "Institutional Use Cases: Treasuries, DAOs, and Corporate Liquidity",
    description: "How DAOs, funds, and corporate treasuries can use LP collateral for working capital and yield enhancement.",
    slug: "institutional-use-cases",
    image: "/images/blog/institutional-use-cases.png",
    category: "For Institutions",
    tag: "Partners",
  },
] as const

const newsroomPostsByCollection: Record<NewsroomCollection, readonly NewsroomPost[]> = {
  home: [
    {
      date: "January 23, 2026",
      title: "Introducing Automate: Set-and-Forget LP Management",
      byline: "Product update",
      description:
        "Meet Automate, Avana's automation layer for hands-off LP management, from auto-compounding fees to rebalancing positions and protecting against liquidation.",
      href: "/blog/introducing-automate",
    },
    {
      date: "January 22, 2026",
      title: "Avana v1.1: New Features and Improvements",
      byline: "Protocol release",
      description:
        "A closer look at Avana v1.1, including multi-position collateral, improved oracle handling, gas optimizations, and a refreshed dashboard experience.",
      href: "/blog/v1-1-release",
    },
    {
      date: "January 21, 2026",
      title: "Smart Contract Architecture: Avana Technical Reference",
      byline: "Developer deep dive",
      description:
        "A technical walkthrough of Avana's smart contract architecture, covering Hub and Spoke design, oracle integration, and the contract-level structure behind LP-backed borrowing.",
      href: "/blog/smart-contract-architecture",
    },
  ],
  borrow: [
    {
      date: "January 20, 2026",
      title: "LP Collateral Guide: Borrow Without Unwinding",
      byline: "Borrowing guide",
      description:
        "A practical walkthrough of using LP positions as collateral, from supported pool types to repayment flow and how borrowing power is set.",
      href: "/blog/lp-collateral-guide",
    },
    {
      date: "January 18, 2026",
      title: "Avana LP Collateral: How It Works",
      byline: "Protocol explainer",
      description:
        "An overview of Avana's LP-backed borrowing model, including collateral onboarding, valuation logic, and why positions stay productive while borrowed against.",
      href: "/blog/avana-lp-collateral",
    },
    {
      date: "January 15, 2026",
      title: "Unleashing LP Tokens as Productive Collateral",
      byline: "Market thesis",
      description:
        "Why idle LP exposure should act like working capital, and how Avana turns liquidity positions into flexible borrowing capacity without forcing exits.",
      href: "/blog/unleashing-lp-tokens",
    },
  ],
  invest: [
    {
      date: "January 24, 2026",
      title: "Institutional Use Cases for LP-Backed Capital",
      byline: "Strategy brief",
      description:
        "How treasuries, funds, and active allocators can use LP-backed credit lines to manage working capital, re-entry timing, and portfolio flexibility.",
      href: "/blog/institutional-use-cases",
    },
    {
      date: "January 17, 2026",
      title: "DeFi UX Challenges in Capital Deployment",
      byline: "Product research",
      description:
        "A look at the friction users face when moving between saving, investing, and borrowing, and how tighter product flows improve capital efficiency.",
      href: "/blog/defi-ux-challenges",
    },
    {
      date: "January 14, 2026",
      title: "Integration Guide for Avana Workflows",
      byline: "Builder resource",
      description:
        "Documentation and patterns for plugging Avana into frontends, automation layers, and portfolio tooling that coordinate deposits, credit, and allocation.",
      href: "/blog/integration-guide",
    },
  ],
  earn: [
    {
      date: "January 25, 2026",
      title: "Yield Looping Playbook for LP-Backed Positions",
      byline: "Yield playbook",
      description:
        "A closer look at recursive capital strategies, where borrowed liquidity can be redeployed carefully while LP positions continue earning base fees.",
      href: "/blog/yield-looping-playbook",
    },
    {
      date: "January 19, 2026",
      title: "How to Hedge an LP Position Without Exiting",
      byline: "Risk strategy",
      description:
        "Tactics for staying invested while reducing directional exposure, including how borrowed stable liquidity can help manage changing market conditions.",
      href: "/blog/hedge-lp-position",
    },
    {
      date: "January 16, 2026",
      title: "Security Deep Dive: Safeguards Behind Avana",
      byline: "Security review",
      description:
        "An inside look at isolation, pricing checks, and position monitoring systems that support safer capital deployment across active LP-backed strategies.",
      href: "/blog/security-deep-dive",
    },
  ],
  platform: [
    {
      date: "January 26, 2026",
      title: "Aave v4 and the Avana Spoke Design",
      byline: "Architecture overview",
      description:
        "How Avana uses Aave v4's modular foundation to support LP-aware borrowing, isolated markets, and cleaner routing between protocol components.",
      href: "/blog/aave-v4-avana-spoke",
    },
    {
      date: "January 21, 2026",
      title: "Smart Contract Architecture: Avana Technical Reference",
      byline: "Developer deep dive",
      description:
        "A technical walkthrough of Hub and Spoke structure, contract boundaries, and the execution model behind collateral onboarding and position management.",
      href: "/blog/smart-contract-architecture",
    },
    {
      date: "January 22, 2026",
      title: "Avana v1.1: New Features and Improvements",
      byline: "Protocol release",
      description:
        "Product updates across monitoring, collateral support, and interface improvements that shape the latest version of the Avana platform experience.",
      href: "/blog/v1-1-release",
    },
  ],
}

const getCachedBlogPosts = unstable_cache(
  async () => blogPosts,
  ["blog-posts"],
  {
    revalidate: 3600,
    tags: [BLOG_CONTENT_TAG],
  },
)

const getCachedNewsroomPosts = unstable_cache(
  async (collection: NewsroomCollection) => newsroomPostsByCollection[collection],
  ["newsroom-posts"],
  {
    revalidate: 3600,
    tags: [NEWSROOM_CONTENT_TAG],
  },
)

export function normalizeTagFilter(requestedTag?: string): TagFilter {
  if (!requestedTag) {
    return "All"
  }

  return blogTagOptions.find((tag) => tag === requestedTag) ?? "All"
}

export function filterBlogPosts(posts: readonly BlogPost[], tag: TagFilter) {
  if (tag === "All") {
    return posts
  }

  return posts.filter((post) => post.tag === tag)
}

export async function getBlogPosts() {
  try {
    return await getCachedBlogPosts()
  } catch (error) {
    if (error instanceof Error && error.message.includes("incrementalCache missing")) {
      return blogPosts
    }

    throw error
  }
}

export async function getBlogPostsByTag(tag: TagFilter = "All") {
  const posts = await getBlogPosts()
  return filterBlogPosts(posts, tag)
}

export async function getNewsroomPosts(collection: NewsroomCollection = "home") {
  try {
    return await getCachedNewsroomPosts(collection)
  } catch (error) {
    if (error instanceof Error && error.message.includes("incrementalCache missing")) {
      return newsroomPostsByCollection[collection]
    }

    throw error
  }
}

export function revalidateMarketingContent() {
  revalidateTag(BLOG_CONTENT_TAG, "max")
  revalidateTag(NEWSROOM_CONTENT_TAG, "max")
}
