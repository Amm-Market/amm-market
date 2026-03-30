import type { Metadata } from "next"
import BlogPostLayout from "@/components/blog-post-layout"

export const metadata: Metadata = {
  title: "Introducing Automate: Set-and-Forget LP Management",
  description: "Meet Automate—Avana's automation layer for hands-off LP management. Auto-compound fees, rebalance positions, and protect against liquidation automatically.",
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "what-is-automate", title: "What is Automate?" },
  { id: "key-features", title: "Key Features" },
  { id: "use-cases", title: "Use Cases" },
  { id: "how-it-works", title: "How It Works" },
  { id: "getting-started", title: "Getting Started" },
  { id: "pricing", title: "Pricing" },
]

export default function IntroducingAutomatePage() {
  return (
    <BlogPostLayout
      title="Introducing Automate: Set-and-Forget LP Management"
      date="January 23, 2026"
      description="Meet Automate—Avana's automation layer for hands-off LP management. Auto-compound fees, rebalance positions, and protect against liquidation automatically."
      image="/images/blog/introducing-automate.png"
      tableOfContents={tableOfContents}
      nextPost={{
        slug: "v1-1-release",
        title: "Avana v1.1: New Features and Improvements",
        date: "January 22, 2026",
      }}
      // This is the newest post, no prevPost
    >
      <section id="introduction" className="mb-12 scroll-mt-24">
        <p className="text-gray-700 leading-relaxed mb-6">
          Managing LP positions effectively requires constant attention. Fees need to be collected, 
          positions may drift out of range, and market volatility can threaten collateral health. 
          For most users, this means either accepting suboptimal returns or spending hours monitoring 
          dashboards.
        </p>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl text-white not-prose">
          <h3 className="text-xl font-bold mb-3">Introducing Automate</h3>
          <p>
            Automate is Avana&apos;s built-in automation layer that handles routine LP management tasks 
            for you. Set your preferences once, and let the system optimize your positions 24/7.
          </p>
        </div>
      </section>

      <section id="what-is-automate" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">What is Automate?</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Automate is a non-custodial automation service that executes predefined actions on your LP 
          positions when certain conditions are met. Your assets remain in your control—Automate simply 
          has permission to perform specific operations you&apos;ve authorized.
        </p>

        <div className="grid md:grid-cols-3 gap-4 not-prose">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
            <div className="w-12 h-12 bg-green-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-green-700 text-xl">🔒</span>
            </div>
            <h3 className="font-semibold text-green-900 mb-2">Non-Custodial</h3>
            <p className="text-gray-600 text-sm">Your assets stay in your wallet. Automate only has limited, revocable permissions.</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
            <div className="w-12 h-12 bg-blue-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-blue-700 text-xl">⚡</span>
            </div>
            <h3 className="font-semibold text-blue-900 mb-2">Always On</h3>
            <p className="text-gray-600 text-sm">Monitors your positions 24/7 and acts within seconds when triggers fire.</p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 text-center">
            <div className="w-12 h-12 bg-purple-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-purple-700 text-xl">🎯</span>
            </div>
            <h3 className="font-semibold text-purple-900 mb-2">Configurable</h3>
            <p className="text-gray-600 text-sm">Choose exactly which automations to enable and customize their parameters.</p>
          </div>
        </div>
      </section>

      <section id="key-features" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Key Features</h2>
        
        <div className="space-y-6 not-prose">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-lg">💰</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Auto-Compound Fees</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Trading fees accumulate in your LP position but don&apos;t automatically compound. Automate 
              collects fees and reinvests them back into your position, maximizing your yield through 
              the power of compounding.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm">
                <strong>Configuration:</strong> Set minimum fee threshold (e.g., compound when fees exceed $50) 
                and frequency (daily, weekly, or on-demand).
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-lg">🔄</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Range Rebalancing</h3>
            </div>
            <p className="text-gray-700 mb-4">
              When price moves outside your LP range, your position stops earning fees. Automate can 
              automatically rebalance your position to a new range centered around the current price, 
              keeping your capital productive.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm">
                <strong>Configuration:</strong> Set rebalance trigger (e.g., when price exits range) and 
                new range width (narrow, medium, or wide).
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 text-lg">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Liquidation Protection</h3>
            </div>
            <p className="text-gray-700 mb-4">
              When your health factor drops toward dangerous levels, Automate can automatically repay 
              a portion of your debt using collected fees or a pre-funded buffer. This prevents costly 
              liquidations and protects your position.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm">
                <strong>Configuration:</strong> Set health factor threshold (e.g., repay when HF drops below 1.3) 
                and repayment amount (percentage of debt or fixed amount).
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-amber-600 text-lg">📊</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Profit Taking</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Lock in gains automatically. When your position reaches a profit target, Automate can 
              withdraw a portion and convert to stablecoins, securing your returns regardless of 
              future price movements.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm">
                <strong>Configuration:</strong> Set profit threshold (e.g., take profit at 20% gain) and 
                withdrawal percentage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Use Cases</h2>
        
        <div className="space-y-4 not-prose">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-lg">
            <h3 className="font-semibold text-indigo-900 mb-2">Passive LP Investor</h3>
            <p className="text-gray-700">
              Enable auto-compound and range rebalancing. Your position stays productive without any 
              manual intervention. Check in weekly or monthly instead of daily.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
            <h3 className="font-semibold text-green-900 mb-2">Leveraged Yield Farmer</h3>
            <p className="text-gray-700">
              Enable liquidation protection with a stablecoin buffer. Sleep soundly knowing your 
              looped position won&apos;t get liquidated during overnight volatility.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
            <h3 className="font-semibold text-amber-900 mb-2">DAO Treasury Manager</h3>
            <p className="text-gray-700">
              Automate fee collection and profit taking. Treasury LP positions generate consistent 
              returns that are automatically converted to operational stablecoins.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
            <h3 className="font-semibold text-purple-900 mb-2">Active Trader</h3>
            <p className="text-gray-700">
              Use Automate as a safety net while you focus on strategy. Liquidation protection runs 
              in the background while you manage positions manually.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">How It Works</h2>
        
        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Grant Permissions</h3>
              <p className="text-gray-700 text-sm">
                Approve Automate to perform specific actions on your positions. Permissions are granular—you 
                choose exactly what Automate can do.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Configure Rules</h3>
              <p className="text-gray-700 text-sm">
                Set your automation rules and thresholds. Each automation type has customizable parameters 
                to match your strategy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Fund Gas Buffer</h3>
              <p className="text-gray-700 text-sm">
                Deposit a small ETH buffer to cover gas costs for automated transactions. Automate uses 
                this to execute actions on your behalf.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold">4</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Sit Back</h3>
              <p className="text-gray-700 text-sm">
                Automate monitors your positions continuously. When conditions are met, it executes the 
                configured actions and notifies you.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <h3 className="font-semibold text-amber-900 mb-2">Transparency</h3>
          <p className="text-gray-700">
            Every automated action is logged and visible in your dashboard. You&apos;ll see exactly what 
            Automate did, when, and why. Full transaction history is available for review.
          </p>
        </div>
      </section>

      <section id="getting-started" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Getting Started</h2>
        
        <div className="bg-gray-900 text-white rounded-xl p-6 not-prose">
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white text-sm font-semibold px-2 py-0.5 rounded">1</span>
              <span>Navigate to the <strong>Automate</strong> tab in your Avana dashboard</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white text-sm font-semibold px-2 py-0.5 rounded">2</span>
              <span>Select the position(s) you want to automate</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white text-sm font-semibold px-2 py-0.5 rounded">3</span>
              <span>Choose your automation strategies and configure parameters</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white text-sm font-semibold px-2 py-0.5 rounded">4</span>
              <span>Approve the required permissions (one-time transaction)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white text-sm font-semibold px-2 py-0.5 rounded">5</span>
              <span>Fund your gas buffer (minimum 0.01 ETH recommended)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white text-sm font-semibold px-2 py-0.5 rounded">6</span>
              <span>Enable Automate and you&apos;re done!</span>
            </li>
          </ol>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Pricing</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Automate charges a small fee on each automated action to cover infrastructure costs.
        </p>

        <div className="grid md:grid-cols-2 gap-4 not-prose mb-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">Auto-Compound</h3>
            <p className="text-2xl font-bold text-indigo-600 mb-1">0.5%</p>
            <p className="text-gray-600 text-sm">of compounded fees</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">Range Rebalance</h3>
            <p className="text-2xl font-bold text-indigo-600 mb-1">0.3%</p>
            <p className="text-gray-600 text-sm">of rebalanced value</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">Liquidation Protection</h3>
            <p className="text-2xl font-bold text-indigo-600 mb-1">0.1%</p>
            <p className="text-gray-600 text-sm">of repaid debt</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">Profit Taking</h3>
            <p className="text-2xl font-bold text-indigo-600 mb-1">0.5%</p>
            <p className="text-gray-600 text-sm">of withdrawn profit</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 not-prose mb-6">
          <h3 className="font-semibold text-green-900 mb-2">No Subscription Fees</h3>
          <p className="text-gray-700">
            You only pay when Automate takes action. No monthly fees, no minimum commitments. 
            Disable anytime with no penalties.
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-lg text-white not-prose">
          <h3 className="text-xl font-bold mb-3">Try Automate Today</h3>
          <p>
            Automate is available now for all Avana users. Enable it on your positions and 
            experience hands-off LP management. Your future self will thank you.
          </p>
        </div>
      </section>
    </BlogPostLayout>
  )
}
