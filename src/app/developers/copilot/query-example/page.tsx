import {
  MessageSquare,
  Zap,
  Layers,
  Info,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  XCircle,
  Database,
  BarChart,
  Cpu,
  RefreshCw,
  Bell,
  DollarSign,
  Clock,
} from "lucide-react"

export default function QueryExamplePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Crafting Powerful DeFi Prompts
        </h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">
          Craft precise, actionable prompts to unlock Mini&apos;s full potential. This guide equips you with strategies
          to communicate effectively with Dex Mini&apos;s AI, ensuring seamless execution of DeFi operations.
        </p>
      </div>

      {/* Core Principles Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Core Principles for Precision</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <MessageSquare className="h-6 w-6 text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Clarity</h3>
            </div>
            <p className="text-gray-600 mb-3">Be specific. Instead of &quot;Manage my staking,&quot; use:</p>
            <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">@lido (Ethereum): Stake 5 ETH</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
            <div className="flex items-center mb-4">
              <Layers className="h-6 w-6 text-indigo-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Modularity</h3>
            </div>
            <p className="text-gray-600 mb-3">Break down complex tasks. Use sequential steps like:</p>
            <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-2">
              @uniswapV3 (Polygon) – Swap 1 ETH for USDC
            </div>
            <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
              @curve (Polygon) – Provide liquidity with USDC
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <Info className="h-6 w-6 text-purple-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Context</h3>
            </div>
            <p className="text-gray-600 mb-3">Explicitly define networks, assets, and thresholds:</p>
            <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
              @aaveV3 (Arbitrum): Borrow 1000 DAI when borrowing rate {"<"} 5%
            </div>
          </div>
        </div>
      </section>

      {/* How Mini Interprets Prompts */}
      <section className="mb-12 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">How Mini AI Agent Interprets Your Prompts</h2>
        <p className="text-gray-600 mb-6">Mini&apos;s AI identifies key components:</p>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-700 mb-2">Attributes</h3>
            <p className="text-gray-600">Protocols, networks, tokens, amounts, conditions</p>
            <div className="mt-3 text-sm text-gray-500 italic">
              Example: @aaveV3 (Arbitrum): Borrow 1000 DAI when borrowing rate {"<"} 5%
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-semibold text-indigo-700 mb-2">Intent</h3>
            <p className="text-gray-600">Swap, stake, borrow, migrate, lend</p>
            <div className="mt-3 text-sm text-gray-500 italic">Example: @compoundV3 (Optimism): Supply 200 USDC</div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-700 mb-2">Execution Plan</h3>
            <p className="text-gray-600">Step-by-step with safety checks (gas, slippage, balance)</p>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Avoid These Common Mistakes</h2>
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">Common Errors to Avoid</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Missing network</strong>: &quot;@makerdao: Repay DAI loan&quot; - fails
                  </span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Ambiguous amounts</strong>: &quot;Withdraw some tokens&quot; - rejected
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Workflow Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Putting It All Together: Real-World Workflow Examples</h2>
        <p className="text-gray-600 mb-6">
          Let&apos;s walk through some practical scenarios to illustrate how these principles come into play:
        </p>

        {/* Workflow 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-t-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Workflow 1: Querying Price and Executing a Simple Trade
          </h3>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-700 mb-2">Scenario:</h4>
            <p className="text-gray-700">
              A user asks, &quot;Check the price of ETH and buy 1 ETH if it&apos;s below $1,800.&quot;
            </p>
          </div>

          <h4 className="font-semibold text-gray-800 mb-3">Steps:</h4>
          <ol className="space-y-6">
            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 mt-1">
                1
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">User Query:</h5>
                <p className="text-gray-600 mb-2">
                  The user inputs their query into an interface (e.g., web app, chatbot, or terminal).
                </p>
                <div className="bg-gray-800 text-green-400 p-3 rounded-md font-mono text-sm">
                  &gt; Check the price of ETH and buy 1 ETH if it&apos;s below $1,800.
                </div>
              </div>
            </li>

            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 mt-1">
                2
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Off-Chain AI Processing:</h5>
                <p className="text-gray-600">The query is parsed by the AI to understand:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1 mb-2">
                  <li>Target asset: ETH.</li>
                  <li>Condition: Price {"<"} $1,800.</li>
                  <li>Action: Buy 1 ETH.</li>
                </ul>
                <p className="text-gray-600">The AI determines it needs real-time price data.</p>
              </div>
            </li>

            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 mt-1">
                3
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Oracle Data Fetch:</h5>
                <p className="text-gray-600 mb-2">The AI triggers an oracle query via middleware.</p>
                <div className="flex items-center space-x-4 mb-2">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Database className="h-5 w-5 text-blue-600" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <div className="bg-purple-100 p-2 rounded-md">
                    <BarChart className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <p className="text-gray-600">The oracle returns the price to the AI.</p>
              </div>
            </li>

            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 mt-1">
                4
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Decision-Making:</h5>
                <p className="text-gray-600 mb-2">The AI evaluates the price:</p>
                <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-2">
                  If ETH {"<"} $1,800 → Proceed.
                  <br />
                  If ETH ≥ $1,800 → Halt and respond, &quot;ETH is currently above $1,800; no trade executed.&quot;
                </div>
              </div>
            </li>

            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 mt-1">
                5
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Trade Execution:</h5>
                <p className="text-gray-600 mb-2">If conditions are met:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1 mb-2">
                  <li>AI prepares a transaction (e.g., buy 1 ETH from Uniswap).</li>
                  <li>Signs the transaction with the user&apos;s private key (stored securely).</li>
                  <li>Submits the transaction to the blockchain.</li>
                </ul>
              </div>
            </li>

            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 mt-1">
                6
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">On-Chain Result:</h5>
                <p className="text-gray-600 mb-2">
                  The blockchain processes the transaction, and the trade is executed.
                </p>
                <div className="bg-gray-800 text-green-400 p-3 rounded-md font-mono text-sm">
                  &gt; Trade executed. You bought 1 ETH at $1,790.
                </div>
              </div>
            </li>
          </ol>
        </div>

        {/* Workflow 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-t-4 border-indigo-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Workflow 2: Advanced Trade Based on Multiple Conditions
          </h3>

          <div className="bg-indigo-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-indigo-700 mb-2">Scenario:</h4>
            <p className="text-gray-700">
              A user asks, &quot;Check the price of ETH and the gas fee. If ETH {"<"} $1,700 and gas is {"<"} 50 gwei,
              buy 2 ETH.&quot;
            </p>
          </div>

          <h4 className="font-semibold text-gray-800 mb-3">Steps:</h4>
          <ol className="space-y-6">
            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center mr-4 mt-1">
                1
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">User Query:</h5>
                <p className="text-gray-600 mb-2">The user inputs the query, which specifies multiple conditions.</p>
                <div className="bg-gray-800 text-green-400 p-3 rounded-md font-mono text-sm">
                  &gt; Check the price of ETH and the gas fee. If ETH {"<"} $1,700 and gas is {"<"} 50 gwei, buy 2 ETH.
                </div>
              </div>
            </li>

            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center mr-4 mt-1">
                2
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">AI Parsing and Planning:</h5>
                <p className="text-gray-600 mb-2">AI identifies:</p>
                <div className="bg-gray-100 p-3 rounded-md mb-2">
                  <p className="font-semibold">Conditions:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>ETH price {"<"} $1,700.</li>
                    <li>Gas fee {"<"} 50 gwei.</li>
                  </ul>
                  <p className="font-semibold mt-2">Action:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Buy 2 ETH.</li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center mr-4 mt-1">
                3
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Fetching On-Chain Data:</h5>
                <p className="text-gray-600 mb-2">The AI queries the oracle for:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1 mb-2">
                  <li>ETH price from DEX or price feed.</li>
                  <li>Current gas fee from the blockchain.</li>
                </ul>
                <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
                  Oracle returns:
                  <br />
                  ETH price = $1,680.
                  <br />
                  Gas fee = 45 gwei.
                </div>
              </div>
            </li>

            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center mr-4 mt-1">
                4
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Decision-Making:</h5>
                <p className="text-gray-600 mb-2">AI verifies both conditions:</p>
                <ul className="space-y-2 mb-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>ETH price ($1,680) {"<"} $1,700 → Condition met.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Gas fee (45 gwei) {"<"} 50 gwei → Condition met.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Both conditions satisfied → Proceed to trade.</span>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center mr-4 mt-1">
                5
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Trade Execution:</h5>
                <p className="text-gray-600 mb-2">AI constructs a transaction to buy 2 ETH.</p>
                <div className="flex items-center space-x-4 mb-2">
                  <div className="bg-indigo-100 p-2 rounded-md">
                    <Cpu className="h-5 w-5 text-indigo-600" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </li>

            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center mr-4 mt-1">
                6
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">On-Chain Result:</h5>
                <p className="text-gray-600 mb-2">Blockchain processes the transaction.</p>
                <div className="bg-gray-800 text-green-400 p-3 rounded-md font-mono text-sm">
                  &gt; Trade executed successfully. You bought 2 ETH at $1,680 with 45 gwei gas.
                </div>
              </div>
            </li>
          </ol>
        </div>

        {/* More Workflows - Condensed for brevity */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Workflow 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Workflow 3: Automated Risk-Managed Trade</h3>
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-purple-700 mb-2">Scenario:</h4>
              <p className="text-gray-700">
                A user asks, &quot;Buy $1,000 worth of ETH only if whale activity shows large ETH sells in the past 1
                hour.&quot;
              </p>
            </div>
            <div className="flex items-center mb-4">
              <BarChart className="h-6 w-6 text-purple-500 mr-2" />
              <p className="text-gray-600">AI analyzes on-chain whale activity data</p>
            </div>
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              <p className="text-gray-600">Condition met: Several large ETH sales detected</p>
            </div>
            <div className="bg-gray-800 text-green-400 p-3 rounded-md font-mono text-sm">
              &gt; Trade executed. You purchased 0.595 ETH ($1,000) based on detected whale activity.
            </div>
          </div>

          {/* Workflow 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Workflow 4: Failed Trade with User Notification</h3>
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-red-700 mb-2">Scenario:</h4>
              <p className="text-gray-700">
                A user asks, &quot;Sell 2 ETH if its price is above $2,000, but only if gas fees are below 30
                gwei.&quot;
              </p>
            </div>
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              <p className="text-gray-600">Gas fee (25 gwei) {"<"} 30 gwei → Condition met</p>
            </div>
            <div className="flex items-center mb-4">
              <XCircle className="h-6 w-6 text-red-500 mr-2" />
              <p className="text-gray-600">ETH price ($1,980) ≤ $2,000 → Condition not met</p>
            </div>
            <div className="bg-gray-800 text-yellow-400 p-3 rounded-md font-mono text-sm">
              &gt; No trade executed. ETH price is currently $1,980, which is below your target of $2,000.
            </div>
          </div>

          {/* Workflow 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Workflow 5: AI-Driven Long-Term Staking Strategy</h3>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-green-700 mb-2">Scenario:</h4>
              <p className="text-gray-700">
                A user asks, &quot;Analyze current staking rewards for ETH 2.0 and allocate 10 ETH if the annual yield
                is above 5%.&quot;
              </p>
            </div>
            <div className="flex items-center mb-4">
              <DollarSign className="h-6 w-6 text-green-500 mr-2" />
              <p className="text-gray-600">Current staking yield: 5.2% → Condition met</p>
            </div>
            <div className="flex items-center mb-4">
              <RefreshCw className="h-6 w-6 text-blue-500 mr-2" />
              <p className="text-gray-600">AI interacts with staking protocol (e.g., Lido)</p>
            </div>
            <div className="bg-gray-800 text-green-400 p-3 rounded-md font-mono text-sm">
              &gt; Staked 10 ETH at a 5.2% annual yield.
            </div>
          </div>

          {/* Workflow 6 */}
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Workflow 6: Risk Management and Stop-Loss Execution
            </h3>
            <div className="bg-amber-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-amber-700 mb-2">Scenario:</h4>
              <p className="text-gray-700">
                A user asks, &quot;Sell 3 ETH if the price drops below $1,600 as a stop-loss mechanism.&quot;
              </p>
            </div>
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-amber-500 mr-2" />
              <p className="text-gray-600">AI continuously monitors ETH price</p>
            </div>
            <div className="flex items-center mb-4">
              <Bell className="h-6 w-6 text-red-500 mr-2" />
              <p className="text-gray-600">Price drops to $1,590 → Stop-loss triggered</p>
            </div>
            <div className="bg-gray-800 text-green-400 p-3 rounded-md font-mono text-sm">
              &gt; Stop-loss executed. Sold 3 ETH at $1,590 to mitigate losses.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

