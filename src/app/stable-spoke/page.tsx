import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import WaitlistCTA from "@/components/waitlist-cta"

export const metadata: Metadata = {
  title: "Stable Spoke - Stablecoin LP Collateral",
  description: "AMM Market Stable Spoke for stablecoin-stablecoin LP positions. Highest LTV ratios and lowest risk for stable pairs.",
}

export default function StableSpokePage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col min-h-screen pt-20">
      <div className="flex-1 flex flex-col relative z-0">
        {/* Hero Section - Exact same structure as home (hero-section.tsx) */}
        <section className="pb-12 md:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-4 pb-8 md:pt-6 md:pb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 lg:min-h-[400px] xl:min-h-[450px]">
              {/* Left Column - Hero Image */}
              <div className="w-full lg:w-[55%] mb-10 lg:mb-0 order-2 lg:order-1">
                <div className="relative w-full max-w-[700px] lg:max-w-[650px] xl:max-w-[700px] mx-auto lg:mx-0">
                  <Image
                    src="/images/Hero__4_.png"
                    alt="App interface"
                    width={1400}
                    height={1400}
                    className="w-full h-auto rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
                    priority
                    fetchPriority="high"
                  />
                </div>
              </div>

              {/* Right Column - Text Content */}
              <div className="w-full lg:w-[45%] text-center lg:text-left order-1 lg:order-2 mb-8 lg:mb-0">
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.15] text-gray-900 mb-4 md:mb-6">
                  <span className="lg:whitespace-nowrap">Stablecoin LPs.</span>
                  <br />
                  <span className="lg:whitespace-nowrap">Best terms. Low risk.</span>
                </h1>

                <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6">
                  Ultra-low slippage and maximum capital efficiency for stable-to-stable pairs. Borrow against your stable LP positions with the highest LTV and lowest risk in the protocol.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                  <Link
                    href="/early-access"
                    className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
                  >
                    Get Early Access
                  </Link>
                  <Link
                    href="/developers"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    View Docs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of page content */}
        <div className="space-y-12 pb-16">
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

          {/* Supported Dexs */}
          <section>
            <div className="max-w-[650px] mb-6">
              <h2 className="text-2xl font-bold">Supported Dexs</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Uniswap V3", color: "bg-pink-100 text-pink-600" },
                { name: "Curve", color: "bg-yellow-100 text-yellow-600" },
                { name: "Balancer", color: "bg-gray-100 text-gray-600" },
              ].map((dex) => (
                <div key={dex.name} className="p-4 border border-gray-200 rounded-xl text-center">
                  <div className={`w-12 h-12 ${dex.color} rounded-full mx-auto mb-2 flex items-center justify-center`}>
                    <span className="text-sm font-bold">{dex.name.slice(0, 2)}</span>
                  </div>
                  <p className="font-medium text-gray-900">{dex.name}</p>
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
      </div>
    </div>
  )
}
