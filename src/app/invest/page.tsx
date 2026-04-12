import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import InvestApySection from "@/components/invest-apy-section"
import InvestGrowthCalculatorSection from "@/components/invest-growth-calculator-section"
import ProductFeatureScrollSection from "@/components/product-feature-scroll-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

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
  title: "Invest - Stablecoin LP Collateral",
  description: "Avana Invest is built around stable LP collateral with the protocol's highest efficiency and lowest-risk borrowing profile.",
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

      <section className="border-t border-gray-200 bg-white pt-8 pb-8 md:pt-10 md:pb-10">
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
        <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20">
          <InvestGrowthCalculatorSection />

          <ProductFeatureScrollSection
            eyebrowTone="emerald"
            title="A market-leading rate, with more built in."
            items={investFeatureItems}
            panels={[
              /* 01 Easy money movement — vertical ticker cycling deposit/withdraw flows */
              <div key="p1" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(16,185,129,0.04),transparent_60%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                  <div className="w-full max-w-[15rem] h-[4.5rem] overflow-hidden">
                    <div className="panel-ticker-v">
                      {[
                        { action: "Deposit", amount: "$50,000", status: "Available: Instant", color: "text-emerald-600" },
                        { action: "Withdraw", amount: "$12,000", status: "Settled: 1 block", color: "text-[#18323c]" },
                        { action: "Deposit", amount: "$85,000", status: "Available: Instant", color: "text-emerald-600" },
                        { action: "Deposit", amount: "$50,000", status: "Available: Instant", color: "text-emerald-600" },
                      ].map((row, i) => (
                        <div key={i} className="h-[4.5rem] flex items-center justify-center">
                          <div className="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-white px-3.5 py-2.5">
                            <div className="flex flex-col">
                              <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-gray-400">{row.action}</span>
                              <span className="text-lg font-semibold text-[#18323c]">{row.amount}</span>
                            </div>
                            <svg width="16" height="12" viewBox="0 0 16 12" className="shrink-0 text-emerald-300"><path d="M1,6 L13,6 M10,2 L14,6 L10,10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <span className={`text-xs font-semibold ${row.color}`}>{row.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>,

              /* 02 A market-leading rate — big APY ticker + scrolling chart + stat tickers */
              <div key="p2" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(20,184,166,0.04),transparent_55%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                  {/* APY ticker */}
                  <div className="h-[3.2rem] overflow-hidden">
                    <div className="panel-ticker-v-fast">
                      {["5.5","5.6","5.4","5.5"].map((v, i) => (
                        <div key={i} className="flex h-[3.2rem] items-center justify-center">
                          <span className="text-[3.2rem] font-semibold leading-none tracking-[-0.05em] text-[#18323c]">{v}<span className="text-base font-normal text-gray-300">%</span></span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="mt-1 text-xs text-gray-400">Supply APY · vs bank ~0.5%</span>
                  {/* Scrolling area chart */}
                  <div className="mt-4 w-full max-w-[15rem] h-[55px] overflow-hidden">
                    <div className="flex w-[200%] panel-scroll-h-chart">
                      {[0, 1].map((dup) => (
                        <svg key={dup} className="h-[55px] w-1/2 shrink-0" viewBox="0 0 300 55" preserveAspectRatio="none">
                          <defs><linearGradient id={`inv-fill-${dup}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#14b8a6" stopOpacity="0.12" /><stop offset="100%" stopColor="#14b8a6" stopOpacity="0" /></linearGradient></defs>
                          <path d="M0,42 C30,40 60,36 100,32 S160,24 200,20 S260,16 300,12 L300,55 L0,55Z" fill={`url(#inv-fill-${dup})`} />
                          <path d="M0,42 C30,40 60,36 100,32 S160,24 200,20 S260,16 300,12" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  {/* Yield stat tickers */}
                  <div className="mt-2 flex gap-2">
                    <div className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-center">
                      <span className="block text-[9px] text-gray-400">24h</span>
                      <div className="h-[1rem] overflow-hidden">
                        <div className="panel-ticker-v-fast" style={{ animationDuration: '7s' }}>
                          {["+$7.52","+$7.68","+$7.41","+$7.52"].map((v, i) => (
                            <div key={i} className="flex h-[1rem] items-center justify-center">
                              <span className="text-xs font-semibold text-emerald-600">{v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-center">
                      <span className="block text-[9px] text-gray-400">30d</span>
                      <div className="h-[1rem] overflow-hidden">
                        <div className="panel-ticker-v-fast" style={{ animationDuration: '8s' }}>
                          {["+$225","+$231","+$218","+$225"].map((v, i) => (
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

              /* 03 Supply once, power many borrowers — deposit label + horizontal spoke ticker + borrower counter */
              <div key="p3" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,197,94,0.04),transparent_60%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                  {/* Your deposit label */}
                  <div className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-center">
                    <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-emerald-500">Your deposit</span>
                    <span className="mt-1 block text-base font-semibold text-[#18323c]">$50,000 USDC</span>
                  </div>
                  <svg className="my-2" width="20" height="24" viewBox="0 0 20 24"><path d="M10,2 L10,18 M5,14 L10,20 L15,14" fill="none" stroke="#bbf7d0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {/* Horizontal scrolling spoke names */}
                  <div className="w-full max-w-[15rem] overflow-hidden rounded-xl border border-gray-200 bg-white py-2.5">
                    <div className="flex whitespace-nowrap panel-scroll-h">
                      {[0, 1].map((dup) => (
                        <div key={dup} className="flex shrink-0 items-center gap-0">
                          {["LP Spoke A", "LP Spoke B", "LP Spoke C", "Pool Market", "Leverage Spoke"].map((s) => (
                            <span key={`${dup}-${s}`} className="shrink-0 px-3 text-[10px] font-medium text-emerald-600">
                              {s} <span className="text-emerald-300">&middot;</span>
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Active borrowers counter */}
                  <div className="mt-3 rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-center">
                    <span className="block text-[9px] text-gray-400">Active borrowers</span>
                    <div className="h-[1.2rem] overflow-hidden">
                      <div className="panel-ticker-v-fast">
                        {["142","148","155","142"].map((v, i) => (
                          <div key={i} className="flex h-[1.2rem] items-center justify-center">
                            <span className="text-sm font-semibold text-[#18323c]">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>,

              /* 04 Base rate plus risk premium — stacked rate rows with breathing yield */
              <div key="p4" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                  <div className="w-full max-w-[15rem] space-y-2">
                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                      <div className="flex items-center justify-between"><span className="text-[10px] font-medium text-gray-400">Hub base rate</span><span className="text-sm font-semibold text-[#18323c]">3.2%</span></div>
                    </div>
                    <div className="flex items-center justify-center"><span className="text-lg font-light text-emerald-300">+</span></div>
                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                      <div className="flex items-center justify-between"><span className="text-[10px] font-medium text-gray-400">LP risk premium</span><span className="text-sm font-semibold text-emerald-600">+2.3%</span></div>
                    </div>
                    <div className="flex items-center justify-center"><span className="text-lg font-light text-emerald-300">+</span></div>
                    <div className="rounded-xl border border-emerald-100 bg-emerald-50/80 px-4 py-3 panel-breathe">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-emerald-700">Your yield</span>
                        <div className="h-[1.2rem] overflow-hidden">
                          <div className="panel-ticker-v-fast">
                            {["5.5%","5.6%","5.4%","5.5%"].map((v, i) => (
                              <div key={i} className="flex h-[1.2rem] items-center justify-center">
                                <span className="text-sm font-bold text-emerald-700">{v}</span>
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

          <div className="pb-16 md:pb-24">
            <InlineFaqSection title="Frequently asked questions." items={stableSpokeFaqItems} eyebrowTone="emerald" withTopBorder={false} />
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}
