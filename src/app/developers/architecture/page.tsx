"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "user-experience", title: "User Experience" },
  { id: "example-flow", title: "Example Flow" },
  { id: "three-tier-architecture", title: "Three-Tier Architecture" },
  { id: "data-flow", title: "Data Flow" },
  { id: "spoke-responsibilities", title: "Spoke Responsibilities" },
  { id: "hub-role", title: "Aave v4 Hub Role" },
]

export default function SpokesDesignPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Spokes Design</h1>
        <p className="text-lg text-gray-600 mb-8">
          Responsibilities and scope of the AMM Market Spoke within the Aave v4 architecture.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market is designed to be intuitive. The Spoke presents a clean, user-friendly experience 
            that guides users through the process of using their LP shares as collateral. The interface 
            is built to provide real-time information, ensuring users can make informed decisions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            It is a hybrid system that borrows the best concepts from many protocols. The Spoke is aware 
            of the unique structure of LP shares collateral and can parse LP shares metadata to identify 
            the token pair, the price range of the deployed liquidity, and the amount of liquidity provided. 
            By integrating external oracles, it can assign an accurate valuation to these positions.
          </p>
        </section>

        <section id="user-experience" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Experience</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Users can navigate to the core functions of the protocol: supplying their collateral, 
            borrowing assets, managing their loans, and claiming their earned fees.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Transaction Transparency</h3>
            <p className="text-blue-800 text-sm">
              Every action is accompanied by clear confirmations and detailed breakdowns of the transaction, 
              including estimated gas costs and the impact on their loan health, empowering users to interact 
              with the protocol with confidence and transparency.
            </p>
          </div>
        </section>

        <section id="example-flow" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example Flow: Alice the LP Master</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A practical example of the onboarding flow:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 1: Initial Deposit</h3>
              <p className="text-gray-600 text-sm">
                Alice has 5 Uniswap v3 LP positions. She deposits her first LP as collateral: 10,000 USDC 
                and 5 ETH in the ETH/USDC pool (ETH price = $2,000), currently worth approximately $20,000 
                in total value.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 2: Borrowing Power Calculated</h3>
              <p className="text-gray-600 text-sm">
                The app displays her NFT ETH-USDC and shows that, with a 70% collateral factor, she can 
                borrow up to $14,000. This is because ETH was taken as the lower-token-CF plus ETH/USDC 
                pool risk adjustment.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 3: Borrow Multiple Assets</h3>
              <p className="text-gray-600 text-sm">
                Alice borrows $6,000 USDT, $500 WBTC, $2,000 LINK, $500 UNI, $1,000 AVAX. Her total borrow 
                is $10,000. She has $4,000 left to borrow but her health factor is now in the yellow zone.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Step 4: Add More Collateral</h3>
              <p className="text-green-800 text-sm">
                Alice deposits 4 more Uniswap pools worth $50,000 combined. After each LP gets valued, 
                she can borrow up to 50% or $25,000 of that. Her global collateral is now $4,000 from 
                her first LP plus $25,000 from new LPs = $29,000 borrowable amount. She still has $10,000 
                already borrowed but her health is back to green.
              </p>
            </div>
          </div>
        </section>

        <section id="three-tier-architecture" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Three-Tier Architecture</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The architecture is a clear, three-tiered flow:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Top: Users</h3>
              <p className="text-blue-800 text-sm">
                Users interact exclusively with the Spoke contract. They deposit NFTs, borrow funds, 
                repay debt, and claim fees.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Middle: Spoke (AMM Market)</h3>
              <p className="text-purple-800 text-sm">
                This is the intelligent layer that understands Liquidity Pools such as Balancer v3 or 
                Uniswap v3. It manages NFT custody, calculates position-specific risk, and enforces 
                loan-level health checks.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Bottom: Aave v4 Hubs</h3>
              <p className="text-green-800 text-sm">
                Hubs provide the raw liquidity and handle the macro-level risk for the capital pool.
              </p>
            </div>
          </div>
        </section>

        <section id="data-flow" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Flow</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The high-level flow and data flow is unidirectional and well-defined:
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">1</span>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex-1">
                <span className="font-medium text-gray-900">LP Position Manager transfers NFT to AMM Market</span>
                <p className="text-gray-600 text-sm mt-0.5">AMM Market caches basic position data</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">2</span>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex-1">
                <span className="font-medium text-gray-900">Owners borrow against their NFT</span>
                <p className="text-gray-600 text-sm mt-0.5">The Spoke draws assets from one or more configured Hubs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">3</span>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex-1">
                <span className="font-medium text-gray-900">Debt represented as debt shares</span>
                <p className="text-gray-600 text-sm mt-0.5">Exchange rate is a global value denominated in Ray that compounds based on interest rate model</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">4</span>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex-1">
                <span className="font-medium text-gray-900">Liquidations when necessary</span>
                <p className="text-gray-600 text-sm mt-0.5">Hubs or external liquidators cause the Spoke to extract LP liquidity and either send tokens to the liquidator or swap tokens into the debt asset to repay the Hub</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">Hub Interaction</h3>
            <ul className="text-amber-800 text-sm space-y-1">
              <li>• <strong>Borrow:</strong> Spoke issues a draw call to the Hub</li>
              <li>• <strong>Repay:</strong> Spoke issues a restore call to the Hub to return funds</li>
              <li>• <strong>Health Check:</strong> Hub calls Spoke's <code className="bg-amber-100 px-1 rounded">getCollateralData</code> to fetch total NFT value</li>
              <li>• <strong>Liquidation:</strong> If Spoke's aggregate LTV breaches threshold, Hub calls <code className="bg-amber-100 px-1 rounded">handleLiquidation</code></li>
            </ul>
          </div>
        </section>

        <section id="spoke-responsibilities" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spoke Responsibilities</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Component</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Responsibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Spoke (per AMM)</td>
                  <td className="px-4 py-2 text-gray-600">Track positions & per-user aggregated collateralUsd and debtUsd (from Hub). Expose <code className="bg-gray-200 px-1 rounded">getUserAggregate(user)</code> for frontend & LiquidationAdapter.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">LiquidationAdapter</td>
                  <td className="px-4 py-2 text-gray-600">Implement internal or embedded adapter to execute penalty accrual, soft-unwind, and hard liquidation.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">LiquidationAdapter Functions</h3>
            <ul className="text-purple-800 text-sm space-y-2">
              <li><code className="bg-purple-100 px-1 rounded">applyPenalty(user)</code> — Compute and record accrued penalty</li>
              <li><code className="bg-purple-100 px-1 rounded">softUnwind(user, maxUsd)</code> — Execute partial decrease → collect → swap → repay (atomic per step)</li>
              <li><code className="bg-purple-100 px-1 rounded">liquidate(user)</code> — Execute hard liquidation if needed</li>
            </ul>
            <p className="text-purple-700 text-xs mt-3">
              Events: PenaltyAccrued, SoftUnwindExecuted, HardLiquidationExecuted
            </p>
          </div>
        </section>

        <section id="hub-role" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Aave v4 Hub Role</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Hub provides the capital backbone of the ecosystem. It is powered by Aave v4, a 
            decentralized non-custodial liquidity market.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Capital Supply</h3>
              <p className="text-blue-800 text-sm">
                Users deposit assets such as USDC, DAI, or ETH into Aave v4 Hubs via other spokes 
                such as Core or Prime Spoke. Aave Hubs set interest rates based on supply and demand, 
                and handle the accounting of debt and collateral.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Credit Lines</h3>
              <p className="text-green-800 text-sm">
                The Hub grants each Spoke a credit line which defines the maximum borrowing capacity 
                that Aave will accept from that Spoke. For example, Aave Core Hub may grant AMM Market 
                Uniswap v3 Spoke a $100 million credit line by borrowing GHO, USDT and ETH.
              </p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">Independent Health Factors</h3>
              <p className="text-amber-800 text-sm">
                A user with $10,000 in LP collateral within the Uniswap v3 Spoke and $300,000 in the 
                Balancer v3 Spoke will have two independent health factor calculations. A deficit in 
                one Spoke cannot be offset by collateral in another. To move collateral between Spokes, 
                a user must withdraw from one and re-deposit into the other.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Responsibilities and scope of the AMM Market Spoke within the Aave v4 architecture."
        sectionColor="violet"
      />
    </div>
  )
}
