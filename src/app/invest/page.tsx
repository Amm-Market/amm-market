import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import InvestApySection from "@/components/invest-apy-section"
import InvestGrowthCalculatorSection from "@/components/invest-growth-calculator-section"
import ProductFeatureScrollSection from "@/components/product-feature-scroll-section"
import ProductStorySection from "@/components/product-story-section"
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

      <ProductStorySection
        withTopDivider
        eyebrowTone="emerald"
        titleLines={["One deposit,", "many LP markets."]}
        paragraphs={[
          "Invest is Avana's supply layer. Deposited assets enter the Invest Spoke, then route through the Hub to support borrowing across multiple LP-collateral markets.",
          "That gives suppliers exposure to LP-backed credit demand without managing impermanent loss, liquidity ranges, or borrower-side collateral operations.",
        ]}
      />

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
