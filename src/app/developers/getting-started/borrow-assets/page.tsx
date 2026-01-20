"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "borrowable-assets", title: "Borrowable Assets" },
  { id: "borrowing-power", title: "Borrowing Power" },
  { id: "borrow-process", title: "Borrow Process" },
  { id: "interest-rates", title: "Interest Rates" },
]

export default function BorrowAssetsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Borrow Assets</h1>
        <p className="text-lg text-gray-600 mb-8">
          Process for borrowing assets from the Hub against LP collateral.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            After depositing LP tokens as collateral, you can borrow assets from the Aave v4 Hub. 
            The amount you can borrow depends on your collateral value and the applicable 
            Loan-to-Value (LTV) ratio.
          </p>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 text-sm">
              <strong>Important:</strong> Borrowing creates debt that accrues interest. Monitor your 
              health factor to avoid liquidation.
            </p>
          </div>
        </section>

        <section id="borrowable-assets" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Borrowable Assets</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The following assets can be borrowed against LP collateral:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">$</span>
              </div>
              <div>
                <span className="font-medium text-gray-900">USDC</span>
                <p className="text-gray-500 text-xs">Primary stablecoin</p>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-xs">$</span>
              </div>
              <div>
                <span className="font-medium text-gray-900">USDT</span>
                <p className="text-gray-500 text-xs">Tether USD</p>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-bold text-xs">D</span>
              </div>
              <div>
                <span className="font-medium text-gray-900">DAI</span>
                <p className="text-gray-500 text-xs">MakerDAO stablecoin</p>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xs">E</span>
              </div>
              <div>
                <span className="font-medium text-gray-900">ETH</span>
                <p className="text-gray-500 text-xs">Native Ether</p>
              </div>
            </div>
          </div>
        </section>

        <section id="borrowing-power" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Borrowing Power</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your borrowing power is calculated as:
          </p>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <code className="text-sm text-gray-900">
              Borrowing Power = Collateral Value × LTV Ratio
            </code>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Example</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• LP collateral value: $10,000</li>
                <li>• LTV ratio: 75%</li>
                <li>• <strong>Maximum borrow: $7,500</strong></li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            LTV ratios vary by LP type. See <a href="/developers/architecture/collateral-factors" className="text-blue-600 hover:underline">Collateral Factors</a> for details.
          </p>
        </section>

        <section id="borrow-process" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Borrow Process</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 1: Check Available Liquidity</h3>
              <p className="text-gray-600 text-sm">
                Verify the Hub has sufficient liquidity for your desired borrow amount.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 2: Select Amount</h3>
              <p className="text-gray-600 text-sm mb-2">
                Choose how much to borrow. Stay below your maximum to maintain a healthy position.
              </p>
              <p className="text-yellow-700 text-xs bg-yellow-50 px-2 py-1 rounded inline-block">
                Recommended: Borrow ≤ 60% of max to buffer against price volatility
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 3: Execute Borrow</h3>
              <p className="text-gray-600 text-sm mb-2">
                Call the borrow function specifying the asset and amount.
              </p>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded block overflow-x-auto">
                ammMarket.borrow(assetAddress, amount, interestRateMode, onBehalfOf)
              </code>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 4: Receive Funds</h3>
              <p className="text-gray-600 text-sm">
                Borrowed assets are transferred directly to your wallet upon transaction confirmation.
              </p>
            </div>
          </div>
        </section>

        <section id="interest-rates" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interest Rates</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Borrow interest rates are determined by the Aave v4 Hub's interest rate model, 
            which adjusts based on utilization.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Rate Type</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Variable</td>
                  <td className="px-4 py-2 text-gray-600">Fluctuates with market utilization. Lower when demand is low.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Stable</td>
                  <td className="px-4 py-2 text-gray-600">Fixed rate at time of borrow. May be rebalanced in extreme conditions.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            Interest accrues continuously and compounds. See <a href="/developers/architecture/platform-fees" className="text-blue-600 hover:underline">Platform Fees</a> for rate details.
          </p>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Process for borrowing assets from the Hub against LP collateral."
        sectionColor="emerald"
      />
    </div>
  )
}
