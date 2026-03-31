import Image from "next/image"
import dynamic from "next/dynamic"
import { DeFiTerm } from "@/components/defi-term"
import EarlyAccessCtaBox from "@/components/EarlyAccessCtaBox"
import { homepagePools, type HomepagePool } from "@/data/homepage"
import { LazySection } from "@/components/ui/lazy-section"

const DeferredTestimonialSection = dynamic(() => import("@/components/homepage/HomepageTestimonialSection"), {
  loading: () => <div className="py-16 md:py-20 border-t border-gray-100" aria-hidden="true" />,
})
const DeferredFaqSection = dynamic(() => import("@/components/homepage/HomepageFaqSection"), {
  loading: () => <div className="py-16 md:py-20 border-t border-gray-100" aria-hidden="true" />,
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
    <section className="marketing-secondary-shell pb-6 md:pb-4">
      <div className="mx-auto max-w-5xl px-6 lg:px-0 py-16 md:py-24">
        <div className="flex flex-col gap-6">
          <div className="flex max-w-[600px] flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              How borrowing works
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Get liquidity from your LP positions in three simple steps.
            </p>
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

      <div className="mx-auto max-w-5xl px-6 lg:px-0">
        <div className="border-t border-gray-100"></div>
      </div>

      <div className="mx-auto max-w-5xl space-y-12 px-6 lg:px-0">
        <LazySection minHeight="400px">
          <div className="flex flex-col pt-16 md:pt-20 gap-8 md:gap-12" style={{ opacity: 1, transform: "none" }}>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                Borrow Across DEXs
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                We integrate with the leading decentralized exchanges in DeFi.
              </p>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">500+ Supported Pools</h2>
                <p className="text-sm md:text-base text-gray-600">
                  Access liquidity from 500+ pools across all integrated DEXs.
                </p>
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

        <LazySection minHeight="600px">
          <div className="pt-16 md:pt-20 border-t border-gray-100">
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                  Get more out of your LPs
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Maximize capital efficiency while keeping your positions active.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-start gap-y-10 gap-x-5 mt-10 md:mt-16">
              <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
                <div className="relative rounded-[20px] overflow-hidden w-full h-[340px] bg-gray-50">
                  <div className="absolute top-[50px] left-1/2 animate-float px-8 py-5 text-center text-5xl font-bold rounded-full bg-blue-500 text-white">
                    80%
                  </div>
                  <div className="absolute bottom-[46px] text-sm font-medium left-1/2 -translate-x-1/2">
                    <span className="flex gap-2 items-center text-blue-600">
                      <DeFiTerm term="ltv">LTV Ratio</DeFiTerm>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="currentColor" viewBox="0 0 16 17" className="w-5 h-5">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.333 8.783h9.334m0 0-4-4m4 4-4 4"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[394px]">
                    <div className="relative">
                      {[50, 55, 60, 65, 70, 75, 80].map((value, index) => (
                        <div key={value} className="absolute top-0 left-0 flex justify-start w-full animate-pulse-soft" style={{ rotate: `${18 + index * 16}deg`, animationDelay: `${index * 0.1}s` }}>
                          <span className="text-[10px] font-semibold w-8 text-right">{value}</span>
                          <div className="bg-blue-400 w-[30px] h-[14px] rounded-full ml-1.5 mt-1"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-semibold mt-5 text-center text-gray-900">Maximize your capital</div>
                <div className="text-base text-gray-600 text-center mt-2">Borrow up to 80% of your LP value</div>
              </div>

              <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
                <div className="relative rounded-[20px] overflow-hidden w-full h-[340px] bg-gray-50">
                  <div className="absolute top-[50px] left-1/2 animate-float w-[243px] h-[240px] bg-white rounded-[10px] border border-gray-200">
                    <div className="flex justify-center items-center gap-1 px-2 py-1 w-fit mx-auto mt-9 rounded-full bg-blue-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"></path>
                      </svg>
                      <span className="text-[10px] font-semibold">Trading Fees</span>
                    </div>
                    <div className="flex justify-center mt-4">
                      <span className="text-5xl font-bold text-blue-600 animate-pulse-soft">+12.4%</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 mt-4">
                      <span className="text-gray-500 text-xs"><DeFiTerm term="apy">APY</DeFiTerm></span>
                      <div className="w-10 h-0.5 rounded bg-blue-300"></div>
                      <div className="flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 16 16" className="fill-white text-white">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3 9 7-7c.15-.15.4.01.33.21L8.77 6.4a.2.2 0 0 0 .19.27h3.9a.2.2 0 0 1 .14.34l-7 7c-.15.15-.4-.01-.33-.21l1.58-4.2a.2.2 0 0 0-.19-.27H3.15a.2.2 0 0 1-.14-.34"></path>
                        </svg>
                      </div>
                      <div className="w-3.5 h-0.5 rounded bg-blue-300"></div>
                      <span className="text-gray-500 text-xs">Earned</span>
                    </div>
                    <div className="mx-auto mt-6 w-36 border px-4 py-1 border-blue-300 rounded-full text-center">
                      <span className="text-sm font-medium text-blue-600">Keep Earning</span>
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-semibold mt-5 text-center text-gray-900">Keep earning fees</div>
                <div className="text-base text-gray-600 text-center mt-2">Your LP stays active while you borrow</div>
              </div>

              <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-[20px] w-full h-[340px] bg-gray-50">
                  <div className="absolute top-[50px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                    <div className="flex gap-3 w-[280px] px-4 py-3 bg-white rounded-lg border border-gray-200 items-center animate-float-simple" style={{ animationDelay: "0s" }}>
                      <div className="flex items-center justify-center w-11 h-11">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v20m5-17H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"></path>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Leverage trading</span>
                    </div>
                    <div className="flex gap-3 w-[300px] px-4 py-3 bg-blue-500 text-white rounded-lg shadow-sm items-center animate-float-simple" style={{ animationDelay: "0.15s" }}>
                      <div className="flex items-center justify-center w-11 h-11">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"></path>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Yield farming</span>
                    </div>
                    <div className="flex gap-3 w-[280px] px-4 py-3 bg-white rounded-lg border border-gray-200 items-center animate-float-simple" style={{ animationDelay: "0.3s" }}>
                      <div className="flex items-center justify-center w-11 h-11">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 10v7.4a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 17.4V10m20 0V6.6A1.6 1.6 0 0 0 20.4 5H3.6A1.6 1.6 0 0 0 2 6.6V10m20 0H2m4 5h3"></path>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Pay off debt</span>
                    </div>
                    <div className="flex gap-3 w-[280px] px-4 py-3 bg-white rounded-lg border border-gray-200 items-center animate-float-simple" style={{ animationDelay: "0.45s" }}>
                      <div className="flex items-center justify-center w-11 h-11">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3v18h18M7 16l4-4 4 4 5-6"></path>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">New positions</span>
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-semibold mt-5 text-center text-gray-900">Unlock new strategies</div>
                <div className="text-base text-gray-600 text-center mt-2">Use borrowed funds however you want</div>
              </div>
            </div>

            <div className="w-full max-w-[1280px] mx-auto px-4 py-8 mt-12 md:py-8 md:mt-16">
              <div className="flex flex-col items-center gap-[26px] lg:gap-8">
                <div
                  className="group rounded-lg relative z-10 flex min-h-[380px] w-full max-w-[1280px] overflow-hidden h-[520px] sm:h-[560px] lg:h-[620px]"
                  style={{
                    background: "linear-gradient(0deg, rgb(243, 244, 246) -91.67%, rgb(229, 231, 235) 58.64%)",
                  }}
                >
                  <Image
                    alt=""
                    className="absolute inset-0 z-0 object-cover mt-[180px] scale-[1.2] sm:mt-[240px] md:top-auto md:scale-100"
                    fill
                    loading="lazy"
                    quality={70}
                    sizes="(max-width: 1024px) 100vw, 1280px"
                    src="https://mkt-static.crypto.com/cdc_home_exchangebanner_desktop_usd.webp"
                  />
                  <div className="flex relative z-20 h-full w-full flex-col items-start justify-end gap-4 p-5 pb-8 sm:p-8 lg:flex-row lg:justify-between lg:pb-8">
                    <div className="flex items-center relative z-20 w-full flex-row lg:my-auto">
                      <div className="flex w-full max-w-[560px] flex-col gap-1 lg:gap-2">
                        <h3 className="text-[20px] lg:text-[28px] font-semibold leading-normal text-gray-900">
                          Automate your LP strategy
                        </h3>
                        <p className="text-[18px] lg:text-[21px] font-medium leading-normal tracking-[-0.09px] lg:tracking-[-0.1px] text-gray-600">
                          Set it and forget it with auto-compound, rebalancing, and alerts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LazySection>

        <LazySection minHeight="600px">
          <div className="pt-16 md:pt-20 border-t border-gray-100">
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                  Borrow with Confidence
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Every component is designed with trust and safety as the foundation.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-start gap-y-10 gap-x-5 mt-10 md:mt-16">
              <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
                <div className="relative rounded-[20px] overflow-hidden w-full h-[340px] bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[180px] h-[180px]">
                      <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-spin-slow"></div>
                      <div className="absolute inset-[20px] rounded-full border-2 border-blue-300 animate-spin-slow-reverse"></div>
                      <div className="absolute inset-[40px] rounded-full border-2 border-blue-400 animate-spin-slow"></div>
                      <div className="absolute inset-[55px] rounded-full bg-blue-500 flex items-center justify-center animate-pulse-soft">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-white">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-4">
                    <div className="flex flex-col items-center px-3 py-2 rounded-lg bg-white border border-gray-200">
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">Pool Depth</span>
                      <span className="text-sm font-semibold text-blue-600">$24.5M</span>
                    </div>
                    <div className="flex flex-col items-center px-3 py-2 rounded-lg bg-white border border-gray-200">
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">Volatility</span>
                      <span className="text-sm font-semibold text-green-600">Low</span>
                    </div>
                    <div className="flex flex-col items-center px-3 py-2 rounded-lg bg-white border border-gray-200">
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">Oracle</span>
                      <span className="text-sm font-semibold text-blue-600">98/100</span>
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-semibold mt-5 text-center text-gray-900">LP-aware risk models</div>
                <div className="text-base text-gray-600 text-center mt-2">Track pool composition, volatility, and oracle quality.</div>
              </div>

              <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
                <div className="relative rounded-[20px] overflow-hidden w-full h-[340px] bg-gray-50">
                  <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[260px]">
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-100 border border-blue-200 w-fit mx-auto mb-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                      <span className="text-[10px] font-semibold text-blue-700 uppercase tracking-wider">Live</span>
                    </div>
                    <div className="text-center mb-3">
                      <span className="text-3xl font-bold text-blue-600 animate-pulse-soft">$1,847.52</span>
                      <div className="text-xs text-gray-500 mt-1">ETH / USD</div>
                    </div>
                    <div className="relative w-full h-[100px] bg-white rounded-lg border border-gray-200 p-2">
                      <div className="absolute top-[30%] left-2 right-2 h-[40%] bg-blue-50 border-y border-blue-200"></div>
                      <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)]" viewBox="0 0 300 80" preserveAspectRatio="none">
                        <path className="animate-draw-line" d="M0,60 Q30,50 60,55 T120,35 T180,40 T240,25 T300,30" fill="none" stroke="#3b82f6" strokeWidth="2" />
                        <circle cx="240" cy="25" r="5" fill="#3b82f6" className="animate-pulse" />
                        <circle cx="240" cy="25" r="2" fill="white" />
                      </svg>
                    </div>
                    <div className="flex justify-between w-full mt-2 px-1">
                      <div className="text-xs text-gray-500">$1,720</div>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-green-100">
                        <span className="text-xs text-green-700 font-medium">In Range</span>
                      </div>
                      <div className="text-xs text-gray-500">$1,950</div>
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-semibold mt-5 text-center text-gray-900">Price-range aware oracles</div>
                <div className="text-base text-gray-600 text-center mt-2">Industry-leading security protects your investments.</div>
              </div>

              <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-[20px] w-full h-[340px] bg-gray-50">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="relative w-[160px] h-[160px]">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round" strokeDasharray="198 66" />
                        <circle cx="50" cy="50" r="42" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" strokeDasharray="182 82" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-blue-600 animate-pulse-soft">92%</span>
                        <span className="text-xs text-green-600 font-medium">Healthy</span>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-gray-700">LTV 75%</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-xs text-gray-700">Buffer 42%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-semibold mt-5 text-center text-gray-900">Per-position health checks</div>
                <div className="text-base text-gray-600 text-center mt-2">Dynamically adjust loan-to-value ratios and liquidation thresholds.</div>
              </div>
            </div>
          </div>
        </LazySection>

        <LazySection minHeight="300px">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-16 md:pt-20 items-center border-t border-gray-100">
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                More about Aave v4
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-lg">
                Aave v4 is a next-generation DeFi lending protocol featuring a <DeFiTerm term="hub">Hub</DeFiTerm>-and-<DeFiTerm term="spoke">Spoke</DeFiTerm> architecture that enables cross-chain liquidity and modular risk management. Avana leverages Aave v4&apos;s infrastructure to provide secure, permissionless borrowing against <DeFiTerm term="lp-position">LP positions</DeFiTerm>. All loan terms, <DeFiTerm term="liquidation">liquidations</DeFiTerm>, and interest rates are enforced on-chain through battle-tested smart contracts and transparent <DeFiTerm term="oracle">oracle</DeFiTerm> systems.
              </p>
              <a
                href="https://docs.aave.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Learn more
              </a>
            </div>
            <div className="flex-shrink-0">
              <div className="w-[300px] h-[200px] md:w-[400px] md:h-[250px] rounded-2xl border border-gray-200 flex items-center justify-center bg-white">
                <div className="flex items-center gap-3">
                  <svg width="48" height="48" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0z" fill="#B6509E" />
                    <path d="M186.7 168.5c-7.5 0-14.2-4.3-17.4-11l-25.9-56.8c-1.4-3.1-4.5-5.1-7.9-5.1h-14.9c-3.4 0-6.5 2-7.9 5.1l-25.9 56.8c-3.2 6.7-9.9 11-17.4 11-10.6 0-19.2-8.6-19.2-19.2 0-2.9.7-5.8 2-8.4l38.3-83.8c5.7-12.5 18.2-20.5 32-20.5h23.2c13.8 0 26.3 8 32 20.5l38.3 83.8c1.3 2.6 2 5.5 2 8.4 0 10.6-8.6 19.2-19.2 19.2z" fill="white" />
                  </svg>
                  <span className="text-2xl md:text-3xl font-semibold text-gray-900">Aave</span>
                </div>
              </div>
            </div>
          </div>
        </LazySection>

        <LazySection minHeight="400px">
          <DeferredTestimonialSection />
        </LazySection>

        <LazySection minHeight="500px">
          <DeferredFaqSection />
        </LazySection>

        <LazySection minHeight="200px">
          <EarlyAccessCtaBox />
        </LazySection>
      </div>
    </section>
  )
}
