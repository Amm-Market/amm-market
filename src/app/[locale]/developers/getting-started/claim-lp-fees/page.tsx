import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import { Link } from "@/i18n/navigation"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('getting-started/claim-lp-fees', {
    title: "Claim LP Fees",
    description: "Claim accrued LP fees in Avana without fully unwinding LP principal, as long as the account remains healthy after the claim.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "how-it-works", title: "How It Works" },
  { id: "health-checks", title: "Health Checks" },
  { id: "fee-accounting", title: "Fee Accounting" },
  { id: "key-benefits", title: "Key Benefits" },
]

export default async function ClaimLPFeesPage() {
  return withDocsI18n("getting-started/claim-lp-fees", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader

          title="Claim LP Fees"

          description="Claim fee income without closing the collateral position, provided the account still passes health checks after the fees leave."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana treats principal liquidity and accrued fees as different parts of the same LP
            position. That separation is what makes it possible to realize fee income without
            necessarily dismantling the principal liquidity that is still being used as collateral.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            A fee claim still affects collateral state, so it is checked like any other action that
            removes recognized value from the account. It is not just a convenience button layered
            on top of the protocol.
          </p>
        </section>

        <section id="how-it-works" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">How It Works</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              The protocol uses a venue-appropriate fee-collection path for the LP position. For
              concentrated-liquidity positions, that may look like a collect-style call that leaves
              principal in place. For fungible LPs, the venue&apos;s own fee-claim path is used when
              the venue exposes one.
            </p>
            <p>
              The important protocol-level rule is consistent across LP types: claim only the fee
              component, keep the principal position active when possible, and sync the resulting
              position state back into the Borrow Spoke.
            </p>
          </div>
        </section>

        <section id="health-checks" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Health Checks</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The Borrow Spoke checks health around a fee claim because accrued fees may still count
            toward the recognized collateral buffer until they are removed from the position.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            If removing the claimed fee value would leave the account too close to or beyond the
            allowed borrowing boundary, the claim path should be blocked until debt is reduced or
            more collateral is added.
          </p>
        </section>

        <section id="fee-accounting" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Fee Accounting</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              Oracle outputs separate principal liquidity from accrued fees so the credit model can
              track them side by side instead of pretending the LP is one flat token balance.
            </p>
            <p>
              That accounting split also matters in liquidation, where accrued fees may be applied
              before the protocol has to unwind principal LP liquidity.
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            See{" "}
            <Link href="/developers/integrations/price-oracles" className="text-[#01AACF] hover:underline">
              Price Oracles
            </Link>{" "}
            and{" "}
            <Link href="/developers/liquidation" className="text-[#01AACF] hover:underline">
              Liquidation Framework
            </Link>
            .
          </p>
        </section>

        <section id="key-benefits" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Key Benefits</h2>
          <ul className="space-y-2 text-gray-600">
            <li>LP principal can stay active in the pool</li>
            <li>Earned fees can be realized without fully closing the collateral position</li>
            <li>The same risk engine that prices the LP also prevents fee claims from pulling out too much value</li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How accrued LP fees are recognized and, when safe, claimed without fully unwinding collateral."
        sectionColor="emerald"
      />
    </div>
  ))
}
