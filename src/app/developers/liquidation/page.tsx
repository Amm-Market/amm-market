import type { Metadata } from "next"
import Link from "next/link"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Liquidation Framework",
  description:
    "Avana liquidation framework for vault-backed LP collateral, settlement rules, operator coverage, and position-level unwind behavior.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "three-layers", title: "Three Layers" },
  { id: "core-rules", title: "Core Rules" },
  { id: "lp-complexity", title: "LP Collateral Complexity" },
  { id: "liquidation-pathways", title: "Liquidation Pathways" },
  { id: "position-state", title: "Position State" },
  { id: "surplus-handling", title: "Surplus Handling" },
  { id: "operator-model", title: "Operator Model" },
]

export default function LiquidationDesignPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader
          title="Liquidation Design"
          description="How Avana splits liquidation entry, vault seizure, and real LP settlement."
        />

        <section id="overview" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana uses Aave for debt accounting, health factor checks, and liquidation entry, but
            Avana handles the actual settlement of the LP position behind the vault collateral.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The important split is simple: Aave sees an ERC-20 vault collateral balance, while
            Avana sees the real LP position behind that balance. Liquidation only stays safe if
            those two views always stay linked.
          </p>
          <p className="mt-4 type-body-copy text-gray-600">
            For the operator-facing sequence, see{" "}
            <Link href="/developers/liquidation/liquidators" className="text-[#01AACF] hover:underline">
              Liquidators
            </Link>
            . For the execution sequence, see{" "}
            <Link href="/developers/liquidation/flow" className="text-[#01AACF] hover:underline">
              Liquidation Flow
            </Link>
            .
          </p>
        </section>

        <section id="three-layers" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">Three Layers</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">Aave layer</h3>
              <p className="type-body-copy text-gray-600">
                Tracks debt, collateral balance, health factor, and the liquidation entry point.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">Avana adapter layer</h3>
              <p className="type-body-copy text-gray-600">
                Receives seized vault collateral, burns the vault token, and maps the liquidation
                back to the backing LP position.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">Avana settlement layer</h3>
              <p className="type-body-copy text-gray-600">
                Identifies the real LP position, unwinds or sells it, repays debt, pays the
                liquidator reward, and routes any surplus by market rule.
              </p>
            </div>
          </div>
        </section>

        <section id="core-rules" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">Core Rules</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The main rule is that Aave liquidates the ERC-20 vault collateral, while Avana settles
            the LP position behind that vault collateral.
          </p>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-900">Vault tokens must map to real value</span>
              <p className="mt-0.5 type-body-copy text-gray-600">
                A liquidated vault token amount must always correspond to actual LP collateral value.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Backing collateral cannot stay outstanding</span>
              <p className="mt-0.5 type-body-copy text-gray-600">
                Once the LP position is settled, the corresponding vault token must be burned.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">No unbacked supply</span>
              <p className="mt-0.5 type-body-copy text-gray-600">
                Active vault token supply cannot exist without active LP collateral backing it.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Surplus follows the market rule</span>
              <p className="mt-0.5 type-body-copy text-gray-600">
                Debt gets covered first, then the liquidator reward, then settlement costs, then any
                surplus handling defined by the market.
              </p>
            </li>
          </ul>
        </section>

        <section id="lp-complexity" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">LP Collateral Complexity</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            LP-backed positions are not all the same. A fungible LP token can often be settled
            proportionally, but a Uniswap v3 NFT is a single position and should usually be treated
            at the position level during liquidation.
          </p>
          <p className="type-body-copy text-gray-600">
            That is why the settlement layer needs to know the collateral family, the backing
            position, and the unwind path before it burns the matching vault supply.
          </p>
        </section>

        <section id="liquidation-pathways" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">Liquidation Pathways</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The settlement path depends on the collateral type.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Fungible LP collateral</h3>
              <ul className="ml-4 space-y-1 type-body-copy text-gray-600">
                <li>• Settlement can be proportional to the debt that must be covered.</li>
                <li>• Avana can redeem or transfer only the amount needed for the liquidation.</li>
                <li>• The remaining position can stay active if the account still satisfies health checks.</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-900">NFT-backed LP collateral</h3>
              <ul className="ml-4 space-y-1 type-body-copy text-gray-600">
                <li>• The full position moves into settlement when it is selected for liquidation.</li>
                <li>• The matching vault tokens are burned after Aave seizes the vault collateral.</li>
                <li>• Avana can unwind, sell, auction, or transfer the real LP position based on market rules.</li>
                <li>• Surplus does not automatically go to the liquidator unless the market rule says so.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="position-state" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">Position State</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">ACTIVE</h3>
              <p className="type-body-copy text-gray-600">
                The position still contributes to collateral value and its vault tokens remain backed.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">LIQUIDATING</h3>
              <p className="type-body-copy text-gray-600">
                The selected collateral is no longer withdrawable by the borrower and is being moved
                through settlement.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">SETTLED</h3>
              <p className="type-body-copy text-gray-600">
                The LP position has been resolved, and the matching vault tokens must no longer be outstanding.
              </p>
            </div>
          </div>
        </section>

        <section id="surplus-handling" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">Surplus Handling</h2>
          <p className="mb-4 type-body-copy text-gray-600">
            Settlement value first covers debt, then the liquidator reward, then settlement costs.
            Any remaining value is surplus, and that surplus follows the market rule.
          </p>
          <p className="type-body-copy text-gray-600">
            If settlement value is not enough to cover the debt and reward, the market needs a
            defined bad-debt path. The docs should not pretend the shortfall disappears.
          </p>
        </section>

        <section id="operator-model" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">Operator Model</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Liquidations remain permissionless, but protocol-operated runtimes are useful as a
            backstop for LP collateral that generic liquidators cannot always unwind safely.
          </p>
          <ul className="space-y-2 type-body-copy text-gray-600">
            <li>Liquidators must track the same risk state the protocol uses.</li>
            <li>Execution must remain atomic from debt repayment through settlement.</li>
            <li>Fee realization, route depth, and residual value should be modeled before speed.</li>
            <li>
              Partial coverage and full coverage are different cases and should not share the same routing assumptions.
            </li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How Avana splits liquidation entry, vault seizure, and LP settlement across the canonical framework."
        sectionColor="amber"
      />
    </div>
  )
}
