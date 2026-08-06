import dynamic from "next/dynamic"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import {
  ArrowLeftRight,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Layers,
  Percent,
  RotateCcw,
  Wallet,
  Zap,
} from "lucide-react"
import { DeFiTerm } from "@/components/defi-term"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import { FeatureCardDescription, FeatureCardTitle, SectionEyebrow, SectionTitle } from "@/components/shared"
import { homepagePools, type HomepagePool } from "@/data/homepage"
import { LazySection } from "@/components/ui/lazy-section"
import { PerformanceDiv } from "@/components/ui/performance-section"
import { TokenLogo } from "@/components/token-logo"
function SectionSkeleton({
  lines = 3,
  minHeight = "320px",
}: {
  lines?: number
  minHeight?: string
}) {
  return (
    <div
      aria-hidden="true"
      className="feature-card rounded-[28px] border border-gray-200 p-6"
      style={{ minHeight }}
    >
      <div className="animate-pulse space-y-4">
        <div className="h-3 w-28 rounded-full bg-gray-200" />
        <div className="h-10 w-72 max-w-full rounded-2xl bg-gray-200" />
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className="h-4 rounded-full bg-gray-200"
            style={{ width: `${92 - index * 14}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function repeatItems<T>(items: T[], count: number, offset: number) {
  if (items.length === 0) return []

  const output: T[] = []
  for (let i = 0; i < count; i += 1) {
    output.push(items[(offset + i) % items.length])
  }
  return output
}

const poolTokenLogoUrls: Record<string, string> = {
  AAVE: "https://coin-logos.simplr.sh/images/aave/standard.png",
  AERO: "https://coin-logos.simplr.sh/images/aerodrome-finance/standard.png",
  ARB: "https://coin-logos.simplr.sh/images/arbitrum/standard.png",
  COMP: "https://coin-logos.simplr.sh/images/compound-governance-token/standard.png",
  CRV: "https://coin-logos.simplr.sh/images/curve-dao-token/standard.png",
  DAI: "https://coin-logos.simplr.sh/images/dai/standard.png",
  ETH: "https://coin-logos.simplr.sh/images/ethereum/standard.png",
  FRAX: "https://coin-logos.simplr.sh/images/frax/standard.png",
  GRT: "https://coin-logos.simplr.sh/images/the-graph/standard.png",
  LDO: "https://coin-logos.simplr.sh/images/lido-dao/standard.png",
  LINK: "https://coin-logos.simplr.sh/images/chainlink/standard.png",
  MATIC: "https://coin-logos.simplr.sh/images/matic-network/standard.png",
  MKR: "https://coin-logos.simplr.sh/images/maker/standard.png",
  OP: "https://coin-logos.simplr.sh/images/optimism/standard.png",
  rETH: "https://coin-logos.simplr.sh/images/rocket-pool-eth/standard.png",
  RPL: "https://coin-logos.simplr.sh/images/rocket-pool/standard.png",
  SNX: "https://coin-logos.simplr.sh/images/synthetix-network-token/standard.png",
  stETH: "https://coin-logos.simplr.sh/images/staked-ether/standard.png",
  USDC: "https://coin-logos.simplr.sh/images/usd-coin/standard.png",
  USDT: "https://coin-logos.simplr.sh/images/tether/standard.png",
  UNI: "https://coin-logos.simplr.sh/images/uniswap/standard.png",
  WBTC: "https://coin-logos.simplr.sh/images/wrapped-bitcoin/standard.png",
  WETH: "https://coin-logos.simplr.sh/images/weth/standard.png",
  cbETH: "https://coin-logos.simplr.sh/images/coinbase-wrapped-staked-eth/standard.png",
  wstETH: "https://coin-logos.simplr.sh/images/wrapped-steth/standard.png",
}

function getPoolTokenLogo(symbol: string) {
  return poolTokenLogoUrls[symbol] ?? `https://coin-logos.simplr.sh/images/${symbol.toLowerCase()}/standard.png`
}

const DeferredTestimonialSection = dynamic(() => import("@/components/homepage/HomepageTestimonialSection"), {
  loading: () => <SectionSkeleton minHeight="360px" />,
})

const DeferredHomepageFaqSection = dynamic(() => import("@/components/homepage/HomepageFaqSection"), {
  loading: () => <SectionSkeleton lines={4} minHeight="420px" />,
})

/**
 * HeroSection - Homepage secondary content shell.
 *
 * Static sections render on the server while heavier interactive islands are
 * deferred until they approach the viewport.
 */
function PoolCard({ pool }: { pool: HomepagePool }) {
  return (
    <div className="flex h-[58px] flex-shrink-0 items-center gap-2.5 rounded-full border border-[#d8e1ef] bg-white px-3.5 shadow-[0_2px_10px_rgba(15,23,42,0.03)] transition duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
      <div className="relative flex items-center shrink-0">
        <TokenLogo src={getPoolTokenLogo(pool.token0.symbol)} className="z-10" />
        <TokenLogo src={getPoolTokenLogo(pool.token1.symbol)} className="-ml-2" />
      </div>
      <div className="min-w-0">
        <div className="flex items-baseline gap-1.5 whitespace-nowrap">
          <span className="text-[0.88rem] font-semibold tracking-[-0.02em] text-[#18323c]">
            {pool.token0.symbol} / {pool.token1.symbol}
          </span>
          <span className="text-[0.8rem] text-[#6b7280]">{pool.dex}</span>
        </div>
        <div className="mt-0.5 flex items-center gap-1.5">
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[#8a97a6]">TVL</span>
          <span className="text-[0.76rem] font-semibold text-[#18323c]">{pool.tvl}</span>
        </div>
      </div>
    </div>
  )
}

const lendingSavingsCards: {
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    title: "Supply single assets",
    description: "Deposit supported assets into markets used by LP-backed borrowers.",
    icon: Wallet,
  },
  {
    title: "Earn from demand",
    description: "Supplier yield moves with utilization, liquidity, and borrower demand.",
    icon: Percent,
  },
  {
    title: "Withdraw when liquid",
    description: "Redeem supplied assets when there is available liquidity in the market.",
    icon: RotateCcw,
  },
]

function LendingSavingsSection() {
  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.78fr)] lg:items-center">
        <div>
          <div className="flex max-w-[600px] flex-col gap-2">
            <SectionEyebrow tone="emerald">Lend Markets</SectionEyebrow>
            <SectionTitle>
              <span className="block lg:whitespace-nowrap">Earn yield from</span>
              <span className="block lg:whitespace-nowrap">LP borrower demand</span>
            </SectionTitle>
          </div>
        </div>

        <div className="text-left lg:text-right">
          <p className="text-[clamp(4.7rem,11vw,8.6rem)] font-bold leading-none tracking-[-0.08em] text-[#01AACF]">
            7.2%
          </p>
          <p className="mt-2 text-sm font-medium tracking-[-0.01em] text-[#6b7280] lg:text-right">
            Sandbox Rates
          </p>
        </div>
      </div>

      <div className="mt-10 grid w-full gap-4 md:mt-16 md:grid-cols-3">
        {lendingSavingsCards.map((card) => (
          <article
            key={card.title}
            className="flex min-h-[13rem] flex-col rounded-[24px] border border-gray-200 bg-white px-6 py-7 md:px-7 md:py-8"
          >
            <card.icon className="h-11 w-11 text-[#01AACF]" strokeWidth={1.5} />
            <FeatureCardTitle className="mt-5">{card.title}</FeatureCardTitle>
            <FeatureCardDescription className="mt-2 max-w-none">
              {card.description}
            </FeatureCardDescription>
          </article>
        ))}
      </div>
    </div>
  )
}

const lpUseCases: {
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    title: "Treasury financing",
    description:
      "Unlock cash against LP positions to fund runway without selling liquidity or giving up fee flow.",
    icon: Building2,
  },
  {
    title: "Grow exposure",
    description:
      "Borrow against existing positions, add liquidity, and expand fee exposure from the same capital base.",
    icon: Layers,
  },
  {
    title: "Trading liquidity",
    description:
      "Use LP-backed credit to rebalance inventory, hedge risk, or move quickly when a trade needs capital.",
    icon: ArrowLeftRight,
  },
  {
    title: "Cross-ecosystem credit",
    description:
      "Keep LP collateral in one venue and borrow for use across other protocols, strategies, or chains.",
    icon: Globe2,
  },
  {
    title: "Ops runway",
    description:
      "Cover payroll, vendors, and launches with LP credit without touching core positions or reserves.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Move on short notice",
    description:
      "Borrow when timing matters, then redeploy capital as opportunities open across the broader market.",
    icon: Zap,
  },
]

export default function HeroSection() {
  return (
    <section className="marketing-secondary-shell pb-0">
      <div className="site-content-shell site-section-gap">
        <PerformanceDiv className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-6">
          <div className="flex max-w-[600px] flex-col gap-2">
            <SectionEyebrow tone="cyan">Borrow Markets</SectionEyebrow>
            <SectionTitle>
              <span className="block lg:hidden">Access loans using</span>
              <span className="block lg:hidden">hundreds of LP collateral.</span>
              <span className="hidden lg:block lg:whitespace-nowrap">Access loans using hundreds of LP collateral.</span>
            </SectionTitle>
          </div>
            </div>

            <div className="w-full space-y-2 overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent_0%,black_11%,black_89%,transparent_100%)]">
              {[
                { items: repeatItems(homepagePools, 8, 0), motion: "animate-scroll-left", duration: "62s" },
                { items: repeatItems(homepagePools, 8, 6), motion: "animate-scroll-right", duration: "70s" },
                { items: repeatItems(homepagePools, 8, 12), motion: "animate-scroll-left-slow", duration: "78s" },
                { items: repeatItems(homepagePools, 8, 18), motion: "animate-scroll-right-slow", duration: "86s" },
              ].map((row, rowIndex) => (
                <div key={rowIndex} className="overflow-hidden">
                  <div
                    className={`flex w-max items-center gap-3 ${row.motion}`}
                    style={{ animationDuration: row.duration }}
                  >
                    {row.items.map((pool, index) => (
                      <PoolCard key={`row-${rowIndex}-${index}-a`} pool={pool} />
                    ))}
                    {row.items.map((pool, index) => (
                      <PoolCard key={`row-${rowIndex}-${index}-b`} pool={pool} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

        </PerformanceDiv>
      </div>

      <div className="site-content-shell site-section-gap">
        <div className="space-y-6">
          <LendingSavingsSection />
        </div>
      </div>

      <div className="site-content-shell site-section-gap flex flex-col site-section-stack">
        <PerformanceDiv>
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <SectionEyebrow tone="amber">Multiply Markets</SectionEyebrow>
                <SectionTitle>
                  <span className="block">Increase Your Yield with Built-In Risk Controls</span>
                </SectionTitle>
              </div>
            </div>
            <div className="relative mt-10 md:mt-16">
              <div className="overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="grid w-max grid-flow-col auto-cols-[19.75rem] gap-4 px-1 lg:auto-cols-[21.5rem] lg:gap-5">
                  {/* Card 01 — Maximize your capital */}
                  <article className="flex h-[31.25rem] w-full snap-start flex-col overflow-hidden feature-card rounded-[26px] p-5">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <FeatureCardTitle>Loop LP capital</FeatureCardTitle>
                        <FeatureCardDescription className="max-w-[16rem]">Supply LP collateral, borrow against it, resupply the borrowed capital, and repeat until your risk limit.</FeatureCardDescription>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">01</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                          <Image
                            src="/images/avana-tokens-rewards-v2.jpg"
                            alt="Avana token rewards"
                            fill
                            sizes="(min-width: 1024px) 344px, 316px"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Card 02 — Keep earning fees */}
                  <article className="flex h-[31.25rem] w-full snap-start flex-col overflow-hidden feature-card rounded-[26px] p-5">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <FeatureCardTitle>Keep the LP working</FeatureCardTitle>
                        <FeatureCardDescription className="max-w-[16rem]">Looped collateral stays in the market, so LP fees keep accruing while debt and exposure increase.</FeatureCardDescription>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">02</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(16,185,129,0.07),transparent_55%)]" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                            {/* APY vertical ticker */}
                            <div className="flex items-baseline gap-1">
                              <div className="h-[3.6rem] overflow-hidden">
                                <div className="ce-ticker-apy">
                                  {["+8.2", "+14.7", "+5.1", "+8.2"].map((v, i) => (
                                    <span key={i} className="block h-[3.6rem] text-[3.6rem] font-semibold leading-none tracking-[-0.05em] text-[#18323c]">{v}</span>
                                  ))}
                                </div>
                              </div>
                              <span className="text-xl font-normal text-gray-300">%</span>
                            </div>
                            <span className="mt-1 text-xs text-gray-400"><DeFiTerm term="apy">APY</DeFiTerm> earned while borrowed</span>
                            {/* Live fee chart */}
                            <div className="relative mt-5 h-[92px] w-full max-w-[16rem] overflow-hidden rounded-[18px] border border-emerald-100/70 bg-[linear-gradient(180deg,#f8fffb_0%,#effcf5_100%)]">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.14),transparent_62%)]" />
                              <div className="absolute inset-x-3 inset-y-0">
                                <div className="absolute left-0 right-0 top-[20%] border-t border-emerald-100/70" />
                                <div className="absolute left-0 right-0 top-1/2 border-t border-emerald-100/60" />
                                <div className="absolute left-0 right-0 top-[80%] border-t border-emerald-100/50" />
                              </div>
                              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 92" preserveAspectRatio="none">
                                <defs>
                                  <linearGradient id="ce-fee-grad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.24" />
                                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                  </linearGradient>
                                </defs>
                                <path
                                  d="M0,72 C18,70 36,64 56,56 C76,48 92,36 114,34 C136,32 150,48 170,52 C190,56 206,30 224,24 C242,18 262,30 282,16 C290,11 296,8 300,7 L300,92 L0,92Z"
                                  fill="url(#ce-fee-grad)"
                                />
                                <path
                                  d="M0,72 C18,70 36,64 56,56 C76,48 92,36 114,34 C136,32 150,48 170,52 C190,56 206,30 224,24 C242,18 262,30 282,16 C290,11 296,8 300,7"
                                  fill="none"
                                  stroke="#10b981"
                                  strokeWidth="2.75"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            {/* Fee tickers — glass card style */}
                            <div className="mt-3 flex w-full max-w-[16rem] gap-2">
                              <div className="flex-1 rounded-xl border border-emerald-100/60 bg-[linear-gradient(180deg,rgba(236,253,245,0.5),rgba(255,255,255,0.95))] px-3 py-2.5 text-center">
                                <span className="block text-[9px] font-medium text-gray-400">24h fees</span>
                                <div className="h-4 overflow-hidden">
                                  <div className="ce-ticker-fee1">
                                    {["+$48.20", "+$51.30", "+$49.80", "+$48.20"].map((v, i) => (
                                      <span key={i} className="block h-4 text-xs font-semibold text-emerald-600">{v}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 rounded-xl border border-emerald-100/60 bg-[linear-gradient(180deg,rgba(236,253,245,0.5),rgba(255,255,255,0.95))] px-3 py-2.5 text-center">
                                <span className="block text-[9px] font-medium text-gray-400">30d yield</span>
                                <div className="h-4 overflow-hidden">
                                  <div className="ce-ticker-fee2">
                                    {["+$1,420", "+$1,485", "+$1,510", "+$1,420"].map((v, i) => (
                                      <span key={i} className="block h-4 text-xs font-semibold text-emerald-600">{v}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Card 03 — Price-range aware oracles */}
                  <article className="flex h-[31.25rem] w-full snap-start flex-col overflow-hidden feature-card rounded-[26px] p-5">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <FeatureCardTitle>Monitor loop health</FeatureCardTitle>
                        <FeatureCardDescription className="max-w-[16rem]">Track collateral, borrowed debt, oracle bands, and liquidation buffer as each loop adds risk.</FeatureCardDescription>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">03</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(99,102,241,0.06),transparent_60%)]" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                            <div className="w-full max-w-[16rem]">
                              {/* Oracle band header */}
                              <div className="flex items-center justify-between">
                                <div className="h-3 overflow-hidden">
                                  <div className="ce-ticker-price1">
                                    {["$1,720", "$1,718", "$1,722", "$1,720"].map((v, i) => (
                                      <span key={i} className="block h-3 text-[10px] font-medium text-gray-400">{v}</span>
                                    ))}
                                  </div>
                                </div>
                                <span className="rounded-full border border-indigo-100 bg-indigo-50/80 px-2.5 py-0.5 text-[9px] font-semibold text-indigo-500">Oracle band</span>
                                <div className="h-3 overflow-hidden">
                                  <div className="ce-ticker-price2">
                                    {["$1,950", "$1,948", "$1,952", "$1,950"].map((v, i) => (
                                      <span key={i} className="block h-3 text-[10px] font-medium text-gray-400">{v}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              {/* Price-range chart */}
                              <div className="relative mt-3 h-[108px] w-full overflow-hidden rounded-[18px] border border-indigo-100/70 bg-[linear-gradient(180deg,#fafbff_0%,#eef2ff_100%)]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.14),transparent_60%)]" />
                                <div className="absolute inset-x-3 inset-y-0">
                                  <div className="absolute left-0 right-0 top-[20%] border-t border-indigo-100/70" />
                                  <div className="absolute left-0 right-0 top-1/2 border-t border-indigo-100/60" />
                                  <div className="absolute left-0 right-0 top-[80%] border-t border-indigo-100/50" />
                                </div>
                                <div className="absolute inset-y-4 left-[36%] right-[20%] bg-[radial-gradient(ellipse_at_center,rgba(129,140,248,0.14),rgba(129,140,248,0.05)_55%,rgba(129,140,248,0)_85%)]" />
                                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 108" preserveAspectRatio="none">
                                  <defs>
                                    <linearGradient id="ce-oracle-grad" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
                                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                                    </linearGradient>
                                  </defs>
                                  <path
                                    d="M0,76 C18,72 36,68 54,60 C72,52 92,40 114,34 C136,28 156,34 176,44 C196,54 216,52 236,46 C256,40 278,42 300,38 L300,108 L0,108Z"
                                    fill="url(#ce-oracle-grad)"
                                  />
                                  <path
                                    d="M0,76 C18,72 36,68 54,60 C72,52 92,40 114,34 C136,28 156,34 176,44 C196,54 216,52 236,46 C256,40 278,42 300,38"
                                    fill="none"
                                    stroke="#6366f1"
                                    strokeWidth="2.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              {/* Status pill */}
                              <div className="mt-2.5 flex items-center justify-center gap-1.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 ce-pulse-dot" />
                                <span className="text-[10px] font-medium text-gray-500">In range</span>
                              </div>
                              {/* Price value tickers — glass cards */}
                              <div className="mt-3 flex justify-center gap-1.5">
                                {[
                                  { l: "Lower", vals: ["$1,720", "$1,718", "$1,722", "$1,720"], cls: "ce-ticker-price1" },
                                  { l: "Current", vals: ["$1,847", "$1,852", "$1,844", "$1,847"], cls: "ce-ticker-price3" },
                                  { l: "Upper", vals: ["$1,950", "$1,948", "$1,952", "$1,950"], cls: "ce-ticker-price2" },
                                ].map((p) => (
                                  <div key={p.l} className="flex-1 rounded-xl border border-indigo-100/50 bg-[linear-gradient(180deg,rgba(238,242,255,0.4),rgba(255,255,255,0.95))] px-2 py-1.5 text-center">
                                    <span className="block text-[8px] font-medium uppercase tracking-[0.08em] text-gray-400">{p.l}</span>
                                    <div className="h-4 overflow-hidden">
                                      <div className={p.cls}>
                                        {p.vals.map((v, i) => (
                                          <span key={i} className="block h-4 text-xs font-semibold text-[#18323c]">{v}</span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Card 05 — LP-aware risk models */}
                  <article className="flex h-[31.25rem] w-full snap-start flex-col overflow-hidden feature-card rounded-[26px] p-5">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <FeatureCardTitle>Risk tuned to pools</FeatureCardTitle>
                        <FeatureCardDescription className="max-w-[16rem]">Continuous risk scoring tracks pool volatility and health quality.</FeatureCardDescription>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">05</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.05),transparent_55%)]" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                            <div className="w-full max-w-[16rem] overflow-hidden">
                              <div className="h-[194px] overflow-hidden">
                                <div className="ce-ticker-risk">
                                  {[
                                    {
                                      pair: "ETH / USDC",
                                      badge: "Low risk",
                                      badgeBg: "bg-emerald-50",
                                      badgeText: "text-emerald-700",
                                      badgeBorder: "border-emerald-100",
                                      metrics: [
                                        { label: "Pool depth", value: "Deep", level: 90, color: "#10b981" },
                                        { label: "Volatility", value: "Low", level: 25, color: "#6ee7b7" },
                                        { label: "Oracle quality", value: "98 / 100", level: 98, color: "#6366f1" },
                                      ],
                                    },
                                    {
                                      pair: "WBTC / ETH",
                                      badge: "Watch",
                                      badgeBg: "bg-amber-50",
                                      badgeText: "text-amber-700",
                                      badgeBorder: "border-amber-100",
                                      metrics: [
                                        { label: "Pool depth", value: "Medium", level: 60, color: "#f59e0b" },
                                        { label: "Volatility", value: "Med", level: 50, color: "#fb923c" },
                                        { label: "Oracle quality", value: "95 / 100", level: 95, color: "#6366f1" },
                                      ],
                                    },
                                    {
                                      pair: "ARB / USDC",
                                      badge: "Elevated",
                                      badgeBg: "bg-rose-50",
                                      badgeText: "text-rose-700",
                                      badgeBorder: "border-rose-100",
                                      metrics: [
                                        { label: "Pool depth", value: "Shallow", level: 35, color: "#f43f5e" },
                                        { label: "Volatility", value: "High", level: 78, color: "#ef4444" },
                                        { label: "Oracle quality", value: "88 / 100", level: 88, color: "#6366f1" },
                                      ],
                                    },
                                    {
                                      pair: "ETH / USDC",
                                      badge: "Low risk",
                                      badgeBg: "bg-emerald-50",
                                      badgeText: "text-emerald-700",
                                      badgeBorder: "border-emerald-100",
                                      metrics: [
                                        { label: "Pool depth", value: "Deep", level: 90, color: "#10b981" },
                                        { label: "Volatility", value: "Low", level: 25, color: "#6ee7b7" },
                                        { label: "Oracle quality", value: "98 / 100", level: 98, color: "#6366f1" },
                                      ],
                                    },
                                  ].map((item, i) => (
                                    <div key={i} className="flex h-[194px] items-center py-2">
                                      <div className="w-full rounded-[20px] border border-gray-100/80 bg-white px-4 py-3 shadow-[0_6px_18px_rgba(15,23,42,0.04)]">
                                        <div className="flex items-center justify-between">
                                          <span className="text-xs font-semibold text-[#18323c]">{item.pair}</span>
                                          <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${item.badgeBg} ${item.badgeText} ${item.badgeBorder}`}>
                                            {item.badge}
                                          </span>
                                        </div>
                                        <div className="mt-3 space-y-3">
                                          {item.metrics.map((metric) => (
                                            <div key={metric.label}>
                                              <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-medium text-gray-400">{metric.label}</span>
                                                <span className="text-[11px] font-semibold text-[#18323c]">{metric.value}</span>
                                              </div>
                                              <div className="mt-1.5 h-[5px] w-full overflow-hidden rounded-full bg-gray-100">
                                                <div className="h-full rounded-full transition-[width] duration-700" style={{ width: `${metric.level}%`, backgroundColor: metric.color }} />
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                        <div className="mt-3 flex items-center gap-2 text-[10px] font-medium text-emerald-600">
                                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                          Borrowing enabled
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                <style>{`
                  /* === Card 01: Maximize Capital — ring + ledger === */
                  .ce-ring-breathe {
                    box-shadow: 0 8px 18px rgba(15,23,42,0.04);
                    animation: ce-rb-scale 12s cubic-bezier(0.76, 0, 0.24, 1) infinite;
                  }
                  .ce-ring-breathe::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    border-radius: inherit;
                    box-shadow: 0 12px 22px rgba(15,23,42,0.06);
                    opacity: 0;
                    animation: ce-rb-shadow 12s cubic-bezier(0.76, 0, 0.24, 1) infinite;
                  }
                  @keyframes ce-rb-scale {
                    0%, 22%, 28%, 50%, 56%, 78%, 84%, 100% { transform: scale(1); }
                    24%, 26%, 52%, 54%, 80%, 82% { transform: scale(1.015); }
                  }
                  @keyframes ce-rb-shadow {
                    0%, 22%, 28%, 50%, 56%, 78%, 84%, 100% { opacity: 0; }
                    24%, 26%, 52%, 54%, 80%, 82% { opacity: 1; }
                  }

                  .ce-ticker-ltv {
                    animation: ce-tv 12s cubic-bezier(0.76, 0, 0.24, 1) infinite;
                  }
                  .ce-ltv-arc {
                    animation: ce-la 12s cubic-bezier(0.76, 0, 0.24, 1) infinite;
                  }
                  .ce-ticker-v {
                    animation: ce-tv 12s cubic-bezier(0.76, 0, 0.24, 1) infinite;
                  }
                  @keyframes ce-la {
                    0%, 22% { stroke-dashoffset: 52.78; }
                    28%, 50% { stroke-dashoffset: 65.97; }
                    56%, 78% { stroke-dashoffset: 92.36; }
                    84%, 100% { stroke-dashoffset: 52.78; }
                  }
                  @keyframes ce-tv {
                    0%, 22% { transform: translateY(0); }
                    28%, 50% { transform: translateY(-25%); }
                    56%, 78% { transform: translateY(-50%); }
                    84%, 100% { transform: translateY(-75%); }
                  }

                  /* === Card 02: Keep Earning — APY reel + chart + fee tickers === */
                  .ce-ticker-apy {
                    animation: ce-ta 11s cubic-bezier(0.76, 0, 0.24, 1) infinite;
                  }
                  @keyframes ce-ta {
                    0%, 22% { transform: translateY(0); }
                    28%, 50% { transform: translateY(-25%); }
                    56%, 78% { transform: translateY(-50%); }
                    84%, 100% { transform: translateY(-75%); }
                  }

                  .ce-ticker-fee1 {
                    animation: ce-tf1 9s cubic-bezier(0.76, 0, 0.24, 1) infinite;
                  }
                  @keyframes ce-tf1 {
                    0%, 22% { transform: translateY(0); }
                    28%, 50% { transform: translateY(-25%); }
                    56%, 78% { transform: translateY(-50%); }
                    84%, 100% { transform: translateY(-75%); }
                  }

                  .ce-ticker-fee2 {
                    animation: ce-tf2 10s cubic-bezier(0.76, 0, 0.24, 1) infinite;
                    animation-delay: 1.2s;
                  }
                  @keyframes ce-tf2 {
                    0%, 22% { transform: translateY(0); }
                    28%, 50% { transform: translateY(-25%); }
                    56%, 78% { transform: translateY(-50%); }
                    84%, 100% { transform: translateY(-75%); }
                  }

                  /* === Card 03: Oracle band — chart + price tickers + dot === */
                  .ce-pulse-dot {
                    animation: ce-pd 3s ease-in-out infinite;
                  }
                  @keyframes ce-pd {
                    0%, 100% { opacity: 0.7; transform: scale(1); }
                    50% { opacity: 0; transform: scale(2.2); }
                  }

                  .ce-ticker-price1 {
                    animation: ce-tp1 8s cubic-bezier(0.76, 0, 0.24, 1) infinite;
                  }
                  .ce-ticker-price2 {
                    animation: ce-tp2 7s cubic-bezier(0.76, 0, 0.24, 1) infinite;
                    animation-delay: 0.8s;
                  }
                  .ce-ticker-price3 {
                    animation: ce-tp3 9s cubic-bezier(0.76, 0, 0.24, 1) infinite;
                    animation-delay: 1.6s;
                  }
                  @keyframes ce-tp1 {
                    0%, 22% { transform: translateY(0); }
                    28%, 50% { transform: translateY(-25%); }
                    56%, 78% { transform: translateY(-50%); }
                    84%, 100% { transform: translateY(-75%); }
                  }
                  @keyframes ce-tp2 {
                    0%, 22% { transform: translateY(0); }
                    28%, 50% { transform: translateY(-25%); }
                    56%, 78% { transform: translateY(-50%); }
                    84%, 100% { transform: translateY(-75%); }
                  }
                  @keyframes ce-tp3 {
                    0%, 22% { transform: translateY(0); }
                    28%, 50% { transform: translateY(-25%); }
                    56%, 78% { transform: translateY(-50%); }
                    84%, 100% { transform: translateY(-75%); }
                  }

                  /* === Card 05: Risk models — ticker === */
                  .ce-ticker-risk {
                    animation: ce-tr 16s cubic-bezier(0.76, 0, 0.24, 1) infinite;
                  }
                  @keyframes ce-tr {
                    0%, 22% { transform: translateY(0); }
                    28%, 50% { transform: translateY(-25%); }
                    56%, 78% { transform: translateY(-50%); }
                    84%, 100% { transform: translateY(-75%); }
                  }

                  /* === Reduced motion === */
                  @media (prefers-reduced-motion: reduce) {
                    .ce-ring-breathe,
                    .ce-ring-breathe::after,
                    .ce-ticker-ltv,
                    .ce-ltv-arc,
                    .ce-ticker-v,
                    .ce-ticker-apy,
                    .ce-ticker-fee1,
                    .ce-ticker-fee2,
                    .ce-escalator,
                    .ce-pulse-dot,
                    .ce-ticker-price1,
                    .ce-ticker-price2,
                    .ce-ticker-price3,
                    .ce-ticker-risk {
                      animation: none !important;
                    }
                  }
                `}</style>
              </div>
            </div>

        </PerformanceDiv>


      <div>
        <div className="max-w-[58rem] space-y-3 text-left sm:space-y-4">
          <SectionEyebrow tone="rose">Who it&apos;s for</SectionEyebrow>
          <SectionTitle className="max-w-[18ch] sm:max-w-[22ch] lg:max-w-none">
            <span className="block sm:inline">Ways teams put</span>{" "}
            <span className="block sm:inline">LP credit to work</span>
          </SectionTitle>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 md:mt-16 md:gap-x-16 md:gap-y-14 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-20">
          {lpUseCases.map((item) => {
            const Icon = item.icon

            return (
              <article key={item.title} className="flex flex-col bg-transparent">
                <Icon className="h-10 w-10 text-[#01AACF] sm:h-11 sm:w-11" strokeWidth={1.5} aria-hidden="true" />
                <FeatureCardTitle className="mt-4 sm:mt-5">{item.title}</FeatureCardTitle>
                <FeatureCardDescription className="mt-2 max-w-[22rem]">
                  {item.description}
                </FeatureCardDescription>
              </article>
            )
          })}
        </div>
      </div>

        <LazySection minHeight="400px" fallback={<SectionSkeleton minHeight="360px" />}>
          <DeferredTestimonialSection />
        </LazySection>

        <LazySection minHeight="660px" fallback={<SectionSkeleton minHeight="660px" />}>
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,29rem)_minmax(0,1fr)] md:gap-10 lg:gap-12 xl:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]">
            <div className="space-y-4">
              <SectionEyebrow tone="slate">Engineered for resilience</SectionEyebrow>
              <SectionTitle>
                <span className="block lg:whitespace-nowrap">
                  Backed by{" "}
                  <span className="inline-flex translate-y-[-0.08em] items-center rounded-full border border-[#01AACF]/25 bg-[#01AACF]/8 px-[0.28em] py-[0.03em] text-[#01AACF]">
                    $A
                  </span>
                  ,
                </span>
                <span className="block lg:whitespace-nowrap">Powered by Aave v4.</span>
              </SectionTitle>
            </div>
            <div className="text-left text-[#39515b]">
              <p className="max-w-[42rem] text-[1.08rem] leading-[1.6] tracking-[-0.02em] lg:text-[1.18rem]">
                Aave v4 is a next generation lending system built on{" "}
                <DeFiTerm term="hub" className="text-[0.92em]">
                  Hub
                </DeFiTerm>{" "}
                and{" "}
                <DeFiTerm term="spoke" className="text-[0.92em]">
                  Spoke
                </DeFiTerm>{" "}
                architecture, giving the protocol shared liquidity, flexible risk controls, and a stronger
                security model. Avana builds on that foundation to deliver secure{" "}
                <DeFiTerm term="lp-position" className="text-[0.92em]">
                  LP backed borrowing
                </DeFiTerm>{" "}
                with transparent onchain execution, resilient{" "}
                <DeFiTerm term="oracle" className="text-[0.92em]">
                  oracle
                </DeFiTerm>{" "}
                checks, and borrower protection shaped around controlled{" "}
                <DeFiTerm term="liquidation" className="text-[0.92em]">
                  liquidation
                </DeFiTerm>{" "}
                design.
              </p>
            </div>
          </div>

          <article className="relative mx-auto mt-12 h-[260px] w-full max-w-[86rem] overflow-hidden sm:h-[340px] md:mt-16 md:h-[400px] lg:h-[500px]">
            <Image
              src="/images/avana-token-icons-v1.jpg"
              alt="Avana token icons"
              fill
              className="scale-[1.04] object-contain object-[center_42%]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 86rem"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_68%,rgba(255,255,255,0.28)_86%,#fff_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-white" />
          </article>
        </LazySection>

        <LazySection minHeight="520px" fallback={<SectionSkeleton minHeight="520px" />}>
          <div className="-mt-8 md:-mt-12">
            <HomepageNewsroomSection eyebrowTone="rose" />
          </div>
        </LazySection>

        <LazySection minHeight="480px" fallback={<SectionSkeleton minHeight="480px" />}>
          <div className="pb-16 md:pb-24 2xl:pb-22">
            <DeferredHomepageFaqSection />
          </div>
        </LazySection>
      </div>
    </section>
  )
}
