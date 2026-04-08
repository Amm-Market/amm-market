import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
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

function BorrowMarketCard({
  number,
  title,
  description,
  children,
}: {
  number: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <div className="rounded-2xl bg-gray-50 p-6 md:p-8">
      <div className="mb-4 aspect-[10/7] overflow-hidden rounded-xl border border-gray-200 bg-white p-3">
        {children}
      </div>
      <span className="text-5xl font-bold text-gray-300 md:text-6xl">{number}</span>
      <h3 className="mt-6 mb-3 text-lg font-semibold text-gray-900 md:text-xl">{title}</h3>
      <p className="text-sm text-gray-600 md:text-base">{description}</p>
    </div>
  )
}

function TokenMarketsIllustration() {
  return (
    <svg className="h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="tokenMarketsArea" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B8BD9" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#8B8BD9" stopOpacity="0.03" />
        </linearGradient>
        <filter id="tokenMarketsGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M34 226 C110 214, 148 195, 198 172 C248 149, 286 128, 366 112"
        fill="none"
        stroke="#C4B5FD"
        strokeWidth="10"
        strokeLinecap="round"
        filter="url(#tokenMarketsGlow)"
        opacity="0.35"
      />
      <path
        d="M34 226 C110 214, 148 195, 198 172 C248 149, 286 128, 366 112"
        fill="none"
        stroke="#8B8BD9"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M34 226 C110 214, 148 195, 198 172 C248 149, 286 128, 366 112 L366 226 Z"
        fill="url(#tokenMarketsArea)"
      />
      <rect x="36" y="176" width="106" height="50" rx="14" fill="#111827" opacity="0.96" />
      <text x="89" y="206" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">
        LP
      </text>
      <circle cx="336" cy="114" r="22" fill="#8B8BD9" opacity="0.9" />
      <text x="336" y="119" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">
        1
      </text>
      <line x1="142" y1="201" x2="304" y2="135" stroke="#8B8BD9" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 7" />
      <path d="M297 131l16 2-9 13" fill="none" stroke="#8B8BD9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PoolMarketsIllustration() {
  return (
    <svg className="h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="poolMarketsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B7280" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      <rect x="42" y="62" width="110" height="48" rx="14" fill="#111827" opacity="0.96" />
      <text x="97" y="91" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">
        LP
      </text>
      <rect x="42" y="132" width="110" height="48" rx="14" fill="#8B8BD9" opacity="0.92" />
      <text x="97" y="161" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">
        LP
      </text>
      <rect x="42" y="202" width="110" height="48" rx="14" fill="url(#poolMarketsGrad)" />
      <text x="97" y="231" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">
        LP
      </text>
      <line x1="154" y1="86" x2="316" y2="86" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 8" />
      <line x1="154" y1="156" x2="316" y2="156" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 8" />
      <line x1="154" y1="226" x2="316" y2="226" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 8" />
      <rect x="316" y="62" width="42" height="48" rx="12" fill="#ffffff" stroke="#E5E7EB" />
      <rect x="316" y="132" width="42" height="48" rx="12" fill="#ffffff" stroke="#E5E7EB" />
      <rect x="316" y="202" width="42" height="48" rx="12" fill="#ffffff" stroke="#E5E7EB" />
      <circle cx="337" cy="86" r="9" fill="#8B8BD9" />
      <circle cx="337" cy="156" r="9" fill="#6B7280" />
      <circle cx="337" cy="226" r="9" fill="#111827" />
    </svg>
  )
}

function LeverageMarketsIllustration() {
  return (
    <svg className="h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <filter id="leverageMarketsGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M78 196 C78 132, 138 86, 210 86 C286 86, 326 130, 326 194"
        fill="none"
        stroke="#8B8BD9"
        strokeWidth="10"
        strokeLinecap="round"
        filter="url(#leverageMarketsGlow)"
        opacity="0.25"
      />
      <path
        d="M78 196 C78 132, 138 86, 210 86 C286 86, 326 130, 326 194"
        fill="none"
        stroke="#8B8BD9"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="44" y="182" width="78" height="40" rx="12" fill="#111827" opacity="0.96" />
      <text x="83" y="207" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
        LP
      </text>
      <rect x="161" y="66" width="98" height="40" rx="12" fill="#8B8BD9" />
      <text x="210" y="91" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
        Borrow
      </text>
      <rect x="288" y="182" width="78" height="40" rx="12" fill="#ffffff" stroke="#E5E7EB" />
      <text x="327" y="207" textAnchor="middle" fontSize="14" fontWeight="700" fill="#111827">
        Yield
      </text>
      <path d="M132 203c22 0 40-7 56-20" fill="none" stroke="#8B8BD9" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 7" />
      <path d="M214 106c0 24 12 42 34 56" fill="none" stroke="#8B8BD9" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 7" />
      <path d="M290 196c-18 0-34-6-47-18" fill="none" stroke="#8B8BD9" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 7" />
      <path d="M173 163h20l-8-8m8 8-8 8" fill="none" stroke="#8B8BD9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

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

      <section className="mt-4 sm:mt-8 lg:mt-10">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[76rem]">
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <SectionEyebrow tone="violet">Borrow markets</SectionEyebrow>
                <SectionTitle>Different Borrow markets</SectionTitle>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
              <BorrowMarketCard
                number="1"
                title="Token Markets"
                description="Deposit LP positions as collateral to borrow single assets"
              >
                <TokenMarketsIllustration />
              </BorrowMarketCard>

              <BorrowMarketCard
                number="2"
                title="Pool Markets"
                description="Deposit LP positions as collateral to borrow pool positions"
              >
                <PoolMarketsIllustration />
              </BorrowMarketCard>

              <BorrowMarketCard
                number="3"
                title="Leverage Markets"
                description="Deposit LP positions as collateral, borrow assets or pools, and loop into leveraged yield positions"
              >
                <LeverageMarketsIllustration />
              </BorrowMarketCard>
            </div>
          </div>
        </div>
      </section>

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
