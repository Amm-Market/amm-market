import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import BorrowPowerSection from "@/components/borrow-power-section"
import BorrowUseCasesSection from "@/components/borrow-use-cases-section"
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
    description: "Positions are priced from live pool structure, actual token exposure, and DEX-specific collateral rules.",
  },
  {
    title: "Dual-oracle pricing",
    description: "Chainlink and AMM TWAP data must stay in range before new credit is made available.",
  },
  {
    title: "Shared Hub liquidity",
    description: "Borrow from Aave Hubs while risk stays ring-fenced inside the Borrow Spokes.",
  },
  {
    title: "Uninterrupted fee accrual",
    description: "Deposited LP positions continue earning trading fees throughout the life of the loan.",
  },
  {
    title: "Minimal volatility risk",
    description: "Transparent risk parameters and predictable liquidation behavior, especially for peg-aligned pools.",
  },
  {
    title: "Cleaner position monitoring",
    description: "Track health, usage, and pool-specific limits with a cleaner LP-first borrowing workflow.",
  },
] as const

function BorrowMarketPlaceholderArt() {
  return (
    <div className="relative aspect-[10/7] overflow-hidden rounded-[22px] border border-dashed border-gray-300 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.98))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.06),transparent_46%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.05),transparent_42%)]" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <path
              d="M4 7h16v10H4V7Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 11h10M7 14h6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mt-4 space-y-1">
          <p className="text-lg font-semibold text-gray-900">Image placeholder</p>
          <p className="text-sm text-gray-500">Borrow market visual will go here.</p>
        </div>
      </div>
    </div>
  )
}

function BorrowMarketCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-gray-50 p-6 md:p-8">
      <span className="text-5xl font-bold text-gray-300 md:text-6xl">{number}</span>
      <h3 className="mt-6 max-w-[14rem] text-[1.45rem] font-medium leading-[1.08] tracking-[-0.045em] text-[#18323c]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
      <div className="mt-6">
        <BorrowMarketPlaceholderArt />
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Borrow - Any LP Token as Collateral",
  description: "Avana Borrow accepts supported LP tokens as collateral for flexible borrowing across multiple DEXes.",
}

export default function BorrowPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 pt-10 sm:px-6 sm:pt-12 md:px-8 md:pt-20 lg:max-w-[64rem] lg:min-h-0 lg:px-0">
        <div className="relative z-0">
          <section className="pb-4 md:pb-6 lg:pb-8 xl:pb-10">
            <div className="w-full pt-3 pb-6 md:pt-5 md:pb-10 lg:pb-2 xl:pb-3">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
              {/* Left Column - Hero Image */}
                <div className="order-2 mb-8 w-full lg:mb-0 lg:w-[55%]">
                  <div className="relative mx-auto w-full max-w-none lg:mx-0 lg:max-w-[650px] xl:max-w-[700px]">
                  <Image
                    src="/images/Hero__4_.png"
                    alt="App interface"
                    width={1400}
                    height={1400}
                    className="w-full h-auto rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
                    sizes="(max-width: 1024px) calc(100vw - 40px), 700px"
                    priority
                    fetchPriority="high"
                  />
                </div>
              </div>

              {/* Right Column - Text Content */}
                <div className="order-1 mb-8 w-full text-left lg:order-2 lg:mb-0 lg:w-[45%]">
                  <h1 className="mb-3 max-w-[11ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:text-5xl lg:text-5xl xl:text-6xl">
                    <span>Borrow from</span>
                    <br />
                    <span>AMM positions.</span>
                  </h1>

                  <p className="mb-5 max-w-[34ch] text-base leading-relaxed text-gray-600 sm:max-w-[38ch] md:mb-6 md:text-lg">
                    Access up to 80% of your LP value as a loan at 5.5% APR while your position keeps earning trading fees.
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
        eyebrow="Tap into your AMM Markets"
        eyebrowTone="blue"
        titleLines={["From pool to credit,", "seamlessly."]}
        paragraphs={[
          "Avana Borrow treats each LP position as live collateral, valued, risk-scored, and managed with pool-specific logic that reflects real AMM behaviour instead of flattening it into a token balance.",
          "Borrowing capacity is drawn from shared Hub liquidity. Dual-oracle pricing, health monitoring, and venue-aware liquidation keep your active exposure productive while maintaining strong credit standards.",
        ]}
      />

      <section className="pt-32 md:pt-40 2xl:pt-36">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[76rem] space-y-32 md:space-y-40 2xl:space-y-36">
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <SectionEyebrow tone="violet">Borrow markets</SectionEyebrow>
                <SectionTitle>Pick your borrow path</SectionTitle>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <BorrowMarketCard
                  number="1"
                  title="Token Markets"
                  description="Supply LP positions and receive single-asset loans deposited straight to your wallet."
                />

                <BorrowMarketCard
                  number="2"
                  title="Leverage / Perps Markets"
                  description="Use LP positions to open leveraged or perps positions without exiting liquidity."
                />

                <BorrowMarketCard
                  number="3"
                  title="Pool Markets"
                  description="Deposit LP positions as collateral to borrow pool positions."
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 md:gap-12">
              <div className="flex flex-col gap-2">
                <SectionEyebrow tone="emerald">DEX Coverage</SectionEyebrow>
                <SectionTitle>Supported across top DEXs</SectionTitle>
              </div>
              <div className="flex flex-1 items-stretch gap-2 flex-col sm:flex-row">
                <div className="grid w-full flex-1 grid-cols-3 gap-2">
                  <div className="aspect-square rounded-lg border border-gray-200 bg-white p-1 md:p-1.5">
                    <div className="flex size-full items-center justify-center rounded-md border border-gray-200 bg-[#111727] [&>svg]:size-3/5"></div>
                  </div>
                  <div className="aspect-square rounded-lg border border-gray-200 bg-white p-1 md:p-1.5">
                    <div className="flex size-full items-center justify-center rounded-md border border-gray-200 bg-[#FFFFFF] [&>svg]:size-3/5"></div>
                  </div>
                  <div className="aspect-square rounded-lg border border-gray-200 bg-white p-1 md:p-1.5">
                    <div className="flex size-full items-center justify-center rounded-md border border-gray-200 bg-[#000827] [&>svg]:size-3/5"></div>
                  </div>
                  <div className="aspect-square rounded-lg border border-gray-200 bg-white p-1 md:p-1.5">
                    <div className="flex size-full items-center justify-center rounded-md border border-gray-200 bg-[linear-gradient(45deg,#FC6901_0%,#F3B900_100%)] [&>svg]:size-3/5"></div>
                  </div>
                  <div className="aspect-square rounded-lg border border-gray-200 bg-white p-1 md:p-1.5">
                    <div className="flex size-full items-center justify-center rounded-md border border-gray-200 bg-[#000000] [&>svg]:size-3/5"></div>
                  </div>
                  <div className="aspect-square rounded-lg border border-gray-200 bg-white p-1 md:p-1.5">
                    <div className="flex size-full items-center justify-center rounded-md border border-gray-200 bg-[#F5F5F5] [&>svg]:size-3/5"></div>
                  </div>
                </div>
                <div className="flex w-full flex-1">
                  <div className="flex h-[150px] w-full flex-col items-center justify-center rounded-lg bg-gradient-to-b from-blue-50 to-blue-100 p-2 text-center sm:h-auto">
                    <div className="flex size-full flex-col items-center justify-center rounded-md border border-blue-200 bg-white">
                      <h4 className="text-base font-medium leading-normal text-blue-600 md:text-lg">
                        <div className="flex items-center text-[32px] font-bold text-gray-900 md:text-[48px]">
                          12+
                        </div>
                        <span>DEX Integrations</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="grid w-full flex-1 grid-cols-3 gap-2">
                  <div className="aspect-square rounded-lg border border-gray-200 bg-white p-1 md:p-1.5">
                    <div className="flex size-full items-center justify-center rounded-md border border-gray-200 bg-[#7D00FF] [&>svg]:size-3/5"></div>
                  </div>
                  <div className="aspect-square rounded-lg border border-gray-200 bg-white p-1 md:p-1.5">
                    <div className="flex size-full items-center justify-center rounded-md border border-gray-200 bg-[#000000] [&>svg]:size-3/5"></div>
                  </div>
                  <div className="aspect-square rounded-lg border border-gray-200 bg-white p-1 md:p-1.5">
                    <div className="flex size-full items-center justify-center rounded-md border border-gray-200 bg-[#F3EFCD] [&>svg]:size-3/5"></div>
                  </div>
                  <div className="aspect-square rounded-lg border border-gray-200 bg-white p-1 md:p-1.5">
                    <div className="flex size-full items-center justify-center rounded-md border border-gray-200 bg-[#061121] [&>svg]:size-3/5"></div>
                  </div>
                  <div className="aspect-square rounded-lg border border-gray-200 bg-white p-1 md:p-1.5">
                    <div className="flex size-full items-center justify-center rounded-md border border-gray-200 bg-[linear-gradient(90deg,#E35930_-6.83%,#E84125_100%)] [&>svg]:size-3/5"></div>
                  </div>
                  <div className="aspect-square rounded-lg border border-gray-200 bg-white p-1 md:p-1.5">
                    <div className="flex size-full items-center justify-center rounded-md border border-gray-200 bg-[#F1F7FF] [&>svg]:size-3/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col">
        <div className="flex-1 flex flex-col relative z-0">
        {/* Rest of page content */}
        <div className="site-content-width space-y-32 pt-32 pb-16 md:space-y-40 md:pt-40 md:pb-20 2xl:space-y-36 2xl:pt-36 2xl:pb-18">
          <ProductFeatureScrollSection
            eyebrowTone="blue"
            title="Engineered for LP safety."
            items={borrowFeatureItems}
            panels={[
              /* 01 LP-native valuation — pool structure, exposure, venue collateral logic */
              <div key="p1" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white">
                <div className="absolute inset-0 flex items-center justify-center p-5">
                  <div className="relative w-full max-w-[15.75rem] overflow-hidden rounded-[20px] border border-gray-200 bg-white p-4">
                    <div className="relative">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-gray-400">Mark</span>
                        <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[8px] font-medium text-gray-700">
                          v3
                        </span>
                      </div>
                      <div className="mt-3">
                        <div className="text-[8px] font-medium uppercase tracking-[0.1em] text-gray-400">Exposure</div>
                        <div className="mt-2 flex h-3 overflow-hidden rounded-full bg-gray-100">
                          <div className="borrow-exposure-eth flex w-[62%] items-center justify-center bg-blue-400" />
                          <div className="borrow-exposure-usdc flex w-[38%] items-center justify-center bg-slate-300" />
                        </div>
                        <div className="mt-1 flex justify-between text-[9px] font-medium text-[#18323c]">
                          <span>ETH 62%</span>
                          <span>USDC 38%</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-end justify-between border-t border-gray-100 pt-3">
                        <div>
                          <span className="text-[8px] font-medium uppercase tracking-[0.1em] text-gray-400">$</span>
                          <div className="mt-1 h-[2.35rem] overflow-hidden">
                            <div className="panel-ticker-v-fast" style={{ animationDuration: "10s" }}>
                              {["$24,840", "$24,902", "$24,791", "$24,840"].map((v, i) => (
                                <div key={i} className="flex h-[2.35rem] items-center">
                                  <span className="text-[1.65rem] font-semibold leading-none tracking-[-0.04em] text-[#18323c]">{v}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[8px] font-medium uppercase tracking-[0.1em] text-gray-400">AMM</span>
                          <p className="mt-1 text-[11px] font-semibold text-[#18323c]">Uniswap v3</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-[8px] font-medium uppercase tracking-[0.08em] text-gray-400">
                          <span>Haircut</span>
                          <span>12%</span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-gray-100">
                          <div className="borrow-fill-main h-full w-[12%] rounded-full bg-blue-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>,

              /* 02 Dual-oracle pricing */
              <div key="p2" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white">
                <div className="absolute inset-0 flex items-center justify-center p-5">
                  <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-3">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-500">Chainlink</span>
                        <div className="mt-1 h-[1.35rem] overflow-hidden">
                          <div className="panel-ticker-v-fast" style={{ animationDuration: "9s" }}>
                            {["$1,842.04", "$1,842.11", "$1,841.98", "$1,842.04"].map((v, i) => (
                              <span key={i} className="block h-[1.35rem] text-sm font-semibold tabular-nums text-[#18323c]">
                                {v}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-3">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-500">TWAP</span>
                        <div className="mt-1 h-[1.35rem] overflow-hidden">
                          <div className="panel-ticker-v-fast" style={{ animationDuration: "9.6s" }}>
                            {["$1,841.52", "$1,841.61", "$1,841.44", "$1,841.52"].map((v, i) => (
                              <span key={i} className="block h-[1.35rem] text-sm font-semibold tabular-nums text-[#18323c]">
                                {v}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-4 py-1">
                      <svg className="h-4 w-full text-gray-400" viewBox="0 0 280 16" fill="none" aria-hidden="true">
                        <path
                          d="M4 8 H276"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeDasharray="5 8"
                          className="borrow-oracle-bridge"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-1 bg-white px-3">
                          <span className="text-[9px] font-medium tabular-nums text-gray-500">0.11%</span>
                          <div className="borrow-credit-gate-pulse rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-[8px] font-semibold text-[#18323c]">
                            OK
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 border-t border-gray-100 pt-3">
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
                        <div className="h-full rounded-full bg-gray-600" style={{ width: "22%" }} />
                        <div className="absolute right-0 top-1/2 h-3 w-px -translate-y-1/2 bg-[#18323c]" />
                      </div>
                      <p className="mt-1.5 text-center text-[7px] tabular-nums text-gray-400">0.11% · max 0.5%</p>
                    </div>
                  </div>
                </div>
              </div>,

              /* 03 Shared Hub liquidity */
              <div key="p3" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white">
                <div className="absolute inset-0 flex items-center justify-center p-5">
                  <div className="w-full max-w-[16.25rem] overflow-hidden rounded-2xl border border-gray-200 bg-white">
                    <div className="grid grid-cols-[1fr_auto_1fr] items-stretch">
                      <div className="borrow-hub-node-pulse flex flex-col border-r border-gray-200 bg-gray-50/70 p-3.5">
                        <span className="text-[8px] font-medium uppercase tracking-[0.14em] text-gray-500">Hub</span>
                        <p className="mt-1.5 text-xl font-semibold tabular-nums text-[#18323c]">$4.2M</p>
                      </div>
                      <div className="flex w-12 flex-col items-center justify-center bg-white px-0.5">
                        <svg className="h-[3.25rem] w-7 shrink-0 text-gray-400" viewBox="0 0 28 56" fill="none" aria-hidden="true">
                          <path
                            d="M6 28 H22"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="4 5"
                            className="borrow-hub-flow"
                          />
                          <path
                            d="M18 20 L22 28 L18 36"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex min-h-[6.5rem] flex-col border-l border-dashed border-gray-300 bg-white p-3.5">
                        <span className="text-[8px] font-medium uppercase tracking-[0.14em] text-gray-500">Spoke</span>
                        <p className="mt-1 text-[10px] font-semibold leading-tight text-[#18323c]">ETH / USDC</p>
                        <p className="mt-2 text-[8px] font-medium tabular-nums text-gray-600">$2.1M</p>
                        <span className="mt-auto inline-flex w-fit rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-[8px] font-medium text-gray-700">
                          Risk
                        </span>
                      </div>
                    </div>
                    <div className="border-t border-gray-100 bg-gray-50/40 px-3.5 py-2.5">
                      <div className="flex items-center justify-between text-[8px]">
                        <span className="font-medium text-gray-500">Hub APR</span>
                        <span className="tabular-nums font-semibold text-[#18323c]">4.2%</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[7px] text-gray-400">
                        <span>Use</span>
                        <span className="tabular-nums text-gray-600">62%</span>
                      </div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-gray-200">
                        <div className="h-full w-[62%] rounded-full bg-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>,

              /* 04 High capital efficiency */
              <div key="p4" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white">
                <div className="absolute inset-0 flex items-center justify-center p-5">
                  <div className="w-full max-w-[15.75rem] overflow-hidden rounded-[20px] border border-gray-200 bg-white p-4">
                    <div className="grid grid-cols-2 gap-0 divide-x divide-gray-100">
                      <div className="pr-3">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Fees</span>
                        <div className="mt-2 h-[1.35rem] overflow-hidden">
                          <div className="panel-ticker-v-fast" style={{ animationDuration: "11s" }}>
                            {["+$48/d", "+$51/d", "+$46/d", "+$48/d"].map((v, i) => (
                              <div key={i} className="flex h-[1.35rem] items-center">
                                <span className="text-base font-semibold tabular-nums text-[#18323c]">{v}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
                          <div className="borrow-dual-stream-fees h-full w-[78%] rounded-full bg-gray-700" />
                        </div>
                      </div>
                      <div className="pl-3">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Borrow</span>
                        <p className="borrow-dual-stream-borrow mt-2 text-xl font-semibold tabular-nums leading-none text-[#18323c]">$19,840</p>
                        <p className="mt-2 text-[9px] font-semibold tabular-nums text-[#18323c]">64%</p>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
                          <div className="h-full w-[64%] rounded-full bg-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>,

              /* 05 Minimal volatility risk */
              <div key="p5" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white">
                <div className="absolute inset-0 flex items-center justify-center p-5">
                  <div className="w-full max-w-[15.75rem]">
                    <div className="overflow-hidden rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[8px] font-medium uppercase tracking-[0.1em] text-gray-400">Range</span>
                        <span className="shrink-0 rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-[8px] font-medium text-gray-700">
                          Peg
                        </span>
                      </div>
                      <div className="relative mt-4 h-[5.5rem] overflow-hidden rounded-xl bg-gray-100">
                        <div className="absolute left-3 right-3 top-3 border-t border-dashed border-gray-400" />
                        <div className="absolute bottom-3 left-3 right-3 border-b border-dashed border-gray-400" />
                        <p className="absolute left-2 top-1 text-[7px] font-medium text-rose-400/90">↑</p>
                        <p className="absolute bottom-1 left-2 text-[7px] font-medium text-rose-400/90">↓</p>
                        <div className="borrow-risk-zone-breathe absolute inset-x-9 inset-y-7 z-0 rounded-md border border-gray-200 bg-white" />
                        <div className="relative z-10 h-full w-full">
                          <div className="borrow-risk-shuttle h-5 w-5 rounded-full border-2 border-gray-600 bg-white" />
                        </div>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <div className="rounded-lg border border-gray-200 bg-gray-50/80 px-3 py-2 text-center">
                          <span className="block text-[8px] text-gray-500">30d vol</span>
                          <span className="text-[11px] font-semibold text-[#18323c]">3.2%</span>
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-gray-50/80 px-3 py-2 text-center">
                          <span className="block text-[8px] text-gray-500">Buffer</span>
                          <span className="text-[11px] font-semibold text-[#18323c]">18%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>,

              /* 06 Cleaner position monitoring — monitor console */
              <div key="p6" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white">
                <div className="absolute inset-0 flex items-center justify-center px-5">
                  <div className="w-full max-w-[16rem] rounded-[22px] border border-gray-200 bg-white p-4">
                    <div className="relative overflow-hidden rounded-[18px] border border-gray-200 bg-gray-50/50 p-4">
                      <div className="borrow-console-scan absolute left-3 right-3 top-3 h-[1px] bg-gray-400/80" />
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-gray-400">Console</span>
                        <div className="flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                          <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                          <div className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-end justify-between gap-3">
                        <div>
                          <span className="block text-[10px] font-medium uppercase tracking-[0.08em] text-gray-400">Health</span>
                          <div className="mt-1 h-[2.8rem] overflow-hidden">
                            <div className="panel-ticker-v-fast" style={{ animationDuration: '12s' }}>
                              {["1.82", "1.54", "2.10", "1.82"].map((v, i) => (
                                <div key={i} className="flex h-[2.8rem] items-center">
                                  <span className="text-[2.6rem] font-semibold leading-none tracking-[-0.05em] text-[#18323c]">{v}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex h-[60px] items-end gap-1.5 rounded-[16px] border border-gray-200 bg-white px-3 py-2">
                          <div className="borrow-console-bar-a h-8 w-2 rounded-full bg-gray-400" />
                          <div className="borrow-console-bar-b h-10 w-2 rounded-full bg-gray-500" />
                          <div className="borrow-console-bar-c h-12 w-2 rounded-full bg-gray-600" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="h-4 overflow-hidden">
                          <div className="panel-ticker-v-fast" style={{ animationDuration: '12s' }}>
                            {["ETH / USDC", "WBTC / ETH", "ARB / USDC", "ETH / USDC"].map((v, i) => (
                              <span key={i} className="block h-4 text-[10px] font-semibold text-[#18323c]">{v}</span>
                            ))}
                          </div>
                        </div>
                        <span className="text-[10px] font-medium tabular-nums text-gray-400">64%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
                        <div className="borrow-fill-main h-full w-[64%] rounded-full bg-emerald-400" />
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[10px] text-gray-400">Cap</span>
                        <span className="text-[10px] font-semibold text-[#18323c]">$2.4M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>,
            ]}
          />

          <BorrowUseCasesSection />
          <BorrowPowerSection />

          <HomepageNewsroomSection collection="borrow" eyebrowTone="blue" />

          <div className="pb-16 md:pb-24 2xl:pb-22">
            <InlineFaqSection title="Frequently asked questions." items={openSpokeFaqItems} eyebrowTone="blue" withTopBorder={false} />
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}
