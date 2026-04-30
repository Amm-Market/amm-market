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
    title: "Leverage Layer",
    description:
      "When leverage mode is selected, Avana draws on LP-backed credit and deploys the borrowed capital into the selected market structure.",
  },
  {
    title: "Unwind Layer",
    description:
      "Handles voluntary close, partial reduction, repayment, and emergency liquidation with debt coverage as the first priority.",
  },
  {
    title: "Risk Layer",
    description:
      "Collateral, debt, and leverage exposure are tracked together in real time so users can react before the position becomes unsafe.",
  },
  {
    title: "Monitoring Layer",
    description:
      "Monitor collateral value, debt, leverage multiple, liquidation level, and health factor from one unified position view.",
  },
] as const

const leverageWorkflowSteps = [
  {
    title: "Deposit LP",
    description: "Deposit a supported LP position and let Avana value it using pool and position data.",
  },
  {
    title: "Set your leverage",
    description: "Pick your market, target exposure, and multiplier from approved leverage markets.",
  },
  {
    title: "Manage from one place",
    description:
      "Avana borrows, opens, and tracks the position so you can reduce, repay, or close from the same dashboard.",
  },
] as const

const leverageHighlights = [
  {
    title: "Borrow-rate pricing",
    description:
      "Leverage cost is determined by borrow rates from Aave Hub liquidity and LP risk parameters — not perpetual funding rates.",
  },
  {
    title: "Pool-aware risk engine",
    description:
      "Valuation accounts for pool composition, tick range, concentration, and accrued fees. Not just the token price.",
  },
  {
    title: "Unified risk dashboard",
    description:
      "Collateral, debt, leverage multiple, and health factor visible in one view. No need to check multiple protocols.",
  },
  {
    title: "Automatic unwind paths",
    description:
      "When a position needs to close, smart routing handles debt repayment, collateral release, and exposure reduction in sequence.",
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
  title: `Trade - ${SITE_NAME}`,
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
    canonical: siteRoutes.trade,
  },
  openGraph: {
    title: `Trade - ${SITE_NAME}`,
    description: pageDescription,
    url: siteRoutes.trade,
    images: [
      {
        url: buildOgImagePath({
          title: `Trade - ${SITE_NAME}`,
          subtitle: "LP-backed leverage and managed perps exposure",
        }),
        alt: `Trade - ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Trade - ${SITE_NAME}`,
    description: pageDescription,
    images: [
      buildOgImagePath({
        title: `Trade - ${SITE_NAME}`,
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
                      sizes="(max-width: 1024px) calc(100vw - 40px), 700px"
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

      <section className="deferred-viewport border-t border-gray-200 bg-white py-12 md:py-16 2xl:py-14">
        <div className="site-content-shell">
          <LeverageGlanceShowcaseSection />
        </div>
      </section>

      <section className="deferred-viewport bg-white py-12 md:py-16 2xl:py-14">
        <div className="site-content-shell">
          <div className="flex flex-col gap-6">
            <div className="flex max-w-[600px] flex-col gap-2">
              <SectionEyebrow tone="rose">How it works</SectionEyebrow>
              <SectionTitle>Leverage in three steps</SectionTitle>
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

      <section className="deferred-viewport-tall bg-white py-12 md:py-16 2xl:py-14">
        <div className="site-content-shell">
          <div className="flex max-w-[600px] flex-col gap-2">
            <SectionEyebrow tone="rose">What&apos;s new</SectionEyebrow>
            <SectionTitle><span className="whitespace-nowrap">What sets LP leverage apart.</span></SectionTitle>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-4">
            {/* Hero card — image, spans 2 columns and 2 rows */}
            <article className="relative overflow-hidden rounded-[1.8rem] bg-[#f5f3f0] md:col-span-2 md:row-span-2">
              <Image
                src="/images/leverage-hero-placeholder.png"
                alt="Leverage dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </article>

            {/* Right-side cards (4 cards in a 2×2 grid beside the hero) */}
            {leverageHighlights.map((item, i) => (
              <article
                key={item.title}
                className="flex flex-col rounded-[1.8rem] border border-gray-200 bg-gray-50 p-6 md:p-7"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-medium tracking-[-0.03em] text-[#18323c]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}

          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 sm:px-6">
        <div className="relative z-0 flex flex-1 flex-col">
          <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20 2xl:space-y-36 2xl:pt-18 2xl:pb-18">
            <ProductFeatureScrollSection
              eyebrow="Core Product"
              eyebrowTone="rose"
              title={<span className="lg:whitespace-nowrap">Perps, built on top of LP collateral</span>}
              items={leverageFeatureItems}
              panels={[
                /* 01 LP Backed Leverage — collateral card with multiplier ring */
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
                /* 02 Unwind Layer — escalator step list */
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
                /* 05 Live Risk Monitoring — scrolling chart with multi-metric console */
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
                /* 04 One Position, One View — cycling position card with metrics */
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
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-14">
                <div className="space-y-3">
                  <SectionEyebrow tone="rose">Risk controls</SectionEyebrow>
                  <SectionTitle className="max-w-[11ch]">Designed for safe leverage.</SectionTitle>
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
