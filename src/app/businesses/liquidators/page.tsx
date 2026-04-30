import type { Metadata } from "next"
import Link from "next/link"
import BusinessLiquidatorsShowcaseSection from "@/components/business-liquidators-showcase"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import ProductFeatureScrollSection from "@/components/product-feature-scroll-section"
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

export default function LiquidatorsPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 pt-10 sm:px-6 sm:pt-12 md:px-8 md:pt-20 lg:max-w-[64rem] lg:min-h-0 lg:px-0">
        <div className="relative z-0">
          <section className="pb-4 md:pb-6 lg:pb-8 xl:pb-10">
            <div className="w-full pt-3 pb-6 md:pt-5 md:pb-10 lg:pb-2 xl:pb-3">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
                <div className="order-2 mb-8 w-full lg:mb-0 lg:w-[55%]">
                  <div className="relative mx-auto w-full max-w-none lg:mx-0 lg:max-w-[650px] xl:max-w-[700px]">
                    <div className="relative overflow-hidden rounded-[24px] border border-gray-200 bg-[linear-gradient(180deg,#f7f4ee_0%,#efe8e3_100%)] p-5 sm:rounded-[32px] lg:rounded-[40px]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_55%)]" />
                      <div className="relative grid gap-4 md:grid-cols-3">
                        <div className="rounded-[22px] border border-white/70 bg-white/70 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:col-span-2">
                          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-rose-500">Execution desk</span>
                          <h2 className="mt-3 text-2xl font-normal leading-[1.02] tracking-[-0.05em] text-[#18323c] sm:text-[2.5rem]">
                            LP liquidation is an execution business.
                          </h2>
                          <p className="mt-4 max-w-[32rem] text-sm leading-6 text-gray-600">
                            The operator has to watch health, reconstruct the LP, unwind both legs, and settle debt in
                            a single flow. The desk that can do that well earns the fee.
                          </p>
                        </div>

                        <div className="grid gap-4">
                          <div className="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">Watch</p>
                            <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#18323c]">Health</p>
                            <p className="mt-1 text-sm text-gray-600">React before positions go stale.</p>
                          </div>
                          <div className="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">Earn</p>
                            <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#18323c]">Premium</p>
                            <p className="mt-1 text-sm text-gray-600">Monetize the unwind path.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 mb-8 w-full text-left lg:order-2 lg:mb-0 lg:w-[45%]">
                  <h1 className="mb-3 max-w-[14ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:max-w-[12ch] md:text-5xl lg:text-5xl xl:text-6xl">
                    <span className="lg:whitespace-nowrap">Turn LP liquidation</span>
                    <br />
                    <span className="lg:whitespace-nowrap">into an execution edge.</span>
                  </h1>

                  <p className="mb-5 max-w-[36ch] text-base leading-relaxed text-gray-600 sm:max-w-[40ch] md:mb-6 md:text-lg">
                    Liquidators on Avana do more than seize collateral. They monitor unhealthy positions, unwind the
                    LP into its component legs, route the exit, and collect the liquidation incentive for keeping the
                    market healthy.
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
        titleLines={["The bot,", "the unwind, the fee."]}
        paragraphs={[
          "Liquidators are the operators that keep LP-backed lending healthy. They watch for positions crossing risk thresholds, identify the accounts worth unwinding, and execute the liquidation with enough speed and routing quality to make the market reliable.",
          "That is different from a normal token liquidation. LP collateral has to be split apart, sold through the right venues, and settled against debt and incentives in the same flow. The result is a real execution business: the better your bots, capital, and routing, the better your coverage and margins.",
        ]}
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="relative z-0 flex flex-1 flex-col">
          <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20 2xl:space-y-36 2xl:pt-18 2xl:pb-18">
            <BusinessLiquidatorsShowcaseSection />

            <ProductFeatureScrollSection
              eyebrow="Liquidation model"
              eyebrowTone="rose"
              title="Operators get paid for solving the hard unwind."
              items={liquidationFeatures}
              panels={[
                <div key="l1" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(244,63,94,0.05),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Monitor</span>
                        <span className="rounded-full border border-rose-100 bg-rose-50 px-2 py-0.5 text-[8px] font-semibold text-rose-500">
                          Live
                        </span>
                      </div>
                      <div className="mt-3 space-y-2">
                        {[
                          ["Health factor", "1.08"],
                          ["Price drift", "-4.2%"],
                          ["LP mix", "48/52"],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-semibold text-[#18323c]">{label}</span>
                              <span className="text-[10px] font-semibold text-rose-600">{value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>,
                <div key="l2" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(244,63,94,0.05),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-3">
                        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-500">
                          <span>LP unwind</span>
                          <span>2 legs</span>
                        </div>
                        <div className="mt-3 space-y-2">
                          {["Token A", "Token B", "Fee claim"].map((item) => (
                            <div key={item} className="rounded-lg border border-rose-100 bg-white px-3 py-2 text-[10px] font-semibold text-rose-700">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-[84%] rounded-full bg-rose-500 panel-bar-pulse" />
                      </div>
                    </div>
                  </div>
                </div>,
                <div key="l3" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(244,63,94,0.04),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-rose-200 bg-rose-50 text-rose-500">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M4 12h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                            <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Route</span>
                          <p className="mt-1 text-sm font-semibold text-[#18323c]">Swap, repay, and settle atomically.</p>
                          <p className="mt-1.5 text-[9px] leading-5 text-gray-500">
                            The best liquidators choose the fastest unwind path and collect the premium for doing it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
                <div key="l4" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(244,63,94,0.04),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Premium</span>
                        <span className="rounded-full border border-rose-100 bg-rose-50 px-2 py-0.5 text-[8px] font-semibold text-rose-500">
                          Earned
                        </span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {[
                          ["Fee", "+3.5%"],
                          ["Speed", "Fast"],
                          ["Coverage", "24/7"],
                          ["Ops", "Scaled"],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2">
                            <span className="block text-[7px] uppercase tracking-[0.08em] text-gray-400">{label}</span>
                            <span className="mt-0.5 block text-[10px] font-semibold text-[#18323c]">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>,
              ]}
            />

            <section className="relative -mx-4 overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#fff7f6_0%,#fff0ef_50%,#fffafb_100%)] px-6 py-12 sm:-mx-6 sm:px-10 md:px-12 md:py-16 lg:py-20 2xl:py-18">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(244,63,94,0.10),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(249,115,22,0.08),transparent_35%)]" />
              <div className="relative z-10">
                <div className="max-w-[600px] space-y-3">
                  <SectionEyebrow tone="rose">Why liquidators care</SectionEyebrow>
                  <SectionTitle>LP collateral creates a real liquidation market.</SectionTitle>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-5">
                  {[
                    {
                      stat: "1",
                      label: "position",
                      title: "Watch risk early",
                      description:
                        "Healthy coverage starts with scanning positions before they cross the unsafe line.",
                    },
                    {
                      stat: "2",
                      label: "legs",
                      title: "Unwind the LP correctly",
                      description:
                        "The collateral must be split into its components before it can be sold and repaid.",
                    },
                    {
                      stat: "3",
                      label: "steps",
                      title: "Route the debt settlement",
                      description:
                        "Pick the right venue path, repay the loan, and preserve atomic settlement.",
                    },
                    {
                      stat: "Fee",
                      label: "income",
                      title: "Capture the premium",
                      description:
                        "The better the execution desk, the more of the liquidation incentive it can harvest.",
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
