/**
 * Shared TypeScript type definitions for AMM Market
 * 
 * @description
 * Centralized type definitions used across components and data files.
 * Import these types to ensure consistency throughout the codebase.
 * 
 * @module types
 */

/**
 * Represents a token in a liquidity pool
 */
export interface Token {
  /** Token symbol (e.g., "ETH", "USDC") */
  symbol: string
  /** Hex color code for the token icon */
  color: string
}

/**
 * Represents a liquidity pool with two tokens
 */
export interface Pool {
  /** First token in the pair */
  token0: Token
  /** Second token in the pair */
  token1: Token
  /** DEX name (e.g., "Uniswap v3", "Curve") */
  dex: string
  /** Total value locked, formatted string (e.g., "$245.8M") */
  tvl: string
}

/**
 * Represents a testimonial quote from a DeFi leader
 */
export interface Testimonial {
  /** Protocol or organization name */
  protocol: string
  /** Main quote text */
  quote: string
  /** Highlighted portion of the quote */
  highlight: string
  /** Author's name */
  author: string
  /** Author's title/role */
  title: string
  /** URL to author's avatar image */
  image: string
}

/**
 * Represents a dashboard tab configuration
 */
export interface DashboardTab {
  /** Unique identifier for the tab */
  id: 'deposit' | 'borrow' | 'monitor' | 'claim'
  /** Display label for the tab */
  label: string
  /** Video URL for the tab content */
  video: string
}

/**
 * Represents a navigation section for scroll spy
 */
export interface Section {
  /** HTML element ID to track */
  id: string
  /** Display title in navigation */
  title: string
}

/**
 * Represents a blog post entry
 */
export interface BlogPost {
  /** Unique identifier */
  id: number
  /** Publication date string */
  date: string
  /** Post title */
  title: string
  /** Short description/excerpt */
  description: string
  /** URL slug */
  slug: string
  /** Featured image path */
  image: string
  /** Category name */
  category: string
}

/**
 * Represents a navigation item in the developer sidebar
 */
export interface NavItem {
  /** Link href */
  href: string
  /** Display label */
  label: string
  /** Lucide icon component */
  icon: React.ComponentType<{ className?: string }>
}

/**
 * Represents a navigation section in the developer sidebar
 */
export interface NavSection {
  /** Section identifier */
  id: string
  /** Section title */
  title: string
  /** Section icon component */
  icon: React.ComponentType<{ className?: string }>
  /** Child navigation items */
  items: NavItem[]
}
