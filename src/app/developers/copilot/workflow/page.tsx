import { MessageSquare, Brain, Database, Calculator, BarChart3, RefreshCw } from "lucide-react"

export default function WorkflowPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Generalized Workflow
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Mini AI Agent's end-to-end workflow is designed to translate your intentions into secure, optimized results.
          Here's a streamlined breakdown of the process:
        </p>
      </div>

      {/* Workflow Steps */}
      <div className="space-y-16">
        {/* Step 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 flex items-center justify-center md:w-1/4">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 inline-block mb-3">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Step 1</h3>
                <p className="text-blue-100">Query Processing</p>
              </div>
            </div>
            <div className="p-6 md:w-3/4">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                User Query Processing: Conversational Intelligence at Your Fingertips
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <div>
                    <span className="font-semibold">Natural Language Interface (NLI):</span> Engage with DeFi in plain
                    language. Ask questions like "What's Aave's current borrowing APR?" or issue commands such as "Swap
                    ETH for USDC when gas drops below 10 Gwei."
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <div>
                    <span className="font-semibold">Multi-Query Support:</span> Handle complex requests, including
                    market analysis, trading strategy validation, direct execution commands, and portfolio optimization
                    suggestions.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <div>
                    <span className="font-semibold">Validation Layer:</span> Ensures input integrity, user
                    authentication, and compliance checks, providing a secure foundation.
                  </div>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Why It Matters:</span> Mini combines the advanced language
                  understanding of sophisticated models with real-time DeFi data, delivering accurate, context-aware
                  responses specifically tailored for the decentralized finance ecosystem. Unlike generic AI, Mini is
                  finely tuned for DeFi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6 flex items-center justify-center md:w-1/4">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 inline-block mb-3">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Step 2</h3>
                <p className="text-indigo-100">Analysis Engine</p>
              </div>
            </div>
            <div className="p-6 md:w-3/4">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                AI Analysis Engine: Turning Context into Actionable Insights
              </h2>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">NLP-Powered Breakdown:</h3>
                <ul className="space-y-3 pl-5">
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">Intent Classification:</span> Identifies your specific goal (e.g.,
                      arbitrage, liquidity migration).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">Parameter Extraction:</span> Gathers crucial details like assets,
                      timeframes, and risk tolerances.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">Risk & Strategy Validation:</span> Cross-checks queries against
                      historical data and your preferences to ensure viability.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg mb-4">
                <p className="text-sm">
                  <span className="font-semibold">Dynamic Insights Example:</span> Ask, "What are the pros and cons of
                  staking in Spark Protocol?" Mini synthesizes APRs, liquidity risks, and recent protocol updates,
                  providing a comprehensive answer.
                </p>
              </div>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <span className="font-semibold">Important Note:</span> Mini doesn't account for personal financial
                  goals. Always validate suggestions against your own risk profile.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 flex items-center justify-center md:w-1/4">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 inline-block mb-3">
                  <Database className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Step 3</h3>
                <p className="text-purple-100">Oracle Integration</p>
              </div>
            </div>
            <div className="p-6 md:w-3/4">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Oracle Integration: Real-Time Data, Real-World Context
              </h2>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Multi-Source Data Fetching:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">On-Chain Metrics</h4>
                    <p className="text-sm">
                      Access real-time prices, liquidity depths, whale wallet activity, gas trends, and smart contract
                      interactions.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Market Indicators</h4>
                    <p className="text-sm">
                      Leverage volume/momentum analysis, sentiment scores (social + news), and volatility indices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <p className="text-sm">
                  <span className="font-semibold">Use Case:</span> Define complex triggers like "Initiate ETH staking
                  when: (1) APR {">"} 5%, (2) gas {"<"} 15 Gwei, (3) Ethereum sentiment turns positive."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-6 flex items-center justify-center md:w-1/4">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 inline-block mb-3">
                  <Calculator className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Step 4</h3>
                <p className="text-cyan-100">Decision Engine</p>
              </div>
            </div>
            <div className="p-6 md:w-3/4">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Decision Engine: Risk-Aware Execution Planning for Optimal Outcomes
              </h2>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Multi-Factor Analysis:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-600 font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">Risk Assessment:</span> Evaluates volatility, liquidity gaps, and
                      slippage modeling.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">Opportunity Validation:</span> Assesses profit potential,
                      cost-benefit ratios, and timing optimization.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Smart Execution Triggers:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 bg-cyan-50 rounded-lg">
                    <p className="text-sm">
                      <span className="font-semibold text-cyan-700">Time-Based:</span>
                      <br />
                      "Unstake assets after 7 days."
                    </p>
                  </div>
                  <div className="p-3 bg-cyan-50 rounded-lg">
                    <p className="text-sm">
                      <span className="font-semibold text-cyan-700">Gas-Based:</span>
                      <br />
                      "Claim rewards only if Gwei {"<"} 10."
                    </p>
                  </div>
                  <div className="p-3 bg-cyan-50 rounded-lg">
                    <p className="text-sm">
                      <span className="font-semibold text-cyan-700">Price-Based:</span>
                      <br />
                      "Sell 50% if BTC drops below $60K."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 flex items-center justify-center md:w-1/4">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 inline-block mb-3">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Step 5</h3>
                <p className="text-green-100">Trade Execution</p>
              </div>
            </div>
            <div className="p-6 md:w-3/4">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Trade Execution Protocol: Precision and Security in Every Transaction
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Pre-Execution Checklist:</h3>
                  <p>
                    Ensures balance verification, gas optimization, and route prioritization for efficient execution.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Transaction Flow:</h3>
                  <p>
                    Seamlessly interacts with smart contracts (e.g., DEX swaps, loan repayments), handles signing and
                    network broadcast (Ethereum, Solana, etc.), and provides real-time confirmation monitoring.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Supported Actions:</h3>
                  <p>
                    Execute a wide range of DeFi operations across platforms like Aave/Spark (borrowing,
                    collateralization, APR queries) and Sky/Wagmi (staking, yield claiming, cross-chain APR tracking).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 flex items-center justify-center md:w-1/4">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 inline-block mb-3">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Step 6</h3>
                <p className="text-amber-100">Feedback System</p>
              </div>
            </div>
            <div className="p-6 md:w-3/4">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Feedback System: Continuous Improvement and Transparency
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-amber-700">Post-Trade Analytics</h3>
                  <p>
                    Provides an execution audit, including block confirmation status, finalized price vs. expected, gas
                    cost breakdown, and slippage analysis.
                  </p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-amber-700">User Reporting</h3>
                  <p>
                    Delivers real-time alerts, performance dashboards, and strategy tweak suggestions (e.g., "Increase
                    liquidity in Pool X—APR rose 12% this week.").
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Mini AI Agent's Workflow Outshines the Rest */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Why Mini AI Agent's Workflow Outshines the Rest
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">AI-Driven Precision</h3>
            <p>
              Tailored specifically for DeFi, Mini offers accurate, context-aware responses, unlike general-purpose AI
              models.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-purple-600">Unified Complexity</h3>
            <p>
              Seamlessly manage loans, swaps, and staking across multiple protocols within a single, intuitive flow.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-indigo-600">Adaptive Learning</h3>
            <p>
              Continuously refines recommendations based on historical query patterns, ensuring ongoing optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          From Question to Outcome: Experience the Power of Mini AI Agent
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Mini AI Agent goes beyond simple trade execution. It transforms your unstructured queries into auditable,
          optimized DeFi strategies. Whether you're tracking whale movements or automating cross-protocol yield farming,
          every action is backed by real-time data and secured with robust protocols.
        </p>
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
          Embrace the future of DeFi with Mini
        </div>
      </div>
    </div>
  )
}

