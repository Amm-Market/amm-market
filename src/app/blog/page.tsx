"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const categories = ["All", "Product", "Developers", "For LPs", "For Institutions"]

// Static blog data - ordered by date (newest first), first item is featured
const blogs = [
  {
    id: 1,
    date: "January 23, 2026",
    title: "Introducing Automate: Set-and-Forget LP Management",
    description: "Meet Automate—AMM Market's automation layer for hands-off LP management. Auto-compound fees, rebalance positions, and protect against liquidation.",
    slug: "introducing-automate",
    image: "/images/blog/introducing-automate.png",
    category: "Product",
  },
  {
    id: 2,
    date: "January 22, 2026",
    title: "AMM Market v1.1: New Features and Improvements",
    description: "Announcing AMM Market v1.1—multi-position collateral, improved oracles, gas optimizations, and a refreshed dashboard experience.",
    slug: "v1-1-release",
    image: "/images/blog/v1-1-release.png",
    category: "Product",
  },
  {
    id: 3,
    date: "January 21, 2026",
    title: "Smart Contract Architecture: AMM Market Technical Reference",
    description: "Deep technical reference for AMM Market's smart contract architecture—Hub and Spoke design, oracle integration, and key functions.",
    slug: "smart-contract-architecture",
    image: "/images/blog/smart-contract-architecture.png",
    category: "Developers",
  },
  {
    id: 4,
    date: "January 20, 2026",
    title: "Building on AMM Market: Integration Guide for Developers",
    description: "A comprehensive guide to integrating with AMM Market—SDK setup, core functions, event handling, and best practices.",
    slug: "integration-guide",
    image: "/images/blog/integration-guide.png",
    category: "Developers",
  },
  {
    id: 5,
    date: "January 19, 2026",
    title: "Beginner's Guide to LP Collateral: Risks and Rewards",
    description: "Understanding LP positions as collateral—LTV, impermanent loss, liquidation, and fee harvesting explained for new users.",
    slug: "lp-collateral-guide",
    image: "/images/blog/lp-collateral-guide.png",
    category: "For LPs",
  },
  {
    id: 6,
    date: "January 18, 2026",
    title: "AMM Markets Empowering Liquidity Providers With Collateral",
    description: "How LP tokens can function as productive collateral, unlocking capital efficiency and layered yield strategies.",
    slug: "amm-markets-lp-collateral",
    image: "/images/blog/amm-markets-lp-collateral.png",
    category: "For LPs",
  },
  {
    id: 7,
    date: "January 17, 2026",
    title: "How AMM Market Solves DeFi User Experience Challenges",
    description: "Unifying trading, liquidity, and lending into a single human-centered system for accessible DeFi.",
    slug: "defi-ux-challenges",
    image: "/images/blog/defi-ux-challenges.png",
    category: "Product",
  },
  {
    id: 8,
    date: "January 16, 2026",
    title: "Borrowing Against Uniswap LP Tokens via Aave v4's AMM Market Spoke",
    description: "Technical deep-dive into how the Hub-and-Spoke architecture enables LP-backed lending.",
    slug: "aave-v4-amm-spoke",
    image: "/images/blog/aave-v4-amm-spoke.png",
    category: "Developers",
  },
  {
    id: 9,
    date: "January 15, 2026",
    title: "Unleashing Your LP Tokens with Aave's AMM Market",
    description: "From conservative stablecoin strategies to advanced leverage plays—make your LP tokens work harder.",
    slug: "unleashing-lp-tokens",
    image: "/images/blog/unleashing-lp-tokens.png",
    category: "For LPs",
  },
  {
    id: 10,
    date: "January 14, 2026",
    title: "Advanced Playbook: Yield Looping Safely with LP Collateral",
    description: "A disciplined guide to yield looping—safe patterns, leverage guidelines, and stress testing for experienced traders.",
    slug: "yield-looping-playbook",
    image: "/images/blog/yield-looping-playbook.png",
    category: "For LPs",
  },
  {
    id: 11,
    date: "January 13, 2026",
    title: "Security Deep-Dive: How AMM Market Manages LP Risk",
    description: "Hub-and-Spoke isolation, position-aware oracles, health checks, and liquidation mechanics explained.",
    slug: "security-deep-dive",
    image: "/images/blog/security-deep-dive.png",
    category: "Developers",
  },
  {
    id: 12,
    date: "January 12, 2026",
    title: "How to Hedge Your LP Position: Practical Strategies",
    description: "Clear, actionable hedging recipes—from stablecoin buffers to delta-neutral farms and options overlays.",
    slug: "hedge-lp-position",
    image: "/images/blog/hedge-lp-position.png",
    category: "For LPs",
  },
  {
    id: 13,
    date: "January 11, 2026",
    title: "Institutional Use Cases: Treasuries, DAOs, and Corporate Liquidity",
    description: "How DAOs, funds, and corporate treasuries can use LP collateral for working capital and yield enhancement.",
    slug: "institutional-use-cases",
    image: "/images/blog/institutional-use-cases.png",
    category: "For Institutions",
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const featuredPost = blogs[0]
  const recentPosts = blogs.slice(1)
  const filteredPosts = recentPosts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory
  )

  return (
    <div className="py-12 px-4 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start gap-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif italic text-gray-900">
          Dex Mini Blog
        </h1>
        <p className="text-lg text-gray-600">
          Updates, stories, and announcements from the Dex Mini team
        </p>
        <hr className="w-full border-gray-200" />
      </div>

      {/* Featured Post */}
      <Link
        href={`/blog/${featuredPost.slug}`}
        className="group block mb-12 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative w-full md:w-[45%] aspect-video md:aspect-auto md:min-h-[280px] bg-gradient-to-br from-indigo-100 to-purple-100">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
          </div>
          {/* Content */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
            <span className="inline-block w-fit px-3 py-1 mb-3 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full">
              Featured
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
              {featuredPost.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {featuredPost.description}
            </p>
            <p className="text-sm text-gray-500">
              {featuredPost.date}
            </p>
          </div>
        </div>
      </Link>

      {/* Recent Section */}
      <section>
        {/* Filter Bar */}
        <div className="border-t border-gray-200">
          <div className="flex flex-row items-center justify-between gap-2 py-4">
            {/* Category Pills - hidden on mobile, shown on lg+ */}
            <div className="hidden lg:flex flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 text-sm rounded-full border transition-all",
                    activeCategory === cat
                      ? "bg-gray-100 border-gray-300 text-gray-900 font-medium"
                      : "bg-transparent border-gray-200 text-gray-600 hover:border-gray-400"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Mobile category select */}
            <div className="lg:hidden w-full">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-900"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-12 gap-4 py-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="col-span-12 md:col-span-6 xl:col-span-4">
              <Link
                href={`/blog/${post.slug}`}
                className="group block p-2 sm:p-4 h-full border border-transparent rounded-xl transition-all hover:bg-gray-50"
              >
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col space-y-1">
                    {/* Image */}
                    <div className="relative mb-3 w-full aspect-[2/1] lg:aspect-[5/3] overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    {/* Metadata */}
                    <div className="flex items-center space-x-1.5 text-sm text-gray-500">
                      <p>{post.date}</p>
                    </div>
                    {/* Title */}
                    <h3 className="text-xl text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    {/* Description */}
                    <p className="text-base text-gray-600 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
