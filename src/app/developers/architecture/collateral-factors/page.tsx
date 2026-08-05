import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Collateral Factors",
  description:
    "How Avana turns LP position value into borrowable capacity through conservative valuation and spoke-level risk controls.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "how-it-works", title: "How It Works" },
  { id: "borrowable-value", title: "Borrowable Value" },
  { id: "notes", title: "Notes" },
]

export default function CollateralFactorsPage() {
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_220px] xl:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader
          title="Collateral Factors"
          description="Position-level borrowing power, conservative valuation, and how the spoke reports capacity back to the Hub."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Collateral factors define how much of an LP position&apos;s value can support
            borrowing. In Avana, the spoke values the position conservatively, applies the
            relevant market risk treatment, and reports the resulting capacity to the Hub.
          </p>
          <p className="text-sm text-gray-600">
            The lightpaper covers the principle. This page is the developer view of how that
            principle is applied inside the spoke.
          </p>
        </section>

        <section id="how-it-works" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">How It Works</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-semibold text-[#01AACF]">
                01
              </div>
              <p className="text-sm leading-7 text-gray-600">
                The spoke admits only approved pools or templates.
              </p>
            </li>
            <li className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-semibold text-[#01AACF]">
                02
              </div>
              <p className="text-sm leading-7 text-gray-600">
                It reconstructs the LP position, prices the underlying assets, and discounts the
                result to a recoverable collateral value.
              </p>
            </li>
            <li className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-semibold text-[#01AACF]">
                03
              </div>
              <p className="text-sm leading-7 text-gray-600">
                It applies market-specific collateral settings and passes the aggregate borrowing
                capacity to the Hub for final enforcement.
              </p>
            </li>
          </ol>
        </section>

        <section id="borrowable-value" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrowable Value</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Borrowable value is not treated as a blanket spoke setting. It is built from the
            position itself and from the market logic attached to that position. That keeps the
            developer model consistent with the lightpaper&apos;s LP-specific risk approach.
          </p>
          <div className="rounded-lg border border-cyan-200 bg-cyan-50/60 p-4 text-sm text-gray-700">
            A supported LP position can contribute capacity only after it is valued conservatively
            and cleared by the market&apos;s configured risk controls.
          </div>
        </section>

        <section id="notes" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Notes</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Exact market settings live with the supported pool configuration.</li>
            <li>• Pool-level risk bands are implementation details, not a promise of universal LTVs.</li>
            <li>• Liquidation and health-factor behavior should be read together with the liquidation docs.</li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How Avana turns LP position value into borrowable capacity through conservative valuation and market-specific risk controls."
        sectionColor="violet"
      />
    </div>
  )
}
