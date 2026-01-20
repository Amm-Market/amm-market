"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "core-contracts", title: "Core Contracts" },
  { id: "trust-boundaries", title: "Trust Boundaries" },
  { id: "upgrade-mechanism", title: "Upgrade Mechanism" },
  { id: "audits", title: "Audits" },
]

export default function ContractsArchitecturePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contracts Architecture</h1>
        <p className="text-lg text-gray-600 mb-8">
          Overview of core smart contracts, trust boundaries, and upgrade considerations.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market's smart contract architecture is designed for security, modularity, and 
            upgradeability. The system separates concerns between collateral management, 
            lending logic, and oracle integration.
          </p>
        </section>

        <section id="core-contracts" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core Contracts</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">AMMMarketSpoke</h3>
              <p className="text-blue-800 text-sm mb-2">
                Main entry point for user interactions. Handles deposits, withdrawals, and 
                coordinates with the Aave v4 Hub.
              </p>
              <ul className="text-blue-700 text-xs space-y-1">
                <li>• Upgradeable proxy pattern</li>
                <li>• Access control via roles</li>
                <li>• Pausable functionality</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">LPCollateralManager</h3>
              <p className="text-purple-800 text-sm mb-2">
                Manages LP token custody, valuation, and collateral accounting.
              </p>
              <ul className="text-purple-700 text-xs space-y-1">
                <li>• Holds deposited LP tokens</li>
                <li>• Tracks user balances</li>
                <li>• Interfaces with oracle adapters</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">LPOracleAdapter</h3>
              <p className="text-green-800 text-sm mb-2">
                DEX-specific contracts that calculate LP token values from underlying prices.
              </p>
              <ul className="text-green-700 text-xs space-y-1">
                <li>• Uniswap v3 adapter</li>
                <li>• Aerodrome adapter</li>
                <li>• Curve adapter (planned)</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-2">LiquidationManager</h3>
              <p className="text-orange-800 text-sm mb-2">
                Handles liquidation logic, bonus calculations, and collateral seizure.
              </p>
              <ul className="text-orange-700 text-xs space-y-1">
                <li>• Health factor validation</li>
                <li>• Close factor enforcement</li>
                <li>• Liquidation event emission</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">ConfigurationManager</h3>
              <p className="text-gray-600 text-sm mb-2">
                Stores and manages protocol parameters (LTV, thresholds, caps).
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Governance-controlled updates</li>
                <li>• Time-locked changes</li>
                <li>• Emergency override capability</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="trust-boundaries" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Trust Boundaries</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The protocol has clearly defined trust assumptions:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-1">Trustless</h3>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• User funds custody (held by smart contracts)</li>
                <li>• Liquidation execution (permissionless)</li>
                <li>• Interest calculations (on-chain math)</li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-1">Semi-Trusted</h3>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• Oracle price feeds (Chainlink + TWAP)</li>
                <li>• Parameter updates (governance + timelock)</li>
                <li>• LP token whitelisting (governance)</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-1">Trusted</h3>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Emergency pause (guardian multi-sig)</li>
                <li>• Contract upgrades (governance + timelock)</li>
                <li>• Initial parameter setting (team)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="upgrade-mechanism" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Upgrade Mechanism</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Contracts use the transparent proxy pattern for upgradeability:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Upgrade Process</h3>
              <ol className="text-gray-600 text-sm space-y-1 list-decimal list-inside">
                <li>Governance proposal submitted</li>
                <li>Community voting period (7 days)</li>
                <li>If passed, timelock delay (48 hours)</li>
                <li>Upgrade executed by timelock contract</li>
              </ol>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Safety Measures</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Storage layout validation</li>
                <li>• Initialization protection</li>
                <li>• Rollback capability</li>
                <li>• Audit requirement for upgrades</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="audits" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Audits</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Security audits performed on AMM Market contracts:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Auditor</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Scope</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Date</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Trail of Bits</td>
                  <td className="px-4 py-2 text-gray-600">Core contracts</td>
                  <td className="px-4 py-2 text-gray-600">Q2 2026</td>
                  <td className="px-4 py-2"><span className="text-yellow-600 text-xs font-medium bg-yellow-50 px-2 py-0.5 rounded">Scheduled</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">OpenZeppelin</td>
                  <td className="px-4 py-2 text-gray-600">Oracle adapters</td>
                  <td className="px-4 py-2 text-gray-600">Q2 2026</td>
                  <td className="px-4 py-2"><span className="text-yellow-600 text-xs font-medium bg-yellow-50 px-2 py-0.5 rounded">Scheduled</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Spearbit</td>
                  <td className="px-4 py-2 text-gray-600">Full protocol</td>
                  <td className="px-4 py-2 text-gray-600">Q3 2026</td>
                  <td className="px-4 py-2"><span className="text-gray-500 text-xs font-medium bg-gray-100 px-2 py-0.5 rounded">Planned</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-500 text-sm mt-3">
            Audit reports will be published upon completion.
          </p>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Overview of core smart contracts, trust boundaries, and upgrade considerations."
        sectionColor="rose"
      />
    </div>
  )
}
