import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Glossary",
  description: "DeFi glossary for AMM Market - definitions of Spoke, Hub, LP NFT, collateral factor, debt shares, liquidation, oracle, and other protocol terms.",
}

const sections = [
  { id: "core-concepts", title: "Core Concepts" },
  { id: "protocol-components", title: "Protocol Components" },
  { id: "financial-terms", title: "Financial Terms" },
  { id: "risk-security", title: "Risk & Security" },
  { id: "metrics", title: "Metrics" },
  { id: "disclaimers", title: "Disclaimers" },
]

const glossaryTerms = {
  coreComponents: [
    { term: "Spoke", definition: "A specialized smart contract in the Aave v4 ecosystem responsible for managing a specific type of collateral and user interaction. AMM Market's contract is a Spoke." },
    { term: "Hub", definition: "The central liquidity contract in Aave v4 that pools capital from lenders and allocates it to Spokes. It is the source of funds for the UniV3 Spoke." },
    { term: "Hub-Spoke Architecture", definition: "A design pattern where multiple specialized \"Spoke\" contracts connect to a central \"Hub\" for capital. The Spokes manage specific collateral types and user interactions, while the Hub handles the core lending and risk management of the capital pool." },
    { term: "UniV3 Spoke", definition: "A specialized smart contract within the AMM Market protocol that is responsible for managing Uniswap V3 LP NFTs as collateral. It acts as an intermediary between end-users and the Aave v4 lending Hubs." },
    { term: "Aave v4 Hub", definition: "A core component of the Aave lending protocol that manages pools of capital, sets risk parameters, and allocates liquidity to Spokes." },
  ],
  lpAndCollateral: [
    { term: "LP NFT", definition: "A non-fungible token representing a liquidity position in a Uniswap v3 pool. It is the core collateral in the AMM Market protocol." },
    { term: "Uniswap V3 LP NFT", definition: "A non-fungible token that represents ownership of a liquidity position within a Uniswap V3 pool. It contains metadata about the pool, the two tokens involved, the price range (ticks), and the amount of liquidity provided." },
    { term: "Collateral Factor", definition: "A percentage (0-100%) that determines how much of an asset's value can be used as collateral. It is the primary risk parameter for an asset. For example, a 70% collateral factor means only 70% of the NFT's value counts toward the loan limit." },
    { term: "Collateral Value", definition: "Value of the position that counts toward security of the loan after applying the minimum of the two token collateral factors. CollateralValue equals (fullValue plus feeValue) times minCollateralFactor divided by 2^32." },
    { term: "Loan-to-Value (LTV)", definition: "A ratio that compares the amount of a loan to the value of the collateral securing it. A higher LTV indicates a riskier loan. The protocol monitors this ratio to determine when a position is at risk of liquidation." },
  ],
  debtAndInterest: [
    { term: "Debt Shares", definition: "An internal accounting unit used to track a user's debt obligation, allowing for precise interest accrual without constant state updates. debtShares are converted to asset units via the global debtExchangeRateRay." },
    { term: "Exchange Rate", definition: "Global variable debtExchangeRateRay measures the value of one debt share denominated in asset units scaled by Ray. Exchange rate grows with accrued borrow rate and is updated when operations touch the contract via _updateGlobalInterest." },
    { term: "Utilization Rate", definition: "The proportion of borrowed assets to the total available assets within the protocol. It is an indicator of outstanding loans relative to the supply of funds and plays an instrumental role in determining interest rates." },
    { term: "Base Rate", definition: "An optional minimal Borrow Rate the protocol can define." },
    { term: "Borrow Rate", definition: "The rate per second that borrowers accrue as additional debt." },
    { term: "Risk Premium", definition: "An additional interest rate component, determined by Aave v4's Hub, that is applied to the Spoke's borrowing cost based on the perceived risk of its collateral portfolio." },
  ],
  liquidationTerms: [
    { term: "Liquidation", definition: "The process by which an undercollateralized loan is resolved. A liquidator repays a portion of the debt and receives a discounted amount of the underlying collateral assets in return, ensuring the protocol remains solvent." },
    { term: "Liquidation Bonus", definition: "An extra amount of collateral given to a liquidator as an incentive to perform the liquidation, helping to keep the protocol solvent." },
  ],
  oracleAndTransform: [
    { term: "Oracle", definition: "A system that provides external price data to a smart contract. For AMM Market, the oracle must be capable of accurately pricing complex Uniswap v3 LP NFTs." },
    { term: "Transform", definition: "A secure mechanism that allows an external, whitelisted contract to modify a user's LP position (e.g., by rebalancing its range) while it is being used as collateral. Transformers must be allow-listed. The Spoke sets transformedTokenId during the call to block reentrancy." },
  ],
  metrics: [
    { term: "TVL", definition: "Total Value Locked — the total value of LP collateral supplied to AMM Market Spokes (modeled from $100M to $3B)." },
    { term: "Borrowed", definition: "Portion of TVL that is loaned out by Hubs (baseline utilization of 50%)." },
    { term: "Gross System Revenue", definition: "Total economic activity generated by the system (hub interest + protocol fees + penalties + liquidation fees)." },
    { term: "AMM Market Treasury (Net)", definition: "Revenue the AMM Market protocol retains after splits with Hubs." },
    { term: "Hubs / Lenders (Net)", definition: "What lenders/hubs capture (interest + their share of liquidation fees)." },
  ],
  riskMitigation: [
    { term: "Pool Manipulation Protection", definition: "90-Pool Allowlist + per-pool pause toggle." },
    { term: "Volatility / Oracle Risk", definition: "Tiered LTV + dynamic risk premiums + pause on anomalies." },
    { term: "Liquidation Spirals", definition: "Emergency halt on extreme LTV, adaptive closing factors." },
    { term: "Bad Debt Exposure", definition: "Debt ceilings per tier, isolation per Spoke, risk monitoring." },
    { term: "Governance Safety", definition: "Audits, documentation, community oversight." },
    { term: "Reentrancy Protection", definition: "AMM Market combines ReentrancyGuard and the transformedTokenId guard. transformedTokenId prevents the onERC721Received hook from registering the same token during an in-flight transform call." },
  ],
}

export default function GlossaryPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Glossary</h1>
        <p className="text-lg text-gray-600 mb-8">
          Canonical definitions for protocol-specific and DeFi terminology used throughout the documentation.
        </p>

        <section id="core-concepts" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Core Concepts
          </h2>
          <dl className="space-y-4">
            {glossaryTerms.coreComponents.map((item) => (
              <div key={item.term} className="group">
                <dt className="font-semibold text-gray-900 mb-1">{item.term}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-gray-200 group-hover:border-blue-400 transition-colors">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="protocol-components" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            LP & Collateral
          </h2>
          <dl className="space-y-4">
            {glossaryTerms.lpAndCollateral.map((item) => (
              <div key={item.term} className="group">
                <dt className="font-semibold text-gray-900 mb-1">{item.term}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-gray-200 group-hover:border-blue-400 transition-colors">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="financial-terms" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Debt & Interest
          </h2>
          <dl className="space-y-4">
            {glossaryTerms.debtAndInterest.map((item) => (
              <div key={item.term} className="group">
                <dt className="font-semibold text-gray-900 mb-1">{item.term}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-gray-200 group-hover:border-blue-400 transition-colors">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Liquidation</h3>
          <dl className="space-y-4">
            {glossaryTerms.liquidationTerms.map((item) => (
              <div key={item.term} className="group">
                <dt className="font-semibold text-gray-900 mb-1">{item.term}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-gray-200 group-hover:border-blue-400 transition-colors">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Oracle & Transform</h3>
          <dl className="space-y-4">
            {glossaryTerms.oracleAndTransform.map((item) => (
              <div key={item.term} className="group">
                <dt className="font-semibold text-gray-900 mb-1">{item.term}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-gray-200 group-hover:border-blue-400 transition-colors">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="risk-security" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Risk & Security
          </h2>
          <dl className="space-y-4">
            {glossaryTerms.riskMitigation.map((item) => (
              <div key={item.term} className="group">
                <dt className="font-semibold text-gray-900 mb-1">{item.term}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-gray-200 group-hover:border-blue-400 transition-colors">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="metrics" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Metrics
          </h2>
          <dl className="space-y-4">
            {glossaryTerms.metrics.map((item) => (
              <div key={item.term} className="group">
                <dt className="font-semibold text-gray-900 mb-1">{item.term}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-gray-200 group-hover:border-blue-400 transition-colors">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="disclaimers" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Disclaimers
          </h2>
          <div className="border-l-4 border-amber-400 pl-4">
            <ul className="text-gray-600 text-sm space-y-2">
              <li><strong>No Investment Advice:</strong> AMM Market is a software protocol. This documentation does not constitute investment advice.</li>
              <li><strong>Risk of Loss:</strong> Users can lose funds through smart contract vulnerabilities, market volatility, liquidation, or oracle manipulation.</li>
              <li><strong>Regulatory Status:</strong> The regulatory status of AMM Market and its tokens (if any) is not guaranteed and may vary by jurisdiction.</li>
              <li><strong>No Warranty:</strong> The software is provided "as is" without warranty of any kind.</li>
            </ul>
          </div>
        </section>
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
