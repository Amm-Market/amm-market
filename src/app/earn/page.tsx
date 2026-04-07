import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import ProductFeatureScrollSection from "@/components/product-feature-scroll-section"
import ProductStorySection from "@/components/product-story-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

const bluechipSpokeFaqItems: InlineFaqItem[] = [
  {
    value: "bluechip-1",
    question: "What do I earn by staking AVA?",
    answer:
      "Stakers earn a share of protocol value through AVA emissions and selected protocol fees, including liquidation penalties and other revenue sources approved by governance. Rewards accrue continuously and can be claimed based on the staking design.",
  },
  {
    value: "bluechip-2",
    question: "Is there a lockup period?",
    answer:
      "Staking can be flexible or time locked depending on the final design. Flexible staking allows exit after a short cooldown, while locked staking offers higher reward weight in exchange for a fixed commitment period.",
  },
  {
    value: "bluechip-3",
    question: "What is the risk of staking AVA?",
    answer:
      "The main risk is slashing during a protocol shortfall event, where losses exceed the system’s other protection layers. This is intended as a last resort and is supported by overcollateralization, conservative risk parameters, and controlled liquidation design.",
  },
  {
    value: "bluechip-4",
    question: "How is staking APR determined?",
    answer:
      "Staking APR is based on the total rewards distributed to stakers relative to the total amount staked. As borrowing activity, liquidation volume, and protocol usage grow, the reward pool can grow as well.",
  },
  {
    value: "bluechip-5",
    question: "Can I stake and use the protocol at the same time?",
    answer:
      "Yes. Staking AVA is separate from supplying assets or borrowing against LP positions. You can stake, lend, and borrow at the same time, with each action serving a different role in the protocol.",
  },
]

const earnFeatureItems = [
  {
    title: "Protocol backstop",
    description: "Earn is designed for capital that sits behind the system as a deeper protection layer during stress.",
  },
  {
    title: "Residual shortfall cover",
    description: "The product is framed around qualifying deficits that remain after liquidation has already done its job.",
  },
  {
    title: "Governance rules",
    description: "Coverage scope, recapitalization paths, and response criteria are meant to stay explicit and auditable.",
  },
  {
    title: "Risk-layer alignment",
    description: "Returns are tied to protocol health, making this a stronger alignment product than passive capital supply.",
  },
  {
    title: "Higher-conviction rewards",
    description: "Because the role is deeper in the protection stack, upside is designed for users willing to shoulder more risk.",
  },
] as const

export const metadata: Metadata = {
  title: "Earn - Blue-Chip LP Collateral",
  description: "Avana Earn supports established LP collateral with higher borrowing power and conservative risk settings for major assets.",
}

export default function EarnPage() {
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
                <h1 className="mb-3 max-w-[13ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:max-w-[11ch] md:text-5xl lg:text-5xl xl:text-6xl">
                  <span className="whitespace-nowrap">Backstop protocol</span>
                  <br />
                  <span className="whitespace-nowrap">for higher yield.</span>
                </h1>

                <p className="mb-5 max-w-[34ch] text-base leading-relaxed text-gray-600 sm:max-w-[38ch] md:mb-6 md:text-lg">
                  Backstop Avana in shortfall events, take first-loss risk, and earn the highest rewards for aligned capital.
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
        titleLines={["Share in", "protocol upside."]}
        paragraphs={[
          "Earn is designed around protocol-protection capital rather than LP management. It sits behind conservative valuation, capped exposure, and timely liquidation as a deeper line of defense for qualifying shortfalls.",
          "In that role, returns are tied to system health and governance-defined coverage rules, making it a higher-conviction product for users who want alignment with Avana&apos;s risk layer rather than passive lending alone.",
        ]}
      />

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col">
        <div className="flex-1 flex flex-col relative z-0">
        {/* Rest of page content */}
        <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20">
          {/* Stats */}
          <section className="grid grid-cols-3 gap-4">
            <div className="p-6 bg-amber-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-amber-600">50–77%</p>
              <p className="text-sm text-gray-600">Max LTV (blue-chip)</p>
            </div>
            <div className="p-6 bg-amber-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-amber-600">5%</p>
              <p className="text-sm text-gray-600">IL buffer typical</p>
            </div>
            <div className="p-6 bg-amber-50 rounded-xl text-center">
              <p className="text-3xl font-bold text-amber-600">36+</p>
              <p className="text-sm text-gray-600">Supported pools</p>
            </div>
          </section>

          <ProductFeatureScrollSection
            title="Borrow more on stronger collateral."
            items={earnFeatureItems}
          />

          {/* Supported Dexs */}
          <section>
            <div className="max-w-[650px] mb-8 space-y-3 text-left">
              <SectionEyebrow>DEX Coverage</SectionEyebrow>
              <SectionTitle>Blue-chip LP venues.</SectionTitle>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Uniswap V3", color: "bg-pink-100 text-pink-600" },
                { name: "Uniswap V4", color: "bg-purple-100 text-purple-600" },
                { name: "SushiSwap", color: "bg-blue-100 text-blue-600" },
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
              <SectionEyebrow>Use Cases</SectionEyebrow>
              <SectionTitle>Designed for larger positions.</SectionTitle>
            </div>
            <div className="max-w-[650px] space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Higher Borrowing Power</h3>
                  <p className="text-gray-600 text-sm">Borrow more against blue-chip LP collateral with tiered LTVs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Conservative Risk</h3>
                  <p className="text-gray-600 text-sm">Established assets and oracles reduce volatility and liquidation risk.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Institutional-Ready</h3>
                  <p className="text-gray-600 text-sm">Deep liquidity and transparent risk parameters for larger positions.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <HomepageNewsroomSection collection="earn" />
          </section>

          {/* FAQ */}
          <section>
            <InlineFaqSection title="Frequently asked questions." items={bluechipSpokeFaqItems} />
          </section>
        </div>
      </div>
      </div>
    </main>
  )
}
