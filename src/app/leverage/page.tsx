import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import LeverageGlanceShowcaseSection from "@/components/leverage-glance-showcase-section"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import ProductFeatureScrollSection from "@/components/product-feature-scroll-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

const pageDescription =
  "Use supported AMM positions as collateral to unlock LP-backed leverage and managed perps exposure through one unified Avana workflow."

const leverageFeatureItems = [
  {
    title: "LP Backed Leverage",
    description:
      "Use supported AMM positions as collateral to unlock leveraged exposure without exiting the underlying liquidity strategy.",
  },
  {
    title: "One Position, One View",
    description:
      "Monitor collateral value, debt, leverage multiple, liquidation level, and health factor from one unified position view.",
  },
  {
    title: "Abstracted Execution",
    description:
      "Avana handles the borrow, execution, and position tracking flow behind the scenes so users can focus on the market view.",
  },
  {
    title: "Built on Aave Infrastructure",
    description:
      "Borrowing power is routed through Aave style capital rails while Avana focuses on LP underwriting, execution, and risk logic.",
  },
  {
    title: "Live Risk Monitoring",
    description:
      "Collateral, debt, and leverage exposure are tracked together in real time so users can react before the position becomes unsafe.",
  },
] as const

const leverageWorkflowSteps = [
  {
    title: "Deposit LP",
    description: "Add a supported LP position as collateral and let Avana value it conservatively using pool and position data.",
  },
  {
    title: "Choose leverage",
    description: "Select your market, target exposure, and leverage multiple from approved leverage markets with defined controls.",
  },
  {
    title: "Track and manage",
    description:
      "Avana borrows, opens, and tracks the position in one system so you can reduce exposure, repay debt, or close when needed from the same dashboard.",
  },
] as const

const leverageHighlights = [
  {
    title: "Your LP never stops working",
    description:
      "Collateral stays in the pool earning fees while backing your leveraged position. No exit, no swap, no lost yield.",
  },
  {
    title: "Borrow-based exposure",
    description:
      "Instead of perp funding rates, Avana prices leverage through borrow rates routed from Aave v4 style Hub liquidity and LP-specific risk parameters.",
  },
  {
    title: "AMM-aware risk model",
    description:
      "Valuation accounts for pool structure, tick range, concentration depth, and accrued fees. Not just token price.",
  },
  {
    title: "Unified position view",
    description:
      "Collateral, debt, leverage ratio, and health factor tracked together in one place. Not split across protocols.",
  },
  {
    title: "Market access through the Hub",
    description:
      "Your LP unlocks Hub liquidity, and Avana manages execution, debt, leverage, and unwind logic in one LP-backed account.",
  },
  {
    title: "Automatic unwind paths",
    description:
      "When a position needs to close, smart routing handles debt repayment, collateral release, and exposure reduction in sequence.",
  },
] as const

const leverageSystemLayers = [
  {
    title: "Borrow Spoke",
    description:
      "The entry point that accepts supported LP collateral and establishes borrowing capacity against protocol rules.",
  },
  {
    title: "Leverage Layer",
    description:
      "When leverage mode is selected, Avana draws on LP-backed credit and deploys the borrowed capital into the selected market structure.",
  },
  {
    title: "Monitoring Layer",
    description:
      "Tracks LP collateral value, outstanding debt, and the leverage position together as one risk surface.",
  },
  {
    title: "Unwind Layer",
    description:
      "Handles voluntary close, partial reduction, repayment, and emergency liquidation with debt coverage as the first priority.",
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
  title: `Leverage - ${SITE_NAME}`,
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
    canonical: siteRoutes.leverage,
  },
  openGraph: {
    title: `Leverage - ${SITE_NAME}`,
    description: pageDescription,
    url: siteRoutes.leverage,
    images: [
      {
        url: buildOgImagePath({
          title: `Leverage - ${SITE_NAME}`,
          subtitle: "LP-backed leverage and managed perps exposure",
        }),
        alt: `Leverage - ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Leverage - ${SITE_NAME}`,
    description: pageDescription,
    images: [
      buildOgImagePath({
        title: `Leverage - ${SITE_NAME}`,
        subtitle: "LP-backed leverage and managed perps exposure",
      }),
    ],
  },
}

export default function LeveragePage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 pt-10 sm:px-6 sm:pt-12 md:px-8 md:pt-20 lg:max-w-[64rem] lg:min-h-0 lg:px-0">
        <div className="relative z-0">
          <section className="pb-4 md:pb-6 lg:pb-8 xl:pb-10">
            <div className="w-full pt-3 pb-6 md:pt-5 md:pb-10 lg:pb-2 xl:pb-3">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
                <div className="order-2 mb-8 w-full lg:mb-0 lg:w-[55%]">
                  <div className="relative mx-auto w-full max-w-none lg:mx-0 lg:max-w-[650px] xl:max-w-[700px]">
                    <Image
                      src="/images/Hero__4_.png"
                      alt="Avana leverage market interface"
                      width={1400}
                      height={1400}
                      className="w-full h-auto rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
                      priority
                      fetchPriority="high"
                    />
                  </div>
                </div>

                <div className="order-1 mb-8 w-full text-left lg:order-2 lg:mb-0 lg:w-[45%]">
                  <h1 className="mb-3 max-w-[12ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:text-5xl lg:text-5xl xl:text-6xl">
                    <span>Turn LP capital</span>
                    <br />
                    <span>into leverage.</span>
                  </h1>

                  <p className="mb-5 max-w-[34ch] text-base leading-relaxed text-gray-600 sm:max-w-[38ch] md:mb-6 md:text-lg">
                    Deposit supported AMM positions, unlock borrowing power through Avana, and open managed leverage or
                    perps exposure without leaving your liquidity behind.
                  </p>

                  <div className="flex max-w-md flex-row flex-wrap items-start gap-2 sm:gap-3">
                    <Link
                      href={siteRoutes.earlyAccess}
                      prefetch={false}
                      className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold rounded-full transition-colors"
                    >
                      Get Early Access
                    </Link>
                    <Link
                      href={siteRoutes.developers}
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

      <section className="border-t border-gray-200 bg-white py-12 md:py-16">
        <div className="site-content-shell">
          <LeverageGlanceShowcaseSection />
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="site-content-shell">
          <div className="flex flex-col gap-6">
            <div className="flex max-w-[600px] flex-col gap-2">
              <SectionEyebrow tone="rose">How it works</SectionEyebrow>
              <SectionTitle>How leverage works</SectionTitle>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
            {leverageWorkflowSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl bg-gray-50 p-6 md:p-8">
                <span className="text-5xl font-bold text-gray-300 md:text-6xl">
                  {index + 1}
                </span>
                <h3 className="mb-3 mt-6 text-lg font-semibold text-gray-900 md:text-xl">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 md:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="site-content-shell">
          <div className="flex max-w-[600px] flex-col gap-2">
            <SectionEyebrow tone="rose">What&apos;s new</SectionEyebrow>
            <SectionTitle>What LP leverage never&nbsp;had.</SectionTitle>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-4">
            {/* Hero card — dark, spans 2 columns and 2 rows */}
            <article className="relative overflow-hidden rounded-[1.8rem] bg-[#18323c] p-7 md:col-span-2 md:row-span-2 md:p-10">
              <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-rose-500/[0.07] blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl" />
              <div className="relative z-10 flex h-full flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
                  01
                </span>
                <h3 className="mt-5 max-w-[16ch] text-[1.75rem] font-medium leading-[1.08] tracking-[-0.04em] text-white md:text-[2rem]">
                  {leverageHighlights[0].title}
                </h3>
                <p className="mt-4 max-w-[30rem] text-[0.94rem] leading-[1.7] text-white/60">
                  {leverageHighlights[0].description}
                </p>
                {/* Decorative element */}
                <div className="mt-auto pt-10">
                  <div className="flex gap-3">
                    <div className="h-1.5 w-12 rounded-full bg-rose-400/40" />
                    <div className="h-1.5 w-8 rounded-full bg-white/15" />
                    <div className="h-1.5 w-5 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </article>

            {/* Right-side cards (4 cards in a 2×2 grid beside the hero) */}
            {leverageHighlights.slice(1, 5).map((item, i) => (
              <article
                key={item.title}
                className="flex flex-col rounded-[1.8rem] border border-gray-200 bg-gray-50 p-6 md:p-7"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-medium tracking-[-0.03em] text-[#18323c]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}

            {/* Bottom wide card — warm gradient, spans full width */}
            <article className="flex flex-col rounded-[1.8rem] border border-gray-200 bg-[linear-gradient(145deg,#ffffff_0%,#faf7f5_100%)] p-6 md:col-span-4 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-12">
                <div className="flex items-start gap-5">
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                    06
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.03em] text-[#18323c]">
                      {leverageHighlights[5].title}
                    </h3>
                    <p className="mt-2 max-w-[36rem] text-sm leading-relaxed text-gray-600">
                      {leverageHighlights[5].description}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 items-center gap-2 md:flex">
                  <div className="h-1.5 w-16 rounded-full bg-rose-200/70" />
                  <div className="h-1.5 w-10 rounded-full bg-gray-200" />
                  <div className="h-1.5 w-6 rounded-full bg-gray-100" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 sm:px-6">
        <div className="relative z-0 flex flex-1 flex-col">
          <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20">
            <ProductFeatureScrollSection
              eyebrow="Core Product"
              eyebrowTone="rose"
              title="LP-backed leverage, managed in one system."
              items={leverageFeatureItems}
              panels={[
                /* 01 LP Backed Leverage */
                <div key="p1" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(244,63,94,0.03),transparent_60%)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[3.2rem] font-semibold leading-none tracking-[-0.05em] text-[#18323c] panel-breathe">5<span className="text-lg font-normal text-gray-300">x</span></span>
                    <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-gray-400">Leverage multiple</span>
                    <div className="mt-5 flex gap-2">
                      {/* LP ticker */}
                      <div className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-1.5 text-center">
                        <span className="block text-[9px] text-gray-400">LP</span>
                        <div className="h-[1rem] overflow-hidden">
                          <div className="panel-ticker-v-fast">
                            {["Active","Earning","Accruing","Active"].map((v,i) => (
                              <div key={i} className="flex h-[1rem] items-center justify-center">
                                <span className="text-xs font-semibold text-emerald-600">{v}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Debt ticker */}
                      <div className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-1.5 text-center">
                        <span className="block text-[9px] text-gray-400">Debt</span>
                        <div className="h-[1rem] overflow-hidden">
                          <div className="panel-ticker-v-fast" style={{ animationDuration: '7s' }}>
                            {["Covered","$8.2K","66%","Covered"].map((v,i) => (
                              <div key={i} className="flex h-[1rem] items-center justify-center">
                                <span className="text-xs font-semibold text-[#18323c]">{v}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Health ticker */}
                      <div className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-1.5 text-center">
                        <span className="block text-[9px] text-gray-400">Health</span>
                        <div className="h-[1rem] overflow-hidden">
                          <div className="panel-ticker-v-fast" style={{ animationDuration: '5s' }}>
                            {["1.51","1.53","1.49","1.51"].map((v,i) => (
                              <div key={i} className="flex h-[1rem] items-center justify-center">
                                <span className="text-xs font-semibold text-emerald-600">{v}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
                /* 02 One Position, One View */
                <div key="p2" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 flex items-center justify-center px-5">
                    <div className="w-full max-w-[15rem] h-[11rem] overflow-hidden">
                      <div className="panel-ticker-v-slow" style={{ animationDuration: '12s' }}>
                        {[
                          { pair: "ETH / USDC", collateral: "$12,400", debt: "$8,200", health: "1.51", cW: 100, dW: 66, hW: 75 },
                          { pair: "WBTC / ETH", collateral: "$28,600", debt: "$18,400", health: "1.55", cW: 100, dW: 64, hW: 77 },
                          { pair: "ARB / USDC", collateral: "$5,200", debt: "$3,100", health: "1.68", cW: 100, dW: 60, hW: 84 },
                          { pair: "ETH / USDC", collateral: "$12,400", debt: "$8,200", health: "1.51", cW: 100, dW: 66, hW: 75 },
                        ].map((pos, idx) => (
                          <div key={idx} className="flex h-[11rem] shrink-0 flex-col justify-center">
                            <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
                              <span className="text-[11px] font-semibold text-[#18323c]">{pos.pair}</span>
                              {[
                                { l: "Collateral", v: pos.collateral, w: pos.cW, c: "bg-rose-300/50" },
                                { l: "Debt", v: pos.debt, w: pos.dW, c: "bg-violet-400/50" },
                                { l: "Health factor", v: pos.health, w: pos.hW, c: "bg-emerald-400", vc: "text-emerald-600" },
                              ].map((m, i) => (
                                <div key={m.l} className={i === 0 ? "mt-2" : "mt-2.5"}>
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-medium text-gray-400">{m.l}</span>
                                    <span className={`text-[10px] font-semibold ${m.vc || "text-[#18323c]"}`}>{m.v}</span>
                                  </div>
                                  <div className="mt-1 h-[4px] w-full overflow-hidden rounded-full bg-gray-100">
                                    <div className={`h-full rounded-full ${m.c}`} style={{ width: `${m.w}%` }} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>,
                /* 03 Abstracted Execution */
                <div key="p3" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 flex items-center justify-center px-5">
                    <div className="w-full max-w-[15rem] h-[10.5rem] overflow-hidden">
                      <div className="panel-escalator" style={{ animationDuration: '16s' }}>
                        {[0, 1].map((dup) => (
                          <div key={dup} className="flex flex-col gap-2 pb-2">
                            {["Borrow","Route capital","Deploy position","Track exposure","Monitor health","Auto-adjust"].map((step, i) => (
                              <div key={`${dup}-${step}`} className="flex w-full items-center gap-3">
                                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${i === 1 ? "bg-[#18323c] text-white" : "border border-gray-200 bg-gray-50 text-gray-400"}`}>{i + 1}</div>
                                <div className={`flex-1 rounded-xl px-3 py-2 text-[0.82rem] font-medium ${i === 1 ? "border border-[#18323c]/10 bg-[#18323c]/5 text-[#18323c]" : "border border-gray-100 bg-gray-50/80 text-gray-500"}`}>{step}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>,
                /* 04 Built on Aave Infrastructure */
                <div key="p4" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50/80">
                      <svg width="24" height="24" viewBox="0 0 256 256" fill="none"><path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0z" fill="#B6509E" opacity="0.15" /><path d="M186.7 168.5c-7.5 0-14.2-4.3-17.4-11l-25.9-56.8c-1.4-3.1-4.5-5.1-7.9-5.1h-14.9c-3.4 0-6.5 2-7.9 5.1l-25.9 56.8c-3.2 6.7-9.9 11-17.4 11-10.6 0-19.2-8.6-19.2-19.2 0-2.9.7-5.8 2-8.4l38.3-83.8c5.7-12.5 18.2-20.5 32-20.5h23.2c13.8 0 26.3 8 32 20.5l38.3 83.8c1.3 2.6 2 5.5 2 8.4 0 10.6-8.6 19.2-19.2 19.2z" fill="#B6509E" opacity="0.4" /></svg>
                    </div>
                    <span className="mt-3 text-sm font-semibold text-[#18323c]">Aave v4 Rails</span>
                    <div className="mt-4 w-full max-w-[15rem] overflow-hidden rounded-xl border border-gray-100 bg-gray-50/80 py-2">
                      <div className="flex whitespace-nowrap panel-scroll-h-slow" style={{ animationDuration: '18s' }}>
                        {[0, 1].map((dup) => (
                          <div key={dup} className="flex shrink-0 items-center gap-0">
                            {["Hub Liquidity","Spoke Isolation","Shared Credit","Risk Engine","LP Underwriting"].map((label) => (
                              <span key={`${dup}-${label}`} className="flex items-center gap-2 px-3">
                                <span className="text-[10px] font-medium text-[#B6509E]">{label}</span>
                                <span className="text-gray-300">&middot;</span>
                              </span>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>,
                /* 05 Live Risk Monitoring */
                <div key="p5" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(244,63,94,0.03),transparent_55%)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                    <div className="w-full max-w-[15rem]">
                      {/* Continuously scrolling chart line */}
                      <div className="h-[60px] w-full overflow-hidden">
                        <div className="flex w-[200%] panel-scroll-h-chart" style={{ animationDuration: '15s' }}>
                          {[0, 1].map((dup) => (
                            <svg key={dup} className="h-[60px] w-1/2 shrink-0" viewBox="0 0 300 60" preserveAspectRatio="none">
                              <defs><linearGradient id={`lv-risk-fill-${dup}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f43f5e" stopOpacity="0.08" /><stop offset="100%" stopColor="#f43f5e" stopOpacity="0" /></linearGradient></defs>
                              <path d="M0,50 C30,48 60,45 90,42 S150,38 180,35 S240,32 270,28 L300,25 L300,60 L0,60Z" fill={`url(#lv-risk-fill-${dup})`} />
                              <path d="M0,50 C30,48 60,45 90,42 S150,38 180,35 S240,32 270,28 L300,25" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                              <path d="M0,55 L300,55" fill="none" stroke="#fda4af" strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      {/* Green pulsing badge */}
                      <div className="mt-2 flex items-center justify-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 panel-pulse" /><span className="text-[10px] font-medium text-gray-500">Above liquidation</span>
                      </div>
                      {/* Three metric boxes with tickers */}
                      <div className="mt-3 flex justify-center gap-2">
                        {/* Health ticker */}
                        <div className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-1.5 text-center">
                          <span className="block text-[9px] text-gray-400">Health</span>
                          <div className="h-[1rem] overflow-hidden">
                            <div className="panel-ticker-v-fast">
                              {["1.51","1.53","1.48","1.51"].map((v,i) => (
                                <div key={i} className="flex h-[1rem] items-center justify-center">
                                  <span className="text-xs font-semibold text-emerald-600">{v}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        {/* Liq static */}
                        <div className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-1.5 text-center">
                          <span className="block text-[9px] text-gray-400">Liq</span>
                          <span className="text-xs font-semibold text-rose-500">1.00</span>
                        </div>
                        {/* Buffer ticker */}
                        <div className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-1.5 text-center">
                          <span className="block text-[9px] text-gray-400">Buffer</span>
                          <div className="h-[1rem] overflow-hidden">
                            <div className="panel-ticker-v-fast" style={{ animationDuration: '7s' }}>
                              {["34%","35%","32%","34%"].map((v,i) => (
                                <div key={i} className="flex h-[1rem] items-center justify-center">
                                  <span className="text-xs font-semibold text-[#18323c]">{v}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
              ]}
            />

            <section>
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-14">
                <div className="space-y-3">
                  <SectionEyebrow tone="rose">Risk controls</SectionEyebrow>
                  <SectionTitle className="max-w-[11ch]">Built for controlled leverage.</SectionTitle>
                </div>

                <div className="space-y-6 text-left text-[#39515b]">
                  <p className="max-w-[42rem] text-[1.08rem] leading-[1.6] tracking-[-0.02em] lg:text-[1.18rem]">
                    Avana is designed for AMM collateral, not static token balances. The protocol evaluates pool
                    structure, concentration, accrued fees, and recoverable liquidation value before opening leverage,
                    and it only enables approved markets with defined risk parameters, tighter thresholds for more
                    volatile pools, and exposure caps where needed. When conditions change, users can reduce, close, or
                    repay from one place while unwind logic routes proceeds back into debt repayment.
                  </p>
                </div>
              </div>
            </section>

            <ProductFeatureScrollSection
              eyebrow="System design"
              eyebrowTone="rose"
              title="Built as a layered leverage stack."
              items={leverageSystemLayers}
            />

            <HomepageNewsroomSection
              collection="leverage"
              eyebrowTone="rose"
            />

            <div className="pb-16 md:pb-24">
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
