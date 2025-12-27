"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// FAQ categories and their questions
const faqCategories = [
  {
    name: "Getting Started",
    questions: [
      {
        q: "What do I need to get started with Dex Mini?",
        a: "You'll need an Ethereum web3 wallet. Dex Mini supports a variety of popular wallets, including MetaMask, Uniswap Wallet, Coinbase Wallet, and any wallet that is WalletConnect-enabled.",
      },
      {
        q: "How do I get started using Dex Mini?",
        a: "Simply connect your preferred wallet (from our supported list) to our platform. Once connected, you'll have full access to Dex Mini's features, including lending, borrowing, staking, and market-making strategies across multiple blockchain networks.",
      },
      {
        q: "Which blockchain networks, markets, and wallets are supported by Dex Mini?",
        a: "While primarily deployed on Unichain, Mini also extends its reach across multiple EVM-compatible networks, providing extensive market coverage for lending, leverage, and liquidity.",
      },
      {
        q: "Can I use Dex Mini in my country?",
        a: "Yes, you can access Dex Mini from anywhere with internet access and your private key.",
      },
      {
        q: "How can I contact the Dex Mini team?",
        a: "Have questions, suggestions, or feedback? Connect with us on Twitter! We're always happy to hear from you.",
      },
    ],
  },
  {
    name: "Core Functionality",
    questions: [
      {
        q: "What sets Dex Mini apart from traditional liquidity protocols?",
        a: "Dex Mini offers a unique DeFi experience by:\n• Consolidating fragmented yield strategies into a single interface.\n• Implementing gasless swaps with dynamic fees that protect users from MEV.\n• Intelligently auto-compounding rewards to maximize APY.\n• Allowing lenders to customize collateral ranges to earn additional fees.\n• Providing a composable architecture for custom functionality without sacrificing security.",
      },
      {
        q: "How do liquidity pools work on Dex Mini?",
        a: "Each market in Dex Mini maintains its own liquidity pool. When you provide liquidity, you earn a proportional share of trading fees, benefit from automatic fee distributions, and maintain granular control over your capital allocation. Additionally, each pool's dynamic reward structure compensates you based on the risk and volatility of that market.",
      },
      {
        q: "What is concentrated liquidity and why is it important?",
        a: "Concentrated liquidity allows liquidity providers to allocate funds within a specific price range. This targeted approach increases capital efficiency and enhances fee generation compared to traditional, uniformly distributed liquidity models.",
      },
      {
        q: "How does the dynamic reward structure operate on Dex Mini?",
        a: "Dex Mini uses an intelligent risk–reward framework that adjusts yields based on market maturity and liquidity. Newer, less liquid markets offer higher rewards for taking on extra risk, while mature markets benefit from lower fees driven by increased competition among liquidity providers.",
      },
      {
        q: "What fees should I expect when using Dex Mini?",
        a: 'Dex Mini\'s modular design means fees vary by service—whether trading, lending, or leveraging. Fees are transparently outlined in the interface and dynamically adjusted based on market conditions, ensuring competitive rates while rewarding liquidity providers. For a detailed breakdown, please refer to the "Dex Mini Fee Structure" section.',
      },
      {
        q: "Who holds my assets on Dex Mini?",
        a: "Dex Mini uses smart contracts for secure transactions. Your assets are stored within the pool you interact with on the Uniswap singleton contract. All transactions are traceable and irreversible.",
      },
    ],
  },
  {
    name: "Protocol Overview",
    questions: [
      {
        q: "What is the Dex Mini Router?",
        a: "The Dex Mini Router streamlines liquidity management by enabling one-click migrations of positions across protocols. It automatically harvests rewards, calculates fees, and reconfigures your positions to maintain optimal parameters while handling ETH/WETH conversions seamlessly.",
      },
      {
        q: "How does auto-compounding work on Dex Mini?",
        a: "Auto-compounding in Dex Mini continuously reinvests your earned fees and rewards. The protocol collects DEX fees multiple times a day and uses smart algorithms to reinvest them into your liquidity position, reducing the need for manual harvesting and helping to maximize your returns.",
      },
      {
        q: "What is Gasless Swap and v2onv4?",
        a: "• Gasless Swap: A feature powered by our secure Uniswap V4 hooks that allows users to perform swaps without paying gas fees directly, by leveraging MEV profit sharing and optimized execution strategies.\n• v2onv4: A compatibility layer that recreates the classic Uniswap v2 experience (fungible LP tokens, auto-compounding fees) on the gas-efficient Uniswap V4 infrastructure.",
      },
      {
        q: "What are Mini Points?",
        a: "Mini Points are a dynamic reward mechanism that tracks your activity across liquidity provision, borrowing/lending, and leverage use. They are used to rank users and adjust rewards in real time, ensuring transparent and adaptive incentive distribution.",
      },
      {
        q: "What incentive programs does Dex Mini offer?",
        a: "Dex Mini supports sustainable yield farming programs that reward liquidity providers without depleting token reserves. These incentives are automatically distributed based on your participation in liquidity, borrowing, and leverage activities.",
      },
      {
        q: "What is Mini AVS and Mini AI Agent?",
        a: "• Mini AVS: A cutting-edge monitoring system that validates pool performance in real-time, using decentralized data from EigenLayer AVS. It detects issues early and adjusts user rewards dynamically to ensure optimal performance.\n• Mini AI Agent: An intelligent, adaptive tool that learns from market conditions, refines trading strategies, and optimizes liquidity management using advanced machine learning techniques.",
      },
      {
        q: "How does Mini AI improve my investment decisions?",
        a: "Mini AI taps into both real-time and historical data from thousands of DeFi protocols. Through its natural language interface, it instantly provides actionable insights to help you make smarter, more informed investment choices.",
      },
      {
        q: "How much does Mini cost, and does it provide financial advice?",
        a: "Mini is completely free for all users. Access the reactive chat feature directly from the home page, with Mini continuously delivering timely market insights throughout your investment journey on Dex Mini. However, Mini is not a financial advisor. It provides comprehensive market data, insights, and analysis to help you make your own informed decisions but does not offer personalized financial advice.",
      },
    ],
  },
  {
    name: "Advanced Features",
    questions: [
      {
        q: "How does lending and borrowing work on Dex Mini?",
        a: "Dex Mini lets you either lend your assets to earn fee revenue or borrow against your crypto collateral without selling your holdings. Lenders deposit funds into specific markets and earn fees from trading and borrowing activities, while borrowers can unlock liquidity by over-collateralizing their positions with deposited assets.",
      },
      {
        q: "What are the risks for borrowers and lenders?",
        a: "• For Borrowers: The primary risk is liquidation—if your collateral value falls relative to your borrowed amount, your position might be closed. Dex Mini's risk management tools (like health factors, asset caps, and auto-deleverage) help mitigate this risk.\n• For Lenders: While you earn yield from borrowers' fees, there is always a risk if borrowers default. Dex Mini mitigates this by maintaining over-collateralization and socializing losses only among lenders for a specific asset.",
      },
      {
        q: "How do liquidations work in Dex Mini?",
        a: "Liquidations occur when your account's health factor drops below a safe threshold (typically near 1). In such cases, automated liquidation software closes positions to protect lenders. Any losses are then socialized among the lenders in that market, and a portion of fees is reserved to act as an insurance fund.",
      },
      {
        q: "How can I repay my borrowed position?",
        a: 'Repaying your borrow is straightforward: navigate to your dashboard, select the specific debt, choose "Repay with Collateral" if desired, verify the exchange rate and slippage, then follow the prompts to approve and execute the transaction. Once processed, your collateral will be adjusted accordingly.',
      },
      {
        q: "Do borrowers need to specify their position within the LPs' range in Oracleless lending?",
        a: "Yes, that's correct! While Dex Mini lending/borrowing systems don't inherently require inverse range orders, borrowers must specify their position within the liquidity providers' (LPs) range.",
      },
      {
        q: "Why do borrowers need to specify a position within the LPs' range?",
        a: "In Uniswap v4 (or any concentrated liquidity AMM), liquidity exists within specific price ranges set by LPs. Borrowers interact with this liquidity when depositing collateral and borrowing assets. Here's why their position matters:\n• Liquidity Availability: Borrowing is only possible if liquidity exists in the specified price range (tickLower, tickUpper). If no liquidity is available in that range, the transaction fails.\n• Collateral Efficiency: Aligning a borrowing position with the LPs' active range ensures efficient use of collateral, maximizing successful trades and minimizing slippage.\n• Risk Management: If a borrower's position moves outside the LPs' liquidity range, it may become undercollateralized, triggering liquidation. Staying within the range mitigates this risk.",
      },
    ],
  },
  {
    name: "Risk and Safety",
    questions: [
      {
        q: "How does Dex Mini protect users from market risks?",
        a: "Dex Mini employs a multi-layered security framework:\n• Continuous Monitoring: Automated vulnerability scanning and audits keep our smart contracts secure.\n• Auto-Deleverage & Liquidation Controls: These mechanisms ensure that if your health factor declines, your position is systematically unwound to protect the system.\n• Health Factor Management: A numerical indicator that helps you track the safety of your borrow positions, ensuring you're alerted before risks become critical.",
      },
      {
        q: "What is the Health Factor?",
        a: "The Health Factor is a metric representing the safety of your borrow position. A higher number means a safer position, while values nearing 1 indicate a higher risk of liquidation. Maintaining a robust Health Factor is key to protecting your collateral.",
      },
      {
        q: "Are there insurance funds in Dex Mini?",
        a: "While there is no full insurance fund, Dex Mini reserves a portion (10% of fees) to act as a buffer against losses. In the event of bad debt, these losses are socialized among lenders in the affected asset's market.",
      },
      {
        q: "Is Dex Mini's code open-source and audited?",
        a: "Yes, Dex Mini's smart contracts are open-source and have undergone rigorous audits. We continuously test and update our protocols to ensure the highest standards of security and reliability.",
      },
    ],
  },
  {
    name: "For Liquidity Providers",
    questions: [
      {
        q: "How does Dex Mini help liquidity providers (LPs) amplify their yields?",
        a: "Dex Mini combines multiple strategies to boost LP returns:\n• Leveraged LP Positions: You can strategically borrow against your concentrated liquidity to multiply your yield.\n• Strategy Automation: Advanced algorithms automatically manage your positions, rebalance liquidity, and reinvest fees.\n• Dynamic Rewards: Earn a share of both trading and borrowing fees, with higher rewards in riskier or emerging markets.",
      },
      {
        q: "What is a leveraged LP position?",
        a: "Leveraged LP positions let you use your existing liquidity as collateral to borrow additional funds. This enables you to amplify your exposure and potentially earn higher yields. However, it requires careful risk management to avoid liquidation.",
      },
      {
        q: "What analytics and management tools are available for LPs and Traders?",
        a: "Dex Mini provides a professional analytics dashboard that displays impermanent loss projections, fee accrual rates, and real-time health indicators for your positions, empowering you to make informed decisions.",
      },
      {
        q: "How do I remove liquidity from a Dex Mini pool?",
        a: "Liquidity removal is subject to market open interest and reserved tokens. If the available liquidity is capped, you may need to wait until positions close or additional liquidity is deposited. The process is clearly guided through our interface.",
      },
    ],
  },
  {
    name: "For Developers",
    questions: [
      {
        q: "How can I integrate Dex Mini functionality into my app?",
        a: "Dex Mini is built on a suite of permissionless, modular smart contracts that can be easily integrated. We provide comprehensive developer documentation and APIs that let you interact with our lending, borrowing, and liquidity management functions.",
      },
      {
        q: "What is Jit Loan and how does it work?",
        a: "Jit Loan is a feature that enables just-in-time borrowing via recursive swaps. It allows your application to request liquidity on demand, optimizing asset utilization without having to maintain excess collateral at all times.",
      },
      {
        q: "Can DAOs build custom markets on Dex Mini?",
        a: "Absolutely. Dex Mini's composable architecture and permissionless hooks allow DAOs to create bespoke lending markets and liquidity solutions. You can customize parameters, integrate unique risk management features, and deploy full-stack trading infrastructure using our platform.",
      },
      {
        q: "Are there developer resources available?",
        a: "Yes, we offer extensive documentation, sample code, and integration guides to help you build on Dex Mini. Our open-source repositories and community forums are great places to get started and collaborate with other developers.",
      },
    ],
  },
  {
    name: "Hooks Fee Structure",
    questions: [
      {
        q: "What is the Dex Mini Unified Fee Structure?",
        a: "The Dex Mini Unified Fee Structure consolidates the fee structures for all Dex Mini products, ensuring clarity and consistency across the platform.",
      },
      {
        q: "What are the core principles behind Dex Mini's fee structure?",
        a: "The core principles are:\n• Transparency: All fees and their allocations are publicly verifiable on-chain.\n• Dynamic Adjustment: Fees are adaptable based on asset volatility, market conditions, and pool utilization.\n• LP-Centric Rewards: A significant portion of fees directly benefits Liquidity Providers (LPs).\n• Protocol Sustainability: A portion of fees supports ongoing protocol development, security audits, and operational costs.\n• Risk Mitigation: Fees contribute to risk management mechanisms, including EigenLayer operator protection and hook reserves.\n• Governance: Fee parameters and allocations are subject to governance votes, allowing for community-driven adjustments.",
      },
      {
        q: "What are the fees associated with managing liquidity positions?",
        a: "There is a liquidity management fee of 0.15% - 0.35% per transaction when adding, removing, or adjusting liquidity positions. This fee scales with asset volatility. For example, stablecoin pools like ETH-USDC have a fee of around 0.15%, while volatile pools like ETH-MEME can have fees up to 0.35%.\nAllocation: 70% goes to the Dex Mini Protocol for audits, development, and operations, and 30% goes to the EigenLayer Operator to support real-time risk mitigation.",
      },
      {
        q: "What are the trading fees (swap fees) on Dex Mini?",
        a: "Trading fees range from 0.05% to 0.6%, depending on the pool's volatility. Low-volatility pools like DAI/USDC have fees around 0.05%, stable/blue-chip pools like ETH-USDC have fees around 0.3%, and high-volatility pools like BTC/ETH or ETH-MEME can have fees up to 0.6%.\nAllocation: 90% goes to Liquidity Providers (LPs), and 10% goes to the Dex Mini Hook Reserve to fund audits, development, MEV-resistant mechanisms, and user rebates.",
      },
      {
        q: "What are the fees for depositing and withdrawing collateral?",
        a: "There is a flat collateral deposit and withdrawal fee of 0.1% - 0.25%, scaling with collateral volatility. Stable collateral like USDC has a fee around 0.1%, while volatile collateral like ETH can have fees up to 0.25%.\nAllocation: 70% goes to Liquidity Providers (LPs), and 30% goes to the Dex Mini Protocol to support operational costs, margin monitoring, and oracle costs.",
      },
      {
        q: "What are the borrowing fees on Dex Mini?",
        a: "Borrowing fees are variable, ranging from 0.1% to 100% APY, and adjust based on pool utilization. Stable pools like USDT/GHO have an APY of 0.1% - 6%, while volatile pools like ARB/OP have an APY of 5% - 50%.\nAllocation: 100% goes to Liquidity Providers (LPs).",
      },
      {
        q: "What are funding fees for long/short positions?",
        a: "Funding fees for maintaining leveraged long/short positions are 0.01% - 0.1% per 8 hours, based on pool utilization.\nAllocation: 100% goes to Liquidity Providers (LPs).",
      },
      {
        q: "What are the liquidation penalty fees?",
        a: "If a position becomes undercollateralized or moves out of range, a liquidation penalty fee of 0.2% - 0.5% of the position size is applied, scaling with pair volatility. Stable pairs like ETH-USDC have a penalty around 0.2%, while volatile pairs like ETH-MEME can have penalties up to 0.5%.\nAllocation: 70% goes to Liquidity Providers (LPs), and 30% goes to the Dex Mini Protocol to build risk reserves.",
      },
      {
        q: "Does auto-compounding have additional fees?",
        a: "No, auto-compounding actions utilize the existing Liquidity Management and Trading fees. The auto-compounding feature itself does not add extra fees.",
      },
      {
        q: "How are Dex Mini fees adjusted?",
        a: "Fees are adjusted dynamically based on market conditions through automated triggers (e.g., volatility thresholds tracked via Chainlink). Additionally, pool creators can propose and vote on fee changes based on market conditions through governance.",
      },
      {
        q: "Where can I find the most up-to-date fee rates?",
        a: "Always refer to the Dex Mini dApp for the most current fee rates.",
      },
      {
        q: "Can borrowers offset borrowing costs?",
        a: "Yes, borrowers can offset borrowing costs by strategically setting liquidity ranges to earn trading fees.",
      },
      {
        q: "Why do fees scale with asset volatility?",
        a: "Fees scale with asset volatility to ensure fair compensation for Liquidity Providers who take on higher risk when providing liquidity for volatile assets. It also helps with protocol sustainability.",
      },
      {
        q: "How does Dex Mini protect against MEV?",
        a: "10% of trading fees are allocated to the Dex Mini Hook Reserve, which funds MEV-resistant mechanisms and user rebates to protect against front-running and other MEV attacks.",
      },
    ],
  },
]

export default function ResearchPage() {
  const [activeCategory, setActiveCategory] = useState("Getting Started")
  const [searchTerm, setSearchTerm] = useState("")

  // Get questions for the active category or filter by search term
  const filteredQuestions = searchTerm
    ? faqCategories
        .flatMap((category) => category.questions.map((q) => ({ ...q, category: category.name })))
        .filter(
          (q) =>
            q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.a.toLowerCase().includes(searchTerm.toLowerCase()),
        )
    : faqCategories.find((cat) => cat.name === activeCategory)?.questions || []

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Main header section with all elements on the same line */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12 items-center">
            {/* Title and description - now on the left */}
            <div className="lg:w-1/2 text-left">
              <h1 className="text-3xl lg:text-4xl font-bold mb-3">Platform Insight</h1>
              <p className="text-gray-600 max-w-md">Quick answers about Dex Mini features and functionality.</p>
            </div>

            {/* Search bar - on the right */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for answers..."
                  className="w-full pl-12 pr-10 py-3 bg-white border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 text-gray-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setSearchTerm("")}
                >
                  {searchTerm && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Category pills for quick selection */}
          <div
            className="mb-8 overflow-x-auto"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#93c5fd transparent",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                height: 6px;
              }
              div::-webkit-scrollbar-track {
                background: transparent;
              }
              div::-webkit-scrollbar-thumb {
                background-color: #93c5fd;
                border-radius: 20px;
              }
            `}</style>
            <div className="flex space-x-2 pb-2">
              {faqCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name)
                    setSearchTerm("")
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded-full transition-all duration-200 ${
                    activeCategory === category.name && !searchTerm
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-blue-50 text-gray-700 hover:bg-blue-100 hover:shadow-sm"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            {/* Main content */}
            <div>
              {searchTerm ? (
                <>
                  <h2 className="text-2xl font-medium mb-6">Search Results</h2>
                  {filteredQuestions.length === 0 ? (
                    <div className="text-center py-10">
                      <p className="text-gray-500">No results found for "{searchTerm}"</p>
                      <button className="mt-4 text-blue-600 hover:text-blue-800" onClick={() => setSearchTerm("")}>
                        Clear search
                      </button>
                    </div>
                  ) : (
                    <Accordion type="single" collapsible className="w-full space-y-6">
                      {filteredQuestions.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                        >
                          <AccordionTrigger className="px-6 py-3 hover:no-underline bg-gray-50 text-left">
                            <div className="flex justify-between items-center w-full">
                              <div className="text-left">
                                <span className="text-base font-medium text-gray-800">{faq.q}</span>
                                <div className="text-sm text-blue-600 mt-1">Category: {faq.category}</div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 text-gray-700 whitespace-pre-line text-base leading-relaxed">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-medium mb-6">{activeCategory}</h2>
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    {filteredQuestions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                      >
                        <AccordionTrigger className="px-6 py-3 hover:no-underline bg-gray-50 text-left">
                          <div className="flex justify-between items-center w-full">
                            <span className="text-base font-medium text-gray-800">{faq.q}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-gray-700 whitespace-pre-line text-base leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
