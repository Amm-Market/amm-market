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
            With the NFT deposited, the user can call <code className="bg-gray-100 px-1 rounded text-gray-800">borrow(tokenId, amount)</code>. 
            The Spoke first performs a series of checks before executing the borrow.
          </p>
          <p className="text-amber-700 text-sm border-l-4 border-amber-400 pl-3">
            <strong>Important:</strong> Borrowing creates debt that accrues interest. Monitor your 
            health factor to avoid liquidation.
          </p>
        </section>

        <section id="borrow-checks" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Borrow Checks</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Spoke performs a series of checks before allowing a borrow:
          </p>
          <div className="space-y-4">
            <div className="border-b border-gray-100 pb-3">
              <h3 className="font-semibold text-gray-900 mb-1">1. Ownership Verification</h3>
              <p className="text-gray-600 text-sm">
                Verifies the caller is the NFT's owner.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <h3 className="font-semibold text-gray-900 mb-1">2. Hub Selection</h3>
              <p className="text-gray-600 text-sm">
                Selects an appropriate Aave Hub based on available liquidity and cost.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <h3 className="font-semibold text-gray-900 mb-1">3. Debt Limits</h3>
              <p className="text-gray-600 text-sm">
                Checks the user's new debt against global and per-token debt limits.
              </p>
            </div>
            <div>
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
            The most critical check is the health check. The Spoke calls <code className="bg-gray-100 px-1 rounded text-gray-800">_requireLoanIsHealthy</code>, 
            which performs the following:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Oracle Valuation</h3>
              <p className="text-gray-600 text-sm">
                Calls the oracle to get the NFT's current value.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Collateral Value Calculation</h3>
              <p className="text-gray-600 text-sm mb-2">
                Calculates a collateralValue using the formula:
              </p>
              <code className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded block overflow-x-auto">
                collateralValue = fullValue × collateralFactorX32 / 2^32
              </code>
            </div>
            <div className="border-l-4 border-red-400 pl-3">
              <h3 className="font-semibold text-gray-900 mb-2">Revert Condition</h3>
              <p className="text-gray-600 text-sm">
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
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">1. Calculate Debt Shares</h3>
              <p className="text-gray-600 text-sm">
                Calculates the number of "debt shares" that represent the user's obligation. This allows 
                interest to accrue over time without constantly updating raw debt amounts.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">2. Borrow from Hub</h3>
              <p className="text-gray-600 text-sm">
                Calls <code className="bg-gray-100 px-1 rounded text-gray-800">_borrowFromHub</code>, which interacts 
                with the Aave Hub to draw the required funds.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Transfer & Emit</h3>
              <p className="text-gray-600 text-sm">
                The borrowed tokens are transferred to the user, and a <code className="bg-gray-100 px-1 rounded text-gray-800">Borrow</code> event 
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
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><strong className="text-gray-900">USDC</strong> — Primary stablecoin</li>
            <li><strong className="text-gray-900">USDT</strong> — Tether USD</li>
            <li><strong className="text-gray-900">DAI</strong> — MakerDAO stablecoin</li>
            <li><strong className="text-gray-900">ETH</strong> — Native Ether</li>
          </ul>
        </section>

        <section id="borrowing-power" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Borrowing Power</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your borrowing power is calculated as:
          </p>
          <code className="text-sm text-gray-800 bg-gray-100 px-3 py-2 rounded block mb-4">
            Borrowing Power = Collateral Value × LTV Ratio
          </code>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Example:</strong> LP collateral value of $10,000 with 75% LTV = <strong>$7,500 maximum borrow</strong>.
          </p>
          <p className="text-gray-500 text-sm mb-4">
            LTV ratios vary by LP type. See <a href="/developers/architecture/collateral-factors" className="text-blue-600 hover:underline">Collateral Factors</a> for details.
          </p>
          <p className="text-amber-700 text-sm border-l-4 border-amber-400 pl-3">
            <strong>Recommended:</strong> Borrow ≤ 60% of max to buffer against price volatility.
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
