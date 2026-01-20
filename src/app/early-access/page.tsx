import type { Metadata } from "next"

/**
 * Early Access page metadata for SEO
 */
export const metadata: Metadata = {
  title: "Early Access - Join the Waitlist",
  description: "Join the AMM Market early access waitlist. Be among the first to borrow against your LP positions on Aave v4 and unlock liquidity from Uniswap, Curve, and Balancer.",
  openGraph: {
    title: "Early Access - AMM Market",
    description: "Join the waitlist to be first to use AMM Market for LP-backed borrowing.",
  },
}

export default function EarlyAccessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Page content will be added later */}
      </main>
    </div>
  )
}

