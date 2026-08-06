import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { Activity, BadgeDollarSign, Compass, Layers, LineChart, ShieldCheck } from "lucide-react"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import { FeatureCardDescription, FeatureCardTitle, SectionEyebrow, SectionTitle } from "@/components/shared"
import { TokenLogo } from "@/components/token-logo"
import { PerformanceSection } from "@/components/ui/performance-section"
import { CYAN_HIGHLIGHT_TEXT_CLASS } from "@/lib/highlight"

const BorrowPowerSection = dynamic(() => import("@/components/borrow-power-section"))
const HomepageNewsroomSection = dynamic(() => import("@/components/homepage/HomepageNewsroomSection"))
const ProductFeatureScrollSection = dynamic(() => import("@/components/product-feature-scroll-section"))

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
    description: "Positions are priced from live pool structure, token exposure, and DEX-specific collateral rules.",
  },
  {
    title: "Dual-oracle pricing",
    description: "Chainlink and AMM TWAP data must stay in range before new credit can be made available.",
  },
  {
    title: "Shared Hub liquidity",
    description: "Borrow from Aave Hubs while risk stays ring-fenced inside dedicated Borrow Spokes.",
  },
  {
    title: "Uninterrupted fee accrual",
    description: "Deposited LP positions continue earning trading fees throughout the full life of the loan.",
  },
] as const

const borrowPartnerFeatures = [
  {
    title: "Live LP collateral",
    description:
      "Treat each LP position as live collateral valued like an active AMM position, not a static token.",
    icon: Layers,
  },
  {
    title: "Pool-specific scoring",
    description:
      "Borrowing power is risk-scored with pool logic that reflects volatility, depth, and market behavior.",
    icon: Compass,
  },
  {
    title: "Real AMM behaviour",
    description:
      "Collateral rules track real pool structure and exposure so credit stays tied to your live position.",
    icon: Activity,
  },
  {
    title: "Shared Hub liquidity",
    description:
      "Borrowing capacity comes from shared Hub liquidity while your LP stays productive in the pool.",
    icon: BadgeDollarSign,
  },
  {
    title: "Dual-oracle pricing",
    description:
      "Dual-oracle pricing keeps marks robust as markets move so collateral value stays credible over time.",
    icon: LineChart,
  },
  {
    title: "Active risk controls",
    description:
      "Health monitoring and venue-aware liquidation protect standards while your exposure keeps earning fees.",
    icon: ShieldCheck,
  },
] as const

const lpHubMarkets = [
  {
    category: "Lowest-risk hub",
    title: "Stable LP Hub",
    description:
      "Stablecoin LP markets built for tight pricing, low slippage, and minimal impermanent loss.",
    pools: ["USDC / GHO", "USDT / USDC", "USDe / sUSDe", "GHO / USDe", "sUSDe / USDC"],
    borrowable: ["sUSDe", "USDC", "USDT", "GHO", "USDe"],
  },
  {
    category: "Global Strategy hub",
    title: "Correlated LP Hub",
    description:
      "LP markets for assets that move together, built for tighter risk bands and cleaner borrowing power.",
    pools: ["ETH / wstETH", "wstETH / cbETH", "ETH / rETH", "USDe / sUSDe", "GHO / USDe"],
    borrowable: ["ETH", "wstETH", "USDC", "GHO", "USDe"],
  },
  {
    category: "Higher-range hub",
    title: "Volatile LP Hub",
    description:
      "Major DeFi asset LP markets for wider price ranges and higher risk-reward strategies.",
    pools: ["ETH / USDC", "WBTC / ETH", "cbBTC / USDC", "AAVE / ETH", "+4 More"],
    borrowable: ["ETH", "wstETH", "WBTC", "cbBTC", "USDT", "USDC", "GHO", "AAVE"],
  },
] as const

const hubTokenLogoUrls: Record<string, string> = {
  AAVE: "https://coin-logos.simplr.sh/images/aave/standard.png",
  cbBTC: "https://coin-logos.simplr.sh/images/coinbase-wrapped-btc/standard.png",
  cbETH: "https://coin-logos.simplr.sh/images/coinbase-wrapped-staked-eth/standard.png",
  ETH: "https://coin-logos.simplr.sh/images/ethereum/standard.png",
  GHO: "https://coin-logos.simplr.sh/images/gho/standard.png",
  rETH: "https://coin-logos.simplr.sh/images/rocket-pool-eth/standard.png",
  sUSDe: "https://coin-logos.simplr.sh/images/staked-usde/standard.png",
  USDC: "https://coin-logos.simplr.sh/images/usd-coin/standard.png",
  USDe: "https://coin-logos.simplr.sh/images/usde/standard.png",
  USDT: "https://coin-logos.simplr.sh/images/tether/standard.png",
  WBTC: "https://coin-logos.simplr.sh/images/wrapped-bitcoin/standard.png",
  wstETH: "https://coin-logos.simplr.sh/images/wrapped-steth/standard.png",
}

function getHubTokenLogo(symbol: string) {
  return hubTokenLogoUrls[symbol] ?? `https://coin-logos.simplr.sh/images/${symbol.toLowerCase()}/standard.png`
}

function HubPoolIcon({ pool }: { pool: string }) {
  if (pool.includes("More")) {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#01AACF] text-[0.7rem] font-bold text-white">
        +
      </span>
    )
  }

  const [first, second] = pool.split(" / ")

  return (
    <span className="flex items-center">
      {[first, second].map((token, index) => (
        <TokenLogo
          key={`${pool}-${token}`}
          src={getHubTokenLogo(token)}
          className={`h-5 w-5 rounded-full ring-2 ring-white ${index > 0 ? "-ml-1.5" : ""}`}
        />
      ))}
    </span>
  )
}

function HubSingleTokenIcon({ token }: { token: string }) {
  return (
    <TokenLogo
      src={getHubTokenLogo(token)}
      className="h-5 w-5 rounded-full ring-2 ring-white"
    />
  )
}

function HubTokenGroup({
  label,
  tokens,
  withPoolIcons = false,
  withTokenIcons = false,
}: {
  label: string
  tokens: readonly string[]
  withPoolIcons?: boolean
  withTokenIcons?: boolean
}) {
  return (
    <div className="mt-5 first:mt-0">
      <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#7b858c]">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {tokens.map((token) => (
          <span
            key={`${label}-${token}`}
            className="inline-flex h-8 items-center gap-2 rounded-full border border-gray-200 bg-white px-3 text-sm font-semibold tracking-[-0.015em] text-[#2f3940]"
          >
            {withPoolIcons ? <HubPoolIcon pool={token} /> : null}
            {withTokenIcons ? <HubSingleTokenIcon token={token} /> : null}
            {token}
          </span>
        ))}
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
    <div className="flex h-full flex-col feature-card rounded-2xl p-6 md:p-8">
      <span className="text-5xl font-bold text-gray-300 md:text-6xl">{number}</span>
      <FeatureCardTitle className="mt-6">{title}</FeatureCardTitle>
      <FeatureCardDescription className="mt-3">{description}</FeatureCardDescription>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Borrow",
  description: "Avana Borrow accepts supported LP tokens as collateral for flexible borrowing across multiple DEXes.",
}

export default function BorrowPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 pt-10 sm:px-6 sm:pt-12 md:px-8 md:pt-20 lg:max-w-[64rem] 2xl:max-w-[72rem] lg:min-h-0 lg:px-0">
        <div className="relative z-0">
          <section className="pb-0 lg:pb-10 xl:pb-12">
            <div className="w-full pt-3 pb-0 md:pt-5">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
              {/* Left Column - Hero Image */}
                <div className="order-2 mb-8 w-full lg:mb-0 lg:w-[55%]">
                  <div className="relative mx-auto w-full max-w-none lg:mx-0 lg:max-w-[650px] xl:max-w-[700px]">
                    <Image
                      src="/images/Hero__4_.webp"
                      alt="App interface"
                      width={1200}
                      height={1200}
                      quality={58}
                      preload
                      className="w-full h-auto rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
                      sizes="(max-width: 1024px) calc(100vw - 40px), 700px"
                      fetchPriority="high"
                    />
                </div>
              </div>

              {/* Right Column - Text Content */}
                <div className="order-1 mb-8 w-full text-left lg:order-2 lg:mb-0 lg:w-[45%]">
                  <h1 className="mb-3 max-w-[11ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:text-5xl lg:text-5xl xl:text-6xl">
                    <span>Borrow against</span>
                    <br />
                    <span>AMM positions.</span>
                  </h1>

                  <p className="mb-5 max-w-[34ch] text-base leading-relaxed text-gray-600 sm:max-w-[38ch] md:mb-6 md:text-lg">
                    Turn your liquidity pool positions into collateral and borrow against them here without leaving the pool.
                  </p>

                  <div className="flex max-w-md flex-row flex-wrap items-start gap-2 sm:gap-3">
                    <Link
                      href="https://app.avana.cc"
                      prefetch={false}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#01AACF] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#00a0c2]"
                    >
                      Try Borrowing
                    </Link>
                    <Link
                      href="/developers"
                      prefetch={false}
                      className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-900 transition-colors hover:bg-gray-100"
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

      <section className="border-t border-[#01AACF] bg-white site-section-gap">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[90rem]">
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <SectionEyebrow tone="violet">How it works</SectionEyebrow>
                <SectionTitle>Borrowing in three steps</SectionTitle>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <BorrowMarketCard
                  number="1"
                  title="Deposit LP"
                  description="Choose a supported LP position and deposit it as collateral while your liquidity stays active."
                />

                <BorrowMarketCard
                  number="2"
                  title="Draw liquidity"
                  description="Borrow against the risk-adjusted value of the position and receive funds straight in your wallet."
                />

                <BorrowMarketCard
                  number="3"
                  title="Manage health"
                  description="Repay, add collateral, or reduce debt before the position drifts toward the liquidation threshold."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white site-section-gap">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[90rem]">
            <div className="flex flex-col gap-6">
              <div className="max-w-[48rem]">
                <SectionEyebrow tone="blue">LP markets strategy</SectionEyebrow>
                <SectionTitle className="mt-2 max-w-none">
                  Choose the market type that matches your LP
                </SectionTitle>
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:mt-16 lg:grid-cols-3">
              {lpHubMarkets.map((hub) => (
                <article
                  key={hub.title}
                  className="flex h-full flex-col feature-card rounded-2xl border border-gray-200 !bg-white p-6 md:p-8"
                >
                  <p className="text-sm font-semibold tracking-[-0.01em] text-[#01AACF]">
                    {hub.category}
                  </p>
                  <FeatureCardTitle className="mt-4">{hub.title}</FeatureCardTitle>
                  <FeatureCardDescription className="mt-3 min-h-[4.5rem] max-w-[22rem]">
                    {hub.description}
                  </FeatureCardDescription>

                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <HubTokenGroup label="LP pool collateral" tokens={hub.pools} withPoolIcons />
                    <HubTokenGroup label="Borrowable" tokens={hub.borrowable} withTokenIcons />
                  </div>

                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white site-section-gap">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[76rem]">
            <div className="max-w-[58rem] space-y-3 text-left sm:space-y-4">
              <SectionEyebrow tone="blue">Borrow with Confidence</SectionEyebrow>
              <SectionTitle className="max-w-[18ch] sm:max-w-[22ch] lg:max-w-none">
                <span className="block sm:inline">Protected at the</span>{" "}
                <span className="block sm:inline">pool level.</span>
              </SectionTitle>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 md:mt-16 md:gap-x-16 md:gap-y-14 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-20">
              {borrowPartnerFeatures.map((feature) => (
                <article key={feature.title} className="flex flex-col bg-transparent">
                  <feature.icon className="h-10 w-10 text-[#01AACF] sm:h-11 sm:w-11" strokeWidth={1.5} aria-hidden="true" />
                  <FeatureCardTitle className="mt-4 sm:mt-5">{feature.title}</FeatureCardTitle>
                  <FeatureCardDescription className="mt-2 max-w-[22rem]">
                    {feature.description}
                  </FeatureCardDescription>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PerformanceSection className="site-section-gap">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[76rem] flex flex-col site-section-stack">
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
                        <div className={`flex items-center text-[32px] font-bold md:text-[48px] ${CYAN_HIGHLIGHT_TEXT_CLASS}`}>
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

            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <SectionEyebrow tone="blue">Liquidity pools</SectionEyebrow>
                <SectionTitle className="md:whitespace-nowrap">
                  Every Pool details, fully explained.
                </SectionTitle>
              </div>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] sm:aspect-[2/1] md:rounded-[1.6rem]">
                <Image
                  src="/images/borrow-markets-visual.png"
                  alt="Document-style preview of supported borrowing markets"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1120px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <BorrowPowerSection />

          </div>
        </div>
      </PerformanceSection>

      <section className="bg-white site-section-gap">
        <div className="site-content-shell">
          <div className="mx-auto grid w-full max-w-[90rem] items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-18">
            <div className="max-w-[33rem]">
              <SectionEyebrow tone="violet">Working capital</SectionEyebrow>
              <SectionTitle className="mt-5 max-w-none">
                <span className="block whitespace-nowrap">Access capital when</span>
                <span className="block whitespace-nowrap">opportunity calls.</span>
              </SectionTitle>

              <ol className="mt-7 grid max-w-[32rem] gap-4 text-[0.98rem] leading-[1.55] tracking-[-0.01em] text-[#111111]/80 md:text-[1.04rem]">
                <li className="flex gap-3">
                  <span className="mt-0.5 font-semibold text-[#01AACF]">1.</span>
                  <span>Deposit LP collateral, draw liquidity, and manage repayment as your position moves.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 font-semibold text-[#01AACF]">2.</span>
                  <span>Explore supported pools, collateral limits, and LP markets built for active borrowing.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 font-semibold text-[#01AACF]">3.</span>
                  <span>Price, monitor, and limit credit using pool-aware rules built for active LP collateral.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 font-semibold text-[#01AACF]">4.</span>
                  <span>See when a position is healthy, when it needs attention, and how liquidation is handled.</span>
                </li>
              </ol>
            </div>

            <div className="relative lg:pt-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-transparent md:rounded-[28px] lg:aspect-[1.18/1] lg:rounded-[32px]">
                <Image
                  src="/images/leverage-hero-placeholder.webp"
                  alt="Person holding a smartphone showing a finance app"
                  fill
                  className="object-cover object-[55%_42%]"
                  sizes="(max-width: 1024px) 100vw, 54vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col">
        <div className="flex-1 flex flex-col relative z-0">
        {/* Rest of page content */}
        <div className="site-content-width flex flex-col site-section-stack site-section-gap pb-16 md:pb-20 2xl:pb-18">
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
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-[#01AACF]">Chainlink</span>
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
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-[#01AACF]">TWAP</span>
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
                        <span className="text-[8px] font-medium uppercase tracking-[0.14em] text-[#01AACF]">Hub</span>
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
                        <span className="text-[8px] font-medium uppercase tracking-[0.14em] text-[#01AACF]">Spoke</span>
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
            ]}
          />

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
