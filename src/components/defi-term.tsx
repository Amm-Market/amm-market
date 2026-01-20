"use client"

/**
 * DeFiTerm - A component that wraps DeFi terminology with an explanatory tooltip.
 * 
 * @description
 * Provides contextual tooltips for DeFi jargon to help new users understand
 * complex terminology. Displays a dotted underline to indicate the term has
 * additional information available.
 * 
 * @example
 * ```tsx
 * <DeFiTerm term="ltv">LTV</DeFiTerm>
 * // or with custom display text
 * <DeFiTerm term="lp">liquidity provider tokens</DeFiTerm>
 * ```
 */

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

/**
 * Glossary of DeFi terms and their explanations.
 * Add new terms here as needed.
 */
const defiGlossary: Record<string, string> = {
  // Core lending terms
  lp: "Liquidity Provider (LP) tokens represent your share of a liquidity pool on a decentralized exchange. They earn trading fees automatically.",
  "lp-tokens": "Liquidity Provider (LP) tokens represent your share of a liquidity pool on a decentralized exchange. They earn trading fees automatically.",
  "lp-position": "Your LP position is your deposited liquidity in a DEX pool, represented by LP tokens that earn trading fees.",
  ltv: "Loan-to-Value (LTV) ratio is the percentage of your collateral's value that you can borrow. An 80% LTV means you can borrow up to $80 for every $100 of collateral.",
  "loan-to-value": "Loan-to-Value (LTV) ratio is the percentage of your collateral's value that you can borrow. An 80% LTV means you can borrow up to $80 for every $100 of collateral.",
  liquidation: "Liquidation occurs when your collateral value drops below a safe threshold. Part of your position is sold to repay debt and maintain system solvency.",
  "liquidation-threshold": "The liquidation threshold is the maximum LTV before your position gets liquidated. If your LTV exceeds this, liquidators can repay your debt and claim collateral.",
  collateral: "Collateral is the asset you deposit to secure a loan. If you fail to maintain a healthy position, your collateral may be liquidated.",
  tvl: "Total Value Locked (TVL) is the total amount of assets deposited in a protocol or pool, measured in USD.",
  apy: "Annual Percentage Yield (APY) is your expected yearly return, including compound interest. A 12% APY means $100 becomes ~$112 after one year.",
  apr: "Annual Percentage Rate (APR) is the yearly interest rate without compounding. Unlike APY, it doesn't account for reinvesting earnings.",
  "health-factor": "Health factor measures your position's safety. Above 1 is safe, below 1 triggers liquidation. Higher is safer—aim for 1.5+ for a buffer.",
  
  // DEX terms
  amm: "Automated Market Maker (AMM) is a type of decentralized exchange that uses mathematical formulas to price assets instead of order books.",
  dex: "Decentralized Exchange (DEX) lets you trade crypto directly from your wallet without intermediaries. Examples: Uniswap, Curve, Balancer.",
  slippage: "Slippage is the difference between expected and actual trade price, caused by price movement or low liquidity during execution.",
  "impermanent-loss": "Impermanent loss occurs when the price ratio of pooled tokens changes. The loss becomes permanent only if you withdraw during unfavorable conditions.",
  
  // Protocol terms
  spoke: "In Aave v4's Hub-and-Spoke architecture, a Spoke is a specialized market (like AMM Market) that connects to the main Hub for liquidity.",
  hub: "The Hub in Aave v4 is the central liquidity layer that connects multiple Spokes, enabling cross-chain liquidity and unified risk management.",
  oracle: "An oracle provides external data (like asset prices) to smart contracts. AMM Market uses price oracles to value your LP positions accurately.",
  
  // Position terms
  borrow: "Borrowing lets you take a loan against your deposited collateral. You pay interest over time and must repay to withdraw collateral.",
  deposit: "Depositing means providing your LP tokens as collateral. Your position stays active in the DEX pool while securing your loan.",
  repay: "Repaying reduces or clears your debt. Once fully repaid, you can withdraw your collateral without restrictions.",
  withdraw: "Withdrawing removes your collateral after repaying debt. Partial withdrawals are allowed as long as your position stays healthy.",
}

interface DeFiTermProps {
  /** The glossary key for the term's definition */
  term: keyof typeof defiGlossary | string
  /** The display text (defaults to the term itself) */
  children: React.ReactNode
  /** Optional className for custom styling */
  className?: string
}

export function DeFiTerm({ term, children, className = "" }: DeFiTermProps) {
  const definition = defiGlossary[term.toLowerCase()]
  
  // If no definition found, just render the children without tooltip
  if (!definition) {
    return <span className={className}>{children}</span>
  }

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className={`border-b border-dotted border-gray-400 cursor-help hover:border-blue-500 hover:text-blue-600 transition-colors ${className}`}
          >
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent side="top" align="center">
          {definition}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

/**
 * Export the glossary for use in other components (e.g., a glossary page)
 */
export { defiGlossary }

export default DeFiTerm
