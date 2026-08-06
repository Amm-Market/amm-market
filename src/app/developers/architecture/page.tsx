import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Protocol Architecture - Borrow Spoke",
  description:
    "Borrow Spoke architecture for LP-backed borrowing, including borrower flows, Hub interaction, and spoke-side collateral responsibilities.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "user-experience", title: "User Experience" },
  { id: "example-flow", title: "Example Flow" },
  { id: "three-tier-architecture", title: "Three-Tier Architecture" },
  { id: "data-flow", title: "Data Flow" },
  { id: "spoke-responsibilities", title: "Spoke Responsibilities" },
  { id: "hub-role", title: "Aave v4 Hub Role" },
]

export default function BorrowSpokePage() {
  return (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Borrow Spoke"
          description="The borrower-facing execution layer that accepts LP collateral, measures risk, and borrows against Hub liquidity."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The Borrow Spoke is the place where an LP position becomes usable as collateral. It
            takes custody of the supported position for accounting, reads the data needed to
            understand that position, values it under the spoke&apos;s oracle and risk rules, and
            exposes the resulting borrowing capacity to the borrower path.
          </p>
          <p className="mb-4 text-gray-600 leading-relaxed">
            That makes the Borrow Spoke very different from a generic collateral wrapper. It has to
            understand how a listed LP is constructed, what value is recoverable in a stressed
            unwind, how health should be monitored over time, and which liquidation path applies if
            the account stops meeting the spoke&apos;s safety requirements.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Scope:</strong> LP collateral differs from static assets, so the Borrow Spoke
            turns pool composition, price range, fees, and market state into credit parameters and
            health rules for the markets it lists. The Lend Spoke handles capital entry. The Borrow
            Spoke handles LP underwriting, monitoring, and liquidation for its own markets.
          </p>
        </section>

        <section id="user-experience" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrow Flow</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            Borrowers interact with one spoke-facing surface for the full account lifecycle:
            deposit approved LP collateral, inspect available capacity, draw debt, repay balances,
            and claim fees when the market allows it. The interface can stay consistent even when
            the underlying LP formats differ, because the spoke absorbs the AMM-specific handling.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Transaction context:</strong> actions should surface health factor updates,
            borrow cap impact, and collateral state alongside the transaction so the borrower sees
            the post-action risk rather than inferring it after the fact.
          </p>
        </section>

        <section id="example-flow" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Example Flow</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">Typical borrower-side flow:</p>

          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="mb-2 font-semibold text-gray-900">Step 1: Initial Deposit</h3>
              <p className="text-sm text-gray-600">
                The borrower deposits an approved LP position into the Borrow Spoke. The position
                stays live in the AMM, but the spoke now records it as collateral and begins
                tracking the data needed for valuation and health.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="mb-2 font-semibold text-gray-900">Step 2: Borrowing Power Calculated</h3>
              <p className="text-sm text-gray-600">
                The Borrow Spoke reconstructs the position, prices the underlying exposure, applies
                the relevant collateral factor, and then applies any pool-specific risk treatment.
                The output of that process is the borrowing capacity shown to the account.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="mb-2 font-semibold text-gray-900">Step 3: Borrow Multiple Assets</h3>
              <p className="text-sm text-gray-600">
                The borrower draws assets against the capacity approved by the spoke. After the
                borrow executes, the spoke updates the account&apos;s debt representation and recomputes
                health using the same market rules that admitted the collateral.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Step 4: Add More Collateral</h3>
              <p className="text-sm text-gray-600">
                Additional approved LP positions can be added later. Each new position is evaluated
                under the spoke&apos;s listing, pricing, and risk rules before its contribution is
                folded into aggregate capacity.
              </p>
            </div>
          </div>
        </section>

        <section id="three-tier-architecture" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Three-Tier Architecture</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The borrower path is easier to reason about if you separate who initiates the action,
            which layer interprets LP collateral, and which layer supplies cash:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Top: Borrowers</h3>
              <p className="text-sm text-gray-600">
                Borrowers call the spoke to deposit LP collateral, borrow funds, repay debt, and
                claim fees. From their perspective, the spoke is the operational entry point for
                the account.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Middle: Borrow Spoke (Avana)</h3>
              <p className="text-sm text-gray-600">
                This layer translates AMM-specific position data into lending state. It manages LP
                custody, computes position-specific risk, enforces health checks, and coordinates
                the liquidation path when the collateral no longer supports the debt.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Bottom: Aave v4 Hub & Routed Capital</h3>
              <p className="text-sm text-gray-600">
                The Hub is the shared liquidity source and accounting layer below the spoke.
                Lend-Spoke-routed capital and other configured Hub sources fund the draws that the
                Borrow Spoke authorizes.
              </p>
            </div>
          </div>
        </section>

        <section id="data-flow" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Data Flow</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The key data path runs from LP state to spoke accounting to Hub liquidity actions. In
            practice it looks like this:
          </p>

          <ol className="mb-6 list-decimal list-inside space-y-4">
            <li className="text-sm text-gray-600">
              <strong className="text-gray-900">
                LP Position Manager transfers collateral into the Borrow Spoke
              </strong>{" "}
              - The spoke stores the position reference, caches the metadata it needs, and starts
              using that state for valuation and health tracking.
            </li>
            <li className="text-sm text-gray-600">
              <strong className="text-gray-900">Borrowers draw assets through the Borrow Spoke</strong>{" "}
              - Once the account has capacity, the spoke requests liquidity from one or more
              configured Hubs.
            </li>
            <li className="text-sm text-gray-600">
              <strong className="text-gray-900">Debt is represented as debt shares</strong> - The
              exchange rate compounds under the configured interest-rate model while the spoke keeps
              borrower-specific debt and collateral state in sync.
            </li>
            <li className="text-sm text-gray-600">
              <strong className="text-gray-900">Liquidations occur when required</strong> - Hubs,
              Avana liquidation nodes, or external liquidators can cause the Borrow Spoke to move
              the LP into the correct unwind path and settle debt through the appropriate
              liquidation sequence.
            </li>
          </ol>

          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Hub Interaction</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• <strong>Borrow:</strong> the Borrow Spoke issues a draw call to the Hub when a borrower opens or extends debt</li>
              <li>• <strong>Repay:</strong> the Borrow Spoke issues a restore call to the Hub when debt is paid back</li>
              <li>
                • <strong>Health Check:</strong> Hub calls Borrow Spoke&apos;s{" "}
                <code className="bg-gray-100 px-1 rounded text-gray-800">getCollateralData</code> to
                fetch the spoke&apos;s current LP collateral value
              </li>
              <li>
                • <strong>Liquidation:</strong> If aggregate spoke risk breaches threshold, the Hub
                can call{" "}
                <code className="bg-gray-100 px-1 rounded text-gray-800">handleLiquidation</code>
              </li>
            </ul>
          </div>
        </section>

        <section id="spoke-responsibilities" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Spoke Responsibilities</h2>

          <div className="mb-6 overflow-x-auto">
            <table className="w-full overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900">Component</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900">Responsibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-900">Borrow Spoke (per AMM)</td>
                  <td className="px-4 py-2 text-gray-600">
                    Maintains position records, aggregate collateral USD, and debt USD for that AMM
                    family, and exposes{" "}
                    <code className="bg-gray-200 px-1 rounded">getUserAggregate(user)</code> for
                    frontends and liquidation adapters.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-900">LiquidationAdapter</td>
                  <td className="px-4 py-2 text-gray-600">
                    Runs penalty accrual, soft unwind, and hard liquidation for the Borrow Spoke
                    without forcing every LP format through one generic liquidation routine.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <h3 className="mb-2 font-semibold text-gray-900">LiquidationAdapter Functions</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <code className="bg-gray-100 px-1 rounded text-gray-800">applyPenalty(user)</code> -
                records the penalty that has accrued on the user before unwind or liquidation
              </li>
              <li>
                <code className="bg-gray-100 px-1 rounded text-gray-800">softUnwind(user, maxUsd)</code>{" "}
                - executes a partial decrease, collects the proceeds, swaps as needed, and repays
                debt up to the requested amount
              </li>
              <li>
                <code className="bg-gray-100 px-1 rounded text-gray-800">liquidate(user)</code> -
                runs the hard liquidation path when partial recovery is no longer enough
              </li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">
              Events: PenaltyAccrued, SoftUnwindExecuted, HardLiquidationExecuted
            </p>
          </div>
        </section>

        <section id="hub-role" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Aave v4 Hub Role</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The Borrow Spoke does not hold lender reserves on its own. It depends on the Hub for
            pooled liquidity, reserve accounting, and the balance-sheet side of borrowing, while
            the spoke stays focused on collateral-specific risk decisions.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Capital Supply</h3>
              <p className="text-sm text-gray-600">
                Assets such as USDC, DAI, and ETH can enter through Hub-connected capital layers,
                including the Lend Spoke. The Hub manages the shared pool and its accounting, while
                the Borrow Spoke decides what portion of that liquidity an LP-backed account may
                safely access.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Credit Lines</h3>
              <p className="text-sm text-gray-600">
                The Hub grants each Borrow Spoke a credit line that limits how much shared
                liquidity that spoke can draw. This keeps LP-specific underwriting isolated without
                giving up the capital efficiency of a shared reserve layer.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Independent Health Factors</h3>
              <p className="text-sm text-gray-600">
                A user with LP collateral in multiple Borrow Spokes has a separate health factor in
                each spoke. Surplus in one market does not automatically rescue a shortfall in
                another, which contains risk to the market that created it.
              </p>
            </div>
          </div>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How the borrower-facing spoke accepts LP collateral, computes borrowing capacity, and coordinates with the Hub."
        sectionColor="violet"
      />
    </div>
  )
}
