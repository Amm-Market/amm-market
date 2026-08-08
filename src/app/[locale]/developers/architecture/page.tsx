import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('architecture', {
    title: "Protocol Architecture - Borrow Spoke",
    description: "How the Borrow Spoke accepts LP collateral, values positions, and borrows from Hub liquidity.",
  })
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

export default async function BorrowSpokePage() {
  return withDocsI18n("architecture", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Borrow Spoke"
          description="The isolated LP-collateral market where users deposit positions, borrow assets, and manage loan health."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            A Borrow Spoke is an isolated LP-collateral market. It decides which pools are supported,
            how each LP position is valued, what collateral factors apply, which assets can be
            borrowed, and how liquidation works for that market.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Borrow Spokes are separated because LP positions do not all behave the same. A
            stablecoin LP, a correlated ETH-staked ETH LP, and a volatile governance-token LP need
            different risk settings, different caps, and sometimes different liquidation routes.
          </p>
        </section>

        <section id="user-experience" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrow Flow</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            From the user side, one spoke handles the full account lifecycle: deposit LP collateral,
            check borrowing capacity, borrow, repay, and claim fees when allowed. The interface
            stays consistent even when underlying LP formats differ across DEXs.
          </p>
        </section>

        <section id="example-flow" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Example Flow</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="mb-2 font-semibold text-gray-900">Step 1: Deposit LP collateral</h3>
              <p className="text-sm text-gray-600">
                The user deposits an approved LP position. The liquidity stays in the pool, but the
                spoke records it as collateral and starts tracking value and health.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="mb-2 font-semibold text-gray-900">Step 2: Capacity is calculated</h3>
              <p className="text-sm text-gray-600">
                The spoke reconstructs the position, prices the underlying exposure, applies
                collateral factors, and shows the resulting borrowing capacity.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="mb-2 font-semibold text-gray-900">Step 3: Borrow assets</h3>
              <p className="text-sm text-gray-600">
                The user draws assets from Hub liquidity up to their capacity. Debt and health
                update in the spoke after the borrow confirms.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Step 4: Add more collateral</h3>
              <p className="text-sm text-gray-600">
                Additional approved LP positions can be deposited later. Each position is valued on
                its own before contributing to aggregate capacity.
              </p>
            </div>
          </div>
        </section>

        <section id="three-tier-architecture" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Three-Tier Architecture</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Borrowers</h3>
              <p className="text-sm text-gray-600">
                Users interact with the Borrow Spoke to deposit collateral, borrow, repay, and
                manage their loan.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Borrow Spoke (Avana)</h3>
              <p className="text-sm text-gray-600">
                Values LP positions, enforces health checks, and coordinates liquidation when
                collateral no longer supports the debt.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Aave v4 Hub</h3>
              <p className="text-sm text-gray-600">
                Shared liquidity and accounting layer. Borrow Spokes draw from Hub reserves after
                spoke-side checks pass.
              </p>
            </div>
          </div>
        </section>

        <section id="data-flow" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Data Flow</h2>
          <ol className="mb-6 list-decimal list-inside space-y-4">
            <li className="text-sm text-gray-600">
              <strong className="text-gray-900">Collateral enters the spoke</strong> — the LP
              position is recorded and tracked for valuation and health.
            </li>
            <li className="text-sm text-gray-600">
              <strong className="text-gray-900">Borrow draws Hub liquidity</strong> — once capacity
              checks pass, the spoke requests assets from the Hub.
            </li>
            <li className="text-sm text-gray-600">
              <strong className="text-gray-900">Debt accrues as debt shares</strong> — interest
              compounds through the configured rate model while the spoke keeps account state in sync.
            </li>
            <li className="text-sm text-gray-600">
              <strong className="text-gray-900">Liquidation if required</strong> — unhealthy
              accounts move through the liquidation path to restore solvency.
            </li>
          </ol>

          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Hub interaction</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• <strong>Borrow:</strong> spoke draws from the Hub when a user opens or extends debt</li>
              <li>• <strong>Repay:</strong> spoke restores debt to the Hub when a user repays</li>
              <li>• <strong>Health check:</strong> Hub reads spoke collateral data via <code className="bg-gray-100 px-1 rounded text-gray-800">getCollateralData</code></li>
              <li>• <strong>Liquidation:</strong> Hub can call <code className="bg-gray-100 px-1 rounded text-gray-800">handleLiquidation</code> when risk thresholds are breached</li>
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
                  <td className="px-4 py-2 font-medium text-gray-900">Borrow Spoke</td>
                  <td className="px-4 py-2 text-gray-600">
                    Tracks LP positions, aggregate collateral value, and debt for each AMM family.
                    Exposes <code className="bg-gray-200 px-1 rounded">getUserAggregate(user)</code> for frontends and liquidators.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-900">LiquidationAdapter</td>
                  <td className="px-4 py-2 text-gray-600">
                    Runs penalty accrual, soft unwind, and hard liquidation for LP formats that need
                    specialized handling.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="hub-role" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Aave v4 Hub Role</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The Borrow Spoke does not hold lender reserves. The Hub provides pooled liquidity,
            reserve accounting, and the balance-sheet side of borrowing while the spoke handles
            LP-specific risk.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Capital supply</h3>
              <p className="text-sm text-gray-600">
                Assets such as USDC, DAI, and ETH enter through the Lend Spoke and Hub. The Borrow
                Spoke decides how much of that liquidity an LP-backed account may access.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Credit lines</h3>
              <p className="text-sm text-gray-600">
                Each Borrow Spoke has a credit line that limits how much Hub liquidity it can draw,
                keeping LP underwriting isolated while sharing capital efficiency.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Independent health factors</h3>
              <p className="text-sm text-gray-600">
                Collateral in multiple Borrow Spokes is evaluated separately. Surplus in one market
                does not automatically cover a deficit in another.
              </p>
            </div>
          </div>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How the Borrow Spoke accepts LP collateral, calculates capacity, and coordinates with the Hub."
        sectionColor="violet"
      />
    </div>
  ))
}
