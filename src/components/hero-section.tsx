import dynamic from "next/dynamic"
import { DeFiTerm } from "@/components/defi-term"
import HomepageProductsSection from "@/components/homepage-products-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { homepagePools, type HomepagePool } from "@/data/homepage"
import { LazySection } from "@/components/ui/lazy-section"

const DeferredTestimonialSection = dynamic(() => import("@/components/homepage/HomepageTestimonialSection"), {
  loading: () => <div className="py-16 md:py-20 border-t border-gray-100" aria-hidden="true" />,
})
const DeferredFaqSection = dynamic(() => import("@/components/homepage/HomepageFaqSection"), {
  loading: () => <div className="border-t border-gray-100 pt-16 pb-4 md:pt-10 md:pb-0" aria-hidden="true" />,
})

/**
 * HeroSection - Homepage secondary content shell.
 *
 * Static sections render on the server while interactive islands are deferred
 * until they approach the viewport.
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
      <div className="site-content-shell">
        <LazySection minHeight="400px">
          <div className="flex flex-col gap-8 pt-16 md:gap-12 md:pt-20" style={{ opacity: 1, transform: "none" }}>
            <div className="flex flex-col gap-2">
              <SectionEyebrow>DEX Coverage</SectionEyebrow>
              <SectionTitle>
                Borrow Across DEXs
              </SectionTitle>
            </div>
            <div className="flex flex-1 items-stretch gap-2 flex-col sm:flex-row">
              <div className="grid w-full flex-1 grid-cols-3 gap-2">
                <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                  <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#111727]"></div>
                </div>
                <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                  <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#FFFFFF]"></div>
                </div>
                <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                  <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#000827]"></div>
                </div>
                <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                  <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[linear-gradient(45deg,#FC6901_0%,#F3B900_100%)]"></div>
                </div>
                <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                  <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#000000]"></div>
                </div>
                <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                  <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#F5F5F5]"></div>
                </div>
              </div>
              <div className="flex w-full flex-1">
                <div className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-2 text-center rounded-lg h-[150px] sm:h-auto">
                  <div className="flex size-full flex-col items-center justify-center bg-white border border-blue-200 rounded-md">
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
                <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                  <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#7D00FF]"></div>
                </div>
                <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                  <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#000000]"></div>
                </div>
                <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                  <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#F3EFCD]"></div>
                </div>
                <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                  <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#061121]"></div>
                </div>
                <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                  <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[linear-gradient(90deg,#E35930_-6.83%,#E84125_100%)]"></div>
                </div>
                <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                  <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#F1F7FF]"></div>
                </div>
              </div>
            </div>
          </div>
        </LazySection>

        <LazySection minHeight="600px">
          <div className="flex flex-col pt-16 md:pt-20 gap-8 md:gap-12 border-t border-gray-100" style={{ opacity: 1, transform: "none" }}>
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <SectionEyebrow>Pool Coverage</SectionEyebrow>
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
        </LazySection>
      </div>

      <div className="site-content-shell py-16 md:py-24">
        <div className="flex flex-col gap-6">
          <div className="flex max-w-[600px] flex-col gap-2">
            <SectionEyebrow>How it works</SectionEyebrow>
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

      <div className="site-content-shell">
        <LazySection minHeight="400px">
          <DeferredTestimonialSection />
        </LazySection>
      </div>

      <HomepageProductsSection />

      <div className="site-content-shell space-y-12">
        <LazySection minHeight="600px">
          <div className="pt-16 md:pt-20 border-t border-gray-100">
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <SectionEyebrow>Capital Efficiency</SectionEyebrow>
                <SectionTitle>
                  Get more out of your LPs
                </SectionTitle>
              </div>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:gap-5 md:mt-16">
              <article className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-gray-50">
                <div className="relative min-h-[18rem] overflow-hidden p-4 sm:min-h-[20rem] sm:p-5">
                  <div className="relative h-full rounded-[22px] border border-gray-200 bg-white shadow-sm">
                    <div className="absolute top-[50px] left-1/2 -translate-x-1/2 animate-float rounded-full bg-[#2f3338] px-8 py-5 text-center text-5xl font-bold text-white">
                      80%
                    </div>
                    <div className="absolute bottom-[46px] left-1/2 -translate-x-1/2 text-sm font-medium text-gray-700">
                      <span className="flex items-center gap-2">
                        <DeFiTerm term="ltv">LTV Ratio</DeFiTerm>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="currentColor" viewBox="0 0 16 17" className="w-5 h-5">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.333 8.783h9.334m0 0-4-4m4 4-4 4"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 w-[394px] -translate-x-1/2">
                      <div className="relative">
                        {[50, 55, 60, 65, 70, 75, 80].map((value, index) => (
                          <div key={value} className="absolute top-0 left-0 flex w-full justify-start animate-pulse-soft" style={{ rotate: `${18 + index * 16}deg`, animationDelay: `${index * 0.1}s` }}>
                            <span className="w-8 text-right text-[10px] font-semibold text-gray-600">{value}</span>
                            <div className="ml-1.5 mt-1 h-[14px] w-[30px] rounded-full bg-gray-300"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-end gap-2 p-4 sm:p-5">
                  <div className="text-2xl font-semibold text-center text-gray-900">Maximize your capital</div>
                  <div className="text-base text-center text-gray-600">Borrow up to 80% of your LP value</div>
                </div>
              </article>

              <article className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-gray-50">
                <div className="relative min-h-[18rem] overflow-hidden p-4 sm:min-h-[20rem] sm:p-5">
                  <div className="relative h-full rounded-[22px] border border-gray-200 bg-white shadow-sm">
                    <div className="absolute inset-x-0 top-8 flex justify-center">
                      <div className="flex items-center justify-center gap-1 rounded-full bg-[#2f3338] px-2 py-1 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"></path>
                        </svg>
                        <span className="text-[10px] font-semibold">Trading Fees</span>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 top-[88px] flex justify-center">
                      <span className="animate-pulse-soft text-5xl font-bold text-[#2f3338]">+12.4%</span>
                    </div>
                    <div className="absolute inset-x-0 top-[152px] flex items-center justify-center gap-1.5">
                      <span className="text-xs text-gray-500"><DeFiTerm term="apy">APY</DeFiTerm></span>
                      <div className="h-0.5 w-10 rounded bg-gray-300"></div>
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2f3338] animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 16 16" className="fill-white text-white">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3 9 7-7c.15-.15.4.01.33.21L8.77 6.4a.2.2 0 0 0 .19.27h3.9a.2.2 0 0 1 .14.34l-7 7c-.15.15-.4-.01-.33-.21l1.58-4.2a.2.2 0 0 0-.19-.27H3.15a.2.2 0 0 1-.14-.34"></path>
                        </svg>
                      </div>
                      <div className="h-0.5 w-3.5 rounded bg-gray-300"></div>
                      <span className="text-xs text-gray-500">Earned</span>
                    </div>
                    <div className="absolute inset-x-5 bottom-5 rounded-[18px] border border-gray-200 bg-gray-50 px-4 py-4">
                      <div className="flex items-center justify-between text-[0.72rem] text-gray-500">
                        <span>LP fees remain active</span>
                        <span className="font-medium text-gray-800">Auto accrual</span>
                      </div>
                      <div className="mt-3 mx-auto w-36 rounded-full border border-gray-300 bg-white px-4 py-1 text-center">
                        <span className="text-sm font-medium text-gray-700">Keep Earning</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-end gap-2 p-4 sm:p-5">
                  <div className="text-2xl font-semibold text-center text-gray-900">Keep earning fees</div>
                  <div className="text-base text-center text-gray-600">Your LP stays active while you borrow</div>
                </div>
              </article>

              <article className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-gray-50">
                <div className="relative min-h-[18rem] overflow-hidden p-4 sm:min-h-[20rem] sm:p-5">
                  <div className="relative h-full rounded-[22px] border border-gray-200 bg-white shadow-sm">
                    <div className="absolute inset-x-5 top-[34px] flex flex-col items-center gap-2">
                      <div className="flex w-[280px] items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 animate-float-simple" style={{ animationDelay: "0s" }}>
                        <div className="flex h-11 w-11 items-center justify-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v20m5-17H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"></path>
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-800">Leverage trading</span>
                      </div>
                      <div className="flex w-[300px] items-center gap-3 rounded-lg bg-[#2f3338] px-4 py-3 text-white shadow-sm animate-float-simple" style={{ animationDelay: "0.15s" }}>
                        <div className="flex h-11 w-11 items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"></path>
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Yield farming</span>
                      </div>
                      <div className="flex w-[280px] items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 animate-float-simple" style={{ animationDelay: "0.3s" }}>
                        <div className="flex h-11 w-11 items-center justify-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 10v7.4a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 17.4V10m20 0V6.6A1.6 1.6 0 0 0 20.4 5H3.6A1.6 1.6 0 0 0 2 6.6V10m20 0H2m4 5h3"></path>
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-800">Pay off debt</span>
                      </div>
                      <div className="flex w-[280px] items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 animate-float-simple" style={{ animationDelay: "0.45s" }}>
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
                <div className="flex flex-1 flex-col justify-end gap-2 p-4 sm:p-5">
                  <div className="text-2xl font-semibold text-center text-gray-900">Unlock new strategies</div>
                  <div className="text-base text-center text-gray-600">Use borrowed funds however you want</div>
                </div>
              </article>
            </div>

          </div>
        </LazySection>

        <LazySection minHeight="600px">
          <div className="pt-16 md:pt-20 border-t border-gray-100">
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <SectionEyebrow>Risk Systems</SectionEyebrow>
                <SectionTitle>
                  Borrow with Confidence
                </SectionTitle>
              </div>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:gap-5 md:mt-16">
              <article className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-gray-50">
                <div className="relative min-h-[18rem] overflow-hidden p-4 sm:min-h-[20rem] sm:p-5">
                  <div className="relative h-full rounded-[22px] border border-gray-200 bg-white shadow-sm">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative h-[180px] w-[180px]">
                        <div className="absolute inset-0 rounded-full border-2 border-gray-200 animate-spin-slow"></div>
                        <div className="absolute inset-[20px] rounded-full border-2 border-gray-300 animate-spin-slow-reverse"></div>
                        <div className="absolute inset-[40px] rounded-full border-2 border-gray-400 animate-spin-slow"></div>
                        <div className="absolute inset-[55px] flex items-center justify-center rounded-full bg-[#2f3338] animate-pulse-soft">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-white">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-4">
                      <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white px-3 py-2">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500">Pool Depth</span>
                        <span className="text-sm font-semibold text-gray-900">$24.5M</span>
                      </div>
                      <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white px-3 py-2">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500">Volatility</span>
                        <span className="text-sm font-semibold text-gray-700">Low</span>
                      </div>
                      <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white px-3 py-2">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500">Oracle</span>
                        <span className="text-sm font-semibold text-gray-900">98/100</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-end gap-2 p-4 sm:p-5">
                  <div className="text-2xl font-semibold text-center text-gray-900">LP-aware risk models</div>
                  <div className="text-base text-center text-gray-600">Track pool composition, volatility, and oracle quality.</div>
                </div>
              </article>

              <article className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-gray-50">
                <div className="relative min-h-[18rem] overflow-hidden p-4 sm:min-h-[20rem] sm:p-5">
                  <div className="relative h-full rounded-[22px] border border-gray-200 bg-white shadow-sm">
                    <div className="absolute inset-x-5 top-6">
                      <div className="mx-auto mb-3 flex w-fit items-center gap-1.5 rounded-full border border-gray-200 bg-gray-100 px-2 py-1">
                        <div className="h-2 w-2 rounded-full bg-gray-700 animate-pulse"></div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-700">Live</span>
                      </div>
                      <div className="mb-3 text-center">
                        <span className="animate-pulse-soft text-3xl font-bold text-gray-900">$1,847.52</span>
                        <div className="mt-1 text-xs text-gray-500">ETH / USD</div>
                      </div>
                      <div className="relative h-[100px] w-full rounded-lg border border-gray-200 bg-white p-2">
                        <div className="absolute top-[30%] left-2 right-2 h-[40%] border-y border-gray-200 bg-gray-100"></div>
                        <svg className="absolute inset-2 h-[calc(100%-16px)] w-[calc(100%-16px)]" viewBox="0 0 300 80" preserveAspectRatio="none">
                          <path className="animate-draw-line" d="M0,60 Q30,50 60,55 T120,35 T180,40 T240,25 T300,30" fill="none" stroke="#2f3338" strokeWidth="2" />
                          <circle cx="240" cy="25" r="5" fill="#2f3338" className="animate-pulse" />
                          <circle cx="240" cy="25" r="2" fill="white" />
                        </svg>
                      </div>
                      <div className="mt-2 flex w-full justify-between px-1">
                        <div className="text-xs text-gray-500">$1,720</div>
                        <div className="flex items-center gap-1 rounded bg-gray-100 px-2 py-0.5">
                          <span className="text-xs font-medium text-gray-700">In Range</span>
                        </div>
                        <div className="text-xs text-gray-500">$1,950</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-end gap-2 p-4 sm:p-5">
                  <div className="text-2xl font-semibold text-center text-gray-900">Price-range aware oracles</div>
                  <div className="text-base text-center text-gray-600">Industry-leading security protects your investments.</div>
                </div>
              </article>

              <article className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-gray-50">
                <div className="relative min-h-[18rem] overflow-hidden p-4 sm:min-h-[20rem] sm:p-5">
                  <div className="relative h-full rounded-[22px] border border-gray-200 bg-white shadow-sm">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="relative h-[160px] w-[160px]">
                        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round" strokeDasharray="198 66" />
                          <circle cx="50" cy="50" r="42" fill="none" stroke="#4b5563" strokeWidth="8" strokeLinecap="round" strokeDasharray="182 82" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="animate-pulse-soft text-4xl font-bold text-gray-900">92%</span>
                          <span className="text-xs font-medium text-gray-600">Healthy</span>
                        </div>
                      </div>
                      <div className="mt-6 flex gap-3">
                        <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5">
                          <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                          <span className="text-xs text-gray-700">LTV 75%</span>
                        </div>
                        <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5">
                          <div className="h-2 w-2 rounded-full bg-gray-700"></div>
                          <span className="text-xs text-gray-700">Buffer 42%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-end gap-2 p-4 sm:p-5">
                  <div className="text-2xl font-semibold text-center text-gray-900">Per-position health checks</div>
                  <div className="text-base text-center text-gray-600">Dynamically adjust loan-to-value ratios and liquidation thresholds.</div>
                </div>
              </article>
            </div>
          </div>
        </LazySection>

        <LazySection minHeight="300px">
          <div className="pt-16 md:pt-20 border-t border-gray-100">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,29rem)_minmax(0,1fr)] md:gap-10 lg:gap-12 xl:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]">
              <div className="space-y-4">
                <SectionEyebrow>Security</SectionEyebrow>
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

        <LazySection minHeight="500px">
          <DeferredFaqSection />
        </LazySection>
      </div>
    </section>
  )
}
