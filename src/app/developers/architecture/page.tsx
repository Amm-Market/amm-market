import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Protocol Architecture - Borrow Spoke",
  description:
    "Avana Borrow Spoke architecture explained. Learn about the borrower-facing execution layer, Hub data flow, LP collateral responsibilities, and Aave v4 integration.",
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
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Borrow Spoke"

          description="Responsibilities and scope of the borrower-facing Avana spoke within the Aave v4 architecture."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The Borrow Spoke is the execution layer that lets LP holders use active liquidity
            positions as collateral. It is responsible for receiving LP positions, interpreting
            position metadata, applying oracle-aware valuation logic, enforcing health checks, and
            coordinating borrows against Hub liquidity.
          </p>
          <p className="mb-4 text-gray-600 leading-relaxed">
            This page focuses on the borrower-facing side of the architecture. The separate Invest
            Spoke handles capital supply, while the Borrow Spoke handles LP-specific underwriting,
            monitoring, and liquidation behavior for each supported liquidity design.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Why it matters:</strong> LP collateral is structurally different from static
            assets, so the Borrow Spoke exists to translate pool composition, price range, fees, and
            market state into enforceable credit rules.
          </p>
        </section>

        <section id="user-experience" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">User Experience</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            Borrowers interact with the Borrow Spoke to supply LP collateral, borrow assets, manage
            open debt, repay balances, and claim earned fees. The spoke is designed to expose these
            flows through a single borrower-facing interface even when the underlying collateral types
            behave very differently across AMMs.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Transaction transparency:</strong> every action is paired with health factor
            updates, borrow-cap impact, and collateral-state context so borrowers can understand how
            a position change affects their loan in real time.
          </p>
        </section>

        <section id="example-flow" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Example Flow: Alice the LP Master</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            A practical borrower-side onboarding flow:
          </p>

          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="mb-2 font-semibold text-gray-900">Step 1: Initial Deposit</h3>
              <p className="text-sm text-gray-600">
                Alice has 5 Uniswap v3 LP positions. She deposits her first LP as collateral:
                10,000 USDC and 5 ETH in the ETH/USDC pool (ETH price = $2,000), currently worth
                approximately $20,000 in total value.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="mb-2 font-semibold text-gray-900">Step 2: Borrowing Power Calculated</h3>
              <p className="text-sm text-gray-600">
                The Borrow Spoke displays her ETH/USDC position and calculates that, with a 70%
                collateral factor, she can borrow up to $14,000. This is based on the lower-token
                collateral factor plus pool-specific risk adjustments.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="mb-2 font-semibold text-gray-900">Step 3: Borrow Multiple Assets</h3>
              <p className="text-sm text-gray-600">
                Alice borrows $6,000 USDT, $500 WBTC, $2,000 LINK, $500 UNI, and $1,000 AVAX. Her
                total borrow is $10,000. She still has unused borrowing capacity, but her health
                factor is now in the yellow zone.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Step 4: Add More Collateral</h3>
              <p className="text-sm text-gray-600">
                Alice deposits 4 more LP positions worth $50,000 combined. After the Borrow Spoke
                values each position, her aggregate borrowing capacity expands and her health returns
                to a safer range without changing the underlying Hub capital source.
              </p>
            </div>
          </div>
        </section>

        <section id="three-tier-architecture" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Three-Tier Architecture</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The borrower-side architecture follows a clear three-tier flow:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Top: Borrowers</h3>
              <p className="text-sm text-gray-600">
                Borrowers interact with the Borrow Spoke contract to deposit LP collateral, borrow
                funds, repay debt, and claim fees.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Middle: Borrow Spoke (Avana)</h3>
              <p className="text-sm text-gray-600">
                This is the intelligent layer that understands AMM-specific liquidity formats. It
                manages LP custody, calculates position-specific risk, enforces loan-level health
                checks, and coordinates liquidation behavior when collateral deteriorates.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Bottom: Aave v4 Hubs & Routed Capital</h3>
              <p className="text-sm text-gray-600">
                The Hubs provide borrowable liquidity and macro-level capital controls, while
                Invest-Spoke-routed capital and other Hub liquidity sources fund draws initiated by
                the Borrow Spoke.
              </p>
            </div>
          </div>
        </section>

        <section id="data-flow" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Data Flow</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The borrower-side data flow is unidirectional and operationally well-defined:
          </p>

          <ol className="mb-6 list-decimal list-inside space-y-4">
            <li className="text-sm text-gray-600">
              <strong className="text-gray-900">
                LP Position Manager transfers collateral into the Borrow Spoke
              </strong>{" "}
              - The spoke caches position data and begins health tracking.
            </li>
            <li className="text-sm text-gray-600">
              <strong className="text-gray-900">Borrowers draw assets through the Borrow Spoke</strong>{" "}
              - The spoke requests liquidity from one or more configured Hubs.
            </li>
            <li className="text-sm text-gray-600">
              <strong className="text-gray-900">Debt is represented as debt shares</strong> - The
              exchange rate compounds using the configured interest rate model while the spoke tracks
              borrower-specific state.
            </li>
            <li className="text-sm text-gray-600">
              <strong className="text-gray-900">Liquidations occur when required</strong> - Hubs,
              Avana liquidation nodes, or external liquidators can cause the Borrow Spoke to
              extract LP liquidity and settle debt through the appropriate liquidation path.
            </li>
          </ol>

          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Hub Interaction</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• <strong>Borrow:</strong> Borrow Spoke issues a draw call to the Hub</li>
              <li>• <strong>Repay:</strong> Borrow Spoke issues a restore call to the Hub to return funds</li>
              <li>
                • <strong>Health Check:</strong> Hub calls Borrow Spoke&apos;s{" "}
                <code className="bg-gray-100 px-1 rounded text-gray-800">getCollateralData</code> to
                fetch total LP collateral value
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
                    Tracks positions plus per-user aggregated collateral USD and debt USD, and
                    exposes{" "}
                    <code className="bg-gray-200 px-1 rounded">getUserAggregate(user)</code> for the
                    frontend and liquidation adapters.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-900">LiquidationAdapter</td>
                  <td className="px-4 py-2 text-gray-600">
                    Executes penalty accrual, soft unwind, and hard liquidation for the Borrow Spoke
                    without collapsing all LP formats into a single liquidation path.
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
                Compute and record accrued penalty
              </li>
              <li>
                <code className="bg-gray-100 px-1 rounded text-gray-800">softUnwind(user, maxUsd)</code>{" "}
                - Execute partial decrease, collect, swap, and repay
              </li>
              <li>
                <code className="bg-gray-100 px-1 rounded text-gray-800">liquidate(user)</code> -
                Execute hard liquidation if needed
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
            The Borrow Spoke does not warehouse lender capital itself. Instead, it relies on the
            Hub as the capital backbone of the system, drawing from pooled liquidity that can be
            supplied by Invest Spoke depositors and other configured Hub sources.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Capital Supply</h3>
              <p className="text-sm text-gray-600">
                Assets such as USDC, DAI, and ETH are supplied into Hub-connected capital layers,
                including the Invest Spoke. The Hub sets macro-level pricing and accounting, while
                the Borrow Spoke decides how much a borrower can safely draw against LP collateral.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Credit Lines</h3>
              <p className="text-sm text-gray-600">
                The Hub grants each Borrow Spoke a credit line defining how much borrowing capacity
                that spoke can access. This keeps LP-specific underwriting isolated while still
                preserving shared capital efficiency across the system.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Independent Health Factors</h3>
              <p className="text-sm text-gray-600">
                A user with LP collateral in multiple Borrow Spokes will have independent health
                factor calculations per spoke. A deficit in one spoke cannot be offset by collateral
                in another, which keeps market-specific risk contained.
              </p>
            </div>
          </div>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="Responsibilities and scope of the borrower-facing Avana spoke within the Aave v4 architecture."
        sectionColor="violet"
      />
    </div>
  )
}
