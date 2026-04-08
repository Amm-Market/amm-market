import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import ProductFeatureScrollSection from "@/components/product-feature-scroll-section"
import ProductStorySection from "@/components/product-story-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

const stableSpokeFaqItems: InlineFaqItem[] = [
  {
    value: "stable-1",
    question: "Is my capital safe?",
    answer:
      "All loans are overcollateralized, and borrowers must remain above the required health threshold. If a position becomes unsafe, liquidation begins automatically through a controlled process designed to protect lender capital and contain losses within that market.",
  },
  {
    value: "stable-2",
    question: "Where does my yield come from?",
    answer:
      "Your yield comes from interest paid by LP backed borrowers. Rates are driven by base utilization at the Aave v4 Hub, with additional Spoke premiums reflecting the risk profile of the LP collateral being funded.",
  },
  {
    value: "stable-3",
    question: "How is this different from supplying to Aave directly?",
    answer:
      "Avana is built on Aave v4 and uses its Hub for liquidity, but it serves a different borrower class. Instead of standard token collateral, Avana enables LP positions as collateral, which creates new borrowing demand and expands yield opportunities for suppliers.",
  },
  {
    value: "stable-4",
    question: "Can I withdraw at any time?",
    answer:
      "Yes, as long as there is sufficient available liquidity in the market. There are no lockups. If utilization is very high, withdrawals may depend on repayments or new liquidity entering the system.",
  },
  {
    value: "stable-5",
    question: "What assets can I supply?",
    answer:
      "At launch, supported assets include GHO, USDC, USDT, ETH, and WBTC, with additional assets added through governance over time. New listings prioritize liquidity depth, reliable oracle support, and strong market demand.",
  },
  {
    value: "stable-6",
    question: "Why can yields be higher than standard lending markets?",
    answer:
      "Avana adds LP specific borrower demand on top of the shared Hub liquidity layer. That demand can increase utilization and support an additional risk premium, which gives suppliers access to yield that standard lending markets may not capture.",
  },
]

const investFeatureItems = [
  {
    title: "Capital entry point",
    description: "Invest collects lender deposits so credit can be routed into LP-backed borrower markets through one spoke.",
  },
  {
    title: "Hub liquidity routing",
    description: "Deposited assets move through the Hub, where capital can serve multiple LP-collateral markets at once.",
  },
  {
    title: "LP-backed demand",
    description: "Yield is sourced from real borrowing activity against productive AMM collateral rather than idle reserves.",
  },
  {
    title: "No LP management",
    description: "Suppliers can earn from the credit layer without managing ranges, pool composition, or impermanent loss.",
  },
  {
    title: "Flexible withdrawals",
    description: "Capital stays easier to rotate, with deposits designed to remain usable as new opportunities appear.",
  },
] as const

export const metadata: Metadata = {
  title: "Invest - Stablecoin LP Collateral",
  description: "Avana Invest is built around stable LP collateral with the protocol's highest efficiency and lowest-risk borrowing profile.",
}

export default function InvestPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 sm:px-6 md:px-8 pt-10 sm:pt-12 md:pt-20">
        <div className="flex-1 flex flex-col relative z-0">
        {/* Hero Section - Exact same structure as home (hero-section.tsx) */}
          <section className="pb-4 md:pb-6">
          <div className="mx-auto w-full pt-3 pb-6 md:pt-5 md:pb-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 lg:min-h-[400px] xl:min-h-[450px]">
              {/* Left Column - Hero Image */}
              <div className="order-2 mb-8 w-full lg:mb-0 lg:w-[55%]">
                <div className="relative w-full max-w-none lg:max-w-[650px] xl:max-w-[700px] mx-auto lg:mx-0">
                  <Image
                    src="/images/Hero__4_.png"
                    alt="App interface"
                    width={1400}
                    height={1400}
                    className="w-full h-auto rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
                    priority
                    fetchPriority="high"
                  />
                </div>
              </div>

              {/* Right Column - Text Content */}
              <div className="order-1 mb-8 w-full text-left lg:order-2 lg:mb-0 lg:w-[45%]">
                <h1 className="mb-3 max-w-[11ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:text-5xl lg:text-5xl xl:text-6xl">
                  <span className="lg:whitespace-nowrap">Put idle capital</span>
                  <br />
                  <span className="lg:whitespace-nowrap">to work harder.</span>
                </h1>

                <p className="mb-5 max-w-[34ch] text-base leading-relaxed text-gray-600 sm:max-w-[38ch] md:mb-6 md:text-lg">
                  Lend single assets to LP borrowers, earn demand-driven yield, and stay ready to rotate into new opportunities.
                </p>

                <div className="flex max-w-md flex-row flex-wrap items-start gap-2 sm:gap-3">
                  <Link
                    href="/faq"
                    prefetch={false}
                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold rounded-full transition-colors"
                  >
                    Get Early Access
                  </Link>
                  <Link
                    href="/developers"
                    prefetch={false}
                    className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-900 text-xs font-semibold rounded-full transition-colors"
                  >
                    View Docs
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </section>
        </div>
      </div>

      <ProductStorySection
        withTopDivider
        eyebrowTone="emerald"
        titleLines={["Put your idle capital", "ready to work."]}
        paragraphs={[
          "Invest is the capital-entry side of Avana. Suppliers deposit major assets into the Invest Spoke, and that liquidity is routed through the Hub to power borrowing across multiple LP-collateral markets.",
          "That keeps lending simple for depositors: they can earn from LP-backed credit demand without managing impermanent loss, liquidity ranges, or the collateral logic handled inside Borrow Spokes.",
        ]}
      />

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col">
        <div className="flex-1 flex flex-col relative z-0">
        {/* Rest of page content */}
        <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20">
          {/* Stats */}
          <section className="grid grid-cols-3 gap-4">
            <div className="p-6 bg-emerald-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-emerald-600">0.01%</p>
              <p className="text-sm text-gray-600">Swap Fee</p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-emerald-600">&lt;0.1%</p>
              <p className="text-sm text-gray-600">Slippage</p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-emerald-600">99.9%</p>
              <p className="text-sm text-gray-600">Capital Efficiency</p>
            </div>
          </section>

          <ProductFeatureScrollSection
            eyebrowTone="emerald"
            title="Stable LPs, stronger terms."
            items={investFeatureItems}
          />

          {/* Supported Dexs */}
          <section>
            <div className="max-w-[650px] mb-8 space-y-3 text-left">
              <SectionEyebrow tone="emerald">DEX Coverage</SectionEyebrow>
              <SectionTitle>Stable liquidity venues.</SectionTitle>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Uniswap V3", color: "bg-pink-100 text-pink-600" },
                { name: "Curve", color: "bg-yellow-100 text-yellow-600" },
                { name: "Balancer", color: "bg-gray-100 text-gray-600" },
              ].map((dex) => (
                <div key={dex.name} className="p-4 border border-gray-200 rounded-xl text-center">
                  <div className={`w-12 h-12 ${dex.color} rounded-full mx-auto mb-2 flex items-center justify-center`}>
                    <span className="text-sm font-bold">{dex.name.slice(0, 2)}</span>
                  </div>
                  <p className="font-medium text-gray-900">{dex.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <div className="max-w-[650px] mb-8 space-y-3 text-left">
              <SectionEyebrow tone="emerald">Use Cases</SectionEyebrow>
              <SectionTitle>Built for steady capital flows.</SectionTitle>
            </div>
            <div className="max-w-[650px] space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Large Volume Swaps</h3>
                  <p className="text-gray-600 text-sm">Execute million-dollar stablecoin swaps with minimal slippage.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Treasury Management</h3>
                  <p className="text-gray-600 text-sm">DAOs and protocols can efficiently manage stablecoin reserves.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Yield Optimization</h3>
                  <p className="text-gray-600 text-sm">LPs earn consistent fees from high-volume stable trading.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <HomepageNewsroomSection collection="invest" eyebrowTone="emerald" />
          </section>

          {/* FAQ */}
          <section>
            <InlineFaqSection title="Frequently asked questions." items={stableSpokeFaqItems} eyebrowTone="emerald" />
          </section>
        </div>
      </div>
      </div>
    </main>
  )
}
