import Link from "next/link"
import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Key Concepts",
  description:
    "Understand the core concepts behind Avana: LP positions as productive collateral, conservative valuation, Hub borrowing, and liquidation discipline.",
}

const sections = [
  { id: "core-insight", title: "Core Insight" },
  { id: "user-flow", title: "Borrowing Model" },
  { id: "oracle-valuation", title: "Oracle & Valuation" },
  { id: "borrowing-process", title: "Borrowing Capacity" },
  { id: "health-monitoring", title: "Health & Liquidation" },
  { id: "fee-collection", title: "Fee Treatment" },
]

export default function KeyConceptsPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Key Concepts"

          description="The core ideas that appear across Avana&apos;s Borrow Spoke, valuation, and liquidation docs."

        />

        <section id="core-insight" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Core Insight</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            An LP position is productive collateral, not just a static token balance. Its value
            depends on the underlying assets, pool composition, accrued fees, liquidity structure,
            and how much value can realistically be recovered during liquidation.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Why this matters:</strong> Avana is built around the idea that LP collateral
            needs market-specific underwriting, not a one-size-fits-all asset model.
          </p>
        </section>

        <section id="user-flow" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrowing Model</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              Users deposit supported LP positions into a Borrow Spoke. The positions remain active
              in their pools while the protocol takes custody for collateral accounting.
            </p>
            <p>
              Each approved LP position is valued independently. Its discounted contribution is added
              to the user&apos;s total borrowing capacity inside that Borrow Spoke.
            </p>
            <p>
              When the user borrows, the spoke draws liquidity from the Hub. This keeps LP-specific
              risk inside the spoke while shared capital remains coordinated at the Hub layer.
            </p>
          </div>
        </section>

        <section id="oracle-valuation" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Oracle & Valuation</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana values LP collateral conservatively. External asset prices anchor the
            underlying tokens, while pool data and position-state inputs are used to reconstruct the
            LP exposure instead of trusting raw AMM spot state.
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
            Borrowing power is not assigned to the account wholesale or to the pool wholesale. It is
            built from the sum of position-level contributions inside a Borrow Spoke after collateral
            factors and pool-specific risk controls are applied.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Canonical reference:</strong> see{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-blue-600 hover:underline">
              Collateral Factors
            </Link>{" "}
            for the full position-by-position borrowing-capacity model.
          </p>
        </section>

        <section id="health-monitoring" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Health & Liquidation</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            A Borrow Spoke continuously compares adjusted collateral value with outstanding debt. If
            market moves, oracle verification, or position changes reduce the user&apos;s remaining
            borrowing headroom too far, the position approaches liquidation eligibility.
          </p>
          <p className="text-sm text-gray-600">
            Health monitoring and liquidation both use the same underlying valuation engine, which is
            why Avana treats pricing, collateral factors, and liquidation routing as one joined
            risk system rather than separate modules.
          </p>
        </section>

        <section id="fee-collection" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Fee Treatment</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            LP positions may continue accruing trading fees while they are used as collateral.
            Accrued fees can be recognized in valuation and, subject to health checks, claimed
            without fully exiting the LP principal.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Related docs:</strong> the canonical details live in{" "}
            <Link href="/developers/integrations/price-oracles" className="text-blue-600 hover:underline">
              Price Oracles
            </Link>{" "}
            and{" "}
            <Link href="/developers/getting-started/claim-lp-fees" className="text-blue-600 hover:underline">
              Claim LP Fees
            </Link>
            .
          </p>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="The main concepts behind LP-backed borrowing, conservative valuation, and spoke-level risk in Avana."
        sectionColor="blue"
      />
    </div>
  )
}
