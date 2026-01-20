"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "frontend-fee", title: "Frontend Fee" },
  { id: "fee-disclosure", title: "Fee Disclosure" },
  { id: "treasury-usage", title: "Treasury Usage" },
  { id: "zero-fee-paths", title: "Zero-Fee Paths" },
  { id: "commitment", title: "Our Commitment" },
]

export default function PlatformFeesPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Platform Fees</h1>
        <p className="text-lg text-gray-600 mb-8">
          Fee types, calculation logic, and distribution between protocol participants.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market charges a single, flat frontend fee of <strong>0.20%</strong> on each user 
            action that interacts with our interface.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Interface Fee, Not Protocol Fee:</strong> The fee is not embedded into the lending protocol itself; it is an interface charge 
            that funds the maintenance and improvement of AMM Market's user experience, infrastructure, 
            security, and community initiatives.
          </p>
        </section>

        <section id="frontend-fee" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frontend Fee</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This fee is applied at the moment a user submits a transaction through the AMM Market 
            web or mobile app and covers actions such as:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <span className="text-gray-900 font-medium text-sm">Supplying Collateral</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <span className="text-gray-900 font-medium text-sm">Borrowing</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <span className="text-gray-900 font-medium text-sm">Repaying</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <span className="text-gray-900 font-medium text-sm">Withdrawing</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <span className="text-gray-900 font-medium text-sm">Claiming</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm">
            <strong>Industry Standard:</strong> In the same way leading DeFi frontends have separated interface charges from protocol-level 
            economics, this fee applies only to transactions routed through the official AMM Market 
            interface and does not affect calls made directly to the underlying smart contracts.
          </p>
        </section>

        <section id="fee-disclosure" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fee Disclosure</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every transaction that incurs a frontend fee will present a clear, line-item disclosure 
            inside the transaction confirmation modal before the user signs.
          </p>
          
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Fee Calculation</h3>
            <p className="text-gray-600 text-sm mb-2">
              The fee is computed as <strong>0.20%</strong> of the fiat value of the asset being transacted.
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Example:</strong> A $50,000 borrow initiated through the AMM Market app will 
              show a fee of $100. The signed transaction will include an on-chain or off-chain 
              transfer that routes that $100 to the AMM Market fee wallet.
            </p>
          </div>

          <p className="text-gray-600 text-sm">
            <strong>Transparency:</strong> We surface the fee as both a dollar amount and a percentage so users can instantly 
            understand cost impact and check the exact transfer before approving the wallet signature.
          </p>
        </section>

        <section id="treasury-usage" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Treasury Usage</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Collected frontend fees are routed to the AMM Market treasury and are used exclusively 
            to sustain product operations:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Hosting & API Costs</h3>
              <p className="text-gray-600 text-xs">Infrastructure and backend services</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Oracle Subscriptions</h3>
              <p className="text-gray-600 text-xs">Price feed and data services</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Ongoing Development</h3>
              <p className="text-gray-600 text-xs">New features and improvements</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Audits & Security Reviews</h3>
              <p className="text-gray-600 text-xs">Third-party security assessments</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">User Support</h3>
              <p className="text-gray-600 text-xs">Help desk and documentation</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Community Programs</h3>
              <p className="text-gray-600 text-xs">Incentives and grants</p>
            </div>
          </div>

          <p className="text-gray-600 text-sm">
            <strong>Governance Oversight:</strong> Treasury disbursements are managed under the protocol's governance framework. Major 
            allocations and programmatic changes (e.g., turning fees into rebates, launching 
            promotions, or reallocating budget to security audits) are subject to governance 
            proposals and timelocked execution.
          </p>
        </section>

        <section id="zero-fee-paths" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Zero-Fee Paths</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We recognize that some users and integrators prefer zero-fee paths:
          </p>
          
          <ul className="space-y-4 mb-4">
            <li>
              <span className="font-semibold text-gray-900">Direct Contract Calls</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Transactions submitted directly to the underlying protocol contracts will not pay 
                the 0.20% fee.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Third-Party Frontends</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Transactions routed through third-party frontends that do not levy the AMM Market 
                interface charge will not pay the fee.
              </p>
            </li>
          </ul>

          <p className="text-gray-600 text-sm">
            <strong>Official Frontend Registry:</strong> To preserve choice and composability while protecting the integrity of the AMM Market 
            interface, we will publish a public registry of AMM Market-official frontends. Official 
            frontends will display a verified badge and a plain language explanation of the fee 
            policy; integrations not on the registry will be marked as third-party.
          </p>
        </section>

        <section id="commitment" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our commitment is to keep fees minimal, predictable, and justified by visible product 
            improvements.
          </p>
          
          <p className="text-gray-600 text-sm mb-4">
            <strong>Design Philosophy:</strong> The 0.20% frontend fee is designed to be low enough that it does not materially change 
            user behavior for typical DeFi actions, while generating a sustainable revenue stream 
            to fund security, reliability, and continued product innovation.
          </p>

          <p className="text-gray-600 text-sm">
            <strong>Community Governance:</strong> As market conditions change, the community can propose and vote on fee adjustments. 
            Until then, we will publish regular treasury reports showing collections, allocations, 
            and the tangible outcomes those funds supported.
          </p>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Fee types, calculation logic, and distribution between protocol participants."
        sectionColor="violet"
      />
    </div>
  )
}
