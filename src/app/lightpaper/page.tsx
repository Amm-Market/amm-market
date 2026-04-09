import type { Metadata } from "next"
import Link from "next/link"
import { LlmExportMenu } from "@/components/llm-export-menu"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

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
  { id: "conclusion", title: "Conclusion" },
  { id: "references-and-appendix", title: "References & Appendix" },
]

const lightpaperSectionTones = {
  "executive-summary": "violet",
  "protocol-motivation": "rose",
  "protocol-overview": "cyan",
  "protocol-specification": "emerald",
  "protocol-architecture": "violet",
  "spoke-configuration": "amber",
  "risk-management": "rose",
  "position-valuation": "cyan",
  "liquidation-mechanism": "amber",
  "interest-rate": "blue",
  "revenue-model": "emerald",
  "market-opportunity": "violet",
  "conclusion": "rose",
  "references-and-appendix": "slate",
} as const

function LightpaperSectionHeader({
  eyebrow,
  title,
  tone,
}: {
  eyebrow: string
  title: string
  tone: "blue" | "emerald" | "violet" | "amber" | "cyan" | "rose" | "slate"
}) {
  return (
    <div className="space-y-3">
      <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>
      <SectionTitle>{title}</SectionTitle>
    </div>
  )
}

type BorrowerSpoke = {
  spoke: string
  lpPrimitive: string
  collateralPairs: string[]
  borrowAssets: string[]
  emodeCategory?: "stable" | "correlated"
}

const borrowerProtocolGroups = [
  {
    protocol: "Uniswap",
    tvl: "$5.68B",
    markets: [
      {
        spoke: "Uniswap v2 LPs",
        lpPrimitive: "Constant-product LP tokens",
        collateralPairs: ["WETH/USDC", "WBTC/WETH", "WETH/DAI", "WETH/USDT", "WBTC/USDC"],
        borrowAssets: ["USDC", "USDT", "DAI", "WETH", "WBTC"],
      },
      {
        spoke: "Uniswap v3 Stable LPs",
        lpPrimitive: "Concentrated liquidity NFT positions",
        collateralPairs: ["USDC/USDT", "DAI/USDC", "crvUSD/USDC", "EURC/USDC"],
        borrowAssets: ["USDC", "USDT", "DAI", "crvUSD", "GHO"],
        emodeCategory: "stable",
      },
      {
        spoke: "Uniswap v3 Blue-Chip LPs",
        lpPrimitive: "Concentrated liquidity NFT positions",
        collateralPairs: ["WETH/USDC", "WBTC/WETH", "WBTC/USDC", "WETH/USDT", "cbBTC/WETH"],
        borrowAssets: ["USDC", "USDT", "DAI", "WETH", "WBTC"],
      },
      {
        spoke: "Uniswap v3 Governance & DAO LPs",
        lpPrimitive: "Concentrated liquidity NFT positions",
        collateralPairs: ["AAVE/WETH", "UNI/WETH", "CRV/WETH", "LDO/WETH"],
        borrowAssets: ["USDC", "USDT", "DAI", "WETH"],
      },
    ] satisfies BorrowerSpoke[],
  },
  {
    protocol: "Curve",
    tvl: "$1.83B",
    markets: [
      {
        spoke: "Curve Stable LPs",
        lpPrimitive: "StableSwap LP tokens",
        collateralPairs: ["USDC/USDT", "DAI/USDC/USDT", "crvUSD/USDC", "USDe/USDC", "FRAX/USDC"],
        borrowAssets: ["USDC", "USDT", "DAI", "crvUSD", "GHO"],
        emodeCategory: "stable",
      },
      {
        spoke: "Curve Correlated LPs",
        lpPrimitive: "StableSwap LP tokens",
        collateralPairs: ["ETH/stETH", "ETH/wstETH", "rETH/ETH", "cbETH/ETH", "weETH/ETH"],
        borrowAssets: ["ETH", "stETH", "wstETH", "rETH"],
        emodeCategory: "correlated",
      },
      {
        spoke: "Curve Crypto LPs",
        lpPrimitive: "CryptoSwap LP tokens",
        collateralPairs: ["USDT/ETH", "WBTC/ETH", "CRV/ETH", "USDC/WBTC/ETH"],
        borrowAssets: ["USDC", "USDT", "DAI", "WETH", "WBTC"],
      },
    ] satisfies BorrowerSpoke[],
  },
  {
    protocol: "Balancer",
    tvl: "$158.18M",
    markets: [
      {
        spoke: "Balancer Stable LPs",
        lpPrimitive: "Stable / Composable Stable BPT",
        collateralPairs: ["USDC/DAI/USDT", "GHO/USDC", "EURC/USDC", "sDAI/USDC"],
        borrowAssets: ["USDC", "DAI", "USDT", "EURC", "GHO"],
        emodeCategory: "stable",
      },
      {
        spoke: "Balancer Correlated LPs",
        lpPrimitive: "Stable / Composable Stable BPT",
        collateralPairs: ["wstETH/WETH", "rETH/WETH", "cbETH/WETH", "weETH/WETH"],
        borrowAssets: ["WETH", "wstETH", "rETH", "cbETH"],
        emodeCategory: "correlated",
      },
      {
        spoke: "Balancer Weighted LPs",
        lpPrimitive: "Weighted BPT",
        collateralPairs: ["80/20 WETH/AAVE", "80/20 BAL/WETH", "80/20 GNO/WETH", "80/20 AURA/WETH"],
        borrowAssets: ["USDC", "USDT", "DAI", "WETH"],
      },
      {
        spoke: "Balancer Boosted LPs",
        lpPrimitive: "Boosted BPT",
        collateralPairs: ["bb-a-USDC / bb-a-DAI / bb-a-USDT", "sDAI/USDC", "waUSDC/USDC", "waDAI/DAI"],
        borrowAssets: ["USDC", "USDT", "DAI", "GHO"],
      },
      {
        spoke: "Balancer reCLAMM LPs",
        lpPrimitive: "reCLAMM BPT",
        collateralPairs: ["WETH/USDC", "WETH/USDT", "WBTC/WETH"],
        borrowAssets: ["USDC", "USDT", "DAI", "WETH"],
      },
    ] satisfies BorrowerSpoke[],
  },
  {
    protocol: "Aerodrome",
    tvl: "$356.44M",
    markets: [
      {
        spoke: "Aerodrome Basic Stable LPs",
        lpPrimitive: "Stable LP tokens",
        collateralPairs: ["USDC/DAI", "USD+/USDC", "EURC/USDC", "USDC/USDT"],
        borrowAssets: ["USDC", "DAI", "EURC"],
        emodeCategory: "stable",
      },
      {
        spoke: "Aerodrome Basic Volatile LPs",
        lpPrimitive: "Constant-product LP tokens",
        collateralPairs: ["AERO/USDC", "DEGEN/USDC", "BRETT/WETH", "WELL/WETH", "MOG/WETH"],
        borrowAssets: ["USDC", "DAI", "WETH"],
      },
      {
        spoke: "Aerodrome Slipstream Blue-Chip LPs",
        lpPrimitive: "Concentrated liquidity NFT positions",
        collateralPairs: ["WETH/USDC", "cbETH/WETH", "WETH/cbBTC", "cbBTC/USDC"],
        borrowAssets: ["USDC", "DAI", "WETH", "cbBTC"],
      },
    ] satisfies BorrowerSpoke[],
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
    label: "Renew the Avana Assets",
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

function LightpaperBook() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-fit select-none lg:mx-0"
    >
      <div className="relative [perspective:1800px]">
        <div className="relative h-[258px] w-[186px] [transform-style:preserve-3d] [transform:rotateY(-16deg)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[272px] sm:w-[196px] lg:h-[300px] lg:w-[216px] lg:hover:[transform:rotateY(-21deg)_rotateX(4deg)_translateY(-4px)]">
          <div
            aria-hidden="true"
            className="absolute inset-y-[9px] left-[-10px] w-[14px] rounded-l-[12px] bg-zinc-200"
            style={{ transform: "rotateY(72deg)", transformOrigin: "right center" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[24px] border border-black/10 bg-zinc-100"
            style={{ transform: "translate3d(10px, 6px, -6px)" }}
          />
          <div className="absolute inset-0 grid grid-rows-[auto_auto_1fr_auto] rounded-[24px] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#f6f6f3_100%)] px-5 py-5 shadow-[0_24px_54px_rgba(0,0,0,0.14)] lg:px-6 lg:py-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">
              Avana
            </span>

            <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-[16px] bg-gray-950 text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] lg:mt-6 lg:h-16 lg:w-16">
              <div className="grid grid-cols-2 gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#45DEC4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#0070F3]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#414347]" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
              </div>
            </div>

            <div className="mt-5 self-start space-y-1 lg:mt-6">
              <p className="text-[22px] font-semibold leading-[0.94] tracking-[-0.06em] text-gray-950 lg:text-[26px]">
                Lightpaper
              </p>
              <div className="h-px w-10 bg-gray-200" />
              <p className="pt-1 text-[14px] font-medium leading-[1.12] tracking-[-0.03em] text-gray-500 lg:text-[16px]">
                Aave v4 spoke
              </p>
            </div>

            <div className="mt-4 flex items-end justify-between gap-3 self-end">
              <p className="max-w-[7.75rem] text-[10px] leading-4 text-gray-500 lg:max-w-[8.5rem] lg:text-[11px] lg:leading-5">
                LP collateral design for active liquidity.
              </p>
              <span className="rounded-full border border-black/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                2026
              </span>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-y-[9px] right-[-10px] w-[14px] rounded-r-[12px] bg-zinc-200"
            style={{ transform: "rotateY(88deg)", transformOrigin: "left center" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[24px] border border-black/8 bg-zinc-50/90"
            style={{ transform: "translateZ(-10px)" }}
          />
        </div>
        <div className="mx-auto mt-4 h-6 w-32 rounded-full bg-black/10 blur-xl transition-all duration-500 lg:hover:w-36 lg:hover:bg-black/15" />
      </div>
    </div>
  )
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

function AssetChip({ asset, compact = false }: { asset: string; compact?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-gray-300 bg-gray-50 font-medium tracking-[0.01em] text-gray-700 ${
        compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]"
      }`}
    >
      {asset}
    </span>
  )
}

function EModeBadge({ category }: { category: BorrowerSpoke["emodeCategory"] }) {
  if (!category) {
    return null
  }

  return (
    <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-blue-700">
      E-Mode
    </span>
  )
}

function SpokeIdentity({ market }: { market: BorrowerSpoke }) {
  return (
    <div className="space-y-1">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[0.95rem] font-semibold leading-6 text-gray-900">{market.spoke}</p>
        <EModeBadge category={market.emodeCategory} />
      </div>
      <p className="text-[0.8rem] leading-5 text-gray-500">{market.lpPrimitive}</p>
    </div>
  )
}

function MobileSpokeIdentity({ market }: { market: BorrowerSpoke }) {
  return (
    <div className="space-y-1">
      <div className="flex flex-wrap items-center gap-1.5">
        <p className="text-[0.88rem] font-semibold leading-5 text-gray-900">{market.spoke}</p>
        <EModeBadge category={market.emodeCategory} />
      </div>
      <p className="text-[0.74rem] leading-5 text-gray-500">{market.lpPrimitive}</p>
    </div>
  )
}

export default function LightpaperPage() {
  return (
    <>
      <section className="pb-12 md:pb-24">
        <article data-developer-doc-export-root className="site-content-shell lg:max-w-[72rem]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,40rem)_minmax(0,1fr)] lg:gap-20">
            <div className="min-w-0 space-y-12">
              <section className="border-b border-gray-200 pb-10 pt-6 sm:pt-8 lg:pt-10 lg:pb-12">
                <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-6">
                  <div className="order-1 lg:order-2 lg:justify-self-start">
                    <LightpaperBook />
                  </div>
                  <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
                    <h1
                      aria-label="Meet Avana"
                      className="mx-auto max-w-[8ch] text-balance text-[2.6rem] font-[600] leading-[0.92] tracking-[-0.07em] text-gray-950 sm:text-[3.3rem] lg:mx-0 lg:max-w-[10ch] lg:text-[4.25rem]"
                    >
                      <span className="text-gray-950">Meet</span>
                      <br />
                      <span className="text-gray-500">Avana</span>
                    </h1>
                    <div className="flex justify-center lg:justify-start" data-export-skip>
                      <LlmExportMenu />
                    </div>
                  </div>
                </div>
              </section>

              <div className="site-editorial-content max-w-3xl [&_a]:text-blue-600 [&_a]:hover:underline [&_h2]:text-[1.35rem] [&_h2]:font-semibold [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.01em] [&_h2]:text-gray-900 [&_h3]:text-[1rem] [&_h3]:font-medium [&_h3]:leading-[1.35] [&_h3]:tracking-[-0.01em] [&_h3]:text-gray-900 [&_li]:mb-2 [&_li]:text-[0.9375rem] [&_li]:leading-7 [&_p]:text-[1.35rem] [&_p]:font-normal [&_p]:leading-[1.5] [&_p]:tracking-[-0.03em] sm:[&_h2]:text-[1.7rem] sm:[&_h3]:text-[1.08rem] sm:[&_li]:text-[1rem] sm:[&_p]:text-[1.5rem]">
                <div className="space-y-12">
                  <section id="executive-summary" className="scroll-mt-32">
                    <LightpaperSectionHeader eyebrow="Why this matters" title="Executive Summary" tone="violet" />
                    <div className="mt-5 space-y-5">
                      <p className="font-medium text-gray-900">
                        The deepest liquidity in DeFi is productive, but financially trapped.
                      </p>
                      <p>
                        Liquidity providers keep markets functional. They absorb volatility, provide depth, and earn
                        fees in return. Yet the capital inside those positions remains largely unusable from a credit
                        perspective. When an LP needs liquidity, flexibility, or access to capital, the usual solution
                        is still the same: exit the pool, unwind the position, and stop doing the very thing that made
                        the capital productive in the first place.
                      </p>
                      <p>
                        That tradeoff creates one of the largest inefficiencies in decentralized finance. Billions of
                        dollars sit inside AMM positions generating fees, but those same positions generally cannot be
                        used as reliable collateral without forcing the user to withdraw liquidity first. The result is
                        a fragmented system where capital can either earn in the market or support borrowing, but
                        rarely both at once.
                      </p>
                      <ImagePlaceholder label="Executive summary visual" />
                      <p>
                        Avana unlocks that capital. It allows LP positions to be used as borrowable collateral while
                        remaining active in the underlying AMM. A user deposits a supported LP position, Avana
                        evaluates its risk adjusted collateral value using market specific logic, and the user can then
                        borrow against it without closing the position. Liquidity stays in the pool. Trading fees
                        continue to accrue. Capital becomes both productive and borrowable at the same time.
                      </p>
                    </div>
                  </section>

              <section id="protocol-motivation" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <LightpaperSectionHeader eyebrow="Problem setting" title="Protocol Motivation" tone="rose" />
                <div className="mt-5 space-y-5">
                  <p>
                    The idea of using LP positions as borrowable collateral is not new. Previous attempts proved
                    demand but failed to fully solve valuation, liquidation, and risk isolation. Avana exists because
                    those three constraints can now be addressed directly.
                  </p>
                  <p>
                    In 2021, Aave launched its Avana, allowing Uniswap v2 and Balancer LP tokens to be used as
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
                <LightpaperSectionHeader eyebrow="At a glance" title="Protocol Overview" tone="cyan" />
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
                <LightpaperSectionHeader eyebrow="Phase design" title="Protocol Specification" tone="emerald" />
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
                <LightpaperSectionHeader eyebrow="Hub and spoke" title="Protocol Architecture" tone="violet" />
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
                <LightpaperSectionHeader eyebrow="Market design" title="Spoke Configuration" tone="amber" />
                <div className="mt-5 space-y-5">
                  <h3>For Borrowers</h3>
                  <p>
                    Avana Borrow Spokes are organized into specialized LP collateral markets, with each spoke aligned
                    to a specific liquidity primitive or market structure. This allows the protocol to isolate
                    collateral valuation, liquidation logic, and parameter design across different forms of AMM
                    liquidity while still drawing borrowable capital from a shared liquidity layer.
                  </p>
                  <p>
                    That structure matters because not all LP positions behave the same way. Stable pools, correlated
                    asset pools, weighted index pools, and concentrated liquidity positions each introduce different
                    forms of pricing behavior, liquidity depth, liquidation complexity, and downside risk. By
                    separating these markets into dedicated spokes, Avana can support a wide range of LP collateral
                    types without flattening them into a single generic framework.
                  </p>
                  <p>
                    This is how Avana balances breadth with discipline. It can expand support across venues and pool
                    designs while preserving market specific controls over collateral admission, borrowing power, risk
                    limits, and liquidation execution. Borrowers benefit from broader LP support. The protocol benefits
                    from cleaner isolation and more precise risk management.
                  </p>
                  <p className="text-sm text-gray-500">
                    TVL snapshots below are included as quick opportunity markers so investors can see why these LP
                    venues matter for launch sequencing.
                  </p>
                </div>

                <div className="mt-6 space-y-6">
                  {borrowerProtocolGroups.map((group) => (
                    <div
                      key={group.protocol}
                      className="overflow-hidden rounded-xl border border-gray-200/90 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                    >
                      <div className="border-b border-gray-200/90 bg-gray-50/70 px-4 py-4">
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="mb-0 text-[1rem] font-semibold leading-6 text-gray-900 sm:text-[1.05rem]">
                            {group.protocol}
                          </h4>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="text-sm font-medium text-gray-600">{group.tvl} TVL</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 p-4 md:hidden">
                        {group.markets.map((market) => (
                          <article
                            key={`${group.protocol}-${market.spoke}-mobile`}
                            className="rounded-lg border border-gray-200/90 bg-white px-4 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
                          >
                            <MobileSpokeIdentity market={market} />

                            <div className="mt-4 space-y-3.5">
                              <div className="space-y-2 border-t border-gray-100 pt-3">
                                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                                  Collateral
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {market.collateralPairs.map((pair) => (
                                    <AssetChip
                                      key={`${market.spoke}-${pair}-collateral-mobile`}
                                      asset={pair}
                                      compact
                                    />
                                  ))}
                                </div>
                              </div>

                              <div className="space-y-2 border-t border-gray-100 pt-3">
                                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                                  Borrow
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {market.borrowAssets.map((asset) => (
                                    <AssetChip
                                      key={`${market.spoke}-${asset}-borrow-mobile`}
                                      asset={asset}
                                      compact
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>

                      <div className="hidden overflow-x-auto md:block">
                        <table className="min-w-full table-fixed text-left text-sm">
                          <thead className="bg-gray-50">
                            <tr className="text-gray-900">
                              <th className="w-[38%] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                                Spoke
                              </th>
                              <th className="w-[34%] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                                Collateral
                              </th>
                              <th className="w-[28%] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                                Borrow
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {group.markets.map((market, index) => (
                              <tr
                                key={market.spoke}
                                className={`border-t border-gray-200/80 align-top ${index % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                              >
                                <td className="px-5 py-4">
                                  <SpokeIdentity market={market} />
                                </td>
                                <td className="px-5 py-4">
                                  <div className="flex flex-wrap gap-2">
                                    {market.collateralPairs.map((pair) => (
                                      <AssetChip key={`${market.spoke}-${pair}-collateral`} asset={pair} />
                                    ))}
                                  </div>
                                </td>
                                <td className="px-5 py-4">
                                  <div className="flex flex-wrap gap-2">
                                    {market.borrowAssets.map((asset) => (
                                      <AssetChip key={`${market.spoke}-${asset}-borrow`} asset={asset} />
                                    ))}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-5">
                  <p>
                    Together, these 15 borrow spokes enable Avana to support the full spectrum of modern AMM
                    liquidity, from stablecoin pools and liquid staking markets to concentrated liquidity and
                    governance-token ecosystems, positioning Avana as a dedicated lending protocol for AMM liquidity.
                  </p>

                  <h3>For Lenders</h3>
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
                <LightpaperSectionHeader eyebrow="Safety model" title="Risk Management" tone="rose" />
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
                <LightpaperSectionHeader eyebrow="Valuation logic" title="Position Valuation" tone="cyan" />
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

                <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 px-5 py-5 sm:px-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600">Formula</p>
                  <p className="mt-3 font-mono text-[0.95rem] leading-7 text-gray-800 sm:text-[1.05rem]">
                    Borrowable USD = Position USD Value × Lower-Token CF × Pool-Level Risk Factor
                  </p>
                </div>

                <div className="mt-8">
                  <h3>ETH / USDC example</h3>
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
                <LightpaperSectionHeader eyebrow="Failure handling" title="Liquidation Mechanism" tone="amber" />
                <ImagePlaceholder label="Liquidation execution flow" />
                <div className="space-y-5">
                  <p>
                    Liquidation begins when a position&apos;s debt rises above its allowed borrowing capacity. At that
                    point, the system must do more than seize collateral. It must unwind a live AMM position, convert
                    the underlying assets, repay debt, and do so in a way that is both deterministic and economically
                    fair.
                  </p>
                  <p>
                    Avana is designed for that exact flow. Specialized Smart Agents and external liquidators can repay
                    outstanding debt in exchange for a liquidation premium that scales with the severity of the
                    position&apos;s deterioration. Rather than treating liquidation as a blunt asset seizure, the
                    protocol first accounts for value already embedded in the LP position itself. Uncollected trading
                    fees are applied before principal is unwound. If that is not sufficient, the protocol removes the
                    minimum required amount of LP principal necessary to restore solvency and satisfy the liquidation
                    incentive.
                  </p>
                  <p>
                    Once unwound, the underlying assets are routed through approved execution paths to repay the
                    borrowed amount and settle any flashloan based repayment used during the transaction. Execution is
                    designed to avoid destructive routing choices, including unnecessary dependence on the source pool
                    when that would degrade pricing. Any residual value remaining after debt and liquidation costs are
                    covered is returned to the borrower.
                  </p>
                  <p>
                    This matters because LP collateral cannot be liquidated safely with generic lending logic. It
                    requires purpose built execution around fee collection, liquidity removal, asset conversion, and
                    repayment ordering. Avana&apos;s liquidation model is built to handle LP collateral as it actually
                    exists onchain: as active, structured liquidity that must be unwound carefully rather than simply
                    marked down and sold.
                  </p>
                </div>
              </section>

              <section id="interest-rate" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <LightpaperSectionHeader eyebrow="Rate design" title="Interest Rate" tone="blue" />
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
                <LightpaperSectionHeader eyebrow="Business model" title="Revenue Model" tone="emerald" />
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
                <LightpaperSectionHeader eyebrow="Demand picture" title="Market Opportunity" tone="violet" />
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

              <section id="conclusion" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <LightpaperSectionHeader eyebrow="Closing view" title="Conclusion" tone="rose" />
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
                <LightpaperSectionHeader eyebrow="Source notes" title="References & Appendix" tone="slate" />
                <div className="mt-5 space-y-5">
                  <p>
                    This section contains governance discussions, historical implementations, research links, prior LP
                    collateral proposals, and extended market context referenced throughout the paper.
                  </p>

                  <h3>Governance Discussions</h3>
                  <ReferenceTable references={governanceReferences} />

                  <h3>Old Implementation</h3>
                  <ReferenceTable references={oldImplementationReferences} />
                </div>
              </section>

              </div>
              </div>
            </div>

          <div className="hidden self-start xl:block xl:sticky xl:top-28 xl:justify-self-end xl:pt-4">
            <ScrollSpySidebar sections={sections} sectionColor="violet" sectionColorsById={lightpaperSectionTones} />
          </div>
        </div>
      </article>
    </section>
    </>
  )
}
