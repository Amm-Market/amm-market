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

const leverageModes = [
  {
    title: "Borrow-based exposure",
    description:
      "Instead of perp funding, Avana prices leverage through borrow rates routed from Aave v4 style Hub liquidity and LP-specific risk parameters.",
  },
  {
    title: "Market access through the Hub",
    description:
      "Your LP unlocks Hub liquidity, and Avana manages execution, debt, leverage, and unwind logic in one LP-backed account.",
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
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <div className="space-y-3">
              <SectionEyebrow tone="rose">Why it feels different</SectionEyebrow>
              <SectionTitle className="max-w-[11ch]">No funding rates. Hub-backed leverage.</SectionTitle>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {leverageModes.map((mode) => (
                <article key={mode.title} className="rounded-[1.8rem] border border-gray-200 bg-[linear-gradient(145deg,#ffffff_0%,#faf7f5_100%)] p-6 md:p-7">
                  <h3 className="text-[1.5rem] font-medium tracking-[-0.04em] text-[#18323c]">{mode.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-gray-600">{mode.description}</p>
                </article>
              ))}
            </div>
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
