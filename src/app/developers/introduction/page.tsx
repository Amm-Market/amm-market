"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "what-is-amm-market", title: "What is AMM Market?" },
  { id: "how-it-works", title: "How It Works" },
  { id: "key-benefits", title: "Key Benefits" },
  { id: "aave-v4-integration", title: "Aave v4 Integration" },
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

        <section id="what-is-amm-market" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is AMM Market?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market is a specialized Spoke within the Aave v4 ecosystem that enables users to use their 
            Liquidity Provider (LP) positions as collateral for borrowing. This unlocks capital efficiency 
            for liquidity providers who want to access liquidity without exiting their positions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By depositing LP tokens from supported decentralized exchanges, users can borrow stablecoins 
            and other assets while their LP positions continue earning trading fees. This creates a 
            powerful primitive for capital-efficient DeFi strategies.
          </p>
        </section>

        <section id="how-it-works" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">1. Deposit LP Tokens</h3>
              <p className="text-gray-600 text-sm">
                Supply your LP tokens from supported DEXes (Uniswap, Curve, Aerodrome, etc.) to the AMM Market Spoke.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">2. Receive Borrowing Power</h3>
              <p className="text-gray-600 text-sm">
                Your LP tokens are valued using secure price oracles, and you receive borrowing power based on collateral factors.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">3. Borrow Assets</h3>
              <p className="text-gray-600 text-sm">
                Borrow stablecoins or other assets from the Aave v4 Hub against your LP collateral.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">4. Keep Earning</h3>
              <p className="text-gray-600 text-sm">
                Your LP positions remain active and continue accruing trading fees while serving as collateral.
              </p>
            </div>
          </div>
        </section>

        <section id="key-benefits" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">1</span>
              <div>
                <span className="font-medium text-gray-900">Capital Efficiency</span>
                <p className="text-gray-600 text-sm mt-0.5">Unlock liquidity from LP positions without selling or exiting.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">2</span>
              <div>
                <span className="font-medium text-gray-900">Continuous Yield</span>
                <p className="text-gray-600 text-sm mt-0.5">LP positions keep earning trading fees while collateralized.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">3</span>
              <div>
                <span className="font-medium text-gray-900">Flexible Strategies</span>
                <p className="text-gray-600 text-sm mt-0.5">Use borrowed funds for leverage, hedging, or new opportunities.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">4</span>
              <div>
                <span className="font-medium text-gray-900">Battle-Tested Security</span>
                <p className="text-gray-600 text-sm mt-0.5">Built on Aave v4's proven infrastructure with isolated risk.</p>
              </div>
            </li>
          </ul>
        </section>

        <section id="aave-v4-integration" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Aave v4 Integration</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market operates as a Spoke in Aave v4's Hub-and-Spoke architecture. The Hub manages 
            core lending/borrowing logic and liquidity, while Spokes like AMM Market handle specialized 
            collateral types.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Hub-and-Spoke Architecture</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• <strong>Hub:</strong> Central liquidity pool and interest rate management</li>
              <li>• <strong>Spoke:</strong> AMM Market handles LP token valuation and collateral logic</li>
              <li>• <strong>Cross-chain:</strong> Designed for multi-chain deployment via Aave v4</li>
            </ul>
          </div>
        </section>

        <section id="next-steps" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ready to dive deeper? Here's where to go next:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• <a href="/developers/introduction/key-concepts" className="text-blue-600 hover:underline">Key Concepts</a> — Learn essential terminology</li>
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
