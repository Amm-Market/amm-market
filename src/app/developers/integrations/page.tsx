"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "supported-dexes", title: "Supported DEXes" },
  { id: "integration-status", title: "Integration Status" },
  { id: "adding-new-dex", title: "Adding a New DEX" },
]

export default function SupportedDexesPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Supported DEXes</h1>
        <p className="text-lg text-gray-600 mb-8">
          Decentralized exchanges whose LP tokens are eligible as collateral.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market integrates with leading decentralized exchanges to accept their LP tokens 
            as collateral. Each DEX integration requires custom oracle adapters and risk parameter 
            configuration.
          </p>
        </section>

        <section id="supported-dexes" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supported DEXes</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-pink-900">Uniswap v3</h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">ACTIVE</span>
              </div>
              <p className="text-pink-800 text-sm mb-2">
                Concentrated liquidity positions represented as NFTs. Supports full-range and 
                custom price range positions.
              </p>
              <ul className="text-pink-700 text-xs space-y-1">
                <li>• Token Standard: ERC-721 (NFT)</li>
                <li>• Chains: Ethereum, Base, Arbitrum, Optimism</li>
                <li>• Fee Tiers: 0.01%, 0.05%, 0.3%, 1%</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-blue-900">Aerodrome</h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">ACTIVE</span>
              </div>
              <p className="text-blue-800 text-sm mb-2">
                Base's leading DEX with volatile and stable pool types. LP tokens are standard ERC-20.
              </p>
              <ul className="text-blue-700 text-xs space-y-1">
                <li>• Token Standard: ERC-20</li>
                <li>• Chains: Base</li>
                <li>• Pool Types: Volatile (x*y=k), Stable (Curve-style)</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Curve Finance</h3>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-medium">COMING SOON</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Specialized for stablecoin and pegged asset swaps with low slippage.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Token Standard: ERC-20</li>
                <li>• Chains: Ethereum, Arbitrum, Optimism</li>
                <li>• Pool Types: StableSwap, Tricrypto, Factory pools</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Balancer v2</h3>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-medium">COMING SOON</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Multi-asset pools with customizable weights and composable pool types.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Token Standard: ERC-20</li>
                <li>• Chains: Ethereum, Arbitrum, Polygon</li>
                <li>• Pool Types: Weighted, Stable, Composable Stable</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Velodrome</h3>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-medium">COMING SOON</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Optimism's leading DEX, similar architecture to Aerodrome.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Token Standard: ERC-20</li>
                <li>• Chains: Optimism</li>
                <li>• Pool Types: Volatile, Stable</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="integration-status" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Integration Status</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">DEX</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Status</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Pools Supported</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">TVL Eligible</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Uniswap v3</td>
                  <td className="px-4 py-2"><span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-0.5 rounded">Active</span></td>
                  <td className="px-4 py-2 text-gray-600">45+</td>
                  <td className="px-4 py-2 text-gray-600">$2.1B</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Aerodrome</td>
                  <td className="px-4 py-2"><span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-0.5 rounded">Active</span></td>
                  <td className="px-4 py-2 text-gray-600">120+</td>
                  <td className="px-4 py-2 text-gray-600">$450M</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Curve</td>
                  <td className="px-4 py-2"><span className="text-yellow-600 text-xs font-medium bg-yellow-50 px-2 py-0.5 rounded">Q2 2026</span></td>
                  <td className="px-4 py-2 text-gray-600">—</td>
                  <td className="px-4 py-2 text-gray-600">—</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Balancer</td>
                  <td className="px-4 py-2"><span className="text-yellow-600 text-xs font-medium bg-yellow-50 px-2 py-0.5 rounded">Q2 2026</span></td>
                  <td className="px-4 py-2 text-gray-600">—</td>
                  <td className="px-4 py-2 text-gray-600">—</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Velodrome</td>
                  <td className="px-4 py-2"><span className="text-yellow-600 text-xs font-medium bg-yellow-50 px-2 py-0.5 rounded">Q3 2026</span></td>
                  <td className="px-4 py-2 text-gray-600">—</td>
                  <td className="px-4 py-2 text-gray-600">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="adding-new-dex" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Adding a New DEX</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            New DEX integrations require:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">1. Oracle Adapter</h3>
              <p className="text-gray-600 text-sm">
                Custom contract to calculate LP token value from underlying reserves and prices.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">2. Risk Assessment</h3>
              <p className="text-gray-600 text-sm">
                Analysis of pool liquidity, historical volatility, and oracle reliability.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">3. Governance Approval</h3>
              <p className="text-gray-600 text-sm">
                Community vote to approve new DEX integration and initial risk parameters.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">4. Security Audit</h3>
              <p className="text-gray-600 text-sm">
                Independent audit of oracle adapter and integration contracts.
              </p>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            Interested in proposing a new DEX? Contact the team or submit a governance proposal.
          </p>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Decentralized exchanges whose LP tokens are eligible as collateral."
        sectionColor="cyan"
      />
    </div>
  )
}
