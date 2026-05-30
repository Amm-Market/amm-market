import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Gauge, LockKeyhole, MoveRight, BadgePercent } from "lucide-react"
import BusinessLiquidatorsShowcaseSection from "@/components/business-liquidators-showcase"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import ProductStorySection from "@/components/product-story-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { buildOgImagePath, siteRoutes } from "@/lib/site"

export const metadata: Metadata = {
  title: "Liquidators",
  description:
    "Connect liquidation infrastructure to Avana, cover LP-backed credit markets, and earn incentives for reliable closeout execution.",
  alternates: {
    canonical: siteRoutes.liquidators,
  },
  openGraph: {
    title: "Liquidators",
    description:
      "Connect liquidation infrastructure to Avana, cover LP-backed credit markets, and earn incentives for reliable closeout execution.",
    url: siteRoutes.liquidators,
    images: [
      {
        url: buildOgImagePath({
          title: "Liquidators",
          subtitle: "Cover LP-backed credit markets",
        }),
        alt: "Liquidators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquidators",
    description:
      "Connect liquidation infrastructure to Avana, cover LP-backed credit markets, and earn incentives for reliable closeout execution.",
    images: [
      buildOgImagePath({
        title: "Liquidators",
        subtitle: "Cover LP-backed credit markets",
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

const liquidationFaqItems: InlineFaqItem[] = [
  {
    value: "liq-1",
    question: "What makes Avana interesting for liquidators?",
    answer:
      "Avana brings LP-backed borrowers into credit markets. That gives liquidators a new class of accounts to cover, especially for teams that already understand AMM execution.",
  },
  {
    value: "liq-2",
    question: "Do operators need to be approved by Avana?",
    answer:
      "The liquidation market is designed to be permissionless. Independent keeper teams and larger execution desks can participate without becoming a centralized service provider.",
  },
  {
    value: "liq-3",
    question: "What infrastructure should an operator bring?",
    answer:
      "Monitoring, simulation, transaction delivery, liquidity access, and venue integrations all matter. The stronger the execution stack, the more effectively an operator can service supported markets.",
  },
  {
    value: "liq-4",
    question: "Where does the revenue come from?",
    answer:
      "Completed liquidations pay an incentive. That incentive compensates operators for resolving unsafe loans and returning value to the credit market.",
  },
  {
    value: "liq-5",
    question: "Can existing liquidation bots integrate?",
    answer:
      "Yes, but the bot needs to understand the supported LP venues and settlement flow. Avana is most relevant for operators willing to add LP-specific logic instead of only watching simple token collateral.",
  },
]

const liquidationModelCards = [
  {
    icon: Gauge,
    title: "Eligibility",
    description: "Risk rules define which accounts can be closed and when liquidation is available.",
  },
  {
    icon: LockKeyhole,
    title: "Execution input",
    description: "The operator supplies the transaction path, funding source, and settlement plan.",
  },
  {
    icon: MoveRight,
    title: "Collateral handling",
    description: "The LP position is converted through the correct venue path instead of treated like a plain token.",
  },
  {
    icon: BadgePercent,
    title: "Debt repayment",
    description: "Recovered value flows back into the credit market to reduce or close the unsafe loan.",
  },
  {
    icon: MoveRight,
    title: "Incentive",
    description: "The liquidation premium rewards the operator who completes the closeout.",
  },
] as const

function LiquidatorAccessSection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="site-content-shell">
        <div className="mx-auto grid w-full max-w-[76rem] gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
          <div className="max-w-[32rem] pt-1 text-left lg:pt-4">
            <SectionEyebrow tone="rose">Partner access</SectionEyebrow>
            <SectionTitle className="mt-5 max-w-none text-[#111111]">
              <span className="block">Ready to cover</span>
              <span className="block">liquidations with Avana?</span>
            </SectionTitle>
            <p className="mt-7 max-w-[34rem] text-[1rem] leading-[1.68] tracking-[-0.01em] text-[#74757c] md:text-[1.08rem]">
              Request early access to Avana&apos;s liquidation flow. We review keeper teams, execution desks, and
              routing partners for market fit, coverage readiness, and the venues you can service reliably.
            </p>
          </div>

          <div className="pt-2 lg:pt-6">
            <form className="max-w-[30rem] lg:ml-auto">
              <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
                <label className="sr-only" htmlFor="liq-firm-name">
                  Firm name
                </label>
                <input
                  id="liq-firm-name"
                  type="text"
                  placeholder="Firm name"
                  className="h-[3.9rem] w-full rounded-[1.2rem] border border-transparent bg-[#f4f4f2] px-[1.125rem] text-[0.95rem] text-[#111111] outline-none transition placeholder:text-[#9a9a9a] focus:bg-white focus:ring-1 focus:ring-black/10"
                />

                <label className="sr-only" htmlFor="liq-contact-name">
                  Contact name
                </label>
                <input
                  id="liq-contact-name"
                  type="text"
                  placeholder="Contact name"
                  className="h-[3.9rem] w-full rounded-[1.2rem] border border-transparent bg-[#f4f4f2] px-[1.125rem] text-[0.95rem] text-[#111111] outline-none transition placeholder:text-[#9a9a9a] focus:bg-white focus:ring-1 focus:ring-black/10"
                />
              </div>

              <label className="sr-only" htmlFor="liq-work-email">
                Work email
              </label>
              <input
                id="liq-work-email"
                type="email"
                placeholder="Work email"
                className="mt-2.5 h-[4rem] w-full rounded-[1.2rem] border border-transparent bg-[#f4f4f2] px-[1.125rem] text-[0.95rem] text-[#111111] outline-none transition placeholder:text-[#9a9a9a] focus:bg-white focus:ring-1 focus:ring-black/10"
              />

              <label className="sr-only" htmlFor="liq-coverage">
                Coverage scope
              </label>
              <textarea
                id="liq-coverage"
                rows={4}
                placeholder="Which venues and markets can you cover?"
                className="mt-2.5 min-h-[7.25rem] w-full resize-none rounded-[1.2rem] border border-transparent bg-[#f4f4f2] px-[1.125rem] py-[0.875rem] text-[0.95rem] text-[#111111] outline-none transition placeholder:text-[#9a9a9a] focus:bg-white focus:ring-1 focus:ring-black/10"
              />

              <label className="mt-2.5 flex items-center gap-3 rounded-[1.2rem] bg-[#f4f4f2] px-[1.125rem] py-[0.875rem] text-left text-[0.92rem] leading-6 tracking-[-0.01em] text-[#74757c]">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border border-[#cfcfc9] bg-white text-black accent-black"
                />
                <span>
                  By contacting Avana, I agree to the{" "}
                  <Link href="/privacy" prefetch={false} className="underline underline-offset-4">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="mt-5 flex h-[4rem] w-full items-center justify-center rounded-[1.5rem] bg-[#2a2b30] text-[1rem] font-medium text-white transition-colors hover:bg-black"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

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
                      width={1200}
                      height={1200}
                      quality={70}
                      className="w-full h-auto rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
                      sizes="(max-width: 1024px) calc(100vw - 40px), 700px"
                      priority
                      fetchPriority="high"
                    />
                  </div>
                </div>

                <div className="order-1 mb-8 w-full text-left lg:order-2 lg:mb-0 lg:w-[45%]">
                  <h1 className="mb-3 max-w-[11ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:max-w-[11ch] md:text-5xl lg:text-5xl xl:text-6xl">
                    <span>Cover</span>
                    <br />
                    <span>LP credit markets.</span>
                  </h1>

                  <p className="mb-5 max-w-[34ch] text-base leading-relaxed text-gray-600 sm:max-w-[38ch] md:mb-6 md:text-lg">
                    Bring bots, routing, and liquidity infrastructure to Avana, then earn incentives when risky
                    LP-backed loans need to be closed.
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

          <section className="relative z-10 pt-8 md:pt-10 lg:pt-12">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {liquidationModelCards.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col rounded-[1.5rem] bg-[#f7f7f5] p-5 md:p-6"
                >
                  <card.icon className="h-8 w-8 text-[#111111]" strokeWidth={1.85} />
                  <h3 className="mt-5 text-[1.25rem] font-semibold leading-[1.15] tracking-[-0.04em] text-[#111111]">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-[22rem] text-[0.98rem] leading-[1.58] text-[#5f6b77]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-24 lg:py-28">
            <div className="site-content-shell">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.88fr)] lg:gap-16">
                <div className="space-y-6">
                  <SectionEyebrow tone="rose">Why liquidators use Avana</SectionEyebrow>
                  <SectionTitle className="max-w-[12ch] text-[#111111]">
                    Keep closeouts orderly.
                  </SectionTitle>
                  <p className="max-w-[36rem] text-[1rem] leading-[1.72] tracking-[-0.01em] text-[#74757c] md:text-[1.08rem]">
                    Avana gives operators a liquidation surface built for LP-backed collateral instead of generic token
                    unwinds. That means the execution path can respect the pool structure, source the right liquidity,
                    and settle the repayment without turning every closeout into a manual rescue.
                  </p>
                </div>

                <div className="rounded-[2rem] bg-[#f7f7f5] p-6 md:p-8">
                  <BusinessLiquidatorsShowcaseSection />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f7f7f5] py-16 md:py-24 lg:py-28">
            <div className="site-content-shell">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-16">
                <div className="space-y-6">
                  <SectionEyebrow tone="rose">Execution model</SectionEyebrow>
                  <SectionTitle className="max-w-[12ch] text-[#111111]">
                    A liquidation path with fewer surprises.
                  </SectionTitle>
                  <p className="max-w-[34rem] text-[1rem] leading-[1.72] tracking-[-0.01em] text-[#74757c] md:text-[1.08rem]">
                    Liquidators need a stack that can watch the market, simulate the unwind, deliver the transaction,
                    and move the resulting assets correctly. Avana does the risk logic and surface coordination so
                    operators can focus on coverage and execution quality.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {liquidationModelCards.slice(0, 4).map((card) => (
                    <article
                      key={`secondary-${card.title}`}
                      className="flex flex-col rounded-[1.5rem] bg-white p-5 md:p-6"
                    >
                      <card.icon className="h-8 w-8 text-[#111111]" strokeWidth={1.85} />
                      <h3 className="mt-5 text-[1.25rem] font-semibold leading-[1.15] tracking-[-0.04em] text-[#111111]">
                        {card.title}
                      </h3>
                      <p className="mt-3 max-w-[22rem] text-[0.98rem] leading-[1.58] text-[#5f6b77]">
                        {card.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <LiquidatorAccessSection />

          <section className="py-16 md:py-24 lg:py-28">
            <div className="site-content-shell">
              <InlineFaqSection
                eyebrow="FAQ"
                title="Liquidator questions"
                items={liquidationFaqItems}
              />
            </div>
          </section>

          <section className="py-16 md:py-24 lg:py-28">
            <HomepageNewsroomSection />
          </section>
        </div>
      </div>
    </main>
  )
}
