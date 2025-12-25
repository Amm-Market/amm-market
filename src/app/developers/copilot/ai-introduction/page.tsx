import Link from "next/link"
import { ChevronRight, Bot, Zap, Shield, BarChart, Repeat, Globe, Cpu, Clock, Brain, Sparkles } from "lucide-react"

export default function AiIntroductionPage() {
  return (
    <main className="flex-1 max-w-[800px] pl-8 pr-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/developers" className="hover:text-gray-900">
          Developers
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/developers/copilot" className="hover:text-gray-900">
          Copilot
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">AI Introduction</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">Mini AI Agent: Your Intelligent Gateway to Smarter DeFi</h1>

      <div className="prose max-w-none">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border border-blue-100">
          <p className="text-lg font-medium text-blue-800 mb-2">
            Mini AI Agent is an AI-driven DeFi tool designed to revolutionize how users interact with decentralized
            finance. Mini AI simplifies how people discover, assess, and invest in DeFi.
          </p>
          <p className="text-blue-700">
            Powered by Anthropic Claude Sonnet, Mini AI Agent deploys independent operators to automate a wide range of
            DeFi tasks. Users enjoy a secure, isolated sandbox, equipped with complete browser functionality.
          </p>
        </div>

        <p>
          By seamlessly combining the power of conversational AI with real-time data aggregation, Mini provides a
          unified platform for executing complex DeFi operations, tracking critical project updates, and analyzing
          intricate market trends. All of this is accessible through a single, intuitive interface, transforming the
          complexity of DeFi into clarity.
        </p>

        <p>
          Mini AI Agent simplifies the often-intricate process of liquidity provision. It identifies and implements
          optimal liquidity pool strategies by abstracting away complexities like wallet selection, chain switching, and
          LP setup. Leveraging an intuitive AI interface, Mini AI Agent lowers the barrier to entry to DeFi, empowering
          more users to unlock higher earning potential within the DeFi space.
        </p>

        <h2>Standardizing DeFi Interaction with Dex Mini Router Contract</h2>
        <p>
          Dex Mini also introduces a groundbreaking router contract that standardizes the interaction between different
          DeFi applications. This innovative approach acts as a universal communication layer, much like a USB port or a
          SIM card for DeFi. It provides a consistent way for AI to connect and interact between various DeFi protocols
          and applications, fostering interoperability and simplifying the ecosystem.
        </p>

        <h2>Mini AI Agent Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <Bot className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold text-blue-800">Conversational AI Interface</h3>
            <p className="text-sm text-blue-700">
              Engage with DeFi using natural language. Analyze assets, execute swaps, or track trends with simple
              commands. Receive real-time investing context with AI-driven alerts, delivering insights proactively.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <Brain className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold text-purple-800">Intelligence Hub</h3>
            <p className="text-sm text-purple-700">
              Stay informed with automated summaries and recaps on tracked assets. Mini AI Agent transforms raw data,
              historical patterns, and emerging market narratives into actionable insights. Dive deeper with Mini
              AI-curated analysis accessible with a click.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <Globe className="h-8 w-8 text-green-600 mb-3" />
            <h3 className="text-lg font-semibold text-green-800">Multi-DEX Integration</h3>
            <p className="text-sm text-green-700">
              Optimize your trades with Dex Mini router that aggregates liquidity across decentralized exchanges for the
              best rates. Seamlessly bridge assets between blockchains using Across Bridge Protocol's secure cross-chain
              messaging.
            </p>
          </div>
        </div>

        <h2>Mini AI Agent Trading Strategies</h2>
        <p>Navigate volatile markets with Mini's combination of indicators and adaptive machine learning:</p>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
          <ul className="space-y-4">
            <li className="flex items-start">
              <BarChart className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">Market Analysis Engine:</span> Uses Moving Averages (MA), RSI, Bollinger
                Bands, MACD, and order book depth to identify trends, volatility, and momentum shifts.
              </div>
            </li>
            <li className="flex items-start">
              <Zap className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">Real-Time Execution:</span> Scans the market 24/7, executing trades at
                machine speed while managing risks with stop-losses and diversification.
              </div>
            </li>
            <li className="flex items-start">
              <Repeat className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">Strategy Backtesting:</span> Test and refine trading strategies using
                historical data to optimize risk-reward ratios before deploying capital.
              </div>
            </li>
          </ul>
        </div>

        <h2>Key Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="flex items-start p-4 bg-blue-50 rounded-lg">
            <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-800">24/7 Automation</h3>
              <p className="text-sm text-blue-700">
                Never miss an opportunity with round-the-clock trading and market monitoring.
              </p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-blue-50 rounded-lg">
            <Shield className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-800">Emotion-Free Decision Making</h3>
              <p className="text-sm text-blue-700">Replace impulsive reactions with AI-driven logic.</p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-blue-50 rounded-lg">
            <Cpu className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-800">Unmatched Speed & Precision</h3>
              <p className="text-sm text-blue-700">
                Execute trades in milliseconds, capitalizing on every opportunity.
              </p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-blue-50 rounded-lg">
            <Sparkles className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-800">Holistic Risk Management</h3>
              <p className="text-sm text-blue-700">
                Prioritize capital preservation with dynamic stop-losses and cross-chain diversification.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 mb-6">
          <h2 className="text-xl font-bold text-blue-800 mb-2">The Future of DeFi is AI-Driven</h2>
          <p className="text-blue-700">
            Dex Mini redefines what's possible in the evolving blockchain ecosystem. By integrating adaptive AI,
            cross-chain agility, and institutional-grade analytics into a user-friendly interface, Mini AI Agent isn't
            just a tool—it's your co-pilot in decentralized finance.
          </p>
        </div>
      </div>
    </main>
  )
}

