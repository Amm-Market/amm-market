"use client"

/**
 * HeroSection - The main landing page hero component.
 * 
 * @description
 * This component renders the complete landing page content including:
 * - Hero headline with email signup CTA
 * - Trusted by logo marquee
 * - "How borrowing works" 3-step process
 * - Dashboard video preview with custom controls
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
import { useState, useRef, useEffect } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { LazySection } from "@/components/ui/lazy-section"
import { DeFiTerm } from "@/components/defi-term"

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

// Tab configuration for dashboard section
const dashboardTabs = [
  { id: 'deposit' as const, label: 'Deposit', video: 'https://cdn-front.freepik.com/home/anon-rvmp/spaces/spaces_op.webm' },
  { id: 'borrow' as const, label: 'Borrow', video: 'https://cdn-front.freepik.com/home/anon-rvmp/spaces/spaces_op.webm' },
  { id: 'monitor' as const, label: 'Monitor', video: 'https://cdn-front.freepik.com/home/anon-rvmp/spaces/spaces_op.webm' },
  { id: 'claim' as const, label: 'Claim Fees', video: 'https://cdn-front.freepik.com/home/anon-rvmp/spaces/spaces_op.webm' },
]

export default function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeTab, setActiveTab] = useState<'deposit' | 'borrow' | 'monitor' | 'claim'>('deposit')

  // Video control state
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const TESTIMONIAL_DURATION = 6000 // 6 seconds per testimonial

  // Progress bar animation and auto-advance (200ms interval to reduce main-thread work)
  useEffect(() => {
    setProgress(0)
    const startTime = Date.now()

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / TESTIMONIAL_DURATION) * 100, 100)
      setProgress(newProgress)

      if (newProgress >= 100) {
        clearInterval(progressInterval)
        setIsAnimating(true)
        setTimeout(() => {
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
      setCurrentTestimonial(idx)
      setIsAnimating(false)
    }, 300)
  }

  // Video control handlers
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      if (newVolume === 0) {
        setIsMuted(true)
        videoRef.current.muted = true
      } else if (isMuted) {
        setIsMuted(false)
        videoRef.current.muted = false
      }
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const percentage = clickX / rect.width
      const newTime = percentage * duration
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const testimonial = testimonials[currentTestimonial]
  return (
    <section className="pb-12 md:pb-16">
      {/* Hero Section - Phone Left, Text Right (Coinbase style) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-4 pb-8 md:pt-6 md:pb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 lg:min-h-[400px] xl:min-h-[450px]">
          {/* Left Column - Hero Image */}
          <div className="w-full lg:w-[55%] mb-10 lg:mb-0 order-2 lg:order-1">
            <div className="relative w-full max-w-[700px] lg:max-w-[650px] xl:max-w-[700px] mx-auto lg:mx-0">
              <Image
                src="/images/Hero__4_.png"
                alt="Momo app interface"
                width={1400}
                height={1400}
                className="w-full h-auto rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
                priority
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full lg:w-[45%] text-center lg:text-left order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.15] text-gray-900 mb-4 md:mb-6">
              <span className="lg:whitespace-nowrap">Borrow up to 80%</span>
              <br />
              <span className="lg:whitespace-nowrap">against your LPs</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6">
              Get access to loans by using your <DeFiTerm term="lp-position">LP positions</DeFiTerm> as <DeFiTerm term="collateral">collateral</DeFiTerm>.
            </p>

            {/* Email CTA */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
              />
              <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap text-base">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Trusted by top teams Section - inside hero */}
        <div className="flex flex-col items-center pt-8 gap-4 sm:flex-row sm:pt-12 sm:gap-8">
          <h3 className="flex-shrink-0 text-sm font-medium text-gray-500">Trusted by top teams at</h3>
          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent"></div>
            <div className="flex animate-marquee">
              <div className="flex items-center gap-8 px-4">
                {/* Jupiter */}
                <a href="https://jup.ag" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="114" height="41" viewBox="0 0 114 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33398 28.457C10.443 29.9994 11.8654 31.2901 13.5082 32.2442C15.1508 33.1985 16.9768 33.7946 18.8659 33.9936C17.8941 32.5309 16.4811 31.1852 14.7172 30.1607C12.9534 29.1362 11.0854 28.5766 9.33398 28.457Z" fill="#646871" />
                    <path d="M17.0889 26.08C13.6907 24.1057 10.0126 23.6027 7.38086 24.4915C7.63487 25.3312 7.96991 26.144 8.38131 26.919C10.6678 26.866 13.1644 27.487 15.4873 28.8363C17.8105 30.1855 19.5871 32.0477 20.6744 34.0607C21.5518 34.0337 22.4246 33.922 23.2804 33.727C22.7483 31.0009 20.4863 28.0547 17.0889 26.08Z" fill="#646871" />
                    <path d="M46.8005 11.342H49.9235V21.7615C49.9235 22.7247 49.707 23.5613 49.2741 24.2716C48.846 24.9818 48.25 25.5291 47.4864 25.9133C46.7227 26.2977 45.8349 26.4898 44.8231 26.4898C43.9232 26.4898 43.106 26.3317 42.3715 26.0155C41.6418 25.6944 41.0629 25.208 40.6349 24.5562C40.2068 23.8995 39.9952 23.0749 40.0001 22.0826H43.1448C43.1547 22.4767 43.2349 22.8147 43.3857 23.0969C43.5413 23.3741 43.7529 23.5882 44.0205 23.739C44.2929 23.8848 44.614 23.9578 44.9836 23.9578C45.3729 23.9578 45.7011 23.8751 45.9687 23.7097C46.2411 23.5395 46.4478 23.2914 46.5889 22.9655C46.73 22.6396 46.8005 22.2382 46.8005 21.7615V11.342Z" fill="#646871" />
                  </svg>
                </a>
                {/* Bybit */}
                <a href="https://bybit.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="87" height="41" viewBox="0 0 87 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M57.418 26.2178V9.12109H60.8545V26.2178H57.418Z" fill="#646871" />
                    <path d="M17.3672 31.2959H10V14.1992H17.071C20.5075 14.1992 22.5099 16.0721 22.5099 19.0018C22.5099 20.8982 21.2239 22.1237 20.3338 22.5318C21.3963 23.0118 22.7563 24.0921 22.7563 26.3743C22.7563 29.5669 20.5075 31.2959 17.3672 31.2959ZM16.799 17.1773H13.4365V21.1153H16.799C18.2574 21.1153 19.0734 20.3227 19.0734 19.1456C19.0734 17.9698 18.2574 17.1773 16.799 17.1773ZM17.0212 24.1169H13.4365V28.3191H17.0212C18.5792 28.3191 19.3198 27.3592 19.3198 26.2056C19.3198 25.0534 18.5778 24.1169 17.0212 24.1169Z" fill="#646871" />
                    <path d="M33.2382 24.2843V31.2959H29.8259V24.2843L24.5352 14.1992H28.2679L31.5563 21.0904L34.7949 14.1992H38.5277L33.2382 24.2843Z" fill="#646871" />
                  </svg>
                </a>
                {/* Drift */}
                <a href="https://drift.trade" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="92" height="41" viewBox="0 0 92 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.1274 13.3111H44.9942C46.2458 13.3111 47.3766 13.6098 48.3864 14.2071C49.4105 14.7902 50.214 15.6365 50.7971 16.7459C51.3945 17.8552 51.6932 19.1566 51.6932 20.65C51.6932 22.2429 51.4016 23.6154 50.8185 24.7674C50.2353 25.9052 49.4317 26.7728 48.4077 27.3702C47.398 27.9533 46.2601 28.2449 44.9942 28.2449H39.1274V13.3111ZM44.6957 25.7061C45.8477 25.7061 46.8006 25.2795 47.5544 24.4261C48.3082 23.5728 48.6851 22.3141 48.6851 20.65C48.6851 19.626 48.5073 18.7513 48.1518 18.0259C47.7961 17.3006 47.3126 16.7601 46.701 16.4045C46.1037 16.0347 45.4352 15.8498 44.6957 15.8498H42.0929V25.7061H44.6957Z" fill="#646871" />
                    <path d="M58.2963 19.7998C57.699 19.7998 57.2226 20.0487 56.8669 20.5465C56.5114 21.0442 56.3336 21.6274 56.3336 22.2958V28.2481H53.5815V17.4957H56.3336V18.9038C56.547 18.4486 56.8385 18.1002 57.2083 17.8584C57.5781 17.6166 58.0118 17.4957 58.5096 17.4957H59.8323V19.7998H58.2963Z" fill="#646871" />
                  </svg>
                </a>
                {/* Crypto.com */}
                <a href="https://crypto.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="144" height="41" viewBox="0 0 144 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.369 26.654C38.5419 26.654 36.4526 24.4395 36.4526 21.7194C36.4526 18.9993 38.5419 16.7305 41.3865 16.7305C43.1882 16.7305 44.3046 17.3972 45.1871 18.37L43.8366 19.8282C43.1699 19.1262 42.4679 18.6399 41.369 18.6399C39.7837 18.6399 38.6313 20.0087 38.6313 21.6835C38.6313 23.3941 39.8021 24.7629 41.4767 24.7629C42.5037 24.7629 43.2601 24.2766 43.9445 23.5746L45.259 24.8707C44.323 25.9153 43.2241 26.654 41.369 26.654Z" fill="#646871" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M49.3945 26.6513H47.2158V16.746H49.3945V19.0692C49.9887 17.6461 51.0875 16.6734 52.7623 16.746V19.0516H52.6361C50.7274 19.0516 49.3945 20.2943 49.3945 22.8155V26.6513Z" fill="#646871" />
                  </svg>
                </a>
                {/* Backpack */}
                <a href="https://backpack.app" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="128" height="41" viewBox="0 0 128 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.813 10.7152C18.6853 10.7152 19.5036 10.8321 20.2611 11.049C19.5194 9.32038 17.9795 8.82812 16.2656 8.82812C14.5483 8.82812 13.0056 9.32231 12.2656 11.0592C13.0176 10.8347 13.8324 10.7152 14.7017 10.7152H17.813ZM14.5022 12.4507C10.36 12.4507 8 15.7093 8 19.7289V23.8581C8 24.2601 8.33579 24.5781 8.75 24.5781H23.75C24.1642 24.5781 24.5 24.2601 24.5 23.8581V19.7289C24.5 15.7093 21.7556 12.4507 17.6135 12.4507H14.5022ZM16.2441 19.7647C17.6939 19.7647 18.8691 18.5894 18.8691 17.1397C18.8691 15.6899 17.6939 14.5147 16.2441 14.5147C14.7944 14.5147 13.6191 15.6899 13.6191 17.1397C13.6191 18.5894 14.7944 19.7647 16.2441 19.7647ZM8 27.0051C8 26.6033 8.33579 26.2773 8.75 26.2773H23.75C24.1642 26.2773 24.5 26.6033 24.5 27.0051V31.3721C24.5 32.1761 23.8284 32.8278 23 32.8278H9.5C8.67157 32.8278 8 32.1761 8 31.3721V27.0051Z" fill="#646871" />
                    <path d="M32.8887 27.7393V14.4883H38.4914C39.4045 14.4883 40.1871 14.6424 40.8393 14.9507C41.4914 15.259 41.9895 15.7037 42.3334 16.2847C42.6772 16.8539 42.8491 17.5476 42.8491 18.3658C42.8491 18.9468 42.6891 19.5041 42.3689 20.0377C42.0487 20.5594 41.5211 20.9982 40.7859 21.3539V20.0021C41.4855 20.2748 42.025 20.6009 42.4045 20.9804C42.784 21.3598 43.0448 21.7748 43.1871 22.2254C43.3294 22.6642 43.4005 23.1266 43.4005 23.6128C43.4005 24.9172 42.9677 25.931 42.1021 26.6543C41.2365 27.3776 40.033 27.7393 38.4914 27.7393H32.8887Z" fill="#646871" />
                  </svg>
                </a>
                {/* MoonPay */}
                <a href="https://www.moonpay.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="140" height="41" viewBox="0 0 140 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.2249 14.0266H34.4359L39.905 22.3921L45.417 14.0266H48.6254V29.715H45.4495V18.9562L40.9021 25.8982H38.9625L34.4151 18.9562V29.7228H31.2379L31.2249 14.0266Z" fill="#646871" />
                    <path d="M23.9215 16.8346C24.7711 16.8346 25.5858 16.4971 26.1865 15.8964C26.7872 15.2956 27.1247 14.4809 27.1247 13.6314C27.1247 12.7818 26.7872 11.9671 26.1865 11.3664C25.5858 10.7656 24.7711 10.4282 23.9215 10.4282C23.072 10.4282 22.2572 10.7656 21.6565 11.3664C21.0558 11.9671 20.7183 12.7818 20.7183 13.6314C20.7183 14.4809 21.0558 15.2956 21.6565 15.8964C22.2572 16.4971 23.072 16.8346 23.9215 16.8346Z" fill="#646871" />
                  </svg>
                </a>
                {/* Helius */}
                <a href="https://www.helius.dev" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="133" height="41" viewBox="0 0 133 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.0608 14.9531V20.9903H52.1276V15.3029H55.3478V28.8407H52.1282V23.8685H45.0608V28.8407H41.8406V15.8249L45.0608 14.9531ZM61.178 25.9607H71.0294L70.1594 28.8389H57.9596V15.3005H71.0312L70.1612 18.1793H61.1798V20.6387H69.551V23.5169H61.1798V25.9601L61.178 25.9607ZM76.1978 15.3017V25.9607H85.7006L84.8306 28.8389H72.9782V15.3005H76.1978V15.3017ZM90.3134 15.3017V28.8395H87.0938V15.3011H90.3134V15.3017Z" fill="#646871" />
                  </svg>
                </a>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-8 px-4">
                {/* Jupiter */}
                <a href="https://jup.ag" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="114" height="41" viewBox="0 0 114 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33398 28.457C10.443 29.9994 11.8654 31.2901 13.5082 32.2442C15.1508 33.1985 16.9768 33.7946 18.8659 33.9936C17.8941 32.5309 16.4811 31.1852 14.7172 30.1607C12.9534 29.1362 11.0854 28.5766 9.33398 28.457Z" fill="#646871" />
                    <path d="M17.0889 26.08C13.6907 24.1057 10.0126 23.6027 7.38086 24.4915C7.63487 25.3312 7.96991 26.144 8.38131 26.919C10.6678 26.866 13.1644 27.487 15.4873 28.8363C17.8105 30.1855 19.5871 32.0477 20.6744 34.0607C21.5518 34.0337 22.4246 33.922 23.2804 33.727C22.7483 31.0009 20.4863 28.0547 17.0889 26.08Z" fill="#646871" />
                    <path d="M46.8005 11.342H49.9235V21.7615C49.9235 22.7247 49.707 23.5613 49.2741 24.2716C48.846 24.9818 48.25 25.5291 47.4864 25.9133C46.7227 26.2977 45.8349 26.4898 44.8231 26.4898C43.9232 26.4898 43.106 26.3317 42.3715 26.0155C41.6418 25.6944 41.0629 25.208 40.6349 24.5562C40.2068 23.8995 39.9952 23.0749 40.0001 22.0826H43.1448C43.1547 22.4767 43.2349 22.8147 43.3857 23.0969C43.5413 23.3741 43.7529 23.5882 44.0205 23.739C44.2929 23.8848 44.614 23.9578 44.9836 23.9578C45.3729 23.9578 45.7011 23.8751 45.9687 23.7097C46.2411 23.5395 46.4478 23.2914 46.5889 22.9655C46.73 22.6396 46.8005 22.2382 46.8005 21.7615V11.342Z" fill="#646871" />
                  </svg>
                </a>
                {/* Bybit */}
                <a href="https://bybit.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="87" height="41" viewBox="0 0 87 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M57.418 26.2178V9.12109H60.8545V26.2178H57.418Z" fill="#646871" />
                    <path d="M17.3672 31.2959H10V14.1992H17.071C20.5075 14.1992 22.5099 16.0721 22.5099 19.0018C22.5099 20.8982 21.2239 22.1237 20.3338 22.5318C21.3963 23.0118 22.7563 24.0921 22.7563 26.3743C22.7563 29.5669 20.5075 31.2959 17.3672 31.2959ZM16.799 17.1773H13.4365V21.1153H16.799C18.2574 21.1153 19.0734 20.3227 19.0734 19.1456C19.0734 17.9698 18.2574 17.1773 16.799 17.1773ZM17.0212 24.1169H13.4365V28.3191H17.0212C18.5792 28.3191 19.3198 27.3592 19.3198 26.2056C19.3198 25.0534 18.5778 24.1169 17.0212 24.1169Z" fill="#646871" />
                    <path d="M33.2382 24.2843V31.2959H29.8259V24.2843L24.5352 14.1992H28.2679L31.5563 21.0904L34.7949 14.1992H38.5277L33.2382 24.2843Z" fill="#646871" />
                  </svg>
                </a>
                {/* Drift */}
                <a href="https://drift.trade" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="92" height="41" viewBox="0 0 92 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.1274 13.3111H44.9942C46.2458 13.3111 47.3766 13.6098 48.3864 14.2071C49.4105 14.7902 50.214 15.6365 50.7971 16.7459C51.3945 17.8552 51.6932 19.1566 51.6932 20.65C51.6932 22.2429 51.4016 23.6154 50.8185 24.7674C50.2353 25.9052 49.4317 26.7728 48.4077 27.3702C47.398 27.9533 46.2601 28.2449 44.9942 28.2449H39.1274V13.3111ZM44.6957 25.7061C45.8477 25.7061 46.8006 25.2795 47.5544 24.4261C48.3082 23.5728 48.6851 22.3141 48.6851 20.65C48.6851 19.626 48.5073 18.7513 48.1518 18.0259C47.7961 17.3006 47.3126 16.7601 46.701 16.4045C46.1037 16.0347 45.4352 15.8498 44.6957 15.8498H42.0929V25.7061H44.6957Z" fill="#646871" />
                    <path d="M58.2963 19.7998C57.699 19.7998 57.2226 20.0487 56.8669 20.5465C56.5114 21.0442 56.3336 21.6274 56.3336 22.2958V28.2481H53.5815V17.4957H56.3336V18.9038C56.547 18.4486 56.8385 18.1002 57.2083 17.8584C57.5781 17.6166 58.0118 17.4957 58.5096 17.4957H59.8323V19.7998H58.2963Z" fill="#646871" />
                  </svg>
                </a>
                {/* Crypto.com */}
                <a href="https://crypto.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="144" height="41" viewBox="0 0 144 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.369 26.654C38.5419 26.654 36.4526 24.4395 36.4526 21.7194C36.4526 18.9993 38.5419 16.7305 41.3865 16.7305C43.1882 16.7305 44.3046 17.3972 45.1871 18.37L43.8366 19.8282C43.1699 19.1262 42.4679 18.6399 41.369 18.6399C39.7837 18.6399 38.6313 20.0087 38.6313 21.6835C38.6313 23.3941 39.8021 24.7629 41.4767 24.7629C42.5037 24.7629 43.2601 24.2766 43.9445 23.5746L45.259 24.8707C44.323 25.9153 43.2241 26.654 41.369 26.654Z" fill="#646871" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M49.3945 26.6513H47.2158V16.746H49.3945V19.0692C49.9887 17.6461 51.0875 16.6734 52.7623 16.746V19.0516H52.6361C50.7274 19.0516 49.3945 20.2943 49.3945 22.8155V26.6513Z" fill="#646871" />
                  </svg>
                </a>
                {/* Backpack */}
                <a href="https://backpack.app" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="128" height="41" viewBox="0 0 128 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.813 10.7152C18.6853 10.7152 19.5036 10.8321 20.2611 11.049C19.5194 9.32038 17.9795 8.82812 16.2656 8.82812C14.5483 8.82812 13.0056 9.32231 12.2656 11.0592C13.0176 10.8347 13.8324 10.7152 14.7017 10.7152H17.813ZM14.5022 12.4507C10.36 12.4507 8 15.7093 8 19.7289V23.8581C8 24.2601 8.33579 24.5781 8.75 24.5781H23.75C24.1642 24.5781 24.5 24.2601 24.5 23.8581V19.7289C24.5 15.7093 21.7556 12.4507 17.6135 12.4507H14.5022ZM16.2441 19.7647C17.6939 19.7647 18.8691 18.5894 18.8691 17.1397C18.8691 15.6899 17.6939 14.5147 16.2441 14.5147C14.7944 14.5147 13.6191 15.6899 13.6191 17.1397C13.6191 18.5894 14.7944 19.7647 16.2441 19.7647ZM8 27.0051C8 26.6033 8.33579 26.2773 8.75 26.2773H23.75C24.1642 26.2773 24.5 26.6033 24.5 27.0051V31.3721C24.5 32.1761 23.8284 32.8278 23 32.8278H9.5C8.67157 32.8278 8 32.1761 8 31.3721V27.0051Z" fill="#646871" />
                    <path d="M32.8887 27.7393V14.4883H38.4914C39.4045 14.4883 40.1871 14.6424 40.8393 14.9507C41.4914 15.259 41.9895 15.7037 42.3334 16.2847C42.6772 16.8539 42.8491 17.5476 42.8491 18.3658C42.8491 18.9468 42.6891 19.5041 42.3689 20.0377C42.0487 20.5594 41.5211 20.9982 40.7859 21.3539V20.0021C41.4855 20.2748 42.025 20.6009 42.4045 20.9804C42.784 21.3598 43.0448 21.7748 43.1871 22.2254C43.3294 22.6642 43.4005 23.1266 43.4005 23.6128C43.4005 24.9172 42.9677 25.931 42.1021 26.6543C41.2365 27.3776 40.033 27.7393 38.4914 27.7393H32.8887Z" fill="#646871" />
                  </svg>
                </a>
                {/* MoonPay */}
                <a href="https://www.moonpay.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="140" height="41" viewBox="0 0 140 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.2249 14.0266H34.4359L39.905 22.3921L45.417 14.0266H48.6254V29.715H45.4495V18.9562L40.9021 25.8982H38.9625L34.4151 18.9562V29.7228H31.2379L31.2249 14.0266Z" fill="#646871" />
                    <path d="M23.9215 16.8346C24.7711 16.8346 25.5858 16.4971 26.1865 15.8964C26.7872 15.2956 27.1247 14.4809 27.1247 13.6314C27.1247 12.7818 26.7872 11.9671 26.1865 11.3664C25.5858 10.7656 24.7711 10.4282 23.9215 10.4282C23.072 10.4282 22.2572 10.7656 21.6565 11.3664C21.0558 11.9671 20.7183 12.7818 20.7183 13.6314C20.7183 14.4809 21.0558 15.2956 21.6565 15.8964C22.2572 16.4971 23.072 16.8346 23.9215 16.8346Z" fill="#646871" />
                  </svg>
                </a>
                {/* Helius */}
                <a href="https://www.helius.dev" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="133" height="41" viewBox="0 0 133 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.0608 14.9531V20.9903H52.1276V15.3029H55.3478V28.8407H52.1282V23.8685H45.0608V28.8407H41.8406V15.8249L45.0608 14.9531ZM61.178 25.9607H71.0294L70.1594 28.8389H57.9596V15.3005H71.0312L70.1612 18.1793H61.1798V20.6387H69.551V23.5169H61.1798V25.9601L61.178 25.9607ZM76.1978 15.3017V25.9607H85.7006L84.8306 28.8389H72.9782V15.3005H76.1978V15.3017ZM90.3134 15.3017V28.8395H87.0938V15.3011H90.3134V15.3017Z" fill="#646871" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-transparent to-white"></div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200"></div>

      {/* AMM Market Reimagined Section */}
      <div className="mx-auto max-w-5xl px-6 lg:px-0 py-16 md:py-24">
        <h2
          className="max-w-[800px] text-xl sm:text-2xl md:text-3xl font-semibold leading-[1.5] text-gray-900 animate-fade-in"
          style={{ animationFillMode: 'both' }}
        >
          <span className="text-gray-400">Aave first introduced AMM Markets in 2020.</span>{" "}
          Now we're relaunching it on Aave v4, bigger, bolder, and designed for the entire DeFi liquidity. Any LP position, across any DEX and any pool, can now serve as collateral to unlock a credit line.{" "}
          <span className="text-gray-400">Seamless access to capital while keeping your positions fully active.</span>
        </h2>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6 lg:px-0">
        <div className="border-t border-gray-100"></div>
      </div>

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

      {/* Dashboard Section - Tabbed Video (lazy-loaded to avoid blocking LCP) */}
      <LazySection minHeight="400px">
        <div id="dashboard" className="mx-auto max-w-5xl px-6 lg:px-0 py-16 md:py-24">
          {/* Header Row - Title left, Tabs right on lg+ */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 lg:mb-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                See It In Action
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Manage your LP positions without leaving the dashboard.
              </p>
            </div>

            {/* Tab Buttons - Desktop (lg+) */}
            <div className="hidden lg:flex gap-2" role="tablist">
              {dashboardTabs.map((tab) => (
                <button
                  key={tab.id}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-6 border rounded-full bg-white text-sm transition-all hover:border-gray-400 hover:text-gray-900 whitespace-nowrap ${activeTab === tab.id
                      ? 'opacity-100 border-gray-900 text-gray-900 font-medium'
                      : 'opacity-80 border-gray-300 text-gray-600'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Buttons - Mobile */}
          <div className="flex lg:hidden justify-center gap-1.5 sm:gap-2 mb-6" role="tablist">
            {dashboardTabs.map((tab) => (
              <button
                key={`mobile-${tab.id}`}
                aria-selected={activeTab === tab.id}
                role="tab"
                onClick={() => setActiveTab(tab.id)}
                className={`py-1.5 px-2.5 sm:py-2 sm:px-5 border rounded-full bg-white text-xs sm:text-sm transition-all hover:border-gray-400 hover:text-gray-900 whitespace-nowrap ${activeTab === tab.id
                    ? 'opacity-100 border-gray-900 text-gray-900 font-medium'
                    : 'opacity-80 border-gray-300 text-gray-600'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative flex flex-col gap-6 md:gap-8 items-center">
            {/* Video Container */}
            <div className="w-full aspect-video overflow-hidden rounded-xl md:rounded-2xl bg-black">
              <div className="relative w-full max-w-full h-full group">
                <video
                  key={activeTab}
                  ref={videoRef}
                  className="relative z-10 block w-full h-full object-cover"
                  height="100%"
                  width="100%"
                  loop
                  muted={isMuted}
                  playsInline
                  preload="none"
                  src={dashboardTabs.find((tab) => tab.id === activeTab)?.video}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Center Play/Pause Overlay - visible on mobile, hover on desktop */}
                <div
                  className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                  onClick={togglePlayPause}
                  role="button"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && togglePlayPause()}
                >
                  <div className="bg-black/40 backdrop-blur-sm rounded-full p-4 hover:bg-black/60 transition-colors">
                    {isPlaying ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Bottom Control Bar - always visible on mobile, hover on desktop */}
                <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col gap-2">
                    {/* Timeline/Progress Bar - larger touch target on mobile */}
                    <div
                      className="w-full h-3 md:h-1.5 bg-white/30 rounded-full cursor-pointer group/timeline"
                      onClick={handleSeek}
                      role="slider"
                      aria-label="Video progress"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={duration > 0 ? Math.round((currentTime / duration) * 100) : 0}
                    >
                      <div
                        className="h-full bg-blue-500 rounded-full relative"
                        style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/timeline:opacity-100 transition-opacity"></div>
                      </div>
                    </div>

                    {/* Controls Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Play/Pause Button */}
                        <button
                          onClick={togglePlayPause}
                          className="text-white hover:text-blue-400 transition-colors"
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                          {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="6" y="4" width="4" height="16"></rect>
                              <rect x="14" y="4" width="4" height="16"></rect>
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          )}
                        </button>

                        {/* Time Display */}
                        <span className="text-white text-xs font-mono">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Volume Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={toggleMute}
                            className="text-white hover:text-blue-400 transition-colors"
                            aria-label={isMuted ? "Unmute video" : "Mute video"}
                          >
                            {isMuted || volume === 0 ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                <line x1="17" y1="9" x2="23" y2="15"></line>
                              </svg>
                            ) : volume < 0.5 ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              </svg>
                            )}
                          </button>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="w-16 h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                            aria-label="Volume"
                          />
                        </div>

                        {/* Fullscreen Button */}
                        <button
                          onClick={() => videoRef.current?.requestFullscreen()}
                          className="text-white hover:text-blue-400 transition-colors"
                          aria-label="Enter fullscreen"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                            <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                            <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                            <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

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
                  <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
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
                  <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                    No. Your <DeFiTerm term="lp">LP</DeFiTerm> remains in the pool and continues earning trading fees. Amm Market uses your LP shares as <DeFiTerm term="collateral">collateral</DeFiTerm> without removing liquidity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                  <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
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
                  <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                    Up to 70% of your LP&apos;s value, depending on pool type, volatility, and <DeFiTerm term="oracle">oracle</DeFiTerm> confidence. No minimum amounts—$10M in <DeFiTerm term="collateral">collateral</DeFiTerm> means up to $7M available to borrow.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                  <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
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
                  <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                    If your <DeFiTerm term="ltv">loan-to-value ratio</DeFiTerm> exceeds the <DeFiTerm term="liquidation-threshold">liquidation threshold</DeFiTerm>, part of your position may be <DeFiTerm term="liquidation">liquidated</DeFiTerm> to maintain system solvency.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                  <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
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
                  <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                    Yes. Each <DeFiTerm term="lp-position">LP position</DeFiTerm> is managed independently with isolated risk. System-wide safety is enforced through Aave v4&apos;s <DeFiTerm term="hub">Hub</DeFiTerm>-and-<DeFiTerm term="spoke">Spoke</DeFiTerm> architecture.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                  <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
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
                  <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                    Yes. <DeFiTerm term="repay">Repay</DeFiTerm> anytime, reduce your <DeFiTerm term="borrow">borrow</DeFiTerm>, or <DeFiTerm term="withdraw">withdraw</DeFiTerm> your LP once debt is cleared.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </LazySection>

        {/* Final CTA Section - Lazy loaded */}
        <LazySection minHeight="300px">
          <div className="py-16 md:py-20 border-t border-gray-100">
            <div className="flex flex-col items-center text-center gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                Ready to unlock your LP's potential?
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-lg">
                Join the waitlist and be first to access LP-backed borrowing on Aave v4.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Join waitlist
                </button>
              </form>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="py-12 md:py-16 border-t border-gray-200">
            <div className="space-y-4 text-xs text-gray-500">
              <p>
                Borrowing against LP tokens involves risk, including liquidation if market conditions move against your position. Amm Market does not custody your funds, rehypothecate LP positions, or alter how your liquidity operates on underlying AMMs. Loan terms, interest rates, and collateral values are enforced on-chain using transparent oracle systems and automated risk parameters. You remain in full control of your position at all times and can repay or adjust collateral whenever you choose. Only borrow amounts you are comfortable maintaining through market volatility.
              </p>
              <p>
                This material is for informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy, (ii) intended to provide accounting, legal, or tax advice, or investment recommendations or (iii) an official statement of Coinbase. Consult your advisors before making any investment decision. No representation or warranty is made, expressed or implied with respect to the accuracy of the information or to the future performance of any digital asset, financial instrument or other market or economic measure. Coinbase may have financial interests in, or relationships with, some of the entities and/or publications discussed or referenced in the materials. Coinbase does not endorse or approve links or third-party websites that may be provided in the materials.
              </p>
            </div>
          </div>
        </LazySection>
      </div>
    </section>
  )
}

