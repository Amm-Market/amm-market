"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "fund-structure", title: "Fund Structure" },
  { id: "coverage-scenarios", title: "Coverage Scenarios" },
  { id: "fund-management", title: "Fund Management" },
  { id: "claims-process", title: "Claims Process" },
]

export default function InsuranceFundsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Insurance Funds</h1>
        <p className="text-lg text-gray-600 mb-8">
          Backstop mechanisms intended to mitigate losses during extreme market events.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Insurance Fund serves as a backstop against bad debt that may occur when 
            liquidations fail to fully cover outstanding loans. It provides an additional 
            layer of protection for lenders in the Aave v4 Hub.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Purpose:</strong> Cover shortfalls when liquidated collateral value is 
              insufficient to repay debt, protecting Hub liquidity providers from losses.
            </p>
          </div>
        </section>

        <section id="fund-structure" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fund Structure</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Primary Insurance Fund</h3>
              <p className="text-gray-600 text-sm mb-2">
                Main reserve funded by protocol fees.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• 5% of reserve factor directed here</li>
                <li>• Held in stablecoins (USDC)</li>
                <li>• Target: 5% of total borrows</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Safety Module (Planned)</h3>
              <p className="text-gray-600 text-sm mb-2">
                Staked tokens providing additional coverage.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Users stake governance tokens</li>
                <li>• Earn rewards for providing backstop</li>
                <li>• Subject to slashing in shortfall events</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Treasury Reserve</h3>
              <p className="text-gray-600 text-sm mb-2">
                Protocol treasury as last-resort backstop.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Governance-controlled allocation</li>
                <li>• Used only after primary fund depleted</li>
                <li>• Requires governance vote</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="coverage-scenarios" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coverage Scenarios</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The insurance fund covers specific scenarios:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-1">Covered</h3>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Bad debt from failed liquidations</li>
                <li>• Oracle manipulation losses (with proof)</li>
                <li>• Smart contract bugs (post-audit)</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-1">Not Covered</h3>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• User error (wrong transactions)</li>
                <li>• Impermanent loss on LP positions</li>
                <li>• Market price movements</li>
                <li>• Third-party protocol failures</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="fund-management" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fund Management</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Metric</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Target</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Current</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Fund Size</td>
                  <td className="px-4 py-2 text-gray-600">5% of TVB</td>
                  <td className="px-4 py-2 text-gray-600">$0 (Testnet)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Contribution Rate</td>
                  <td className="px-4 py-2 text-gray-600">5% of fees</td>
                  <td className="px-4 py-2 text-gray-600">Active</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Asset Allocation</td>
                  <td className="px-4 py-2 text-gray-600">100% USDC</td>
                  <td className="px-4 py-2 text-gray-600">100% USDC</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-500 text-sm mt-3">
            Fund metrics are publicly viewable on-chain and via the dashboard.
          </p>
        </section>

        <section id="claims-process" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Claims Process</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            When bad debt occurs:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">1</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-1">Detection</h3>
                <p className="text-gray-600 text-sm">
                  Bad debt is automatically detected when a position's collateral is fully 
                  liquidated but debt remains.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">2</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-1">Verification</h3>
                <p className="text-gray-600 text-sm">
                  Risk committee verifies the shortfall and confirms it qualifies for coverage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">3</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-1">Coverage</h3>
                <p className="text-gray-600 text-sm">
                  Insurance fund automatically covers the shortfall, restoring Hub solvency.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">4</div>
              <div className="flex-1 p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-1">Resolution</h3>
                <p className="text-green-800 text-sm">
                  Bad debt is cleared, and the protocol continues normal operations. 
                  Post-mortem analysis conducted.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Backstop mechanisms intended to mitigate losses during extreme market events."
        sectionColor="rose"
      />
    </div>
  )
}
