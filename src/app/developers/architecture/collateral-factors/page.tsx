import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Collateral Factors",
  description:
    "How a Borrow Spoke turns LP position value into borrowable capacity before reporting it to the Hub.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "how-it-works", title: "How It Works" },
  { id: "borrowable-value", title: "Borrowable Value" },
  { id: "notes", title: "Notes" },
]

export default function CollateralFactorsPage() {
  return (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Collateral Factors"
          description="How a Borrow Spoke decides how much of an LP position counts toward borrowing capacity."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Collateral factors answer a narrow but important question: how much of this LP
            position should actually support debt? In Avana, that answer is not taken from the LP&apos;s
            headline mark alone. The Borrow Spoke first rebuilds and discounts the position, then
            applies the market rules that decide what fraction of that value can count as usable
            borrowing capacity.
          </p>
          <p className="text-sm text-gray-600">
            The lightpaper states the principle. This page describes the developer-facing sequence
            used inside a spoke before any capacity is handed off to the Hub.
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
                The spoke admits only approved pools or templates. If a position does not match a
                listed market definition, it never reaches the later valuation stages that produce
                borrowable capacity.
              </p>
            </li>
            <li className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-semibold text-[#01AACF]">
                02
              </div>
              <p className="text-sm leading-7 text-gray-600">
                It reconstructs the LP position, prices the underlying assets, and discounts the
                result to a recoverable collateral value. That step is where the spoke moves from a
                pool position that looks valuable in theory to a value it is willing to lend
                against in practice.
              </p>
            </li>
            <li className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-semibold text-[#01AACF]">
                03
              </div>
              <p className="text-sm leading-7 text-gray-600">
                It applies market-specific collateral settings and passes the aggregate borrowing
                capacity to the Hub for final enforcement. The Hub consumes the result, but the
                spoke is the layer that decided how much of the LP could count in the first place.
              </p>
            </li>
          </ol>
        </section>

        <section id="borrowable-value" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrowable Value</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Borrowable value is a derived output, not a fixed attribute attached to every LP in the
            spoke. Two positions can live in different markets, produce different recoverable
            values, and clear different collateral settings even if they look similar at a glance.
            That keeps the implementation aligned with the LP-specific underwriting model described
            elsewhere in the docs.
          </p>
          <div className="rounded-lg border border-cyan-200 bg-cyan-50/60 p-4 text-sm text-gray-700">
            A supported LP position contributes borrowing capacity only after the spoke has admitted
            it, reconstructed and discounted it, and applied the market&apos;s configured collateral
            controls.
          </div>
        </section>

        <section id="notes" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Notes</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Exact market settings live with the supported pool configuration rather than this overview page.</li>
            <li>• Pool-level risk bands are implementation details, not a promise that all LPs share one universal LTV.</li>
            <li>• Read collateral-factor behavior together with the health-factor and liquidation docs if you are implementing monitoring or recovery logic.</li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How a Borrow Spoke admits an LP, discounts its value, applies market controls, and reports capacity to the Hub."
        sectionColor="violet"
      />
    </div>
  )
}
