import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Gauge, LockKeyhole, MoveRight, BadgePercent } from "lucide-react"
import BusinessLiquidatorsShowcaseSection from "@/components/business-liquidators-showcase"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import ProductStorySection from "@/components/product-story-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

export const metadata: Metadata = {
  title: `Liquidators - ${SITE_NAME}`,
  description:
    "Run LP liquidation bots and execution desks for Avana, unwind complex positions, and earn liquidation fees from specialized coverage.",
  alternates: {
    canonical: siteRoutes.liquidators,
  },
  openGraph: {
    title: `Liquidators - ${SITE_NAME}`,
    description:
      "Run LP liquidation bots and execution desks for Avana, unwind complex positions, and earn liquidation fees from specialized coverage.",
    url: siteRoutes.liquidators,
    images: [
      {
        url: buildOgImagePath({
          title: `Liquidators - ${SITE_NAME}`,
          subtitle: "Unwind LP collateral and earn liquidation fees",
        }),
        alt: `Liquidators - ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Liquidators - ${SITE_NAME}`,
    description:
      "Run LP liquidation bots and execution desks for Avana, unwind complex positions, and earn liquidation fees from specialized coverage.",
    images: [
      buildOgImagePath({
        title: `Liquidators - ${SITE_NAME}`,
        subtitle: "Unwind LP collateral and earn liquidation fees",
      }),
    ],
  },
  keywords: [
    "liquidators",
    "LP liquidation",
    "liquidation bot",
    "keeper infra",
    "Avana",
    "liquidation premium",
    "execution desk",
  ],
}

const liquidationFeatures = [
  {
    title: "Continuous monitoring",
    description:
      "Track health factor, collateral composition, and price drift so you can act before positions get difficult.",
  },
  {
    title: "LP unwind logic",
    description:
      "Reconstruct the LP, split the legs, and unwind each side instead of treating the position like a single token.",
  },
  {
    title: "Route-aware execution",
    description:
      "Use the best available venues and routing paths to sell, swap, and repay with minimal friction.",
  },
  {
    title: "Liquidation premium",
    description:
      "Capture the incentive for successful liquidations while supplying the coverage the protocol needs.",
  },
] as const

const liquidationFaqItems: InlineFaqItem[] = [
  {
    value: "liq-1",
    question: "Why is LP liquidation harder than token liquidation?",
    answer:
      "Because the collateral is not one asset. A liquidator has to reconstruct the LP position, separate the underlying legs, route the exits, and settle the debt in the right order.",
  },
  {
    value: "liq-2",
    question: "Who runs liquidations on Avana?",
    answer:
      "Permissionless bots, keepers, and larger execution desks can run the flow. The protocol benefits when multiple operators are watching the same unhealthy positions and can compete on speed and execution quality.",
  },
  {
    value: "liq-3",
    question: "How do liquidators make money?",
    answer:
      "Successful liquidations pay an incentive or premium. Operators who can unwind LP positions efficiently can earn fees while helping the protocol stay healthy.",
  },
  {
    value: "liq-4",
    question: "Do liquidators need flash liquidity?",
    answer:
      "Often, yes. LP liquidation is usually an atomic unwind problem, so execution desks may need temporary liquidity to repay debt before the recovered assets are sold and settled.",
  },
  {
    value: "liq-5",
    question: "Can a general-purpose bot handle this?",
    answer:
      "A generic bot can help with monitoring, but LP collateral has enough unwind complexity that specialized routing, venue selection, and settlement logic usually matter a lot.",
  },
]

const liquidationModelCards = [
  {
    icon: Gauge,
    title: "Find the trigger",
    description: "Spot the change that makes the position eligible for liquidation.",
  },
  {
    icon: LockKeyhole,
    title: "Split the LP",
    description: "Turn the position back into the assets that can be moved.",
  },
  {
    icon: MoveRight,
    title: "Move the proceeds",
    description: "Use the best route to sell the recovery and repay the debt.",
  },
  {
    icon: BadgePercent,
    title: "Take the reward",
    description: "A clean unwind leaves the liquidation incentive on the table.",
  },
  {
    icon: MoveRight,
    title: "Reset the book",
    description: "Free up capital so the desk can handle the next position.",
  },
] as const

export default function LiquidatorsPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 pt-10 sm:px-6 sm:pt-12 md:px-8 md:pt-20 lg:max-w-[64rem] 2xl:max-w-[72rem] lg:min-h-0 lg:px-0">
        <div className="relative z-0">
          <section className="pb-4 md:pb-6 lg:pb-8 xl:pb-10">
            <div className="w-full pt-3 pb-6 md:pt-5 md:pb-10 lg:pb-2 xl:pb-3">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
                <div className="order-2 mb-8 w-full lg:mb-0 lg:w-[55%]">
                  <div className="relative mx-auto w-full max-w-none lg:mx-0 lg:max-w-[650px] xl:max-w-[700px]">
                    <Image
                      src="/images/Hero__4_.png"
                      alt="Liquidator workflow visual"
                      width={1400}
                      height={1400}
                      className="w-full h-auto rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
                      sizes="(max-width: 1024px) calc(100vw - 40px), 700px"
                      priority
                      fetchPriority="high"
                    />
                  </div>
                </div>

                <div className="order-1 mb-8 w-full text-left lg:order-2 lg:mb-0 lg:w-[45%]">
                  <h1 className="mb-3 max-w-[11ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:max-w-[11ch] md:text-5xl lg:text-5xl xl:text-6xl">
                    <span>Liquidate</span>
                    <br />
                    <span>LP positions.</span>
                  </h1>

                  <p className="mb-5 max-w-[34ch] text-base leading-relaxed text-gray-600 sm:max-w-[38ch] md:mb-6 md:text-lg">
                    Specialized bots and execution desks handle LP unwinds, route the exit, and earn liquidation
                    fees on complex positions.
                  </p>

                  <div className="flex max-w-md flex-row flex-wrap items-start gap-2 sm:gap-3">
                    <Link
                      href="/developers/liquidation"
                      prefetch={false}
                      className="inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-gray-800"
                    >
                      View docs
                    </Link>
                    <Link
                      href="/lightpaper"
                      prefetch={false}
                      className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                    >
                      Read lightpaper
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <ProductStorySection
        eyebrow="For operators"
        eyebrowTone="rose"
        titleLines={["Liquidators Jobs", ""]}
        className="pb-2 md:pb-3 2xl:pb-3"
        paragraphs={[
          "Liquidators watch LP-backed positions, unwind the collateral when health drops, and collect the liquidation fee.",
        ]}
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 pt-0 sm:px-6 sm:pt-2">
        <div className="relative z-0 flex flex-1 flex-col">
          <div className="site-content-width space-y-24 pt-0 pb-16 md:space-y-32 md:pb-20 2xl:space-y-32 2xl:pb-18">
            <BusinessLiquidatorsShowcaseSection />

            <section className="bg-white">
              <div className="site-content-shell">
                <div className="mx-auto w-full max-w-[76rem]">
                  <div className="max-w-[52rem] space-y-4">
                    <SectionEyebrow tone="rose">Liquidation model</SectionEyebrow>
                    <SectionTitle className="max-w-none text-[clamp(1.9rem,3vw,3rem)] leading-[1.02] md:whitespace-nowrap">
                      LP liquidation is an execution business.
                    </SectionTitle>
                  </div>

                  <div className="mt-10 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="grid w-max grid-flow-col auto-cols-[19rem] gap-4 pr-1 lg:auto-cols-[20rem] lg:gap-5">
                      {liquidationModelCards.map((card) => {
                        const Icon = card.icon

                        return (
                          <article
                            key={card.title}
                            className="flex h-[16rem] flex-col rounded-[1.75rem] bg-[#f7f7f5] p-5 md:p-6"
                          >
                            <Icon className="h-8 w-8 text-[#111111]" strokeWidth={1.85} />
                            <div className="mt-5 space-y-3 md:mt-6">
                              <h3 className="max-w-[12ch] text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.04em] text-[#111111] md:text-[1.55rem]">
                                {card.title}
                              </h3>
                              <p className="max-w-[14rem] text-[0.98rem] leading-[1.58] text-[#5f6b77] md:text-[1.02rem]">
                                {card.description}
                              </p>
                            </div>
                          </article>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative -mx-4 overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#fff7f6_0%,#fff0ef_50%,#fffafb_100%)] px-6 py-12 sm:-mx-6 sm:px-10 md:px-12 md:py-16 lg:py-20 2xl:py-18">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(244,63,94,0.10),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(249,115,22,0.08),transparent_35%)]" />
              <div className="relative z-10">
                <div className="max-w-[600px] space-y-3">
                  <SectionEyebrow tone="rose">Why liquidators care</SectionEyebrow>
                  <SectionTitle>Liquidation fees pay for execution.</SectionTitle>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-5">
                  {[
                    {
                      stat: "1",
                      label: "threshold",
                      title: "Spot the trigger",
                      description: "A health factor below 1 tells the liquidator the account can be taken.",
                    },
                    {
                      stat: "2",
                      label: "collateral",
                      title: "Split the LP",
                      description: "The position has to be converted into the assets that back it.",
                    },
                    {
                      stat: "3",
                      label: "repayment",
                      title: "Repay the debt",
                      description: "The recovered value goes back into the loan before the account is closed.",
                    },
                    {
                      stat: "Fee",
                      label: "bonus",
                      title: "Take the bonus",
                      description: "The liquidation bonus is the operator’s compensation.",
                    },
                  ].map((item) => (
                    <article key={item.title} className="flex flex-col rounded-2xl bg-white/70 p-6 backdrop-blur-sm">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[2.4rem] font-medium leading-none tracking-[-0.04em] text-rose-600">
                          {item.stat}
                        </span>
                        <span className="text-sm font-medium text-rose-400">{item.label}</span>
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-[#18323c]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <HomepageNewsroomSection collection="home" eyebrowTone="rose" />

            <div className="pb-16 md:pb-24 2xl:pb-22">
              <InlineFaqSection
                title="Frequently asked questions."
                items={liquidationFaqItems}
                eyebrowTone="rose"
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
