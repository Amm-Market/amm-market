"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Playfair_Display } from "next/font/google"
import { TrendingUp, Zap, Blocks, Coins, ChevronLeft, ChevronRight } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-playfair"
})

const testimonials = [
  {
    quote: "Using LP tokens as collateral is a natural step",
    highlight: "toward composable, efficient, and scalable decentralized finance.",
    ending: "",
    author: "Vitalik Buterin – Ethereum",
    image: "https://i.pravatar.cc/435?img=1"
  },
  {
    quote: "Enabling LP tokens to be used as collateral",
    highlight: "unlocks new avenues for liquidity and capital efficiency.",
    ending: "",
    author: "Stani Kulechov – Aave",
    image: "https://i.pravatar.cc/435?img=2"
  },
  {
    quote: "LP tokens aren't just positions—they're assets.",
    highlight: "Unlocking their potential as collateral will change how people use DeFi.",
    ending: "",
    author: "Andre Cronje – Yearn Finance",
    image: "https://i.pravatar.cc/435?img=3"
  },
  {
    quote: "Tokenized positions, like LP tokens, can serve as powerful collateral,",
    highlight: "creating more flexible and efficient lending markets.",
    ending: "",
    author: "Marcus – Balancer",
    image: "https://i.pravatar.cc/435?img=4"
  },
  {
    quote: "LP tokens are the backbone of capital-efficient DeFi strategies,",
    highlight: "allowing users to do more with the liquidity they already provide.",
    ending: "",
    author: "Robert Leshner – Compound Finance",
    image: "https://i.pravatar.cc/435?img=5"
  }
]

export default function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[currentTestimonial]
  return (
    <section className="pb-16 md:pb-32">
      {/* New Promotional Banner Section */}
      <div className="mb-8 md:mb-12">
        <div className="mx-auto max-w-5xl space-y-6 px-6 lg:px-0 text-center">
          {/* Headline */}
          <h1 className={`${playfairDisplay.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-[0.9] text-gray-900 font-normal mb-8 md:mb-12`}>
            Borrow up to <span className="font-black">70%</span>
            <br />
            of your LP portfolio
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get access to funds at 5% APR by using your LP positions as collateral.
            <br />
            Keep earning trading fees while your assets remain productive.
          </p>

          {/* Testnet Live Logo Section */}
          <div className="mt-8 md:mt-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
              <p className="text-xs sm:text-sm text-gray-500">Testnet Live with:</p>
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 md:gap-8">
                <img
                  src="https://raw.githubusercontent.com/Uniswap/brand-kit/main/logo/logo.svg"
                  alt="Uniswap"
                  className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                <img
                  src="https://raw.githubusercontent.com/balancer-labs/frontend-v2/master/public/logo.svg"
                  alt="Balancer"
                  className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                <img
                  src="https://curve.fi/logo.svg"
                  alt="Curve"
                  className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LP Discovery Section */}
      <div className="relative h-[700px] w-full border-b border-gray-200 sm:h-[750px] md:h-[850px] lg:h-[900px] overflow-hidden">

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

      {/* Existing Content */}
      <div className="mx-auto max-w-5xl space-y-12 px-6 lg:px-0">
        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
          <div className="aspect-88/36 relative">
            <Image
              alt="Drive web app interface"
              width={1024}
              height={612}
              className="w-full h-full object-cover rounded-xl"
              src="https://studio.uxpincdn.com/studio/wp-content/uploads/2024/01/drive-web-app-1024x612.png.webp"
              priority
              onError={(e) => {
                // Fallback handling
                e.currentTarget.style.display = "none"
              }}
            />
          </div>
        </div>

        {/* Stake Growth Section */}
        <div className="flex flex-col pt-24 md:pt-32 gap-8 md:gap-12" style={{ opacity: 1, transform: 'none' }}>
          <div className="flex flex-col gap-6">
            <div className="flex max-w-[600px] flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">Borrow Across DEXs</h2>
              <p className="text-sm md:text-base text-gray-600">
                Momo unlocks $25B of previously locked Liquidity Pools positions and puts them to work via Aave-Spokes rails.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 md:grid-cols-3 md:gap-4">
            {/* Card 1 */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full max-w-[400px] self-center overflow-hidden border border-gray-200 rounded-lg sm:max-w-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-4xl">🔄</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm md:text-base font-semibold text-gray-900">Uniswap – Top DEX Liquidity</span>
                <span className="text-sm md:text-base text-gray-600">Uniswap remains one of the largest liquidity hubs in DeFi, with over $3.9B locked in LP positions across its pools.</span>
              </div>
              <Link
                href="https://sanctum.so/blog/jupsol-solana-liquid-staking-jupiter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm md:text-base text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-colors"
              >
                How JupSOL grew to 5M SOL
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full max-w-[400px] self-center overflow-hidden border border-gray-200 rounded-lg sm:max-w-full bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <div className="text-4xl">⚖️</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm md:text-base font-semibold text-gray-900">Balancer – Multi‑Asset LP Capital</span>
                <span className="text-sm md:text-base text-gray-600">Balancer’s multi‑asset pools hold hundreds of millions in locked capital, now unleashed to fuel productive LP strategies.</span>
              </div>
              <Link
                href="https://sanctum.so/blog/inf-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm md:text-base text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-colors"
              >
                Learn more about INF
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full max-w-[400px] self-center overflow-hidden border border-gray-200 rounded-lg sm:max-w-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-4xl">📈</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm md:text-base font-semibold text-gray-900">Curve – Deep Stablecoin Pools</span>
                <span className="text-sm md:text-base text-gray-600">Curve’s stablecoin‑focused pools hold over $2.1B in liquidity, making it one of the most capital‑efficient markets in DeFi.</span>
              </div>
              <Link
                href="https://solana.org/delegation-program"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm md:text-base text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-colors"
              >
                Learn more about SFDP
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-col gap-8 md:flex-row md:gap-12">
          {/* Left Column: Title & Description */}
          <div className="top-0 flex flex-1 flex-col pt-24 gap-4 md:sticky md:self-start">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                Borrow with Confidence
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Tap into Solana's native revenue streams: inflation, MEV, block rewards, and staking rewards every epoch.
              </p>
            </div>
          </div>

          {/* Right Column: Reward Cards */}
          <div className="grid w-full sm:grid-cols-2 sm:gap-6 md:max-w-[480px] md:grid-cols-1 md:gap-0 md:pt-24">

            {/* Inflation Rewards */}
            <div className="flex flex-row border-b border-gray-200 pb-6 gap-3 sm:flex-col md:flex-row md:px-3 pt-0">
              <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-md bg-blue-100">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm md:text-base font-semibold text-gray-900">Secure and Seamless</span>
                <span className="text-sm md:text-base text-gray-600">Momo dynamically tracks pool composition and volatility to adjust loan-to-value ratios appropriately.</span>
              </div>
            </div>

            {/* MEV Rewards */}
            <div className="flex flex-row border-b border-gray-200 pb-6 gap-3 sm:flex-col md:flex-row md:px-3 pt-6 sm:pt-0">
              <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-md bg-yellow-100">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm md:text-base font-semibold text-gray-900">Up to 10X Leverage</span>
                <span className="text-sm md:text-base text-gray-600">Increase your exposure by effectively trading on margin with borrowed capital.</span>
              </div>
            </div>

            {/* Block Rewards */}
            <div className="flex flex-row border-b border-gray-200 pb-6 gap-3 sm:flex-col md:flex-row md:px-3 pt-6 sm:pt-0">
              <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-md bg-green-100">
                <Blocks className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm md:text-base font-semibold text-gray-900">Trading Fees</span>
                <span className="text-sm md:text-base text-gray-600">Set your collateral's price range and earn trading fees while you borrow.</span>
              </div>
            </div>

            {/* Staking Rewards */}
            <div className="flex flex-row border-b-0 pb-6 gap-3 sm:flex-col md:flex-row md:px-3 pt-6 sm:pt-0">
              <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-md bg-purple-100">
                <Coins className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm md:text-base font-semibold text-gray-900">Instant Refinance</span>
                <span className="text-sm md:text-base text-gray-600">Switch positions to take advantage of rates, liquidations and more.</span>
              </div>
            </div>

          </div>
        </div>

        {/* Partner Revenue Section */}
        <div className="flex flex-col pb-[50px] pt-[100px] gap-8 md:gap-12" style={{ opacity: 1, transform: 'none' }}>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              Borrow From Any Pool
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Unlock liquidity from a wide range of supported LP pools.
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
              <div className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#FFE5AE] to-[#FFD069] p-2 text-center rounded-lg h-[150px] sm:h-auto">
                <div className="flex size-full flex-col items-center justify-center bg-[#FFC547] rounded-md">
                  <h4 className="text-base font-medium leading-normal text-yellow-600 md:text-lg">
                    <span>Over</span>
                    <div className="flex items-center text-[32px] font-bold text-gray-900 md:gap-1 md:text-[56px]">
                      <svg width="40" height="75" viewBox="0 0 40 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-[75px]">
                        <path d="M10.2927 18.5664C9.54631 24.3143 14.1566 29.6482 14.1566 29.6482C14.1566 29.6482 19.9771 25.6628 20.7233 19.9149C21.4699 14.1669 16.8597 8.83301 16.8597 8.83301C16.8597 8.83301 11.0391 12.8184 10.2927 18.5664Z" stroke="black" strokeWidth="4" strokeLinejoin="round"></path>
                        <path d="M4.82219 37.8831C7.25837 43.1446 14.0075 45.2096 14.0075 45.2096C14.0075 45.2096 16.8065 38.7434 14.3705 33.4818C11.9343 28.22 5.18525 26.1553 5.18525 26.1553C5.18525 26.1553 2.38602 32.6212 4.82219 37.8831Z" stroke="black" strokeWidth="4" strokeLinejoin="round"></path>
                        <path d="M19.2649 58.4754C19.2649 58.4754 12.3428 59.8568 7.69438 56.3806C3.04603 52.9048 2.43164 45.888 2.43164 45.888C2.43164 45.888 9.35376 44.5069 14.0023 47.9827C18.6506 51.4589 19.2649 58.4754 19.2649 58.4754ZM19.2649 58.4754H30.4586C34.3114 58.4754 37.4348 61.5988 37.4348 65.4516C37.4348 69.3044 34.3114 72.4278 30.4586 72.4278H23.4348" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M26.1663 5.81449C21.9295 9.77977 22.0926 16.8214 22.0926 16.8214C22.0926 16.8214 29.1252 17.4341 33.3619 13.4688C37.5987 9.50352 37.4352 2.46187 37.4352 2.46187C37.4352 2.46187 30.403 1.84923 26.1663 5.81449Z" stroke="black" strokeWidth="4" strokeLinejoin="round"></path>
                      </svg>
                      $5M
                      <svg width="40" height="75" viewBox="0 0 40 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-[75px]">
                        <path d="M30.0794 18.5664C30.8258 24.3143 26.2154 29.6482 26.2154 29.6482C26.2154 29.6482 20.3949 25.6628 19.6487 19.9149C18.9022 14.1669 23.5124 8.83301 23.5124 8.83301C23.5124 8.83301 29.333 12.8184 30.0794 18.5664Z" stroke="black" strokeWidth="4" strokeLinejoin="round"></path>
                        <path d="M35.5499 37.8831C33.1137 43.1446 26.3645 45.2096 26.3645 45.2096C26.3645 45.2096 23.5656 38.7434 26.0016 33.4818C28.4378 28.22 35.1868 26.1553 35.1868 26.1553C35.1868 26.1553 37.9861 32.6212 35.5499 37.8831Z" stroke="black" strokeWidth="4" strokeLinejoin="round"></path>
                        <path d="M21.1072 58.4754C21.1072 58.4754 28.0293 59.8568 32.6777 56.3806C37.326 52.9048 37.9404 45.888 37.9404 45.888C37.9404 45.888 31.0183 44.5069 26.3698 47.9827C21.7214 51.4589 21.1072 58.4754 21.1072 58.4754ZM21.1072 58.4754H9.9135C6.0607 58.4754 2.9373 61.5988 2.9373 65.4516C2.9373 69.3044 6.0607 72.4278 9.9135 72.4278H16.9373" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M14.2058 5.81449C18.4425 9.77977 18.2794 16.8214 18.2794 16.8214C18.2794 16.8214 11.2469 17.4341 7.01015 13.4688C2.7734 9.50352 2.93685 2.46187 2.93685 2.46187C2.93685 2.46187 9.96905 1.84923 14.2058 5.81449Z" stroke="black" strokeWidth="4" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    <span>in partner revenue</span>
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

        {/* Trust Built by Design Section */}
        <div className="space-y-6 md:space-y-8 pt-12 md:pt-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              Trust Built by Design
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Every component is designed with trust and safety as the foundation.
            </p>
          </div>
          <div className="block">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Reliable price integrity */}
              <div className="w-full lg:w-[275px] xl:w-[353px] bg-white rounded-xl shadow-[6px_8px_0.6px_0_rgba(0,0,0,0.15)] overflow-hidden" style={{ opacity: 1, transform: 'none' }}>
                <div className="xl:pt-9 xl:px-9 pt-6 px-6 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="block">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                        Reliable Price
                      </h3>
                    </div>
                    <div className="block">
                      <p className="text-sm md:text-base text-gray-600">
                        Chainlink's decentralized oracle network delivers accurate, tamper-resistant pricing for LP collateral.
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full aspect-[4/3] mt-4">
                    <Image
                      fill
                      alt="Reliable price integrity visualization"
                      src="https://via.placeholder.com/288x216?text=Reliable+Price+Integrity"
                      className="object-contain rounded-lg"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Secure at every layer */}
              <div className="w-full lg:w-[275px] xl:w-[353px] bg-white rounded-xl shadow-[6px_8px_0.6px_0_rgba(0,0,0,0.15)] overflow-hidden" style={{ opacity: 1, transform: 'none' }}>
                <div className="xl:pt-9 xl:px-9 pt-6 px-6 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="block">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                        Secure Deposit
                      </h3>
                    </div>
                    <div className="block">
                      <p className="text-sm md:text-base text-gray-600">
                        Multiple layers of protocol-level security protect LP positions, from risk controls to battle-tested smart contract architecture.
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full aspect-[4/3] mt-4">
                    <Image
                      fill
                      alt="Secure at every layer visualization"
                      src="https://via.placeholder.com/288x216?text=Secure+at+Every+Layer"
                      className="object-contain rounded-lg"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Built on trusted foundations */}
              <div className="w-full lg:w-[275px] xl:w-[353px] bg-white rounded-xl shadow-[6px_8px_0.6px_0_rgba(0,0,0,0.15)] overflow-hidden" style={{ opacity: 1, transform: 'none' }}>
                <div className="xl:pt-9 xl:px-9 pt-6 px-6 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="block">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                        Built on Trust
                      </h3>
                    </div>
                    <div className="block">
                      <p className="text-sm md:text-base text-gray-600">
                        Built on Aave v4—one of DeFi's most tested and trusted frameworks—designed to support advanced collateral types.
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full aspect-[4/3] mt-4">
                    <Image
                      fill
                      alt="Built on trusted foundations visualization"
                      src="https://via.placeholder.com/288x216?text=Built+on+Trusted+Foundations"
                      className="object-contain rounded-lg"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="flex flex-col items-center gap-14 lg:gap-20 pt-12 md:pt-16 pb-6">
          <div className="flex flex-col gap-2 w-full px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              What DeFi Leaders Say
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Hear from the community building the future of decentralized finance.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 max-w-[870px] xl:max-w-[1100px] mx-auto justify-items-center lg:justify-items-start gap-y-6 sm:gap-y-12 min-h-[490px] xl:min-h-[405px] w-full px-6">
            <div className="flex flex-col text-gray-900 gap-8 md:gap-10 order-last lg:order-first justify-between w-full">
              <div style={{ opacity: 1 }} className="transition-opacity duration-300">
                <div className="space-y-6">
                  <div className="block">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-900">
                      "{testimonial.quote}{testimonial.highlight && <span className="font-semibold"> {testimonial.highlight}</span>}{testimonial.ending}"
                    </p>
                  </div>
                  <div className="block">
                    <p className="text-xs md:text-sm leading-tight font-semibold tracking-wider uppercase text-gray-600">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3 mx-auto md:mx-0">
                <button
                  aria-label="Previous testimonial"
                  onClick={prevTestimonial}
                  className="bg-purple-100 text-blue-600 rounded-full w-[32px] h-[32px] flex items-center justify-center hover:bg-purple-200 transition-colors"
                  type="button"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={nextTestimonial}
                  className="bg-purple-100 text-blue-600 rounded-full w-[32px] h-[32px] flex items-center justify-center hover:bg-purple-200 transition-colors"
                  type="button"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="lg:justify-self-end w-full flex justify-center lg:justify-end">
              <div style={{ opacity: 1 }} className="transition-opacity duration-300">
                <div className="relative w-full max-w-[435px] aspect-square">
                  <Image
                    width={435}
                    height={435}
                    alt="Image of a client"
                    src={testimonial.image}
                    className="object-cover rounded-lg w-full h-full"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col pt-24 md:pt-32 gap-8 sm:pb-24 md:flex-row md:gap-12" style={{ opacity: 1, transform: 'none' }}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 md:pt-8 md:flex-shrink-0 md:w-[300px]">
            Frequently asked questions.
          </h3>
          <div className="md:w-[600px] md:flex-shrink-0">
            <Accordion type="single" collapsible orientation="vertical" className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
                  What is Momo's LP token lending?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                  >
                    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                  >
                    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                  Momo allows you to use your Liquidity Pool (LP) tokens from Uniswap, Balancer, and Curve as collateral to borrow funds at competitive rates, while still earning trading fees from your LP positions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
                  What are the borrowing costs and loan-to-value ratios?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                  >
                    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                  >
                    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                  You can borrow up to 70% of your LP portfolio value at 5% APR. Loan-to-value ratios are dynamically adjusted based on pool composition and volatility to ensure security.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
                  How quickly can I borrow against my LP positions?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                  >
                    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                  >
                    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                  Once you connect your wallet and deposit LP tokens, you can borrow funds instantly. The process is seamless and requires no waiting periods.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
                  Is it safe to use LP tokens as collateral?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                  >
                    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                  >
                    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                  Yes. Momo is built on Aave v4, one of DeFi's most tested and trusted frameworks. We use Chainlink oracles for reliable price feeds and implement multiple layers of protocol-level security to protect your positions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
                  Can I still earn trading fees while borrowing?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                  >
                    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                  >
                    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                  Absolutely. Your LP tokens remain in their original pools, so you continue earning trading fees while using them as collateral. This allows you to maximize capital efficiency.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

