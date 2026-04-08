import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import ProductFeatureScrollSection from "@/components/product-feature-scroll-section"
import ProductStorySection from "@/components/product-story-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

const openSpokeFaqItems: InlineFaqItem[] = [
  {
    value: "open-1",
    question: "What happens to my LP fees while I borrow?",
    answer:
      "Your LP position stays active in the underlying AMM, so fees continue accruing while the loan is open. If liquidation occurs, any uncollected fees are applied first to reduce your debt before principal is unwound.",
  },
  {
    value: "open-2",
    question: "How is my borrowing limit calculated?",
    answer:
      "Your borrowing power is based on the USD value of the LP position, adjusted by the weaker asset in the pair and a pool specific risk factor. That risk factor reflects volatility, liquidity depth, and asset correlation.",
  },
  {
    value: "open-3",
    question: "What is a Spoke?",
    answer:
      "A Spoke is an isolated lending market designed for a specific AMM and pool type. Each Spoke has its own risk parameters, oracle logic, and liquidation flow, which keeps risk contained within that market.",
  },
  {
    value: "open-4",
    question: "What happens if I get liquidated?",
    answer:
      "Liquidation begins when your health factor falls below the allowed threshold. The protocol follows a borrower protective sequence by applying accrued fees first, then unwinding only the amount of LP principal needed to restore or repay the position. Any remaining value is returned to you.",
  },
  {
    value: "open-5",
    question: "Can I repay at any time?",
    answer:
      "Yes. There are no fixed loan terms. You can repay partially or in full whenever you want, as long as the position remains healthy while the loan is open.",
  },
  {
    value: "open-6",
    question: "Can I borrow against multiple LP positions at once?",
    answer:
      "Yes. Multiple LP positions can be used within the same market, with borrowing power derived from the combined collateral value. The interface shows both individual position health and your overall account exposure.",
  },
]

const borrowFeatureItems = [
  {
    title: "LP-native valuation",
    description: "Each position is priced from pool structure, token exposure, and venue-specific collateral logic.",
  },
  {
    title: "Dual-oracle pricing",
    description: "Chainlink and AMM TWAP data must stay in range before new credit is made available.",
  },
  {
    title: "Shared Hub liquidity",
    description: "Borrow capacity is funded from the Hub while underwriting remains isolated inside the Borrow Spoke.",
  },
  {
    title: "Active fee accrual",
    description: "Collateral stays inside the pool and can keep earning trading fees while debt remains open.",
  },
  {
    title: "Controlled liquidations",
    description: "Fees are applied first, then only the minimum LP principal is unwound to restore solvency.",
  },
] as const

export const metadata: Metadata = {
  title: "Borrow - Any LP Token as Collateral",
  description: "Avana Borrow accepts supported LP tokens as collateral for flexible borrowing across multiple DEXes.",
}

export default function BorrowPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 sm:px-6 md:px-8 pt-10 sm:pt-12 md:pt-20">
        <div className="flex-1 flex flex-col relative z-0">
        {/* Hero Section - Exact same structure as home (hero-section.tsx) */}
          <section className="pb-4 md:pb-6">
          <div className="mx-auto w-full pt-3 pb-6 md:pt-5 md:pb-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 lg:min-h-[400px] xl:min-h-[450px]">
              {/* Left Column - Hero Image */}
              <div className="order-2 mb-8 w-full lg:mb-0 lg:w-[55%]">
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
              <div className="order-1 mb-8 w-full text-left lg:order-2 lg:mb-0 lg:w-[45%]">
                <h1 className="mb-3 max-w-[11ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:text-5xl lg:text-5xl xl:text-6xl">
                  <span>Keep LP capital</span>
                  <br />
                  <span>ready to borrow.</span>
                </h1>

                <p className="mb-5 max-w-[34ch] text-base leading-relaxed text-gray-600 sm:max-w-[38ch] md:mb-6 md:text-lg">
                  Borrow against supported LP positions at 5.5% APR while your liquidity stays active and keeps earning fees.
                </p>

                <div className="flex max-w-md flex-row flex-wrap items-start gap-2 sm:gap-3">
                  <Link
                    href="/faq"
                    prefetch={false}
                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold rounded-full transition-colors"
                  >
                    Get Early Access
                  </Link>
                  <Link
                    href="/developers"
                    prefetch={false}
                    className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-900 text-xs font-semibold rounded-full transition-colors"
                  >
                    View Docs
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </section>
        </div>
      </div>

      <ProductStorySection
        withTopDivider
        eyebrowTone="blue"
        titleLines={["Unlock liquidity from", "Your AMM Pools."]}
        paragraphs={[
          "Borrow lives on the borrower-facing spoke, where each LP position is interpreted, valued, and risk-scored with pool-specific logic instead of being treated like a static token balance.",
          "Capacity comes from shared Hub liquidity, while dual-oracle pricing, health checks, and liquidation rules stay venue-aware so active AMM exposure can remain productive without making credit enforcement loose.",
        ]}
      />

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col">
        <div className="flex-1 flex flex-col relative z-0">
        {/* Rest of page content */}
        <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20">
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

          <ProductFeatureScrollSection
            eyebrowTone="blue"
            title="Borrow without unwinding."
            items={borrowFeatureItems}
          />

          {/* Supported Dexs */}
          <section>
            <div className="max-w-[650px] mb-8 space-y-3 text-left">
              <SectionEyebrow tone="blue">DEX Coverage</SectionEyebrow>
              <SectionTitle>Supported venues.</SectionTitle>
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
            <div className="max-w-[650px] mb-8 space-y-3 text-left">
              <SectionEyebrow tone="blue">Use Cases</SectionEyebrow>
              <SectionTitle>Put borrowed liquidity to work.</SectionTitle>
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

          <section>
            <HomepageNewsroomSection collection="borrow" eyebrowTone="blue" />
          </section>

          {/* FAQ */}
          <section>
            <InlineFaqSection title="Frequently asked questions." items={openSpokeFaqItems} eyebrowTone="blue" />
          </section>
        </div>
      </div>
      </div>
    </main>
  )
}
