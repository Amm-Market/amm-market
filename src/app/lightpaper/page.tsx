import type { Metadata } from "next"
import Link from "next/link"
import { LlmExportMenu } from "@/components/llm-export-menu"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

export const metadata: Metadata = {
  title: "Lightpaper",
  description:
    "Avana is an LP-collateral lending protocol that lets users borrow against active liquidity positions while venue-specific spoke markets manage valuation, risk, and liquidation.",
  openGraph: {
    title: "Lightpaper",
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
      <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-white via-cyan-50 to-gray-100 px-6 py-8">
        <div className="mx-auto flex max-w-md flex-col items-center gap-3 px-6 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200 bg-white text-xs font-semibold text-[#01AACF]">
            IMG
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#01AACF]">Placeholder</p>
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
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#01AACF]">
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
              <p className="pt-1 text-[14px] font-medium leading-[1.12] tracking-[-0.03em] text-[#01AACF] lg:text-[16px]">
                Aave v4 spoke
              </p>
            </div>

            <div className="mt-4 flex items-end justify-between gap-3 self-end">
              <p className="max-w-[7.75rem] text-[10px] leading-4 text-[#01AACF] lg:max-w-[8.5rem] lg:text-[11px] lg:leading-5">
                LP collateral design for active liquidity.
              </p>
              <span className="rounded-full border border-black/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#01AACF]">
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
                  className="text-sm font-medium text-[#01AACF] hover:underline"
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

              <div className="site-editorial-content max-w-3xl [&_a]:text-[#01AACF] [&_a]:hover:underline [&_h2]:text-[1.35rem] [&_h2]:font-semibold [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.01em] [&_h2]:text-gray-900 [&_h3]:text-[1rem] [&_h3]:font-medium [&_h3]:leading-[1.35] [&_h3]:tracking-[-0.01em] [&_h3]:text-gray-900 [&_li]:mb-2 [&_li]:text-[0.9375rem] [&_li]:leading-7 [&_p]:text-[1.35rem] [&_p]:font-normal [&_p]:leading-[1.5] [&_p]:tracking-[-0.03em] sm:[&_h2]:text-[1.7rem] sm:[&_h3]:text-[1.08rem] sm:[&_li]:text-[1rem] sm:[&_p]:text-[1.5rem]">
                <div className="space-y-12">
                  <section id="executive-summary" className="scroll-mt-32">
                    <LightpaperSectionHeader eyebrow="Why this matters" title="Executive Summary" tone="violet" />
                    <div className="mt-5 space-y-6 [&_p]:!leading-[1.68] [&_p]:!tracking-[-0.015em]">
                      <p className="font-medium text-gray-900">
                        The deepest liquidity in DeFi is useful, but it is still locked away from credit.
                      </p>
                      <p>
                        Liquidity providers keep markets alive. They put assets into pools, support swaps, reduce
                        slippage, and earn fees. But once capital is inside an AMM pool, it is hard to use that same
                        capital as collateral. If a user needs to borrow, the normal path is still to remove liquidity,
                        exit the pool, and give up the fees and market position they already built.
                      </p>
                      <p>
                        Avana changes this.
                      </p>
                      <ImagePlaceholder label="Executive summary visual" />
                      <p>
                        Avana lets users deposit supported LP positions and borrow against them through Aave v4. The
                        LP position stays in place as the real collateral, while Avana turns it into an internal
                        ERC-20 accounting asset that Aave can use on the borrow side.
                      </p>
                      <p>
                        Avana starts with curated LP markets, so a LINK-ETH position maps to vaultLINKETH, an ETH-DAI
                        position maps to vaultETHDAI, a WETH-USDC position maps to vaultWETHUSDC, and a WBTC-ETH
                        position maps to vaultWBTCETH. Each market is priced, checked, and managed on its own, which
                        keeps the experience simple. The vault token is just the bridge: Avana tracks and values the
                        LP position, the Aave Adapter mints the right token, and Aave uses that token for collateral
                        accounting so the user can borrow without closing the pool position. The LP stays live, the
                        collateral stays organized, and the user gets credit against the value already in the market.
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
                    In 2021, Aave launched its AMM market with Uniswap v2 and Balancer LP tokens as collateral. The
                    model arrived before the surrounding infrastructure was ready. DEX liquidity was thinner, pool
                    design was less mature, and risk frameworks were still too blunt to capture what LP positions
                    actually were.
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
                      className="font-medium text-[#01AACF] hover:underline"
                    >
                      CDPs for Uniswap v4 Positions
                    </Link>
                    . The proposal ended up stalling, and adoption remained constrained by the same unresolved
                    challenges.
                  </p>
                  <p>
                    LP collateral is easier to support now than it was a few years ago. AMMs are more mature,
                    liquidity is deeper, oracles and liquidation systems are better, and there is a lot more data on
                    how LP positions behave across different pairs. Aave v4 fits that setup because its hub-and-spoke
                    design lets LP valuation, risk, and liquidation live inside separate spoke markets instead of
                    forcing everything into one shared model.
                  </p>
                </div>
              </section>

              <section id="protocol-overview" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <LightpaperSectionHeader eyebrow="At a glance" title="Protocol Overview" tone="cyan" />
                <div className="mt-5 space-y-5">
                  <p>
                    Avana is a lending protocol built for LP collateral. Liquidity providers on Uniswap, Balancer,
                    Curve, or Aerodrome can deposit supported positions, keep them active in the pool, and borrow
                    against them through market-specific risk settings.
                  </p>
                  <p>
                    Fluid is the closest comparison, but it takes a different path. Fluid turns debt and collateral
                    into its own liquidity layer. Avana works the other way around: it takes LP positions that already
                    exist across AMMs and makes them usable as collateral without replacing the underlying rails.
                  </p>
                  <p>
                    Avana starts with Borrow Markets, then adds Lend Markets and Multiply Markets later. Each market
                    keeps its own risk settings, so the first version stays focused and the risk model stays easy to
                    tune.
                  </p>
                </div>
              </section>

              <section id="protocol-specification" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <LightpaperSectionHeader eyebrow="Phase design" title="Protocol Specification" tone="emerald" />
                <div className="mt-5 space-y-5">
                  <p>At a high level, Avana works through three steps.</p>
                  <ImagePlaceholder label="Protocol overview flow" />
                  <p>
                    First, a user deposits an LP position into Avana. This can be any pool position from supported
                    AMMs such as Uniswap, Balancer, Curve Finance, or Aerodrome Finance, depending on the phase and
                    supported markets.
                  </p>
                  <p>
                    Second, Avana evaluates the LP position to determine its risk-adjusted collateral value. The
                    protocol checks the value of the underlying pool assets, the structure of the liquidity pool,
                    asset volatility, correlation between the assets in the pair, and overall liquidation risk. Avana
                    relies on LP valuation models, conservative borrowing limits, oracle-based pricing, and automated
                    liquidation mechanisms to ensure that LP positions can function safely as collateral.
                  </p>
                  <p>
                    Third, once the position has been evaluated, the user can borrow assets against it. The liquidity
                    remains active inside the AMM and continues earning trading fees and incentives while also serving
                    as collateral. This allows LPs to access liquidity without withdrawing liquidity from the AMM;
                    the LP position itself becomes the collateral inside Avana.
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
                  <ImagePlaceholder label="Hub and spoke credit-line diagram" />
                  <p>Avana is built around five parts, and each one has a narrow job.</p>
                  <p>
                    The LP Position Manager holds the real position and keeps the book on it. For a Uniswap v3 LP,
                    that means the NFT ID, owner, pool, pair, fee tier, tick range, liquidity, current value, fees
                    still sitting in the position, and whether it is already posted as collateral.
                  </p>
                  <p>
                    The Risk Module is the gatekeeper. It checks whether the pool is approved, whether the assets are
                    supported, whether the position is deep enough, whether the range is still usable, and whether
                    the market is still inside its caps.
                  </p>
                  <p>
                    The Collateralization Module sits between approval and action. It checks the oracle setup, pulls
                    in the latest pricing, values the position, decides how much collateral it can support, and
                    mints the vault token when the position is cleared for borrowing. It also updates or removes that
                    collateral when the market changes or the position leaves the system.
                  </p>
                  <p>
                    The Aave Adapter handles the Aave-facing side of the system. Once the other modules approve a
                    position, it supplies the vault token to Aave v4, withdraws it when collateral is removed, and
                    keeps the integration isolated from the LP-specific logic.
                  </p>
                  <p>
                    Those vault collateral tokens are internal ERC-20 assets like vaultLINKETH, vaultETHDAI,
                    vaultWETHUSDC, and vaultWBTCETH. Each market gets its own token, so the accounting stays simple
                    on the Aave side while Avana keeps the real LP position and market logic behind the scenes.
                  </p>
                </div>
              </section>

              <section id="spoke-configuration" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <LightpaperSectionHeader eyebrow="Market design" title="Spoke Configuration" tone="amber" />
                <div className="mt-5 space-y-5">
                  <h3>For Borrowers</h3>
                  <p>
                    Avana splits borrowing into separate spokes so each LP market gets its own setup. That way,
                    stable pools, correlated pairs, weighted pools, and concentrated liquidity each get the rules they
                    actually need instead of being forced into one generic template.
                  </p>
                  <p>
                    LP positions do not all behave the same. Some are calm and predictable, some move with each
                    other, and some can swing hard when the range gets tight. Keeping them in separate spokes makes
                    the pricing, liquidation, and borrowing rules easier to tune, and it lets Avana support more LP
                    markets without turning everything into the same product. It starts with a focused set of borrow
                    spokes across stable, correlated, volatile, and governance-token LP markets so launch sequencing
                    stays manageable.
                  </p>
                </div>
                <div className="mt-8 space-y-5">
                  <h3>For Lenders</h3>
                  <p>
                    The Lend Spoke is where capital enters the system. Lenders deposit assets like ETH, BTC, and
                    major stablecoins, and that liquidity gets routed through the Hub to support borrowing across
                    the LP markets. They are not managing LP positions or ranges themselves, they are just putting
                    clean capital to work.
                  </p>
                  <p>
                    Early on, Avana may lean on Aave Hub credit lines to bootstrap depth and make sure borrow markets
                    feel liquid from day one. As the protocol grows, lender deposits should carry more of the load,
                    which keeps the system simpler, reduces dependence on outside credit, and lets borrowing grow
                    from its own base.
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
                    Borrowing power is granted only when both pricing sources stay within a defined tolerance band,
                    which keeps external oracle data and AMM-derived pricing in agreement and reduces exposure to
                    flash-loan manipulation, transient price distortions, or stale updates that could otherwise lead
                    to bad collateral valuation. Once the vault token is supplied to Aave, its market settings add
                    another layer of control by setting the LTV, liquidation threshold, liquidation bonus, caps, and
                    health-factor checks for that reserve.
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
                    liquidity depth, and oracle reliability so the market can stay aligned with the position instead
                    of relying on a fixed setting that never changes.
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
                    Position Valuation has two sides. First, Avana values the LP collateral itself, applies pool
                    risk, and mints the vault token against that approved value. Then Aave v4 applies its reserve
                    rules and risk premium to the vault token to decide how much the user can borrow.
                  </p>
                  <p>
                    For each LP position, Avana reads the position data and derives the token amounts from the
                    liquidity and tick range. Those balances are priced in USD using Chainlink feeds and verified
                    against AMM TWAPs, then Avana applies a pool risk factor so the collateral value reflects the
                    actual market conditions inside that LP market.
                  </p>
                  <p>
                    That approved value becomes the backing for an internal ERC-20 vault token. Each market gets its
                    own token, such as vaultLINKETH, vaultETHDAI, vaultWETHUSDC, or vaultWBTCETH, and the supply
                    moves with the value of the collateral behind it instead of sitting on a fixed 1:1 peg.
                  </p>
                  <p>
                    Once the vault token is supplied, Aave v4 handles the borrow side. It applies that market&apos;s
                    LTV, liquidation threshold, liquidation bonus, caps, health-factor checks, and risk premium to
                    the ERC-20 reserve inside the Spoke.
                  </p>
                </div>
              </section>

              <section id="liquidation-mechanism" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <LightpaperSectionHeader eyebrow="Failure handling" title="Liquidation Mechanism" tone="amber" />
                <ImagePlaceholder label="Liquidation execution flow" />
                <div className="space-y-5">
                  <p>
                    Liquidation starts when the account&apos;s health factor falls below the liquidation threshold.
                    A liquidator repays the allowed debt amount, and Aave v4&apos;s liquidation engine uses that
                    repayment to reduce or clear the borrow balance on the reserve side.
                  </p>
                  <p>
                    Once that happens, the vault collateral is released from the reserve side of Aave v4&apos;s
                    market. The Avana Adapter burns the vault token, and the Liquidation Module marks the backing LP
                    position as liquidated so the original collateral is no longer active.
                  </p>
                  <p>
                    From there, the Liquidation Module takes over the LP side. It unwinds, sells, or transfers the
                    backing position depending on what makes the most sense for that market and route. The debt gets
                    covered, the liquidator gets paid, and any surplus is returned by the final design.
                  </p>
                </div>
              </section>

              <section id="interest-rate" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <LightpaperSectionHeader eyebrow="Rate design" title="Interest Rate" tone="blue" />
                <div className="mt-6 space-y-5">
                  <p>
                    Borrow rates in Avana start with the Aave v4 Hub base rate, then add a spoke-level premium for the
                    LP market itself. That keeps the pricing tied to the shared liquidity base while still letting each
                    market carry its own risk cost.
                  </p>
                  <p>
                    As an example, an ETH/USDC LP position may carry a total borrow rate of 3.0%, built from a 2.0%
                    Hub base rate and a 1.0% spoke premium. A more volatile pair such as UNI/ETH would carry a higher
                    spoke premium, so the user sees a higher total borrow rate under the same Hub conditions. Rates
                    stay predictable, but they still move with risk.
                  </p>
                  <p>
                    The initial set of collateral pools is intentionally narrow so the first markets are the ones with
                    the deepest liquidity and the cleanest pricing. That keeps launch risk contained without losing the
                    path to broader coverage later.
                  </p>
                </div>
              </section>

              <section id="revenue-model" className="scroll-mt-32 border-t border-gray-200 pt-12">
                <LightpaperSectionHeader eyebrow="Business model" title="Revenue Model" tone="emerald" />
                <div className="mt-5 space-y-5">
                  <p>Avana earns from two sources.</p>
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
                <div className="mt-6 space-y-5">
                  <p>
                    LP collateral already sits onchain as productive capital. The opportunity is to let that capital
                    back borrowing instead of forcing users to exit their positions first. Across Ethereum,
                    Arbitrum, and Base, that creates a large LP-collateral surface area that can grow as more AMM
                    liquidity moves into organized borrowing markets.
                  </p>
                  <p>
                    The table below is directional. It uses simple assumptions to show how borrow demand, collateral
                    depth, and protocol revenue can scale together as LP markets mature.
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
                    The point is simple: borrow demand follows liquidity, and LP liquidity becomes more useful when it
                    can support credit without leaving the pool. Aave captures the borrow side, and Avana captures the
                    LP-collateral layer that makes that borrowing possible.
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
