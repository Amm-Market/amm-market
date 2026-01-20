"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "liquidation-conditions", title: "Liquidation Conditions" },
  { id: "who-can-liquidate", title: "Who Can Liquidate" },
  { id: "liquidation-incentives", title: "Liquidation Incentives" },
  { id: "protection-mechanisms", title: "Protection Mechanisms" },
]

export default function LiquidationDesignPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Liquidation Design</h1>
        <p className="text-lg text-gray-600 mb-8">
          Conditions under which positions become liquidatable and who can trigger them.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Liquidation is a critical safety mechanism that protects the protocol from bad debt. 
            When a borrower's health factor falls below 1.0, their position becomes eligible for 
            liquidation, allowing third parties to repay debt in exchange for collateral at a discount.
          </p>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-800 text-sm">
              <strong>Important:</strong> Liquidation results in loss of collateral. Always 
              monitor your health factor and maintain adequate buffers.
            </p>
          </div>
        </section>

        <section id="liquidation-conditions" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Conditions</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A position becomes liquidatable when:
          </p>
          
          <div className="p-4 bg-gray-900 rounded-lg mb-4">
            <code className="text-green-400 text-sm">
              Health Factor = (Collateral × Liquidation Threshold) / Debt ≤ 1.0
            </code>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Collateral Value Drops</h3>
              <p className="text-gray-600 text-sm">
                If the underlying LP token value decreases (due to price drops or impermanent loss), 
                the numerator shrinks and HF decreases.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Debt Increases</h3>
              <p className="text-gray-600 text-sm">
                Accrued interest increases the denominator over time, gradually reducing HF.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Combined Effect</h3>
              <p className="text-gray-600 text-sm">
                In volatile markets, both factors can compound, causing rapid HF deterioration.
              </p>
            </div>
          </div>
        </section>

        <section id="who-can-liquidate" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who Can Liquidate</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Liquidations are permissionless — anyone can liquidate an underwater position:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-1">Liquidation Bots</h3>
              <p className="text-blue-800 text-sm">
                Automated systems that monitor positions and execute liquidations for profit. 
                Most liquidations are performed by bots.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-1">Individual Users</h3>
              <p className="text-purple-800 text-sm">
                Any user with sufficient capital can manually liquidate positions through 
                the contract interface.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-1">Protocol Keepers</h3>
              <p className="text-green-800 text-sm">
                Backstop liquidators operated by the protocol to ensure positions are 
                liquidated even in extreme conditions.
              </p>
            </div>
          </div>
        </section>

        <section id="liquidation-incentives" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Incentives</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Liquidators are incentivized through the liquidation bonus:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">LP Category</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Liquidation Bonus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Stablecoin Pairs</td>
                  <td className="px-4 py-2 text-gray-600">5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Blue-chip Pairs</td>
                  <td className="px-4 py-2 text-gray-600">7.5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Volatile Pairs</td>
                  <td className="px-4 py-2 text-gray-600">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Example</h3>
            <p className="text-blue-800 text-sm">
              A liquidator repays $1,000 of debt and receives $1,075 worth of LP collateral 
              (7.5% bonus). The $75 profit incentivizes timely liquidations.
            </p>
          </div>
        </section>

        <section id="protection-mechanisms" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Protection Mechanisms</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Several mechanisms protect borrowers and the protocol:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Close Factor</h3>
              <p className="text-gray-600 text-sm">
                Liquidators can only repay up to 50% of debt per transaction, giving borrowers 
                a chance to recover their position.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Grace Period</h3>
              <p className="text-gray-600 text-sm">
                Brief delay between HF dropping below 1.0 and liquidation execution to prevent 
                flash-crash liquidations.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Oracle Safeguards</h3>
              <p className="text-gray-600 text-sm">
                Price feeds include circuit breakers and TWAP smoothing to prevent manipulation-driven 
                liquidations.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Conditions under which positions become liquidatable and who can trigger them."
        sectionColor="amber"
      />
    </div>
  )
}
