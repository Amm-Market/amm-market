import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('architecture/collateral-factors', {
    title: "Collateral Factors",
    description: "How collateral factors turn LP position value into borrowing capacity inside a Borrow Spoke.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "how-it-works", title: "How It Works" },
  { id: "borrowable-value", title: "Borrowable Value" },
  { id: "notes", title: "Notes" },
]

export default async function CollateralFactorsPage() {
  return withDocsI18n("architecture/collateral-factors", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Collateral Factors"
          description="How much of an LP position counts toward borrowing capacity after risk discounts."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="leading-relaxed text-gray-600">
            Collateral factors define what fraction of an LP position&apos;s recoverable value can
            support debt. Avana does not use the LP&apos;s headline mark alone. The Borrow Spoke
            first reconstructs and discounts the position, then applies the market&apos;s collateral
            factor to determine borrowing capacity.
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
                The spoke admits only approved pools. Unlisted positions never reach valuation.
              </p>
            </li>
            <li className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-semibold text-[#01AACF]">
                02
              </div>
              <p className="text-sm leading-7 text-gray-600">
                The position is reconstructed, underlying assets are priced, and the result is
                discounted to recoverable collateral value.
              </p>
            </li>
            <li className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-semibold text-[#01AACF]">
                03
              </div>
              <p className="text-sm leading-7 text-gray-600">
                Collateral factors and market settings are applied. The spoke reports aggregate
                borrowing capacity to the Hub for enforcement.
              </p>
            </li>
          </ol>
        </section>

        <section id="borrowable-value" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrowable Value</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Borrowable value is calculated per position, not as one flat number for the whole
            account. Two positions in different pools can produce different recoverable values and
            clear different collateral factors even if they look similar.
          </p>
          <div className="rounded-lg border border-cyan-200 bg-cyan-50/60 p-4 text-sm text-gray-700">
            A supported LP position contributes borrowing capacity only after the spoke has admitted
            it, valued it conservatively, and applied the market&apos;s collateral factor.
          </div>
        </section>

        <section id="notes" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Notes</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Exact collateral factors live in each supported pool&apos;s configuration.</li>
            <li>• Different LP families can have different factors, liquidation thresholds, and bonuses.</li>
            <li>• Read this together with Health Factor and Liquidation Framework when building monitoring tools.</li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How collateral factors turn LP position value into borrowing capacity."
        sectionColor="violet"
      />
    </div>
  ))
}
