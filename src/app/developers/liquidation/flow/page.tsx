"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "step-by-step", title: "Step-by-Step Process" },
  { id: "technical-details", title: "Technical Details" },
  { id: "gas-considerations", title: "Gas Considerations" },
  { id: "integration-guide", title: "Integration Guide" },
]

export default function LiquidationFlowPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Liquidation Flow</h1>
        <p className="text-lg text-gray-600 mb-8">
          Step-by-step breakdown of the liquidation process from trigger to settlement.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The liquidation flow involves multiple steps: identifying underwater positions, 
            preparing the liquidation transaction, executing the liquidation, and settling 
            collateral transfer. Understanding this flow is essential for building liquidation bots.
          </p>
        </section>

        <section id="step-by-step" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Process</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">1</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Identify Liquidatable Position</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Monitor positions where Health Factor ≤ 1.0
                </p>
                <code className="text-xs bg-gray-200 px-2 py-1 rounded block">
                  uint256 hf = ammMarket.getUserHealthFactor(borrower);<br/>
                  require(hf &lt;= 1e18, "Position not liquidatable");
                </code>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">2</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Calculate Liquidation Amount</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Determine how much debt to repay (up to close factor limit)
                </p>
                <code className="text-xs bg-gray-200 px-2 py-1 rounded block">
                  uint256 maxLiquidatable = (totalDebt * closeFactor) / 1e18;<br/>
                  uint256 debtToRepay = min(maxLiquidatable, availableFunds);
                </code>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">3</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Approve Debt Asset</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Approve the AMM Market contract to spend your debt tokens
                </p>
                <code className="text-xs bg-gray-200 px-2 py-1 rounded block">
                  debtAsset.approve(ammMarketAddress, debtToRepay);
                </code>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">4</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Execute Liquidation</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Call the liquidation function
                </p>
                <code className="text-xs bg-gray-200 px-2 py-1 rounded block">
                  ammMarket.liquidationCall(<br/>
                  &nbsp;&nbsp;collateralAsset,  // LP token to receive<br/>
                  &nbsp;&nbsp;debtAsset,        // Asset to repay<br/>
                  &nbsp;&nbsp;borrower,         // Position owner<br/>
                  &nbsp;&nbsp;debtToRepay,      // Amount to repay<br/>
                  &nbsp;&nbsp;receiveAToken     // false to receive LP directly<br/>
                  );
                </code>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">5</div>
              <div className="flex-1 p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Receive Collateral</h3>
                <p className="text-green-800 text-sm">
                  LP tokens (including liquidation bonus) are transferred to your wallet. 
                  You can then sell or hold the LP tokens.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="technical-details" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Details</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Collateral Calculation</h3>
              <p className="text-gray-600 text-sm mb-2">
                The amount of collateral received is calculated as:
              </p>
              <div className="p-3 bg-gray-900 rounded">
                <code className="text-green-400 text-xs">
                  collateralReceived = (debtRepaid × debtPrice × (1 + liquidationBonus)) / collateralPrice
                </code>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Flash Liquidation</h3>
              <p className="text-gray-600 text-sm">
                Liquidators can use flash loans to liquidate without upfront capital:
              </p>
              <ol className="text-gray-600 text-sm mt-2 space-y-1 list-decimal list-inside">
                <li>Flash borrow debt asset</li>
                <li>Execute liquidation</li>
                <li>Sell received LP tokens</li>
                <li>Repay flash loan + fee</li>
                <li>Keep profit</li>
              </ol>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Partial vs Full Liquidation</h3>
              <p className="text-gray-600 text-sm">
                The close factor (typically 50%) limits how much can be liquidated per transaction. 
                Multiple transactions may be needed to fully liquidate large positions.
              </p>
            </div>
          </div>
        </section>

        <section id="gas-considerations" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gas Considerations</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Operation</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Estimated Gas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Simple Liquidation</td>
                  <td className="px-4 py-2 text-gray-600">~300,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Flash Liquidation</td>
                  <td className="px-4 py-2 text-gray-600">~500,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Multi-collateral Liquidation</td>
                  <td className="px-4 py-2 text-gray-600">~400,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-500 text-sm mt-3">
            Gas costs vary with network conditions. Factor gas into profitability calculations.
          </p>
        </section>

        <section id="integration-guide" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Integration Guide</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For building a liquidation bot:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">1. Monitor Events</h3>
              <p className="text-gray-600 text-sm">
                Subscribe to <code className="bg-gray-200 px-1 rounded">Borrow</code> and 
                <code className="bg-gray-200 px-1 rounded">Deposit</code> events to track positions.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">2. Maintain Position Index</h3>
              <p className="text-gray-600 text-sm">
                Keep a local database of all positions with their health factors.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">3. Price Feed Integration</h3>
              <p className="text-gray-600 text-sm">
                Use the same oracle sources as the protocol for accurate HF calculations.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">4. Profitability Check</h3>
              <p className="text-gray-600 text-sm">
                Calculate expected profit after gas and slippage before executing.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Step-by-step breakdown of the liquidation process from trigger to settlement."
        sectionColor="amber"
      />
    </div>
  )
}
