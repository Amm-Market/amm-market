import type { Metadata } from "next"
import Link from "next/link"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Router Contract",
  description:
    "Operational reference for the Avana router and adapter layer. Understand what the router coordinates, what it does not decide, and how deployments are published.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "role-in-system", title: "Role in System" },
  { id: "adapter-model", title: "Adapter Model" },
  { id: "supported-operations", title: "Supported Operations" },
  { id: "deployment-status", title: "Deployment Status" },
]

const supportedOperations = [
  "Bundle venue-specific deposit, withdraw, and fee-collection calls into a cleaner interface layer",
  "Coordinate unwind or routing steps needed for liquidation execution",
  "Support controlled position updates such as range changes or migration flows when a venue adapter exists",
  "Expose a consistent integration surface without becoming the protocol's risk or valuation authority",
]

export default function RouterContractPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Router Contract"

          description="Operational interface layer for venue-specific actions, adapter calls, and unwind support."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The router is an execution helper, not the protocol&apos;s central source of truth. AMM
            Market&apos;s core policy decisions still come from the Borrow Spoke, Hub, oracle stack,
            and risk framework. The router exists to make venue-specific actions easier to compose and
            safer to standardize.
          </p>
          <p className="text-sm text-gray-600">
            Read this page as an operational reference. For canonical architecture, start with{" "}
            <Link href="/developers/architecture" className="text-blue-600 hover:underline">
              Borrow Spoke
            </Link>{" "}
            and{" "}
            <Link href="/developers/liquidation" className="text-blue-600 hover:underline">
              Liquidation Framework
            </Link>
            .
          </p>
        </section>

        <section id="role-in-system" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Role in System</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Different AMM venues expose different entry, exit, and fee-collection methods. The router
            gives Avana an integration layer for those mechanics so builders do not need to treat
            every venue as a bespoke one-off.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
            The router should never be read as the place where collateral factors, health checks, or
            liquidation eligibility are decided. Those remain upstream protocol concerns.
          </div>
        </section>

        <section id="adapter-model" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Adapter Model</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Each supported venue family should have a venue-aware adapter that knows how to claim fees,
            remove liquidity, or otherwise expose the actions needed by the protocol. This keeps
            venue-specific behavior isolated instead of spreading it across every user flow.
          </p>
          <p className="text-sm text-gray-600">
            Adapter support only matters when it aligns with valuation and liquidation support. A new
            adapter by itself does not make a venue safe for collateral admission.
          </p>
        </section>

        <section id="supported-operations" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Supported Operations</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {supportedOperations.map((operation) => (
              <li key={operation} className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                {operation}
              </li>
            ))}
          </ul>
        </section>

        <section id="deployment-status" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Deployment Status</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Router addresses, adapter registries, and enabled networks are deployment data and should
            be published with releases. This documentation intentionally avoids placeholder addresses
            and future-date promises.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Verify chain-specific addresses from the published contract registry or release notes.</li>
            <li>• Confirm that the venue adapter you rely on is enabled on the target deployment.</li>
            <li>• Treat router support as an operational dependency, not as proof that a pool is admitted for collateral.</li>
          </ul>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="Operational reference for Avana's router and adapter layer."
        sectionColor="cyan"
      />
    </div>
  )
}
