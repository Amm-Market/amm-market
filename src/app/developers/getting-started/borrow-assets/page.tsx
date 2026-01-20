"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "borrow-checks", title: "Borrow Checks" },
  { id: "health-check", title: "Health Check" },
  { id: "internal-accounting", title: "Internal Accounting" },
  { id: "borrowable-assets", title: "Borrowable Assets" },
  { id: "borrowing-power", title: "Borrowing Power" },
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
            With the NFT deposited, the user can call <code className="bg-gray-200 px-1 rounded">borrow(tokenId, amount)</code>. 
            The Spoke first performs a series of checks before executing the borrow.
          </p>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 text-sm">
              <strong>Important:</strong> Borrowing creates debt that accrues interest. Monitor your 
              health factor to avoid liquidation.
            </p>
          </div>
        </section>

        <section id="borrow-checks" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Borrow Checks</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Spoke performs a series of checks before allowing a borrow:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">1. Ownership Verification</h3>
              <p className="text-gray-600 text-sm">
                Verifies the caller is the NFT's owner.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">2. Hub Selection</h3>
              <p className="text-gray-600 text-sm">
                Selects an appropriate Aave Hub based on available liquidity and cost.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">3. Debt Limits</h3>
              <p className="text-gray-600 text-sm">
                Checks the user's new debt against global and per-token debt limits.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">4. Health Check</h3>
              <p className="text-gray-600 text-sm">
                The most critical check — ensures the loan remains healthy after borrowing.
              </p>
            </div>
          </div>
        </section>

        <section id="health-check" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Health Check</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The most critical check is the health check. The Spoke calls <code className="bg-gray-200 px-1 rounded">_requireLoanIsHealthy</code>, 
            which performs the following:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Oracle Valuation</h3>
              <p className="text-blue-800 text-sm">
                Calls the oracle to get the NFT's current value.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Collateral Value Calculation</h3>
              <p className="text-purple-800 text-sm mb-2">
                Calculates a collateralValue using the formula:
              </p>
              <code className="text-xs bg-purple-100 px-2 py-1 rounded block overflow-x-auto">
                collateralValue = fullValue × collateralFactorX32 / 2^32
              </code>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">Revert Condition</h3>
              <p className="text-red-800 text-sm">
                If the user's requested debt exceeds this collateralValue, the transaction reverts.
              </p>
            </div>
          </div>
        </section>

        <section id="internal-accounting" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Internal Accounting</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If all checks pass, the Spoke updates its internal accounting:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">1. Calculate Debt Shares</h3>
              <p className="text-gray-600 text-sm">
                Calculates the number of "debt shares" that represent the user's obligation. This allows 
                interest to accrue over time without constantly updating raw debt amounts.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">2. Borrow from Hub</h3>
              <p className="text-gray-600 text-sm">
                Calls <code className="bg-gray-200 px-1 rounded">_borrowFromHub</code>, which interacts 
                with the Aave Hub to draw the required funds.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">3. Transfer & Emit</h3>
              <p className="text-gray-600 text-sm">
                The borrowed tokens are transferred to the user, and a <code className="bg-gray-200 px-1 rounded">Borrow</code> event 
                is emitted for off-chain indexing.
              </p>
            </div>
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
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 text-sm">
              <strong>Recommended:</strong> Borrow ≤ 60% of max to buffer against price volatility.
            </p>
          </div>
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
