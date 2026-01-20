"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "a-d", title: "A - D" },
  { id: "e-h", title: "E - H" },
  { id: "i-l", title: "I - L" },
  { id: "m-p", title: "M - P" },
  { id: "q-t", title: "Q - T" },
  { id: "u-z", title: "U - Z" },
]

const glossaryTerms = [
  {
    section: "a-d",
    terms: [
      { term: "AMM", definition: "Automated Market Maker — A decentralized exchange mechanism that uses liquidity pools and mathematical formulas to determine asset prices." },
      { term: "Aave v4", definition: "The fourth major version of the Aave protocol, featuring a Hub-and-Spoke architecture for modular lending markets." },
      { term: "Borrow Rate", definition: "The annualized interest rate charged on borrowed assets, typically expressed as APR or APY." },
      { term: "Collateral", definition: "Assets deposited to secure a loan. In AMM Market, LP tokens serve as collateral." },
      { term: "Collateral Factor", definition: "The percentage of collateral value that can be borrowed against. Also known as Loan-to-Value (LTV)." },
      { term: "Concentrated Liquidity", definition: "A liquidity provision mechanism (introduced by Uniswap v3) where LPs can specify price ranges for their capital." },
      { term: "DEX", definition: "Decentralized Exchange — A peer-to-peer marketplace for trading cryptocurrencies without intermediaries." },
    ],
  },
  {
    section: "e-h",
    terms: [
      { term: "ERC-20", definition: "The standard interface for fungible tokens on Ethereum and EVM-compatible chains." },
      { term: "Flash Loan", definition: "An uncollateralized loan that must be borrowed and repaid within a single transaction." },
      { term: "Health Factor", definition: "A numeric indicator of position safety, calculated as (Collateral × Liquidation Threshold) / Debt. Values below 1.0 are liquidatable." },
      { term: "Hub", definition: "In Aave v4, the central component managing core liquidity pools and interest rate logic." },
    ],
  },
  {
    section: "i-l",
    terms: [
      { term: "Impermanent Loss", definition: "The temporary loss of value experienced by liquidity providers when the price ratio of pooled assets changes." },
      { term: "Interest Rate Model", definition: "The algorithm determining borrow and supply rates based on pool utilization." },
      { term: "Liquidation", definition: "The process of selling collateral to repay debt when a position's health factor falls below 1.0." },
      { term: "Liquidation Bonus", definition: "The discount liquidators receive when purchasing collateral during liquidation, incentivizing timely liquidations." },
      { term: "Liquidation Threshold", definition: "The collateral ratio at which a position becomes eligible for liquidation." },
      { term: "Liquidity Pool", definition: "A smart contract holding reserves of two or more tokens, enabling decentralized trading." },
      { term: "LP Token", definition: "A token representing ownership of a share in a liquidity pool. LP tokens can be redeemed for underlying assets." },
      { term: "LTV", definition: "Loan-to-Value — The maximum percentage of collateral value that can be borrowed." },
    ],
  },
  {
    section: "m-p",
    terms: [
      { term: "Oracle", definition: "A service providing external data (like asset prices) to smart contracts." },
      { term: "Pool", definition: "See Liquidity Pool." },
      { term: "Position", definition: "A user's combined collateral and debt within the protocol." },
      { term: "Price Range", definition: "In concentrated liquidity AMMs, the upper and lower price bounds where liquidity is active." },
    ],
  },
  {
    section: "q-t",
    terms: [
      { term: "Reserve Factor", definition: "The percentage of interest payments directed to the protocol treasury." },
      { term: "Slippage", definition: "The difference between expected and actual trade execution price, often due to price movement or low liquidity." },
      { term: "Spoke", definition: "In Aave v4, a specialized module handling specific collateral types or market logic. AMM Market is a Spoke." },
      { term: "Supply Rate", definition: "The annualized interest rate earned by lenders/suppliers." },
      { term: "TVL", definition: "Total Value Locked — The total value of assets deposited in a protocol or pool." },
      { term: "TWAP", definition: "Time-Weighted Average Price — A price calculation method that averages prices over time to resist manipulation." },
    ],
  },
  {
    section: "u-z",
    terms: [
      { term: "Utilization Rate", definition: "The percentage of supplied assets currently borrowed. Higher utilization typically means higher interest rates." },
      { term: "Variable Rate", definition: "An interest rate that fluctuates based on market conditions and utilization." },
      { term: "Vault", definition: "A smart contract that holds and manages assets according to a specific strategy." },
      { term: "Wrapped Token", definition: "A token representing another asset, enabling cross-chain or cross-protocol compatibility (e.g., WETH, wstETH)." },
    ],
  },
]

export default function GlossaryPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Glossary</h1>
        <p className="text-lg text-gray-600 mb-8">
          Canonical definitions for protocol-specific and DeFi terminology used throughout the documentation.
        </p>

        {glossaryTerms.map((group) => (
          <section key={group.section} id={group.section} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              {group.section.toUpperCase().replace("-", " - ")}
            </h2>
            <dl className="space-y-4">
              {group.terms.map((item) => (
                <div key={item.term} className="group">
                  <dt className="font-semibold text-gray-900 mb-1">{item.term}</dt>
                  <dd className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-gray-200 group-hover:border-blue-400 transition-colors">
                    {item.definition}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Canonical definitions for protocol-specific and DeFi terminology used throughout the documentation."
        sectionColor="blue"
      />
    </div>
  )
}
