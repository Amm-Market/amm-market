import type { Metadata } from "next"
import Image from "next/image"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import PlatformFinancingCarouselSection from "@/components/platform-financing-carousel-section"
import PlatformToolsShowcaseSection from "@/components/platform-tools-showcase-section"
import ProductStorySection from "@/components/product-story-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

export const metadata: Metadata = {
  title: "Platform - Avana",
  description:
    "Explore the Avana platform for LP-backed borrowing, financing workflows, monitoring, and advanced LP management.",
}

const platformFaqItems: InlineFaqItem[] = [
  {
    value: "platform-1",
    question: "Which wallets are supported?",
    answer:
      "Avana supports major EVM wallets including MetaMask, Coinbase Wallet, WalletConnect compatible wallets, and hardware wallets connected through WalletConnect. Any wallet that can sign EVM transactions can use the app.",
  },
  {
    value: "platform-2",
    question: "Which chains does the app support?",
    answer:
      "Ethereum mainnet is supported at launch. Additional deployments such as Base and Arbitrum can be added in later phases, with multi chain position management exposed through a unified interface once live.",
  },
  {
    value: "platform-3",
    question: "How do automation tools work?",
    answer:
      "The app lets users configure automated actions around position health, leverage, and price levels. These rules can reduce leverage, increase leverage, repay debt, or fully close a position when predefined conditions are reached.",
  },
  {
    value: "platform-4",
    question: "Can I use the protocol without the official interface?",
    answer:
      "Yes. Avana is permissionless and open source, so users and developers can interact directly with the smart contracts or build their own interface. The official app is the main interface, but it is not the only access point.",
  },
  {
    value: "platform-5",
    question: "Are there fees for using the app?",
    answer:
      "The official interface may include an optional frontend fee. This does not change the underlying borrow or supply rates and can be avoided by using a self hosted interface or interacting directly with the protocol.",
  },
]

const financingFeatures = [
  {
    title: "Flexible settlement",
    description: "Deploy a single line of credit to access liquidity across multiple venues.",
  },
  {
    title: "Unlock capital efficiency",
    description:
      "Borrow against assets in custody for leverage, shorting, and bespoke financing strategies.",
  },
  {
    title: "Retain control",
    description: "Pledge assets in your custody vault as collateral to minimize counterparty risk.",
  },
  {
    title: "Earn while you borrow",
    description:
      "Generate yield on pledged assets, with distributions credited directly into your vault.",
  },
]

const platformWorkflowHighlights = [
  {
    title: "Pool-specific borrowing limits.",
    description:
      "Review loan-to-value ratios, health thresholds, and borrowing capacity for each LP position before you open or expand credit.",
    accent: "bg-violet-100 text-violet-600",
    icon: (
      <>
        <path d="M12 3v18M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
      </>
    ),
  },
  {
    title: "Stay deployed in the pool.",
    description:
      "Deposit active LP positions, unlock liquidity instantly, and keep your fee-earning exposure intact instead of unwinding to access capital.",
    accent: "bg-sky-100 text-sky-600",
    icon: (
      <>
        <path d="M7 17 17 7" />
        <path d="M9 7h8v8" />
      </>
    ),
  },
  {
    title: "Automation tools when you need them.",
    description:
      "Configure Auto-Repay, target-price actions, and automated payback safeguards so positions can react to market moves even when you are away.",
    accent: "bg-amber-100 text-amber-600",
    icon: (
      <>
        <path d="M12 21s7-3.6 7-9.2V5.8L12 3 5 5.8v6c0 5.6 7 9.2 7 9.2Z" />
        <path d="M10 12h4" />
        <path d="M12 10v4" />
      </>
    ),
  },
] as const

function WorkflowHighlightRow({
  title,
  description,
  accent,
  icon,
}: {
  title: string
  description: string
  accent: string
  icon: React.ReactNode
}) {
  return (
    <article className="flex flex-col gap-4 py-6 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:gap-5">
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${accent}`}>
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </div>

      <div className="space-y-3">
        <h3 className="text-[1.1rem] font-semibold leading-[1.3] tracking-[-0.02em] text-[#111111]">
          {title}
        </h3>
        <p className="max-w-[38rem] text-[1rem] leading-[1.65] tracking-[-0.02em] text-[#5b6571]">
          {description}
        </p>
      </div>
    </article>
  )
}

const advancedStats = [
  {
    title: "Real-time monitoring",
    description: "Instant position updates and health tracking across all your LPs.",
  },
  {
    title: "Competitive rates",
    description: "Low borrowing fees and minimal protocol costs for more efficient capital access.",
  },
  {
    title: "Deep liquidity",
    description: "Access liquidity across 50+ supported pools for tighter spreads and better execution.",
  },
  {
    title: "Pro-grade reliability",
    description: "High uptime with automated risk management and MEV-aware execution paths.",
  },
]

export default function PlatformPage() {
  return (
    <main className="bg-white">
      <section className="bg-white pt-10 pb-8 md:pt-14 md:pb-10 lg:pt-16">
        <div className="px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="mx-auto w-full max-w-[90rem] space-y-10 md:space-y-12 lg:space-y-14">
              <div className="pt-20 md:pt-28 lg:pt-32">
                <h1 className="text-left text-[clamp(2.4rem,5.8vw,4.3rem)] font-normal leading-[0.98] tracking-[-0.065em] text-[#111111]">
                  <span className="block whitespace-nowrap">One platform for every</span>
                  <span className="block whitespace-nowrap">Amm Markets needs</span>
                </h1>
              </div>

              <section className="opacity-100 [transform:perspective(1200px)]">
                <div className="relative overflow-hidden rounded-[18px] bg-[#f4f1ea] md:rounded-[22px] lg:rounded-[24px]">
                  <div className="relative aspect-square w-full md:aspect-[1360/640]">
                    <img
                      src="https://framerusercontent.com/images/wHZUVowhaR4lNZZRsYJJW7ik9M.jpg?scale-down-to=1024&width=8368&height=5584"
                      alt="Two people are sitting in the office, discussing the upcoming project."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-white/0 to-white/55 blur-2xl md:h-20 lg:h-24" />
                </div>
              </section>
          </div>
        </div>
      </section>

      <ProductStorySection
        eyebrow="Avana Webapp"
        eyebrowTone="violet"
        titleLines={["Full protocol access,", "made intuitive."]}
        paragraphs={[
          "The Avana Webapp brings the full protocol experience into a simple, intuitive interface. Users can deposit LP positions, see pool-specific borrowing limits, and unlock liquidity instantly, all without leaving their positions or sacrificing earned fees. Each pool’s loan-to-value ratios and risk parameters are clearly presented, giving users real-time visibility and control.",
        ]}
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="relative z-0 flex flex-1 flex-col">
          <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20">
            <section>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,31rem)_minmax(0,1fr)] lg:gap-16">
                <div className="max-w-[32rem] space-y-6">
                  <div className="space-y-3 text-left">
                    <SectionEyebrow tone="violet">How it works</SectionEyebrow>
                    <SectionTitle>LP borrowing, simplified.</SectionTitle>
                  </div>

                  <p className="text-[1.08rem] leading-[1.65] tracking-[-0.02em] text-[#5b6571] lg:text-[1.15rem]">
                    The Avana Webapp makes LP-backed borrowing feel straightforward. Deposit your
                    position, review pool-aware risk settings, and unlock liquidity without leaving
                    the strategy that is already earning fees.
                  </p>

                  <p className="text-[1rem] leading-[1.7] tracking-[-0.02em] text-[#6b7280]">
                    Every step is surfaced inside one interface, from borrowing limits and live
                    health metrics to optional automation controls that help protect positions when
                    markets move quickly.
                  </p>
                </div>

                <div className="divide-y divide-gray-200">
                  {platformWorkflowHighlights.map((item) => (
                    <WorkflowHighlightRow key={item.title} {...item} />
                  ))}
                </div>
              </div>
            </section>

            <section className="w-full">
              <div className="space-y-8">
                <div className="max-w-[650px] space-y-3 text-left">
                  <SectionEyebrow tone="violet">Advanced LP Management</SectionEyebrow>
                  <SectionTitle>Power meets precision</SectionTitle>
                  <p className="max-w-[38rem] text-[1.05rem] leading-7 text-gray-600">
                    Manage positions with institutional-grade tools and deeper liquidity
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-[linear-gradient(145deg,#f8fafc_0%,#eef4ff_45%,#f8fafc_100%)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_75%_18%,rgba(14,165,233,0.12),transparent_24%)]" />
                  <div className="relative aspect-[1600/760] w-full">
                    <Image
                      alt="Power meets precision"
                      className="object-fill"
                      fill
                      loading="lazy"
                      sizes="100vw"
                      src="/images/homepage.png"
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col bg-white">
                <div className="site-content-shell py-8 lg:py-16">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-8">
                    {advancedStats.map((stat) => (
                      <div key={stat.title} className="flex flex-col gap-4 pt-4">
                        <p className="text-[17px] font-semibold leading-normal tracking-[-0.01em] text-gray-900 lg:text-[19px]">
                          {stat.title}
                        </p>
                        <p className="text-[15px] font-normal leading-[1.6] text-gray-600 lg:text-[16px]">
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <PlatformFinancingCarouselSection
                eyebrow="Financing"
                eyebrowTone="violet"
                title="Flexible capital, one interface."
                items={financingFeatures}
              />
            </section>

            <section>
              <PlatformToolsShowcaseSection />
            </section>

            <HomepageNewsroomSection collection="platform" eyebrowTone="violet" />

            <div className="pb-16 md:pb-24">
              <InlineFaqSection
                title="Frequently asked questions."
                items={platformFaqItems}
                eyebrowTone="violet"
                withTopBorder={false}
                layout="homepage"
              />
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
