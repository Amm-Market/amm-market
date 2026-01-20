import type { Metadata } from "next"
import BlogPostLayout from "@/components/blog-post-layout"

export const metadata: Metadata = {
  title: "AMM Market v1.1: New Features and Improvements",
  description: "Announcing AMM Market v1.1—multi-position collateral, improved oracles, gas optimizations, and a refreshed dashboard experience.",
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "new-features", title: "New Features" },
  { id: "improvements", title: "Performance Improvements" },
  { id: "ux-updates", title: "UX Updates" },
  { id: "security", title: "Security Enhancements" },
  { id: "whats-next", title: "What's Next" },
]

export default function V11ReleasePage() {
  return (
    <BlogPostLayout
      title="AMM Market v1.1: New Features and Improvements"
      date="January 22, 2026"
      description="Announcing AMM Market v1.1—multi-position collateral, improved oracles, gas optimizations, and a refreshed dashboard experience."
      image="/images/blog/v1-1-release.png"
      tableOfContents={tableOfContents}
      prevPost={{
        slug: "introducing-automate",
        title: "Introducing Automate: Set-and-Forget LP Management",
        date: "January 23, 2026",
      }}
      nextPost={{
        slug: "smart-contract-architecture",
        title: "Smart Contract Architecture: AMM Market Technical Reference",
        date: "January 21, 2026",
      }}
    >
      <section id="introduction" className="mb-12 scroll-mt-24">
        <p className="text-gray-700 leading-relaxed mb-6">
          We&apos;re excited to announce AMM Market v1.1, our first major update since launch. This release 
          focuses on expanding capabilities, improving performance, and refining the user experience based 
          on community feedback.
        </p>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl text-white not-prose">
          <h3 className="text-xl font-bold mb-3">Release Highlights</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold">5</p>
              <p className="text-indigo-200">New Features</p>
            </div>
            <div>
              <p className="text-3xl font-bold">30%</p>
              <p className="text-indigo-200">Gas Reduction</p>
            </div>
            <div>
              <p className="text-3xl font-bold">12</p>
              <p className="text-indigo-200">New Pools Supported</p>
            </div>
          </div>
        </div>
      </section>

      <section id="new-features" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">New Features</h2>
        
        <div className="space-y-6 not-prose">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Multi-Position Collateral</h3>
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">NEW</span>
            </div>
            <p className="text-gray-700 mb-4">
              You can now deposit multiple LP positions as collateral simultaneously. Borrowing capacity 
              is calculated across all positions, giving you more flexibility in how you structure your 
              collateral.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm">
                <strong>Example:</strong> Deposit both an ETH/USDC and a WBTC/ETH position to maximize 
                your borrowing power while maintaining diversified exposure.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Expanded Pool Support</h3>
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">NEW</span>
            </div>
            <p className="text-gray-700 mb-4">
              We&apos;ve added support for 12 new liquidity pools across Uniswap V3 and V4, including 
              popular pairs and emerging tokens.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {["ARB/ETH", "OP/ETH", "LDO/ETH", "RPL/ETH", "GMX/ETH", "PENDLE/ETH", "ENS/ETH", "BLUR/ETH", "GRT/ETH", "SNX/ETH", "AAVE/ETH", "CRV/ETH"].map((pool) => (
                <div key={pool} className="bg-gray-50 rounded-lg px-3 py-2 text-center text-sm font-medium text-gray-700">
                  {pool}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Partial Position Withdrawal</h3>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded">NEW</span>
            </div>
            <p className="text-gray-700">
              Need to reduce your collateral without fully exiting? You can now withdraw a portion of 
              your LP position&apos;s liquidity while keeping the rest as collateral. The system automatically 
              recalculates your borrowing capacity.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-amber-600 font-bold text-lg">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Delegation Support</h3>
              <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded">NEW</span>
            </div>
            <p className="text-gray-700">
              Delegate specific permissions to other addresses. Perfect for DAOs and institutions that 
              need to separate who can deposit, borrow, repay, and collect fees.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">5</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Health Factor Alerts</h3>
              <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">NEW</span>
            </div>
            <p className="text-gray-700">
              Set custom health factor thresholds and receive notifications via email, Telegram, or 
              Discord when your position approaches risk levels. Never be caught off guard by market moves.
            </p>
          </div>
        </div>
      </section>

      <section id="improvements" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Performance Improvements</h2>
        
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="font-semibold text-green-900 mb-3">Gas Optimizations</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>30% reduction</strong> in deposit transaction costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>25% reduction</strong> in borrow/repay costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>Batched operations</strong> for multi-position actions</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Oracle Improvements</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Faster updates</strong> with reduced latency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Additional fallback</strong> price sources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Improved TWAP</strong> calculation accuracy</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="ux-updates" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">UX Updates</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Based on user feedback, we&apos;ve made significant improvements to the dashboard and overall experience.
        </p>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600">📊</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Redesigned Dashboard</h3>
              <p className="text-gray-700 text-sm">
                New portfolio overview with at-a-glance health metrics, position breakdown, and 
                historical performance charts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600">🔄</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Transaction Previews</h3>
              <p className="text-gray-700 text-sm">
                See exactly what will happen before you confirm. Previews show expected health factor 
                changes, gas estimates, and potential risks.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600">📱</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Mobile Optimization</h3>
              <p className="text-gray-700 text-sm">
                Fully responsive design with touch-friendly controls. Manage your positions on the go.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600">🤖</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Mini AI Improvements</h3>
              <p className="text-gray-700 text-sm">
                Smarter suggestions, better context awareness, and new capabilities for strategy 
                recommendations and risk analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Security Enhancements</h2>
        
        <div className="bg-gray-900 text-white rounded-xl p-6 not-prose">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Additional audit</strong> by Trail of Bits covering v1.1 changes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Enhanced circuit breakers</strong> for extreme market conditions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Improved liquidation</strong> mechanics with better MEV protection</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Bug bounty program</strong> expanded with higher rewards</span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <h3 className="font-semibold text-amber-900 mb-2">Audit Report</h3>
          <p className="text-gray-700">
            The full Trail of Bits audit report is available on our GitHub. All identified issues have 
            been addressed prior to this release.
          </p>
        </div>
      </section>

      <section id="whats-next" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">What&apos;s Next</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          We&apos;re already working on v1.2 with exciting features on the roadmap:
        </p>

        <div className="grid md:grid-cols-2 gap-4 not-prose mb-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Cross-Chain Support</h3>
            <p className="text-gray-600 text-sm">Deposit LP positions from multiple chains</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Automate v2</h3>
            <p className="text-gray-600 text-sm">Advanced automation with custom triggers</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Vault Templates</h3>
            <p className="text-gray-600 text-sm">Pre-built strategies for common use cases</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Governance Token</h3>
            <p className="text-gray-600 text-sm">Community governance and protocol ownership</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-lg text-white not-prose">
          <h3 className="text-xl font-bold mb-3">Upgrade Now</h3>
          <p>
            v1.1 is live on mainnet. Your existing positions are automatically compatible—no migration 
            needed. Head to the app to explore the new features and let us know what you think!
          </p>
        </div>
      </section>
    </BlogPostLayout>
  )
}
