"use client"

/**
 * HeroSection - The main landing page hero component.
 * 
 * @description
 * This component renders the complete landing page content including:
 * - Hero headline with email signup CTA
 * - Trusted by logo marquee
 * - "How borrowing works" 3-step process
 * - DEX integration grid
 * - Supported pools ticker
 * - "Get more" benefits section
 * - "Borrow with confidence" security section
 * - Testimonial carousel
 * - FAQ accordion
 * - Final CTA
 * 
 * @todo Decompose into smaller components for better maintainability
 * @see PERFORMANCE_AUDIT.md for decomposition plan
 */

import Image from "next/image"
import { useState, useEffect } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { LazySection } from "@/components/ui/lazy-section"
import { DeFiTerm } from "@/components/defi-term"
import EarlyAccessCtaBox from "@/components/EarlyAccessCtaBox"

// Note: TrendingUp, Zap, Blocks, Coins, ChevronLeft, ChevronRight were imported but unused
// Removed to reduce bundle size

// LP Pool data for the ticker
const pools = [
  // Row 1 - Mixed DEXs
  { token0: { symbol: "ETH", color: "#627EEA" }, token1: { symbol: "USDC", color: "#2775CA" }, dex: "Uniswap v3", tvl: "$245.8M" },
  { token0: { symbol: "WBTC", color: "#F7931A" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Curve", tvl: "$189.2M" },
  { token0: { symbol: "DAI", color: "#F5AC37" }, token1: { symbol: "USDC", color: "#2775CA" }, dex: "Aerodrome", tvl: "$312.5M" },
  { token0: { symbol: "USDT", color: "#26A17B" }, token1: { symbol: "USDC", color: "#2775CA" }, dex: "Curve", tvl: "$428.1M" },
  { token0: { symbol: "stETH", color: "#00A3FF" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Uniswap v2", tvl: "$567.3M" },
  { token0: { symbol: "LINK", color: "#2A5ADA" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Aerodrome", tvl: "$45.6M" },
  // Row 2 - Mixed DEXs
  { token0: { symbol: "UNI", color: "#FF007A" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Uniswap v3", tvl: "$78.4M" },
  { token0: { symbol: "AAVE", color: "#B6509E" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Curve", tvl: "$34.2M" },
  { token0: { symbol: "CRV", color: "#40649F" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Uniswap v2", tvl: "$52.8M" },
  { token0: { symbol: "MKR", color: "#1AAB9B" }, token1: { symbol: "DAI", color: "#F5AC37" }, dex: "Aerodrome", tvl: "$28.9M" },
  { token0: { symbol: "COMP", color: "#00D395" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Curve", tvl: "$19.4M" },
  { token0: { symbol: "SNX", color: "#00D1FF" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Uniswap v3", tvl: "$15.7M" },
  // Row 3 - Mixed DEXs
  { token0: { symbol: "rETH", color: "#EC6F2D" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Curve", tvl: "$234.5M" },
  { token0: { symbol: "cbETH", color: "#0052FF" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Aerodrome", tvl: "$156.8M" },
  { token0: { symbol: "FRAX", color: "#000000" }, token1: { symbol: "USDC", color: "#2775CA" }, dex: "Uniswap v2", tvl: "$89.3M" },
  { token0: { symbol: "LDO", color: "#F69988" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Uniswap v3", tvl: "$42.1M" },
  { token0: { symbol: "RPL", color: "#E8705B" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Curve", tvl: "$31.6M" },
  { token0: { symbol: "OP", color: "#FF0420" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Aerodrome", tvl: "$67.4M" },
  // Row 4 - Mixed DEXs
  { token0: { symbol: "GRT", color: "#6747ED" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Uniswap v2", tvl: "$23.8M" },
  { token0: { symbol: "ARB", color: "#28A0F0" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Uniswap v3", tvl: "$118.5M" },
  { token0: { symbol: "USDC", color: "#2775CA" }, token1: { symbol: "USDT", color: "#26A17B" }, dex: "Curve", tvl: "$512.9M" },
  { token0: { symbol: "wstETH", color: "#00A3FF" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Aerodrome", tvl: "$345.2M" },
  { token0: { symbol: "WETH", color: "#627EEA" }, token1: { symbol: "AERO", color: "#0052FF" }, dex: "Aerodrome", tvl: "$88.7M" },
  { token0: { symbol: "MATIC", color: "#8247E5" }, token1: { symbol: "ETH", color: "#627EEA" }, dex: "Uniswap v3", tvl: "$76.3M" },
]

// Pool Card component for the ticker
function PoolCard({ pool }: { pool: typeof pools[0] }) {
  return (
    <div className="flex-shrink-0 box-border flex flex-row items-center justify-center gap-3 no-underline bg-white hover:bg-gray-50 rounded-lg border border-solid border-gray-200 h-[66px] shadow-sm hover:shadow-md transition duration-150 ease-out px-3 py-2.5">
      <div className="flex flex-col items-start justify-center gap-0.5">
        <div className="flex flex-row items-center gap-1.5">
          {/* Dual token icons */}
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

const testimonials = [
  {
    protocol: "Ethereum",
    quote: "Using LP tokens as collateral is a natural step toward composable finance.",
    highlight: "This unlocks efficient and scalable decentralized financial systems.",
    author: "Vitalik Buterin",
    title: "CO-FOUNDER, ETHEREUM",
    image: "https://i.pravatar.cc/80?img=1"
  },
  {
    protocol: "Aave",
    quote: "Enabling LP tokens to be used as collateral is a game-changer for DeFi.",
    highlight: "It unlocks new avenues for liquidity and capital efficiency.",
    author: "Stani Kulechov",
    title: "FOUNDER & CEO, AAVE",
    image: "https://i.pravatar.cc/80?img=2"
  },
  {
    protocol: "Yearn Finance",
    quote: "LP tokens aren't just positions—they're productive assets in their own right.",
    highlight: "Unlocking their potential as collateral will change how people use DeFi.",
    author: "Andre Cronje",
    title: "FOUNDER, YEARN FINANCE",
    image: "https://i.pravatar.cc/80?img=3"
  },
  {
    protocol: "Balancer",
    quote: "Tokenized positions like LP tokens can serve as powerful collateral.",
    highlight: "This creates more flexible and efficient lending markets for everyone.",
    author: "Marcus",
    title: "CONTRIBUTOR, BALANCER",
    image: "https://i.pravatar.cc/80?img=4"
  },
  {
    protocol: "Compound",
    quote: "LP tokens are the backbone of capital-efficient DeFi strategies today.",
    highlight: "They allow users to do more with the liquidity they already provide.",
    author: "Robert Leshner",
    title: "FOUNDER, COMPOUND FINANCE",
    image: "https://i.pravatar.cc/80?img=5"
  }
]

export default function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [progress, setProgress] = useState(0)

  const TESTIMONIAL_DURATION = 6000 // 6 seconds per testimonial

  // Progress bar animation and auto-advance (200ms interval to reduce main-thread work)
  useEffect(() => {
    const startTime = Date.now()

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / TESTIMONIAL_DURATION) * 100, 100)
      setProgress(newProgress)

      if (newProgress >= 100) {
        clearInterval(progressInterval)
        setIsAnimating(true)
        setTimeout(() => {
          setProgress(0)
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
          setIsAnimating(false)
        }, 300)
      }
    }, 200)

    return () => clearInterval(progressInterval)
  }, [currentTestimonial])

  const handleTestimonialChange = (idx: number) => {
    if (idx === currentTestimonial) return
    setIsAnimating(true)
    setTimeout(() => {
      setProgress(0)
      setCurrentTestimonial(idx)
      setIsAnimating(false)
    }, 300)
  }

  const testimonial = testimonials[currentTestimonial]
  return (
    <section className="marketing-secondary-shell pb-6 md:pb-4">
      {/* How Borrowing Works Section */}
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
          {/* Step 1 */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <span className="text-5xl md:text-6xl font-bold text-gray-300">1</span>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">
              Deposit your LP position
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Deposit your <DeFiTerm term="lp-tokens">LP tokens</DeFiTerm> from any supported <DeFiTerm term="dex">DEX</DeFiTerm>. Your position stays active and continues earning trading fees.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <span className="text-5xl md:text-6xl font-bold text-gray-300">2</span>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">
              Receive your loan instantly
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              USDC will be deposited into your wallet. Borrow up to 80% of your LP value based on pool risk parameters.
            </p>
          </div>
          {/* Step 3 */}
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

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6 lg:px-0">
        <div className="border-t border-gray-100"></div>
      </div>

      {/* Existing Content */}
      <div className="mx-auto max-w-5xl space-y-12 px-6 lg:px-0">

        {/* Borrow Across DEXs Section - Lazy loaded */}
        <LazySection minHeight="400px">
          <div className="flex flex-col pt-16 md:pt-20 gap-8 md:gap-12" style={{ opacity: 1, transform: 'none' }}>
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

        {/* 500+ Supported Pools Section - Lazy loaded */}
        <LazySection minHeight="600px">
          <div className="flex flex-col pt-16 md:pt-20 gap-8 md:gap-12 border-t border-gray-100" style={{ opacity: 1, transform: 'none' }}>
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">500+ Supported Pools</h2>
                <p className="text-sm md:text-base text-gray-600">
                  Access liquidity from 500+ pools across all integrated DEXs.
                </p>
              </div>
            </div>

            {/* LP Pool Ticker */}
            <div className="w-full flex flex-col gap-4 overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
              {/* Row 1 - scroll left */}
              <div className="flex overflow-hidden">
                <div className="flex gap-4 animate-scroll-left">
                  {pools.slice(0, 6).map((pool, i) => (
                    <PoolCard key={`r1-a-${i}`} pool={pool} />
                  ))}
                  {pools.slice(0, 6).map((pool, i) => (
                    <PoolCard key={`r1-b-${i}`} pool={pool} />
                  ))}
                </div>
              </div>
              {/* Row 2 - scroll right */}
              <div className="flex overflow-hidden">
                <div className="flex gap-4 animate-scroll-right">
                  {pools.slice(6, 12).map((pool, i) => (
                    <PoolCard key={`r2-a-${i}`} pool={pool} />
                  ))}
                  {pools.slice(6, 12).map((pool, i) => (
                    <PoolCard key={`r2-b-${i}`} pool={pool} />
                  ))}
                </div>
              </div>
              {/* Row 3 - scroll left */}
              <div className="flex overflow-hidden">
                <div className="flex gap-4 animate-scroll-left-slow">
                  {pools.slice(12, 18).map((pool, i) => (
                    <PoolCard key={`r3-a-${i}`} pool={pool} />
                  ))}
                  {pools.slice(12, 18).map((pool, i) => (
                    <PoolCard key={`r3-b-${i}`} pool={pool} />
                  ))}
                </div>
              </div>
              {/* Row 4 - scroll right */}
              <div className="flex overflow-hidden">
                <div className="flex gap-4 animate-scroll-right-slow">
                  {pools.slice(18, 24).map((pool, i) => (
                    <PoolCard key={`r4-a-${i}`} pool={pool} />
                  ))}
                  {pools.slice(18, 24).map((pool, i) => (
                    <PoolCard key={`r4-b-${i}`} pool={pool} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </LazySection>

        {/* Get More Section - Lazy loaded */}
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
              {/* Card 1 - Borrow Amount */}
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
                  {/* Gauge marks */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[394px]">
                    <div className="relative">
                      {[50, 55, 60, 65, 70, 75, 80].map((val, idx) => (
                        <div key={val} className="absolute top-0 left-0 flex justify-start w-full animate-pulse-soft" style={{ rotate: `${18 + idx * 16}deg`, animationDelay: `${idx * 0.1}s` }}>
                          <span className="text-[10px] font-semibold w-8 text-right">{val}</span>
                          <div className="bg-blue-400 w-[30px] h-[14px] rounded-full ml-1.5 mt-1"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-semibold mt-5 text-center text-gray-900">Maximize your capital</div>
                <div className="text-base text-gray-600 text-center mt-2">Borrow up to 80% of your LP value</div>
              </div>

              {/* Card 2 - Earnings */}
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
              {/* Card 3 - Use Cases */}
              <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-[20px] w-full h-[340px] bg-gray-50">
                  <div className="absolute top-[50px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                    <div className="flex gap-3 w-[280px] px-4 py-3 bg-white rounded-lg border border-gray-200 items-center animate-float-simple" style={{ animationDelay: '0s' }}>
                      <div className="flex items-center justify-center w-11 h-11">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v20m5-17H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"></path>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Leverage trading</span>
                    </div>
                    <div className="flex gap-3 w-[300px] px-4 py-3 bg-blue-500 text-white rounded-lg shadow-sm items-center animate-float-simple" style={{ animationDelay: '0.15s' }}>
                      <div className="flex items-center justify-center w-11 h-11">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"></path>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Yield farming</span>
                    </div>
                    <div className="flex gap-3 w-[280px] px-4 py-3 bg-white rounded-lg border border-gray-200 items-center animate-float-simple" style={{ animationDelay: '0.3s' }}>
                      <div className="flex items-center justify-center w-11 h-11">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 10v7.4a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 17.4V10m20 0V6.6A1.6 1.6 0 0 0 20.4 5H3.6A1.6 1.6 0 0 0 2 6.6V10m20 0H2m4 5h3"></path>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Pay off debt</span>
                    </div>
                    <div className="flex gap-3 w-[280px] px-4 py-3 bg-white rounded-lg border border-gray-200 items-center animate-float-simple" style={{ animationDelay: '0.45s' }}>
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

            {/* Automate your LP strategy */}
            <div className="w-full max-w-[1280px] mx-auto px-4 py-8 mt-12 md:py-8 md:mt-16">
              <div className="flex flex-col items-center gap-[26px] lg:gap-8">
                <div
                  className="group rounded-lg relative z-10 flex min-h-[380px] w-full max-w-[1280px] overflow-hidden h-[520px] sm:h-[560px] lg:h-[620px]"
                  style={{
                    background: "linear-gradient(0deg, rgb(243, 244, 246) -91.67%, rgb(229, 231, 235) 58.64%)",
                  }}
                >
                  <img
                    alt=""
                    className="absolute inset-0 z-0 w-full object-cover mt-[180px] scale-[1.2] sm:mt-[240px] md:top-auto md:scale-100"
                    loading="lazy"
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

        {/* Borrow with Confidence Section - Lazy loaded */}
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
              {/* Card 1 - LP-aware risk models - Concentric Rings */}
              <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
                <div className="relative rounded-[20px] overflow-hidden w-full h-[340px] bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Concentric rings */}
                    <div className="relative w-[180px] h-[180px]">
                      {/* Outer ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-spin-slow"></div>
                      {/* Middle ring */}
                      <div className="absolute inset-[20px] rounded-full border-2 border-blue-300 animate-spin-slow-reverse"></div>
                      {/* Inner ring */}
                      <div className="absolute inset-[40px] rounded-full border-2 border-blue-400 animate-spin-slow"></div>
                      {/* Center shield icon */}
                      <div className="absolute inset-[55px] rounded-full bg-blue-500 flex items-center justify-center animate-pulse-soft">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-white">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Stats at bottom */}
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

              {/* Card 2 - Price-range aware oracles - Chart with range bands */}
              <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
                <div className="relative rounded-[20px] overflow-hidden w-full h-[340px] bg-gray-50">
                  <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[260px]">
                    {/* LIVE badge */}
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-100 border border-blue-200 w-fit mx-auto mb-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                      <span className="text-[10px] font-semibold text-blue-700 uppercase tracking-wider">Live</span>
                    </div>
                    {/* Price display */}
                    <div className="text-center mb-3">
                      <span className="text-3xl font-bold text-blue-600 animate-pulse-soft">$1,847.52</span>
                      <div className="text-xs text-gray-500 mt-1">ETH / USD</div>
                    </div>
                    {/* Chart area */}
                    <div className="relative w-full h-[100px] bg-white rounded-lg border border-gray-200 p-2">
                      {/* Safe range band */}
                      <div className="absolute top-[30%] left-2 right-2 h-[40%] bg-blue-50 border-y border-blue-200"></div>
                      {/* Stylized line chart */}
                      <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)]" viewBox="0 0 300 80" preserveAspectRatio="none">
                        <path className="animate-draw-line" d="M0,60 Q30,50 60,55 T120,35 T180,40 T240,25 T300,30" fill="none" stroke="#3b82f6" strokeWidth="2" />
                        {/* Current price dot */}
                        <circle cx="240" cy="25" r="5" fill="#3b82f6" className="animate-pulse" />
                        <circle cx="240" cy="25" r="2" fill="white" />
                      </svg>
                    </div>
                    {/* Range labels */}
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

              {/* Card 3 - Per-position health checks - Circular gauge */}
              <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-[20px] w-full h-[340px] bg-gray-50">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Circular gauge */}
                    <div className="relative w-[160px] h-[160px]">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        {/* Background arc */}
                        <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round" strokeDasharray="198 66" />
                        {/* Blue arc - 92% filled */}
                        <circle cx="50" cy="50" r="42" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" strokeDasharray="182 82" />
                      </svg>
                      {/* Center content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-blue-600 animate-pulse-soft">92%</span>
                        <span className="text-xs text-green-600 font-medium">Healthy</span>
                      </div>
                    </div>
                    {/* Status indicators */}
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

        {/* About Aave v4 Section - Lazy loaded */}
        <LazySection minHeight="300px">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-16 md:pt-20 items-center border-t border-gray-100">
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                More about Aave v4
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-lg">
                Aave v4 is a next-generation DeFi lending protocol featuring a <DeFiTerm term="hub">Hub</DeFiTerm>-and-<DeFiTerm term="spoke">Spoke</DeFiTerm> architecture that enables cross-chain liquidity and modular risk management. Amm Market leverages Aave v4&apos;s infrastructure to provide secure, permissionless borrowing against <DeFiTerm term="lp-position">LP positions</DeFiTerm>. All loan terms, <DeFiTerm term="liquidation">liquidations</DeFiTerm>, and interest rates are enforced on-chain through battle-tested smart contracts and transparent <DeFiTerm term="oracle">oracle</DeFiTerm> systems.
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

        {/* Testimonial Section - Lazy loaded */}
        <LazySection minHeight="400px">
          <div className="py-16 md:py-20 border-t border-gray-100">
            <div className="flex flex-col lg:flex-row">
              {/* Left: Protocol list */}
              <div className="lg:w-2/5 lg:border-r border-gray-200 lg:pr-8">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleTestimonialChange(idx)}
                    onKeyDown={(e) => e.key === 'Enter' && handleTestimonialChange(idx)}
                    className="cursor-pointer py-4 border-b border-gray-100 last:border-b-0"
                    role="button"
                    tabIndex={0}
                    aria-label={`View testimonial from ${t.author}`}
                    aria-selected={currentTestimonial === idx}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`text-base transition-all duration-300 ${currentTestimonial === idx ? "font-semibold text-gray-900" : "text-gray-500"}`}>
                        {t.protocol}
                      </span>
                      <span className={`text-sm transition-all duration-300 ${currentTestimonial === idx ? "text-blue-600 font-medium" : "text-gray-400"}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="h-0.5 mt-3 w-full bg-gray-200 overflow-hidden">
                      <div
                        className={`h-full bg-blue-600 transition-none ${currentTestimonial === idx ? '' : 'w-0'}`}
                        style={{ width: currentTestimonial === idx ? `${progress}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Quote content */}
              <div className="lg:w-3/5 lg:pl-12 pt-8 lg:pt-0 flex flex-col">
                <div className={`min-h-[200px] md:min-h-[180px] transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                  <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed">
                    &ldquo;{testimonial.quote} <span className="font-semibold">{testimonial.highlight}</span>&rdquo;
                  </blockquote>
                </div>
                <div className={`flex items-center gap-3 mt-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.title}</p>
                  </div>
                </div>
                {/* Pagination dots */}
                <div className="flex gap-2 mt-8 justify-end">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleTestimonialChange(idx)}
                      className={`w-3 h-3 transition-colors duration-300 ${currentTestimonial === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </LazySection>

        {/* FAQ Section - Lazy loaded */}
        <LazySection minHeight="500px">
          <div className="flex flex-col py-16 md:py-20 gap-8 md:flex-row md:gap-12 border-t border-gray-100" style={{ opacity: 1, transform: 'none' }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 md:pt-8 md:flex-shrink-0 md:w-[300px]">
              Frequently asked questions.
            </h3>
            <div className="md:w-[600px] md:flex-shrink-0">
              <Accordion type="single" collapsible orientation="vertical" className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                  <AccordionTrigger className="type-accordion-question group p-0 text-left text-gray-900 hover:underline gap-4 [&>svg.size-4]:hidden">
                    Do I have to sell or exit my LP position?
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
                  <AccordionContent className="type-accordion-answer pt-2 text-gray-600">
                    No. Your <DeFiTerm term="lp">LP</DeFiTerm> remains in the pool and continues earning trading fees. Amm Market uses your LP shares as <DeFiTerm term="collateral">collateral</DeFiTerm> without removing liquidity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                  <AccordionTrigger className="type-accordion-question group p-0 text-left text-gray-900 hover:underline gap-4 [&>svg.size-4]:hidden">
                    How much can I borrow?
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
                  <AccordionContent className="type-accordion-answer pt-2 text-gray-600">
                    Up to 70% of your LP&apos;s value, depending on pool type, volatility, and <DeFiTerm term="oracle">oracle</DeFiTerm> confidence. No minimum amounts—$10M in <DeFiTerm term="collateral">collateral</DeFiTerm> means up to $7M available to borrow.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                  <AccordionTrigger className="type-accordion-question group p-0 text-left text-gray-900 hover:underline gap-4 [&>svg.size-4]:hidden">
                    What happens if my LP value drops?
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
                  <AccordionContent className="type-accordion-answer pt-2 text-gray-600">
                    If your <DeFiTerm term="ltv">loan-to-value ratio</DeFiTerm> exceeds the <DeFiTerm term="liquidation-threshold">liquidation threshold</DeFiTerm>, part of your position may be <DeFiTerm term="liquidation">liquidated</DeFiTerm> to maintain system solvency.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                  <AccordionTrigger className="type-accordion-question group p-0 text-left text-gray-900 hover:underline gap-4 [&>svg.size-4]:hidden">
                    Is my risk isolated?
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
                  <AccordionContent className="type-accordion-answer pt-2 text-gray-600">
                    Yes. Each <DeFiTerm term="lp-position">LP position</DeFiTerm> is managed independently with isolated risk. System-wide safety is enforced through Aave v4&apos;s <DeFiTerm term="hub">Hub</DeFiTerm>-and-<DeFiTerm term="spoke">Spoke</DeFiTerm> architecture.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                  <AccordionTrigger className="type-accordion-question group p-0 text-left text-gray-900 hover:underline gap-4 [&>svg.size-4]:hidden">
                    Can I repay early or close my position?
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
                  <AccordionContent className="type-accordion-answer pt-2 text-gray-600">
                    Yes. <DeFiTerm term="repay">Repay</DeFiTerm> anytime, reduce your <DeFiTerm term="borrow">borrow</DeFiTerm>, or <DeFiTerm term="withdraw">withdraw</DeFiTerm> your LP once debt is cleared.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </LazySection>

        {/* Download App Section - inner rounded box, white CTA */}
        <LazySection minHeight="200px">
          <EarlyAccessCtaBox />
          {/* Disclaimer */}
          <div className="mt-6 md:mt-4 max-w-4xl mx-auto px-4 space-y-3 text-xs text-gray-500 pb-2">
            <p>Borrowing against LP tokens involves risk, including liquidation if market conditions move against your position. Amm Market does not custody your funds, rehypothecate LP positions, or alter how your liquidity operates on underlying AMMs. Loan terms, interest rates, and collateral values are enforced on-chain using transparent oracle systems and automated risk parameters. You remain in full control of your position at all times and can repay or adjust collateral whenever you choose. Only borrow amounts you are comfortable maintaining through market volatility.</p>
            <p>This material is for informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy, (ii) intended to provide accounting, legal, or tax advice, or investment recommendations or (iii) an official statement of Coinbase. Consult your advisors before making any investment decision. No representation or warranty is made, expressed or implied with respect to the accuracy of the information or to the future performance of any digital asset, financial instrument or other market or economic measure. Coinbase may have financial interests in, or relationships with, some of the entities and/or publications discussed or referenced in the materials. Coinbase does not endorse or approve links or third-party websites that may be provided in the materials.</p>
          </div>
        </LazySection>
      </div>
    </section>
  )
}
