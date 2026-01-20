"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "current-testnet", title: "Current Testnet" },
  { id: "supported-features", title: "Supported Features" },
  { id: "roadmap", title: "Roadmap" },
  { id: "testnet-resources", title: "Testnet Resources" },
]

export default function TestnetRoadmapPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Testnet & Roadmap</h1>
        <p className="text-lg text-gray-600 mb-8">
          Current testnet deployments, supported features, and planned protocol milestones.
        </p>

        <section id="current-testnet" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Testnet</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market is currently deployed on testnet for community testing and developer integration. 
            The testnet environment mirrors mainnet functionality with test tokens.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <h3 className="font-semibold text-green-900">Base Sepolia</h3>
              </div>
              <p className="text-green-800 text-sm mb-2">Primary testnet deployment</p>
              <div className="text-xs text-green-700 font-mono bg-green-100 px-2 py-1 rounded inline-block">
                Chain ID: 84532
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <h3 className="font-semibold text-blue-900">Unichain Sepolia</h3>
              </div>
              <p className="text-blue-800 text-sm mb-2">Secondary testnet deployment</p>
              <div className="text-xs text-blue-700 font-mono bg-blue-100 px-2 py-1 rounded inline-block">
                Chain ID: 1301
              </div>
            </div>
          </div>
        </section>

        <section id="supported-features" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supported Features</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The following features are available on testnet:
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700">Deposit LP tokens as collateral</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700">Borrow USDC against LP collateral</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700">Repay loans and withdraw collateral</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700">Real-time health factor monitoring</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700">Liquidation mechanics</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-yellow-500">◐</span>
              <span className="text-gray-700">LP fee claiming (partial support)</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-gray-400">○</span>
              <span className="text-gray-500">Cross-chain borrowing (coming soon)</span>
            </div>
          </div>
        </section>

        <section id="roadmap" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Roadmap</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Planned milestones for AMM Market development:
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-8">
              {/* Q1 2026 */}
              <div className="relative pl-12">
                <div className="absolute left-2.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-1">Q1 2026 — Testnet Launch</h3>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Core protocol deployment on Base Sepolia</li>
                    <li>• Initial DEX integrations (Uniswap v3, Aerodrome)</li>
                    <li>• Developer documentation release</li>
                  </ul>
                </div>
              </div>

              {/* Q2 2026 */}
              <div className="relative pl-12">
                <div className="absolute left-2.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-1">Q2 2026 — Security & Audits</h3>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Smart contract audits (multiple firms)</li>
                    <li>• Bug bounty program launch</li>
                    <li>• Oracle security hardening</li>
                  </ul>
                </div>
              </div>

              {/* Q3 2026 */}
              <div className="relative pl-12">
                <div className="absolute left-2.5 w-3 h-3 bg-purple-500 rounded-full border-2 border-white"></div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-1">Q3 2026 — Mainnet Launch</h3>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Mainnet deployment on Base</li>
                    <li>• Expanded DEX support (Curve, Balancer)</li>
                    <li>• Governance token launch</li>
                  </ul>
                </div>
              </div>

              {/* Q4 2026 */}
              <div className="relative pl-12">
                <div className="absolute left-2.5 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-700 mb-1">Q4 2026 — Multi-chain Expansion</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Ethereum mainnet deployment</li>
                    <li>• Arbitrum and Optimism support</li>
                    <li>• Cross-chain borrowing via Aave v4 Hub</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testnet-resources" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Testnet Resources</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Faucets</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• <a href="#" className="text-blue-600 hover:underline">Base Sepolia Faucet</a> — Get test ETH</li>
                <li>• <a href="#" className="text-blue-600 hover:underline">Test USDC Faucet</a> — Get test stablecoins</li>
                <li>• <a href="#" className="text-blue-600 hover:underline">LP Token Minter</a> — Create test LP positions</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Contract Addresses</h3>
              <p className="text-gray-600 text-sm mb-2">
                See the <a href="/developers/integrations/router-contract" className="text-blue-600 hover:underline">Router Contract</a> page 
                for deployed contract addresses on each testnet.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Current testnet deployments, supported features, and planned protocol milestones."
        sectionColor="blue"
      />
    </div>
  )
}
