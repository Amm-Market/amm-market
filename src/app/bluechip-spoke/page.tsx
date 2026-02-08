import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import WaitlistCTA from "@/components/waitlist-cta"

export const metadata: Metadata = {
  title: "Bluechip Spoke - Blue-Chip LP Collateral",
  description: "AMM Market Bluechip Spoke for established-asset LP positions. Higher LTV and conservative risk for ETH, BTC, and major governance token pairs.",
}

export default function BluechipSpokePage() {
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
                  <span className="lg:whitespace-nowrap">Blue-chip LPs.</span>
                  <br />
                  <span className="lg:whitespace-nowrap">Higher LTV. Low risk.</span>
                </h1>

                <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6">
                  Borrow more against established pairs—ETH, BTC, stablecoins, and major governance tokens. Deep liquidity, strong oracles, and conservative risk parameters for proven collateral.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                  <Link
                    href="/early-access"
                    className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
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
            <div className="p-6 bg-amber-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-amber-600">50–77%</p>
              <p className="text-sm text-gray-600">Max LTV (blue-chip)</p>
            </div>
            <div className="p-6 bg-amber-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-amber-600">5%</p>
              <p className="text-sm text-gray-600">IL buffer typical</p>
            </div>
            <div className="p-6 bg-amber-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-amber-600">36+</p>
              <p className="text-sm text-gray-600">Supported pools</p>
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
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Blue-Chip Pools</h3>
                </div>
                <p className="text-gray-600">
                  Only the most liquid, oracle-backed pairs: WETH, WBTC, USDC, USDT, DAI, and select
                  governance tokens. Reduced volatility and predictable impermanent loss.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Higher LTV</h3>
                </div>
                <p className="text-gray-600">
                  Borrow more against proven collateral. Tiered LTVs reflect asset quality—e.g. 77.5% for
                  WETH, 70% for WBTC—with conservative liquidation thresholds.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Oracle Coverage</h3>
                </div>
                <p className="text-gray-600">
                  All blue-chip pools use battle-tested price oracles and pool-specific configs for
                  accurate valuation and safe liquidations.
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
                { name: "Uniswap V4", color: "bg-purple-100 text-purple-600" },
                { name: "SushiSwap", color: "bg-blue-100 text-blue-600" },
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
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Higher Borrowing Power</h3>
                  <p className="text-gray-600 text-sm">Borrow more against blue-chip LP collateral with tiered LTVs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Conservative Risk</h3>
                  <p className="text-gray-600 text-sm">Established assets and oracles reduce volatility and liquidation risk.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Institutional-Ready</h3>
                  <p className="text-gray-600 text-sm">Deep liquidity and transparent risk parameters for larger positions.</p>
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
