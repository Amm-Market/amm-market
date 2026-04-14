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
                /* 01 Flexible settlement — multi-venue credit card UI */
                <div key="f1" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.05),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Credit line</span>
                        <span className="rounded-full border border-violet-100 bg-violet-50 px-2 py-0.5 text-[8px] font-semibold text-violet-500">Unified</span>
                      </div>
                      <div className="mt-3 flex items-baseline gap-1">
                        <span className="text-sm font-medium text-gray-400">$</span>
                        <div className="h-[2.35rem] overflow-hidden">
                          <div className="panel-ticker-v-fast" style={{ animationDuration: "10s" }}>
                            {["124,800","125,400","124,200","124,800"].map((v,i) => (
                              <div key={i} className="flex h-[2.35rem] items-center"><span className="text-[1.65rem] font-semibold leading-none tracking-[-0.04em] text-[#18323c]">{v}</span></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 space-y-1.5">
                        {[{venue:"Uniswap v3",alloc:"$62.4K",pct:50},{venue:"Aave Hub",alloc:"$41.6K",pct:33},{venue:"Curve",alloc:"$20.8K",pct:17}].map((v,i) => (
                          <div key={v.venue} className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50/60 px-3 py-1.5">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: i === 0 ? "#8b5cf6" : i === 1 ? "#a78bfa" : "#c4b5fd" }} />
                            <span className="flex-1 text-[10px] font-medium text-[#18323c]">{v.venue}</span>
                            <span className="text-[10px] font-semibold tabular-nums text-gray-500">{v.alloc}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 border-t border-gray-100 pt-2.5">
                        <div className="flex h-2 overflow-hidden rounded-full bg-gray-100">
                          <div className="h-full bg-violet-500" style={{ width: "50%" }} />
                          <div className="h-full bg-violet-400" style={{ width: "33%" }} />
                          <div className="h-full bg-violet-300" style={{ width: "17%" }} />
                        </div>
                        <p className="mt-1.5 text-center text-[7px] font-medium tabular-nums text-gray-400">3 venues · single settlement</p>
                      </div>
                    </div>
                  </div>
                </div>,
                /* 02 Unlock capital efficiency — split metric card with bars */
                <div key="f2" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="grid grid-cols-2 gap-0 divide-x divide-gray-100">
                        <div className="pr-3">
                          <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Before</span>
                          <p className="mt-2 text-2xl font-semibold tabular-nums tracking-[-0.04em] text-gray-300">40<span className="text-sm font-normal">%</span></p>
                          <p className="mt-1 text-[9px] text-gray-400">Capital idle</p>
                          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
                            <div className="h-full w-[40%] rounded-full bg-gray-300" />
                          </div>
                        </div>
                        <div className="pl-3">
                          <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">After</span>
                          <div className="mt-2 h-[1.65rem] overflow-hidden">
                            <div className="panel-ticker-v-fast" style={{ animationDuration: "8s" }}>
                              {["94","96","92","94"].map((v,i) => (
                                <div key={i} className="flex h-[1.65rem] items-center"><span className="text-2xl font-semibold tabular-nums tracking-[-0.04em] text-violet-600">{v}<span className="text-sm font-normal text-violet-300">%</span></span></div>
                              ))}
                            </div>
                          </div>
                          <p className="mt-1 text-[9px] text-violet-400">Capital deployed</p>
                          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
                            <div className="h-full w-[94%] rounded-full bg-violet-500 panel-bar-pulse" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 border-t border-gray-100 pt-3">
                        <div className="flex items-center gap-2">
                          {[{l:"Leverage",v:"4x"},{l:"Short",v:"2x"},{l:"Yield",v:"+8.2%"}].map(m => (
                            <div key={m.l} className="flex-1 rounded-lg border border-gray-100 bg-gray-50/60 px-2 py-1.5 text-center">
                              <span className="block text-[7px] text-gray-400">{m.l}</span>
                              <span className="text-[10px] font-semibold text-violet-600">{m.v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
                /* 03 Retain control — custody card with shield and status grid */
                <div key="f3" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(139,92,246,0.04),transparent_50%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-start gap-3">
                        <div className="panel-breathe flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-violet-200 bg-violet-50 text-violet-500">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Self-custody</span>
                          <div className="mt-1 h-[1.65rem] overflow-hidden">
                            <div className="panel-ticker-v-fast" style={{ animationDuration: "10s" }}>
                              {["$24,840","$24,920","$24,760","$24,840"].map((v,i) => (
                                <div key={i} className="flex h-[1.65rem] items-center"><span className="text-[1.3rem] font-semibold leading-none tracking-[-0.04em] text-[#18323c]">{v}</span></div>
                              ))}
                            </div>
                          </div>
                          <p className="mt-1 text-[9px] text-gray-400">Pledged as collateral</p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {[
                          { l: "Custody", v: "Yours", c: "text-violet-600", icon: "bg-violet-100" },
                          { l: "Counterparty", v: "Zero risk", c: "text-emerald-600", icon: "bg-emerald-100" },
                          { l: "Lockup period", v: "None", c: "text-[#18323c]", icon: "bg-gray-100" },
                          { l: "Exit speed", v: "Instant", c: "text-[#18323c]", icon: "bg-gray-100" },
                        ].map(s => (
                          <div key={s.l} className="rounded-xl border border-gray-100 bg-gray-50/60 px-3 py-2">
                            <span className="block text-[7px] font-medium uppercase tracking-[0.06em] text-gray-400">{s.l}</span>
                            <span className={`mt-0.5 block text-[11px] font-semibold ${s.c}`}>{s.v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 w-full overflow-hidden rounded-lg border border-violet-100 bg-violet-50/40 py-1.5">
                        <div className="flex whitespace-nowrap panel-scroll-h" style={{ animationDuration: "16s" }}>
                          {[0,1].map(d => (
                            <div key={d} className="flex shrink-0 items-center">
                              {["Full control","Self-sovereign","No lockups","Instant exit"].map(s => (
                                <span key={`${d}-${s}`} className="shrink-0 px-3 text-[9px] font-medium text-violet-500">{s} <span className="text-violet-300">·</span></span>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
                /* 04 Add leverage when needed — leverage ring with mode tabs */
                <div key="f4" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.04),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-center gap-4">
                        <div className="relative flex h-[80px] w-[80px] shrink-0 items-center justify-center">
                          <svg className="h-full w-full -rotate-90 panel-ring" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#f3f4f6" strokeWidth="7" />
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#8b5cf6" strokeWidth="7" strokeLinecap="round" strokeDasharray="238.76" strokeDashoffset="119.38" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="h-[1.2rem] overflow-hidden">
                              <div className="panel-ticker-v-fast" style={{ animationDuration: "8s" }}>
                                {["2.4x","3.1x","1.8x","2.4x"].map((v,i) => (
                                  <div key={i} className="flex h-[1.2rem] items-center justify-center"><span className="text-lg font-bold leading-none tracking-[-0.04em] text-[#18323c]">{v}</span></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Leverage</span>
                          <p className="mt-1 text-[10px] leading-relaxed text-gray-500">Tap into LP-backed credit for managed exposure</p>
                          <div className="mt-2.5 inline-flex rounded-lg border border-gray-200 bg-gray-50/80 p-0.5">
                            {["Spot","Perps","Managed"].map((m,i) => (
                              <div key={m} className={`rounded-md px-2 py-1 text-[9px] font-medium ${i === 1 ? "bg-violet-500 text-white" : "text-gray-400"}`}>{m}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 border-t border-gray-100 pt-3">
                        <div className="flex gap-2">
                          {[{l:"Borrow",vals:["$19.8K","$24.2K","$14.6K","$19.8K"],c:"text-[#18323c]"},{l:"Rate",vals:["5.4%","5.6%","5.2%","5.4%"],c:"text-violet-600"},{l:"Health",vals:["1.51","1.48","1.55","1.51"],c:"text-emerald-600"}].map((m,i) => (
                            <div key={m.l} className="flex-1 rounded-xl border border-violet-100/50 bg-[linear-gradient(180deg,rgba(245,243,255,0.4),rgba(255,255,255,0.95))] px-2 py-1.5 text-center">
                              <span className="block text-[7px] font-medium uppercase tracking-[0.06em] text-gray-400">{m.l}</span>
                              <div className="h-3.5 overflow-hidden"><div className="panel-ticker-v-fast" style={{ animationDuration: `${7+i}s` }}>{m.vals.map((v,j) => (<span key={j} className={`block h-3.5 text-[11px] font-semibold tabular-nums ${m.c}`}>{v}</span>))}</div></div>
                            </div>
                          ))}
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
                /* Safe Zone — dashboard card with healthy ring + chart */
                <div key="s1" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.05),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Position health</span>
                        <div className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-emerald-400 panel-pulse" /><span className="text-[8px] font-semibold text-emerald-600">Safe zone</span></div>
                      </div>
                      <div className="mt-3 flex items-center gap-4">
                        <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center">
                          <svg className="h-full w-full -rotate-90 panel-ring" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#d1fae5" strokeWidth="7" />
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#10b981" strokeWidth="7" strokeLinecap="round" strokeDasharray="238.76" strokeDashoffset="35.81" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="h-[1.1rem] overflow-hidden"><div className="panel-ticker-v-fast">{["1.82","1.85","1.80","1.82"].map((v,i) => (<div key={i} className="flex h-[1.1rem] items-center justify-center"><span className="text-[1rem] font-bold tabular-nums text-emerald-600">{v}</span></div>))}</div></div>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1 space-y-2">
                          {[{l:"Usage",v:"64%",w:64,c:"bg-emerald-400"},{l:"Buffer",v:"36%",w:36,c:"bg-emerald-200"}].map(m => (
                            <div key={m.l}>
                              <div className="flex items-center justify-between"><span className="text-[8px] font-medium text-gray-400">{m.l}</span><span className="text-[10px] font-semibold tabular-nums text-emerald-600">{m.v}</span></div>
                              <div className="mt-1 h-[4px] overflow-hidden rounded-full bg-gray-100"><div className={`h-full rounded-full ${m.c}`} style={{ width: `${m.w}%` }} /></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="relative mt-3 h-[52px] w-full overflow-hidden rounded-xl border border-emerald-100/60 bg-[linear-gradient(180deg,#f8fffb_0%,#effcf5_100%)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />
                        <div className="absolute inset-x-3 inset-y-0"><div className="absolute left-0 right-0 top-[33%] border-t border-emerald-100/50" /><div className="absolute left-0 right-0 top-[66%] border-t border-emerald-100/40" /></div>
                        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 52" preserveAspectRatio="none">
                          <defs><linearGradient id="sz-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" stopOpacity="0.18" /><stop offset="100%" stopColor="#10b981" stopOpacity="0" /></linearGradient></defs>
                          <path d="M0,32 C40,30 80,26 120,22 S200,20 240,18 L300,16 L300,52 L0,52Z" fill="url(#sz-g)" />
                          <path d="M0,32 C40,30 80,26 120,22 S200,20 240,18 L300,16" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <div className="absolute bottom-1 right-2 text-[7px] font-medium text-emerald-500">fees accruing</div>
                      </div>
                    </div>
                  </div>
                </div>,
                /* Warning Zone — amber dashboard with action options */
                <div key="s2" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(245,158,11,0.05),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-amber-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Position health</span>
                        <div className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-amber-400 panel-pulse" /><span className="text-[8px] font-semibold text-amber-600">Warning</span></div>
                      </div>
                      <div className="mt-3 flex items-center gap-4">
                        <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center">
                          <svg className="h-full w-full -rotate-90 panel-ring" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#fef3c7" strokeWidth="7" />
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round" strokeDasharray="238.76" strokeDashoffset="95.5" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="h-[1.1rem] overflow-hidden"><div className="panel-ticker-v-fast" style={{ animationDuration: "5s" }}>{["1.22","1.18","1.25","1.22"].map((v,i) => (<div key={i} className="flex h-[1.1rem] items-center justify-center"><span className="text-[1rem] font-bold tabular-nums text-amber-500">{v}</span></div>))}</div></div>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[8px] font-medium text-gray-400">Threshold</div>
                          <div className="mt-1 flex items-center gap-2">
                            <div className="flex-1 h-2 overflow-hidden rounded-full bg-amber-100">
                              <div className="h-full w-[82%] rounded-full bg-amber-400 panel-bar-pulse" style={{ animationDuration: "2s" }} />
                            </div>
                            <span className="text-[10px] font-semibold tabular-nums text-amber-600">82%</span>
                          </div>
                          <p className="mt-1.5 text-[8px] text-amber-500">Approaching liquidation</p>
                        </div>
                      </div>
                      <div className="mt-3 border-t border-amber-100 pt-3">
                        <span className="text-[8px] font-medium uppercase tracking-[0.1em] text-gray-400">Available actions</span>
                        <div className="mt-2 space-y-1.5">
                          {[
                            { l: "Repay debt", sub: "Reduce borrow balance", c: "border-amber-200 bg-amber-50" },
                            { l: "Add collateral", sub: "Increase health factor", c: "border-amber-200 bg-amber-50" },
                            { l: "Auto-reduce", sub: "Automated deleveraging", c: "border-gray-200 bg-gray-50" },
                          ].map(a => (
                            <div key={a.l} className={`flex items-center justify-between rounded-lg border px-3 py-1.5 ${a.c}`}>
                              <div><span className="block text-[10px] font-medium text-[#18323c]">{a.l}</span><span className="text-[7px] text-gray-400">{a.sub}</span></div>
                              <svg width="12" height="12" viewBox="0 0 16 16" className="text-gray-400"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
                /* Liquidation — decline chart with waterfall breakdown */
                <div key="s3" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(244,63,94,0.05),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-rose-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Liquidation</span>
                        <div className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-rose-400 panel-pulse" /><span className="text-[8px] font-semibold text-rose-500">HF &lt; 1.0</span></div>
                      </div>
                      <div className="relative mt-3 h-[60px] w-full overflow-hidden rounded-xl border border-rose-100/60 bg-[linear-gradient(180deg,#fff5f5_0%,#fff1f2_100%)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,63,94,0.08),transparent_60%)]" />
                        <div className="absolute inset-x-3 inset-y-0"><div className="absolute left-0 right-0 top-[33%] border-t border-rose-100/50" /><div className="absolute left-0 right-0 top-[66%] border-t border-rose-100/40" /></div>
                        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 60" preserveAspectRatio="none">
                          <defs><linearGradient id="lq-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f43f5e" stopOpacity="0.14" /><stop offset="100%" stopColor="#f43f5e" stopOpacity="0" /></linearGradient></defs>
                          <path d="M0,12 C40,16 80,22 120,30 S200,44 260,50 L300,54 L300,60 L0,60Z" fill="url(#lq-g)" />
                          <path d="M0,12 C40,16 80,22 120,30 S200,44 260,50 L300,54" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
                          <path d="M0,48 L300,48" fill="none" stroke="#fda4af" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
                        </svg>
                      </div>
                      <div className="mt-3">
                        <span className="text-[8px] font-medium uppercase tracking-[0.1em] text-gray-400">Sequence</span>
                        <div className="mt-2 flex items-center gap-1.5">
                          {[
                            { step: "1", l: "Fees applied", c: "border-emerald-200 bg-emerald-50 text-emerald-700" },
                            { step: "2", l: "LP unwound", c: "border-amber-200 bg-amber-50 text-amber-700" },
                            { step: "3", l: "Residual returned", c: "border-gray-200 bg-gray-50 text-gray-700" },
                          ].map((s, i) => (
                            <div key={s.step} className="flex flex-1 flex-col items-center">
                              <div className={`flex w-full items-center justify-center gap-1 rounded-lg border px-1 py-1.5 ${s.c}`}>
                                <span className="text-[8px] font-bold">{s.step}</span>
                                <span className="text-[8px] font-medium">{s.l}</span>
                              </div>
                              {i < 2 && <svg width="12" height="8" viewBox="0 0 12 8" className="mt-0.5 text-gray-300"><path d="M6 1v5M3 4l3 3 3-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" /></svg>}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-3 border-t border-rose-100 pt-2">
                        <p className="text-center text-[8px] font-medium text-gray-400">Only the principal needed is unwound</p>
                      </div>
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
