"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "withdrawal-process", title: "Withdrawal Process" },
  { id: "position-modifications", title: "Position Modifications" },
  { id: "after-withdrawal", title: "After Withdrawal" },
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
            Once a loan is fully repaid, the collateral is no longer needed. The "Withdraw" function 
            allows you to reclaim your original LP share.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> As explained in the Repay Loans section, the NFT withdrawal is 
              intrinsically tied to full loan repayment via the <code className="bg-blue-100 px-1 rounded">_cleanupLoan</code> function.
            </p>
          </div>
        </section>

        <section id="withdrawal-process" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Withdrawal Process</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 1: Repay All Debt</h3>
              <p className="text-gray-600 text-sm">
                Ensure all outstanding debt including accrued interest is fully repaid. Use 
                <code className="bg-gray-200 px-1 rounded ml-1">type(uint256).max</code> to repay the full amount.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 2: Automatic Cleanup</h3>
              <p className="text-gray-600 text-sm">
                When debt reaches zero, the <code className="bg-gray-200 px-1 rounded">_cleanupLoan</code> function 
                is automatically triggered, which clears loan data and initiates the NFT transfer.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 3: Receive LP Share</h3>
              <p className="text-gray-600 text-sm">
                After confirming the withdrawal, the Spoke contract will transfer the LP share back 
                to your wallet, restoring your full ownership and control over your liquidity position.
              </p>
            </div>
          </div>
        </section>

        <section id="position-modifications" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Position Modifications</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can also modify positions while maintaining collateral, as long as health checks pass:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Change Tick Range</h3>
              <p className="text-purple-800 text-sm">
                Close the existing position and create a new one (e.g., change tick range) as long 
                as both assets in the new position are approved collateral and the post-change 
                collateral value maintains loan health.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Requirements for New Positions</h3>
              <ul className="text-blue-800 text-sm space-y-1 ml-4">
                <li>• Both assets must be approved collateral</li>
                <li>• Post-change collateral value must maintain loan health</li>
                <li>• Health checks must pass before and after the modification</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="after-withdrawal" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">After Withdrawal</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once your LP share is back in your wallet, you have full control:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 text-lg">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Keep in Pool</h3>
              <p className="text-gray-600 text-xs">
                Continue earning trading fees in the DEX
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-600 text-lg">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Adjust Parameters</h3>
              <p className="text-gray-600 text-xs">
                Modify price range or liquidity amount
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 text-lg">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Full Exit</h3>
              <p className="text-gray-600 text-xs">
                Withdraw from Uniswap or Balancer entirely
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">Re-deposit Anytime</h3>
            <p className="text-green-800 text-sm">
              You can always deposit your LP share back into AMM Market to open a new loan 
              whenever you need liquidity again.
            </p>
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
