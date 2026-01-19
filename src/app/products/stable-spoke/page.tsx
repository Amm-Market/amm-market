"use client"
import Link from "next/link"
import WaitlistCTA from "@/components/waitlist-cta"

export default function StableSpokePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 pt-8 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
          {/* Hero Section */}
          <section>
            <div className="max-w-[650px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-2xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Stable Spoke</h1>
                  <p className="text-gray-500">Optimized Stablecoin Infrastructure</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                Stable Spoke is our specialized AMM designed exclusively for stablecoin pairs, offering
                ultra-low slippage, minimal fees, and maximum capital efficiency for stable-to-stable swaps.
              </p>

              <div className="flex gap-3">
                <Link
                  href="/early-access"
                  className="inline-flex items-center px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
                >
                  Get Early Access
                </Link>
                <Link
                  href="/developers"
                  className="inline-flex items-center px-5 py-2.5 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors"
                >
                  View Docs
                </Link>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-3 gap-4">
            <div className="p-6 bg-emerald-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-emerald-600">0.01%</p>
              <p className="text-sm text-gray-600">Swap Fee</p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-emerald-600">&lt;0.1%</p>
              <p className="text-sm text-gray-600">Slippage</p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-emerald-600">99.9%</p>
              <p className="text-sm text-gray-600">Capital Efficiency</p>
            </div>
          </section>

          {/* Features */}
          <section>
            <div className="max-w-[650px] mb-6">
              <h2 className="text-2xl font-bold">Key Features</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Concentrated Stable Curve</h3>
                </div>
                <p className="text-gray-600">
                  Custom bonding curve optimized for assets that trade at 1:1 parity, enabling trades with 
                  near-zero price impact even for large volumes.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                      <path d="M21 3v5h-5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Auto-Rebalancing</h3>
                </div>
                <p className="text-gray-600">
                  Intelligent rebalancing mechanism that maintains optimal pool ratios and automatically 
                  arbitrages depegging events for LP profit.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="9" y1="21" x2="9" y2="9" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Multi-Asset Pools</h3>
                </div>
                <p className="text-gray-600">
                  Support for pools with 2-8 stablecoins, enabling efficient routing and reduced 
                  transaction costs for complex stable swaps.
                </p>
              </div>
            </div>
          </section>

          {/* Supported Stables */}
          <section>
            <div className="max-w-[650px] mb-6">
              <h2 className="text-2xl font-bold">Supported Stablecoins</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "USDC", color: "bg-blue-100 text-blue-600" },
                { name: "USDT", color: "bg-green-100 text-green-600" },
                { name: "DAI", color: "bg-yellow-100 text-yellow-600" },
                { name: "FRAX", color: "bg-gray-100 text-gray-600" },
              ].map((stable) => (
                <div key={stable.name} className="p-4 border border-gray-200 rounded-xl text-center">
                  <div className={`w-12 h-12 ${stable.color} rounded-full mx-auto mb-2 flex items-center justify-center`}>
                    <span className="text-sm font-bold">{stable.name[0]}</span>
                  </div>
                  <p className="font-medium text-gray-900">{stable.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <div className="max-w-[650px]">
              <h2 className="text-2xl font-bold mb-6">Use Cases</h2>
            </div>
            <div className="max-w-[650px] space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Large Volume Swaps</h3>
                  <p className="text-gray-600 text-sm">Execute million-dollar stablecoin swaps with minimal slippage.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Treasury Management</h3>
                  <p className="text-gray-600 text-sm">DAOs and protocols can efficiently manage stablecoin reserves.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Yield Optimization</h3>
                  <p className="text-gray-600 text-sm">LPs earn consistent fees from high-volume stable trading.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <WaitlistCTA />
        </div>
      </main>
    </div>
  )
}
