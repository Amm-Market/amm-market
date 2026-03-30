import type { Metadata } from "next"
import Link from "next/link"
import { Code2, Coins, Globe2, LayoutDashboard, Layers3, RefreshCcw, Rocket, ShieldCheck } from "lucide-react"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Lightpaper - Avana",
  description:
    "Avana is an LP-collateral lending protocol that lets users borrow against active liquidity positions while venue-specific spoke markets manage valuation, risk, and liquidation.",
  openGraph: {
    title: "Lightpaper - Avana",
    description:
      "Tap into LP credits with Avana's LP-collateral lending model, structured spoke markets, and risk-aware borrowing infrastructure.",
  },
}

const sections = [
  { id: "executive-summary", title: "Executive Summary" },
  { id: "protocol-motivation", title: "Protocol Motivation" },
  { id: "protocol-overview", title: "Protocol Overview" },
  { id: "protocol-specification", title: "Protocol Specification" },
  { id: "protocol-architecture", title: "Protocol Architecture" },
  { id: "spoke-configuration", title: "Spoke Configuration" },
  { id: "risk-management", title: "Risk Management" },
  { id: "position-valuation", title: "Position Valuation" },
  { id: "liquidation-mechanism", title: "Liquidation Mechanism" },
  { id: "interest-rate", title: "Interest Rate" },
  { id: "revenue-model", title: "Revenue Model" },
  { id: "market-opportunity", title: "Market Opportunity" },
  { id: "roadmap", title: "Roadmap" },
  { id: "conclusion", title: "Conclusion" },
  { id: "references-and-appendix", title: "References & Appendix" },
]

const borrowerProtocolGroups = [
  {
    protocol: "Uniswap",
    tvl: "$5.68B",
    markets: [
      {
        spoke: "Uniswap v2 LPs",
        description: "Fungible LP shares in large TVL trading pairs",
        examplePools: "ETH/USDC, WBTC/ETH, ETH/DAI",
      },
      {
        spoke: "Uniswap v3 Stable Positions",
        description: "Concentrated liquidity in stable or correlated asset pairs",
        examplePools: "USDC/USDT, DAI/USDC",
      },
      {
        spoke: "Uniswap v3 Blue-Chip Positions",
        description: "Concentrated liquidity in major crypto trading pairs",
        examplePools: "ETH/USDC, WBTC/ETH",
      },
      {
        spoke: "Uniswap v3 Governance & DAO Positions",
        description: "Concentrated liquidity in governance-token and DAO ecosystem pairs",
        examplePools: "AAVE/ETH, UNI/ETH, CRV/ETH",
      },
    ],
  },
  {
    protocol: "Curve",
    tvl: "$1.83B",
    markets: [
      {
        spoke: "Curve Stable LPs",
        description: "Stablecoin liquidity pools optimized for near-parity assets",
        examplePools: "USDC/USDT, DAI/USDC/USDT, crvUSD/USDC",
      },
      {
        spoke: "Curve Correlated LPs",
        description: "Closely correlated asset pools, especially ETH and liquid staking derivatives",
        examplePools: "ETH/stETH, ETH/wstETH, rETH/ETH",
      },
      {
        spoke: "Curve Crypto LPs",
        description: "Directional crypto pools for non-pegged assets with deeper market beta",
        examplePools: "USDT/ETH, BTC/ETH, CRV/ETH",
      },
    ],
  },
  {
    protocol: "Balancer",
    tvl: "$158.18M",
    markets: [
      {
        spoke: "Balancer Stable Pools",
        description: "Multi-asset stable or correlated baskets with efficient swaps",
        examplePools: "USDC/DAI/USDT, wstETH/ETH",
      },
      {
        spoke: "Balancer Weighted Pools",
        description: "Directional or index-style pools with configurable weights",
        examplePools: "80/20 WETH/AAVE, 80/20 BAL/WETH",
      },
      {
        spoke: "Balancer Boosted Pools",
        description: "Yield-bearing LP baskets composed of lending receipts or vault-based assets",
        examplePools: "Boosted stable baskets, yield-bearing stable pools",
      },
      {
        spoke: "Balancer reCLAMM Pools",
        description: "Self-adjusting concentrated-liquidity pools with fungible LP exposure",
        examplePools: "ETH/stable reCLAMM pools",
      },
    ],
  },
  {
    protocol: "Aerodrome",
    tvl: "$356.44M",
    markets: [
      {
        spoke: "Aerodrome Basic Stable LPs",
        description: "Stable AMM pools for closely priced assets on Base",
        examplePools: "USDC/DAI, USD+/USDC, EURC/USDC",
      },
      {
        spoke: "Aerodrome Basic Volatile LPs",
        description: "Standard volatile pools for directional pairs and ecosystem assets",
        examplePools: "AERO/USDC, DEGEN/USDC, BRETT/WETH",
      },
      {
        spoke: "Aerodrome Slipstream Blue-Chip Positions",
        description: "Concentrated liquidity positions for Base's deepest blue-chip pairs",
        examplePools: "WETH/USDC, cbETH/WETH, cbBTC/WETH",
      },
    ],
  },
]

const oracleLayers = [
  {
    layer: "Primary asset prices",
    provider: "Chainlink",
    coverage: "50+ assets",
    updateFrequency: "0.5-2% deviation",
  },
  {
    layer: "Secondary verification",
    provider: "Chainlink Data Streams",
    coverage: "100+ assets",
    updateFrequency: "Real-time",
  },
  {
    layer: "Pool-specific pricing",
    provider: "Uniswap v3 TWAP",
    coverage: "All v3 pools",
    updateFrequency: "30-min rolling",
  },
  {
    layer: "Multi-asset pools",
    provider: "Balancer / Curve native",
    coverage: "Pool-specific",
    updateFrequency: "1-hour exponential",
  },
  {
    layer: "Dynamic risk adjustment",
    provider: "Chaos Labs Slope2",
    coverage: "Aave markets",
    updateFrequency: "Real-time",
  },
]

const marketScenarios = [
  {
    scenario: "Low",
    collateral: "$100M",
    borrows: "$50M",
    hubRevenue: "$4.5M / year",
    avanaRevenue: "$2M / year",
  },
  {
    scenario: "Average",
    collateral: "$500M",
    borrows: "$250M",
    hubRevenue: "$22.5M / year",
    avanaRevenue: "$20M / year",
  },
  {
    scenario: "Medium",
    collateral: "$1B",
    borrows: "$500M",
    hubRevenue: "$45M / year",
    avanaRevenue: "$40M / year",
  },
  {
    scenario: "High",
    collateral: "$2.5B",
    borrows: "$1.25B",
    hubRevenue: "$112.5M / year",
    avanaRevenue: "$100M / year",
  },
]

type RoadmapStatus = "Released" | "In Progress" | "Q2" | "Q3" | "Q4"

const roadmapPhases: {
  title: string
  summary: string
  timeframe: string
  milestones: { label: string; status: RoadmapStatus }[]
}[] = [
  {
    title: "Phase 1 - Token Markets",
    summary:
      "Deposit LP positions as collateral to borrow single assets.",
    timeframe: "Q2 2026",
    milestones: [
      { label: "LP Collateral Pricing Engine", status: "Released" },
      { label: "Oracles and Risk Parameters", status: "Released" },
      { label: "Spokes Framework", status: "Released" },
      { label: "Collateral Health Factor", status: "Released" },
      { label: "Lightpaper", status: "Released" },
      { label: "Sandbox Launch", status: "Released" },
      { label: "LP Token Valuation Model", status: "In Progress" },
      { label: "LP Token Liquidation Engine", status: "In Progress" },
      { label: "Borrow & Repay Core Contracts", status: "In Progress" },
      { label: "Testnet Uniswap V3 LP Support", status: "In Progress" },
      { label: "Testnet Balancer V3 LP Support", status: "In Progress" },
      { label: "Smart Contract Audit V1", status: "In Progress" },
      { label: "Ethereum Mainnet Launch", status: "Q2" },
      { label: "Lender Dashboard & Borrower Interface", status: "Q2" },
      { label: "Real-time Pool Risk Monitoring", status: "Q2" },
      { label: "AVA Token", status: "Q2" },
    ],
  },
  {
    title: "Phase 2 - Pool Markets",
    summary:
      "Deposit LP positions as collateral to borrow pool positions.",
    timeframe: "Q3 2026",
    milestones: [
      { label: "Pool Market Architecture & Spec", status: "Q2" },
      { label: "LP-to-Pool Borrow Mechanism", status: "Q2" },
      { label: "Borrowed Pool Position Packaging", status: "Q2" },
      { label: "Dynamic LTV Engine V2 (LP composition-aware)", status: "Q2" },
      { label: "Liquidation Engine V2", status: "Q2" },
      { label: "Base & Arbitrum Deployment", status: "Q2" },
      { label: "Uniswap V2 LP Support", status: "Q2" },
      { label: "Balancer V2 LP Support", status: "Q2" },
      { label: "Aerodrome Basic Stable LP Support", status: "Q2" },
      { label: "Aerodrome Basic Volatile LP Support", status: "Q2" },
      { label: "Cross-chain Collateral Risk Parameters", status: "Q2" },
      { label: "Smart Contract Audit V2", status: "Q2" },
      { label: "Curve LP Support", status: "Q3" },
      { label: "Secondary Pool Position Market", status: "Q3" },
      { label: "Lender Credit Exit Facility", status: "Q3" },
      { label: "Protocol-to-Protocol Pool API", status: "Q3" },
    ],
  },
  {
    title: "Phase 3 - Leverage Markets",
    summary:
      "Deposit LP positions as collateral, borrow assets or pools, and loop into leveraged yield positions.",
    timeframe: "Q4 2026",
    milestones: [
      { label: "Loop Strategy Engine", status: "Q4" },
      { label: "One-Click Loop UX", status: "Q4" },
      { label: "Leverage Tiers (2x / 5x / 10x)", status: "Q4" },
      { label: "Loop Health Monitor & Auto-Deleverage", status: "Q4" },
      { label: "Slippage & Rebalance Optimizer", status: "Q4" },
      { label: "Cross-chain Loop Support (Ethereum, Base, Arbitrum)", status: "Q4" },
      { label: "Institutional Access & REST API", status: "Q4" },
      { label: "Smart Contract Audit V3", status: "Q4" },
      { label: "Governance V1", status: "Q4" },
    ],
  },
]

const governanceReferences = [
  {
    label: "Uniswap RFC: Aave's CDP for Uniswap v4 Positions",
    href: "https://gov.uniswap.org/t/rfc-aave-s-cdp-for-uniswap-v4-positions/25568",
  },
  {
    label: "Aave Temp Check: CDP for Uniswap v4 Positions",
    href: "https://governance.aave.com/t/temp-check-aave-s-cdp-for-uniswap-v4-positions/21980",
  },
]

const oldImplementationReferences = [
  {
    label: "Sky Forum: UNI LP Collateral Onboarding",
    href: "https://forum.sky.money/tags/c/collateral-onboarding/domain-work/28/uni-lp",
  },
  {
    label: "ARC: Uniswap v3 NFT as Collateral for Minting GHO",
    href: "https://governance.aave.com/t/arc-uniswap-v3-nft-as-collateral-for-minting-gho/10708",
  },
  {
    label: "The Uniswap Market Is Live on Aave Protocol",
    href: "https://medium.com/aave/the-uniswap-market-is-live-on-aave-protocol-12b5a4cc5e2",
  },
  {
    label: "Renew the AMM Market Assets",
    href: "https://governance.aave.com/t/renew-the-amm-market-assets/4918",
  },
  {
    label: "Gauntlet Analysis: Market Risks of Listing LP Tokens as Collateral",
    href: "https://governance.aave.com/t/gauntlet-analysis-market-risks-of-listing-lp-tokens-as-collateral/10573",
  },
  {
    label: "ARC: Add Support for DeFi Pulse Index (DPI)",
    href: "https://governance.aave.com/t/arc-add-support-for-defi-pulse-index-dpi/3576/22?u=josuempia",
  },
  {
    label: "Limitations of a Market for UNI v2 Collateral (Discussion 1)",
    href: "https://governance.aave.com/t/limitations-of-a-market-for-uni-v2-collateral-be-created/545/2?u=josuempia",
  },
  {
    label: "Limitations of a Market for UNI v2 Collateral (Discussion 2)",
    href: "https://governance.aave.com/t/limitations-of-a-market-for-uni-v2-collateral-be-created/545/9?u=josuempia",
  },
  {
    label: "ARC: Add Gelato's G-UNI ERC20 Uniswap v3 Positions as Collateral",
    href: "https://governance.aave.com/t/arc-add-gelato-s-g-uni-erc20-uniswap-v3-positions-as-collateral-to-aave-s-amm-market/5687",
  },
  {
    label: "Hayden Adams on LP collateral experimentation",
    href: "https://twitter.com/haydenzadams/status/1440461089133645835?s=20",
  },
  {
    label: "ARC: Implement a Uni v2 Liquidity Pool Token Market",
    href: "https://governance.aave.com/t/arc-implement-a-uni-v2-liquidity-pool-token-market-initial-discussion/645",
  },
  {
    label: "Adding Uniswap v3 NFTs as Collateral",
    href: "https://governance.aave.com/t/adding-uniswap-v3-nfts-as-collateral/11569",
  },
  {
    label: "ARC: Onboard Gamma Strategies USDC/GHO UNI v3 Collateral to Mint GHO",
    href: "https://governance.aave.com/t/arc-onboard-gamma-strategies-usdc-gho-uni-v3-collateral-to-mint-gho/10733",
  },
  {
    label: "ARC: Staked aTokens, a New Aave Primitive",
    href: "https://governance.aave.com/t/arc-staked-atokens-a-new-aave-primitive-exploring-vote-escrow-economies/10406",
  },
  {
    label: "Aave announcement on X",
    href: "https://x.com/aave/status/1371761919682617347",
  },
  {
    label: "Gauntlet's Market Risk Assessment",
    href: "https://governance.aave.com/t/gauntlet-s-market-risk-assessment/3814",
  },
  {
    label: "Compound: G-UNI Positions Discussion",
    href: "https://www.comp.xyz/t/add-market-g-uni-erc20-uniswap-v3-positions/2324",
  },
]

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-dashed border-gray-300 bg-gray-50">
      <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-white via-blue-50 to-gray-100 px-6 py-8">
        <div className="mx-auto flex max-w-md flex-col items-center gap-3 px-6 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white text-xs font-semibold text-blue-600">
            IMG
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Placeholder</p>
            <p className="mt-2 text-base font-semibold text-gray-900">{label}</p>
          </div>
          <p className="text-sm leading-6 text-gray-500">Replace later with the final approved visual.</p>
        </div>
      </div>
    </div>
  )
}

function getRoadmapStatusClass(status: RoadmapStatus) {
  if (status === "Released") {
    return "text-emerald-600"
  }

  if (status === "In Progress") {
    return "text-blue-600"
  }

  return "text-gray-500"
}

function getRoadmapStatusLabel(status: RoadmapStatus) {
  if (status === "Released") {
    return "Released"
  }

  if (status === "In Progress") {
    return "In Progress"
  }

  return `Target ${status} 2026`
}

function getRoadmapGroupOpacity(status: RoadmapStatus) {
  if (status === "Released" || status === "In Progress") {
    return ""
  }

  if (status === "Q2") {
    return "opacity-95"
  }

  if (status === "Q3") {
    return "opacity-85"
  }

  return "opacity-75"
}

function getRoadmapDisplayLabel(label: string) {
  const shortLabels: Record<string, string> = {
    "Lender Dashboard & Borrower Interface": "Dashboard & Borrower UI",
    "Real-time Pool Risk Monitoring": "Pool Risk Monitoring",
    "Borrowed Pool Position Packaging": "Pool Position Packaging",
    "Dynamic LTV Engine V2 (LP composition-aware)": "Dynamic LTV Engine V2",
    "Cross-chain Collateral Risk Parameters": "Cross-chain Risk Parameters",
    "Secondary Pool Position Market": "Secondary Pool Market",
    "Protocol-to-Protocol Pool API": "Protocol Pool API",
    "Cross-chain Loop Support (Ethereum, Base, Arbitrum)": "Cross-chain Loop Support",
    "Leverage Tiers (2x / 5x / 10x)": "Leverage Tiers",
    "Loop Health Monitor & Auto-Deleverage": "Loop Health & Auto-Deleverage",
    "Institutional Access & REST API": "Institutional Access & API",
  }

  return shortLabels[label] ?? label
}

function RoadmapMilestoneIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase()

  if (
    normalized.includes("risk") ||
    normalized.includes("liquidation") ||
    normalized.includes("ltv") ||
    normalized.includes("oracle") ||
    normalized.includes("audit") ||
    normalized.includes("health")
  ) {
    return <ShieldCheck className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  if (
    normalized.includes("dashboard") ||
    normalized.includes("interface") ||
    normalized.includes("ui") ||
    normalized.includes("monitoring")
  ) {
    return <LayoutDashboard className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  if (normalized.includes("token") || normalized.includes("ava")) {
    return <Coins className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  if (normalized.includes("loop") || normalized.includes("leverage")) {
    return <RefreshCcw className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  if (
    normalized.includes("base") ||
    normalized.includes("arbitrum") ||
    normalized.includes("cross-chain") ||
    normalized.includes("deployment")
  ) {
    return <Globe2 className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  if (normalized.includes("pool")) {
    return <Layers3 className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  if (normalized.includes("launch") || normalized.includes("sandbox") || normalized.includes("testnet")) {
    return <Rocket className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  return <Code2 className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
}

function ReferenceTable({ references }: { references: { label: string; href: string }[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50">
          <tr className="text-gray-900">
            <th className="px-4 py-3 font-semibold">Reference</th>
            <th className="w-24 px-4 py-3 font-semibold">Link</th>
          </tr>
        </thead>
        <tbody>
          {references.map((reference) => (
            <tr key={reference.href} className="border-t border-gray-200 align-top">
              <td className="px-4 py-3 text-gray-700">{reference.label}</td>
              <td className="px-4 py-3">
                <Link
                  href={reference.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Open
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function LightpaperPage() {
  return (
    <section className="py-12 md:py-24">
      <article className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-start gap-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-serif italic text-gray-900">Tap into LP Credits</h1>
          <p className="text-lg text-gray-600">Avana is a lending protocol built specifically for LP collateral.</p>
          <hr className="w-full border-gray-200" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-24">
          <div className="max-w-3xl [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-gray-900 [&_p]:text-gray-600 [&_p]:leading-relaxed [&_ul]:text-gray-600 [&_ul]:leading-relaxed [&_li]:mb-2 [&_a]:text-blue-600 [&_a]:hover:underline">
            <div className="space-y-12">
              <section id="executive-summary" className="scroll-mt-32">
                <h3>Executive Summary</h3>
                <div className="mt-5 space-y-5">
                  <p className="font-medium text-gray-900">
                    The deepest pools in DeFi are full of capital that works hard and moves nowhere.
                  </p>
                  <p>
                    Liquidity providers keep markets alive. They absorb volatility, supply depth, and earn fees for
                    doing so. But the capital inside those positions remains strangely trapped. The moment an LP wants
                    liquidity, flexibility, or borrowing power, the usual answer is the same: exit the pool, unwind
                    the position, and stop doing the thing that made the capital productive in the first place.
                  </p>
                  <ImagePlaceholder label="Executive summary visual" />
                  <p>
                    On-chain data across 2025 shows that over 90% of liquidity across major AMMs sat idle from a
                    credit perspective for more than 90% of days. As AMM liquidity is projected to exceed $50 billion
                    by 2030, the gap between what LP positions are worth and what can be borrowed against them
                    represents one of the largest untapped opportunities in decentralized finance.
                  </p>
                  <p>
                    Avana addresses this problem by making LP positions borrowable collateral. Instead of forcing users
                    to choose between staying in the market and accessing liquidity, Avana allows them to do both at
                    once. A user deposits an LP position, Avana evaluates its collateral value using market-specific
                    risk logic, and the user can then borrow against it while the position remains active in the
                    underlying AMM.
                  </p>
                </div>
              </section>

              <section id="protocol-motivation" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>Protocol Motivation</h3>
                <div className="mt-5 space-y-5">
                  <p>
                    The idea of using LP positions as borrowable collateral is not new. Previous attempts proved
                    demand but failed to fully solve valuation, liquidation, and risk isolation. Avana exists because
                    those three constraints can now be addressed directly.
                  </p>
                  <p>
                    In 2021, Aave launched its AMM Market, allowing Uniswap v2 and Balancer LP tokens to be used as
                    collateral. The model arrived before the surrounding infrastructure was ready. DEX liquidity was
                    thinner, pool design was less mature, and risk frameworks were still too blunt to capture what LP
                    positions actually were.
                  </p>
                  <p>
                    Additionally, Gelato&apos;s G-UNI wrapped Uniswap v3 NFT positions into fungible ERC-20 tokens,
                    restoring composability across DeFi. Later, MakerDAO&apos;s DAI pool reached over $1B in TVL but
                    ultimately declined, citing oracle fragility, liquidation complexity, and insufficient risk
                    isolation.
                  </p>
                  <p>
                    Years later, in 2026, Aave returned with a new proposal to Uniswap:
                    {" "}
                    <Link
                      href="https://gov.uniswap.org/t/rfc-aave-s-cdp-for-uniswap-v4-positions/25568"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      CDPs for Uniswap v4 Positions
                    </Link>
                    . The proposal ended up stalling, and adoption remained constrained by the same unresolved
                    challenges.
                  </p>
                  <ImagePlaceholder label="Historical LP collateral timeline" />
                  <p>
                    The conditions that made LP collateral difficult a few years ago are not the same conditions that
                    exist now. AMMs are more mature, liquidity is deeper, and the market has accumulated years of data
                    on how LP positions behave across stable, correlated, and volatile pairs. Oracle infrastructure has
                    improved, liquidation systems are more sophisticated, and market participants are far more familiar
                    with structured DeFi collateral than they were during earlier experiments.
                  </p>
                  <p>
                    Just as important, Aave v4 creates the right architectural environment for this model. Its hub-and-spoke
                    design allows LP-specific valuation, risk controls, and liquidation logic to live inside dedicated
                    spoke markets without forcing all collateral types into a single shared implementation. That makes
                    it possible to support LP collateral in a way that is modular, isolated, and scalable.
                  </p>
                </div>
              </section>

              <section id="protocol-overview" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>Protocol Overview</h3>
                <div className="mt-5 space-y-5">
                  <p>
                    Avana is a lending protocol built specifically for LP collateral. It allows AMM liquidity providers
                    from Uniswap, Balancer, Curve, or Aerodrome to deposit supported LP positions, have those
                    positions evaluated inside market-specific risk frameworks, and borrow against them while the
                    positions remain active in the underlying pools.
                  </p>
                  <p>
                    The closest comparable system is Fluid by Instadapp. Fluid&apos;s innovation is a unified liquidity
                    layer where debt and collateral themselves become DEX liquidity inside a vertically integrated
                    system. Avana&apos;s innovation is different: it makes third-party AMM LP positions from across venues
                    into borrowable collateral inside a horizontally aggregative system. Fluid owns the liquidity rails.
                    Avana works with the rails that already exist across the ecosystem. The distinction becomes clear
                    when you ask where the liquidity lives, who controls the infrastructure, and what exactly is being
                    collateralized.
                  </p>
                  <p>At a high level, Avana operates through three steps.</p>
                  <ImagePlaceholder label="Protocol overview flow" />
                  <p>
                    First, a user deposits an LP position into Avana. This can be any pool position from supported
                    AMMs such as Uniswap, Balancer, Curve Finance, or Aerodrome Finance, depending on the phase and
                    supported markets.
                  </p>
                  <p>
                    Second, Avana evaluates the LP position to determine its risk-adjusted collateral value. The
                    protocol checks the value of the underlying pool assets, the structure of the liquidity pool, asset
                    volatility, correlation between the assets in the pair, and overall liquidation risk. Avana relies
                    on LP valuation models, conservative borrowing limits, oracle-based pricing, and automated
                    liquidation mechanisms to ensure that LP positions can function safely as collateral.
                  </p>
                  <p>
                    Third, once the position has been evaluated, the user can borrow assets against it. The liquidity
                    remains active inside the AMM and continues earning trading fees and incentives while also serving
                    as collateral. This allows LPs to access liquidity without withdrawing liquidity from the AMM; the
                    LP position itself becomes the collateral inside Avana.
                  </p>
                </div>
              </section>

              <section id="protocol-specification" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>Protocol Specification</h3>
                <div className="mt-5 space-y-5">
                  <p>
                    Avana is designed as a multi-phase protocol that evolves over time to progressively expand what LP
                    collateral markets can do. Phase 1 introduces Token Markets. Phase 2 expands into Pool Markets.
                    Phase 3 unlocks Leverage Markets.
                  </p>
                  <ImagePlaceholder label="Three-phase protocol roadmap concept" />
                  <p>
                    The first phase introduces Token Markets. In this phase, users deposit LP positions as collateral
                    and borrow single assets such as stablecoins or other supported tokens.
                  </p>
                  <p>
                    The second phase introduces Pool Markets. Instead of borrowing only single assets, users can borrow
                    liquidity pool pair positions that are themselves productive capital. Borrowed funds can therefore
                    be deployed directly into liquidity strategies, making the borrowed capital more useful within
                    decentralized finance.
                  </p>
                  <p>
                    The third phase introduces Leverage Markets. In this phase, a user deposits an LP position,
                    borrows against it, redeploys the borrowed capital into another LP position, and can repeat the
                    process within defined risk limits. This creates structured leverage for liquidity providers and
                    allows them to compound their strategies while the protocol manages risk.
                  </p>
                </div>
              </section>

              <section id="protocol-architecture" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>Protocol Architecture</h3>
                <div className="mt-5 space-y-5">
                  <p>
                    Avana is built on Aave v4&apos;s hub-and-spoke architecture because LP collateral needs both shared
                    liquidity and isolated logic. The hub handles the common monetary layer: reserves, accounting,
                    interest rate models, and global credit coordination. The spokes handle everything LP-specific: AMM
                    pool collateral registration, LP position valuation, pool risk enforcement, and AMM pool
                    liquidation execution.
                  </p>
                  <p>A conceptual credit line from different Aave Hubs might look like this.</p>
                  <ImagePlaceholder label="Hub and spoke credit-line diagram" />
                  <p>
                    This separation is essential because LP positions vary significantly across venues and pool types. A
                    concentrated Uniswap position does not behave like a Balancer weighted pool. A Curve stable
                    position does not behave like a basic stable Aerodrome pool. Each supported LP market can therefore
                    define its own valuation logic, collateral parameters, oracle inputs, and liquidation rules. Avana
                    isolates risk, tailors valuation models, and evolves support pool by pool without forcing the
                    entire protocol to inherit the same assumptions.
                  </p>
                  <ImagePlaceholder label="Venue-specific spoke design" />
                  <p>
                    Avana Phase 1 will begin with a narrow set of highly legible AMM LP markets, while future versions
                    add broader AMM support, more complex borrowing formats, and eventually loop-based leverage. In
                    practical terms, the user experience remains simple. A user deposits a supported LP position, the
                    protocol evaluates it using the market-specific logic assigned to that pool type, and borrowing
                    capacity is made available based on the resulting risk-adjusted value.
                  </p>
                </div>
              </section>

              <section id="spoke-configuration" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>Spoke Configuration</h3>
                <div className="mt-5 space-y-5">
                  <h4>For Borrowers</h4>
                  <p>
                    Avana Borrow Spokes are organized into 14 specialized LP-collateral spokes, each corresponding to
                    a specific AMM liquidity primitive or market structure. These spokes isolate collateral valuation,
                    liquidation logic, and risk parameters for different liquidity designs while sharing borrowable
                    liquidity through the Avana Hub. By segmenting LP collateral across dedicated spokes, Avana can
                    safely integrate a wide range of AMM liquidity formats, from stablecoin pools and correlated assets
                    to weighted index pools and concentrated liquidity positions, while maintaining unified capital
                    efficiency across the system.
                  </p>
                  <p className="text-sm text-gray-500">
                    TVL snapshots below are included as quick opportunity markers so investors can see why these LP
                    venues matter for launch sequencing.
                  </p>
                </div>

                <div className="mt-6 space-y-6">
                  {borrowerProtocolGroups.map((group) => (
                    <div key={group.protocol} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                      <div className="border-b border-gray-200 px-4 py-4">
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="mb-0">{group.protocol}</h4>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="text-base font-semibold text-gray-900">{group.tvl} TVL</p>
                          </div>
                        </div>
                      </div>

                      <table className="w-full table-fixed text-left text-sm">
                        <thead className="bg-gray-50">
                          <tr className="text-gray-900">
                            <th className="w-[32%] px-4 py-3 font-semibold">Market</th>
                            <th className="w-[38%] px-4 py-3 font-semibold">Description</th>
                            <th className="w-[30%] px-4 py-3 font-semibold">Example Pools</th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.markets.map((market) => (
                            <tr key={market.spoke} className="border-t border-gray-200 align-top">
                              <td className="px-4 py-3 font-medium text-gray-900">{market.spoke}</td>
                              <td className="px-4 py-3 text-gray-600">{market.description}</td>
                              <td className="px-4 py-3 text-gray-600">{market.examplePools}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-5">
                  <p>
                    Together, these 14 borrow spokes enable Avana to support the full spectrum of modern AMM
                    liquidity, from stablecoin pools and liquid staking markets to concentrated liquidity and
                    governance-token ecosystems, positioning Avana as a dedicated lending protocol for AMM liquidity.
                  </p>

                  <h4>For Lenders</h4>
                  <p>
                    Avana Invest Spoke is the single spoke that functions as the capital entry point of the protocol,
                    allowing users to supply crypto assets that power borrowing across all LP-collateral markets.
                    Investors deposit assets such as ETH, BTC, and major stablecoins into the Invest Spoke, which
                    routes liquidity to the Avana Hub. From there, the Hub allocates credit across the various
                    LP-collateral spokes, enabling borrowers to draw liquidity against their active liquidity positions
                    on decentralized exchanges. This design separates capital supply from collateral management,
                    allowing investors to participate in the lending market without needing to manage LP positions,
                    impermanent loss, or liquidity ranges.
                  </p>
                  <ImagePlaceholder label="Invest spoke liquidity flow" />
                  <p>
                    During the early stages of Avana, the Avana Hub may be supported by credit lines from the Aave
                    Hubs, including the Core, Prime, and Plus hubs, to bootstrap liquidity and ensure deep borrow
                    markets from day one. As borrowing activity grows and the protocol matures, the Invest Spoke is
                    expected to become the primary liquidity source, with investor deposits increasingly supplying the
                    capital used by LP borrowers. Over time, this structure creates a scalable capital market where
                    lending liquidity flows efficiently through the Hub while remaining isolated from the risk dynamics
                    of individual LP-collateral markets.
                  </p>
                </div>
              </section>

              <section id="risk-management" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>Risk Management</h3>
                <div className="mt-5 space-y-5">
                  <p>
                    Liquidity provider (LP) collateral behaves fundamentally differently from traditional lending
                    collateral. Its value is not static. Instead, it evolves continuously with pool composition, price
                    divergence between paired assets, and impermanent loss dynamics that can accelerate faster than
                    conventional volatility models anticipate. Any lending framework that treats an LP position as a
                    simple token balance is structurally incomplete.
                  </p>
                  <p>
                    Avana addresses this by assigning risk at the market level rather than the asset level. Each
                    supported LP type is configured with collateral parameters derived from the structure of the pool
                    and the historical behavior of its underlying assets. Pools composed of stable or highly correlated
                    assets may support higher borrowing capacity, while volatile or thinly traded pairs require
                    stricter limits. Concentrated liquidity positions are generally treated more conservatively than
                    fungible or wide-range liquidity exposure because of the additional directional risk introduced by
                    narrow tick ranges.
                  </p>
                  <p>
                    When a user deposits an LP position, the corresponding Borrow Spoke determines borrowing capacity
                    by valuing the position in USD using a dual-oracle pricing framework. Chainlink price feeds provide
                    the primary price reference for the underlying assets, while AMM-derived time-weighted average
                    prices (TWAPs) act as an independent verification layer sourced directly from on-chain liquidity.
                  </p>
                  <p>
                    Borrowing power is granted only when both pricing sources remain within a defined tolerance band.
                    Requiring agreement between external oracle data and AMM-derived pricing significantly reduces
                    exposure to flash-loan manipulation, transient price distortions, or delayed oracle updates that
                    could otherwise lead to incorrect collateral valuation.
                  </p>
                  <p>Avana&apos;s oracle architecture spans multiple layers to ensure redundancy, price integrity, and resilience under market stress.</p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50">
                        <tr className="text-gray-900">
                          <th className="px-4 py-4 font-semibold">Oracle Layer</th>
                          <th className="px-4 py-4 font-semibold">Provider</th>
                          <th className="px-4 py-4 font-semibold">Coverage</th>
                          <th className="px-4 py-4 font-semibold">Update Frequency</th>
                        </tr>
                      </thead>
                      <tbody>
                        {oracleLayers.map((row) => (
                          <tr key={row.layer} className="border-t border-gray-200 align-top">
                            <td className="px-4 py-4 font-medium text-gray-900">{row.layer}</td>
                            <td className="px-4 py-4 text-gray-600">{row.provider}</td>
                            <td className="px-4 py-4 text-gray-600">{row.coverage}</td>
                            <td className="px-4 py-4 text-gray-600">{row.updateFrequency}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  <p>
                    Beyond price verification, Borrow Spokes continuously monitor pool composition, volatility,
                    liquidity depth, and oracle reliability. These inputs inform dynamic adjustments to loan-to-value
                    (LTV) ratios and liquidation thresholds on a per-position basis. This adaptive framework balances
                    capital efficiency with systemic safety while acknowledging that pools, oracle systems, and even
                    protocols themselves can fail.
                  </p>
                  <p>
                    The system is designed with failure assumptions in mind. Dual-oracle verification prevents toxic
                    pricing events, adaptive liquidation mechanisms minimize capital loss without abruptly removing
                    liquidity from pools, and continuous monitoring allows the protocol to respond to evolving market
                    conditions.
                  </p>
                </div>
              </section>

              <section id="position-valuation" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>Position Valuation</h3>
                <ImagePlaceholder label="LP valuation model graphic" />
                <div className="space-y-5">
                  <p>
                    For each LP position, the protocol derives the underlying token amounts using the position&apos;s
                    liquidity and tick range. These token balances are converted to USD using Chainlink price feeds and
                    verified against AMM TWAPs to mitigate flash price manipulation.
                  </p>
                  <p>
                    Because LP positions represent exposure to two underlying assets, Avana applies a conservative
                    collateral framework. The protocol identifies the weaker asset in the pair, defined as the token
                    with the lower single-asset collateral factor, and applies this value as a baseline cap on the LP
                    position&apos;s collateral valuation. This prevents over-leveraging against pools where one asset
                    could rapidly deteriorate.
                  </p>
                  <p>
                    A pool-level risk factor is then applied to the capped valuation. This factor incorporates
                    volatility, liquidity depth, asset correlation, and governance-defined stress buffers specific to
                    the pool structure.
                  </p>
                  <p>
                    Users may deposit multiple LP positions into a single Borrow Spoke. Borrowing capacity is
                    calculated from the aggregate USD value of all underlying assets across deposited positions, after
                    applying individual collateral factors and pool-level risk adjustments.
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Formula</p>
                  <p className="mt-2 font-mono text-sm leading-7 text-gray-800">
                    Borrowable USD = Position USD Value × Lower-Token CF × Pool-Level Risk Factor
                  </p>
                </div>

                <div className="mt-8">
                  <h4>ETH / USDC example</h4>
                  <ul className="mt-4 list-disc pl-6">
                    <li>LP Position Value: $963.51</li>
                    <li>Single-token CFs: WETH 77.5%, USDC 85%</li>
                    <li>Lower-token CF = 77.5%</li>
                    <li>Pool-Level Risk Factor = 0.85</li>
                    <li>
                      <strong>Final Borrowable = 963.51 × 77.5% × 0.85 ≈ $634.88</strong>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="liquidation-mechanism" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>Liquidation Mechanism</h3>
                <ImagePlaceholder label="Liquidation execution flow" />
                <div className="space-y-5">
                  <p>
                    Liquidation is triggered when a position&apos;s accrued debt exceeds its allowed borrowing capacity.
                    Once triggered, Avana Smart Agents and external liquidators may repay the outstanding debt in
                    exchange for a liquidation premium ranging from 2% to 10%, dynamically scaled based on the
                    position&apos;s debt-to-value ratio.
                  </p>
                  <p>
                    To ensure reliable execution for LP-backed collateral, Avana operates specialized liquidation agents
                    that use flashloans from Aave to atomically repay borrower debt, seize the LP collateral, and
                    unwind the position across supported decentralized exchanges. Upon liquidation, uncollected trading
                    fees from the LP position are applied first to reduce outstanding debt. If fees are insufficient,
                    the protocol removes the minimum required portion of LP principal to restore solvency and cover the
                    liquidation incentive.
                  </p>
                  <p>
                    The underlying assets obtained from the LP unwind are routed through liquidity aggregators or direct
                    swap venues, explicitly avoiding the source pool when doing so would degrade execution quality.
                    Proceeds are used to repay the flashloan and settle the debt, while any residual LP value is
                    returned to the borrower within the same transaction. This design ensures deterministic liquidation
                    of complex LP collateral while minimizing unnecessary capital destruction and preserving fair
                    outcomes for borrowers, liquidators, and the protocol.
                  </p>
                </div>
              </section>

              <section id="interest-rate" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>Interest Rate</h3>
                <ImagePlaceholder label="Borrow rate composition" />
                <div className="space-y-5">
                  <p>
                    Borrow rates in Avana are composed of three components: the Aave v4 Hub base rate, a spoke-level
                    premium, and a pool-specific risk adjustment that together reflect both global liquidity conditions
                    and LP-native risk.
                  </p>
                  <p>
                    As an example, an ETH/USDC LP position may carry a total borrow rate of 3.5%, derived from a 2.0%
                    Hub base rate, a 1.0% spoke premium, and a 0.5% pool adjustment. A more volatile pair such as
                    UNI/ETH would carry a higher pool adjustment, resulting in a 5.0% total borrow rate under the same
                    base and spoke conditions. Rates scale transparently with risk while remaining predictable for
                    borrowers.
                  </p>
                  <p>
                    The initial set of collateral pools and initial market scope will be deliberately selected to
                    balance adoption, liquidity depth, and risk containment. These pools will represent the most
                    actively traded and liquid pairs on Uniswap and Balancer, providing a natural and safe entry point
                    for LP collateralization. This approach prioritizes safety and pricing reliability while laying a
                    scalable foundation for future expansion.
                  </p>
                </div>
              </section>

              <section id="revenue-model" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>Revenue Model</h3>
                <div className="mt-5 space-y-5">
                  <p>Avana earns from two sources.</p>
                  <ImagePlaceholder label="Revenue model visual" />
                  <p>
                    The first is a share of liquidation penalties on the LP positions it enables. Unwinding these
                    positions properly with oracle validation, controlled execution, and slippage management requires
                    purpose-built infrastructure, and the protocol is compensated for providing it. This also means
                    Avana&apos;s economic incentives are aligned with conservative risk management: the better it
                    protects positions, the fewer liquidations occur, and the more borrowers trust the system over
                    time.
                  </p>
                  <p>
                    The second source is optional frontend fees through Avana&apos;s official interfaces, structured
                    identically to Uniswap&apos;s frontend fee model. These fees are entirely separate from Aave&apos;s
                    lending economics, have no effect on borrow or supply rates, and can be bypassed entirely by
                    anyone building or using a self-hosted interface. The protocol is open and permissionless.
                  </p>
                </div>
              </section>

              <section id="market-opportunity" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>Market Opportunity</h3>
                <ImagePlaceholder label="Addressable market visual" />
                <div className="space-y-5">
                  <p>
                    The addressable LP-collateral market across Ethereum, Arbitrum, and Base is estimated at $8 to
                    $12 billion by 2030. The projections below assume 50% utilization of deposited collateral, a 9%
                    average borrow APR, 10 basis points of platform volume captured as fees, and approximately 20x
                    annual platform turnover.
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <div className="overflow-x-auto">
                    <table className="min-w-[760px] w-full text-left text-sm">
                      <thead className="bg-gray-50">
                        <tr className="text-gray-900">
                          <th className="px-4 py-4 font-semibold">Scenario</th>
                          <th className="px-4 py-4 font-semibold">LP Collateral</th>
                          <th className="px-4 py-4 font-semibold">Outstanding Borrows</th>
                          <th className="px-4 py-4 font-semibold">Aave Hub Revenue</th>
                          <th className="px-4 py-4 font-semibold">Avana Revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        {marketScenarios.map((row) => (
                          <tr key={row.scenario} className="border-t border-gray-200">
                            <td className="px-4 py-4 font-medium text-gray-900">{row.scenario}</td>
                            <td className="px-4 py-4 text-gray-600">{row.collateral}</td>
                            <td className="px-4 py-4 text-gray-600">{row.borrows}</td>
                            <td className="px-4 py-4 text-gray-600">{row.hubRevenue}</td>
                            <td className="px-4 py-4 text-gray-600">{row.avanaRevenue}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  <p>
                    In every scenario, Aave Hub captures all borrow interest while Avana earns a usage-driven revenue
                    stream tied to the LP collateral layer it enables. As adoption grows, GHO demand grows alongside
                    LP-backed borrowing, reinforcing the credit flywheel and making LP collateral a meaningful new
                    surface area for DeFi lending.
                  </p>
                </div>
              </section>

              <section id="roadmap" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>Roadmap</h3>
                <div className="mt-5 space-y-5">
                  <p>
                    Avana develops in three phases, each building on the previous one. The roadmap is designed so that
                    each phase rests on the credibility of the one before it. Phase 1 introduces Token Markets. Phase
                    2 expands into Pool Markets. Phase 3 unlocks Leverage Markets.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-10">
                  {roadmapPhases.map((phase, index) => {
                    const statusOrder: RoadmapStatus[] = ["Released", "In Progress", "Q2", "Q3", "Q4"]
                    const groupedMilestones = statusOrder
                      .map((status) => ({
                        status,
                        items: phase.milestones.filter((milestone) => milestone.status === status),
                      }))
                      .filter((group) => group.items.length > 0)

                    return (
                      <div
                        key={phase.title}
                        className={index === 0 ? "space-y-4" : "space-y-4 pt-2"}
                      >
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <h4 className={`mb-0 text-base font-semibold ${index === 2 ? "text-gray-700" : "text-gray-900"}`}>{phase.title}</h4>
                            <span className="text-xs font-medium uppercase tracking-[0.08em] text-gray-500">{phase.timeframe}</span>
                          </div>
                          <p className="text-sm leading-6 text-gray-600">{phase.summary}</p>
                        </div>

                        <div className="space-y-3">
                          {groupedMilestones.map((group) => (
                            <div key={`${phase.title}-${group.status}`} className={`space-y-2 ${getRoadmapGroupOpacity(group.status)}`}>
                              <p className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${getRoadmapStatusClass(group.status)}`}>
                                {getRoadmapStatusLabel(group.status)}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {group.items.map((milestone) => (
                                  <div
                                    key={milestone.label}
                                    className="flex items-center gap-2 rounded-md bg-gray-100 px-2.5 py-1.5"
                                  >
                                    <RoadmapMilestoneIcon label={milestone.label} />
                                    <span className={`text-[12px] font-medium leading-5 ${index === 2 ? "text-gray-600" : "text-gray-700"}`}>
                                      {getRoadmapDisplayLabel(milestone.label)}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>

              <section id="conclusion" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>Conclusion</h3>
                <div className="mt-5 space-y-5">
                  <p>
                    Avana directly executes on the strategic vision outlined by Aave Labs&apos; &quot;CDP for AMM
                    Positions&quot; proposal, extending it beyond a single DEX or pool design to encompass the
                    entire multi-billion-dollar AMM ecosystem.
                  </p>
                  <p>
                    By connecting DEXs and lending markets, Avana transforms the deepest liquidity pools in DeFi into
                    collateralized debt positions, turning AMMs from passive trading venues into active credit engines.
                    The infrastructure is now mature enough. The demand has been validated across multiple cycles. The
                    risk models exist to do this safely at scale.
                  </p>
                  <p>
                    Avana&apos;s vision expands over time through pool borrowing and structured leverage, but it begins
                    with a simpler and more important first step. Phase 1 proves that LP positions can be valued,
                    risk-managed, and liquidated safely enough to serve as real collateral. Once that foundation is
                    established, AMM-backed credit will become a meaningful new layer of DeFi lending.
                  </p>
                </div>
              </section>

              <section id="references-and-appendix" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <h3>References & Appendix</h3>
                <div className="mt-5 space-y-5">
                  <p>
                    This section contains governance discussions, historical implementations, research links, prior LP
                    collateral proposals, and extended market context referenced throughout the paper.
                  </p>

                  <h4>Governance Discussions</h4>
                  <ReferenceTable references={governanceReferences} />

                  <h4>Old Implementation</h4>
                  <ReferenceTable references={oldImplementationReferences} />
                </div>
              </section>
            </div>
          </div>

          <ScrollSpySidebar
            sections={sections}
            sectionColor="blue"
          />
        </div>
      </article>
    </section>
  )
}
