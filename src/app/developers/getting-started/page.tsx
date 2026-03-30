import Link from "next/link"
import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Getting Started - Deposit LP",
  description:
    "Learn how to deposit supported LP positions as collateral in AMM Market and how those deposits become aggregate borrowing capacity inside a Borrow Spoke.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "deposit-flow", title: "Deposit Flow" },
  { id: "technical-details", title: "Technical Details" },
  { id: "supported-lp-tokens", title: "Supported LP Position Types" },
  { id: "after-deposit", title: "After Deposit" },
]

const supportedFamilies = [
  {
    family: "Concentrated liquidity positions",
    examples: "Range-bound NFT or position-manager based LPs",
    notes: "Range, tick position, and fee accrual are part of the valuation path.",
  },
  {
    family: "Fungible stable or correlated LPs",
    examples: "Stable-swap and tightly correlated pool shares",
    notes: "Pool inventory and unwind quality drive conservative borrowing power.",
  },
  {
    family: "Weighted and multi-asset LPs",
    examples: "Weighted baskets and multi-token pools",
    notes: "Each supported family is admitted only through approved pool templates.",
  },
]

export default function DepositLPPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div className="max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Deposit LP</h1>
        <p className="mb-8 text-lg text-gray-600">
          Deposit is the first step in turning a supported LP position into borrowable capacity
          inside a Borrow Spoke.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            A deposit moves an approved LP position into Borrow Spoke custody for collateral
            accounting. The position remains active in the underlying AMM, but the spoke can now
            evaluate it, track it, and include its contribution in the user&apos;s aggregate borrowing
            capacity.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Important:</strong> AMM Market does not grant borrowing power just because an LP
            position exists. The position must belong to an approved pool family, pass valuation
            checks, and fit the spoke&apos;s current risk configuration.
          </p>
        </section>

        <section id="deposit-flow" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Deposit Flow</h2>
          <div className="space-y-5">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">1. Transfer or Approve the LP Position</h3>
              <p className="text-sm text-gray-600">
                The user supplies a supported LP position to the relevant Borrow Spoke. The exact
                transfer path depends on the LP format, but the end result is the same: the spoke
                gains custody for collateral accounting.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">2. Validate the Pool Family</h3>
              <p className="text-sm text-gray-600">
                The spoke checks that the position comes from an approved pool or template with the
                required oracle coverage, routing support, and governance-defined risk settings.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">3. Cache Position State</h3>
              <p className="text-sm text-gray-600">
                Position metadata is recorded so the protocol can reconstruct exposure, monitor fee
                accrual, and recalculate borrowing power as market conditions change.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">4. Add the Position to Aggregate Capacity</h3>
              <p className="text-sm text-gray-600">
                Once valued, the LP position contributes to the user&apos;s total borrowing capacity
                inside that Borrow Spoke. The Hub sees the updated capacity when the user later
                attempts to borrow.
              </p>
            </div>
          </div>
        </section>

        <section id="technical-details" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Technical Details</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">Position-aware valuation:</strong> the deposit itself
              does not fix a permanent loan amount. Borrowing power is recomputed from the live LP
              position using the oracle stack and collateral-factor model.
            </p>
            <p>
              <strong className="text-gray-900">Format-specific custody:</strong> some LP positions
              are fungible tokens, others are concentrated-liquidity positions with extra metadata.
              The Borrow Spoke abstracts those custody differences so the credit layer can treat them
              consistently.
            </p>
            <p>
              <strong className="text-gray-900">No forced unwind on deposit:</strong> supplying
              collateral does not remove liquidity from the pool. The unwind path is reserved for
              explicit user actions or liquidation.
            </p>
          </div>
        </section>

        <section id="supported-lp-tokens" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Supported LP Position Types</h2>
          <div className="overflow-x-auto">
            <table className="w-full overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900">Family</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900">Examples</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900">Admission Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {supportedFamilies.map((item) => (
                  <tr key={item.family}>
                    <td className="px-4 py-2 font-medium text-gray-900">{item.family}</td>
                    <td className="px-4 py-2 text-gray-600">{item.examples}</td>
                    <td className="px-4 py-2 text-gray-600">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Exact live support is governed by the approved pool list. See{" "}
            <Link href="/developers/integrations/allowed-pools" className="text-blue-600 hover:underline">
              Allowed LP Pools
            </Link>{" "}
            for the admission model.
          </p>
        </section>

        <section id="after-deposit" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">After Deposit</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Each approved position contributes to aggregate borrowing capacity inside the spoke</li>
            <li>LP principal stays active in the underlying pool and may continue accruing fees</li>
            <li>Borrowing still depends on Hub liquidity, spoke health, and collateral-factor limits</li>
            <li>
              The next canonical step is{" "}
              <Link href="/developers/getting-started/borrow-assets" className="text-blue-600 hover:underline">
                Borrow Assets
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="How a supported LP position enters a Borrow Spoke and becomes part of aggregate borrowing capacity."
        sectionColor="emerald"
      />
    </div>
  )
}
