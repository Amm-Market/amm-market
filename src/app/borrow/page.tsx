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
    description: "Each position is priced from pool structure, token exposure, and venue-specific collateral logic.",
  },
  {
    title: "Dual-oracle pricing",
    description: "Chainlink and AMM TWAP data must stay in range before new credit is made available.",
  },
  {
    title: "Shared Hub liquidity",
    description: "Borrowing power comes from shared Hub liquidity while risk remains isolated inside the Borrow Spoke.",
  },
  {
    title: "High capital efficiency",
    description: "Keep LP fees active while simultaneously accessing borrowing power.",
  },
  {
    title: "Minimal volatility risk",
    description: "Clear risk parameters and stable liquidation behavior under stress. Peg-aligned assets can significantly reduce liquidation risk.",
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

      <section className="pt-32 md:pt-40">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[76rem] space-y-32 md:space-y-40">
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <SectionEyebrow tone="violet">Borrow markets</SectionEyebrow>
                <SectionTitle>Different Borrow markets</SectionTitle>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <BorrowMarketCard
                  number="1"
                  title="Token Markets"
                  description="Deposit LP positions as collateral to borrow single assets"
                />

                <BorrowMarketCard
                  number="2"
                  title="Leverage / Perps Markets"
                  description="Deposit LP positions as collateral to open managed leverage or perps exposure"
                />

                <BorrowMarketCard
                  number="3"
                  title="Pool Markets"
                  description="Deposit LP positions as collateral to borrow pool positions"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 md:gap-12">
              <div className="flex flex-col gap-2">
                <SectionEyebrow tone="emerald">DEX Coverage</SectionEyebrow>
                <SectionTitle>Borrow Across DEXs</SectionTitle>
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
        <div className="site-content-width space-y-32 pt-32 pb-16 md:space-y-40 md:pt-40 md:pb-20">
          <ProductFeatureScrollSection
            eyebrowTone="blue"
            title="Borrow without unwinding."
            items={borrowFeatureItems}
          />

          <BorrowUseCasesSection />
          <BorrowPowerSection />

          <HomepageNewsroomSection collection="borrow" eyebrowTone="blue" />

          <div className="pb-16 md:pb-24">
            <InlineFaqSection title="Frequently asked questions." items={openSpokeFaqItems} eyebrowTone="blue" withTopBorder={false} />
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}
