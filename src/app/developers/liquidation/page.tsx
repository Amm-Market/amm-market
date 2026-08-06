import type { Metadata } from "next"
import Link from "next/link"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Liquidation Framework",
  description:
    "How Avana handles liquidation for vault-backed LP collateral after Aave triggers the liquidation entry point.",
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
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Liquidation Design"
          description="How liquidation entry, vault seizure, and LP settlement are split across Aave and Avana."
        />

        <section id="overview" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Aave is the system that decides when a position can be liquidated, but it does not
            know how to settle the underlying LP. Avana uses Aave for debt accounting, health
            checks, and the liquidation entry point, then takes over to resolve the real position
            that sits behind the vault collateral.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The critical design constraint is that two views of collateral must stay aligned. Aave
            sees an ERC-20 vault token balance, while Avana tracks the LP position that actually
            backs that balance. Liquidation remains sound only if seizing the vault representation
            always leads to the correct LP settlement path.
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
                Tracks debt, vault collateral balance, health factor, and the liquidation entry
                point that authorizes seizure.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">Avana adapter layer</h3>
              <p className="type-body-copy text-gray-600">
                Receives the seized vault collateral, burns the corresponding vault token, and maps
                the liquidation event back to the LP position that actually backed it.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">Avana settlement layer</h3>
              <p className="type-body-copy text-gray-600">
                Identifies the real LP position, runs the appropriate unwind or sale path, repays
                debt, pays the liquidator reward, and routes any surplus according to the market
                rule.
              </p>
            </div>
          </div>
        </section>

        <section id="core-rules" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">Core Rules</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The main rule is simple but strict: Aave liquidates the ERC-20 vault collateral, and
            Avana settles the LP position behind that vault collateral. Everything else in the
            design exists to keep those two steps consistent.
          </p>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-900">Vault tokens must map to real value</span>
              <p className="mt-0.5 type-body-copy text-gray-600">
                A liquidated vault token amount must always correspond to real LP collateral value,
                not a synthetic balance that cannot be recovered.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Backing collateral cannot stay outstanding</span>
              <p className="mt-0.5 type-body-copy text-gray-600">
                Once the LP position is settled, the corresponding vault token must be burned so the
                representation does not outlive the asset it was meant to track.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">No unbacked supply</span>
              <p className="mt-0.5 type-body-copy text-gray-600">
                Active vault token supply cannot exist without active LP collateral behind it.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Surplus follows the market rule</span>
              <p className="mt-0.5 type-body-copy text-gray-600">
                Debt gets covered first, then the liquidator reward, then settlement costs, and
                only then does any remaining value follow the market&apos;s surplus rule.
              </p>
            </li>
          </ul>
        </section>

        <section id="lp-complexity" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">LP Collateral Complexity</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            LP-backed positions do not all behave the same way during liquidation. A fungible LP
            token can often be redeemed or transferred proportionally, while a Uniswap v3 NFT is a
            single discrete position whose range, fee accrual, and unwind route matter at the
            position level.
          </p>
          <p className="type-body-copy text-gray-600">
            That is why the settlement layer needs to know the collateral family, the exact backing
            position, and the intended unwind path before it clears the matching vault supply.
          </p>
        </section>

        <section id="liquidation-pathways" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">Liquidation Pathways</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The settlement path depends on what kind of LP collateral sits behind the vault token.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Fungible LP collateral</h3>
              <ul className="ml-4 space-y-1 type-body-copy text-gray-600">
                <li>• Settlement can be proportional to the debt that must be covered, rather than forcing the entire LP balance through liquidation.</li>
                <li>• Avana can redeem or transfer only the amount needed for the liquidation when the market design supports partial recovery.</li>
                <li>• The remaining position can stay active if the account still satisfies the required health checks afterward.</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-900">NFT-backed LP collateral</h3>
              <ul className="ml-4 space-y-1 type-body-copy text-gray-600">
                <li>• The full position moves into settlement when it is selected for liquidation because the NFT itself is the collateral unit being resolved.</li>
                <li>• The matching vault tokens are burned after Aave seizes the vault collateral and Avana maps that seizure back to the NFT position.</li>
                <li>• Avana can unwind, sell, auction, or transfer the real LP position based on the market rules for that collateral family.</li>
                <li>• Surplus does not automatically go to the liquidator unless the market rule explicitly says so.</li>
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
                The position is still contributing collateral value, and the outstanding vault
                tokens remain fully backed by that live LP position.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">LIQUIDATING</h3>
              <p className="type-body-copy text-gray-600">
                The selected collateral is no longer withdrawable by the borrower and is actively
                moving through the settlement path.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">SETTLED</h3>
              <p className="type-body-copy text-gray-600">
                The LP position has been resolved, and the matching vault tokens must no longer be
                outstanding.
              </p>
            </div>
          </div>
        </section>

        <section id="surplus-handling" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">Surplus Handling</h2>
          <p className="mb-4 type-body-copy text-gray-600">
            Settlement value is applied in a fixed order. It first covers debt, then the
            liquidator reward, then settlement costs. Any value left after those obligations is
            surplus, and that surplus follows the market rule for the collateral being settled.
          </p>
          <p className="type-body-copy text-gray-600">
            If settlement value is not enough to cover the debt and reward, the market needs an
            explicit bad-debt path. Liquidation documentation should describe that shortfall as a
            real state to handle, not as something that disappears automatically.
          </p>
        </section>

        <section id="operator-model" className="mb-12">
          <h2 className="type-section-title mb-4 text-gray-900">Operator Model</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Liquidations remain permissionless, but LP collateral often benefits from a protocol
            backstop that knows how to execute the expected unwind path. Generic liquidators may be
            able to repay debt, yet still lack the venue-specific logic needed to settle the
            position efficiently or safely.
          </p>
          <ul className="space-y-2 type-body-copy text-gray-600">
            <li>Liquidators must track the same risk state and collateral state that the protocol uses.</li>
            <li>Execution must remain atomic from debt repayment through settlement.</li>
            <li>Fee realization, route depth, and residual value should be modeled before optimizing only for speed.</li>
            <li>Partial coverage and full coverage are different cases and should not share the same routing assumptions.</li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How liquidation moves from Aave entry to Avana vault handling and then to collateral-family-specific LP settlement."
        sectionColor="amber"
      />
    </div>
  )
}
