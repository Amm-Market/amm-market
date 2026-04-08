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

function OpportunityCard({
  number,
  title,
  description,
  children,
}: {
  number: string
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="group flex min-w-[75vw] snap-center flex-col rounded-[28px] border border-gray-200 bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition-[border-color,box-shadow,transform] duration-200 hover:border-violet-200 hover:shadow-[0_20px_55px_rgba(139,92,246,0.12)] sm:min-w-0 sm:p-5">
      <div className="mb-3 aspect-[10/7] w-full overflow-hidden rounded-lg bg-neutral-50/50 dark:bg-neutral-800/30">
        {children}
      </div>
      <div className="mb-1.5 flex items-center justify-center gap-2">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
          {number}
        </span>
        <h3 className="text-sm font-semibold text-gray-900 sm:text-base">{title}</h3>
      </div>
      <p className="text-center text-xs leading-relaxed text-gray-500 sm:text-sm">
        {description}
      </p>
    </div>
  )
}

function StackYieldIllustration() {
  return (
    <svg className="h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="borrowStandardAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9CA3AF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="borrowYieldAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B8BD9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8B8BD9" stopOpacity="0.02" />
        </linearGradient>
        <filter id="borrowYieldGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <line x1="35" y1="250" x2="365" y2="250" className="stroke-neutral-300 dark:stroke-neutral-600" strokeWidth="1" strokeDasharray="1px 1px" pathLength="1" />
      <path
        d="M35 250 C150.5 250, 167 165, 365 165 L365 250 Z"
        fill="url(#borrowStandardAreaGrad)"
      />
      <path
        d="M35 250 C150.5 250, 150.5 68.4, 365 68.4 L365 250 Z"
        fill="url(#borrowYieldAreaGrad)"
      />
      <path
        d="M35 250 C150.5 250, 167 165, 365 165"
        fill="none"
        className="stroke-neutral-400 dark:stroke-neutral-500"
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength="1"
      />
      <path
        d="M35 250 C150.5 250, 150.5 68.4, 365 68.4"
        fill="none"
        stroke="#8B8BD9"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#borrowYieldGlow)"
        opacity="0.5"
        pathLength="1"
      />
      <path
        d="M35 250 C150.5 250, 150.5 68.4, 365 68.4"
        fill="none"
        stroke="#8B8BD9"
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength="1"
      />
      <circle cx="365" cy="165" r="4" className="fill-neutral-400 dark:fill-neutral-500" />
      <circle cx="365" cy="68.4" r="4" fill="#8B8BD9" />
      <g transform="translate(335 137)">
        <circle cx="10" cy="10" r="10" fill="#111827" opacity="0.92" />
        <text x="10" y="13.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
          A
        </text>
      </g>
      <g transform="translate(335 40.4)">
        <circle cx="10" cy="10" r="10" fill="#8B8BD9" />
        <text x="10" y="13.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
          T
        </text>
      </g>
    </svg>
  )
}

function BoostLeverageIllustration() {
  return (
    <svg className="h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="borrowBaseLevGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B7280" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="borrowTwyneLevGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B8BD9" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#A5A5E8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#B8B8F0" stopOpacity="1" />
        </linearGradient>
        <filter id="borrowLevGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(55.1 99)">
        <circle cx="10" cy="10" r="10" fill="#111827" />
        <text x="10" y="13.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
          A
        </text>
      </g>
      <g transform="translate(55.1 161)">
        <circle cx="10" cy="10" r="10" fill="#8B8BD9" />
        <text x="10" y="13.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
          T
        </text>
      </g>
      <rect x="85.1" y="90" height="38" rx="8" fill="url(#borrowBaseLevGrad)" width="68.6" />
      <text x="167.7" y="109" textAnchor="start" dominantBaseline="central" className="text-[18px] font-semibold fill-neutral-500 dark:fill-neutral-400">
        10x
      </text>
      <rect x="80.1" y="147" height="48" rx="12" fill="#8B8BD9" filter="url(#borrowLevGlow)" width="215.7" opacity="0.4" />
      <rect x="85.1" y="152" height="38" rx="8" fill="url(#borrowTwyneLevGrad)" width="205.7" />
      <rect x="85.1" y="152" height="38" rx="8" fill="#B8B8F0" filter="url(#borrowLevGlow)" width="180.2" opacity="0.17" />
      <text x="304.9" y="171" textAnchor="start" dominantBaseline="central" className="text-[22px] font-bold" fill="#8B8BD9">
        30x
      </text>
    </svg>
  )
}

function LiquidationProtectionIllustration() {
  return (
    <svg className="h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <filter id="borrowLiqDotGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M35 151 L140.6 151 L140.6 210.4 L315.5 210.4 L315.5 151 L365 151 L365 250 L35 250 Z"
        fill="#991B1B"
        fillOpacity="0.12"
      />
      <text x="41" y="240" className="text-[14px] font-medium fill-red-400/70 dark:fill-red-400/60">
        Liquidation Zone
      </text>
      <line x1="140.6" y1="35" x2="140.6" y2="146" className="stroke-neutral-300/60 dark:stroke-neutral-600/50" strokeWidth="1" strokeDasharray="1px 1px" pathLength="1" />
      <g transform="translate(114.6 35)">
        <circle cx="10" cy="10" r="10" fill="#111827" />
        <text x="10" y="13.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
          A
        </text>
      </g>
      <g transform="translate(146.6 35)">
        <circle cx="10" cy="10" r="10" fill="#8B8BD9" />
        <text x="10" y="13.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
          T
        </text>
      </g>
      <text x="361" y="44" textAnchor="end" className="text-[14px] font-medium" fill="#8B8BD9">
        Loan Health
      </text>
      <path
        d="M40 63 C155.5 63, 176.9 192.4, 226.4 192.4 C275.9 192.4, 320 69.6, 353 69.6"
        fill="none"
        stroke="#8B8BD9"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength="1"
      />
      <circle cx="353" cy="69.6" r="4" fill="#8B8BD9" opacity="1" />
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
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible">
            <OpportunityCard
              number="1"
              title="Stack Yield"
              description="Turn idle borrowing capacity into extra yield, stacked on top of your lending returns."
            >
              <StackYieldIllustration />
            </OpportunityCard>
            <OpportunityCard
              number="2"
              title="Boost Leverage"
              description="Unlock more leverage loops to amplify your yield."
            >
              <BoostLeverageIllustration />
            </OpportunityCard>
            <OpportunityCard
              number="3"
              title="Liquidation Protection"
              description="Protect your loan by increasing your borrowing capacity."
            >
              <LiquidationProtectionIllustration />
            </OpportunityCard>
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
