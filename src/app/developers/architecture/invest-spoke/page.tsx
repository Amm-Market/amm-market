import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Invest Spoke",
  description:
    "Avana Invest Spoke - capital entry point, Hub liquidity routing, risk-adjusted yield, and dynamic risk controls for LP-collateral lending.",
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
      "Lenders deposit major assets such as ETH, BTC, and stablecoins into the Invest Spoke rather than managing LP collateral directly.",
  },
  {
    title: "Route Through the Hub",
    description:
      "The Invest Spoke routes that capital into the Hub, where liquidity can be allocated across multiple LP-collateral borrower markets.",
  },
  {
    title: "Power Borrow Spokes",
    description:
      "Borrow Spokes draw against Hub liquidity while keeping LP valuation, liquidation logic, and market-specific risk controls isolated.",
  },
]

const dynamicSignals = [
  "Pool composition and changing inventory balance",
  "Trading volume and realized fee generation",
  "Price divergence between paired assets",
  "Volatility regime shifts and peg stability",
  "Liquidity depth available during stressed unwinds",
]

export default function InvestSpokePage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Invest Spoke"

          description="The capital-entry side of Avana that routes lender liquidity into LP-collateral borrow markets."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            Invest Spoke is the lender-facing capital entry point of the protocol. Investors supply
            assets such as ETH, BTC, and major stablecoins into the Invest Spoke, which then routes
            liquidity through the Hub so borrower-facing LP collateral spokes can extend credit
            against active liquidity positions.
          </p>
          <p className="mb-4 text-gray-600 leading-relaxed">
            This design separates capital supply from LP collateral management. Lenders can
            participate in the credit market without managing impermanent loss, liquidity ranges, or
            AMM-specific collateral operations, while Borrow Spokes remain responsible for
            underwriting LP risk at the market level.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Architectural role:</strong> the Invest Spoke makes the capital side of the
            system scalable, while Borrow Spokes keep LP-specific risk isolated.
          </p>
        </section>

        <section id="capital-entry-point" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Capital Entry Point</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            The Invest Spoke exists so lender deposits can power borrowing across multiple
            LP-collateral markets through one shared Hub layer instead of fragmenting liquidity by
            collateral type.
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
            credit lines. Over time, Invest Spoke deposits are expected to become an increasingly
            important source of native lending capital.
          </p>
        </section>

        <section id="risk-adjusted-yield" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Risk-Adjusted Yield</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The risk-adjusted yield enhancement from LP token collateralization comes from the
            protocol&apos;s ability to price and manage liquidity provision as a productive economic
            activity rather than treating LP positions like static collateral. Unlike non-yielding
            assets, LP tokens can generate ongoing cash flows from trading activity, and those fees
            can partially offset the borrowing costs attached to leveraged LP exposure.
          </p>
          <p className="mb-4 text-gray-600 leading-relaxed">
            That matters to the capital side of the protocol because it changes how credit should be
            priced. Aave v4&apos;s risk premium mechanism gives the system a way to reflect this
            yield-generating characteristic in the terms extended to high-quality LP collateral,
            potentially supporting more favorable pricing than would be available for non-yielding
            assets with similar volatility.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Implication for lenders:</strong> when LP collateral is priced correctly, the
            Invest Spoke can route capital into a credit engine backed by productive collateral
            rather than passive balance-sheet assets.
          </p>
        </section>

        <section id="dynamic-risk-controls" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Dynamic Risk Controls</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The risk-adjusted framework also goes beyond static LTV settings. By monitoring pool
            composition, trading volume, price divergence between paired assets, and broader market
            conditions, the protocol can implement time-varying risk parameters that respond to the
            real behavior of LP collateral instead of assuming fixed risk at all times.
          </p>
          <p className="mb-4 text-gray-600 leading-relaxed">
            In practice, that means risk controls can tighten during periods of elevated volatility,
            liquidity stress, or widening divergence, then relax during more stable operating
            periods. This helps protect lender capital during stress scenarios while preserving more
            capital efficiency during normal market conditions.
          </p>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="mb-3 text-base font-semibold text-gray-900">
              Signals the framework can respond to
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
            By keeping lender capital in Invest Spoke while letting Borrow Spokes adjust to
            collateral-specific market conditions, Avana can scale capital formation without
            flattening LP markets into a one-size-fits-all risk model.
          </p>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="How lender capital enters Avana and is routed through the Hub to LP-collateral borrow spokes."
        sectionColor="violet"
      />
    </div>
  )
}
