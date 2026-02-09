"use client"

import Link from "next/link"
import Image from "next/image"
import HomeHero from "@/components/home-hero"
import SeeItInActionSection from "@/components/SeeItInActionSection"
import ManageCryptoSection from "@/components/ManageCryptoSection"
import EarlyAccessCtaBox from "@/components/EarlyAccessCtaBox"

export default function WebappPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero section */}
      <HomeHero />

      {/* See It In Action - dashboard video */}
      <SeeItInActionSection />

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

            {/* Financing Section */}
            <section>
              <div className="flex flex-col items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-center">Financing</h2>
                <p className="text-gray-600 text-center text-balance">
                  Maximize capital efficiency with flexible financing.
                </p>
              </div>

              {/* Hero Image */}
              <div className="w-full mb-6">
                <img
                  src="https://assets-cms.kraken.com/images/51n36hrp/facade/28d0735d033c2d44d6cb337e78eb036fb75bde4f-3756x2088.jpg?w=1536&fit=min"
                  alt="Financing dashboard"
                  className="w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-6 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Flexible settlement</h3>
                  </div>
                  <p className="text-gray-600">
                    Deploy a single line of credit to access liquidity across multiple venues.
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Unlock capital efficiency</h3>
                  </div>
                  <p className="text-gray-600">
                    Borrow against assets in custody for leverage and shorting, and access our bespoke financing solutions.
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-fuchsia-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-fuchsia-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Retain control</h3>
                  </div>
                  <p className="text-gray-600">
                    Pledge assets in your custody vault as collateral to minimize counterparty risk.
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Earn while you borrow</h3>
                  </div>
                  <p className="text-gray-600">
                    Enhance your returns by generating yield on assets pledged as collateral, with distributions credited directly into your vault.
                  </p>
                </div>
              </div>

              <p className="text-gray-500 text-sm text-center mt-8">
                Subject to risk assessment and availability
              </p>
            </section>

            {/* New Section */}
            <section>
              <div className="flex flex-col items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-center">New Section Title</h2>
                <p className="text-gray-600 text-center text-balance">
                  Add your subtitle here.
                </p>
              </div>

              {/* Hero Image */}
              <div className="w-full mb-6">
                <img
                  src="https://assets-cms.kraken.com/images/51n36hrp/facade/28d0735d033c2d44d6cb337e78eb036fb75bde4f-3756x2088.jpg?w=1536&fit=min"
                  alt="Section dashboard"
                  className="w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-6 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Feature 1</h3>
                  </div>
                  <p className="text-gray-600">
                    Description for feature 1.
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Feature 2</h3>
                  </div>
                  <p className="text-gray-600">
                    Description for feature 2.
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-fuchsia-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-fuchsia-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Feature 3</h3>
                  </div>
                  <p className="text-gray-600">
                    Description for feature 3.
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Feature 4</h3>
                  </div>
                  <p className="text-gray-600">
                    Description for feature 4.
                  </p>
                </div>
              </div>

              <p className="text-gray-500 text-sm text-center mt-8">
                Subject to risk assessment and availability
              </p>
            </section>
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

          {/* Manage crypto on your terms */}
          <ManageCryptoSection />

          {/* Early Access CTA (with phone mockup) */}
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
            <EarlyAccessCtaBox />
          </div>
        </div>
      </div>
    </div>
  )
}
