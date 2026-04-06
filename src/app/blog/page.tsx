"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

type BlogTag = "News" | "Community" | "Learn" | "Development" | "Partners"
type TagFilter = "All" | BlogTag

// Static blog data - ordered by date (newest first), first item is featured
const blogs = [
  {
    id: 1,
    date: "January 23, 2026",
    title: "Introducing Automate: Set-and-Forget LP Management",
    description: "Meet Automate—Avana's automation layer for hands-off LP management. Auto-compound fees, rebalance positions, and protect against liquidation.",
    slug: "introducing-automate",
    image: "/images/blog/introducing-automate.png",
    category: "Product",
    tag: "Community" as BlogTag,
  },
  {
    id: 2,
    date: "January 22, 2026",
    title: "Avana v1.1: New Features and Improvements",
    description: "Announcing Avana v1.1—multi-position collateral, improved oracles, gas optimizations, and a refreshed dashboard experience.",
    slug: "v1-1-release",
    image: "/images/blog/v1-1-release.png",
    category: "Product",
    tag: "News" as BlogTag,
  },
  {
    id: 3,
    date: "January 21, 2026",
    title: "Smart Contract Architecture: Avana Technical Reference",
    description: "Deep technical reference for Avana's smart contract architecture—Hub and Spoke design, oracle integration, and key functions.",
    slug: "smart-contract-architecture",
    image: "/images/blog/smart-contract-architecture.png",
    category: "Developers",
    tag: "Development" as BlogTag,
  },
  {
    id: 4,
    date: "January 20, 2026",
    title: "Building on Avana: Integration Guide for Developers",
    description: "A comprehensive guide to integrating with Avana—SDK setup, core functions, event handling, and best practices.",
    slug: "integration-guide",
    image: "/images/blog/integration-guide.png",
    category: "Developers",
    tag: "Development" as BlogTag,
  },
  {
    id: 5,
    date: "January 19, 2026",
    title: "Beginner's Guide to LP Collateral: Risks and Rewards",
    description: "Understanding LP positions as collateral—LTV, impermanent loss, liquidation, and fee harvesting explained for new users.",
    slug: "lp-collateral-guide",
    image: "/images/blog/lp-collateral-guide.png",
    category: "For LPs",
    tag: "Learn" as BlogTag,
  },
  {
    id: 6,
    date: "January 18, 2026",
    title: "Avana Empowering Liquidity Providers With Collateral",
    description: "How LP tokens can function as productive collateral, unlocking capital efficiency and layered yield strategies.",
    slug: "avana-lp-collateral",
    image: "/images/blog/amm-markets-lp-collateral.png",
    category: "For LPs",
    tag: "Community" as BlogTag,
  },
  {
    id: 7,
    date: "January 17, 2026",
    title: "How Avana Solves DeFi User Experience Challenges",
    description: "Unifying trading, liquidity, and lending into a single human-centered system for accessible DeFi.",
    slug: "defi-ux-challenges",
    image: "/images/blog/defi-ux-challenges.png",
    category: "Product",
    tag: "News" as BlogTag,
  },
  {
    id: 8,
    date: "January 16, 2026",
    title: "Borrowing Against Uniswap LP Tokens via Aave v4's Avana Spoke",
    description: "Technical deep-dive into how the Hub-and-Spoke architecture enables LP-backed lending.",
    slug: "aave-v4-avana-spoke",
    image: "/images/blog/aave-v4-amm-spoke.png",
    category: "Developers",
    tag: "Development" as BlogTag,
  },
  {
    id: 9,
    date: "January 15, 2026",
    title: "Unleashing Your LP Tokens with Aave's Avana",
    description: "From conservative stablecoin strategies to advanced leverage plays—make your LP tokens work harder.",
    slug: "unleashing-lp-tokens",
    image: "/images/blog/unleashing-lp-tokens.png",
    category: "For LPs",
    tag: "Community" as BlogTag,
  },
  {
    id: 10,
    date: "January 14, 2026",
    title: "Advanced Playbook: Yield Looping Safely with LP Collateral",
    description: "A disciplined guide to yield looping—safe patterns, leverage guidelines, and stress testing for experienced traders.",
    slug: "yield-looping-playbook",
    image: "/images/blog/yield-looping-playbook.png",
    category: "For LPs",
    tag: "Learn" as BlogTag,
  },
  {
    id: 11,
    date: "January 13, 2026",
    title: "Security Deep-Dive: How Avana Manages LP Risk",
    description: "Hub-and-Spoke isolation, position-aware oracles, health checks, and liquidation mechanics explained.",
    slug: "security-deep-dive",
    image: "/images/blog/security-deep-dive.png",
    category: "Developers",
    tag: "Development" as BlogTag,
  },
  {
    id: 12,
    date: "January 12, 2026",
    title: "How to Hedge Your LP Position: Practical Strategies",
    description: "Clear, actionable hedging recipes—from stablecoin buffers to delta-neutral farms and options overlays.",
    slug: "hedge-lp-position",
    image: "/images/blog/hedge-lp-position.png",
    category: "For LPs",
    tag: "Learn" as BlogTag,
  },
  {
    id: 13,
    date: "January 11, 2026",
    title: "Institutional Use Cases: Treasuries, DAOs, and Corporate Liquidity",
    description: "How DAOs, funds, and corporate treasuries can use LP collateral for working capital and yield enhancement.",
    slug: "institutional-use-cases",
    image: "/images/blog/institutional-use-cases.png",
    category: "For Institutions",
    tag: "Partners" as BlogTag,
  },
]

const tagOptions: readonly TagFilter[] = ["All", "News", "Community", "Learn", "Development", "Partners"]

function BlogImagePlaceholder({
  eyebrow,
  featured = false,
}: {
  eyebrow: string
  featured?: boolean
}) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full w-full overflow-hidden rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_34%),linear-gradient(145deg,#f8fafc_0%,#e2e8f0_42%,#cbd5e1_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.08),transparent_42%,rgba(15,23,42,0.18)_100%)]" />
      <div className="absolute -left-[12%] top-[12%] h-[42%] w-[42%] rounded-full border border-white/55" />
      <div className="absolute right-[-10%] top-[10%] h-[52%] w-[52%] rounded-full border border-slate-500/20" />
      <div className="absolute left-[18%] top-[24%] h-[28%] w-[28%] rounded-full bg-white/45 blur-2xl" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/55 to-transparent" />
      <div className={`relative z-10 mt-auto flex w-full flex-col items-start px-4 pb-4 text-left ${featured ? "md:px-6 md:pb-6" : ""}`}>
        <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700 backdrop-blur-sm">
          {eyebrow}
        </span>
        {featured ? (
          <span className="mt-3 text-sm font-medium tracking-[-0.02em] text-white/92 md:text-[0.95rem]">
            Automation, protocol design, and LP collateral strategy.
          </span>
        ) : null}
      </div>
    </div>
  )
}

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<TagFilter>("Community")
  const filteredBlogs = useMemo(() => {
    if (activeTag === "All") {
      return blogs
    }

    return blogs.filter((post) => post.tag === activeTag)
  }, [activeTag])

  return (
    <div className="site-content-shell py-12">
      <section className="flex justify-center pb-10 pt-4 md:pb-12 md:pt-8">
        <div className="flex w-full max-w-4xl flex-col items-center text-center">
          <h1 className="text-[clamp(3rem,7vw,5.25rem)] font-semibold tracking-[-0.08em] text-black">
            Newsroom
          </h1>
          <div className="mt-8 inline-flex max-w-full rounded-full bg-[#eef2f6] p-1.5 md:mt-10">
            <div className="flex items-center overflow-x-auto scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {tagOptions.map((tag) => {
                const active = activeTag === tag

                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveTag(tag)}
                    aria-pressed={active}
                    className={`inline-flex shrink-0 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold tracking-[-0.03em] transition-all duration-300 ${
                      active
                        ? "border-black/10 bg-white text-black shadow-[0_10px_22px_rgba(17,17,17,0.06)]"
                        : "border-transparent text-black/30 hover:text-black/60"
                    }`}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Section */}
      <section className="border-t border-gray-200 pt-8">
        {/* Blog Grid */}
        <div className="grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
          {filteredBlogs.map((post) => (
            <div key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                prefetch={false}
                className="group block h-full rounded-[1.1rem] p-1 sm:p-2"
              >
                <div className="flex flex-col gap-3">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1rem] border border-slate-200/90 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)] transition-colors duration-150 group-hover:border-slate-300">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(140deg,rgba(255,255,255,0.28),transparent_34%,transparent_60%,rgba(255,255,255,0.1)_100%)]"
                    />
                    <BlogImagePlaceholder eyebrow={post.tag} />
                  </div>
                  <div className="flex items-center space-x-1.5 px-1 text-[0.8rem] text-gray-500 sm:text-sm">
                    <p>{post.date}</p>
                  </div>
                  <h3 className="px-1 text-[1rem] leading-5 text-gray-900 transition-colors duration-150 group-hover:text-slate-700 sm:text-[1.08rem] sm:leading-6">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
