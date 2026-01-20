"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "withdrawal-conditions", title: "Withdrawal Conditions" },
  { id: "withdrawal-process", title: "Withdrawal Process" },
  { id: "partial-withdrawal", title: "Partial Withdrawal" },
  { id: "emergency-scenarios", title: "Emergency Scenarios" },
]

export default function WithdrawCollateralPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Withdraw Collateral</h1>
        <p className="text-lg text-gray-600 mb-8">
          Conditions and steps required to withdraw LP tokens after debt obligations are met.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Withdrawing collateral returns your LP tokens to your wallet. The protocol enforces 
            health factor requirements to ensure remaining positions stay solvent.
          </p>
        </section>

        <section id="withdrawal-conditions" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Withdrawal Conditions</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can withdraw collateral when:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 flex items-start gap-3">
              <span className="text-green-500 text-lg">✓</span>
              <div>
                <span className="font-medium text-green-900">No Outstanding Debt</span>
                <p className="text-green-800 text-sm mt-0.5">
                  If you have no borrows, you can withdraw all collateral freely.
                </p>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 flex items-start gap-3">
              <span className="text-blue-500 text-lg">✓</span>
              <div>
                <span className="font-medium text-blue-900">Health Factor Remains Above 1.0</span>
                <p className="text-blue-800 text-sm mt-0.5">
                  With active debt, withdrawals are only allowed if your health factor stays above 1.0 after withdrawal.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Health Factor Check</h3>
            <p className="text-gray-600 text-sm mb-2">
              Before withdrawal, the protocol calculates your post-withdrawal health factor:
            </p>
            <code className="text-xs bg-gray-200 px-2 py-1 rounded block overflow-x-auto">
              newHF = (remainingCollateral × liquidationThreshold) / totalDebt
            </code>
            <p className="text-gray-500 text-xs mt-2">
              If newHF &lt; 1.0, the transaction reverts.
            </p>
          </div>
        </section>

        <section id="withdrawal-process" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Withdrawal Process</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 1: Check Withdrawable Amount</h3>
              <p className="text-gray-600 text-sm mb-2">
                Query the maximum amount you can withdraw while maintaining HF &gt; 1.0.
              </p>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded block overflow-x-auto">
                uint256 maxWithdraw = ammMarket.getMaxWithdrawable(user, lpToken)
              </code>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 2: Execute Withdrawal</h3>
              <p className="text-gray-600 text-sm mb-2">
                Call withdraw with your LP token address and desired amount.
              </p>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded block overflow-x-auto">
                ammMarket.withdraw(lpTokenAddress, amount, receiverAddress)
              </code>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 3: Receive LP Tokens</h3>
              <p className="text-gray-600 text-sm">
                LP tokens are transferred to the specified receiver address upon confirmation.
              </p>
            </div>
          </div>
        </section>

        <section id="partial-withdrawal" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Partial Withdrawal</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can withdraw a portion of your collateral as long as the health factor requirement is met.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Example</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Current collateral: $10,000 LP tokens</li>
              <li>• Current debt: $5,000</li>
              <li>• Liquidation threshold: 80%</li>
              <li>• Current HF: ($10,000 × 0.8) / $5,000 = 1.6</li>
              <li>• Max withdrawable: ~$3,750 (leaves HF at ~1.0)</li>
            </ul>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            The dashboard shows your maximum withdrawable amount in real-time.
          </p>
        </section>

        <section id="emergency-scenarios" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Emergency Scenarios</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In certain situations, you may need to act quickly:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-1">LP Value Dropping</h3>
              <p className="text-yellow-800 text-sm">
                If your LP value is declining, consider repaying debt first to free up withdrawal capacity.
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-1">Near Liquidation</h3>
              <p className="text-red-800 text-sm">
                If HF is close to 1.0, you cannot withdraw. Add collateral or repay debt to improve your position.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Full Exit</h3>
              <p className="text-gray-600 text-sm">
                To withdraw all collateral, first repay all debt (use <code className="bg-gray-200 px-1 rounded">type(uint256).max</code> for full repayment).
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Conditions and steps required to withdraw LP tokens after debt obligations are met."
        sectionColor="emerald"
      />
    </div>
  )
}
