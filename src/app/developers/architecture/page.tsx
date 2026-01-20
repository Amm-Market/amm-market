"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "hub-and-spoke", title: "Hub-and-Spoke Model" },
  { id: "spoke-responsibilities", title: "Spoke Responsibilities" },
  { id: "data-flow", title: "Data Flow" },
  { id: "cross-chain", title: "Cross-Chain Design" },
]

export default function SpokesDesignPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Spokes Design</h1>
        <p className="text-lg text-gray-600 mb-8">
          Responsibilities and scope of the AMM Market Spoke within the Aave v4 architecture.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market is implemented as a Spoke in Aave v4's modular architecture. This design 
            separates specialized collateral logic from core lending functionality, enabling 
            isolated risk management and flexible extensibility.
          </p>
        </section>

        <section id="hub-and-spoke" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hub-and-Spoke Model</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Aave v4 uses a Hub-and-Spoke architecture where:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Hub (Central)</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Manages core liquidity pools (USDC, ETH, etc.)</li>
                <li>• Handles interest rate calculations</li>
                <li>• Coordinates cross-spoke borrowing</li>
                <li>• Enforces global protocol parameters</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Spoke (AMM Market)</h3>
              <ul className="text-purple-800 text-sm space-y-1">
                <li>• Accepts LP tokens as collateral</li>
                <li>• Implements LP-specific valuation logic</li>
                <li>• Defines risk parameters per LP type</li>
                <li>• Handles liquidation of LP positions</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Architecture Diagram</h3>
            <div className="text-center py-6">
              <div className="inline-flex flex-col items-center">
                <div className="px-6 py-3 bg-blue-100 rounded-lg border border-blue-300 font-medium text-blue-900">
                  Aave v4 Hub
                </div>
                <div className="w-0.5 h-6 bg-gray-300"></div>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-purple-100 rounded-lg border border-purple-300 text-purple-900 text-sm">
                    AMM Market Spoke
                  </div>
                  <div className="px-4 py-2 bg-gray-100 rounded-lg border border-gray-300 text-gray-600 text-sm">
                    Other Spokes...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="spoke-responsibilities" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spoke Responsibilities</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The AMM Market Spoke handles all LP-specific logic:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Function</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Collateral Custody</td>
                  <td className="px-4 py-2 text-gray-600">Holds deposited LP tokens securely</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Valuation</td>
                  <td className="px-4 py-2 text-gray-600">Calculates LP token USD value via oracles</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Risk Parameters</td>
                  <td className="px-4 py-2 text-gray-600">Defines LTV, liquidation threshold per LP type</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Health Calculation</td>
                  <td className="px-4 py-2 text-gray-600">Computes position health factor</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Liquidation</td>
                  <td className="px-4 py-2 text-gray-600">Executes LP liquidations when HF &lt; 1</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Fee Collection</td>
                  <td className="px-4 py-2 text-gray-600">Enables claiming of accrued LP fees</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="data-flow" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Flow</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            When a user borrows against LP collateral:
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">1</span>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex-1">
                <span className="font-medium text-gray-900">User deposits LP to Spoke</span>
                <p className="text-gray-600 text-sm mt-0.5">LP tokens transferred to AMM Market contract</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">2</span>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex-1">
                <span className="font-medium text-gray-900">Spoke calculates collateral value</span>
                <p className="text-gray-600 text-sm mt-0.5">Oracle queries + LP valuation logic</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">3</span>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex-1">
                <span className="font-medium text-gray-900">Spoke reports to Hub</span>
                <p className="text-gray-600 text-sm mt-0.5">Collateral value and borrowing capacity communicated</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">4</span>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex-1">
                <span className="font-medium text-gray-900">Hub issues loan</span>
                <p className="text-gray-600 text-sm mt-0.5">Borrowed assets sent from Hub liquidity pool</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cross-chain" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cross-Chain Design</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Aave v4's architecture supports cross-chain operations:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• <strong>Multi-chain Spokes:</strong> AMM Market can be deployed on multiple chains</li>
            <li>• <strong>Unified Hub:</strong> Cross-chain messaging coordinates liquidity</li>
            <li>• <strong>Chain-specific LPs:</strong> Each chain's Spoke supports local DEX LP tokens</li>
          </ul>
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 text-sm">
              <strong>Coming Soon:</strong> Cross-chain borrowing will allow depositing LP on one 
              chain and borrowing on another.
            </p>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Responsibilities and scope of the AMM Market Spoke within the Aave v4 architecture."
        sectionColor="violet"
      />
    </div>
  )
}
