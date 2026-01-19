"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const categories = ["All", "Product", "Engineering", "Company", "Developers"]

// Static blog data - ordered by date (newest first), first item is featured
const blogs = [
  {
    id: 6,
    date: "March 20, 2025",
    title: "DeFi AI Agent",
    description: "Leveraging AI agents to optimize DeFi trading strategies.",
    slug: "defi-ai-agent",
    image: "/images/blog/defi-ai-agent.png",
    category: "Product",
  },
  {
    id: 5,
    date: "March 16, 2025",
    title: "DeFi Leverage Market",
    description: "Understanding leveraged trading in DeFi markets and risks.",
    slug: "defi-leverage-market",
    image: "/images/blog/defi-leverage-market.png",
    category: "Engineering",
  },
  {
    id: 4,
    date: "March 13, 2025",
    title: "DeFi Lending Market",
    description: "Exploring decentralized lending markets and their growth.",
    slug: "defi-lending-market",
    image: "/images/blog/defi-lending-market.png",
    category: "Product",
  },
  {
    id: 3,
    date: "March 09, 2025",
    title: "DeFi Liquidity Management",
    description: "Strategies and tools for effective DeFi liquidity management.",
    slug: "defi-liquidity-management",
    image: "/images/blog/defi-liquidity-management.png",
    category: "Engineering",
  },
  {
    id: 2,
    date: "March 06, 2025",
    title: "DeFi Migration Tool",
    description: "Tools for seamless migration of assets across DeFi protocols.",
    slug: "defi-migration-tool",
    image: "/images/blog/defi-migration-tool.png",
    category: "Developers",
  },
  {
    id: 1,
    date: "March 03, 2025",
    title: "DeFi User Experience",
    description: "Improving user experience for DeFi platforms and apps.",
    slug: "defi-user-experience",
    image: "/images/blog/defi-user-experience.png",
    category: "Company",
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
