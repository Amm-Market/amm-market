"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "how-cf-works", title: "How CF Works" },
  { id: "borrowable-value", title: "Determining Borrowable Value" },
  { id: "how-it-works-together", title: "How It Works Together" },
  { id: "single-token-cf", title: "Single Token CFs" },
  { id: "lp-pair-cf", title: "LP Pair CFs" },
  { id: "examples", title: "Example Calculations" },
  { id: "faqs", title: "FAQs" },
]

const singleTokenCFs = [
  { token: "USDC", ltv: "85%", notes: "Stablecoin — high LTV" },
  { token: "USDT", ltv: "85%", notes: "Stablecoin — high LTV" },
  { token: "DAI", ltv: "80%", notes: "Stablecoin, slightly lower than USDC/USDT" },
  { token: "WETH", ltv: "77.5%", notes: "Blue-chip ETH" },
  { token: "WBTC", ltv: "70%", notes: "Blue-chip BTC" },
  { token: "LINK", ltv: "65%", notes: "Large-cap alt, more volatile" },
  { token: "MKR", ltv: "60%", notes: "High value but concentrated" },
  { token: "AAVE", ltv: "55%", notes: "Protocol token" },
  { token: "UNI", ltv: "50%", notes: "Governance token" },
  { token: "COMP", ltv: "50%", notes: "Established governance token" },
  { token: "SUSHI", ltv: "35%", notes: "Small-cap / governance token" },
  { token: "LDO", ltv: "30%", notes: "Governance / newer token" },
]

const lpPairCFs = [
  { pair: "USDC/USDT", lowerCF: "85%", poolRisk: "0.90", finalLTV: "76.5%" },
  { pair: "USDC/DAI", lowerCF: "80%", poolRisk: "0.90", finalLTV: "72.0%" },
  { pair: "DAI/USDT", lowerCF: "80%", poolRisk: "0.90", finalLTV: "72.0%" },
  { pair: "ETH/USDC", lowerCF: "77.5%", poolRisk: "0.85", finalLTV: "66.0%" },
  { pair: "ETH/USDT", lowerCF: "77.5%", poolRisk: "0.85", finalLTV: "66.0%" },
  { pair: "ETH/DAI", lowerCF: "77.5%", poolRisk: "0.85", finalLTV: "66.0%" },
  { pair: "WBTC/ETH", lowerCF: "70%", poolRisk: "0.85", finalLTV: "59.5%" },
  { pair: "WBTC/USDC", lowerCF: "70%", poolRisk: "0.85", finalLTV: "59.5%" },
  { pair: "LINK/ETH", lowerCF: "65%", poolRisk: "0.80", finalLTV: "52.0%" },
  { pair: "UNI/ETH", lowerCF: "50%", poolRisk: "0.80", finalLTV: "40.0%" },
  { pair: "UNI/USDC", lowerCF: "50%", poolRisk: "0.80", finalLTV: "40.0%" },
  { pair: "LDO/ETH", lowerCF: "30%", poolRisk: "0.75", finalLTV: "22.5%" },
]

export default function CollateralFactorsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Collateral Factors</h1>
        <p className="text-lg text-gray-600 mb-8">
          Loan-to-value ratios, liquidation thresholds, and how LP risk is parameterized.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Collateral Factor (CF) defines the portion of an asset's USD value a borrower can borrow 
            against. For example, a CF (LTV) of 75% means that $100 of deposited collateral allows 
            the user to borrow up to $75 (before applying liquidation rules, reserve factors, and 
            other risk buffers).
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Key Principle:</strong> We align our single-token CFs with industry standards 
              (similar to Aave), then apply LP-specific pool-level risk adjustments when the collateral 
              is an LP token. This hybrid approach balances capital efficiency and protocol safety.
            </p>
          </div>
        </section>

        <section id="how-cf-works" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How Collateral Factor Works</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Collateral factor is configured per token and stored as a Q32 value. The effective 
            collateral that counts toward health is the oracle fullValue plus feeValue times the 
            minimum collateral factor of the two tokens in the position.
          </p>
          
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Formula</h3>
            <code className="text-sm text-gray-900">
              collateralValue = (fullValue + feeValue) × collateralFactor / 2^32
            </code>
            <p className="text-gray-500 text-xs mt-2">
              If collateralValue is less than the required debt amount, the loan is not healthy.
            </p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">Token-Level Granularity</h3>
            <p className="text-purple-800 text-sm mb-2">
              Inside the Spoke, collateral factors are not applied to the Spoke as a whole but to 
              the individual tokens that compose the LP positions. The Spoke maintains a 
              <code className="bg-purple-100 px-1 rounded ml-1">tokenConfigs</code> mapping.
            </p>
            <p className="text-purple-800 text-sm">
              When a loan is checked for health, the Spoke calculates the <strong>minimum collateral 
              factor</strong> between the two tokens in the LP pair. For an ETH/USDC position with 
              ETH at 77.5% and USDC at 85%, this would be 77.5%.
            </p>
          </div>
        </section>

        <section id="borrowable-value" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Determining Borrowable Value</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 0: Manipulation-Resilient Oracle Layer</h3>
              <p className="text-gray-600 text-sm">
                Use Chainlink feeds + TWAP + Aave IOracle. Cross-check with on-chain liquidity depth. 
                Output: safe USD price for each token.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 1: Per-NFT Valuation</h3>
              <p className="text-gray-600 text-sm">
                Compute underlying token amounts from liquidity + tick range (Uniswap v3) or pool 
                weights (Balancer). Convert to USD value using oracle outputs.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 2: Apply Lower Token CF</h3>
              <p className="text-gray-600 text-sm">
                Identify the weaker token in the pair — the token with the lower single-token CF. 
                Apply this lower token CF as a baseline cap on the LP's USD value.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 3: Apply Pool-Level Risk</h3>
              <p className="text-gray-600 text-sm mb-2">
                On top of the lower-token CF, apply a pool-level risk factor based on LP type and volatility:
              </p>
              <ul className="text-gray-600 text-sm space-y-1 ml-4">
                <li>• Stablecoin/Stablecoin LPs → 0.90</li>
                <li>• ETH/Stable LPs → 0.85</li>
                <li>• WBTC/Stable LPs → 0.85</li>
                <li>• ETH/WBTC LPs → 0.85</li>
                <li>• ETH/Alt LPs → 0.80</li>
                <li>• Alt/Alt LPs → 0.75</li>
                <li>• High-volatility / small LPs → 0.70</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Step 4: Compute Borrowable Amount</h3>
              <code className="text-sm text-green-800">
                Borrowable USD = Position USD Value × Lower Token CF × Pool-Level Risk
              </code>
              <p className="text-green-700 text-xs mt-2">
                Liquidation thresholds, bonuses, and reserve factors are applied after borrowable LTV.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works-together" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works Together</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once borrowable value is determined using the lower-token CF and pool-level risk, the protocol 
            applies additional risk parameters to ensure safety and stability. These are applied separately 
            from the borrowable LTV and do not reduce the initial amount a user can borrow.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">1</div>
              <div className="flex-1 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Compute Borrowable LTV</h3>
                <p className="text-blue-800 text-sm">
                  Calculate using <strong>Lower Token CF × Pool-Level Risk</strong>. This determines the 
                  maximum amount a user can borrow against their LP collateral.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold">2</div>
              <div className="flex-1 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-amber-900 mb-2">Apply Liquidation Threshold</h3>
                <p className="text-amber-800 text-sm">
                  Determine the point at which a position becomes eligible for liquidation. Set slightly 
                  above the borrowable LTV to provide a safety buffer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">3</div>
              <div className="flex-1 p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Incentivize Liquidators</h3>
                <p className="text-green-800 text-sm">
                  Apply the <strong>Liquidation Bonus</strong> to encourage timely liquidation when 
                  positions exceed the threshold.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold">4</div>
              <div className="flex-1 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">Allocate Reserve Factor</h3>
                <p className="text-purple-800 text-sm">
                  A portion of interest payments is allocated to the <strong>Reserve Factor</strong> for 
                  protocol reserves and insurance.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700 text-sm">
              <strong>Key Benefit:</strong> This separation ensures users know their maximum borrowable 
              amount while the protocol maintains robust safety mechanisms for liquidation and insolvency protection.
            </p>
          </div>
        </section>

        <section id="single-token-cf" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Single Token Collateral Factors</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We assign LTVs for the most popular tokens as a baseline. These values are used when 
            the asset is supplied individually or as the weaker token in an LP.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Token</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Target LTV</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {singleTokenCFs.map((item) => (
                  <tr key={item.token}>
                    <td className="px-4 py-2 text-gray-900 font-medium">{item.token}</td>
                    <td className="px-4 py-2 text-blue-600 font-medium">{item.ltv}</td>
                    <td className="px-4 py-2 text-gray-600">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="lp-pair-cf" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">LP Pair Collateral Factors</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Final borrowable LTV for LP pairs combines the lower token CF with pool-level risk:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">LP Pair</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Lower Token CF</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Pool-Level Risk</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Final Borrowable LTV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {lpPairCFs.map((item) => (
                  <tr key={item.pair}>
                    <td className="px-4 py-2 text-gray-900 font-medium">{item.pair}</td>
                    <td className="px-4 py-2 text-gray-600">{item.lowerCF}</td>
                    <td className="px-4 py-2 text-gray-600">{item.poolRisk}</td>
                    <td className="px-4 py-2 text-green-600 font-medium">{item.finalLTV}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="examples" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example Calculations</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Example A — Single Token (USDC)</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• User deposits $10,000 USDC</li>
                <li>• Target LTV: 85%</li>
                <li>• <strong>Borrowable = $10,000 × 85% = $8,500</strong></li>
              </ul>
              <p className="text-blue-700 text-xs mt-2">
                (Subject to liquidation thresholds and reserve factors)
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Example B — ETH/USDC LP</h3>
              <ul className="text-purple-800 text-sm space-y-1">
                <li>• LP Position Value: $963.51</li>
                <li>• Single-token CFs: WETH 77.5%, USDC 85%</li>
                <li>• Lower token CF = 77.5%</li>
                <li>• Pool-Level Risk Factor = 0.85</li>
                <li>• <strong>Final Borrowable = $963.51 × 77.5% × 0.85 ≈ $634.88</strong></li>
              </ul>
              <p className="text-purple-700 text-xs mt-2">
                Liquidation threshold, bonus, and reserve factor are applied separately.
              </p>
            </div>
          </div>
        </section>

        <section id="faqs" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQs</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Why use the lower token CF for LPs?</h3>
              <p className="text-gray-600 text-sm">
                LPs contain two assets. If one crashes faster than the other, the LP's USD value can 
                drop quickly. Using the lower token CF prevents over-leveraging against a pool whose 
                weaker side could cause contagion.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">How often are valuations updated?</h3>
              <p className="text-gray-600 text-sm">
                Valuations are computed on demand for borrow, repay, withdraw, liquidation, or UI queries. 
                Chainlink is the primary feed, cross-checked with TWAPs. If feeds diverge beyond a 
                tolerance, an extra discount or temporary restriction is applied.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">How do these numbers compare to Aave?</h3>
              <p className="text-gray-600 text-sm">
                Single-token LTVs are Aave-aligned. For LPs, an additional pool-level risk factor applies. 
                Users can see clearly how borrowable value is computed and why it differs from single-token collateral.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Can users still borrow more if the LP is mostly stablecoins?</h3>
              <p className="text-gray-600 text-sm">
                Yes. Pool-level risk factors are higher for stable/stable LPs, which preserves capital 
                efficiency while still respecting protocol safety.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Do liquidation buffers or bonuses reduce borrowable amount?</h3>
              <p className="text-gray-600 text-sm">
                No. Borrowable LTV is computed first. Liquidation thresholds, bonuses, and reserve 
                factors are applied afterwards to manage safety.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Loan-to-value ratios, liquidation thresholds, and how LP risk is parameterized."
        sectionColor="violet"
      />
    </div>
  )
}
