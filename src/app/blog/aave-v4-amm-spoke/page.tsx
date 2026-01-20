import type { Metadata } from "next"
import BlogPostLayout from "@/components/blog-post-layout"

export const metadata: Metadata = {
  title: "Borrowing Against Uniswap LP Tokens via Aave v4's AMM Market Spoke",
  description: "Technical deep-dive into how the Hub-and-Spoke architecture enables LP-backed lending while keeping positions active.",
}

const tableOfContents = [
  { id: "hub-spoke-architecture", title: "Hub and Spoke Architecture" },
  { id: "lp-tokens-collateral", title: "LP Tokens as Collateral" },
  { id: "borrowing-workflow", title: "Borrowing Workflow" },
  { id: "positions-remain-active", title: "LP Positions Remain Active" },
  { id: "repayment-health", title: "Repayment and Health Factors" },
  { id: "liquidation-risk", title: "Liquidation and Risk Containment" },
  { id: "summary", title: "Summary" },
]

export default function AaveV4AMMSpokePage() {
  return (
    <BlogPostLayout
      title="Borrowing Against Uniswap LP Tokens via Aave v4's AMM Market Spoke"
      date="January 16, 2026"
      description="How Aave v4's hub and spoke architecture enables borrowing against concentrated liquidity positions while keeping them active and earning fees."
      image="/images/blog/aave-v4-amm-spoke.png"
      tableOfContents={tableOfContents}
      prevPost={{
        slug: "defi-ux-challenges",
        title: "How AMM Market Solves DeFi User Experience Challenges",
        date: "January 17, 2026",
      }}
      nextPost={{
        slug: "unleashing-lp-tokens",
        title: "Unleashing Your LP Tokens with Aave's AMM Market",
        date: "January 15, 2026",
      }}
    >
      <section id="hub-spoke-architecture" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Hub and Spoke Architecture</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Aave v4 introduces a fundamentally new architectural model for decentralized lending built around a hub and 
          spoke design. This structure cleanly separates where liquidity lives from how it is used. At the center of 
          the system sits the Liquidity Hub, which aggregates and safeguards capital such as stablecoins and other 
          core assets. Around it operate multiple Spokes, each representing a specialized lending market with its own 
          collateral types, risk parameters, and accounting logic.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6 not-prose">
          <h3 className="font-semibold text-indigo-900 mb-3">How Spokes Work</h3>
          <p className="text-gray-700 mb-4">
            In this design, Spokes do not hold liquidity themselves. Instead, they are granted borrowing capacity 
            from the Hub in the form of a credit line. When a user borrows through a Spoke, the Spoke draws liquidity 
            directly from the Hub and assigns the resulting debt to the user.
          </p>
          <p className="text-gray-700">
            This separation allows new markets to be created without fragmenting liquidity or redeploying core 
            lending logic.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          The AMM Market Spoke is one such specialized module. It is purpose built to support loans collateralized by 
          automated market maker liquidity positions, particularly concentrated liquidity positions such as Uniswap V3 
          LP NFTs. By plugging into the shared Liquidity Hub, the AMM Market Spoke can offer deep and efficient 
          borrowing without maintaining a separate pool of funds. This makes LP based lending both capital efficient 
          and composable with the rest of the Aave ecosystem.
        </p>
      </section>

      <section id="lp-tokens-collateral" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">LP Tokens as Collateral in the AMM Market</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Uniswap V3 liquidity provider tokens differ significantly from traditional fungible LP tokens. Each position 
          is represented by a non fungible token that encodes a specific price range, defined by lower and upper ticks, 
          along with the amount of liquidity provided. Within this range, the position actively participates in trading 
          and earns fees. Outside of it, the position becomes inactive and holds exposure to one side of the pair.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          The value of such an LP position is not static. It depends on the current market price of the underlying 
          assets, the configured tick range, the amount of liquidity, and the fees accrued over time. As a result, 
          LP positions cannot be treated as simple ERC twenty tokens with a fixed price. Accurate collateralization 
          requires continuous valuation that reflects real time market conditions.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mb-6 not-prose">
          <h3 className="font-semibold text-amber-900 mb-2">Oracle-Driven Valuation</h3>
          <p className="text-gray-700">
            The AMM Market Spoke addresses this by relying on oracle driven pricing combined with on chain liquidity 
            math. When an LP NFT is supplied as collateral, the Spoke retrieves the position&apos;s parameters, including 
            token pair, liquidity amount, and tick bounds. Using established formulas, it calculates how much of each 
            underlying token is currently represented by the position. These token balances are then priced using 
            reliable price feeds to determine the total value of the LP position.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Based on this valuation, and applying conservative collateral factors, the Spoke determines the maximum 
          amount that can be borrowed. Because liquidity positions can behave non linearly during volatile market 
          movements, the AMM Market Spoke can dynamically adjust loan to value limits to reflect changes in risk. 
          This allows borrowing capacity to be tuned not only to the assets involved, but also to the specific 
          characteristics of each position.
        </p>
      </section>

      <section id="borrowing-workflow" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Borrowing Workflow in the AMM Market Spoke</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          The borrowing process is designed to abstract away complexity while preserving transparency.
        </p>

        <div className="space-y-4 not-prose mb-6">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div className="pt-1">
              <h3 className="font-semibold text-gray-900 mb-1">Deposit LP NFT</h3>
              <p className="text-gray-700">
                The user deposits their liquidity position NFT into the AMM Market Spoke. This action designates the 
                LP position as collateral. Importantly, the liquidity itself remains in the underlying AMM pool and 
                continues to operate normally.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div className="pt-1">
              <h3 className="font-semibold text-gray-900 mb-1">Credit Line Reference</h3>
              <p className="text-gray-700">
                Once the collateral is deposited, the Spoke references its borrowing capacity from the Liquidity Hub. 
                This credit line defines how much liquidity the Spoke can draw in aggregate. From the user&apos;s 
                perspective, this step is invisible. It simply ensures that sufficient funds are available to 
                service the loan.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div className="pt-1">
              <h3 className="font-semibold text-gray-900 mb-1">Borrow Request</h3>
              <p className="text-gray-700">
                The user initiates a borrow request for a supported asset such as a stablecoin. The Spoke validates 
                the request against the position&apos;s collateral value and risk limits. If approved, it draws the 
                requested amount from the Hub and transfers it to the user. Internally, the user&apos;s obligation is 
                tracked as debt shares, consistent with Aave&apos;s accounting model.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
            <div className="pt-1">
              <h3 className="font-semibold text-gray-900 mb-1">Interest Accrual</h3>
              <p className="text-gray-700">
                From that point forward, interest accrues on the borrowed amount according to Aave&apos;s utilization 
                based interest rate model. As more liquidity in the Hub is borrowed, rates adjust automatically. 
                Interest compounds over time until the user repays part or all of the loan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="positions-remain-active" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">LP Positions Remain Active and Productive</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          A key advantage of this architecture is that collateralizing an LP position does not deactivate it. The 
          liquidity stays in the AMM pool and continues earning trading fees throughout the life of the loan. Fee 
          accrual is independent of the borrowing activity.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg mb-6 not-prose">
          <h3 className="font-semibold text-green-900 mb-2">Fee Collection</h3>
          <p className="text-gray-700">
            The AMM Market Spoke exposes a fee collection mechanism that allows users to claim accumulated trading 
            fees at any time. This can be done without repaying the loan or withdrawing the position. As a result, 
            the collateral itself continues to generate yield, which can help offset borrowing costs or be redeployed 
            elsewhere.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          This design preserves the economic integrity of liquidity provision. Users do not need to choose between 
          earning fees and accessing liquidity. They can do both simultaneously.
        </p>
      </section>

      <section id="repayment-health" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Repayment, Health Factors, and Ongoing Management</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Users may repay their debt partially or in full at any time. Repayment reduces outstanding debt and improves 
          the health factor of the position, increasing the safety buffer against liquidation. Once the loan is fully 
          repaid, the LP NFT becomes freely withdrawable and can be returned to the user&apos;s wallet or redeployed 
          elsewhere.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Throughout the loan&apos;s lifetime, the AMM Market Spoke continuously monitors the position&apos;s health factor. 
          This metric compares the oracle based value of the LP collateral against the outstanding debt. As long as 
          the health factor remains above one, the position is considered solvent.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Because LP positions can change in value due to price movements, fee accrual, or changes in active range, 
          the health factor is recalculated dynamically. This ensures that risk is assessed in real time rather than 
          based on stale assumptions.
        </p>
      </section>

      <section id="liquidation-risk" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Liquidation and Risk Containment</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          If market movements or accrued interest cause the health factor to fall below the safe threshold, the 
          position becomes eligible for liquidation. In such a case, an external liquidator may repay a portion of 
          the user&apos;s debt on their behalf. In exchange, the liquidator receives a corresponding share of the 
          underlying assets from the LP position, along with a predefined liquidation incentive.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          To execute this process, the Spoke withdraws the necessary liquidity from the AMM pool and transfers the 
          underlying tokens to the liquidator. The liquidation mechanism is designed to unwind only as much of the 
          position as required to restore solvency, minimizing disruption and market impact.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 not-prose">
          <h3 className="font-semibold text-indigo-900 mb-3">Layered Risk Management</h3>
          <p className="text-gray-700">
            Risk is further contained through conservative loan to value limits, pool specific parameters, and 
            dynamic adjustments based on volatility and oracle confidence. Each Spoke also operates within its own 
            caps and constraints, while the Liquidity Hub enforces global limits. This layered approach ensures that 
            risk from LP collateral lending is isolated and cannot cascade into unrelated markets or threaten the 
            stability of the Hub.
          </p>
        </div>
      </section>

      <section id="summary" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Summary</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          The AMM Market Spoke in Aave v4 is purpose built to enable borrowing against automated market maker 
          liquidity positions. By leveraging the hub and spoke architecture, it allows LP tokens represented as NFTs 
          to serve as collateral while drawing liquidity from a shared Hub. Positions remain active and continue 
          earning fees, interest accrues predictably, and risk is managed through real time valuation and dynamic 
          parameters.
        </p>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-lg text-white not-prose">
          <h3 className="text-xl font-bold mb-3">LP Positions as Financial Assets</h3>
          <p>
            This design transforms LP positions into fully functional financial assets. Liquidity providers can 
            unlock credit without unwinding their positions, preserve yield while borrowing, and interact with a 
            system that abstracts complexity without sacrificing transparency. In doing so, the AMM Market Spoke 
            demonstrates how Aave v4&apos;s architecture enables sophisticated collateral types to be integrated safely 
            and efficiently into decentralized lending.
          </p>
        </div>
      </section>
    </BlogPostLayout>
  )
}
