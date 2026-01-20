import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Introduction",
  description: "Introduction to AMM Market - learn what it is, how it works, and how LP positions can be used as collateral on Aave v4.",
}

const sections = [
  { id: "welcome", title: "Welcome" },
  { id: "what-is-amm-market", title: "What is AMM Market?" },
  { id: "how-it-works", title: "How It Works" },
  { id: "unlocking-lp-collateral", title: "Unlocking LP Collateral" },
  { id: "architecture", title: "Architecture" },
  { id: "current-development", title: "Current Development" },
  { id: "next-steps", title: "Next Steps" },
]

export default function IntroductionOverviewPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Overview</h1>
        <p className="text-lg text-gray-600 mb-8">
          High-level description of the AMM Market Spoke and how LP tokens are used as collateral within the Aave v4 Hub framework.
        </p>

        <section id="welcome" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hello from the AMM Market Team! Whether you're a retail investor, developer, or simply exploring, 
            this guide is designed to get you up to speed quickly. Our documentation is designed for full 
            protocol exploration in under 10 minutes, ensuring you quickly grasp the powerful capabilities 
            of our platform.
          </p>
        </section>

        <section id="what-is-amm-market" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is AMM Market?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market is an Aave v4 Spoke that accepts AMM Liquidity Pool Shares (Uniswap or Balancer Pools) 
            as collateral and allows owners to borrow assets against those LP positions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market does not hold a lending pool for suppliers. Instead, AMM Market draws liquidity from 
            configured Aave Hubs, keeps a debt shares accounting system, and enforces health checks using 
            on-chain oracles and token-level configuration. This innovative approach unlocks capital efficiency 
            for LPs, allowing them to access liquidity without removing their liquidity from pools.
          </p>
        </section>

        <section id="how-it-works" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">1. Deposit LP Tokens</h3>
              <p className="text-gray-600 text-sm">
                Supply your LP tokens from supported DEXes (Uniswap v3/v4, Balancer) to the AMM Market Spoke. 
                Your LP positions remain active and continue earning fees.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">2. Receive Borrowing Power</h3>
              <p className="text-gray-600 text-sm">
                Your LP tokens are valued using secure price oracles, and you receive borrowing power based 
                on collateral factors. The Spoke calculates the maximum borrowable amount.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">3. Borrow Assets</h3>
              <p className="text-gray-600 text-sm">
                Borrow stablecoins or other assets from the Aave v4 Hub against your LP collateral. 
                The Spoke sources funds from the Hub on your behalf.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">4. Keep Earning</h3>
              <p className="text-gray-600 text-sm">
                Your LP positions remain active and continue accruing trading fees while serving as collateral. 
                Claim fees anytime without affecting your loan.
              </p>
            </div>
          </div>
        </section>

        <section id="unlocking-lp-collateral" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Unlocking LP Collateral</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Unlocking LP collateral means:
          </p>
          <ul className="space-y-4">
            <li>
              <span className="font-medium text-gray-900">More Capital Efficiency</span>
              <p className="text-gray-600 text-sm mt-0.5">LPs don't need to exit pools to access liquidity.</p>
            </li>
            <li>
              <span className="font-medium text-gray-900">More Resilient Credit Markets</span>
              <p className="text-gray-600 text-sm mt-0.5">Loans backed by fee-earning, deep-liquidity assets.</p>
            </li>
            <li>
              <span className="font-medium text-gray-900">More Protocol Adoption</span>
              <p className="text-gray-600 text-sm mt-0.5">AMM Market turns static LP capital into productive, composable collateral across DeFi.</p>
            </li>
          </ul>
        </section>

        <section id="architecture" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Architecture</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market operates as a Spoke in Aave v4's Hub-and-Spoke architecture:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Collateral Model</h3>
              <p className="text-gray-600 text-sm">
                Uniswap v3/v4 LP positions (NFT positions) are transferred into a Vault, where they remain 
                usable by their owner but are accounted as collateral.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Per-Position Accounting</h3>
              <p className="text-gray-600 text-sm">
                Debt, collateral value, and health are tracked per LP position (not per account) so owners 
                can hold multiple distinct loans.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Spoke Architecture</h3>
              <p className="text-gray-600 text-sm">
                Each chain runs a DEX Spoke that enforces oracle feeds, LTVs, and liquidations locally while 
                the Hub provides liquidity and capital coordination (Hub & Spoke model).
              </p>
            </div>
          </div>
        </section>

        <section id="current-development" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Development</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            As we approach our mainnet launch, you can experience AMM Market today on the Ethereum testnets.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Thank you for joining us on this journey as we redefine the future of LP with AMM Market.
          </p>
        </section>

        <section id="next-steps" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ready to dive deeper? Here's where to go next:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• <a href="/developers/introduction/key-concepts" className="text-blue-600 hover:underline">Key Concepts</a> — Learn essential terminology</li>
            <li>• <a href="/developers/introduction/glossary" className="text-blue-600 hover:underline">Glossary</a> — Protocol-specific definitions</li>
            <li>• <a href="/developers/getting-started" className="text-blue-600 hover:underline">Getting Started</a> — Deposit your first LP position</li>
            <li>• <a href="/developers/architecture" className="text-blue-600 hover:underline">Protocol Architecture</a> — Understand the technical design</li>
          </ul>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="High-level description of the AMM Market Spoke and how LP tokens are used as collateral within the Aave v4 Hub framework."
        sectionColor="blue"
      />
    </div>
  )
}
