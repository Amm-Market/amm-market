"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "pool-categories", title: "Pool Categories" },
  { id: "eligibility-criteria", title: "Eligibility Criteria" },
  { id: "pool-list", title: "Pool List" },
  { id: "requesting-pools", title: "Requesting New Pools" },
]

export default function AllowedPoolsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Allowed LP Pools</h1>
        <p className="text-lg text-gray-600 mb-8">
          Specific pool types, configurations, and constraints accepted by the protocol.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Not all LP tokens are eligible as collateral. AMM Market maintains a whitelist of 
            approved pools that meet liquidity, oracle, and risk requirements. Each pool has 
            specific collateral parameters based on its risk profile.
          </p>
        </section>

        <section id="pool-categories" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pool Categories</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Tier 1: Stablecoin Pools</h3>
              <p className="text-green-800 text-sm mb-2">
                Highest LTV and liquidation thresholds. Minimal price volatility.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">USDC/USDT</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">DAI/USDC</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">FRAX/USDC</span>
              </div>
              <p className="text-green-700 text-xs mt-2">LTV: 85% | Liq. Threshold: 90%</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Tier 2: Blue-chip Pairs</h3>
              <p className="text-blue-800 text-sm mb-2">
                Major assets with deep liquidity and reliable oracles.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">ETH/USDC</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">WBTC/ETH</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">ETH/DAI</span>
              </div>
              <p className="text-blue-700 text-xs mt-2">LTV: 75% | Liq. Threshold: 82%</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Tier 3: LST Pairs</h3>
              <p className="text-purple-800 text-sm mb-2">
                Liquid staking derivatives paired with their base asset.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">stETH/ETH</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">rETH/ETH</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">cbETH/ETH</span>
              </div>
              <p className="text-purple-700 text-xs mt-2">LTV: 70% | Liq. Threshold: 78%</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-2">Tier 4: Volatile Pairs</h3>
              <p className="text-orange-800 text-sm mb-2">
                Higher volatility assets with sufficient liquidity.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">ARB/ETH</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">OP/ETH</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">LINK/ETH</span>
              </div>
              <p className="text-orange-700 text-xs mt-2">LTV: 60% | Liq. Threshold: 70%</p>
            </div>
          </div>
        </section>

        <section id="eligibility-criteria" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pools must meet the following requirements:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Requirement</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Minimum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Total Value Locked</td>
                  <td className="px-4 py-2 text-gray-600">$1,000,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Daily Volume (30d avg)</td>
                  <td className="px-4 py-2 text-gray-600">$100,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Pool Age</td>
                  <td className="px-4 py-2 text-gray-600">90 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Oracle Coverage</td>
                  <td className="px-4 py-2 text-gray-600">Both underlying assets</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Smart Contract Audit</td>
                  <td className="px-4 py-2 text-gray-600">Required for DEX</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="pool-list" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pool List</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Currently supported pools (Base network):
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Pool</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">DEX</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Tier</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">TVL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">USDC/USDbC</td>
                  <td className="px-4 py-2 text-gray-600">Aerodrome</td>
                  <td className="px-4 py-2"><span className="text-green-600 text-xs">Tier 1</span></td>
                  <td className="px-4 py-2 text-gray-600">$45M</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">ETH/USDC</td>
                  <td className="px-4 py-2 text-gray-600">Uniswap v3</td>
                  <td className="px-4 py-2"><span className="text-blue-600 text-xs">Tier 2</span></td>
                  <td className="px-4 py-2 text-gray-600">$120M</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">WETH/AERO</td>
                  <td className="px-4 py-2 text-gray-600">Aerodrome</td>
                  <td className="px-4 py-2"><span className="text-orange-600 text-xs">Tier 4</span></td>
                  <td className="px-4 py-2 text-gray-600">$35M</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">cbETH/WETH</td>
                  <td className="px-4 py-2 text-gray-600">Aerodrome</td>
                  <td className="px-4 py-2"><span className="text-purple-600 text-xs">Tier 3</span></td>
                  <td className="px-4 py-2 text-gray-600">$28M</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-500 text-sm mt-3">
            Full list available via the dashboard or contract query.
          </p>
        </section>

        <section id="requesting-pools" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requesting New Pools</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            To request a new pool be added:
          </p>
          
          <ol className="space-y-2 text-gray-600 list-decimal list-inside">
            <li>Verify the pool meets minimum eligibility criteria</li>
            <li>Submit a governance proposal with pool details</li>
            <li>Include risk analysis and proposed parameters</li>
            <li>Community votes on inclusion</li>
            <li>If approved, pool is added after oracle integration</li>
          </ol>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Tip:</strong> Pools with existing Chainlink price feeds are faster to integrate.
            </p>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Specific pool types, configurations, and constraints accepted by the protocol."
        sectionColor="cyan"
      />
    </div>
  )
}
