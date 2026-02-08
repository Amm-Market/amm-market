"use client"

import Link from "next/link"
import Image from "next/image"
import WaitlistCTA from "@/components/waitlist-cta"
import HomeHero from "@/components/home-hero"

export default function WebappPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Original landing hero */}
      <HomeHero />

      <main className="flex-1 pt-8 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
          {/* How It Works Section */}
          <section className="pt-8">
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                How It Works
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Two steps to unlock your LP's potential.
              </p>
            </div>

            {/* LP Discovery Section */}
            <div className="relative h-[700px] w-full border border-gray-200 rounded-2xl sm:h-[750px] md:h-[850px] lg:h-[900px] overflow-hidden bg-gradient-to-br from-gray-50 to-white">

              {/* Top text block - upper left */}
              <div className="absolute left-4 top-4 z-20 max-w-[200px] sm:max-w-[220px] md:left-[6%] md:top-8 md:max-w-[260px] lg:left-[10%] lg:top-12 lg:max-w-[280px]">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                  Deposit LP tokens
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                  Add Uniswap or Balancer positions. Keep earning fees while deposited.
                </p>
              </div>

              {/* Mobile/Small curved arrow - from top text to first phone */}
              <svg className="absolute left-[30%] top-[80px] block sm:left-[28%] md:hidden" width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 5 C 50 5, 75 40, 75 95"
                  stroke="#9CA3AF"
                  strokeWidth="1"
                  fill="none"
                />
                <polygon points="68,90 82,98 75,87" fill="#9CA3AF" />
              </svg>

              {/* iPhone 16 Mockups - overlapping, second phone BEHIND first */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] w-[280px] sm:w-[320px] md:w-[450px] lg:w-[520px] h-[400px] sm:h-[450px] md:h-[580px] lg:h-[650px]">
                {/* Desktop/Tablet curved arrow - TOP LEFT pointing to first phone */}
                <svg className="absolute -left-[70px] -top-[50px] hidden md:block" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 5 C 70 5, 95 40, 95 95"
                    stroke="#9CA3AF"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <polygon points="88,90 102,98 95,87" fill="#9CA3AF" />
                </svg>

                {/* Desktop/Tablet curved arrow - BOTTOM RIGHT pointing to second phone */}
                <svg className="absolute -right-[70px] -bottom-[50px] hidden md:block" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M95 95 C 30 95, 5 60, 5 5"
                    stroke="#9CA3AF"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <polygon points="-2,12 12,2 5,15" fill="#9CA3AF" />
                </svg>

                {/* Second iPhone 16 - BEHIND, lower position, linked to second text (bottom-right) */}
                <div className="absolute right-0 top-[20%] sm:top-[18%] md:top-[15%] w-[140px] sm:w-[160px] md:w-[220px] lg:w-[250px] rotate-[-4deg] z-10">
                  {/* iPhone 16 Frame */}
                  <div className="relative bg-[#1a1a1a] rounded-[32px] sm:rounded-[36px] md:rounded-[46px] lg:rounded-[50px] p-[5px] sm:p-[6px] md:p-[9px] lg:p-[10px] shadow-2xl">
                    {/* Side button - right */}
                    <div className="absolute -right-[2px] top-[70px] sm:top-[80px] md:top-[110px] lg:top-[120px] w-[2px] md:w-[3px] h-[40px] sm:h-[50px] md:h-[65px] lg:h-[70px] bg-[#2a2a2a] rounded-r-sm" />
                    {/* Volume buttons - left */}
                    <div className="absolute -left-[2px] top-[55px] sm:top-[65px] md:top-[85px] lg:top-[95px] w-[2px] md:w-[3px] h-[20px] sm:h-[25px] md:h-[32px] lg:h-[35px] bg-[#2a2a2a] rounded-l-sm" />
                    <div className="absolute -left-[2px] top-[85px] sm:top-[100px] md:top-[125px] lg:top-[140px] w-[2px] md:w-[3px] h-[20px] sm:h-[25px] md:h-[32px] lg:h-[35px] bg-[#2a2a2a] rounded-l-sm" />
                    {/* Action button - left */}
                    <div className="absolute -left-[2px] top-[38px] sm:top-[45px] md:top-[55px] lg:top-[60px] w-[2px] md:w-[3px] h-[14px] sm:h-[16px] md:h-[20px] lg:h-[22px] bg-[#2a2a2a] rounded-l-sm" />

                    {/* Screen container */}
                    <div className="relative bg-black rounded-[27px] sm:rounded-[30px] md:rounded-[38px] lg:rounded-[42px] overflow-hidden">
                      {/* Dynamic Island */}
                      <div className="absolute top-[5px] sm:top-[6px] md:top-[9px] lg:top-[10px] left-1/2 -translate-x-1/2 w-[50px] sm:w-[60px] md:w-[90px] lg:w-[100px] h-[16px] sm:h-[20px] md:h-[27px] lg:h-[30px] bg-black rounded-full z-10" />

                      {/* Screen placeholder */}
                      <div className="relative w-full aspect-[9/19.5] bg-gradient-to-b from-gray-100 to-gray-200">
                        <Image
                          src="/images/phone-screen-2.png"
                          alt="Unlock credit line"
                          fill
                          className="object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-[10px] sm:text-xs md:text-sm">
                          Screen 2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* First iPhone 16 - IN FRONT, linked to first text (top-left) */}
                <div className="absolute left-0 top-0 w-[140px] sm:w-[160px] md:w-[220px] lg:w-[250px] rotate-[6deg] z-20">
                  {/* iPhone 16 Frame */}
                  <div className="relative bg-[#1a1a1a] rounded-[32px] sm:rounded-[36px] md:rounded-[46px] lg:rounded-[50px] p-[5px] sm:p-[6px] md:p-[9px] lg:p-[10px] shadow-2xl">
                    {/* Side button - right */}
                    <div className="absolute -right-[2px] top-[70px] sm:top-[80px] md:top-[110px] lg:top-[120px] w-[2px] md:w-[3px] h-[40px] sm:h-[50px] md:h-[65px] lg:h-[70px] bg-[#2a2a2a] rounded-r-sm" />
                    {/* Volume buttons - left */}
                    <div className="absolute -left-[2px] top-[55px] sm:top-[65px] md:top-[85px] lg:top-[95px] w-[2px] md:w-[3px] h-[20px] sm:h-[25px] md:h-[32px] lg:h-[35px] bg-[#2a2a2a] rounded-l-sm" />
                    <div className="absolute -left-[2px] top-[85px] sm:top-[100px] md:top-[125px] lg:top-[140px] w-[2px] md:w-[3px] h-[20px] sm:h-[25px] md:h-[32px] lg:h-[35px] bg-[#2a2a2a] rounded-l-sm" />
                    {/* Action button - left */}
                    <div className="absolute -left-[2px] top-[38px] sm:top-[45px] md:top-[55px] lg:top-[60px] w-[2px] md:w-[3px] h-[14px] sm:h-[16px] md:h-[20px] lg:h-[22px] bg-[#2a2a2a] rounded-l-sm" />

                    {/* Screen container */}
                    <div className="relative bg-black rounded-[27px] sm:rounded-[30px] md:rounded-[38px] lg:rounded-[42px] overflow-hidden">
                      {/* Dynamic Island */}
                      <div className="absolute top-[5px] sm:top-[6px] md:top-[9px] lg:top-[10px] left-1/2 -translate-x-1/2 w-[50px] sm:w-[60px] md:w-[90px] lg:w-[100px] h-[16px] sm:h-[20px] md:h-[27px] lg:h-[30px] bg-black rounded-full z-10" />

                      {/* Screen placeholder */}
                      <div className="relative w-full aspect-[9/19.5] bg-gradient-to-b from-gray-100 to-gray-200">
                        <Image
                          src="/images/phone-screen-1.png"
                          alt="Deposit LP tokens"
                          fill
                          className="object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-[10px] sm:text-xs md:text-sm">
                          Screen 1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom text block - lower right */}
              <div className="absolute right-4 bottom-4 z-20 max-w-[200px] sm:max-w-[220px] text-right md:right-[6%] md:bottom-8 md:max-w-[260px] lg:right-[10%] lg:bottom-12 lg:max-w-[280px]">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                  Unlock credit line
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                  Borrow instantly via Aave v4. Repay anytime, collect fees freely.
                </p>
              </div>

              {/* Mobile/Small curved arrow - from bottom text to second phone */}
              <svg className="absolute right-[30%] bottom-[70px] block sm:right-[28%] md:hidden" width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M75 95 C 25 95, 5 60, 5 5"
                  stroke="#9CA3AF"
                  strokeWidth="1"
                  fill="none"
                />
                <polygon points="-2,10 12,2 5,13" fill="#9CA3AF" />
              </svg>
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

          {/* Supported Wallets */}
          <section>
            <div className="max-w-[650px] mb-6">
              <h2 className="text-2xl font-bold">Supported Wallets</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["MetaMask", "Rainbow", "Coinbase", "WalletConnect"].map((wallet) => (
                <div key={wallet} className="p-4 border border-gray-200 rounded-xl text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-600">{wallet[0]}</span>
                  </div>
                  <p className="font-medium text-gray-900 text-sm">{wallet}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <WaitlistCTA />
        </div>
      </main>
    </div>
  )
}
