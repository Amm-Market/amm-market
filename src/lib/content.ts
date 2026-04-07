import { revalidateTag, unstable_cache } from "next/cache"
import { blogPosts as blogPostDefinitions } from "@/lib/blog-posts"

/**
 * Shared marketing content for the newsroom and blog surfaces.
 *
 * Keeping this data in one server-only module removes duplication across pages
 * and lets us cache reads with tags for low-cost revalidation later.
 */
export type BlogTag = "Product" | "Strategy" | "Guides" | "Protocol" | "Institutions"
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
  "Product",
  "Strategy",
  "Guides",
  "Protocol",
  "Institutions",
] as const

export const BLOG_CONTENT_TAG = "blog-posts"
export const NEWSROOM_CONTENT_TAG = "newsroom-posts"

const blogPosts: readonly BlogPost[] = blogPostDefinitions.map((post, index) => ({
  id: index + 1,
  date: post.date,
  title: post.title,
  description: post.description,
  slug: post.slug,
  image: post.image,
  category: post.category,
  tag: post.tag,
}))

function makeNewsroomPost(slug: string, byline: string): NewsroomPost {
  const post = blogPostDefinitions.find((entry) => entry.slug === slug)

  if (!post) {
    throw new Error(`Missing newsroom post for slug: ${slug}`)
  }

  return {
    date: post.date,
    title: post.title,
    byline,
    description: post.description,
    href: `/blog/${post.slug}`,
  }
}

const newsroomPostsByCollection: Record<NewsroomCollection, readonly NewsroomPost[]> = {
  home: [
    makeNewsroomPost("lp-risk-governance", "Risk framework"),
    makeNewsroomPost("why-lp-collateral-needs-smart-agents", "Smart Agents"),
    makeNewsroomPost("how-lp-liquidation-should-work", "Liquidation model"),
  ],
  borrow: [
    makeNewsroomPost("lp-collateral-guide", "Borrowing guide"),
    makeNewsroomPost("smart-contract-architecture", "Uniswap collateral"),
    makeNewsroomPost("curve-lp-collateral-aave-v4", "Curve collateral"),
  ],
  invest: [
    makeNewsroomPost("unleashing-lp-tokens", "Capital efficiency"),
    makeNewsroomPost("hedge-lp-position", "LP hedging"),
    makeNewsroomPost("institutional-use-cases", "Treasury strategy"),
  ],
  earn: [
    makeNewsroomPost("introducing-automate", "Fee automation"),
    makeNewsroomPost("yield-looping-playbook", "Yield looping"),
    makeNewsroomPost("avana-lp-collateral", "LP strategy"),
  ],
  platform: [
    makeNewsroomPost("aave-v4-avana-spoke", "Architecture"),
    makeNewsroomPost("pricing-lp-collateral-oracle-problem", "Oracle design"),
    makeNewsroomPost("integration-guide", "Developer view"),
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
  if (process.env.NODE_ENV !== "production") {
    return blogPosts
  }

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
  if (process.env.NODE_ENV !== "production") {
    return newsroomPostsByCollection[collection]
  }

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
