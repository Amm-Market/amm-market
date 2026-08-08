import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('architecture/lend-spoke', {
    title: "Lend Spoke",
    description: "How the Lend Spoke accepts lender assets and routes them through the Hub to LP-collateral borrow markets.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "capital-entry-point", title: "Capital Entry Point" },
  { id: "risk-adjusted-yield", title: "Risk-Adjusted Yield" },
  { id: "dynamic-risk-controls", title: "Dynamic Risk Controls" },
]

const capitalFlow = [
  {
    title: "Supply Capital",
    description:
      "Lenders bring in major assets such as ETH, BTC, and stablecoins through the Lend Spoke instead of interacting with LP collateral directly.",
  },
  {
    title: "Route Through the Hub",
    description:
      "The Lend Spoke forwards that liquidity into the Hub, where one reserve layer can support several LP-collateral borrowing markets.",
  },
  {
    title: "Power Borrow Spokes",
    description:
      "Borrow Spokes then draw from Hub liquidity while keeping LP valuation, liquidation handling, and market-specific risk controls contained inside each spoke.",
  },
]

const dynamicSignals = [
  "Pool composition and changing inventory balance",
  "Trading volume and realized fee generation",
  "Price divergence between paired assets",
  "Volatility regime shifts and peg stability",
  "Liquidity depth available during stressed unwinds",
]

export default async function LendSpokePage() {
  return withDocsI18n("architecture/lend-spoke", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader

          title="Lend Spoke"

          description="The lender-facing entry point that moves supplier capital into the Hub for use by LP-collateral borrow markets."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The Lend Spoke is the capital intake path for lenders. Depositors supply assets such
            as ETH, BTC, and major stablecoins here, and that liquidity is then routed into the
            Hub so Borrow Spokes can fund loans against supported LP collateral without asking
            lenders to reason about AMM position mechanics.
          </p>
          <p className="mb-4 text-gray-600 leading-relaxed">
            This separation is deliberate. The lender path is about supplying lendable assets and
            receiving the economics of the lending side, while the Borrow Spokes own the messy work
            of LP valuation, admissibility, health checks, and liquidation rules for each listed
            collateral family.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Role in the stack:</strong> Lend Spoke admits lending capital. Borrow Spokes
            keep LP-specific risk local to each market, so one lending pool does not require one
            global collateral model.
          </p>
        </section>

        <section id="capital-entry-point" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Capital Entry Point</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            Lender deposits come through the Lend Spoke first, then move into a shared Hub reserve
            layer. That means capital does not have to be partitioned one pool at a time by every
            supported LP market, even though the underwriting rules on the borrowing side stay
            separate.
          </p>

          <div className="space-y-4">
            {capitalFlow.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-4"
              >
                <h3 className="mb-1 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-600 border-l-4 border-violet-400 pl-3">
            Early in the protocol lifecycle, Hub liquidity may also be supplemented by Aave v4
            credit lines. Over time, Lend Spoke deposits can become a larger share of the protocol&apos;s
            native lending capital.
          </p>
        </section>

        <section id="risk-adjusted-yield" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Risk-Adjusted Yield</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            LP collateral is not static inventory. While a loan is open, the underlying position
            can continue earning trading fees, and that matters for how the borrowing side is
            modeled. The protocol therefore does not treat every LP like a dead balance that only
            moves with token prices.
          </p>
          <p className="mb-4 text-gray-600 leading-relaxed">
            That distinction also affects the lending side. Credit terms can reflect the fact that
            some LP markets have fee generation and unwind behavior that differs from non-yielding
            collateral, and Aave v4 risk premium tools can express those differences when policy
            allows it. Actual lender returns still depend on live configuration and market state,
            not on a fixed assumption from this page.
          </p>
          <p className="text-sm text-gray-600">
            <strong>For lenders:</strong> deposits through the Lend Spoke fund credit that is
            underwritten against LP positions whose recoverable value, health logic, and
            liquidation paths are all defined in Borrow Spokes.
          </p>
        </section>

        <section id="dynamic-risk-controls" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Dynamic Risk Controls</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The lending side depends on the borrower side staying within a risk model that can move
            with the market. Fixed LTV-style settings alone are not enough for LP collateral, so
            the framework can respond to changes in pool composition, volume, divergence,
            volatility, peg behavior, and unwind depth as those conditions change.
          </p>
          <p className="mb-4 text-gray-600 leading-relaxed">
            In stressed conditions, caps and related controls can tighten to protect lender
            liquidity. In calmer conditions, those same controls can be adjusted inside approved
            policy bounds. The point is not constant tuning for its own sake, but making sure the
            lending layer is not forced to treat a changing LP market as if nothing has changed.
          </p>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="mb-3 text-base font-semibold text-gray-900">
              Signals that may inform risk updates
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {dynamicSignals.map((item) => (
                <li key={item} className="border-l-4 border-violet-300 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-gray-600">
            Lender capital follows one entry path, but LP markets do not share one risk profile.
            Borrow Spokes can keep market-specific parameters local, which lets different LP
            families operate under different settings without fragmenting the lender experience.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How lender capital enters the protocol, reaches the Hub, and funds LP-collateral borrowing without merging collateral rules together."
        sectionColor="violet"
      />
    </div>
  ))
}
