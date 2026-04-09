import type { Metadata } from "next"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Droplets, Scale, ShieldCheck } from "lucide-react"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import PlatformFinancingCarouselSection from "@/components/platform-financing-carousel-section"
import PlatformSafetyCarouselSection from "@/components/platform-safety-carousel-section"
import PlatformToolsShowcaseSection from "@/components/platform-tools-showcase-section"
import PlatformWhyAvanaHighlights from "@/components/platform-why-avana-highlights"
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

const safetyFeatures = [
  {
    title: "Safe Zone",
    description:
      "Health Factor > 1.5. Borrow usage is well within capacity, fees keep accruing, and the position stays intact.",
  },
  {
    title: "Warning Zone",
    description:
      "Health Factor 1.0-1.5. The app notifies you so you can repay debt, add collateral, or let automation reduce exposure.",
  },
  {
    title: "Liquidation",
    description:
      "Health Factor < 1.0. Fees are applied first, only the LP principal needed is unwound, and residual value is returned in the same transaction.",
  },
] as const

const platformWorkflowHighlights = [
  {
    title: "Pool-level borrowing power",
    description:
      "See loan-to-value, health thresholds, and remaining capacity before you borrow.",
    accent: "bg-violet-100/80 text-violet-600",
    icon: Scale,
  },
  {
    title: "Stay in the pool",
    description:
      "Borrow against active LP positions while fees keep accruing.",
    accent: "bg-sky-100/80 text-sky-600",
    icon: Droplets,
  },
  {
    title: "Automation when needed",
    description:
      "Use Auto-Repay and target-based actions to help protect position health.",
    accent: "bg-emerald-100/80 text-emerald-600",
    icon: ShieldCheck,
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
  icon: LucideIcon
}) {
  const Icon = icon

  return (
    <article className="flex flex-col gap-3 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:gap-4">
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] ${accent}`}>
        <Icon className="h-5 w-5" strokeWidth={1.9} />
      </div>

      <div>
        <h3 className="text-base font-semibold leading-6 text-offBlack sm:text-lg">
          {title}
        </h3>
        <p className="mt-1.5 max-w-[38rem] text-sm leading-relaxed text-gray-600 sm:mt-2 sm:text-base">
          {description}
        </p>
      </div>
    </article>
  )
}

const advancedStats = [
  {
    title: "Live position intelligence",
    description: "Track health, debt, rewards, and exposure in real time from one clear interface.",
  },
  {
    title: "Automation with guardrails",
    description: "Use alerts and auto-repay tools without giving up control over how positions are managed.",
  },
  {
    title: "Fast, unified execution",
    description: "Move from monitoring to action in one workflow instead of stitching together multiple tools.",
  },
  {
    title: "Built for active LPs",
    description: "Designed around real AMM positions so borrowing, risk, and management stay easy to understand.",
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
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,36rem)_minmax(0,1fr)] lg:gap-14">
                <div className="max-w-[36rem] space-y-4">
                  <div className="space-y-3 text-left">
                    <SectionEyebrow tone="violet">How it works</SectionEyebrow>
                    <SectionTitle className="max-w-none text-[clamp(2.4rem,4.2vw,4rem)] leading-[0.98] lg:text-[3.25rem] lg:whitespace-nowrap">
                      LP borrowing, simplified.
                    </SectionTitle>
                  </div>

                  <p className="max-w-none text-[1.02rem] leading-[1.72] text-[#5f6f84] md:text-[1.08rem]">
                    Deposit LP positions, see your borrowing power, and unlock liquidity while
                    fees keep accruing. Limits, health, and automation stay in one place.
                  </p>
                </div>

                <div className="divide-y divide-gray-200">
                  {platformWorkflowHighlights.map((item) => (
                    <WorkflowHighlightRow key={item.title} {...item} />
                  ))}
                </div>
              </div>
            </section>

            <section>
              <PlatformToolsShowcaseSection />
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
              <PlatformSafetyCarouselSection
                eyebrow="Position Safety"
                eyebrowTone="violet"
                title="Know exactly what happens before it happens."
                items={safetyFeatures}
              />
            </section>

            <section className="w-full">
              <div className="space-y-6">
                <div className="max-w-[650px] space-y-3 text-left">
                  <SectionEyebrow tone="violet">Why Avana</SectionEyebrow>
                  <SectionTitle>Built to manage serious positions.</SectionTitle>
                </div>

                <div className="relative hidden overflow-hidden rounded-[28px] border border-gray-200 bg-[linear-gradient(145deg,#f8fafc_0%,#eef4ff_45%,#f8fafc_100%)] md:block">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_75%_18%,rgba(14,165,233,0.12),transparent_24%)]" />
                  <div className="relative aspect-[1600/760] w-full">
                    <Image
                      alt="Built to manage serious positions."
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
                <div className="site-content-shell pt-6 pb-2 lg:pt-8 lg:pb-6">
                  <PlatformWhyAvanaHighlights items={advancedStats} />
                </div>
              </div>
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
