import { describe, expect, it } from "vitest"
import { filterBlogPosts, normalizeTagFilter, type BlogPost } from "@/lib/content"

const samplePosts: readonly BlogPost[] = [
  {
    id: 1,
    date: "January 1, 2026",
    title: "Protocol update",
    description: "Update",
    slug: "protocol-update",
    image: "/images/blog/protocol-update.png",
    category: "Product",
    tag: "Product",
  },
  {
    id: 2,
    date: "January 2, 2026",
    title: "Developer reference",
    description: "Reference",
    slug: "developer-reference",
    image: "/images/blog/developer-reference.png",
    category: "Developers",
    tag: "Protocol",
  },
] as const

describe("content helpers", () => {
  it("normalizes unknown blog filters back to All", () => {
    expect(normalizeTagFilter(undefined)).toBe("All")
    expect(normalizeTagFilter("Unknown")).toBe("All")
    expect(normalizeTagFilter("Protocol")).toBe("Protocol")
  })

  it("filters blog posts by tag without mutating the source list", () => {
    const filtered = filterBlogPosts(samplePosts, "Protocol")

    expect(filtered).toHaveLength(1)
    expect(filtered[0].slug).toBe("developer-reference")
    expect(samplePosts).toHaveLength(2)
  })
})
