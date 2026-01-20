import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Key Concepts",
  description: "Understand core concepts of AMM Market: LP positions as collateral, oracle valuation, borrowing process, health monitoring, and fee collection.",
}

const sections = [
  { id: "core-insight", title: "Core Insight" },
  { id: "user-flow", title: "User Flow" },
  { id: "oracle-valuation", title: "Oracle & Valuation" },
  { id: "borrowing-process", title: "Borrowing Process" },
  { id: "health-monitoring", title: "Health Monitoring" },
  { id: "fee-collection", title: "Fee Collection" },
]

export default function KeyConceptsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Key Concepts</h1>
        <p className="text-lg text-gray-600 mb-8">
          Understanding the core mechanics of how AMM Market treats LP positions as sophisticated financial instruments.
        </p>

        <section id="core-insight" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core Insight</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The core insight behind AMM Market is that an LP position is not merely a bundle of two tokens; 
            it is a sophisticated financial instrument whose value is composed of principal liquidity and 
            accrued trading fees, all confined within a specific price range.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Traditional lending protocols, which treat assets as fungible ERC20 tokens, cannot accurately 
            assess or manage this type of collateral. AMM Market solves this by building on the proven 
            foundation of Aave v4—a battle-tested and audited codebase specifically designed to integrate 
            natively with Aave v4's Hub-and-Spoke model.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Context-Aware Risk Management:</strong> LP shares carry path-dependent risk (impermanent loss, fee accrual, oracle drift). AMM Market 
            is context-aware—it can track pool composition, volatility bands, and oracle quality, then 
            tune LTVs and liquidation paths accordingly.
          </p>
        </section>

        <section id="user-flow" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Flow</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market is designed for both simplicity and security. The process begins with depositing 
            LP shares into AMM Market. This action is the foundation of the entire process, as the LP 
            share serves as a unique, verifiable title to their liquidity position.
          </p>
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">1. Deposit</h3>
              <p className="text-gray-600 text-sm">
                Upon deposit, the user's LP shares are securely held within the Spoke, which then interacts 
                with the Aave v4 Hub to establish a line of credit. This does not remove their liquidity 
                from the pool—their LP share remains active, continuing to earn fees and provide liquidity 
                whether on Balancer or Uniswap.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">2. Borrow</h3>
              <p className="text-gray-600 text-sm">
                Borrowing occurs by selecting an optimal Hub based on factors like available liquidity and 
                premiums, drawing funds directly from the Hub while tracking debt shares internally.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">3. Interest Accrual</h3>
              <p className="text-gray-600 text-sm">
                Interest accrues on debts using a compounded model via the interest rate model contract, 
                incorporating utilization and reserve factors.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">4. Manage Position</h3>
              <p className="text-gray-600 text-sm">
                Users can repay loans, collect fees from their positions, or adjust liquidity without full 
                redemption. The architecture ensures risk isolation, with AMM Market managing per-position 
                health checks and the Hub enforcing aggregate caps.
              </p>
            </div>
          </div>
        </section>

        <section id="oracle-valuation" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Oracle & Valuation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Spoke uses a sophisticated oracle system to determine the real-time value of the deposited 
            NFT, taking into account:
          </p>
          <ul className="space-y-2 text-gray-600 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Current prices of the two underlying tokens</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>The specific price range (ticks) of the LP position</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Accrued trading fees</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Pool composition and liquidity depth</span>
            </li>
          </ul>
          <p className="text-gray-600 text-sm">
            <strong>Collateral Calculation:</strong> Based on this valuation and a predefined collateral factor, the Spoke calculates the maximum 
            amount of an asset (such as USDC) that the user can borrow.
          </p>
        </section>

        <section id="borrowing-process" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Borrowing Process</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The user can initiate a borrow transaction, and the Spoke, in turn, sources the required funds 
            from the Aave v4 Hub.
          </p>
          <p className="text-gray-600 text-sm mb-4">
            <strong>Note:</strong> This borrowing is not a direct interaction between the end-user and the Hub; instead, the 
            Spoke acts as an intermediary, borrowing on behalf of the user. The user is now responsible 
            for repaying the borrowed amount plus interest.
          </p>
        </section>

        <section id="health-monitoring" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Health Monitoring & Liquidation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The protocol continuously monitors the health of the loan by comparing the current value of 
            the collateralized NFT against the outstanding debt.
          </p>
          <div className="space-y-4 mb-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Healthy Position</h3>
              <p className="text-gray-600 text-sm">
                Collateral value comfortably exceeds debt. Position is safe from liquidation.
              </p>
            </div>
            <div className="border-l-4 border-red-400 pl-3">
              <h3 className="font-semibold text-gray-900 mb-1">At Risk</h3>
              <p className="text-gray-600 text-sm">
                If collateral value drops due to market movements, bringing the LTV above a critical 
                threshold, the position becomes eligible for liquidation.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            In a liquidation event, a liquidator can repay a portion of the debt and seize a corresponding 
            portion of the NFT's underlying assets, ensuring the system remains solvent. Liquidations can 
            be user-initiated or triggered by the Hub for Spoke-level solvency.
          </p>
        </section>

        <section id="fee-collection" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fee Collection</h2>
          <p className="text-gray-600 text-sm">
            <strong>Claim Fees Anytime:</strong> Crucially, at any time, the user can reclaim their accrued trading fees by calling a 
            dedicated function, which instructs the Spoke to collect the fees from the liquidity 
            pools on their behalf—all without affecting the collateralized status of the NFT.
          </p>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Understanding the core mechanics of how AMM Market treats LP positions as sophisticated financial instruments."
        sectionColor="blue"
      />
    </div>
  )
}
