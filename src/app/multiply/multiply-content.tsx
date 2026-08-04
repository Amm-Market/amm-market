import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  Activity,
  BadgePercent,
  Layers,
  MousePointerClick,
  Shield,
  ShieldAlert,
  TriangleAlert,
  TrendingUp,
  Undo2,
} from "lucide-react"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import LeverageGlanceShowcaseSection from "@/components/leverage-glance-showcase-section"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import ProductFeatureScrollSection from "@/components/product-feature-scroll-section"
import { FeatureCardDescription, FeatureCardTitle, SectionEyebrow, SectionTitle } from "@/components/shared"
import { buildOgImagePath, siteRoutes } from "@/lib/site"

const pageDescription =
  "Use supported AMM positions as collateral to unlock LP-backed leverage and managed perps exposure through one unified Avana workflow."

const loopingBenefits: {
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    title: "Stay in the pool",
    description:
      "Keep your LP active while you loop, so trading fees keep accruing instead of pausing when you take exposure.",
    icon: Layers,
  },
  {
    title: "Amplify LP yield",
    description:
      "Borrow against your position and redeploy capital to increase market exposure without exiting the pool.",
    icon: TrendingUp,
  },
  {
    title: "Capital efficiency",
    description:
      "Put the same LP to work as collateral and leverage source so idle liquidity becomes productive credit.",
    icon: BadgePercent,
  },
  {
    title: "One-click loops",
    description:
      "Open a managed loop from approved markets in a single flow instead of stitching borrow and trade steps yourself.",
    icon: MousePointerClick,
  },
  {
    title: "Live health control",
    description:
      "Track collateral, debt, and leverage together in real time so you can adjust before a position turns unsafe.",
    icon: Activity,
  },
  {
    title: "Flexible unwind",
    description:
      "Reduce, repay, or close on your terms with an unwind path that covers debt first and returns residual value.",
    icon: Undo2,
  },
]

const leverageFeatureItems = [
  {
    title: "Leverage Layer",
    description:
      "When leverage mode is selected, Avana draws LP-backed credit and deploys borrowed capital into the market.",
  },
  {
    title: "Unwind Layer",
    description:
      "Handles voluntary close, partial reduction, repayment, and emergency liquidation with debt coverage first.",
  },
  {
    title: "Risk Layer",
    description:
      "Collateral, debt, and leverage exposure are tracked together in real time before a position turns unsafe.",
  },
  {
    title: "Monitoring Layer",
    description:
      "Monitor collateral value, debt, leverage multiple, liquidation level, and health from one position view.",
  },
] as const

const leverageWorkflowSteps = [
  {
    title: "Deposit LP",
    description: "Deposit a supported LP position and let Avana value it using live pool and position data.",
  },
  {
    title: "Set leverage",
    description: "Pick your market, target exposure, and multiplier from the approved leverage markets list.",
  },
  {
    title: "Manage live",
    description: "Avana borrows, opens, and tracks the position so you can reduce, repay, or close in one place.",
  },
] as const

function PositionSafetyCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: LucideIcon
}) {
  const Icon = icon

  return (
    <article className="flex flex-col feature-card rounded-[1.75rem] p-5 md:p-6">
      <div className="flex h-8 w-8 items-center justify-center text-[#01AACF]">
        <Icon className="h-8 w-8" strokeWidth={1.85} />
      </div>

      <FeatureCardTitle className="mt-5 md:mt-6">{title}</FeatureCardTitle>
      <FeatureCardDescription className="mt-3 max-w-[22rem]">{description}</FeatureCardDescription>
    </article>
  )
}

const positionSafetySteps = [
  {
    title: "Safe Zone",
    description:
      "Health Factor stays above 1.5, so borrow usage remains within capacity while fees keep accruing.",
    icon: Shield,
  },
  {
    title: "Warning Zone",
    description:
      "Health Factor sits between 1.0 and 1.5, so you can repay, add collateral, or reduce exposure.",
    icon: TriangleAlert,
  },
  {
    title: "Liquidation",
    description:
      "Health Factor drops below 1.0, fees apply first, needed LP unwinds, and residual value returns.",
    icon: ShieldAlert,
  },
] as const

const leverageFaqItems: InlineFaqItem[] = [
  {
    value: "leverage-1",
    question: "What is Avana Leverage Market?",
    answer:
      "Avana Leverage Market lets users deposit supported AMM LP positions as collateral, borrow against them, and open managed leverage or perps exposure from the same position.",
  },
  {
    value: "leverage-2",
    question: "Do I still keep my LP collateral?",
    answer:
      "Yes. Your LP position remains the core collateral of the account until you repay debt and withdraw it, so you do not need to fully exit liquidity to open leverage.",
  },
  {
    value: "leverage-3",
    question: "Is this just normal token borrowing?",
    answer:
      "No. Avana supports simple borrowing, but leverage mode adds an abstracted path where borrowed capital is automatically deployed into managed leverage or perps exposure.",
  },
  {
    value: "leverage-4",
    question: "Where does the liquidity come from?",
    answer:
      "The borrowing layer is designed around Aave v4 style infrastructure. Avana focuses on LP specific underwriting, execution, monitoring, and position management on top.",
  },
  {
    value: "leverage-5",
    question: "Can I close the leverage without withdrawing my LP?",
    answer:
      "Yes. You can unwind the leverage position, reduce or repay debt, and continue holding the LP as collateral if you want to keep the base position active.",
  },
  {
    value: "leverage-6",
    question: "What happens if the position becomes unsafe?",
    answer:
      "Avana monitors the full position and can unwind leverage or liquidate collateral if needed to ensure the underlying debt remains covered.",
  },
  {
    value: "leverage-7",
    question: "Is leverage available for every LP?",
    answer:
      "No. Only supported LP types with reliable valuation logic, risk parameters, and unwind assumptions should be enabled for leverage mode.",
  },
] as const

export const metadata: Metadata = {
  title: "Multiply",
  description: pageDescription,
  keywords: [
    "LP leverage",
    "AMM leverage",
    "DeFi leverage",
    "DeFi perps",
    "LP perps",
    "LP collateral",
    "Aave v4",
  ],
  alternates: {
    canonical: siteRoutes.multiply,
  },
  openGraph: {
    title: "Multiply",
    description: pageDescription,
    url: siteRoutes.multiply,
    images: [
      {
        url: buildOgImagePath({
          title: "Multiply",
          subtitle: "LP-backed leverage and managed perps exposure",
        }),
        alt: "Multiply",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multiply",
    description: pageDescription,
    images: [
      buildOgImagePath({
        title: "Multiply",
        subtitle: "LP-backed leverage and managed perps exposure",
      }),
    ],
  },
}

export default function MultiplyPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 pt-10 sm:px-6 sm:pt-12 md:px-8 md:pt-20 lg:max-w-[64rem] 2xl:max-w-[72rem] lg:min-h-0 lg:px-0">
        <div className="relative z-0">
          <section className="pb-0 lg:pb-10 xl:pb-12">
            <div className="w-full pt-3 pb-0 md:pt-5">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
                <div className="order-2 mb-8 w-full lg:mb-0 lg:w-[55%]">
                  <div className="relative mx-auto w-full max-w-none lg:mx-0 lg:max-w-[650px] xl:max-w-[700px]">
                    <Image
                      src="/images/Hero__4_.webp"
                      alt="Avana leverage market interface"
                      width={1400}
                      height={1400}
                      preload
                      className="w-full h-auto rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
                      sizes="(max-width: 1024px) calc(100vw - 40px), 700px"
                      fetchPriority="high"
                    />
                  </div>
                </div>

                <div className="order-1 mb-8 w-full text-left lg:order-2 lg:mb-0 lg:w-[45%]">
                  <h1 className="mb-3 max-w-[12ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:text-5xl lg:text-5xl xl:text-6xl">
                    <span>Loop your LP</span>
                    <br />
                    <span>without exiting.</span>
                  </h1>

                  <p className="mb-5 max-w-[34ch] text-base leading-relaxed text-gray-600 sm:max-w-[38ch] md:mb-6 md:text-lg">
                    Deposit supported AMM positions as collateral, borrow against them, and open managed loops or perps
                    exposure while your liquidity stays in the pool earning fees.
                  </p>

                  <div className="flex max-w-md flex-row flex-wrap items-start gap-2 sm:gap-3">
                    <Link
                      href="https://app.avana.cc"
                      prefetch={false}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#01AACF] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#00a0c2]"
                    >
                      Try Looping
                    </Link>
                    <Link
                      href={siteRoutes.developers}
                      prefetch={false}
                      className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-900 transition-colors hover:bg-gray-100"
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

      <section className="deferred-viewport border-t border-[#01AACF] bg-white site-section-gap">
        <div className="site-content-shell">
          <LeverageGlanceShowcaseSection />
        </div>
      </section>

      <section className="deferred-viewport bg-white site-section-gap">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[76rem]">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,27rem)_minmax(0,1fr)] md:items-start md:gap-8 lg:gap-10 xl:grid-cols-[minmax(0,28rem)_minmax(0,1fr)]">
              <div className="space-y-4 md:self-start">
                <SectionEyebrow tone="emerald">Multiply Markets</SectionEyebrow>
                <SectionTitle className="max-w-[15ch]">
                  <span className="block">Credit that</span>
                  <span className="block">keeps LP working.</span>
                </SectionTitle>
                <ol className="mt-7 grid max-w-[32rem] gap-4 text-[0.98rem] leading-[1.55] tracking-[-0.01em] text-[#111111]/80 md:text-[1.04rem]">
                  <li className="flex gap-3">
                    <span className="mt-0.5 font-semibold text-[#01AACF]">1.</span>
                    <span>Borrow against LP collateral without shutting down the base position.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 font-semibold text-[#01AACF]">2.</span>
                    <span>Redeploy borrowed liquidity into approved loops and managed exposure.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 font-semibold text-[#01AACF]">3.</span>
                    <span>Track collateral, debt, and health while the LP keeps working.</span>
                  </li>
                </ol>
              </div>
              <div className="flex items-center justify-center pt-1 md:justify-end">
                <div className="relative w-full max-w-[17rem] sm:max-w-[22rem] md:max-w-[25rem] lg:max-w-[28rem] xl:max-w-[31rem]">
                  <Image
                    src="/images/Avana Coin.webp"
                    alt="Avana coin illustration"
                    width={1714}
                    height={1601}
                    className="h-auto w-full"
                    sizes="(min-width: 1280px) 31rem, (min-width: 1024px) 28rem, (min-width: 768px) 25rem, (min-width: 640px) 22rem, 17rem"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="deferred-viewport bg-white site-section-gap">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[76rem]">
            <div className="max-w-[58rem] space-y-4 text-left">
              <SectionEyebrow tone="violet">Why looping</SectionEyebrow>
              <SectionTitle className="max-w-[14ch] lg:max-w-none">
                <span className="lg:whitespace-nowrap">Stretch the same LP further.</span>
              </SectionTitle>
            </div>

            <div className="mt-10 -mx-5 overflow-x-auto px-5 pb-1 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:mt-16 md:overflow-visible md:px-0 md:pb-0 md:snap-none [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max gap-8 md:grid md:w-full md:grid-cols-2 md:gap-x-16 md:gap-y-14 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-20">
                {loopingBenefits.map((feature) => (
                  <article
                    key={feature.title}
                    className="flex w-[15rem] shrink-0 snap-start flex-col bg-transparent md:w-auto md:shrink"
                  >
                    <feature.icon className="h-11 w-11 text-[#01AACF]" strokeWidth={1.5} aria-hidden="true" />
                    <FeatureCardTitle className="mt-5">{feature.title}</FeatureCardTitle>
                    <FeatureCardDescription className="mt-2 max-w-[22rem]">
                      {feature.description}
                    </FeatureCardDescription>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="deferred-viewport bg-white site-section-gap">
        <div className="site-content-shell">
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <SectionEyebrow tone="rose">How it works</SectionEyebrow>
                <SectionTitle>
                  <span className="block lg:whitespace-nowrap">Looping in three steps</span>
                </SectionTitle>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
            {leverageWorkflowSteps.map((step, index) => (
              <article key={step.title} className="feature-card rounded-2xl p-6 md:p-8">
                <span className="text-5xl font-bold text-gray-300 md:text-6xl">
                  {index + 1}
                </span>
                <FeatureCardTitle className="mt-6">{step.title}</FeatureCardTitle>
                <FeatureCardDescription className="mt-3">
                  {step.description}
                </FeatureCardDescription>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 sm:px-6">
        <div className="relative z-0 flex flex-1 flex-col">
          <div className="site-content-width flex flex-col site-section-stack site-section-gap pb-16 md:pb-20 2xl:pb-18">
            <ProductFeatureScrollSection
              eyebrow="Core Product"
              eyebrowTone="rose"
              title={<span className="lg:whitespace-nowrap">Tools build to make it Easy for first-timers</span>}
              items={leverageFeatureItems}
              panels={[
                <div key="p1" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(244,63,94,0.05),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Leverage position</span>
                        <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[8px] font-medium text-gray-700">v3</span>
                      </div>
                      <div className="mt-3 flex items-center gap-4">
                        <div className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center">
                          <svg className="h-full w-full -rotate-90 panel-ring" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#fce7f3" strokeWidth="7" />
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#f43f5e" strokeWidth="7" strokeLinecap="round" strokeDasharray="238.76" strokeDashoffset="47.75" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[1.4rem] font-bold leading-none tracking-[-0.04em] text-[#18323c]">5<span className="text-xs font-normal text-gray-300">x</span></span>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[8px] font-medium uppercase tracking-[0.1em] text-gray-400">Collateral</div>
                          <div className="mt-1 h-[1.65rem] overflow-hidden">
                            <div className="panel-ticker-v-fast" style={{ animationDuration: "10s" }}>
                              {["$24,840","$24,920","$24,760","$24,840"].map((v,i) => (
                                <div key={i} className="flex h-[1.65rem] items-center"><span className="text-[1.3rem] font-semibold leading-none tracking-[-0.04em] text-[#18323c]">{v}</span></div>
                              ))}
                            </div>
                          </div>
                          <div className="mt-2 flex gap-1.5">
                            {[{l:"LP",v:"Active",c:"text-emerald-600"},{l:"Debt",v:"$19.8K",c:"text-[#18323c]"}].map(m => (
                              <div key={m.l} className="rounded-md border border-gray-100 bg-gray-50/80 px-2 py-1 text-center">
                                <span className="block text-[7px] text-gray-400">{m.l}</span>
                                <span className={`text-[10px] font-semibold ${m.c}`}>{m.v}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 border-t border-gray-100 pt-3">
                        <div className="flex items-center justify-between text-[8px] font-medium uppercase tracking-[0.08em] text-gray-400">
                          <span>Health</span>
                          <div className="flex items-center gap-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 panel-pulse" />
                            <div className="h-3 overflow-hidden"><div className="panel-ticker-v-fast" style={{ animationDuration: "7s" }}>{["1.51","1.53","1.48","1.51"].map((v,i) => (<span key={i} className="block h-3 text-[10px] font-semibold tabular-nums text-emerald-600">{v}</span>))}</div></div>
                          </div>
                        </div>
                        <div className="mt-1.5 h-[5px] overflow-hidden rounded-full bg-gray-100">
                          <div className="h-full w-[80%] rounded-full bg-rose-400 panel-bar-pulse" style={{ animationDelay: "0.5s" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
                <div key="p3" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(244,63,94,0.05),transparent_58%)]" />
                  <div className="absolute inset-0 flex items-center justify-center px-5">
                    <div className="relative w-full max-w-[16rem] h-[180px] overflow-hidden">
                      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[52px] -translate-y-1/2 rounded-[16px] border border-rose-100 bg-[linear-gradient(180deg,rgba(255,241,242,0.82),rgba(255,255,255,0.98))] shadow-[0_10px_24px_rgba(244,63,94,0.08)]" />
                      <div className="panel-escalator flex flex-col">
                        {[
                          { prev: { label: "Close position", icon: "\u2715" }, active: { label: "Repay debt", icon: "\u2197" }, next: { label: "Release collateral", icon: "\u2193" } },
                          { prev: { label: "Reduce exposure", icon: "\u25CE" }, active: { label: "Trigger liquidation", icon: "\u26A1" }, next: { label: "Return surplus", icon: "\u21C5" } },
                          { prev: { label: "Settle balance", icon: "\u2611" }, active: { label: "Close position", icon: "\u2715" }, next: { label: "Repay debt", icon: "\u2197" } },
                          { prev: { label: "Close position", icon: "\u2715" }, active: { label: "Repay debt", icon: "\u2197" }, next: { label: "Release collateral", icon: "\u2193" } },
                        ].map((slide, i) => (
                          <div key={i} className="flex h-[180px] flex-col justify-center gap-3">
                            <div className="flex h-[52px] items-center gap-3 rounded-[16px] border border-gray-100 bg-white px-4 text-gray-500 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-xs text-gray-400">{slide.prev.icon}</div>
                              <span className="text-[0.82rem] font-medium">{slide.prev.label}</span>
                            </div>
                            <div className="relative flex h-[52px] items-center gap-3 rounded-[16px] px-4 text-[#18323c]">
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-xs text-rose-400 shadow-[0_2px_8px_rgba(244,63,94,0.10)]">{slide.active.icon}</div>
                              <span className="text-[0.82rem] font-medium">{slide.active.label}</span>
                              <span className="ml-auto rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-rose-500">Active</span>
                            </div>
                            <div className="flex h-[52px] items-center gap-3 rounded-[16px] border border-gray-100 bg-white px-4 text-gray-500 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-xs text-gray-400">{slide.next.icon}</div>
                              <span className="text-[0.82rem] font-medium">{slide.next.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>,
                <div key="p5" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(16,185,129,0.05),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Risk console</span>
                        <div className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-emerald-400 panel-pulse" /><span className="text-[8px] font-medium text-emerald-500">Healthy</span></div>
                      </div>
                      <div className="relative mt-3 h-[80px] w-full overflow-hidden rounded-[14px] border border-emerald-100/60 bg-[linear-gradient(180deg,#f8fffb_0%,#effcf5_100%)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />
                        <div className="absolute inset-x-3 inset-y-0"><div className="absolute left-0 right-0 top-[25%] border-t border-emerald-100/60" /><div className="absolute left-0 right-0 top-1/2 border-t border-emerald-100/50" /><div className="absolute left-0 right-0 top-[75%] border-t border-emerald-100/40" /></div>
                        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                          <defs><linearGradient id="lv-rc-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" stopOpacity="0.20" /><stop offset="100%" stopColor="#10b981" stopOpacity="0" /></linearGradient></defs>
                          <path d="M0,52 C30,50 60,44 90,38 S150,30 180,34 S240,28 270,22 L300,18 L300,80 L0,80Z" fill="url(#lv-rc-g)" />
                          <path d="M0,52 C30,50 60,44 90,38 S150,30 180,34 S240,28 270,22 L300,18" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M0,68 L300,68" fill="none" stroke="#fda4af" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
                        </svg>
                      </div>
                      <div className="mt-2 flex gap-2">
                        {[
                          { l: "Health", vals: ["1.51","1.54","1.48","1.51"], c: "text-emerald-600" },
                          { l: "Liq", v: "1.00", static: true },
                          { l: "Buffer", vals: ["34%","35%","32%","34%"], c: "text-[#18323c]" },
                        ].map((m) => (
                          <div key={m.l} className="flex-1 rounded-xl border border-emerald-100/50 bg-[linear-gradient(180deg,rgba(236,253,245,0.4),rgba(255,255,255,0.95))] px-2 py-1.5 text-center">
                            <span className="block text-[8px] font-medium uppercase tracking-[0.06em] text-gray-400">{m.l}</span>
                            {"static" in m ? (
                              <span className="text-xs font-semibold tabular-nums text-rose-500">{m.v}</span>
                            ) : (
                              <div className="h-4 overflow-hidden"><div className="panel-ticker-v-fast" style={{ animationDuration: m.l === "Health" ? "6s" : "8s" }}>{m.vals!.map((v,i) => (<span key={i} className="block h-4 text-xs font-semibold tabular-nums" style={{ color: m.c === "text-emerald-600" ? "#059669" : "#18323c" }}>{v}</span>))}</div></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>,
                <div key="p4" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <div className="h-3 overflow-hidden"><div className="panel-ticker-v-fast" style={{ animationDuration: "10s" }}>{["ETH / USDC","WBTC / ETH","ARB / USDC","ETH / USDC"].map((v,i) => (<span key={i} className="block h-3 text-[11px] font-semibold text-[#18323c]">{v}</span>))}</div></div>
                        <span className="rounded-full border border-rose-100 bg-rose-50 px-2 py-0.5 text-[8px] font-semibold text-rose-500">Leverage</span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {[
                          { l: "Collateral", vals: ["$12,400","$28,600","$5,200","$12,400"], c: "text-[#18323c]" },
                          { l: "Debt", vals: ["$8,200","$18,400","$3,100","$8,200"], c: "text-rose-500" },
                          { l: "Leverage", vals: ["3.2x","4.1x","2.8x","3.2x"], c: "text-[#18323c]" },
                          { l: "P&L", vals: ["+$620","+$1,840","+$280","+$620"], c: "text-emerald-600" },
                        ].map((m,i) => (
                          <div key={m.l} className="rounded-xl border border-gray-100 bg-gray-50/60 px-3 py-2">
                            <span className="block text-[8px] font-medium uppercase tracking-[0.08em] text-gray-400">{m.l}</span>
                            <div className="mt-1 h-[1rem] overflow-hidden"><div className="panel-ticker-v-fast" style={{ animationDuration: `${8 + i}s` }}>{m.vals.map((v,j) => (<div key={j} className="flex h-[1rem] items-center"><span className={`text-xs font-semibold tabular-nums ${m.c}`}>{v}</span></div>))}</div></div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 border-t border-gray-100 pt-3">
                        <div className="flex items-center justify-between text-[8px] font-medium text-gray-400">
                          <span>Health factor</span>
                          <div className="h-3 overflow-hidden"><div className="panel-ticker-v-fast" style={{ animationDuration: "6s" }}>{["1.51","1.55","1.68","1.51"].map((v,i) => (<span key={i} className="block h-3 text-[10px] font-semibold tabular-nums text-emerald-600">{v}</span>))}</div></div>
                        </div>
                        <div className="mt-1.5 h-[4px] w-full overflow-hidden rounded-full bg-gray-100">
                          <div className="h-full rounded-full bg-emerald-400 panel-bar-pulse" style={{ width: "75%", animationDelay: "0.3s" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
              ]}
            />

            <section>
              <div className="space-y-4 text-left">
                <SectionEyebrow tone="violet">Position Safety</SectionEyebrow>
                <SectionTitle>Designed for safe leverage.</SectionTitle>
                <p className="max-w-[38rem] text-[1.15rem] leading-[1.36] tracking-[-0.045em] text-[#6f7378] md:text-[1.35rem]">
                  See when a position is healthy, monitor collateral, debt, leverage, and liquidation buffer, and know when a loop needs attention.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 lg:grid-cols-3 lg:gap-5">
                {positionSafetySteps.map((step) => (
                  <PositionSafetyCard
                    key={step.title}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                  />
                ))}
              </div>
            </section>

            <HomepageNewsroomSection
              collection="leverage"
              eyebrowTone="rose"
            />

            <div className="pb-16 md:pb-24 2xl:pb-22">
              <InlineFaqSection
                title="Frequently asked questions."
                items={leverageFaqItems}
                eyebrowTone="rose"
                withTopBorder={false}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
