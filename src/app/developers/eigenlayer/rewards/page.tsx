import {
  Calendar,
  Coins,
  Gift,
  Users,
  Wallet,
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  UserPlus,
  BarChart4,
} from "lucide-react"

export default function RewardsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Rewards Programs
        </h1>

        <div className="text-lg text-gray-700 space-y-4">
          <p>
            At Dex Mini, we leverage EigenLayer AVS not only to continuously monitor and validate our system's
            performance but also to dynamically reward our users. This robust framework underscores our commitment to a
            secure, transparent, and adaptive protocol. By harnessing EigenLayer AVS, we proactively track liquidity
            pool performance, detect potential issues early, and adjust user rewards in real time—ensuring that any risk
            factors are mitigated before they can impact the system.
          </p>
          <p>
            Our flexible, transparent rating mechanism dynamically awards users based on actual pool performance, while
            guaranteeing a minimum baseline for our protocol-created pools. Early adopters of Dex Mini will be rewarded
            with "Mini" points—our innovative rewards system designed to align and incentivize the community. Users can
            accumulate Mini points by depositing, borrowing, or leveraging on Dex Mini, with bonus rewards available for
            locking deposits for up to six months.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-10 border border-blue-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
          <Calendar className="mr-2 text-blue-500" size={24} />
          Customizable, Season-Based Rewards
        </h2>
        <p className="mb-4 text-gray-700">
          Our highly flexible points system is tailored to reward productive protocol activity and meet your DeFi needs.
          The Mini Rewards Program is divided into Seasons, each featuring its own reward structure:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
            <div className="flex items-center mb-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                Season 1
              </span>
              <span className="text-gray-500 text-sm">April–June 2025</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Baseline Rewards</h3>
            <p className="text-gray-600 mb-3">
              All points will receive a 10x boost, meaning 0.001 ETH staked earns 10 points per day.
            </p>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-mono text-sm text-gray-700">Loyalty Points = ETH Staked × 10,000 × Days Staked</p>
              <p className="text-xs text-gray-500 mt-2">
                Example: 5 ETH staked for 6 days yields 5 × 10,000 × 6 = 300,000 points.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
            <div className="flex items-center mb-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                Season 2
              </span>
              <span className="text-gray-500 text-sm">July–September 2025</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Boosted Rewards</h3>
            <p className="text-gray-600 mb-3">Following June 30th, Earn 1 point per day for every 0.001 ETH staked.</p>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-mono text-sm text-gray-700">Loyalty Points = ETH Staked × 1,000 × Days Staked</p>
              <p className="text-xs text-gray-500 mt-2">
                Example: 5 ETH staked for 6 days yields 5 × 1,000 × 6 = 30,000 points.
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 italic">
          Note: These formulas do not account for additional multipliers from DeFi integration boosts.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <Coins className="mr-2 text-blue-500" size={24} />
          How to Earn Mini Points
        </h2>
        <p className="mb-6 text-gray-700">
          Earning Mini points is simple and versatile. Here are some of the key methods:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Add Liquidity</h3>
              <p className="text-gray-600 text-sm">
                Use the Dex Mini Pool to add liquidity and start earning points immediately.
              </p>
            </div>
          </div>

          <div className="flex p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Zap className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Passive Points</h3>
              <p className="text-gray-600 text-sm">Earn points by simply holding whitelisted assets in your wallet.</p>
            </div>
          </div>

          <div className="flex p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Rollover Points</h3>
              <p className="text-gray-600 text-sm">Gain additional points by rolling over your yield assets.</p>
            </div>
          </div>

          <div className="flex p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <UserPlus className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Referral Points</h3>
              <p className="text-gray-600 text-sm">
                Invite friends to the platform and earn points for every successful referral.
              </p>
            </div>
          </div>

          <div className="flex p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-red-600" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Check-In Points</h3>
              <p className="text-gray-600 text-sm">Earn points by regularly checking into the platform.</p>
            </div>
          </div>
        </div>

        <p className="text-gray-700">
          As we expand our partnerships and integrations, expect new programs to earn points for LP'ing into integrated
          DeFi protocols, completing quests on Layer 2, and more. Please note that loyalty points will only be accrued
          if your wallet holds eETH, weETH, or follows one of the designated ecosystem paths outlined on our official
          ecosystems page.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <CheckCircle2 className="mr-2 text-blue-500" size={24} />
          Eligibility & Compliance
        </h2>
        <p className="mb-4 text-gray-700">
          Any user who can access and deposit liquidity is eligible for Mini rewards. Our system adheres to strict
          compliance standards—including geo-blocking and AML requirements—enforced directly within our web application
          and smart contracts. Our robust points engine enables us to reward actions at a granular level, applying
          distinct rates and boosts for activities such as:
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
          <li>Collateral Asset management</li>
          <li>Debt Asset management</li>
          <li>Liquidity Vault contributions</li>
          <li>Long/Short positions</li>
        </ul>
      </div>

      <div className="mb-10 bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
          <BarChart4 className="mr-2 text-blue-500" size={24} />
          Farming Limitations
        </h2>
        <p className="mb-4 text-gray-700">
          To ensure fair distribution of rewards, we apply limitations on farming rewards for certain positions:
        </p>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2">Limited Scenarios:</h3>
          <p className="text-gray-700 mb-2">
            Positions that use only borrows or only leverage on both the collateral and debt sides will earn points
            based solely on the net dollar value difference:
          </p>
          <div className="bg-white p-3 rounded-md border border-gray-200 mb-4">
            <p className="font-mono text-sm text-gray-700">
              Net Value = LST (or Stablecoin) Supplied – LST (or Stablecoin) Borrowed
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-semibold text-gray-800 mb-2">Example:</h4>
            <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
              <li>$1,000 mSOL Supplied</li>
              <li>$300 bSOL Borrowed</li>
            </ul>

            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-gray-800">Standard Calculation:</h5>
                <p className="text-gray-700 text-sm">
                  Supplying earns 1,000 points per day, and borrowing costs 300 points per day, totaling 1,300 points.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-800">With Farming Limitations:</h5>
                <p className="text-gray-700 text-sm">Points earned = 1,000 – 300 = 700 points per day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <Users className="mr-2 text-blue-500" size={24} />
          Referral Programs
        </h2>
        <p className="mb-4 text-gray-700">
          Each 0.1 ETH staked through Dex Mini rewards both the staker and the referrer with 10,000 loyalty points.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 mb-6">
          <p className="text-gray-700 text-sm">
            <span className="font-semibold">Note:</span> Referral points may take up to two hours to appear in your
            portfolio. The referral program now uses your wallet address as the referral code instead of an NFT ID.
            Simply generate a referral link from your ether.fan account to share with friends.
          </p>
        </div>
        <p className="text-gray-700">
          The protocol reserves the right to review and remove any instances of referral program manipulation. Our goal
          is to promote the ecosystem fairly and prevent any attempts to game the system.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <Gift className="mr-2 text-blue-500" size={24} />
          What Can You Do With Mini Points?
        </h2>
        <p className="mb-4 text-gray-700">
          Mini points will play an integral role in our decentralized governance framework—stay tuned for more details
          on how you can leverage your points to influence the future of Dex Mini.
        </p>
        <p className="text-gray-700">
          By rewarding loyalty and active participation, the Mini Rewards Program is designed to attract new users,
          foster community engagement, and ensure that our innovative DeFi tools reach those who will truly benefit from
          them. Designed for efficiency, Companions require minimal resources yet maximize rewards and user experience.
        </p>
      </div>
    </div>
  )
}

