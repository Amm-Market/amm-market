import type { Metadata } from "next"
import { existsSync } from "fs"
import { join } from "path"
import BlogPostLayout from "@/components/blog-post-layout"
import { buildOgImagePath, SITE_NAME } from "@/lib/site"
import { blogPosts, blogPostsBySlug, type BlogPostDefinition, type BlogSection } from "@/lib/blog-posts"

const sectionTones = ["amber", "violet", "cyan", "emerald", "rose", "slate", "blue"] as const

export function getBlogPost(slug: string): BlogPostDefinition {
  const post = blogPostsBySlug.get(slug)

  if (!post) {
    throw new Error(`Unknown blog post slug: ${slug}`)
  }

  return post
}

export function buildBlogMetadata(post: BlogPostDefinition): Metadata {
  const title = `${post.title} | ${SITE_NAME} Blog`
  const canonicalPath = `/blog/${post.slug}`

  return {
    title,
    description: post.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      url: canonicalPath,
      description: post.description,
      images: [
        buildOgImagePath({
          title: post.title,
          subtitle: post.description,
          type: "blog",
        }),
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [
        buildOgImagePath({
          title: post.title,
          subtitle: post.description,
          type: "blog",
        }),
      ],
    },
  }
}

export function renderBlogSections(sections: readonly BlogSection[]) {
  return sections.map((section, index) => (
    <section
      key={section.id}
      id={section.id}
      className={`space-y-4 scroll-mt-24 ${index > 0 ? "deferred-viewport" : ""}`}
    >
      {section.title ? (
        <h2
          data-eyebrow={section.eyebrow}
          className={`site-eyebrow-tone-${sectionTones[index % sectionTones.length]}`}
        >
          {section.title}
        </h2>
      ) : null}
      {section.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  ))
}

const displayTitles: Partial<Record<string, string>> = {
  "lp-risk-governance": "LP Risk Governance",
  "why-lp-collateral-needs-smart-agents": "LP Smart Agents",
  "how-lp-liquidation-should-work": "LP Liquidation",
  "pricing-lp-collateral-oracle-problem": "Pricing LP Collateral",
  "security-deep-dive": "LP Risk Security",
  "hedge-lp-position": "Hedging LP Positions",
  "yield-looping-playbook": "Yield Looping",
  "unleashing-lp-tokens": "What LP Collateral Unlocks",
  "aerodrome-lp-collateral-aave-v4": "Aerodrome LP Collateral",
  "curve-lp-collateral-aave-v4": "Curve LP Collateral",
  "balancer-lp-collateral-aave-v4": "Balancer LP Collateral",
  "smart-contract-architecture": "Uniswap LP Collateral",
  "defi-ux-challenges": "Making LP Collateral Usable",
  "avana-lp-collateral": "Next Step For LPs",
  "institutional-use-cases": "LP Collateral For Institutions",
  "integration-guide": "Building On Avana",
  "aave-v4-avana-spoke": "Inside Avana",
  "v1-1-release": "Avana v1.1",
  "introducing-automate": "Automate",
  "lp-collateral-guide": "LP Collateral Guide",
}

const sectionEyebrows = [
  "Start here",
  "Core idea",
  "Why it matters",
  "In practice",
  "Risk",
  "How it works",
  "System design",
  "For users",
  "Outlook",
  "Takeaway",
] as const

const sectionTitleBlueprints: readonly string[] = [
  "Intro",
  "Context",
  "Model",
  "Value",
  "Risk",
  "Flow",
  "System",
  "Users",
  "Outlook",
  "Takeaway",
]

function slugifySectionId(text: string, index: number) {
  const slug = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

  return slug || `section-${index + 1}`
}

function splitTextUnit(text: string): [string, string] | null {
  const sentences =
    text.match(/[^.!?]+[.!?]+(?:["')\]]+)?|[^.!?]+$/g)?.map((part) => part.trim()).filter(Boolean) ?? [text]

  if (sentences.length > 1) {
    const midpoint = Math.ceil(sentences.length / 2)
    return [sentences.slice(0, midpoint).join(" "), sentences.slice(midpoint).join(" ")]
  }

  const clauses = text
    .split(/(?<=[,;:])\s+/)
    .map((part) => part.trim())
    .filter(Boolean)

  if (clauses.length > 1) {
    const midpoint = Math.ceil(clauses.length / 2)
    return [clauses.slice(0, midpoint).join(" "), clauses.slice(midpoint).join(" ")]
  }

  const words = text.split(/\s+/).filter(Boolean)
  if (words.length > 18) {
    const midpoint = Math.ceil(words.length / 2)
    return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")]
  }

  return null
}

function buildParagraphGroups(paragraphs: readonly string[], targetSections: number) {
  const units = [...paragraphs]

  while (units.length < targetSections) {
    let bestIndex = -1
    let bestSplit: [string, string] | null = null

    for (let index = 0; index < units.length; index += 1) {
      const split = splitTextUnit(units[index])
      if (!split) continue

      if (bestIndex === -1 || units[index].length > units[bestIndex].length) {
        bestIndex = index
        bestSplit = split
      }
    }

    if (bestIndex === -1 || !bestSplit) {
      break
    }

    units.splice(bestIndex, 1, bestSplit[0], bestSplit[1])
  }

  if (units.length <= targetSections) {
    return units.map((unit) => [unit])
  }

  const groups: string[][] = []
  const baseSize = Math.floor(units.length / targetSections)
  const remainder = units.length % targetSections
  let start = 0

  for (let index = 0; index < targetSections; index += 1) {
    const size = baseSize + (index < remainder ? 1 : 0)
    groups.push(units.slice(start, start + size))
    start += size
  }

  return groups
}

function buildReadableSections(post: BlogPostDefinition): BlogSection[] {
  if (post.sections.length !== 1 || post.sections[0]?.title) {
    return [...post.sections]
  }

  const paragraphs = post.sections[0].paragraphs
  const titles = sectionTitleBlueprints
  const paragraphGroups = buildParagraphGroups(paragraphs, titles.length)

  return titles.map((title, index) => ({
    id: slugifySectionId(title, index),
    eyebrow: sectionEyebrows[index] ?? "Takeaway",
    title,
    paragraphs: paragraphGroups[index] ?? [],
  }))
}

function getPostImage(image?: string) {
  if (!image) return undefined

  const publicPath = join(process.cwd(), "public", image.replace(/^\//, ""))
  return existsSync(publicPath) ? image : undefined
}

export function createBlogPage(slug: string) {
  const post = getBlogPost(slug)
  const sections = buildReadableSections(post)
  const index = blogPosts.findIndex((entry) => entry.slug === slug)
  const prevPost = index > 0 ? blogPosts[index - 1] : undefined
  const nextPost = index >= 0 && index < blogPosts.length - 1 ? blogPosts[index + 1] : undefined
  const tableOfContents = sections.map((section, sectionIndex) => ({
    id: section.id,
    title: section.title ?? (sections.length === 1 ? "Article" : `Section ${sectionIndex + 1}`),
  }))
  const sectionColorsById = Object.fromEntries(
    sections.map((section, index) => [section.id, sectionTones[index % sectionTones.length]]),
  )
  const image = getPostImage(post.image)
  const displayTitle = displayTitles[post.slug]

  function Page() {
    return (
      <BlogPostLayout
        title={post.title}
        displayTitle={displayTitle}
        date={post.date}
        description={post.description}
        image={image}
        tableOfContents={tableOfContents}
        sectionColorsById={sectionColorsById}
        prevPost={prevPost ? { slug: prevPost.slug, title: prevPost.title } : undefined}
        nextPost={nextPost ? { slug: nextPost.slug, title: nextPost.title } : undefined}
      >
        <div className="space-y-10">
          {renderBlogSections(sections)}
        </div>
      </BlogPostLayout>
    )
  }

  return { post, metadata: buildBlogMetadata(post), Page }
}
