import Link from "next/link"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "motivation", title: "A) Motivation" },
  { id: "learning-from-history", title: "Learning from History" },
  { id: "addressing-limitations", title: "Addressing Past Limitations" },
  { id: "protocol", title: "B) Protocol" },
  { id: "spoke-design", title: "Spoke Design" },
  { id: "risk-management", title: "C) Risk Management" },
  { id: "collateral-factors", title: "Collateral Factors" },
  { id: "liquidation-engine", title: "Liquidation Engine" },
  { id: "backtested-resilience", title: "Backtested Resilience" },
  { id: "economic-analysis", title: "D) Economic Analysis" },
  { id: "revenue-model", title: "Revenue Model" },
  { id: "financial-projections", title: "Financial Projections" },
  { id: "roadmap", title: "E) Roadmap and Plans" },
  { id: "conclusion", title: "F) Conclusion" },
  { id: "references", title: "Links and References" },
]

export default function LightpaperPage() {
  return (
    <section className="py-12 md:py-24">
      <article className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-start gap-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-serif italic text-gray-900">Tap into LP Credits</h1>
          <p className="text-lg text-gray-600">Amm Market is building the new standard for reliably and efficiently using LPs as Collateral. It enables liquidity providers across DEXs to use their LP share as collateral to borrow assets from Aave&apos;s Liquidity Hubs.</p>
          <hr className="w-full border-gray-200" />
        </div>


        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-24">
          {/* Main content */}
          <div className="max-w-3xl [&_strong]:font-semibold [&_strong]:text-gray-900 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-16 [&_h3]:mb-6 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-gray-900 [&_h4]:mt-10 [&_h4]:mb-4 [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:text-gray-600 [&_li]:mb-2 [&_a]:text-blue-600 [&_a]:hover:underline">

            {/* A) Motivation */}
            <h3 id="motivation">A) Motivation</h3>
            <h4>CDPs for AMM Positions</h4>
            <p>
              Amm Market directly executes on the strategic vision outlined in Aave Labs&apos; &quot;CDP for AMM Positions&quot; proposal (<Link href="https://gov.uniswap.org/t/rfc-aave-s-cdp-for-uniswap-v4-positions/25568" target="_blank">governance link</Link>), extending it beyond a single DEX or pool design to encompass the entire multi-billion-dollar AMM ecosystem. Rather than treating LP positions as passive yield instruments, Amm Market recognizes them as productive, credit-worthy assets that can anchor on-chain debt markets across Uniswap (v2, v3, v4), Curve, Balancer, PancakeSwap, and beyond.
            </p>

            <p>
              Despite their scale, most AMM pools remain structurally underutilized. On-chain data shows that across 2025, over 90% of liquidity across major AMMs sat idle for more than 90% of days, earning fees but unable to participate in broader DeFi activity. LPs are forced into a tradeoff: provide liquidity or access credit, yield strategies, and capital efficiency elsewhere in DeFi. As AMM liquidity is projected to exceed $50B by 2030, unlocking credit directly from LP positions represents one of the largest untapped opportunities in the ecosystem.
            </p>

            <p>
              By treating LP positions as distinct Collateralized Debt Positions (CDPs), Amm Market allows liquidity provision, borrowing, and risk management to coexist. LPs can unlock credit without withdrawing, unwinding positions, or sacrificing fees and incentives. In doing so, Amm Market creates a new institutional-grade collateral class for lending, opens significant new revenue streams, and positions DEX liquidity as the foundational credit layer of DeFi rather than a siloed yield source.
            </p>

            <h3 id="learning-from-history">Learning from History</h3>
            <p>
              Since DeFi&apos;s earliest growth cycles, active LP positions have consistently been identified as powerful—but elusive—collateral. In 2021, Aave&apos;s original AMM Market demonstrated that Uniswap v2 and Balancer LP tokens could technically be used as collateral. However, the market failed to scale. At the time, DEXs were still experimental primitives, liquidity was fragmented, Uniswap v3 was on the horizon, and risk frameworks failed to account for LP-specific dynamics such as impermanent loss, volatility, and pool composition. Combined with thin liquidity and multiple high-profile DEX exploits, the model proved premature.
            </p>

            <p>
              Later that year, Gelato&apos;s G-UNI wrapped Uniswap v3 NFT positions into fungible ERC-20 tokens, restoring composability across DeFi. While this improved UX, it came at the cost of precision—flattening range exposure, fee variability, and liquidation behavior into a single abstraction. MakerDAO explored onboarding G-UNI positions between 2021 and 2022, but governance ultimately rejected the approach, citing oracle fragility, liquidation complexity, and insufficient risk isolation.
            </p>

            <p>
              By 2023, protocols such as Revert Finance and YLDR confirmed strong demand for borrowing against LP positions, enabling leveraged liquidity management without fully exiting pools. Yet adoption remained limited by the same unresolved challenges: range-aware valuation, reliable liquidation mechanics, and LP-specific risk tiers. Across 2023–2024, multiple protocols revisited LP collateralization, but most efforts stalled in review. The lesson across cycles has remained consistent: LPs are economically powerful collateral—but only systems purpose-built around their unique risk profile can unlock them at scale.
            </p>

            <h3 id="addressing-limitations">Addressing Past Limitations, Building for Scale</h3>
            <p>
              Amm Market is purpose-built to overcome the structural limitations that prevented earlier LP-collateral experiments from scaling safely. It is designed around LP-native dynamics from the ground up—enabling robust risk management, reliable oracle construction, and soft-unwind liquidations that gradually rebalance or exit LP positions rather than forcing destructive spot liquidations. Combined with Aave v4&apos;s Spoke-based architecture, Amm Market delivers scalable capital efficiency and risk isolation that earlier designs simply could not support.
            </p>

            <p>
              While the original Aave Labs proposal articulated the strategic potential of AMM positions as CDP collateral, Amm Market operationalizes that vision at protocol scale. It advances Aave&apos;s long-term goal of becoming the universal credit layer for DeFi, positioning Aave as the primary destination for LPs seeking capital efficiency without sacrificing liquidity or yield. By unlocking credit from the deepest and most durable liquidity pools in DeFi, Amm Market captures value from a collateral class that has historically remained powerful—but inaccessible—to lending markets.
            </p>

            {/* B) Protocol */}
            <h3 id="protocol">B) Protocol</h3>
            <h4>Modular Architecture</h4>
            <p>
              Amm Market is built on a modular Spoke architecture designed for safety, scalability, and seamless integration with multiple DEXs and pool designs. Each Spoke encapsulates the full logic required for a specific AMM or DEX version, including accounting, oracle handling, risk controls, and liquidation mechanics. Spokes are fully isolated: risk, state, and operations are maintained per Spoke and never aggregated across markets. The Aave Hub allocates explicit credit lines to each Spoke, enforcing strict boundaries on risk exposure.
            </p>

            <p>
              Safety and borrower protection are core design principles. Loan-to-value (LTV) ratios are deliberately conservative, creating robust buffers against volatility and sudden pool reconfigurations. All positions remain overcollateralized at all times, and where applicable, borrowers may post multiple stable LP assets to further reduce liquidation risk. This approach preserves lender security while still delivering meaningful capital efficiency for LPs.
            </p>

            <p>
              Spokes continuously monitor pool composition, volatility, liquidity depth, and oracle quality. Based on these inputs, LTVs and liquidation thresholds are dynamically adjusted per position, balancing access to credit with real-time risk conditions. The system is explicitly designed under the assumption that pools, oracles, and even protocols can fail. Dual-oracle designs prevent toxic pricing, adaptive liquidation minimizes capital loss without abruptly withdrawing liquidity, and continuous monitoring ensures system resilience across stress scenarios.
            </p>

            <p>
              Amm Market gives LPs predictable and flexible borrowing. Collateral remains overcollateralized, repayment timing is fully borrower-controlled, and risk parameters evolve transparently with market conditions—offering a borrowing experience that is both robust and user-aligned.
            </p>

            <h3 id="spoke-design">Spoke Design</h3>
            <p>
              Amm Market&apos;s spokes are designed as two complementary borrowing markets, together unlocking the full spectrum of DeFi credit use cases. The Stable Spoke is optimized for efficiency and safety, while the Open Spoke prioritizes speed and flexibility. Each serves a distinct borrowing profile, but both plug into the same unified liquidity and risk framework.
            </p>

            <p>
              Together, these spokes form a unified system with two clear market flavors: one optimized for long-term certainty and capital efficiency (Stable Spoke), and one optimized for short-term opportunity and experimentation (Open Spoke). Whether you&apos;re managing a treasury or executing a tactical trade, the right market is always within reach.
            </p>

            <p>
              Liquidity providers begin by depositing their LP shares into a dedicated Spoke. Each Spoke computes borrowing power using a specialized risk module that values LP positions in USD via a dual-oracle system combining Chainlink and TWAP pricing. The Spoke tracks per-user accrued fees, monitors position health, and reports borrowing capacity to the Hub.
            </p>

            <p>
              Within each Spoke, per-position risk management governs pool-specific behavior, including concentrated liquidity ranges, impermanent loss exposure, and underlying token correlations. A tailored liquidation engine manages adverse scenarios through soft unwinds and controlled rebalancing, ensuring LPs can borrow against their positions without forfeiting earned fees or rewards. Continuous position monitoring protects both borrowers and the protocol, maintaining confidence even during volatile market conditions.
            </p>

            <p>
              The Aave Hub receives borrowing requests from Spokes, issues loans in approved assets (such as stablecoins), and manages global protocol state—including reserves, interest rate strategies, debt accounting, and liquidity utilization. Each loan issuance or repayment updates the cumulative exposure attributed to the underlying assets of the collateral position. This accounting persists even if a position fully migrates out of range into a single underlying asset.
            </p>

            <p>
              By enforcing per-asset exposure limits, the protocol ensures systemic risk remains bounded. When an exposure threshold is reached, the Hub automatically halts new loan issuance or loan expansions tied to that asset, preserving protocol solvency and maintaining disciplined risk controls across all markets.
            </p>

            {/* C) Risk Management */}
            <h3 id="risk-management">C) Risk Management</h3>
            <h4>Position Valuation</h4>
            <p>
              Risk management in Amm Market is Spoke-native. Each Spoke is fully responsible for valuing LP collateral, enforcing pool eligibility, and executing liquidation logic for its supported AMM version. This ensures that valuation, accounting, and risk controls are tightly coupled to the mechanics of the underlying DEX. This architecture allows users to access borrowing across multiple AMMs through a single, consistent interface, reinforcing Aave&apos;s role as the universal credit layer for DeFi. At the system level, separating logic by AMM version enables tailored risk models, simpler audits, and independent upgrades—significantly reducing correlated failure risk.
            </p>

            <p>Each Spoke performs the following functions:</p>
            <ul>
              <li><strong>Pool validation:</strong> LP positions are accepted only from a pre-approved set of pools, aligned with governance-defined risk parameters.</li>
              <li><strong>Position valuation:</strong> The USD value of each LP position is computed using a dual-oracle system that combines Chainlink price feeds with AMM TWAPs, inheriting and extending Aave&apos;s existing oracle framework.</li>
              <li><strong>Borrowing capacity:</strong> Borrowable amounts are calculated based on position value and the configured LTV for the pool&apos;s risk tier.</li>
              <li><strong>Hub reporting:</strong> Each Spoke reports a user&apos;s total borrowable capacity to the central Hub, which enforces global credit limits and liquidity constraints.</li>
              <li><strong>Liquidation execution:</strong> Upon liquidation triggers from the Hub, the Spoke takes custody of the LP position (via prior user approval) and performs an orderly unwind of the underlying liquidity.</li>
            </ul>

            <h3 id="collateral-factors">Collateral Factors</h3>
            <p>
              Collateral factors (CFs) define the portion of an asset&apos;s USD value that can be borrowed against. For example, a 75% CF allows a user to borrow up to $75 against $100 of collateral, before accounting for liquidation penalties, reserve factors, and other buffers.
            </p>

            <p>
              In Amm Market, valuation is position-based, not pool-based. A user may deposit dozens or even hundreds of LP positions into a single Spoke, but borrowing power is derived from the aggregate USD value of all underlying assets, not from a single vault or pair. Importantly, collateral factors are not applied at the Spoke level. Instead, each LP position is valued independently, and its contribution is added to the user&apos;s total borrowing capacity.
            </p>

            <p>For each LP position:</p>
            <ul>
              <li>The protocol computes the underlying token amounts using the position&apos;s liquidity and tick range.</li>
              <li>These amounts are converted into USD using Chainlink price feeds and verified against TWAPs to mitigate flash price manipulation.</li>
              <li>Since LPs contain two assets, the protocol identifies the weaker asset—the token with the lower single-asset CF.</li>
              <li>This lower-token CF is applied as a baseline cap on the LP&apos;s USD value, preventing over-leveraging against pools where one asset could rapidly deteriorate.</li>
            </ul>

            <p>
              On top of this baseline, Amm Market applies a pool-level risk factor that reflects volatility, liquidity depth, correlation, and governance-defined stress buffers. This differentiates stable pairs from volatile pairs and encodes empirical risk assumptions directly into borrowing limits.
            </p>

            <p>The resulting borrowable amount is calculated as:</p>
            <p className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              Borrowable USD = Position USD Value × Lower-Token CF × Pool-Level Risk Factor
            </p>

            <h4>Example Calculation: ETH/USDC LP</h4>
            <ul>
              <li>LP Position Value: $963.51</li>
              <li>Single-token CFs: WETH 77.5%, USDC 85%</li>
              <li>Lower token CF = 77.5%</li>
              <li>Pool-Level Risk Factor = 0.85</li>
              <li><strong>Final Borrowable = 963.51 × 77.5% × 0.85 ≈ $634.88</strong></li>
            </ul>

            <h4>LTV Model Comparison</h4>
            <p>
              Existing LP-backed lending systems apply collateral factors in fundamentally different ways. Fluid (Instadapp) supports collateral factors as high as 98% by operating within tightly coupled, highly correlated vaults and relying on precision liquidations. Revert Finance applies per-position valuations using lower-token CFs, offering strong safety but producing highly variable borrowing power across long-tail pools. Balancer, by contrast, computes upper and lower valuation bounds based on pool weights and price ranges, improving safety at the cost of predictability.
            </p>

            <p>
              Amm Market combines the strengths of these approaches while avoiding their weaknesses. By using a lower-token CF as a universal baseline and layering a pool-level risk factor on top, the system delivers a standardized, cross-pool framework that scales across AMM designs. While Amm Market is not the first protocol to allow LPs as collateral, it is the first to formalize a consistent, governance-friendly risk model that works across heterogeneous LP types—making borrowing limits easier for users to reason about and easier for governance to manage.
            </p>

            <h3 id="liquidation-engine">Liquidation Engine</h3>
            <p>
              Liquidation mode is triggered when a position&apos;s accrued debt exceeds its allowed borrowing capacity. Once triggered, any actor may repay the outstanding debt in exchange for a liquidation premium, which ranges from 2% to 10%, dynamically scaled based on the position&apos;s debt-to-value ratio.
            </p>

            <p>Liquidations proceed in a borrower-protective order:</p>
            <ul>
              <li>Uncollected fees generated by the LP position are applied first to reduce outstanding debt.</li>
              <li>If fees are insufficient, the protocol unwinds a portion of the LP principal to cover the remaining debt and liquidation incentive.</li>
              <li>The LP position is unwound into its underlying assets, which are swapped into the borrowed asset as needed.</li>
            </ul>

            <p>
              After the debt and liquidation penalty are settled, the LP position NFT—representing the residual value—is returned to the user within the same transaction. This ensures borrowers recover maximum remaining value while providing strong, deterministic incentives for liquidators. The result is a liquidation system that avoids unnecessary capital destruction and aligns incentives across borrowers, liquidators, and the protocol.
            </p>

            <h3 id="backtested-resilience">Backtested Resilience</h3>
            <p>
              We conducted extensive stress tests across multiple scenarios (ETH price crashes of 25–90%, liquidity withdrawals, and oracle delays). The results demonstrate why our pool choices are both defensible and scalable:
            </p>

            <ul>
              <li><strong>ETH/Stable LPs:</strong> Historically resilient. Our simulations show ~50% lower drawdowns compared to ETH collateral alone, thanks to built-in hedging between volatile ETH and stable assets. This makes them a safer entry point for early borrowers.</li>
              <li><strong>Stable–Stable LPs:</strong> The backbone of the system. These pairs (e.g. USDC/DAI) exhibit near-zero liquidation probability, even in extreme environments. They serve as &quot;risk anchors&quot; and allow us to offer higher LTV ratios with confidence.</li>
              <li><strong>BTC/ETH LPs:</strong> Attractive for high-liquidity borrowers, but correlation risk is real. Backtests show both assets can fall together in stress events. As a result, we apply conservative risk buffers, ensuring the protocol is never overexposed.</li>
              <li><strong>Governance Token LPs (UNI, LDO, LINK):</strong> These pairs show greater volatility and liquidity fragmentation. To mitigate this, we cap their maximum LTV and apply higher liquidation bonuses, aligning incentives for liquidators while still capturing demand from engaged communities.</li>
            </ul>

            <p>
              The initial pools are designed for a measured rollout: deep, liquid, and diversified pairs that establish trust in our collateral model. The backtests prove our framework can withstand major shocks while keeping liquidation probabilities within acceptable ranges. Over time, this foundation will let us expand into longer-tail assets, but early stability is key to adoption.
            </p>

            <p>
              By combining robust simulations with disciplined risk limits, Amm Market positions itself as a first-mover in LP-collateralized lending, balancing growth and safety from day one.
            </p>

            {/* D) Economic Analysis */}
            <h3 id="economic-analysis">D) Economic Analysis</h3>
            <h4>Interest Rate</h4>
            <p>
              Borrow rates in Amm Market are composed of three components: the Aave v4 Hub base rate, a Spoke-level premium, and a pool-specific risk adjustment. Together, these elements reflect both global liquidity conditions and LP-native risk. For example, an ETH/USDC LP position may face a total borrow rate of 3.5 percent, derived from a 2.0 percent Hub base rate, a 1.0 percent Spoke premium, and a 0.5 percent pool adjustment. A more volatile pair such as UNI/ETH would carry a higher pool adjustment, resulting in a total borrow rate of 5.0 percent under the same base and Spoke conditions. This structure ensures that interest rates scale transparently with risk while remaining predictable for borrowers.
            </p>

            <p>
              The initial set of collateral pools has been deliberately selected to balance adoption, liquidity depth, and risk containment. These pools represent the most actively traded and liquid pairs on Uniswap, providing a natural and safe entry point for LP collateralization. By focusing on ETH, BTC, stablecoins, and a limited set of governance tokens, Amm Market captures blue-chip assets and core DeFi primitives while maintaining conservative risk exposure. At launch, the protocol will support approximately 36 pools across the three Uniswap versions, grouped into risk tiers defined by deep liquidity, reduced volatility, predictable impermanent loss behavior, high total value locked, and strong oracle coverage. This approach prioritizes safety and pricing reliability while laying a scalable foundation for future expansion.
            </p>

            <h3 id="revenue-model">Revenue Model</h3>
            <p>
              Amm Market is designed to generate sustainable, usage-driven revenue while operating fully in alignment with Aave v4&apos;s monetary policy and governance framework. Borrowing interest rates are set exclusively by the Aave v4 Hub, and Amm Market neither competes with nor overrides this mechanism. Instead, it adds value by expanding Aave&apos;s addressable collateral universe specifically by enabling liquidity provider positions to be used safely and efficiently as collateral through purpose-built infrastructure that addresses the unique risks and complexities inherent to LP assets.
            </p>

            <p>
              Revenue for Amm Market comes from two complementary and incentive-aligned sources. First, Amm Market captures a portion of liquidation penalties from the LP positions it enables. Liquidating these positions requires specialized unwinding logic, rigorous oracle validation, and carefully controlled execution to protect the health of the broader protocol. By retaining a share of these penalties, Amm Market is compensated for the infrastructure and risk management it provides, aligning its incentives with conservative risk practices and ensuring economic sustainability even during periods of market stress.
            </p>

            <p>
              Second, Amm Market earns optional frontend fees through its official user interfaces. These fees function similarly to those used by Uniswap and are entirely separate from Aave&apos;s core lending economics; they do not influence borrow or supply rates in any way. Crucially, the Amm Market protocol is open and permissionless, meaning any developer or user can build their own frontend and interact directly with the protocol to bypass these fees entirely.
            </p>

            <p>
              In essence, Aave determines the interest rates borrowers pay, Amm Market charges optional frontend fees that can be avoided by using a self-hosted interface, and it receives a share of liquidation penalties from the LP collateral it safely enables. There are no hidden mechanisms, no interference with Aave&apos;s monetary policy, and full composability for builders.
            </p>

            <h3 id="financial-projections">Financial Projections</h3>
            <p>
              Financial projections are based on conservative assumptions aligned with historical Aave utilization and LP behavior. The model assumes that only a portion of deposited LP collateral is borrowable and that average utilization remains well below maximum thresholds. A 50% utilization rate and a 10% average borrow APR are used as baseline assumptions to reflect a stable dominated borrowing environment rather than aggressive leverage.
            </p>

            <p>
              GHO is expected to be the primary borrowing asset within Amm Market due to its governance controlled and predictable borrow cost. As LP backed borrowing grows, demand for GHO increases organically, strengthening its role as Aave&apos;s native stablecoin while generating recurring interest based protocol revenue. This creates a flywheel where LP adoption drives credit demand, protocol revenue, and stablecoin utility simultaneously.
            </p>

            <p className="text-sm text-gray-500 italic">
              Assumptions: 50% of LP collateral is actively borrowed, average borrow APR is 9%, Amm Market collects around 0.10% (10 basis points) of volume as fees, and all APR goes to the Aave Hub.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Scenario</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">LP Collateral</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Outstanding Borrows</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Aave Hub Revenue</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Amm Market Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-gray-600">Low</td>
                    <td className="px-4 py-3 text-gray-600">$100M</td>
                    <td className="px-4 py-3 text-gray-600">$50M</td>
                    <td className="px-4 py-3 text-gray-600">$4.5M/year</td>
                    <td className="px-4 py-3 text-gray-600">$2M/year</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-gray-600">Average</td>
                    <td className="px-4 py-3 text-gray-600">$500M</td>
                    <td className="px-4 py-3 text-gray-600">$250M</td>
                    <td className="px-4 py-3 text-gray-600">$22.5M/year</td>
                    <td className="px-4 py-3 text-gray-600">$20M/year</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-gray-600">Medium</td>
                    <td className="px-4 py-3 text-gray-600">$1B</td>
                    <td className="px-4 py-3 text-gray-600">$500M</td>
                    <td className="px-4 py-3 text-gray-600">$45M/year</td>
                    <td className="px-4 py-3 text-gray-600">$40M/year</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-600">High</td>
                    <td className="px-4 py-3 text-gray-600">$2.5B</td>
                    <td className="px-4 py-3 text-gray-600">$1.25B</td>
                    <td className="px-4 py-3 text-gray-600">$112.5M/year</td>
                    <td className="px-4 py-3 text-gray-600">$100M/year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              In all scenarios, Aave Hub captures the full interest yield, which represents the main economic incentive for LP-backed borrowing. Amm Market&apos;s revenue is modest relative to Hub earnings but is directly tied to transaction volume and liquidation events, ensuring a predictable, usage-driven revenue stream that scales as the market grows. Amm Market revenue goes back to token holders.
            </p>

            {/* E) Roadmap */}
            <h3 id="roadmap">E) Roadmap and Plans</h3>
            <p className="text-lg font-medium text-gray-900 mb-4">Amm Market is multiprotocol and multichain</p>

            <ul>
              <li><strong>Phase 1 – Launch on Ethereum:</strong> Deploy Amm Market on Ethereum with two core Spokes—Uniswap v3 and Balancer v3—allowing immediate LP-backed lending.</li>
              <li><strong>Phase 2 – Rapid DEX Expansion:</strong> Quickly add other DEXs (Aerodrome, PancakeSwap, etc.) as standalone Spokes.</li>
              <li><strong>Phase 3 – Cross-Chain Growth:</strong> Extend the core Spokes to additional chains such as Arbitrum, Base, and Unichain, enabling multi-chain LP lending.</li>
              <li><strong>Phase 4 – Universal LP Collateral Network:</strong> Become the backbone for all liquidity pools as collateral, integrating major DEXs including Uniswap, Balancer, Curve, PancakeSwap, Aerodrome, and LFJ Adapter.</li>
            </ul>

            {/* F) Conclusion */}
            <h3 id="conclusion">F) Conclusion</h3>
            <h4>Why build it now?</h4>
            <p>
              At Amm Market, innovation drives everything we do. We thrive on a culture of meritocracy, where individuals take ownership, tackle complex challenges, and think creatively to solve problems. Our team is passionate about building transformative lending products and pushing the boundaries of DeFi efficiency.
            </p>

            <p>
              We have built what Aave Labs envisioned. By bridging DEXs and lending in a single system, Amm Market transforms the deepest liquidity pools into collateralized debt positions, turning AMMs from passive trading venues into active credit engines.
            </p>

            <p>
              The future of Amm Market is clear. Liquidity pools will be fully usable as collateral, unlocking new ways for capital to move and creating more efficient lending opportunities across chains and DEXs. We are excited to show what we build next and to lead the next evolution of DeFi.
            </p>

            {/* Links and References */}
            <h3 id="references">Links and References</h3>
            <ul>
              <li><Link href="https://governance.aave.com/t/temp-check-aave-s-cdp-for-uniswap-v4-positions/21980" target="_blank">Aave - Uniswap Governance Proposal</Link></li>
              <li><Link href="https://governance.aave.com/t/arc-uniswap-v3-nft-as-collateral-for-minting-gho/10708" target="_blank">Uniswap v3 NFT as Collateral for GHO</Link></li>
              <li><Link href="https://medium.com/aave/the-uniswap-market-is-live-on-aave-protocol-12b5a4cc5e2" target="_blank">Original Aave AMM Market Launch</Link></li>
              <li><Link href="https://governance.aave.com/t/renew-the-amm-market-assets/4918" target="_blank">Renew the AMM Market Assets</Link></li>
              <li><Link href="https://governance.aave.com/t/gauntlet-analysis-market-risks-of-listing-lp-tokens-as-collateral/10573" target="_blank">Gauntlet Analysis: Market Risks of LP Tokens</Link></li>
              <li><Link href="https://governance.aave.com/t/arc-add-gelato-s-g-uni-erc20-uniswap-v3-positions-as-collateral-to-aave-s-amm-market/5687" target="_blank">G-UNI Positions as Collateral Proposal</Link></li>
              <li><Link href="https://governance.aave.com/t/adding-uniswap-v3-nfts-as-collateral/11569" target="_blank">Adding Uniswap v3 NFTs as Collateral</Link></li>
              <li><Link href="https://governance.aave.com/t/arfc-strategic-opportunity-framework-for-friendly-forks-and-whitelabel-instances/21961" target="_blank">Strategic Opportunity Framework</Link></li>
              <li><Link href="https://governance.aave.com/t/gauntlet-s-market-risk-assessment/3814" target="_blank">Gauntlet&apos;s Market Risk Assessment</Link></li>
              <li><Link href="https://www.comp.xyz/t/add-market-g-uni-erc20-uniswap-v3-positions/2324" target="_blank">Compound: G-UNI Positions Discussion</Link></li>
              <li><Link href="https://forum.sky.money/tags/c/collateral-onboarding/domain-work/28/uni-lp" target="_blank">MakerDAO: UNI LP Collateral Onboarding</Link></li>
            </ul>
          </div>

          {/* Sidebar navigation */}
          <ScrollSpySidebar sections={sections} />
        </div>
      </article>
    </section>
  )
}
