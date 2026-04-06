import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import EarlyAccessCtaBox from "@/components/EarlyAccessCtaBox"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"

const openSpokeFaqItems: InlineFaqItem[] = [
  {
    value: "open-1",
    question: "What LP tokens can I use as collateral?",
    answer:
      "Any supported LP across Uniswap V3, Uniswap V4, SushiSwap, and Balancer. Your position stays in the pool and keeps earning fees while used as collateral.",
  },
  {
    value: "open-2",
    question: "Do I need to bridge or move my LP?",
    answer: "No. Your LP stays on its chain; we use it as collateral without removing liquidity. No bridges or lock-in required.",
  },
  {
    value: "open-3",
    question: "What's the maximum I can borrow?",
    answer: "Up to 80% LTV depending on pool type and risk parameters. Available across 4+ networks.",
  },
  {
    value: "open-4",
    question: "Which DEXes are supported?",
    answer: "Uniswap V3, Uniswap V4, SushiSwap, and Balancer. More may be added as the protocol expands.",
  },
  {
    value: "open-5",
    question: "Is my position locked?",
    answer: "No lock-in. Repay anytime and withdraw your LP once debt is cleared.",
  },
]

export const metadata: Metadata = {
  title: "Borrow - Any LP Token as Collateral",
  description: "Avana Borrow accepts supported LP tokens as collateral for flexible borrowing across multiple DEXes.",
}

export default function BorrowPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col min-h-screen pt-10 sm:pt-12 md:pt-20">
      <div className="flex-1 flex flex-col relative z-0">
        {/* Hero Section - Exact same structure as home (hero-section.tsx) */}
        <section className="pb-12 md:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-4 pb-8 md:pt-6 md:pb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 lg:min-h-[400px] xl:min-h-[450px]">
              {/* Left Column - Hero Image */}
              <div className="w-full lg:w-[55%] mb-10 lg:mb-0 order-2 lg:order-1">
                <div className="relative w-full max-w-none lg:max-w-[650px] xl:max-w-[700px] mx-auto lg:mx-0">
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
              <div className="w-full lg:w-[45%] text-left order-1 lg:order-2 mb-8 lg:mb-0">
                <h1 className="max-w-[12ch] text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.02] text-gray-900 mb-3 md:mb-5">
                  <span className="lg:whitespace-nowrap">Any LP.</span>
                  <br />
                  <span className="lg:whitespace-nowrap">More flexibility.</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-[32ch] sm:max-w-md mx-0 leading-relaxed mb-5 md:mb-6">
                  Use supported LP positions as collateral. Your liquidity stays active, keeps earning fees, and never leaves your control.
                </p>

                <div className="flex flex-row flex-wrap gap-2 sm:gap-3 max-w-md sm:mx-0 items-start">
                  <Link
                    href="/early-access"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold rounded-full transition-colors"
                  >
                    Get Early Access
                  </Link>
                  <Link
                    href="/developers"
                    className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-900 text-xs font-semibold rounded-full transition-colors"
                  >
                    View Docs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of page content */}
        <div className="site-content-width space-y-12 pb-16">
          {/* Stats */}
          <section className="grid grid-cols-3 gap-4">
            <div className="p-6 bg-blue-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-blue-600">4+</p>
              <p className="text-sm text-gray-600">Networks</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-blue-600">80%</p>
              <p className="text-sm text-gray-600">Max LTV</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-blue-600">100%</p>
              <p className="text-sm text-gray-600">On-chain</p>
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
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Instant Finality</h3>
                </div>
                <p className="text-gray-600">
                  Achieve near-instant cross-chain transactions with our optimistic execution model backed by
                  EigenLayer&apos;s restaking security guarantees.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Trustless Security</h3>
                </div>
                <p className="text-gray-600">
                  No centralized bridges or multisigs. Security is derived from cryptographic proofs and
                  economic guarantees through staked collateral.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Unified Liquidity</h3>
                </div>
                <p className="text-gray-600">
                  Access deep liquidity pools across all supported chains through a single interface.
                  No more fragmented liquidity or slippage issues.
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
              {["Uniswap V3", "Uniswap V4", "SushiSwap", "Balancer"].map((dex) => (
                <div key={dex} className="p-4 border border-gray-200 rounded-xl text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-600">{dex[0]}</span>
                  </div>
                  <p className="font-medium text-gray-900">{dex}</p>
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
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Cross-Chain Swaps</h3>
                  <p className="text-gray-600 text-sm">Move liquidity across chains without trusted bridges.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">LP-Backed Borrowing</h3>
                  <p className="text-gray-600 text-sm">Use any supported LP as collateral for a credit line.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Unified Liquidity</h3>
                  <p className="text-gray-600 text-sm">Access deep pools across all supported chains in one interface.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <InlineFaqSection title="Frequently asked questions." items={openSpokeFaqItems} />
          </section>

          {/* CTA */}
          <EarlyAccessCtaBox />
        </div>
      </div>
    </div>
  )
}
