import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Withdraw Collateral",
  description: "How to withdraw LP collateral from AMM Market after repaying your loan. Understand the withdrawal process and position modifications.",
}

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
          <p className="text-gray-500 text-sm">
            <strong>Note:</strong> As explained in the Repay Loans section, the NFT withdrawal is 
            intrinsically tied to full loan repayment via the <code className="bg-gray-100 px-1 rounded text-gray-800">_cleanupLoan</code> function.
          </p>
        </section>

        <section id="withdrawal-process" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Withdrawal Process</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Step 1: Repay All Debt</h3>
              <p className="text-gray-600 text-sm">
                Ensure all outstanding debt including accrued interest is fully repaid. Use 
                <code className="bg-gray-100 px-1 rounded text-gray-800 ml-1">type(uint256).max</code> to repay the full amount.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Step 2: Automatic Cleanup</h3>
              <p className="text-gray-600 text-sm">
                When debt reaches zero, the <code className="bg-gray-100 px-1 rounded text-gray-800">_cleanupLoan</code> function 
                is automatically triggered, which clears loan data and initiates the NFT transfer.
              </p>
            </div>
            <div>
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
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Change Tick Range</h3>
              <p className="text-gray-600 text-sm">
                Close the existing position and create a new one (e.g., change tick range) as long 
                as both assets in the new position are approved collateral and the post-change 
                collateral value maintains loan health.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Requirements for New Positions</h3>
              <ul className="text-gray-600 text-sm space-y-1 ml-4">
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
          <ul className="space-y-3 mb-6">
            <li>
              <span className="font-medium text-gray-900">Keep in Pool</span>
              <span className="text-gray-600 text-sm"> — Continue earning trading fees in the DEX</span>
            </li>
            <li>
              <span className="font-medium text-gray-900">Adjust Parameters</span>
              <span className="text-gray-600 text-sm"> — Modify price range or liquidity amount</span>
            </li>
            <li>
              <span className="font-medium text-gray-900">Full Exit</span>
              <span className="text-gray-600 text-sm"> — Withdraw from Uniswap or Balancer entirely</span>
            </li>
          </ul>
          <p className="text-gray-600 text-sm">
            <strong>Re-deposit Anytime:</strong> You can always deposit your LP share back into AMM Market 
            to open a new loan whenever you need liquidity again.
          </p>
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
