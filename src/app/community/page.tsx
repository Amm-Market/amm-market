"use client"

import Link from "next/link"

// Static blog data
const blogs = [
  {
    id: 1,
    date: "March 03, 2025",
    title: "DeFi User Experience",
    description: "Improving user experience for DeFi platforms and apps.",
    color: "bg-blue-100",
    slug: "defi-user-experience",
  },
  {
    id: 2,
    date: "March 06, 2025",
    title: "DeFi Migration Tool",
    description: "Tools for seamless migration of assets across DeFi protocols.",
    color: "bg-green-100",
    slug: "defi-migration-tool",
  },
  {
    id: 3,
    date: "March 09, 2025",
    title: "DeFi Liquidity Management",
    description: "Strategies and tools for effective DeFi liquidity management.",
    color: "bg-purple-100",
    slug: "defi-liquidity-management",
  },
  {
    id: 4,
    date: "March 13, 2025",
    title: "DeFi Lending Market",
    description: "Exploring decentralized lending markets and their growth.",
    color: "bg-yellow-100",
    slug: "defi-lending-market",
  },
  {
    id: 5,
    date: "March 16, 2025",
    title: "DeFi Leverage Market",
    description: "Understanding leveraged trading in DeFi markets and risks.",
    color: "bg-red-100",
    slug: "defi-leverage-market",
  },
  {
    id: 6,
    date: "March 20, 2025",
    title: "DeFi AI Agent",
    description: "Leveraging AI agents to optimize DeFi trading strategies.",
    color: "bg-indigo-100",
    slug: "defi-ai-agent",
  },
]

export default function Community() {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="relative mb-20 py-16 px-6 rounded-3xl overflow-hidden bg-gradient-to-b from-sky-500 to-blue-600 text-white">
        {/* More realistic cloud effect with multiple layers and blur */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJza3kiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCI+PGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMTAwIiBjeT0iMTAwIiByPSI0MCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMzAwIiBjeT0iMjAwIiByPSI1MCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iNTAwIiBjeT0iMTUwIiByPSI2MCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMjAwIiBjeT0iMzAwIiByPSI1NSIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iNDAwIiBjeT0iMzUwIiByPSI0NSIgb3BhY2l0eT0iMC4zIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NreSkiLz48L3N2Zz4=')] opacity-70"></div>

        {/* Large fluffy cloud groups */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Cloud group 1 - top left */}
          <div className="absolute -top-10 -left-10 blur-[2px]">
            <div className="absolute w-32 h-16 bg-white rounded-full opacity-80"></div>
            <div className="absolute w-24 h-16 bg-white rounded-full opacity-80 top-4 left-16"></div>
            <div className="absolute w-28 h-16 bg-white rounded-full opacity-80 top-2 left-8"></div>
            <div className="absolute w-20 h-14 bg-white rounded-full opacity-80 top-8 left-20"></div>
            <div className="absolute w-24 h-14 bg-white rounded-full opacity-80 top-6 left-12"></div>
          </div>

          {/* Cloud group 2 - top right */}
          <div className="absolute -top-5 right-10 blur-[2px]">
            <div className="absolute w-36 h-20 bg-white rounded-full opacity-80"></div>
            <div className="absolute w-28 h-18 bg-white rounded-full opacity-80 top-6 right-16"></div>
            <div className="absolute w-32 h-18 bg-white rounded-full opacity-80 top-4 right-8"></div>
            <div className="absolute w-24 h-16 bg-white rounded-full opacity-80 top-10 right-20"></div>
            <div className="absolute w-28 h-16 bg-white rounded-full opacity-80 top-8 right-12"></div>
          </div>

          {/* Cloud group 3 - bottom left */}
          <div className="absolute bottom-5 left-20 blur-[1px]">
            <div className="absolute w-40 h-20 bg-white rounded-full opacity-70"></div>
            <div className="absolute w-32 h-18 bg-white rounded-full opacity-70 bottom-6 left-16"></div>
            <div className="absolute w-36 h-18 bg-white rounded-full opacity-70 bottom-4 left-8"></div>
            <div className="absolute w-28 h-16 bg-white rounded-full opacity-70 bottom-10 left-20"></div>
            <div className="absolute w-32 h-16 bg-white rounded-full opacity-70 bottom-8 left-12"></div>
          </div>

          {/* Cloud group 4 - bottom right */}
          <div className="absolute bottom-10 right-10 blur-[1px]">
            <div className="absolute w-36 h-18 bg-white rounded-full opacity-70"></div>
            <div className="absolute w-28 h-16 bg-white rounded-full opacity-70 bottom-4 right-16"></div>
            <div className="absolute w-32 h-16 bg-white rounded-full opacity-70 bottom-2 right-8"></div>
            <div className="absolute w-24 h-14 bg-white rounded-full opacity-70 bottom-8 right-20"></div>
            <div className="absolute w-28 h-14 bg-white rounded-full opacity-70 bottom-6 right-12"></div>
          </div>
        </div>

        {/* Content with reduced text */}
        <div className="relative text-center z-10">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-blue-700 bg-white bg-opacity-80 rounded-full">
            Latest Updates
          </span>
          <h1 className="text-4xl font-bold mb-3 text-white drop-shadow-md">News & Announcements</h1>
          <p className="text-base text-white text-opacity-90 max-w-xl mx-auto">
            Stay connected with the latest developments and upcoming events.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            href={`/community/${blog.slug}`}
            key={blog.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`h-40 ${blog.color}`}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500">{blog.date}</div>
              <h2 className="text-xl font-bold mt-2 mb-3">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

