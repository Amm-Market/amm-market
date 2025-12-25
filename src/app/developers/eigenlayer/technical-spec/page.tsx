import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function TechnicalSpecPage() {
  return (
    <main className="flex-1 max-w-[800px] pl-8 pr-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/developers" className="hover:text-gray-900">
          Developers
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/developers/eigenlayer" className="hover:text-gray-900">
          Eigenlayer
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">Technical Spec</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">
        Dex Mini AVS: An EigenLayer-Based Framework for Uniswap Hook Data - Technical Spec
      </h1>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Project Overview</h2>
          <p>
            Built on EigenLayer's restaking infrastructure, Dex Mini AVS offers a decentralized framework for risk
            management and liquidity analytics. It aggregates and validates real-time Uniswap v4 Hook liquidity data
            across multiple chains, providing enhanced insights for DeFi participants.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">Value Proposition:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Comprehensive Data Aggregation and Validation:</strong> Utilizes offchain oracles (e.g.,
              DeFiLlama, Dune Analytics) and chainwatchers to gather and verify real-time liquidity pool data, including
              TVL, APY, fees, and liquidity depth.
            </li>
            <li>
              <strong>Automated Risk Mitigation:</strong> Enables critical functionalities such as automated collateral
              rebalancing, liquidation triggers, and impermanent loss analysis, proactively safeguarding user positions.
            </li>
            <li>
              <strong>Incentivized Participation:</strong> Rewards liquidity providers and operators with "Mini Points"
              for their active and accurate contributions to the system.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Benefits:</h3>
          <p>This system empowers Liquidity Providers (LPs), traders, and protocols with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Real-time Liquidity Metrics:</strong> Access up-to-the-minute data to make informed decisions.
            </li>
            <li>
              <strong>Actionable Risk Insights:</strong> Understand and mitigate potential risks effectively.
            </li>
            <li>
              <strong>Automated Safeguards:</strong> Reduce exposure to common DeFi risks like impermanent loss,
              slippage, and undercollateralized positions.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. AVS User Stories</h2>

          <h3 className="text-xl font-medium mt-6 mb-3">AVS Consumer User Stories</h3>

          <h4 className="text-lg font-medium mt-4 mb-2">For Liquidity Providers:</h4>
          <p>
            <strong>LPs Story:</strong> "As a liquidity provider, I want real-time, validated liquidity pool data so
            that I can optimize my positions, capital allocation and reduce exposure to high-risk pools or cascading
            market risks."
          </p>
          <p>
            <strong>Key Needs:</strong> Up-to-date analytics on metrics like TVL, APY, fees, and risk indicators such as
            impermanent loss and slippage.
          </p>

          <h4 className="text-lg font-medium mt-4 mb-2">For users:</h4>
          <p>
            <strong>Trader Story:</strong> "As a trader, I want immediate notifications of impermanent loss analysis,
            slippage predictions and market anomalies (e.g., sudden APY spikes or liquidation triggers) so that I can
            make informed trading decisions and protect my capital."
          </p>
          <p>
            <strong>Borrowers Story:</strong> "As a borrower, I want access to automated collateral health monitoring,
            liquidation triggers, verified liquidity data to prevent systemic risks due to undercollateralized
            positions." So that I can optimize my liquidity positions and maximize returns while minimizing risks.
          </p>
          <p>
            <strong>Key Needs:</strong> Risk metrics like impermanent loss analysis and slippage predictions, Informed
            trading decisions and capital protection.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">User Flows</h3>

          <h4 className="text-lg font-medium mt-4 mb-2">Liquidity Data Query Flow:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>A user submits a query (e.g., a QueryLiquidity request) to the Dex Mini AVS smart contract.</li>
            <li>
              The contract emits an event, prompting offchain oracles and chainwatchers to fetch and validate data from
              multiple sources.
            </li>
            <li>
              Operators fetch, validate, and aggregate liquidity data from DeFiLlama, Dune Analytics, and on-chain logs.
            </li>
            <li>
              Validated data is aggregated and stored on EigenLayer's Data Availability (DA) layer, and the user
              receives the updated liquidity analytics.
            </li>
          </ol>

          <h4 className="text-lg font-medium mt-4 mb-2">Risk & Liquidation Flow:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              A collateral monitor detects an undercollateralized position, triggering a LiquidationTrigger event.
            </li>
            <li>
              Operators verify the collateral status using both on-chain logs and offchain data, execute the
              liquidation, and distribute fees accordingly.
            </li>
            <li>The entire process is recorded on-chain for transparency and future audits.</li>
          </ol>

          <h4 className="text-lg font-medium mt-4 mb-2">Reward Tracking Flow:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              The system monitors user liquidity actions across chains. Chainwatchers validate on-chain liquidity events
              (swaps, deposits, withdrawals).
            </li>
            <li>
              Based on predefined formulas, "Mini Points" are calculated and credited to the user's account. EigenLayer
              DA updates the unified liquidity index.
            </li>
            <li>Users can claim rewards periodically, reinforcing active and risk-aware participation.</li>
          </ol>

          <h3 className="text-xl font-medium mt-6 mb-3">Entities Involved</h3>
          <ul className="space-y-4">
            <li>
              <strong>AVS Contract:</strong> The core smart contract that integrates with EigenLayer, managing
              liquidity, handling task submissions, data storage, and state updates. A decentralized, on-chain storage
              system that maintains a unified index of liquidity pool data—including TVL, APY, liquidity depth, and
              fees. By removing reliance on individual chain queries and external APIs, our UI and rollover router
              provide up-to-date pool insights, fostering user trust and engagement.
            </li>
            <li>
              <strong>Operators:</strong> Entities (nodes) that run the offchain infrastructure (oracles, chainwatchers)
              responsible for data validation, risk analysis, and execution of critical tasks like liquidations.
              External data services that aggregate key metrics from sources like DeFiLlama, Dune Analytics, and
              custom-built indexers. These oracles feed the DA layer with validated liquidity data, offering a
              comprehensive view of the ecosystem.
            </li>
            <li>
              <strong>External Data Providers:</strong> Third-party services (e.g., DeFiLlama, Dune Analytics) that
              supply raw liquidity metrics.
            </li>
            <li>
              <strong>Chainwatchers:</strong> Monitor on-chain for real-time updates events (e.g., swaps, deposits) and
              trigger timely data updates. Real-time monitoring services that track on-chain events such as deposits,
              withdrawals, swaps, and liquidity shifts. Working alongside offchain oracles, chainwatchers trigger
              immediate DA layer updates and deploy logging mechanisms to detect anomalies.
            </li>
            <li>
              <strong>End Users:</strong> Liquidity providers, traders, and borrowers who consume the AVS services and
              benefiting from analytics and risk automation.
            </li>
            <li>
              <strong>Risk Modules:</strong> Components like CollateralMonitor, InterestOptimizer, and
              LiquidationTrigger that manage specific risk-related functionalities.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. AVS Security (Trust) Model</h2>
          <p>Dex Mini AVS uses a layered operator set strategy to ensure decentralized security and reliability:</p>

          <div className="bg-gray-50 p-6 rounded-lg my-4 border border-gray-200">
            <h3 className="text-xl font-medium mb-3">Operator Set #1 – Data Validators:</h3>
            <p>
              Responsible for validating liquidity data from various sources and ensuring its accuracy before storage in
              the DA layer.
            </p>

            <h4 className="text-lg font-medium mt-4 mb-2">Scope:</h4>
            <p>
              Fetches and validates liquidity data from offchain oracles and chainwatchers. Cross-checks against
              on-chain logs, DA layer and multiple external data sources.
            </p>

            <h4 className="text-lg font-medium mt-4 mb-2">SLAs - Service Level Agreement:</h4>
            <p>
              Data freshness (e.g., updates at least every 5 minutes), rapid response times (&lt;30 seconds), and 99.9%
              uptime.
            </p>

            <h4 className="text-lg font-medium mt-4 mb-2">Verification:</h4>
            <p>Consensus is achieved when at least 2/3 of operators agree on the validation result.</p>

            <h4 className="text-lg font-medium mt-4 mb-2">Rewards & Penalties:</h4>
            <p>
              Rewards for timely and accurate data submission. Penalties include withholding rewards, ejection, or
              slashing for falsified data.
            </p>

            <h4 className="text-lg font-medium mt-4 mb-2">Malicious Behaviors:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Soft Slashing:</strong> Inconsistent data submissions.
              </li>
              <li>
                <strong>Ejection:</strong> Repeated SLA violations.
              </li>
              <li>
                <strong>Slashing:</strong> False liquidity data submission.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-4 border border-gray-200">
            <h3 className="text-xl font-medium mb-3">Operator Set #2 – Risk Analysis:</h3>
            <p>
              Focuses on analyzing validated data to provide risk metrics, impermanent loss projections, and liquidation
              scenarios.
            </p>

            <h4 className="text-lg font-medium mt-4 mb-2">Scope:</h4>
            <p>
              Processes validated data to generate risk metrics, perform impermanent loss calculations, and simulate
              liquidation scenarios.
            </p>

            <h4 className="text-lg font-medium mt-4 mb-2">SLAs - Service Level Agreement:</h4>
            <p>Analysis results delivered within 2 minutes and an accuracy margin within 5%.</p>

            <h4 className="text-lg font-medium mt-4 mb-2">Verification:</h4>
            <p>
              Results are cross-verified across the operator set with transparent methodologies. At least 2/3 consensus
              among operators.
            </p>

            <h4 className="text-lg font-medium mt-4 mb-2">Rewards:</h4>
            <p>
              Rewards based on early detection of risk and accurate assessments; penalties for manipulations or repeated
              inaccuracies.
            </p>

            <h4 className="text-lg font-medium mt-4 mb-2">Malicious Behaviors:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Soft Slashing:</strong> Inaccurate risk assessments.
              </li>
              <li>
                <strong>Ejection:</strong> Repeated errors in projections.
              </li>
              <li>
                <strong>Slashing:</strong> Fraudulent risk manipulation.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-4 border border-gray-200">
            <h3 className="text-xl font-medium mb-3">Operator Set #3 – Reward Distribution:</h3>
            <p>Manages the tracking of user activities and distribution of "Mini" points based on liquidity actions.</p>

            <h4 className="text-lg font-medium mt-4 mb-2">Scope:</h4>
            <p>
              Monitors user liquidity actions across chains, calculates "Mini Points," and manages their distribution.
            </p>

            <h4 className="text-lg font-medium mt-4 mb-2">SLAs - Service Level Agreement:</h4>
            <p>Point calculation should be 100% accurate with distributions processed within 5 minutes after claims.</p>

            <h4 className="text-lg font-medium mt-4 mb-2">Verification:</h4>
            <p>Cross-checking user actions with on-chain data to ensure accurate reward allocation.</p>

            <h4 className="text-lg font-medium mt-4 mb-2">Rewards:</h4>
            <p>
              Accurate Mini Point calculations and timely operations are rewarded; misallocations result in penalties
              such as point deductions or further slashing.
            </p>

            <h4 className="text-lg font-medium mt-4 mb-2">Malicious Behaviors:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Soft Slashing:</strong> Misallocation of rewards.
              </li>
              <li>
                <strong>Ejection:</strong> Consistent failure in reward tracking.
              </li>
              <li>
                <strong>Slashing:</strong> Fraudulent reward manipulation.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. AVS System Design</h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Core System Flows:</h3>

          <h4 className="text-lg font-medium mt-4 mb-2">Task Creation & Processing:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>A user submits a task request (e.g., liquidity migration or risk evaluation) to the AVS contract.</li>
            <li>
              The contract emits an event; operators pick up this event to aggregate data, perform computations (using
              both AI-driven analysis and real-time metrics), and then write the results back on-chain.
            </li>
          </ul>

          <h4 className="text-lg font-medium mt-4 mb-2">Continuous Risk Monitoring:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>The system continuously monitors on-chain and offchain events.</li>
            <li>
              Anomaly detection (e.g., drastic TVL changes or APY anomalies) triggers notifications or automated risk
              mitigation actions.
            </li>
          </ul>

          <h4 className="text-lg font-medium mt-4 mb-2">Reward Distribution:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              User actions are tracked, and rewards are calculated and credited in real time, ensuring transparency and
              consistency.
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-lg font-medium mb-2 text-blue-800">System Flow 1: Liquidity Data Query</h4>
              <ol className="list-decimal pl-6 space-y-1">
                <li>User submits QueryLiquidity request.</li>
                <li>Operators fetch, validate, and aggregate data.</li>
                <li>EigenLayer DA stores and updates verified data.</li>
                <li>User receives query results from the AVS contract.</li>
              </ol>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-medium mb-2 text-green-800">System Flow 2: Collateral Liquidation</h4>
              <ol className="list-decimal pl-6 space-y-1">
                <li>CollateralMonitor detects LTV breach.</li>
                <li>AVS contract emits a LiquidationTrigger.</li>
                <li>Operators execute liquidation, updating EigenLayer DA.</li>
                <li>Liquidation fees are distributed to LPs.</li>
              </ol>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="text-lg font-medium mb-2 text-purple-800">System Flow 3: Risk Analysis</h4>
              <ol className="list-decimal pl-6 space-y-1">
                <li>User submits RiskAssessmentRequest.</li>
                <li>Operators fetch data, analyze impermanent loss risks, and return results.</li>
                <li>Verified risk reports are stored and made accessible to users.</li>
              </ol>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="text-lg font-medium mb-2 text-amber-800">System Flow 4: Reward Distribution</h4>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Chainwatchers track liquidity actions.</li>
                <li>Operators calculate Mini Points and distribute them.</li>
                <li>AVS contract verifies and updates user balances.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. AVS Architecture Diagram</h2>
          <p>A high-level diagram would include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>EigenLayer's DA Layer:</strong> For secure, tamper-proof storage of validated data.
            </li>
            <li>
              <strong>Offchain Oracles & Chainwatchers:</strong> Responsible for fetching and cross-verifying data.
            </li>
            <li>
              <strong>Risk Management Modules:</strong> Including components for collateral monitoring and liquidation
              triggers.
            </li>
            <li>
              <strong>User Interface & Reward System:</strong> Providing real-time analytics and claimable "Mini
              Points."
            </li>
          </ul>

          <div className="bg-gray-100 p-6 rounded-lg my-6 text-center">
            <p className="text-gray-500 italic">Architecture diagram visualization would be displayed here</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. AVS Economics</h2>
          <p>
            At Dex Mini, users pay transaction fees based on the specific service used. As users engage with the
            platform, they earn Mini Points through both base rewards and dynamic multipliers linked to real-time pool
            and market conditions.
          </p>
          <p className="mt-2">
            Eigenlayer Operators are also rewarded with Mini Points for ensuring data integrity and maintaining system
            performance. Moreover, Operators are incentivized with 30% of all Dex Mini protocol fees allocated to them
            for running Dex Mini AVS. If Dex Mini achieves success, Dex Mini annual fees could resemble protocols like
            Kamino.Finance or Dex Mini Fluid. For context, DefiLlama data indicates that Kamino.Finance has generated
            over $158 million in annualized fees, while Dex Mini Fluid has accrued just over $89 million.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">Cryptoeconomic Security & Stake Requirements:</h3>

          <h4 className="text-lg font-medium mt-4 mb-2">Security Value:</h4>
          <p>
            Critical for preventing losses due to failed liquidations or incorrect risk assessments. Critical for
            safeguarding multi-million-dollar liquidity pools by ensuring accurate data and timely risk management.
          </p>

          <h4 className="text-lg font-medium mt-4 mb-2">Slashable Stake:</h4>
          <p>
            Minimum of 10 ETH per operator and a maximum of 100 ETH, depending on the potential financial impact of any
            malfeasance.
          </p>

          <h4 className="text-lg font-medium mt-4 mb-2">Estimated Operator Costs:</h4>
          <p>
            Estimated costs range from ~$100 to $5,000 per month per operator, which covers infrastructure, Data Access
            APIs, and associated operational expenses.
          </p>

          <h4 className="text-lg font-medium mt-4 mb-2">Slashing Conditions:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Deliberate Data Manipulation:</strong> Potential slashing in the range of 1-5 ETH if falsified
              data leads to significant losses.
            </li>
            <li>
              <strong>Failure to Validate Critical Data:</strong> Penalties of 5-8 ETH for minor breaches slashed for
              inaccurate projections.
            </li>
            <li>
              <strong>Collusion or Manipulation in Lending market Risk Analysis:</strong> More severe penalties (up to
              8-15 ETH) due to the higher impact on overall protocol security slashed for manipulating metrics.
            </li>
            <li>
              <strong>Reward Distribution Manipulation:</strong> Minor infractions may incur penalties of 15-30 ETH
              slashed for misallocating Mini Points.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p>
            Dex Mini AVS is designed to be a robust, decentralized liquidity management and risk assessment framework.
            By leveraging EigenLayer's restaking infrastructure, it not only delivers real-time, validated data across
            multiple chains but also incorporates a strong incentive and penalty mechanism to maintain data integrity
            and system reliability. This approach minimizes systemic risks (like impermanent loss and liquidation
            delays) while rewarding both users and operators, making it a critical component for secure, scalable DeFi
            applications.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mt-6 border border-blue-100">
            <p className="font-medium mb-3">The EigenLayer AVS system enables:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✅</span>
                <span>
                  <strong>Comprehensive Pool Analytics</strong> – Risk metrics, fees, user engagement, and market
                  sentiment tracking.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✅</span>
                <span>
                  <strong>Hooks Activity Monitoring</strong> – Real-time tracking of lending, borrowing, and liquidity
                  movement across chains. Impermanent Loss & Slippage Analysis – Continuous evaluation of trading risks.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✅</span>
                <span>
                  <strong>Transaction Risk Analysis</strong> – Identifying volume shifts and behavioral patterns and
                  Predict Yield Forecasting.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✅</span>
                <span>
                  <strong>Reward Point System</strong> – Rewarding users with "Mini" points for liquidity actions.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

