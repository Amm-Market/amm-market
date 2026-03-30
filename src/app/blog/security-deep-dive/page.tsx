import type { Metadata } from "next"
import BlogPostLayout from "@/components/blog-post-layout"

export const metadata: Metadata = {
  title: "Security Deep-Dive: How Avana Manages LP Risk",
  description: "Hub-and-Spoke isolation, position-aware oracles, health checks, and liquidation mechanics explained.",
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "hub-and-spoke", title: "Architectural Isolation: Hub-and-Spoke" },
  { id: "oracle-design", title: "Oracle Design & Valuation" },
  { id: "health-checks", title: "Per-Position Health Checks" },
  { id: "liquidation-mechanics", title: "Liquidation Mechanics" },
  { id: "rate-models", title: "Rate Models & Reserve Factors" },
  { id: "operational-safety", title: "Operational Safety Nets" },
  { id: "why-it-matters", title: "Why This Matters" },
]

export default function SecurityDeepDivePage() {
  return (
    <BlogPostLayout
      title="Security Deep-Dive: How Avana Manages LP Risk"
      date="January 13, 2026"
      description="A technical walkthrough of Avana's security architecture—Hub-and-Spoke isolation, position-aware oracles, health checks, and liquidation mechanics for auditors and security-minded users."
      image="/images/blog/security-deep-dive.png"
      tableOfContents={tableOfContents}
      prevPost={{
        slug: "yield-looping-playbook",
        title: "Advanced Playbook: Yield Looping Safely with LP Collateral",
        date: "January 14, 2026",
      }}
      nextPost={{
        slug: "hedge-lp-position",
        title: "How to Hedge Your LP Position: Practical Strategies",
        date: "January 12, 2026",
      }}
    >
      <section id="introduction" className="mb-12 scroll-mt-24">
        <p className="text-gray-700 leading-relaxed mb-6">
          LP tokens are among the most complex assets in DeFi. Their value depends on multiple variables including 
          token prices, liquidity ranges, trading volume, and fee accrual. Avana is designed from the ground up 
          to manage this complexity securely, using a combination of architectural isolation, sophisticated oracles, 
          and per-position risk controls.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 not-prose">
          <h3 className="font-semibold text-indigo-900 mb-2">Security is the Foundation</h3>
          <p className="text-gray-700">
            Avana&apos;s LP-as-collateral design layers careful engineering and proven patterns (Aave v4 Hub-and-Spoke) 
            with position-aware oracles and per-position health checks to contain risk while unlocking capital. This is 
            a concise technical walkthrough for auditors and security-minded users.
          </p>
        </div>
      </section>

      <section id="hub-and-spoke" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Architectural Isolation: Hub-and-Spoke</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          At the core of Avana is the Aave v4 Hub and Spoke architecture. Liquidity is concentrated in the Hub, 
          while the Avana Spoke manages LP collateral and borrowing logic. This separation ensures that issues 
          within the Spoke cannot compromise the entire liquidity pool, providing strong systemic isolation.
        </p>

        <div className="grid md:grid-cols-2 gap-4 not-prose">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-blue-900 mb-2">Hub Responsibilities</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Stores pooled liquidity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Enforces global caps and supply/borrow constraints</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Maintains system-wide solvency</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
            <h3 className="font-semibold text-purple-900 mb-2">Spoke Responsibilities</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Market adaptor that borrows from Hub under bounded limits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Enforces per-position rules and liquidations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Isolates faults—problems don&apos;t drain the Hub</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="oracle-design" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Oracle Design &amp; Valuation</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          LP positions are complex: their USD value depends on two token prices and the active tick range. Avana 
          uses a layered oracle system that calculates the underlying token amounts of each LP position using onchain 
          pool math and combines that with time weighted price feeds.
        </p>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">On-Chain Pool Math</h3>
              <p className="text-gray-700">
                Computes in-range token amounts from an LP NFT using verified pool state.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Reliable Price Oracles</h3>
              <p className="text-gray-700">
                TWAPs and external feeds to value underlying tokens with manipulation resistance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Volatility &amp; Confidence Scoring</h3>
              <p className="text-gray-700">
                Adjusts collateral factors dynamically based on market conditions.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <h3 className="font-semibold text-amber-900 mb-2">Manipulation Resistance</h3>
          <p className="text-gray-700">
            The system prefers longer TWAPs for liquidation triggers to avoid flash manipulation and uses fallback 
            feeds if a primary oracle degrades.
          </p>
        </div>
      </section>

      <section id="health-checks" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Per-Position Health Checks</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Every LP-backed loan is monitored individually. Health checks continuously compare the current collateral 
          value against outstanding debt. The health factor formula:
        </p>

        <div className="bg-gray-900 text-white rounded-xl p-6 mb-6 not-prose font-mono text-center">
          <p className="text-lg">Health Factor = (Oracle Valuation × Collateral Factor) ÷ Debt</p>
        </div>

        <div className="space-y-4 not-prose">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg">
            <h3 className="font-semibold text-yellow-900 mb-2">Soft Warnings</h3>
            <p className="text-gray-700">
              UI alerts and Mini AI nudges when health approaches thresholds, giving users time to act.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Auto-Mitigations</h3>
            <p className="text-gray-700">
              Optional automated repayments or rebalances via Automate to maintain healthy positions.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
            <h3 className="font-semibold text-red-900 mb-2">Liquidation Windows</h3>
            <p className="text-gray-700">
              Only after sustained breach (TWAP-aware) does the system allow liquidators to act. This prevents 
              liquidations from instantaneous price spikes, reducing manipulation risk.
            </p>
          </div>
        </div>
      </section>

      <section id="liquidation-mechanics" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Liquidation Mechanics — Precision Over Panic</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Liquidation mechanics are designed to be precise. Instead of seizing entire positions, Avana 
          liquidates only the portion necessary to restore solvency.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6 not-prose">
          <h3 className="font-semibold text-green-900 mb-3">Partial Unwind Process</h3>
          <ol className="text-gray-700 space-y-2">
            <li className="flex items-start gap-3">
              <span className="bg-green-200 text-green-800 text-sm font-semibold px-2 py-0.5 rounded">1</span>
              <span>Spoke determines the minimal LP portion to remove that covers debt plus fees</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-200 text-green-800 text-sm font-semibold px-2 py-0.5 rounded">2</span>
              <span>Liquidators repay debt to the Hub</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-200 text-green-800 text-sm font-semibold px-2 py-0.5 rounded">3</span>
              <span>Liquidators receive proportional underlying tokens</span>
            </li>
          </ol>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 not-prose">
          <h3 className="font-semibold text-indigo-900 mb-2">Balanced Incentives</h3>
          <p className="text-gray-700">
            The protocol applies modest liquidation incentives to ensure participation without over-penalizing users. 
            This minimizes disruption and reduces unnecessary market impact while ensuring the protocol remains safe.
          </p>
        </div>
      </section>

      <section id="rate-models" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Rate Models &amp; Reserve Factors</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Interest rates and reserve factors are enforced at the Hub level, protecting liquidity providers and 
          maintaining system-wide solvency.
        </p>

        <div className="grid md:grid-cols-2 gap-4 not-prose">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">Utilization-Aware Curves</h3>
            <p className="text-gray-600 text-sm">
              Interest accrues using utilization-aware curves deployed at the Hub, ensuring rates respond to 
              market demand.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">Reserve Factors</h3>
            <p className="text-gray-600 text-sm">
              Protect depositors and the Hub&apos;s solvency by accumulating protocol reserves.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-2">Spoke-Level Caps</h3>
            <p className="text-gray-600 text-sm">
              Stop runaway borrowing if a pool becomes risky, providing an additional layer of protection.
            </p>
          </div>
        </div>
      </section>

      <section id="operational-safety" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Operational Safety Nets</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Governance controls, audits, and simulation testing further reinforce security across all layers.
        </p>

        <div className="bg-gray-900 text-white rounded-xl p-6 not-prose">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Community time-locks</strong> for major parameter changes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Multi-sig &amp; governance checks</strong> for emergency actions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Audits and bug-bounty programs</strong> to find and fix vulnerabilities proactively</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Simulation-based preflight checks</strong> for each large transaction (shown to users as human-readable previews)</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="why-it-matters" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Why This Matters</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          LP tokens are path-dependent instruments. Valuation and liquidation must respect that complexity. AMM 
          Market&apos;s design uses layered oracles, position-aware health, and the Hub&apos;s systemic protections to manage 
          risk conservatively while enabling utility.
        </p>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-lg text-white not-prose">
          <h3 className="text-xl font-bold mb-3">Security as Foundation</h3>
          <p>
            By treating LP positions as first-class financial instruments rather than generic tokens, Avana 
            delivers a risk framework that is both conservative and flexible. Security is not an afterthought but 
            the foundation of LP-based borrowing.
          </p>
        </div>
      </section>
    </BlogPostLayout>
  )
}
