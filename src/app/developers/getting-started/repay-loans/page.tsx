"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "repay-process", title: "Repay Process" },
  { id: "technical-details", title: "Technical Details" },
  { id: "liquidation-scenario", title: "Liquidation Scenario" },
  { id: "full-repayment", title: "Full Repayment & Cleanup" },
]

export default function RepayLoansPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Repay Loans</h1>
        <p className="text-lg text-gray-600 mb-8">
          Repayment mechanics, debt share reduction, and the path to full collateral withdrawal.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Repaying your debt is a straightforward process that strengthens the health of your 
            loan and can eventually lead to the full withdrawal of your collateral. When the user 
            repays, AMM Market reduces debt shares.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Tip:</strong> Repaying even a small amount can significantly improve your 
              health factor when it's low.
            </p>
          </div>
        </section>

        <section id="repay-process" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Repay Process</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            To repay, navigate to the loan management section for the specific loan:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 1: Choose Amount</h3>
              <p className="text-gray-600 text-sm">
                You can choose to repay a partial amount or the full debt. The app will show you 
                the total amount due, including any accrued interest.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 2: Confirm Transaction</h3>
              <p className="text-gray-600 text-sm">
                By confirming the repayment transaction, you send the specified amount of the 
                borrowed asset back to the Aave Hub.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 3: Debt Reduction</h3>
              <p className="text-gray-600 text-sm">
                This action reduces your outstanding debt shares, which in turn improves your 
                loan's health factor.
              </p>
            </div>
          </div>
        </section>

        <section id="technical-details" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Details</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Inside the Spoke, a user calls <code className="bg-gray-200 px-1 rounded">repay(tokenId, amount, isShare)</code>.
          </p>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 mb-4">
            <h3 className="font-semibold text-purple-900 mb-2">The isShare Parameter</h3>
            <p className="text-purple-800 text-sm">
              The <code className="bg-purple-100 px-1 rounded">isShare</code> parameter allows users to repay:
            </p>
            <ul className="text-purple-800 text-sm mt-2 space-y-1 ml-4">
              <li>• A specific amount of debt (in the borrowed asset)</li>
              <li>• A specific number of debt shares</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">The _repay Helper Function</h3>
            <p className="text-gray-600 text-sm">
              The <code className="bg-gray-200 px-1 rounded">_repay</code> helper function is then executed. It:
            </p>
            <ul className="text-gray-600 text-sm mt-2 space-y-1 ml-4">
              <li>• Calculates the exact number of shares to burn or assets to transfer</li>
              <li>• Updates the user's loan</li>
              <li>• Reduces the Spoke's total debt</li>
            </ul>
          </div>
        </section>

        <section id="liquidation-scenario" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Scenario</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If a loan becomes unhealthy, the protocol has mechanisms to protect solvency:
          </p>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-900 mb-2">Unhealthy Loan Handling</h3>
            <p className="text-red-800 text-sm mb-2">
              Third-party liquidators or an authorized Hub can:
            </p>
            <ul className="text-red-800 text-sm space-y-1 ml-4">
              <li>• Extract partial position liquidity</li>
              <li>• Either receive tokens directly</li>
              <li>• Or AMM Market can swap extracted tokens for the debt asset to repay the Hub</li>
            </ul>
          </div>
        </section>

        <section id="full-repayment" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Repayment & Cleanup</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Crucially, if the repayment reduces the user's debt to zero, the function calls 
            <code className="bg-gray-200 px-1 rounded ml-1">_cleanupLoan</code>.
          </p>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200 mb-4">
            <h3 className="font-semibold text-green-900 mb-2">Cleanup Process</h3>
            <p className="text-green-800 text-sm mb-2">
              This final step reverses the deposit process:
            </p>
            <ul className="text-green-800 text-sm space-y-1 ml-4">
              <li>• Clears the loan data</li>
              <li>• Removes the NFT from the user's internal ownership list</li>
              <li>• Executes a <code className="bg-green-100 px-1 rounded">safeTransferFrom</code> to send the NFT back to the user's wallet</li>
            </ul>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">Important Note</h3>
            <p className="text-amber-800 text-sm">
              This is the "withdraw" of the collateral. There is no separate withdraw function for 
              the NFT, as its return is intrinsically tied to the full repayment of the loan.
            </p>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Alternative Withdrawals</h3>
            <p className="text-blue-800 text-sm">
              Withdrawals of collateral occur implicitly when a loan is cleaned up or explicitly 
              via transform or decrease liquidity operations executed by the token owner while 
              health checks pass.
            </p>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Repayment mechanics, debt share reduction, and the path to full collateral withdrawal."
        sectionColor="emerald"
      />
    </div>
  )
}
