import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Incentives Programs",
  description: "AMM Market incentives and rewards - emission programs, reward mechanics, how to claim rewards, and future incentive programs.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "emission-programs", title: "Emission Programs" },
  { id: "reward-mechanics", title: "Reward Mechanics" },
  { id: "claiming-rewards", title: "Claiming Rewards" },
  { id: "future-programs", title: "Future Programs" },
]

export default function IncentivesPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Incentives Programs</h1>
        <p className="text-lg text-gray-600 mb-8">
          Emission or reward mechanisms designed to encourage usage and liquidity.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market implements various incentive programs to bootstrap liquidity, reward 
            early adopters, and encourage healthy protocol usage. These programs distribute 
            rewards to users who deposit collateral and borrow responsibly.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Testnet Rewards:</strong> Participate in testnet to earn points that may 
            convert to mainnet rewards at launch.
          </p>
        </section>

        <section id="emission-programs" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Emission Programs</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">ACTIVE</span>
                <h3 className="font-semibold text-gray-900">Depositor Rewards</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Earn rewards for depositing LP tokens as collateral. Rewards scale with:
              </p>
              <ul className="text-gray-500 text-sm space-y-1">
                <li>• Amount deposited (larger deposits = more rewards)</li>
                <li>• Duration (longer deposits = bonus multiplier)</li>
                <li>• LP type (higher-risk LPs may have boosted rewards)</li>
              </ul>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">ACTIVE</span>
                <h3 className="font-semibold text-gray-900">Borrower Rewards</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Earn rewards for active borrowing. Designed to offset interest costs during 
                bootstrap phase.
              </p>
              <ul className="text-gray-500 text-sm space-y-1">
                <li>• Proportional to borrow amount</li>
                <li>• Requires maintaining healthy HF (&gt; 1.2)</li>
                <li>• Capped per user to ensure fair distribution</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded font-medium">PLANNED</span>
                <h3 className="font-semibold text-gray-900">Liquidator Incentives</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Additional rewards for liquidators who help maintain protocol health by 
                liquidating underwater positions promptly.
              </p>
            </div>
          </div>
        </section>

        <section id="reward-mechanics" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reward Mechanics</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Rewards are calculated and distributed as follows:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Accrual</h3>
              <p className="text-gray-600 text-sm">
                Rewards accrue per-second based on your share of total deposits/borrows. 
                The emission rate is set by governance and decreases over time.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Calculation</h3>
              <div className="p-3 bg-gray-900 rounded mt-2">
                <code className="text-green-400 text-xs">
                  userReward = (userDeposit / totalDeposits) × emissionPerSecond × timeElapsed
                </code>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Boost Multipliers</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• <strong>Time boost:</strong> 1.5x after 30 days, 2x after 90 days</li>
                <li>• <strong>LP type boost:</strong> Up to 1.5x for strategic LP types</li>
                <li>• <strong>Referral boost:</strong> 1.1x for referred users</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="claiming-rewards" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Claiming Rewards</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Accrued rewards can be claimed at any time:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Via Dashboard</h3>
              <p className="text-gray-600 text-sm">
                Click "Claim Rewards" in the dashboard to collect all accrued rewards in one transaction.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Via Contract</h3>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded block mt-2">
                incentivesController.claimRewards(assets[], amount, to, reward)
              </code>
            </div>

            <p className="text-gray-600 text-sm">
              <strong>Gas Optimization:</strong> Rewards don't expire. Consider batching claims 
              to save on gas costs.
            </p>
          </div>
        </section>

        <section id="future-programs" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Future Programs</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Planned incentive programs for future releases:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Governance Staking</h3>
              <p className="text-gray-600 text-sm">
                Stake governance tokens to earn protocol fees and voting power.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Safety Module</h3>
              <p className="text-gray-600 text-sm">
                Stake tokens in the safety module to backstop protocol risk and earn rewards.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Partner Integrations</h3>
              <p className="text-gray-600 text-sm">
                Co-incentive programs with partner DEXes and protocols.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Emission or reward mechanisms designed to encourage usage and liquidity."
        sectionColor="violet"
      />
    </div>
  )
}
