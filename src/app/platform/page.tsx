import type { Metadata } from "next"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Droplets, Scale, ShieldCheck } from "lucide-react"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import PlatformToolsShowcaseSection from "@/components/platform-tools-showcase-section"
import ProductFeatureScrollSection from "@/components/product-feature-scroll-section"
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
    title: "Add leverage when needed",
    description:
      "Use LP-backed borrowing capacity to open managed leverage or perps exposure from the same interface.",
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

const platformWorkflowSteps = [
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

function WorkflowStepCard({
  index,
  title,
  description,
  accent,
  icon,
  isLast,
}: {
  index: number
  title: string
  description: string
  accent: string
  icon: LucideIcon
  isLast: boolean
}) {
  const Icon = icon

  return (
    <div className="relative flex flex-1 flex-col">
      {/* Connecting line between cards (desktop only) */}
      {!isLast && (
        <div className="pointer-events-none absolute right-0 top-9 z-10 hidden w-[calc(100%-1rem)] translate-x-[50%] lg:block">
          <div className="h-px w-full bg-gradient-to-r from-gray-300 via-gray-200 to-transparent" />
        </div>
      )}

      <article className="relative flex h-full flex-col rounded-[1.6rem] border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-gray-300 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)] md:p-8">
        {/* Step number + icon row */}
        <div className="flex items-center justify-between">
          <span className="text-[2.8rem] font-medium leading-none tracking-[-0.05em] text-gray-200 md:text-[3.2rem]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className={`flex h-12 w-12 items-center justify-center rounded-[14px] ${accent}`}>
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </div>
        </div>

        {/* Content */}
        <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-[#18323c] md:text-xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-[0.94rem] md:leading-[1.7]">
          {description}
        </p>
      </article>
    </div>
  )
}

const platformEdgeItems = [
  {
    stat: "1",
    label: "interface",
    title: "Unified workflow",
    description:
      "Deposit, borrow, leverage, monitor, and automate from one place. No protocol hopping or tab switching.",
  },
  {
    stat: "0%",
    label: "fee loss",
    title: "Zero yield sacrifice",
    description:
      "LP positions keep earning fees while used as collateral. Nothing paused, nothing forfeited, nothing unwound.",
  },
  {
    stat: "Live",
    label: "tracking",
    title: "Real-time health",
    description:
      "Health factor, debt ratios, and exposure updated continuously. React before conditions change, not after.",
  },
  {
    stat: "Full",
    label: "control",
    title: "Automation on your terms",
    description:
      "Set rules for repayment, deleveraging, and position protection. Override or adjust anytime.",
  },
] as const

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
                    <Image
                      src="https://framerusercontent.com/images/wHZUVowhaR4lNZZRsYJJW7ik9M.jpg?scale-down-to=1024&width=8368&height=5584"
                      alt="Two people are sitting in the office, discussing the upcoming project."
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1440px) 92vw, 1360px"
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
          <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20 2xl:space-y-36 2xl:pt-18 2xl:pb-18">
            <section>
              <div className="space-y-4 text-left">
                <SectionEyebrow tone="violet">How it works</SectionEyebrow>
                <SectionTitle>LP borrowing, simplified.</SectionTitle>
                <p className="max-w-[40rem] text-[1.02rem] leading-[1.72] text-[#5f6f84] md:text-[1.08rem]">
                  Deposit LP positions, see your borrowing power, and unlock liquidity while
                  fees keep accruing. Limits, health, and automation stay in one place.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-5 md:mt-14 lg:flex-row lg:gap-6">
                {platformWorkflowSteps.map((step, i) => (
                  <WorkflowStepCard
                    key={step.title}
                    index={i}
                    title={step.title}
                    description={step.description}
                    accent={step.accent}
                    icon={step.icon}
                    isLast={i === platformWorkflowSteps.length - 1}
                  />
                ))}
              </div>
            </section>

            <section>
              <PlatformToolsShowcaseSection />
            </section>

            <ProductFeatureScrollSection
              eyebrow="Financing"
              eyebrowTone="violet"
              title="Flexible capital, one interface."
              items={financingFeatures}
              panels={[
                /* 01 Flexible settlement — network mesh showing venues converging to credit */
                <div key="f1" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(139,92,246,0.04),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center px-5">
                    <div className="w-full max-w-[15.5rem]">
                      <div className="flex items-stretch gap-3">
                        <div className="flex flex-col justify-center gap-2">
                          {["DEX A","DEX B","DEX C"].map((venue, i) => (
                            <div key={venue} className="financing-venue-node rounded-lg border border-gray-200 bg-gray-50/80 px-3 py-2 text-center" style={{ animationDelay: `${i * 0.4}s` }}>
                              <span className="text-[9px] font-medium text-gray-500">{venue}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col items-center justify-center gap-0.5">
                          {[0,1,2].map(i => (
                            <svg key={i} width="40" height="18" viewBox="0 0 40 18" className="text-violet-300">
                              <path d="M4 9 H32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 4" className="panel-dash-flow" />
                              <path d="M28 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                          ))}
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="financing-credit-hub rounded-2xl border-2 border-violet-200 bg-violet-50 px-4 py-5 text-center">
                            <span className="block text-[2rem] font-semibold leading-none tracking-[-0.04em] text-violet-600 panel-breathe">1</span>
                            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.1em] text-violet-400">Credit</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-center">
                        <div className="flex items-center gap-1.5 rounded-full border border-violet-100 bg-violet-50/60 px-3 py-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-violet-400 panel-pulse" />
                          <span className="text-[9px] font-medium text-violet-500">Unified settlement</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
                /* 02 Unlock capital efficiency — waterfall chart with animated segments */
                <div key="f2" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                    <div className="w-full max-w-[15rem]">
                      <div className="rounded-2xl border border-gray-200 bg-gray-50/40 p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[8px] font-medium uppercase tracking-[0.14em] text-gray-400">Capital Usage</span>
                          <div className="h-[0.85rem] overflow-hidden">
                            <div className="panel-ticker-v-fast" style={{ animationDuration: "7s" }}>
                              {["94%","96%","91%","94%"].map((v,i) => (
                                <div key={i} className="flex h-[0.85rem] items-center">
                                  <span className="text-[10px] font-semibold text-violet-600">{v}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-end justify-between gap-2 h-[90px]">
                          {[
                            { h: 40, label: "Idle", c: "bg-gray-200" },
                            { h: 65, label: "Borrow", c: "bg-violet-300" },
                            { h: 80, label: "Lever", c: "bg-violet-400" },
                            { h: 90, label: "Short", c: "bg-violet-500" },
                            { h: 70, label: "Yield", c: "bg-emerald-400" },
                          ].map((bar, i) => (
                            <div key={bar.label} className="flex flex-1 flex-col items-center gap-1">
                              <div className="w-full overflow-hidden rounded-t-md" style={{ height: `${bar.h}%` }}>
                                <div className={`h-full w-full ${bar.c} financing-bar-grow`} style={{ animationDelay: `${i * 0.3}s` }} />
                              </div>
                              <span className="text-[7px] font-medium text-gray-400">{bar.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-2 flex justify-center gap-2">
                        {[{ l: "Before", v: "40%", c: "text-gray-400" }, { l: "After", v: "94%", c: "text-violet-600" }].map(s => (
                          <div key={s.l} className="rounded-lg border border-gray-100 bg-gray-50/80 px-2.5 py-1 text-center">
                            <span className="block text-[8px] text-gray-400">{s.l}</span>
                            <span className={`text-[10px] font-semibold ${s.c}`}>{s.v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>,
                /* 03 Retain control — vault with lock mechanism */
                <div key="f3" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                    <div className="w-full max-w-[14rem]">
                      <div className="relative rounded-2xl border-2 border-gray-200 bg-gray-50/60 p-5 text-center">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <div className="financing-lock-icon flex h-6 w-6 items-center justify-center rounded-full bg-violet-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="2" />
                              <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </div>
                        </div>
                        <div className="mt-2 flex flex-col items-center">
                          <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-gray-400">Your Vault</span>
                          <span className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#18323c] panel-breathe">$24.8K</span>
                          <span className="mt-0.5 text-[10px] text-gray-400">Pledged as collateral</span>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          {[
                            { l: "Custody", v: "Yours", c: "text-violet-600" },
                            { l: "Risk", v: "Zero", c: "text-emerald-600" },
                            { l: "Lockup", v: "None", c: "text-[#18323c]" },
                            { l: "Exit", v: "Instant", c: "text-[#18323c]" },
                          ].map(s => (
                            <div key={s.l} className="rounded-lg border border-gray-100 bg-white px-2 py-1.5 text-center">
                              <span className="block text-[7px] font-medium text-gray-400">{s.l}</span>
                              <span className={`text-[10px] font-semibold ${s.c}`}>{s.v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
                /* 04 Add leverage when needed — adjustable dial with mode selector */
                <div key="f4" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                    <div className="w-full max-w-[14rem]">
                      <div className="flex justify-center">
                        <div className="relative h-[100px] w-[180px]">
                          <svg viewBox="0 0 180 100" className="h-full w-full">
                            <path d="M 20 90 A 70 70 0 0 1 160 90" fill="none" stroke="#f3f4f6" strokeWidth="8" strokeLinecap="round" />
                            <path d="M 20 90 A 70 70 0 0 1 160 90" fill="none" stroke="#8b5cf6" strokeWidth="8" strokeLinecap="round" strokeDasharray="220" className="financing-gauge-fill" />
                            {["1x","2x","3x","4x","5x"].map((label, i) => {
                              const angle = -180 + i * 45;
                              const rad = (angle * Math.PI) / 180;
                              const cx = 90 + 82 * Math.cos(rad);
                              const cy = 90 + 82 * Math.sin(rad);
                              return <text key={label} x={cx} y={cy} textAnchor="middle" fill="#9ca3af" fontSize="8" fontWeight="500">{label}</text>;
                            })}
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
                            <div className="h-[0.95rem] overflow-hidden">
                              <div className="panel-ticker-v-fast" style={{ animationDuration: "9s" }}>
                                {["2.4x","3.1x","1.8x","2.4x"].map((v,i) => (
                                  <div key={i} className="flex h-[0.95rem] items-center justify-center">
                                    <span className="text-lg font-semibold tracking-[-0.03em] text-[#18323c]">{v}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <span className="text-[8px] font-medium text-gray-400">leverage</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-center">
                        <div className="inline-flex rounded-xl border border-gray-200 bg-gray-50/80 p-1">
                          {["Spot","Perps","Managed"].map((mode, i) => (
                            <button key={mode} type="button" className={`rounded-lg px-3 py-1.5 text-[10px] font-medium transition-colors ${i === 1 ? "bg-violet-500 text-white" : "text-gray-400 hover:text-gray-600"}`}>
                              {mode}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="mt-2.5 flex justify-center gap-2">
                        <div className="flex items-center gap-1.5 rounded-full border border-violet-100 bg-violet-50/60 px-2.5 py-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-violet-400 panel-pulse" />
                          <span className="text-[9px] font-medium text-violet-500">Adjustable anytime</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
              ]}
            />

            <ProductFeatureScrollSection
              eyebrow="Position Safety"
              eyebrowTone="violet"
              title="Know exactly what happens before it happens."
              items={safetyFeatures}
              panels={[
                /* Safe Zone */
                <div key="s1" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.04),transparent_60%)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="relative h-[110px] w-[110px]">
                      <svg className="h-full w-full -rotate-90 panel-ring" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="5" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="5" strokeLinecap="round" strokeDasharray="251.33" strokeDashoffset="37.7" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="h-[1.2rem] overflow-hidden"><div className="panel-ticker-v-fast">{["1.82","1.85","1.80","1.82"].map((v,i)=>(<div key={i} className="flex h-[1.2rem] items-center justify-center"><span className="text-lg font-semibold text-emerald-600">{v}</span></div>))}</div></div>
                        <span className="mt-0.5 text-[9px] font-medium text-gray-400">health</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 panel-pulse" /><span className="text-[10px] font-medium text-gray-500">Safe — fees accruing</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      {[{l:"Usage",v:"64%"},{l:"Buffer",v:"36%"}].map(s=>(
                        <div key={s.l} className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-1.5 text-center"><span className="block text-[9px] text-gray-400">{s.l}</span><span className="text-xs font-semibold text-emerald-600">{s.v}</span></div>
                      ))}
                    </div>
                  </div>
                </div>,
                /* Warning Zone */
                <div key="s2" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(245,158,11,0.04),transparent_60%)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                    <div className="relative h-[110px] w-[110px]">
                      <svg className="h-full w-full -rotate-90 panel-ring" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="5" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" strokeDasharray="251.33" strokeDashoffset="100.53" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="h-[1.2rem] overflow-hidden"><div className="panel-ticker-v-fast" style={{animationDuration:'5s'}}>{["1.22","1.18","1.25","1.22"].map((v,i)=>(<div key={i} className="flex h-[1.2rem] items-center justify-center"><span className="text-lg font-semibold text-amber-500">{v}</span></div>))}</div></div>
                        <span className="mt-0.5 text-[9px] font-medium text-gray-400">health</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-400 panel-pulse" /><span className="text-[10px] font-medium text-amber-600">Approaching threshold</span>
                    </div>
                    <div className="mt-3 w-full max-w-[14rem] space-y-1.5">
                      {[{l:"Repay debt",c:"text-amber-600"},{l:"Add collateral",c:"text-amber-600"},{l:"Auto-reduce",c:"text-gray-500"}].map(a=>(
                        <div key={a.l} className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-300" /><span className={`text-[10px] font-medium ${a.c}`}>{a.l}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>,
                /* Liquidation */
                <div key="s3" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(244,63,94,0.04),transparent_55%)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                    <div className="w-full max-w-[15rem]">
                      {/* Scrolling decline chart */}
                      <div className="h-[60px] overflow-hidden">
                        <div className="flex panel-scroll-h-chart" style={{width:'200%'}}>
                          {[0,1].map(d=>(
                            <svg key={d} className="h-[60px] shrink-0" style={{width:'50%'}} viewBox="0 0 300 60" preserveAspectRatio="none">
                              <defs><linearGradient id={`liq-f${d}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f43f5e" stopOpacity="0.08" /><stop offset="100%" stopColor="#f43f5e" stopOpacity="0" /></linearGradient></defs>
                              <path d="M0,12 C30,15 60,20 100,28 S180,42 230,48 L300,54 L300,60 L0,60Z" fill={`url(#liq-f${d})`} />
                              <path d="M0,12 C30,15 60,20 100,28 S180,42 230,48 L300,54" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-rose-400 panel-pulse" /><span className="text-[10px] font-medium text-rose-500">Health below 1.0</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      {[{l:"Fees first",v:"Applied"},{l:"LP unwound",v:"Partial"},{l:"Residual",v:"Returned"}].map(s=>(
                        <div key={s.l} className="rounded-lg border border-gray-100 bg-gray-50/80 px-2.5 py-1.5 text-center"><span className="block text-[9px] text-gray-400">{s.l}</span><span className="text-[10px] font-semibold text-rose-500">{s.v}</span></div>
                      ))}
                    </div>
                  </div>
                </div>,
              ]}
            />

            <section className="relative -mx-4 overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#f8f7fc_0%,#eee8f8_50%,#f5f3fa_100%)] px-6 py-12 sm:-mx-6 sm:px-10 md:px-12 md:py-16 lg:py-20 2xl:py-18">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(139,92,246,0.10),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(99,102,241,0.08),transparent_35%)]" />
              <div className="relative z-10">
                <div className="max-w-[600px] space-y-3">
                  <SectionEyebrow tone="violet">Platform edge</SectionEyebrow>
                  <SectionTitle>Why LPs choose Avana.</SectionTitle>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-5">
                  {platformEdgeItems.map((item) => (
                    <article key={item.title} className="flex flex-col rounded-2xl bg-white/70 p-6 backdrop-blur-sm">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[2.5rem] font-medium leading-none tracking-[-0.04em] text-violet-600">
                          {item.stat}
                        </span>
                        <span className="text-sm font-medium text-violet-400">
                          {item.label}
                        </span>
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-[#18323c]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
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

            <div className="pb-16 md:pb-24 2xl:pb-22">
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
