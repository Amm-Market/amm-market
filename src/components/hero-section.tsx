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
                  <article className="group flex h-[31.25rem] w-full snap-start flex-col overflow-hidden rounded-[26px] bg-gray-50 p-5 transition-transform duration-150 hover:scale-[1.01]">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-gray-900">Maximize your capital</h3>
                        <p className="max-w-[16rem] text-base text-gray-600">Borrow up to 80% of your LP value.</p>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">01</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative h-[180px] w-[180px]">
                              <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="42" fill="none" stroke="#d1d5db" strokeWidth="8" strokeLinecap="round" strokeDasharray="198 66" />
                                <circle cx="50" cy="50" r="42" fill="none" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" strokeDasharray="160 104" />
                              </svg>
                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-bold text-slate-800">80%</span>
                                <span className="text-xs font-medium text-slate-500">Available</span>
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-x-0 bottom-8 flex justify-center gap-3">
                            <div className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700">LTV 80%</div>
                            <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">Capital active</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="group flex h-[31.25rem] w-full snap-start flex-col overflow-hidden rounded-[26px] bg-gray-50 p-5 transition-transform duration-150 hover:scale-[1.01]">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-gray-900">Keep earning fees</h3>
                        <p className="max-w-[16rem] text-base text-gray-600">Your LP stays active while you borrow.</p>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">02</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full rounded-[22px] border border-slate-200 bg-gradient-to-b from-white to-slate-50">
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 px-2 py-1 text-slate-700">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"></path>
                              </svg>
                              <span className="text-[10px] font-semibold">Trading Fees</span>
                            </div>
                            <span className="mt-6 text-5xl font-bold text-slate-700">+12.4%</span>
                            <div className="mt-4 flex items-center gap-1.5">
                              <span className="text-xs text-gray-500"><DeFiTerm term="apy">APY</DeFiTerm></span>
                              <div className="h-0.5 w-10 rounded bg-slate-200"></div>
                              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 16 16" className="fill-white text-white">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3 9 7-7c.15-.15.4.01.33.21L8.77 6.4a.2.2 0 0 0 .19.27h3.9a.2.2 0 0 1 .14.34l-7 7c-.15.15-.4-.01-.33-.21l1.58-4.2a.2.2 0 0 0-.19-.27H3.15a.2.2 0 0 1-.14-.34"></path>
                                </svg>
                              </div>
                              <div className="h-0.5 w-3.5 rounded bg-slate-200"></div>
                              <span className="text-xs text-gray-500">Earned</span>
                            </div>
                            <div className="mt-6 w-full max-w-[16rem] rounded-[18px] border border-slate-200 bg-white px-4 py-4">
                              <div className="flex items-center justify-between text-[0.72rem] text-gray-500">
                                <span>LP fees remain active</span>
                                <span className="font-medium text-gray-800">Auto accrual</span>
                              </div>
                              <div className="mt-3 mx-auto w-36 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-center">
                                <span className="text-sm font-medium text-slate-700">Keep Earning</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="group flex h-[31.25rem] w-full snap-start flex-col overflow-hidden rounded-[26px] bg-gray-50 p-5 transition-transform duration-150 hover:scale-[1.01]">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-gray-900">Unlock new strategies</h3>
                        <p className="max-w-[16rem] text-base text-gray-600">Use borrowed funds however you want.</p>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">03</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full rounded-[22px] border border-slate-200 bg-gradient-to-b from-white to-slate-50">
                          <div className="absolute inset-0 flex items-center justify-center p-6">
                            <div className="flex w-full max-w-[16.75rem] flex-col items-center gap-3">
                              <div className="flex w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
                                <div className="flex h-11 w-11 items-center justify-center text-gray-700">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v20m5-17H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"></path>
                                  </svg>
                                </div>
                                <span className="text-sm font-medium text-gray-800">Leverage trading</span>
                              </div>
                              <div className="flex w-full items-center gap-3 rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-slate-900">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"></path>
                                  </svg>
                                </div>
                                <span className="text-sm font-medium">Yield farming</span>
                              </div>
                              <div className="flex w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
                                <div className="flex h-11 w-11 items-center justify-center text-gray-700">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 10v7.4a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 17.4V10m20 0V6.6A1.6 1.6 0 0 0 20.4 5H3.6A1.6 1.6 0 0 0 2 6.6V10m20 0H2m4 5h3"></path>
                                  </svg>
                                </div>
                                <span className="text-sm font-medium text-gray-800">Pay off debt</span>
                              </div>
                              <div className="flex w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
                                <div className="flex h-11 w-11 items-center justify-center text-gray-700">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3v18h18M7 16l4-4 4 4 5-6"></path>
                                  </svg>
                                </div>
                                <span className="text-sm font-medium text-gray-800">New positions</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="group flex h-[31.25rem] w-full snap-start flex-col overflow-hidden rounded-[26px] bg-gray-50 p-5 transition-transform duration-150 hover:scale-[1.01]">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-gray-900">Price-range aware oracles</h3>
                        <p className="max-w-[16rem] text-base text-gray-600">Industry-leading security protects your investments.</p>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">04</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full rounded-[22px] border border-slate-200 bg-gradient-to-b from-white to-slate-50">
                          <div className="absolute inset-0 flex items-center justify-center p-6">
                            <div className="w-full max-w-[16.75rem]">
                              <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-gray-500">
                                <span>$1,720</span>
                                <span>Oracle band</span>
                                <span>$1,950</span>
                              </div>
                              <div className="relative h-[118px] rounded-[18px] border border-slate-200 bg-white">
                                <div className="absolute inset-x-6 top-1/2 h-8 -translate-y-1/2 rounded-full border border-slate-200 bg-slate-50"></div>
                                <svg className="absolute inset-4 h-[calc(100%-32px)] w-[calc(100%-32px)]" viewBox="0 0 300 110" preserveAspectRatio="none">
                                  <path d="M0,78 Q40,70 85,76 T165,54 T235,58 T300,40" fill="none" stroke="#64748b" strokeWidth="2.25" strokeLinecap="round" />
                                </svg>
                                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-500 ring-4 ring-white"></div>
                              </div>
                              <div className="mt-4 flex justify-center">
                                <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">In range</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="group flex h-[31.25rem] w-full snap-start flex-col overflow-hidden rounded-[26px] bg-gray-50 p-5 transition-transform duration-150 hover:scale-[1.01]">
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-gray-900">LP-aware risk models</h3>
                        <p className="max-w-[16rem] text-base text-gray-600">Track pool composition, volatility, and oracle quality.</p>
                      </div>
                      <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">05</div>
                    </div>
                    <div className="relative z-0 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="relative h-[18rem] w-full rounded-[22px] border border-slate-200 bg-gradient-to-b from-white to-slate-50">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative h-[170px] w-[170px]">
                              <div className="absolute inset-0 rounded-full border-2 border-slate-200"></div>
                              <div className="absolute inset-[20px] rounded-full border-2 border-slate-300"></div>
                              <div className="absolute inset-[40px] rounded-full border-2 border-slate-300"></div>
                              <div className="absolute inset-[55px] flex items-center justify-center rounded-full border border-slate-200 bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-slate-700">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-x-0 bottom-7 px-4">
                            <div className="mx-auto grid max-w-[17rem] grid-cols-3 gap-2">
                              <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-center">
                                <span className="block text-[10px] uppercase tracking-wider text-gray-500">Pool</span>
                                <span className="text-sm font-semibold text-gray-900">Deep</span>
                              </div>
                              <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-center">
                                <span className="block text-[10px] uppercase tracking-wider text-gray-500">Vol</span>
                                <span className="text-sm font-semibold text-gray-700">Low</span>
                              </div>
                              <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-center">
                                <span className="block text-[10px] uppercase tracking-wider text-gray-500">Oracle</span>
                                <span className="text-sm font-semibold text-gray-900">98/100</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
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
