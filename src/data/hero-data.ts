/**
 * Hero Section Data
 * 
 * @description
 * Static data used in the hero section of the landing page.
 * Separated from the component for better maintainability and tree-shaking.
 * 
 * @module data/hero-data
 */

import type { Pool, Testimonial, DashboardTab } from "@/types"

/**
 * LP Pool data for the animated ticker
 * Displays various LP positions across different DEXes
 */
export const pools: Pool[] = [
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

/**
 * Testimonials from DeFi leaders
 * Featured quotes about LP collateral and AMM Market
 */
export const testimonials: Testimonial[] = [
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

/**
 * Dashboard tab configuration
 * Controls the video player section tabs
 */
export const dashboardTabs: DashboardTab[] = [
  { id: 'deposit', label: 'Deposit', video: 'https://cdn-front.freepik.com/home/anon-rvmp/spaces/spaces_op.webm' },
  { id: 'borrow', label: 'Borrow', video: 'https://cdn-front.freepik.com/home/anon-rvmp/spaces/spaces_op.webm' },
  { id: 'monitor', label: 'Monitor', video: 'https://cdn-front.freepik.com/home/anon-rvmp/spaces/spaces_op.webm' },
  { id: 'claim', label: 'Claim Fees', video: 'https://cdn-front.freepik.com/home/anon-rvmp/spaces/spaces_op.webm' },
]
