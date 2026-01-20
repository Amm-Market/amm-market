"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "how-it-works", title: "How It Works" },
  { id: "health-checks", title: "Health Checks" },
  { id: "fee-accounting", title: "Fee Accounting" },
  { id: "key-benefits", title: "Key Benefits" },
]

export default function ClaimLPFeesPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Claim LP Fees</h1>
        <p className="text-lg text-gray-600 mb-8">
          How to claim trading fees accrued from your LP positions without withdrawing liquidity.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market allows users to claim trading fees accrued from their LP positions without 
            withdrawing liquidity. This means users can unlock the fees they have already earned 
            while keeping their liquidity active in the pool.
          </p>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-green-800 text-sm">
              <strong>Key Benefit:</strong> This process is fully noncustodial and does not affect 
              the collateralized status of LP shares. Liquidity remains active in the pool and 
              continues to generate new fees.
            </p>
          </div>
        </section>

        <section id="how-it-works" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fee claiming is accomplished through the <code className="bg-gray-200 px-1 rounded">decreaseLiquidityAndCollect</code> function.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Call Parameters</h3>
              <p className="text-gray-600 text-sm mb-2">
                A user can call this function with specific parameters to claim only fees:
              </p>
              <ul className="text-gray-600 text-sm space-y-1 ml-4">
                <li>• <code className="bg-gray-200 px-1 rounded">params.liquidity</code> set to <code className="bg-gray-200 px-1 rounded">0</code></li>
                <li>• <code className="bg-gray-200 px-1 rounded">params.feeAmount0</code> set to <code className="bg-gray-200 px-1 rounded">type(uint128).max</code></li>
                <li>• <code className="bg-gray-200 px-1 rounded">params.feeAmount1</code> set to <code className="bg-gray-200 px-1 rounded">type(uint128).max</code></li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Execution Flow</h3>
              <p className="text-gray-600 text-sm">
                The function skips the liquidity removal step and proceeds directly to the 
                <code className="bg-gray-200 px-1 rounded ml-1">collect</code> call on the LP Position Manager. 
                The accrued fees are transferred to the specified recipient (usually the user's own wallet).
              </p>
            </div>
          </div>
        </section>

        <section id="health-checks" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Health Checks</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Spoke performs a loan health check both before and after the fee claim action.
          </p>
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 mb-4">
            <h3 className="font-semibold text-amber-900 mb-2">Important</h3>
            <p className="text-amber-800 text-sm">
              The health check ensures that the removal of the fee value (which reduces the NFT's 
              total fullValue) does not push the loan into an unhealthy state.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            This allows users to continuously harvest their yield — a feature that is not possible 
            in protocols that require full withdrawal of the NFT to access fees.
          </p>
        </section>

        <section id="fee-accounting" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fee Accounting</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market maintains careful fee accounting for accurate valuations:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Cached Fee Values</h3>
              <p className="text-blue-800 text-sm">
                AMM Market always caches <code className="bg-blue-100 px-1 rounded">lastFee0</code> and 
                <code className="bg-blue-100 px-1 rounded ml-1">lastFee1</code> for bookkeeping.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Oracle Integration</h3>
              <p className="text-purple-800 text-sm">
                Fee accounting is included inside the <code className="bg-purple-100 px-1 rounded">oracle.getValue</code> result, 
                which returns <code className="bg-purple-100 px-1 rounded">fullValue</code> and 
                <code className="bg-purple-100 px-1 rounded ml-1">feeValue</code>.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Liquidation Calculations</h3>
              <p className="text-green-800 text-sm">
                The feeValue is used in health checks and in liquidation calculations to ensure 
                liquidators and Hubs consider accrued but uncollected fees.
              </p>
            </div>
          </div>
        </section>

        <section id="key-benefits" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market ensures that users are not forced to choose between keeping their liquidity 
            deployed and accessing accrued fees:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">1</span>
              <div>
                <span className="font-medium text-gray-900">Liquidity Remains Productive</span>
                <p className="text-gray-600 text-sm mt-0.5">Your liquidity stays active in the pool and continues generating new fees.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">2</span>
              <div>
                <span className="font-medium text-gray-900">Access Earned Returns Anytime</span>
                <p className="text-gray-600 text-sm mt-0.5">Previously earned returns are made available at any time without affecting your loan.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">3</span>
              <div>
                <span className="font-medium text-gray-900">Noncustodial Process</span>
                <p className="text-gray-600 text-sm mt-0.5">The entire process is noncustodial and does not affect the collateralized status of your LP shares.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="How to claim trading fees accrued from your LP positions without withdrawing liquidity."
        sectionColor="emerald"
      />
    </div>
  )
}
