import dynamic from "next/dynamic"
import { DeFiTerm } from "@/components/defi-term"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { homepagePools, type HomepagePool } from "@/data/homepage"
import { LazySection } from "@/components/ui/lazy-section"

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
      className="rounded-[28px] border border-gray-200 bg-gray-50 p-6"
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
    <div className="flex-shrink-0 box-border flex flex-row items-center justify-center gap-3 no-underline bg-white hover:bg-gray-50 rounded-lg border border-solid border-gray-200 h-[66px] shadow-sm hover:shadow-md transition duration-150 ease-out px-3 py-2.5">
      <div className="flex flex-col items-start justify-center gap-0.5">
        <div className="flex flex-row items-center gap-1.5">
          <div className="relative flex items-center flex-shrink-0">
            <div
              className="w-6 h-6 rounded-full border-2 border-white z-10"
              style={{ backgroundColor: pool.token0.color }}
            />
            <div
              className="w-6 h-6 rounded-full border-2 border-white -ml-2"
              style={{ backgroundColor: pool.token1.color }}
            />
          </div>
          <span className="whitespace-nowrap">
            <span className="mr-1 text-gray-900 text-sm font-medium">{pool.token0.symbol} / {pool.token1.symbol}</span>
            <span className="text-gray-500 text-sm">{pool.dex}</span>
          </span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <span className="text-gray-600 text-sm">TVL</span>
          <span className="text-gray-900 text-sm font-medium">{pool.tvl}</span>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="marketing-secondary-shell pb-0">
      <div className="site-content-shell space-y-32 pt-16 md:space-y-40 md:pt-20">
        <div className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <SectionEyebrow tone="cyan">Pool Coverage</SectionEyebrow>
                <SectionTitle>500+ Supported Pools</SectionTitle>
              </div>
            </div>

            <div className="w-full flex flex-col gap-4 overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
              <div className="flex overflow-hidden">
                <div className="flex gap-4 animate-scroll-left">
                  {homepagePools.slice(0, 6).map((pool, index) => (
                    <PoolCard key={`r1-a-${index}`} pool={pool} />
                  ))}
                  {homepagePools.slice(0, 6).map((pool, index) => (
                    <PoolCard key={`r1-b-${index}`} pool={pool} />
                  ))}
                </div>
              </div>
              <div className="flex overflow-hidden">
                <div className="flex gap-4 animate-scroll-right">
                  {homepagePools.slice(6, 12).map((pool, index) => (
                    <PoolCard key={`r2-a-${index}`} pool={pool} />
                  ))}
                  {homepagePools.slice(6, 12).map((pool, index) => (
                    <PoolCard key={`r2-b-${index}`} pool={pool} />
                  ))}
                </div>
              </div>
              <div className="flex overflow-hidden">
                <div className="flex gap-4 animate-scroll-left-slow">
                  {homepagePools.slice(12, 18).map((pool, index) => (
                    <PoolCard key={`r3-a-${index}`} pool={pool} />
                  ))}
                  {homepagePools.slice(12, 18).map((pool, index) => (
                    <PoolCard key={`r3-b-${index}`} pool={pool} />
                  ))}
                </div>
              </div>
              <div className="flex overflow-hidden">
                <div className="flex gap-4 animate-scroll-right-slow">
                  {homepagePools.slice(18, 24).map((pool, index) => (
                    <PoolCard key={`r4-a-${index}`} pool={pool} />
                  ))}
                  {homepagePools.slice(18, 24).map((pool, index) => (
                    <PoolCard key={`r4-b-${index}`} pool={pool} />
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="site-content-shell pt-32 md:pt-40">
        <div className="flex flex-col gap-6">
          <div className="flex max-w-[600px] flex-col gap-2">
            <SectionEyebrow tone="violet">How it works</SectionEyebrow>
            <SectionTitle>
              How borrowing works
            </SectionTitle>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-16">
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <span className="text-5xl md:text-6xl font-bold text-gray-300">1</span>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">
              Deposit your LP position
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Deposit your <DeFiTerm term="lp-tokens">LP tokens</DeFiTerm> from any supported <DeFiTerm term="dex">DEX</DeFiTerm>. Your position stays active and continues earning trading fees.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <span className="text-5xl md:text-6xl font-bold text-gray-300">2</span>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">
              Receive your loan instantly
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              USDC will be deposited into your wallet. Borrow up to 80% of your LP value based on pool risk parameters.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <span className="text-5xl md:text-6xl font-bold text-gray-300">3</span>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">
              Repay on your timeline
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              There are no repayment schedules or deadlines. Your <DeFiTerm term="ltv">loan-to-value ratio</DeFiTerm> must remain under the <DeFiTerm term="liquidation-threshold">liquidation threshold</DeFiTerm> to avoid automatic <DeFiTerm term="liquidation">liquidation</DeFiTerm>.
            </p>
          </div>
        </div>
      </div>

      <div className="site-content-shell space-y-32 pt-32 md:space-y-40 md:pt-40">
        <div>
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <SectionEyebrow tone="amber">Capital Efficiency</SectionEyebrow>
                <SectionTitle>
                  Get more out of your LPs
                </SectionTitle>
              </div>
            </div>
            <div className="relative mt-10 md:mt-16">
              <div className="overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="grid w-max grid-flow-col auto-cols-[19.75rem] gap-4 px-1 lg:auto-cols-[21.5rem] lg:gap-5">
                  {/* Card 01 — Maximize your capital */}
                  <article className="flex h-[31.25rem] w-full snap-start flex-col overflow-hidden rounded-[26px] bg-gray-50 p-5">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="max-w-[14rem]" style={{ fontSize: '1.45rem', fontWeight: 500, lineHeight: 1.08, letterSpacing: '-0.045em', color: '#18323c' }}>Maximize your capital</h3>
                        <p className="max-w-[16rem] text-sm leading-6 text-gray-600">Borrow up to 80% of your LP value.</p>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">01</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.05),transparent_60%)]" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            {/* Breathing ring */}
                            <div className="relative h-[140px] w-[140px] ce-ring-breathe">
                              <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="42" fill="none" stroke="#f3f4f6" strokeWidth="5" />
                                <circle cx="50" cy="50" r="42" fill="none" stroke="#6366f1" strokeWidth="5" strokeLinecap="round" strokeDasharray="263.89" strokeDashoffset="52.78" />
                              </svg>
                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-[2.8rem] font-semibold leading-none tracking-[-0.05em] text-[#18323c]">80<span className="text-base font-normal text-gray-300">%</span></span>
                                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-gray-400">LTV</span>
                              </div>
                            </div>
                            {/* Vertical LP valuation ticker */}
                            <div className="mt-5 w-full max-w-[15rem] overflow-hidden rounded-xl border border-gray-100 bg-gray-50/80">
                              <div className="h-[52px] overflow-hidden">
                                <div className="ce-ticker-v">
                                  {[
                                    { pair: "ETH / USDC", value: "$24,800", borrowable: "$19,840" },
                                    { pair: "WBTC / ETH", value: "$41,200", borrowable: "$32,960" },
                                    { pair: "ARB / USDC", value: "$8,600", borrowable: "$6,880" },
                                    { pair: "ETH / USDC", value: "$24,800", borrowable: "$19,840" },
                                  ].map((item, i) => (
                                    <div key={i} className="h-[52px] px-4 py-2">
                                      <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-medium text-gray-400">{item.pair}</span>
                                        <span className="text-xs font-semibold text-[#18323c]">{item.value}</span>
                                      </div>
                                      <div className="mt-1 flex items-center justify-between">
                                        <span className="text-[10px] font-medium text-gray-400">Borrowable</span>
                                        <span className="text-xs font-semibold text-indigo-600">{item.borrowable}</span>
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

                  {/* Card 02 — Keep earning fees */}
                  <article className="flex h-[31.25rem] w-full snap-start flex-col overflow-hidden rounded-[26px] bg-gray-50 p-5">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="max-w-[14rem]" style={{ fontSize: '1.45rem', fontWeight: 500, lineHeight: 1.08, letterSpacing: '-0.045em', color: '#18323c' }}>Keep earning fees</h3>
                        <p className="max-w-[16rem] text-sm leading-6 text-gray-600">Your LP stays active while you borrow.</p>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">02</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(16,185,129,0.05),transparent_55%)]" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                            {/* APY vertical ticker */}
                            <div className="flex items-baseline gap-1">
                              <div className="h-[3.6rem] overflow-hidden">
                                <div className="ce-ticker-apy">
                                  {["+12.4", "+12.5", "+12.6", "+12.4"].map((v, i) => (
                                    <span key={i} className="block h-[3.6rem] text-[3.6rem] font-semibold leading-none tracking-[-0.05em] text-[#18323c]">{v}</span>
                                  ))}
                                </div>
                              </div>
                              <span className="text-xl font-normal text-gray-300">%</span>
                            </div>
                            <span className="mt-1 text-xs text-gray-400"><DeFiTerm term="apy">APY</DeFiTerm> earned while borrowed</span>
                            {/* Continuously scrolling area chart */}
                            <div className="mt-5 w-full max-w-[16rem] overflow-hidden">
                              <div className="flex w-[200%] ce-chart-scroll">
                                <svg className="h-[60px] w-1/2 shrink-0" viewBox="0 0 300 60" preserveAspectRatio="none">
                                  <defs>
                                    <linearGradient id="fee-fill" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                    </linearGradient>
                                  </defs>
                                  <path d="M0,48 C25,46 50,42 80,38 S130,28 170,24 S220,20 260,16 L300,12 L300,60 L0,60Z" fill="url(#fee-fill)" />
                                  <path d="M0,48 C25,46 50,42 80,38 S130,28 170,24 S220,20 260,16 L300,12" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <svg className="h-[60px] w-1/2 shrink-0" viewBox="0 0 300 60" preserveAspectRatio="none">
                                  <path d="M0,48 C25,46 50,42 80,38 S130,28 170,24 S220,20 260,16 L300,12 L300,60 L0,60Z" fill="url(#fee-fill)" />
                                  <path d="M0,48 C25,46 50,42 80,38 S130,28 170,24 S220,20 260,16 L300,12" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                              </div>
                            </div>
                            {/* Fee tickers */}
                            <div className="mt-3 flex w-full max-w-[16rem] gap-2">
                              <div className="flex-1 rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-2 text-center">
                                <span className="block text-[9px] font-medium text-gray-400">24h fees</span>
                                <div className="h-4 overflow-hidden">
                                  <div className="ce-ticker-fee1">
                                    {["+$48.20", "+$51.30", "+$49.80", "+$48.20"].map((v, i) => (
                                      <span key={i} className="block h-4 text-xs font-semibold text-emerald-600">{v}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-2 text-center">
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

                  {/* Card 03 — Unlock new strategies */}
                  <article className="flex h-[31.25rem] w-full snap-start flex-col overflow-hidden rounded-[26px] bg-gray-50 p-5">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="max-w-[14rem]" style={{ fontSize: '1.45rem', fontWeight: 500, lineHeight: 1.08, letterSpacing: '-0.045em', color: '#18323c' }}>Unlock new strategies</h3>
                        <p className="max-w-[16rem] text-sm leading-6 text-gray-600">Use borrowed funds however you want.</p>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">03</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                          <div className="absolute inset-0 flex items-center justify-center px-5">
                            {/* Escalator: 12 items (6 unique duplicated), scrolling up infinitely */}
                            <div className="w-full max-w-[16rem] h-[15rem] overflow-hidden">
                              <div className="ce-escalator flex flex-col gap-2">
                                {[
                                  { label: "Leverage trading", icon: "\u2197" },
                                  { label: "Yield farming", icon: "\u25CE" },
                                  { label: "Pay off debt", icon: "\u21A9" },
                                  { label: "Open new positions", icon: "\uFF0B" },
                                  { label: "Hedge exposure", icon: "\u21C5" },
                                  { label: "Liquidity mining", icon: "\u25C7" },
                                  { label: "Leverage trading", icon: "\u2197" },
                                  { label: "Yield farming", icon: "\u25CE" },
                                  { label: "Pay off debt", icon: "\u21A9" },
                                  { label: "Open new positions", icon: "\uFF0B" },
                                  { label: "Hedge exposure", icon: "\u21C5" },
                                  { label: "Liquidity mining", icon: "\u25C7" },
                                ].map((item, i) => (
                                  <div
                                    key={i}
                                    className={`flex items-center gap-3 rounded-[14px] px-4 py-3 ${
                                      i % 6 === 1
                                        ? "border border-[#18323c]/10 bg-[#18323c] text-white shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
                                        : "border border-gray-100 bg-gray-50 text-gray-600"
                                    }`}
                                  >
                                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs ${i % 6 === 1 ? "bg-white/15 text-white" : "bg-white text-gray-400"}`}>
                                      {item.icon}
                                    </div>
                                    <span className="text-[0.82rem] font-medium">{item.label}</span>
                                    {i % 6 === 1 && <span className="ml-auto text-[10px] font-medium text-white/50">Active</span>}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Card 04 — Price-range aware oracles */}
                  <article className="flex h-[31.25rem] w-full snap-start flex-col overflow-hidden rounded-[26px] bg-gray-50 p-5">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="max-w-[14rem]" style={{ fontSize: '1.45rem', fontWeight: 500, lineHeight: 1.08, letterSpacing: '-0.045em', color: '#18323c' }}>Price-range aware oracles</h3>
                        <p className="max-w-[16rem] text-sm leading-6 text-gray-600">Valuation tracks your LP&apos;s active tick range.</p>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">04</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.04),transparent_60%)]" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                            <div className="w-full max-w-[16rem]">
                              {/* Oracle band header with price tickers */}
                              <div className="flex items-center justify-between">
                                <div className="h-3 overflow-hidden">
                                  <div className="ce-ticker-price1">
                                    {["$1,720", "$1,718", "$1,722", "$1,720"].map((v, i) => (
                                      <span key={i} className="block h-3 text-[10px] font-medium text-gray-400">{v}</span>
                                    ))}
                                  </div>
                                </div>
                                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[9px] font-semibold text-indigo-500">Oracle band</span>
                                <div className="h-3 overflow-hidden">
                                  <div className="ce-ticker-price2">
                                    {["$1,950", "$1,948", "$1,952", "$1,950"].map((v, i) => (
                                      <span key={i} className="block h-3 text-[10px] font-medium text-gray-400">{v}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              {/* Continuously scrolling chart */}
                              <div className="relative mt-2 h-[90px] w-full overflow-hidden rounded-xl bg-gray-50">
                                <div className="absolute inset-x-[12%] inset-y-0 rounded-lg bg-indigo-50/80" />
                                <div className="absolute inset-0 flex w-[200%] ce-chart-scroll-slow">
                                  <svg className="h-full w-1/2 shrink-0" viewBox="0 0 300 90" preserveAspectRatio="none">
                                    <defs>
                                      <linearGradient id="oracle-fill" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.08" />
                                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                                      </linearGradient>
                                    </defs>
                                    <path d="M0,72 C30,68 60,62 90,50 S150,22 180,28 S240,44 270,36 L300,30 L300,90 L0,90Z" fill="url(#oracle-fill)" />
                                    <path d="M0,72 C30,68 60,62 90,50 S150,22 180,28 S240,44 270,36 L300,30" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                                  </svg>
                                  <svg className="h-full w-1/2 shrink-0" viewBox="0 0 300 90" preserveAspectRatio="none">
                                    <path d="M0,72 C30,68 60,62 90,50 S150,22 180,28 S240,44 270,36 L300,30 L300,90 L0,90Z" fill="url(#oracle-fill)" />
                                    <path d="M0,72 C30,68 60,62 90,50 S150,22 180,28 S240,44 270,36 L300,30" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                                  </svg>
                                </div>
                                {/* Pulsing dot */}
                                <div className="absolute left-[58%] top-[28%]">
                                  <div className="h-3 w-3 rounded-full border-2 border-white bg-indigo-500 shadow-sm" />
                                  <div className="absolute inset-0 h-3 w-3 rounded-full bg-indigo-400 ce-pulse-dot" />
                                </div>
                              </div>
                              {/* Status */}
                              <div className="mt-2.5 flex items-center justify-center gap-1.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 ce-pulse-dot" /><span className="text-[10px] font-medium text-gray-500">In range</span>
                              </div>
                              {/* Price value tickers */}
                              <div className="mt-3 flex justify-center gap-1.5">
                                {[
                                  { l: "Lower", vals: ["$1,720", "$1,718", "$1,722", "$1,720"], cls: "ce-ticker-price1" },
                                  { l: "Current", vals: ["$1,847", "$1,852", "$1,844", "$1,847"], cls: "ce-ticker-price3" },
                                  { l: "Upper", vals: ["$1,950", "$1,948", "$1,952", "$1,950"], cls: "ce-ticker-price2" },
                                ].map((p) => (
                                  <div key={p.l} className="flex-1 rounded-lg border border-gray-100 bg-gray-50/80 px-2 py-1.5 text-center">
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
                  <article className="flex h-[31.25rem] w-full snap-start flex-col overflow-hidden rounded-[26px] bg-gray-50 p-5">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="max-w-[14rem]" style={{ fontSize: '1.45rem', fontWeight: 500, lineHeight: 1.08, letterSpacing: '-0.045em', color: '#18323c' }}>LP-aware risk models</h3>
                        <p className="max-w-[16rem] text-sm leading-6 text-gray-600">Track pool composition, volatility, and oracle quality.</p>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">05</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                          <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                            {/* Vertical risk assessment ticker */}
                            <div className="w-full max-w-[16rem] overflow-hidden">
                              <div className="h-[180px] overflow-hidden">
                                <div className="ce-ticker-risk">
                                  {[
                                    { pair: "ETH / USDC", depth: "Deep", depthColor: "bg-emerald-400", depthLevel: 90, vol: "Low", volColor: "bg-amber-400", volLevel: 25, oracle: "98", oracleColor: "bg-[#18323c]", oracleLevel: 98 },
                                    { pair: "WBTC / ETH", depth: "Medium", depthColor: "bg-amber-400", depthLevel: 60, vol: "Med", volColor: "bg-orange-400", volLevel: 50, oracle: "95", oracleColor: "bg-[#18323c]", oracleLevel: 95 },
                                    { pair: "ARB / USDC", depth: "Shallow", depthColor: "bg-red-400", depthLevel: 35, vol: "High", volColor: "bg-red-400", volLevel: 78, oracle: "88", oracleColor: "bg-[#18323c]", oracleLevel: 88 },
                                    { pair: "ETH / USDC", depth: "Deep", depthColor: "bg-emerald-400", depthLevel: 90, vol: "Low", volColor: "bg-amber-400", volLevel: 25, oracle: "98", oracleColor: "bg-[#18323c]", oracleLevel: 98 },
                                  ].map((item, i) => (
                                    <div key={i} className="h-[180px] space-y-2">
                                      <div className="mb-2 text-center">
                                        <span className="text-xs font-semibold text-[#18323c]">{item.pair}</span>
                                      </div>
                                      {[
                                        { label: "Pool depth", value: item.depth, level: item.depthLevel, color: item.depthColor },
                                        { label: "Volatility", value: item.vol, level: item.volLevel, color: item.volColor },
                                        { label: "Oracle quality", value: `${item.oracle}/100`, level: item.oracleLevel, color: item.oracleColor },
                                      ].map((metric) => (
                                        <div key={metric.label} className="rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-2">
                                          <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-medium text-gray-400">{metric.label}</span>
                                            <span className="text-xs font-semibold text-[#18323c]">{metric.value}</span>
                                          </div>
                                          <div className="mt-1.5 h-[5px] w-full overflow-hidden rounded-full bg-gray-100">
                                            <div className={`h-full rounded-full ${metric.color}`} style={{ width: `${metric.level}%` }} />
                                          </div>
                                        </div>
                                      ))}
                                      {/* Score badge */}
                                      <div className="mt-2 flex items-center justify-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-3 py-1">
                                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500">
                                          <svg width="8" height="8" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                        <span className="text-[11px] font-semibold text-emerald-700">Eligible for borrowing</span>
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
                  .ce-ring-breathe { animation: ce-rb 3s ease-in-out infinite; }
                  @keyframes ce-rb { 0%,100% { opacity:1; } 50% { opacity:0.7; } }

                  .ce-ticker-v { animation: ce-tv 9s ease-in-out infinite; }
                  @keyframes ce-tv { 0%,28% { transform:translateY(0); } 33%,61% { transform:translateY(-25%); } 66%,94% { transform:translateY(-50%); } 100% { transform:translateY(-75%); } }

                  .ce-ticker-apy { animation: ce-ta 8s ease-in-out infinite; }
                  @keyframes ce-ta { 0%,28% { transform:translateY(0); } 33%,61% { transform:translateY(-25%); } 66%,94% { transform:translateY(-50%); } 100% { transform:translateY(-75%); } }

                  .ce-ticker-fee1 { animation: ce-tf1 6s ease-in-out infinite; }
                  @keyframes ce-tf1 { 0%,28% { transform:translateY(0); } 33%,61% { transform:translateY(-25%); } 66%,94% { transform:translateY(-50%); } 100% { transform:translateY(-75%); } }

                  .ce-ticker-fee2 { animation: ce-tf2 7s ease-in-out infinite; }
                  @keyframes ce-tf2 { 0%,28% { transform:translateY(0); } 33%,61% { transform:translateY(-25%); } 66%,94% { transform:translateY(-50%); } 100% { transform:translateY(-75%); } }

                  .ce-chart-scroll { animation: ce-cs 12s linear infinite; }
                  @keyframes ce-cs { from { transform:translateX(0); } to { transform:translateX(-50%); } }

                  .ce-chart-scroll-slow { animation: ce-css 20s linear infinite; }
                  @keyframes ce-css { from { transform:translateX(0); } to { transform:translateX(-50%); } }

                  .ce-escalator { animation: ce-esc 16s linear infinite; }
                  @keyframes ce-esc { from { transform:translateY(0); } to { transform:translateY(-50%); } }

                  .ce-pulse-dot { animation: ce-pd 2s ease-in-out infinite; }
                  @keyframes ce-pd { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(1.8); } }

                  .ce-ticker-risk { animation: ce-tr 12s ease-in-out infinite; }
                  @keyframes ce-tr { 0%,28% { transform:translateY(0); } 33%,61% { transform:translateY(-25%); } 66%,94% { transform:translateY(-50%); } 100% { transform:translateY(-75%); } }

                  .ce-ticker-price1 { animation: ce-tp1 5s ease-in-out infinite; }
                  .ce-ticker-price2 { animation: ce-tp2 4s ease-in-out infinite; }
                  .ce-ticker-price3 { animation: ce-tp3 6s ease-in-out infinite; }
                  @keyframes ce-tp1 { 0%,28% { transform:translateY(0); } 33%,61% { transform:translateY(-25%); } 66%,94% { transform:translateY(-50%); } 100% { transform:translateY(-75%); } }
                  @keyframes ce-tp2 { 0%,28% { transform:translateY(0); } 33%,61% { transform:translateY(-25%); } 66%,94% { transform:translateY(-50%); } 100% { transform:translateY(-75%); } }
                  @keyframes ce-tp3 { 0%,28% { transform:translateY(0); } 33%,61% { transform:translateY(-25%); } 66%,94% { transform:translateY(-50%); } 100% { transform:translateY(-75%); } }
                `}</style>
              </div>
            </div>

        </div>


        <LazySection minHeight="400px" fallback={<SectionSkeleton minHeight="360px" />}>
          <DeferredTestimonialSection />
        </LazySection>

        <LazySection minHeight="660px" fallback={<SectionSkeleton minHeight="660px" />}>
          <div>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,29rem)_minmax(0,1fr)] md:gap-10 lg:gap-12 xl:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]">
                <div className="space-y-4">
                  <SectionEyebrow tone="slate">Security Protection</SectionEyebrow>
                  <SectionTitle>
                    <span className="block lg:whitespace-nowrap">Aave v4</span>
                    <span className="block lg:whitespace-nowrap">Design Foundation</span>
                  </SectionTitle>
                </div>
                <div className="text-left text-[#39515b]">
                  <p className="max-w-[42rem] text-[1.08rem] leading-[1.6] tracking-[-0.02em] lg:text-[1.18rem]">
                    Aave v4 is a next generation lending system built on{" "}
                    <DeFiTerm term="hub" className="text-[0.92em]">Hub</DeFiTerm>
                    {" "}and{" "}
                    <DeFiTerm term="spoke" className="text-[0.92em]">Spoke</DeFiTerm>
                    {" "}architecture, giving the protocol shared liquidity, flexible risk controls, and a stronger security model. Avana builds on that foundation to deliver secure{" "}
                    <DeFiTerm term="lp-position" className="text-[0.92em]">LP backed borrowing</DeFiTerm>
                    {" "}with transparent onchain execution, resilient{" "}
                    <DeFiTerm term="oracle" className="text-[0.92em]">oracle</DeFiTerm>
                    {" "}checks, and borrower protection shaped around controlled{" "}
                    <DeFiTerm term="liquidation" className="text-[0.92em]">liquidation</DeFiTerm>
                    {" "}design.
                  </p>
                </div>
              </div>

              <div className="mt-12 overflow-hidden rounded-[28px] border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-5 sm:p-6">
                <div className="flex min-h-[280px] items-center justify-center rounded-[24px] border border-gray-200 bg-white sm:min-h-[340px] md:min-h-[420px]">
                  <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#B6509E] shadow-[0_20px_60px_rgba(182,80,158,0.18)] sm:h-36 sm:w-36 md:h-44 md:w-44">
                      <svg width="68" height="68" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:h-20 sm:w-20 md:h-24 md:w-24">
                        <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0z" fill="#B6509E" />
                        <path d="M186.7 168.5c-7.5 0-14.2-4.3-17.4-11l-25.9-56.8c-1.4-3.1-4.5-5.1-7.9-5.1h-14.9c-3.4 0-6.5 2-7.9 5.1l-25.9 56.8c-3.2 6.7-9.9 11-17.4 11-10.6 0-19.2-8.6-19.2-19.2 0-2.9.7-5.8 2-8.4l38.3-83.8c5.7-12.5 18.2-20.5 32-20.5h23.2c13.8 0 26.3 8 32 20.5l38.3 83.8c1.3 2.6 2 5.5 2 8.4 0 10.6-8.6 19.2-19.2 19.2z" fill="white" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[1.6rem] font-semibold tracking-[-0.05em] text-gray-900 sm:text-[2rem] md:text-[2.6rem]">
                        Future Aave visual
                      </p>
                      <p className="text-sm text-gray-500 sm:text-base">
                        Reserved for the large Aave brand asset.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </LazySection>

        <LazySection minHeight="520px" fallback={<SectionSkeleton minHeight="520px" />}>
          <HomepageNewsroomSection eyebrowTone="rose" />
        </LazySection>

        <LazySection minHeight="480px" fallback={<SectionSkeleton minHeight="480px" />}>
          <div className="pb-16 md:pb-24">
            <DeferredHomepageFaqSection />
          </div>
        </LazySection>
      </div>
    </section>
  )
}
