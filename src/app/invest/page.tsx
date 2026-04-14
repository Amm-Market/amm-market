import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import InvestApySection from "@/components/invest-apy-section"
import InvestGrowthCalculatorSection from "@/components/invest-growth-calculator-section"
import ProductFeatureScrollSection from "@/components/product-feature-scroll-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

const pageDescription =
  "Supply single assets into LP-backed credit markets, keep liquidity flexible, and earn demand-driven yield across Avana."

const stableSpokeFaqItems: InlineFaqItem[] = [
  {
    value: "stable-1",
    question: "Is my capital safe?",
    answer:
      "All loans are overcollateralized, and borrowers must remain above the required health threshold. If a position becomes unsafe, liquidation begins automatically through a controlled process designed to protect lender capital and contain losses within that market.",
  },
  {
    value: "stable-2",
    question: "Where does my yield come from?",
    answer:
      "Your yield comes from interest paid by LP backed borrowers. Rates are driven by base utilization at the Aave v4 Hub, with additional Spoke premiums reflecting the risk profile of the LP collateral being funded.",
  },
  {
    value: "stable-3",
    question: "How is this different from supplying to Aave directly?",
    answer:
      "Avana is built on Aave v4 and uses its Hub for liquidity, but it serves a different borrower class. Instead of standard token collateral, Avana enables LP positions as collateral, which creates new borrowing demand and expands yield opportunities for suppliers.",
  },
  {
    value: "stable-4",
    question: "Can I withdraw at any time?",
    answer:
      "Yes, as long as there is sufficient available liquidity in the market. There are no lockups. If utilization is very high, withdrawals may depend on repayments or new liquidity entering the system.",
  },
  {
    value: "stable-5",
    question: "What assets can I supply?",
    answer:
      "At launch, supported assets include GHO, USDC, USDT, ETH, and WBTC, with additional assets added through governance over time. New listings prioritize liquidity depth, reliable oracle support, and strong market demand.",
  },
  {
    value: "stable-6",
    question: "Why can yields be higher than standard lending markets?",
    answer:
      "Avana adds LP specific borrower demand on top of the shared Hub liquidity layer. That demand can increase utilization and support an additional risk premium, which gives suppliers access to yield that standard lending markets may not capture.",
  },
]

const investFeatureItems = [
  {
    title: "Easy money movement",
    description: "Access and move capital whenever liquidity is available, all from one simple online interface.",
  },
  {
    title: "A market-leading rate",
    description: "Supplier yield is designed to sit above most bank cash products while staying tied to real onchain demand.",
  },
  {
    title: "Supply once, power many borrowers",
    description: "One deposit can help fund a network of specialized LP borrowers across multiple spoke markets through one cleaner capital surface.",
  },
  {
    title: "Base rate plus risk premium",
    description: "Supplier returns combine the Aave v4 Hub base rate with Avana's LP borrower risk premium.",
  },
] as const

export const metadata: Metadata = {
  title: `Invest - ${SITE_NAME}`,
  description: pageDescription,
  keywords: [
    "LP-backed credit",
    "DeFi lending",
    "stablecoin yield",
    "Aave v4",
    "onchain yield",
    "supply markets",
  ],
  alternates: {
    canonical: siteRoutes.invest,
  },
  openGraph: {
    title: `Invest - ${SITE_NAME}`,
    description: pageDescription,
    url: siteRoutes.invest,
    images: [
      {
        url: buildOgImagePath({
          title: `Invest - ${SITE_NAME}`,
          subtitle: "Supply assets into LP-backed credit markets",
        }),
        alt: `Invest - ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Invest - ${SITE_NAME}`,
    description: pageDescription,
    images: [
      buildOgImagePath({
        title: `Invest - ${SITE_NAME}`,
        subtitle: "Supply assets into LP-backed credit markets",
      }),
    ],
  },
}

export default function InvestPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 pt-10 sm:px-6 sm:pt-12 md:px-8 md:pt-20 lg:max-w-[64rem] lg:min-h-0 lg:px-0">
        <div className="relative z-0">
          <section className="pb-4 md:pb-6 lg:pb-8 xl:pb-10">
            <div className="w-full pt-3 pb-6 md:pt-5 md:pb-10 lg:pb-2 xl:pb-3">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
              {/* Left Column - Hero Image */}
                <div className="order-2 mb-8 w-full lg:mb-0 lg:w-[55%]">
                  <div className="relative mx-auto w-full max-w-none lg:mx-0 lg:max-w-[650px] xl:max-w-[700px]">
                  <Image
                    src="/images/Hero__4_.png"
                    alt="App interface"
                    width={1400}
                    height={1400}
                    className="w-full h-auto rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
                    sizes="(max-width: 1024px) calc(100vw - 40px), 700px"
                    priority
                    fetchPriority="high"
                  />
                </div>
              </div>

              {/* Right Column - Text Content */}
                <div className="order-1 mb-8 w-full text-left lg:order-2 lg:mb-0 lg:w-[45%]">
                  <h1 className="mb-3 max-w-[14ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:max-w-[11ch] md:text-5xl lg:text-5xl xl:text-6xl">
                    <span className="lg:whitespace-nowrap">Lend into</span>
                    <br />
                    <span className="lg:whitespace-nowrap">LP-backed credit.</span>
                  </h1>

                  <p className="mb-5 max-w-[34ch] text-base leading-relaxed text-gray-600 sm:max-w-[38ch] md:mb-6 md:text-lg">
                    Supply single assets, earn demand-driven yield, and keep capital flexible as new opportunities appear.
                  </p>

                  <div className="flex max-w-md flex-row flex-wrap items-start gap-2 sm:gap-3">
                    <Link
                      href="/faq"
                      prefetch={false}
                      className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold rounded-full transition-colors"
                    >
                      Get Early Access
                    </Link>
                    <Link
                      href="/developers"
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

      <section className="deferred-viewport border-t border-gray-200 bg-white pt-8 pb-8 md:pt-10 md:pb-10 2xl:pt-9 2xl:pb-9">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[76rem]">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,27rem)_minmax(0,1fr)] md:items-center md:gap-8 lg:gap-10 xl:grid-cols-[minmax(0,28rem)_minmax(0,1fr)]">
              <div className="space-y-4 md:self-center">
                <SectionEyebrow tone="emerald">Avana Relaunch</SectionEyebrow>
                <SectionTitle className="max-w-[15ch] text-[clamp(2.4rem,4.2vw,4rem)] leading-[0.98] lg:text-[3.25rem]">
                  <span className="block">One deposit,</span>
                  <span className="block">many LP markets.</span>
                </SectionTitle>
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
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InvestApySection />

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col">
        <div className="flex-1 flex flex-col relative z-0">
        {/* Rest of page content */}
        <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20 2xl:space-y-36 2xl:pt-18 2xl:pb-18">
          <InvestGrowthCalculatorSection />

          <ProductFeatureScrollSection
            eyebrowTone="emerald"
            title="Under the hood."
            items={investFeatureItems}
            panels={[
              /* 01 Easy money movement — deposit/withdraw flow card */
              <div key="p1" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.04),transparent_55%)]" />
                <div className="absolute inset-0 flex items-center justify-center p-5">
                  <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Capital flow</span>
                      <div className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-emerald-400 panel-pulse" /><span className="text-[8px] font-medium text-emerald-500">Live</span></div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M9 2v11M4 9l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <svg width="24" height="18" viewBox="0 0 24 18" className="shrink-0 text-emerald-400" aria-hidden="true"><path d="M2 9H22" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 5" strokeLinecap="round" className="panel-dash-flow" /><path d="M18 5l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <div className="min-w-0 flex-1 rounded-[14px] border border-gray-200 bg-gray-50/90 px-3 py-2.5 text-center">
                        <span className="text-sm font-medium text-gray-400">$</span>
                        <div className="inline-block h-[1.65rem] overflow-hidden align-middle">
                          <div className="panel-ticker-v-fast" style={{ animationDuration: "9s" }}>
                            {["72,400","72,680","72,120","72,400"].map((v,i) => (
                              <div key={i} className="flex h-[1.65rem] items-center"><span className="text-[1.35rem] font-semibold leading-none tracking-[-0.04em] text-[#18323c]">{v}</span></div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-1.5 flex items-center justify-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-0.5"><span className="h-1.5 w-1.5 rounded-full bg-[#2775ca]" /><span className="text-[10px] font-medium text-gray-700">USDC</span></div>
                      </div>
                      <svg width="24" height="18" viewBox="0 0 24 18" className="shrink-0 text-gray-300" aria-hidden="true"><path d="M2 9H22" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 5" strokeLinecap="round" className="panel-dash-flow" style={{ animationDelay: "0.35s" }} /><path d="M18 5l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 text-gray-500">
                        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M9 16V5M4 9l5-5 5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                    </div>
                    <div className="mt-3 border-t border-gray-100 pt-3">
                      <div className="flex gap-2">
                        {[{l:"Deposited",v:"+72K",c:"text-emerald-600 bg-emerald-50"},{l:"Withdrawn",v:"11K",c:"text-gray-600 bg-gray-50"},{l:"Yield",v:"+$4.2K",c:"text-emerald-600 bg-emerald-50"}].map(m => (
                          <div key={m.l} className="flex-1 rounded-lg border border-gray-100 px-2 py-1.5 text-center">
                            <span className="block text-[7px] font-medium text-gray-400">{m.l}</span>
                            <span className={`rounded-md px-1 text-[10px] font-semibold tabular-nums ${m.c}`}>{m.v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>,

              /* 02 A market-leading rate — APY card with sparkline chart */
              <div key="p2" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(16,185,129,0.05),transparent_55%)]" />
                <div className="absolute inset-0 flex items-center justify-center p-5">
                  <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Supply APY</span>
                        <div className="mt-1 h-[2.8rem] overflow-hidden">
                          <div className="panel-ticker-v-fast" style={{ animationDuration: "8s" }}>
                            {["6.1","6.2","6.0","6.1"].map((v,i) => (
                              <div key={i} className="flex h-[2.8rem] items-center"><span className="text-[2.5rem] font-semibold leading-none tracking-[-0.06em] text-[#18323c]">{v}<span className="text-lg font-normal text-gray-300">%</span></span></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="mt-1 shrink-0 rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-800">APY</span>
                    </div>
                    <div className="relative mt-3 h-[80px] w-full overflow-hidden rounded-[14px] border border-emerald-100/60 bg-[linear-gradient(180deg,#f8fffb_0%,#effcf5_100%)]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />
                      <div className="absolute inset-x-3 inset-y-0"><div className="absolute left-0 right-0 top-[25%] border-t border-emerald-100/60" /><div className="absolute left-0 right-0 top-1/2 border-t border-emerald-100/50" /><div className="absolute left-0 right-0 top-[75%] border-t border-emerald-100/40" /></div>
                      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 80" preserveAspectRatio="none" aria-hidden="true">
                        <defs><linearGradient id="inv-rate-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#14b8a6" stopOpacity="0.18" /><stop offset="100%" stopColor="#14b8a6" stopOpacity="0" /></linearGradient></defs>
                        <path d="M0,58 C45,52 90,44 130,34 S210,18 250,12 L300,8 L300,80 L0,80Z" fill="url(#inv-rate-g)" />
                        <path d="M0,58 C45,52 90,44 130,34 S210,18 250,12 L300,8" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
                        <circle className="panel-ring" cx="288" cy="10" r="4" fill="white" stroke="#0d9488" strokeWidth="2" />
                      </svg>
                      <div className="absolute bottom-1.5 left-3 text-[7px] font-medium text-emerald-400">7d</div>
                      <div className="absolute bottom-1.5 right-3 text-[7px] font-medium text-emerald-500">now</div>
                    </div>
                    <div className="mt-2 flex gap-2">
                      {[{l:"24h fees",vals:["+$48.20","+$51.30","+$49.80","+$48.20"]},{l:"30d yield",vals:["+$1,420","+$1,485","+$1,510","+$1,420"]}].map(m => (
                        <div key={m.l} className="flex-1 rounded-xl border border-emerald-100/50 bg-[linear-gradient(180deg,rgba(236,253,245,0.4),rgba(255,255,255,0.95))] px-2 py-1.5 text-center">
                          <span className="block text-[8px] font-medium text-gray-400">{m.l}</span>
                          <div className="h-3.5 overflow-hidden"><div className="panel-ticker-v-fast" style={{ animationDuration: m.l === "24h fees" ? "7s" : "9s" }}>{m.vals.map((v,i) => (<span key={i} className="block h-3.5 text-[11px] font-semibold tabular-nums text-emerald-600">{v}</span>))}</div></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>,

              /* 03 Supply once — hub with spoke branches */
              <div key="p3" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white">
                <div className="absolute inset-0 flex items-center justify-center p-5">
                  <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                    <div className="relative isolate min-h-[9.5rem]">
                      <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full text-gray-200" viewBox="0 0 260 120" fill="none" aria-hidden="true">
                        <path d="M52 60H92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M52 60H92" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 6" className="panel-dash-flow" />
                        <path d="M128 60C150 60 168 38 196 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M128 60H200" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M128 60C150 60 168 82 196 92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M128 60C150 60 168 38 196 28" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 7" className="panel-dash-flow" />
                        <path d="M128 60H200" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 7" className="panel-dash-flow" style={{ animationDelay: "0.25s" }} />
                        <path d="M128 60C150 60 168 82 196 92" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 7" className="panel-dash-flow" style={{ animationDelay: "0.5s" }} />
                      </svg>
                      <div className="relative z-10 flex min-h-[9.5rem] items-center gap-1.5 sm:gap-2">
                        <div className="w-[4.5rem] shrink-0 rounded-xl border border-gray-200 bg-gray-50/90 px-2 py-2.5 text-center shadow-sm sm:w-[4.75rem]">
                          <p className="text-xs font-semibold tabular-nums text-[#18323c]">72k</p>
                          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-600">USDC</p>
                        </div>
                        <div className="flex min-w-0 flex-1 items-center justify-center">
                          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-emerald-300 bg-emerald-50 text-xs font-bold text-emerald-900 shadow-sm sm:h-12 sm:w-12">
                            H<span className="panel-ring pointer-events-none absolute inset-[-5px] rounded-full border border-emerald-100/90" />
                          </div>
                        </div>
                        <div className="flex w-[5rem] shrink-0 flex-col justify-center gap-1.5 sm:w-[5.5rem]">
                          {[{pair:"ETH/USDC",n:3},{pair:"WBTC/ETH",n:2},{pair:"ARB/USDC",n:4}].map(s => (
                            <div key={s.pair} className="rounded-lg border border-gray-200 bg-white px-2 py-1 shadow-sm">
                              <span className="block text-[8px] font-semibold text-[#18323c]">{s.pair}</span>
                              <div className="mt-0.5 flex gap-0.5">{Array.from({length:s.n}).map((_,i) => (<span key={i} className="h-1 w-1 rounded-full bg-emerald-300" />))}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>,

              /* 04 Base + premium — stacked rate breakdown with sheen */
              <div key="p4" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white">
                <div className="absolute inset-0 flex items-center justify-center p-5">
                  <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                    <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-3">
                      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-500"><span>Hub base</span><span>+ Spoke premium</span></div>
                      <div className="mt-2 flex h-10 w-full overflow-hidden rounded-lg bg-white shadow-inner">
                        <div className="flex items-center justify-center bg-gray-200/90 text-sm font-semibold tabular-nums text-[#18323c]" style={{ width: "57%" }}>4.1%</div>
                        <div className="flex items-center justify-center bg-emerald-500 text-sm font-semibold tabular-nums text-white" style={{ width: "43%" }}>+3.1%</div>
                      </div>
                    </div>
                    <div className="relative mt-4 overflow-hidden rounded-[16px] border border-emerald-200 bg-emerald-50/80 px-4 py-4">
                      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),rgba(255,255,255,0)_42%,rgba(16,185,129,0.08))]" />
                      <div className="panel-sheen-slide pointer-events-none absolute inset-y-0 left-0 z-[1] w-1/2 bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-90" />
                      <div className="relative z-[2] flex items-end justify-between gap-3">
                        <div className="min-w-0 text-left">
                          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/90 ring-1 ring-emerald-100"><div className="h-full w-full rounded-full bg-emerald-500" /></div>
                          <span className="mt-3 block text-[2.5rem] font-semibold tabular-nums leading-none tracking-[-0.04em] text-[#18323c]">7.2<span className="text-xl font-normal text-gray-300">%</span></span>
                        </div>
                        <span className="shrink-0 rounded-full border border-emerald-200 bg-white px-2.5 py-1 text-xs font-semibold text-emerald-900 shadow-sm">=</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>,
            ]}
          />

          <section>
            <div className="flex flex-col gap-3">
              <SectionEyebrow tone="emerald">How it works</SectionEyebrow>
              <SectionTitle>
                Get started
                <span className="md:hidden">
                  <br />
                </span>
                <span className="hidden md:inline"> </span>
                with as little as $1.
              </SectionTitle>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
              <div className="rounded-2xl bg-gray-50 p-6 md:p-8">
                <span className="text-5xl font-bold text-gray-300 md:text-6xl">1</span>
                <h3 className="mb-3 mt-6 text-lg font-semibold text-gray-900 md:text-xl">
                  Visit the Lend page
                </h3>
                <p className="text-sm text-gray-600 md:text-base">
                  Browse lending markets like GHO, USDC, USDT, ETH, and WBTC. Each market shows current APY, utilization, and what your capital is helping fund across LP borrower categories.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6 md:p-8">
                <span className="text-5xl font-bold text-gray-300 md:text-6xl">2</span>
                <h3 className="mb-3 mt-6 text-lg font-semibold text-gray-900 md:text-xl">
                  Make a deposit
                </h3>
                <p className="text-sm text-gray-600 md:text-base">
                  Connect your wallet, approve the asset, and supply. Your funds enter the lending pool and start earning immediately, with APY, utilization, and accrued interest visible in real time.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6 md:p-8">
                <span className="text-5xl font-bold text-gray-300 md:text-6xl">3</span>
                <h3 className="mb-3 mt-6 text-lg font-semibold text-gray-900 md:text-xl">
                  Collect your yield
                </h3>
                <p className="text-sm text-gray-600 md:text-base">
                  Interest accrues continuously. Withdraw whenever you choose, and your principal plus earned yield returns to your wallet in one transaction with no claim period or lock-up.
                </p>
              </div>
            </div>
          </section>

          <HomepageNewsroomSection collection="invest" eyebrowTone="emerald" />

          <div className="pb-16 md:pb-24 2xl:pb-22">
            <InlineFaqSection title="Frequently asked questions." items={stableSpokeFaqItems} eyebrowTone="emerald" withTopBorder={false} />
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}
