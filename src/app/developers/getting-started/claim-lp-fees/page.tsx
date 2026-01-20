"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "fee-accrual", title: "Fee Accrual" },
  { id: "claiming-process", title: "Claiming Process" },
  { id: "fee-distribution", title: "Fee Distribution" },
  { id: "tax-considerations", title: "Tax Considerations" },
]

export default function ClaimLPFeesPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Claim LP Fees</h1>
        <p className="text-lg text-gray-600 mb-8">
          How accrued trading fees from underlying LP positions are tracked and claimed.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            One of AMM Market's key benefits is that your LP positions continue earning trading 
            fees while serving as collateral. These fees accrue in the underlying DEX and can 
            be claimed separately from your collateral.
          </p>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-green-800 text-sm">
              <strong>Key Benefit:</strong> LP fees are yours to claim regardless of your loan status. 
              They are not used to repay debt automatically.
            </p>
          </div>
        </section>

        <section id="fee-accrual" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fee Accrual</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Trading fees accrue based on the underlying DEX mechanics:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">DEX Type</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Fee Accrual Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Uniswap v2 / Aerodrome</td>
                  <td className="px-4 py-2 text-gray-600">Fees compound into LP token value automatically</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Uniswap v3</td>
                  <td className="px-4 py-2 text-gray-600">Fees accrue separately and must be collected</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Curve</td>
                  <td className="px-4 py-2 text-gray-600">Fees compound into LP token value + CRV rewards</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="claiming-process" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Claiming Process</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The claiming process varies by DEX type:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">For Uniswap v3 Positions</h3>
              <p className="text-gray-600 text-sm mb-2">
                Fees must be explicitly collected from the position NFT.
              </p>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded block overflow-x-auto">
                ammMarket.collectFees(tokenId, recipient)
              </code>
              <p className="text-gray-500 text-xs mt-2">
                Returns: (uint256 amount0, uint256 amount1) — fees in each token
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">For Auto-Compounding Pools</h3>
              <p className="text-gray-600 text-sm mb-2">
                Fees are automatically added to your LP token value. No explicit claim needed.
              </p>
              <p className="text-gray-500 text-xs">
                Your LP tokens are worth more over time as fees compound.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">For Reward Tokens (CRV, AERO, etc.)</h3>
              <p className="text-gray-600 text-sm mb-2">
                External reward tokens are claimed separately.
              </p>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded block overflow-x-auto">
                ammMarket.claimRewards(lpToken, recipient)
              </code>
            </div>
          </div>
        </section>

        <section id="fee-distribution" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fee Distribution</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            When you claim fees:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>100% to you:</strong> All trading fees belong to the LP token holder</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>No protocol cut:</strong> AMM Market does not take a share of LP fees</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Direct to wallet:</strong> Claimed fees go directly to your specified address</span>
            </li>
          </ul>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Fee Impact on Collateral Value</h3>
            <p className="text-blue-800 text-sm">
              For auto-compounding pools, accrued fees increase your LP token value, which 
              increases your collateral value and borrowing power. This creates a positive 
              feedback loop for long-term positions.
            </p>
          </div>
        </section>

        <section id="tax-considerations" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tax Considerations</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            LP fees may be taxable income in your jurisdiction. Consider:
          </p>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Claimed fees are typically treated as income at time of receipt</li>
            <li>• Auto-compounded fees may have different tax treatment</li>
            <li>• Keep records of all fee claims for tax reporting</li>
            <li>• Consult a tax professional for advice specific to your situation</li>
          </ul>
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 text-sm">
              <strong>Disclaimer:</strong> This is not tax advice. Tax treatment varies by 
              jurisdiction and individual circumstances.
            </p>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="How accrued trading fees from underlying LP positions are tracked and claimed."
        sectionColor="emerald"
      />
    </div>
  )
}
