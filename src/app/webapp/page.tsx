"use client"

import Link from "next/link"
import Image from "next/image"
import WaitlistCTA from "@/components/waitlist-cta"
import HomeHero from "@/components/home-hero"

export default function WebappPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero section */}
      <HomeHero />

      {/* Rest of page content - matching stable-spoke layout */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col pt-8 sm:pt-12">
        <div className="flex-1 flex flex-col relative z-0">
          <div className="space-y-12 pb-16">
            {/* How It Works Section */}
            <section>
              <div className="max-w-[650px] mb-6">
                <h2 className="text-2xl font-bold">How It Works</h2>
                <p className="text-gray-600 mt-2">Two steps to unlock your LP's potential.</p>
              </div>
              <div className="max-w-[650px] space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Deposit LP tokens</h3>
                    <p className="text-gray-600 text-sm">Add Uniswap or Balancer positions. Keep earning fees while deposited.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Unlock credit line</h3>
                    <p className="text-gray-600 text-sm">Borrow instantly via Aave v4. Repay anytime, collect fees freely.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section>
              <div className="max-w-[650px] mb-6">
                <h2 className="text-2xl font-bold">Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">One-Click Actions</h3>
                  </div>
                  <p className="text-gray-600">
                    Complex DeFi strategies simplified into single transactions. Zap into LP positions, 
                    leverage trade, or compound rewards with one click.
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Portfolio Dashboard</h3>
                  </div>
                  <p className="text-gray-600">
                    Track all your positions, earnings, and performance metrics in real-time. 
                    Visualize your DeFi portfolio across all supported chains.
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-fuchsia-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-fuchsia-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Built-in Security</h3>
                  </div>
                  <p className="text-gray-600">
                    Transaction simulation, approval management, and risk warnings help you 
                    avoid costly mistakes and malicious contracts.
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Mobile Responsive</h3>
                  </div>
                  <p className="text-gray-600">
                    Full functionality on any device. Manage your DeFi positions on the go with 
                    our mobile-optimized interface.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <WaitlistCTA />
          </div>
        </div>
      </div>

      {/* Advanced LP Management Section */}
      <div className="mb-[-32px] w-full pb-[32px] lg:mb-[-64px] lg:pb-[64px]">
        <div className="z-0 w-full">
          <div
            className="z-10 w-full overflow-hidden rounded-tl-[32px] rounded-tr-[32px] lg:rounded-tl-[64px] lg:rounded-tr-[64px] pt-[96px] lg:pt-[64px]"
            style={{
              background:
                "linear-gradient(185deg, rgba(0, 22, 90, 0) 10%, rgb(0, 22, 90) 90.38%), linear-gradient(rgb(0, 22, 90) 0%, rgb(163, 179, 202) 100%)",
            }}
          >
            <div className="flex z-100 mx-auto w-full max-w-[1200px] flex-col items-center gap-4 px-8 pb-8 lg:gap-8 lg:px-16 lg:pb-0">
              {/* Label */}
              <div className="flex flex-row items-center justify-center gap-2.5 transition-all duration-1200 ease-in-out">
                <div className="h-[35px] w-[35px]">
                  <svg className="h-[35px] w-[35px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <p className="text-[16px] lg:text-[18px] font-[550] leading-normal text-gray-300">
                  Advanced LP Management
                </p>
              </div>

              {/* Headlines */}
              <div className="flex max-w-[366px] flex-col items-center gap-1 lg:max-w-none">
                <h2 className="text-[40px] lg:text-[56px] font-[550] leading-normal tracking-[-0.2px] lg:tracking-[-0.28px] text-center text-white">
                  Power meets precision
                </h2>
                <h3 className="text-[20px] lg:text-[28px] font-[600] leading-normal text-gray-300 text-center">
                  Manage positions with institutional-grade tools and deeper liquidity
                </h3>
              </div>

              {/* Desktop CTAs */}
              <div className="hidden flex-wrap items-center justify-center gap-4 lg:flex">
                <Link
                  className="group relative flex h-10 min-w-16 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[24px] border bg-white/8 px-[18px] py-2 backdrop-blur-xl transition-all duration-300 ease-out hover:bg-white/12 active:scale-95 border-white/20 hover:border-white/30"
                  href="/early-access"
                >
                  <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%]" />
                  <div className="pointer-events-none absolute inset-[1px] rounded-[23px] bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex flex-row items-center justify-center gap-1">
                    <p className="text-[15px] leading-normal font-medium tracking-[-0.28px] text-gray-50">
                      Get Early Access
                    </p>
                    <svg className="h-4 w-4 text-gray-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
                <Link
                  className="group relative flex h-10 min-w-16 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[24px] border bg-white/8 px-[18px] py-2 backdrop-blur-xl transition-all duration-300 ease-out hover:bg-white/12 active:scale-95 border-white/20 hover:border-white/30"
                  href="/developers"
                >
                  <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%]" />
                  <div className="pointer-events-none absolute inset-[1px] rounded-[23px] bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex flex-row items-center justify-center gap-1">
                    <svg className="h-4 w-4 text-gray-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <p className="text-[15px] leading-normal font-medium tracking-[-0.28px] text-gray-50">
                      View Docs
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </div>

              {/* Hero Image */}
              <div className="relative w-full">
                <div
                  className="h-auto"
                  style={{ position: "relative", left: "50%", transform: "translateX(-50%)", width: "100vw" }}
                >
                  <img
                    alt="Power meets precision"
                    className="object-fill h-auto w-full"
                    loading="lazy"
                    src="https://mkt-static.crypto.com/cdc_home_exchangehero_usd.webp"
                  />
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="flex w-full flex-col items-center justify-center gap-3 px-4 lg:hidden">
                <Link
                  className="group relative flex h-10 min-w-16 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[24px] border bg-white/8 px-[18px] py-2 backdrop-blur-xl transition-all duration-300 ease-out hover:bg-white/12 active:scale-95 border-white/20 hover:border-white/30 w-full max-w-[366px]"
                  href="/early-access"
                >
                  <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%]" />
                  <div className="pointer-events-none absolute inset-[1px] rounded-[23px] bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex flex-row items-center justify-center gap-1">
                    <p className="text-[15px] leading-normal font-medium tracking-[-0.28px] text-gray-50">
                      Get Early Access
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Stats Grid */}
        <div className="flex w-full flex-col bg-white">
          <div className="mx-auto w-full px-8 lg:py-16 py-8">
            <div className="mx-auto grid grid-cols-2 gap-x-6 gap-y-8 lg:max-w-[1100px] lg:grid-cols-4 lg:gap-8">
              <div className="flex flex-col gap-4 border-t pt-4 border-gray-200">
                <p className="text-[18px] lg:text-[21px] font-[550] leading-normal tracking-[-0.09px] lg:tracking-[-0.1px] text-gray-900">
                  Real-time monitoring
                </p>
                <p className="text-[16px] lg:text-[18px] font-[550] leading-normal text-gray-600">
                  Instant position updates and health tracking across all your LPs
                </p>
              </div>
              <div className="flex flex-col gap-4 border-t pt-4 border-gray-200">
                <p className="text-[18px] lg:text-[21px] font-[550] leading-normal tracking-[-0.09px] lg:tracking-[-0.1px] text-gray-900">
                  Competitive rates
                </p>
                <p className="text-[16px] lg:text-[18px] font-[550] leading-normal text-gray-600">
                  Low borrowing fees and minimal protocol costs. Borrow more, pay less
                </p>
              </div>
              <div className="flex flex-col gap-4 border-t pt-4 border-gray-200">
                <p className="text-[18px] lg:text-[21px] font-[550] leading-normal tracking-[-0.09px] lg:tracking-[-0.1px] text-gray-900">
                  Deep liquidity
                </p>
                <p className="text-[16px] lg:text-[18px] font-[550] leading-normal text-gray-600">
                  Access liquidity across 50+ supported pools for tighter spreads
                </p>
              </div>
              <div className="flex flex-col gap-4 border-t pt-4 border-gray-200">
                <p className="text-[18px] lg:text-[21px] font-[550] leading-normal tracking-[-0.09px] lg:tracking-[-0.1px] text-gray-900">
                  Pro-grade reliability
                </p>
                <p className="text-[16px] lg:text-[18px] font-[550] leading-normal text-gray-600">
                  99.99% uptime with automated risk management and MEV protection
                </p>
              </div>
            </div>
          </div>

          {/* Automation Banner */}
          <div className="w-full max-w-[1280px] px-4 py-8 md:mx-auto md:p-8">
            <div className="flex flex-col items-center gap-[26px] lg:gap-8">
              <div
                className="group rounded-lg relative z-10 flex h-[505px] w-full max-w-[1280px] overflow-hidden lg:h-[620px]"
                style={{
                  background: "linear-gradient(0deg, rgb(243, 244, 246) -91.67%, rgb(229, 231, 235) 58.64%)",
                }}
              >
                <img
                  alt=""
                  className="absolute inset-0 z-0 w-full object-cover mt-[240px] scale-120 md:top-auto md:scale-100"
                  loading="lazy"
                  src="https://mkt-static.crypto.com/cdc_home_exchangebanner_desktop_usd.webp"
                />
                <div className="flex relative z-20 h-full w-full flex-col items-start gap-4 p-8 lg:flex-row justify-between">
                  <div className="flex items-between relative z-20 w-full flex-row lg:my-auto">
                    <div className="flex max-w-[560px] flex-col gap-1 lg:gap-2">
                      <h3 className="text-[20px] lg:text-[28px] font-[600] leading-normal text-gray-900">
                        Automate your LP strategy
                      </h3>
                      <p className="text-[18px] lg:text-[21px] font-[550] leading-normal tracking-[-0.09px] lg:tracking-[-0.1px] text-gray-600">
                        Set it and forget it with auto-compound, rebalancing, and alerts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Cards */}
          <div className="mx-auto max-w-[1100px] px-4 py-16 lg:pt-16 lg:pb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 - Position Management */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <span className="text-5xl md:text-6xl font-bold text-gray-300">1</span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">
                  Position Management
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Fine-tune collateral ratios and borrowing limits with precision. Full control over your LP positions.
                </p>
              </div>

              {/* Card 2 - API Access */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <span className="text-5xl md:text-6xl font-bold text-gray-300">2</span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">
                  API Access
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Connect via high-performance APIs for programmatic LP management and automated strategies.
                </p>
              </div>

              {/* Card 3 - Yield Optimizer */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <span className="text-5xl md:text-6xl font-bold text-gray-300">3</span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">
                  Yield Optimizer
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Maximize returns with auto-compounding strategies. Set it and forget it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
