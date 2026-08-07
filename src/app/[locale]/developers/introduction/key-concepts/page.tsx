import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import { Link } from "@/i18n/navigation"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('introduction/key-concepts', {
    title: "Key Concepts",
    description: "Understand the core concepts behind Avana, including LP collateral behavior, conservative valuation, Hub borrowing, and liquidation.",
  })
}

const sections = [
  { id: "core-insight", title: "Core Insight" },
  { id: "user-flow", title: "Borrowing Model" },
  { id: "oracle-valuation", title: "Oracle & Valuation" },
  { id: "borrowing-process", title: "Borrowing Capacity" },
  { id: "health-monitoring", title: "Health & Liquidation" },
  { id: "fee-collection", title: "Fee Treatment" },
]

export default async function KeyConceptsPage() {
  return withDocsI18n("introduction/key-concepts", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader

          title="Key Concepts"

          description="The ideas that show up repeatedly across Avana&apos;s Borrow Spoke, valuation, borrowing, and liquidation docs."

        />

        <section id="core-insight" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Core Insight</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            An LP position is not just a token with a spot price. It is a live liquidity position
            whose value depends on the underlying assets, pool composition, fee accrual, position
            structure, and the amount the protocol could realistically recover if liquidation were
            needed.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            <strong>Why this matters:</strong> Avana underwrites LP markets with spoke and pool
            specific rules rather than one generic asset model for every LP.
          </p>
        </section>

        <section id="user-flow" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrowing Model</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              Users deposit supported LP positions into a Borrow Spoke. The positions can remain
              active in their pools while the protocol takes custody for collateral accounting.
            </p>
            <p>
              Each approved LP position is valued on its own. After collateral factors and pool
              risk controls are applied, its discounted contribution is added to borrowing capacity
              inside that Borrow Spoke.
            </p>
            <p>
              When the user borrows, the spoke draws liquidity from the Hub. LP market risk stays
              in the spoke layer, while shared capital accounting stays at the Hub.
            </p>
          </div>
        </section>

        <section id="oracle-valuation" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Oracle & Valuation</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana values LP collateral conservatively. External asset prices mark the underlyings,
            while pool data and position state are used to rebuild exposure instead of leaning on
            raw AMM spot output alone.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Underlying asset prices from robust external feeds</li>
            <li>Pool inventory split or range-aware position decomposition</li>
            <li>Accrued fees recognized separately from principal liquidity</li>
            <li>Recovery haircuts for unwind slippage, impermanent loss, and stressed liquidation</li>
          </ul>
        </section>

        <section id="borrowing-process" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrowing Capacity</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Capacity is built position by position inside a Borrow Spoke. Avana does not slap one
            wholesale factor across the whole account or across every pool in a spoke. Each
            position contributes only after its own collateral factors and pool-specific controls
            have been applied.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Details:</strong> see{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-[#01AACF] hover:underline">
              Collateral Factors
            </Link>{" "}
            for the position by position capacity model.
          </p>
        </section>

        <section id="health-monitoring" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Health & Liquidation</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            A Borrow Spoke compares adjusted collateral value with outstanding debt. If prices,
            oracle checks, or position changes shrink the remaining buffer far enough, the account
            can cross into liquidation territory.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Health and liquidation both depend on the same valuation path. Pricing, collateral
            factors, and liquidation routing have to stay aligned because they ultimately feed the
            same solvency calculation.
          </p>
        </section>

        <section id="fee-collection" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Fee Treatment</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            LP positions may keep accruing trading fees while they are used as collateral. Avana
            can recognize those fees in valuation and, subject to health checks, let users claim
            them without fully exiting the principal LP position.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Related docs:</strong>{" "}
            <Link href="/developers/integrations/price-oracles" className="text-[#01AACF] hover:underline">
              Price Oracles
            </Link>{" "}
            and{" "}
            <Link href="/developers/getting-started/claim-lp-fees" className="text-[#01AACF] hover:underline">
              Claim LP Fees
            </Link>
            .
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="The main concepts behind LP-backed borrowing, conservative valuation, and spoke-level risk in Avana."
        sectionColor="blue"
      />
    </div>
  ))
}
