import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import BusinessAppKitShowcaseSection from "@/components/business-appkit-showcase"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import ProductFeatureScrollSection from "@/components/product-feature-scroll-section"
import ProductStorySection from "@/components/product-story-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

export const metadata: Metadata = {
  title: `AppKit - ${SITE_NAME}`,
  description:
    "Connect DEX, wallet, and app users to Avana LP-backed credit with AppKit integration tools and partner economics.",
  alternates: {
    canonical: siteRoutes.appkit,
  },
  openGraph: {
    title: `AppKit - ${SITE_NAME}`,
    description:
      "Connect DEX, wallet, and app users to Avana LP-backed credit with AppKit integration tools and partner economics.",
    url: siteRoutes.appkit,
    images: [
      {
        url: buildOgImagePath({
          title: `AppKit - ${SITE_NAME}`,
          subtitle: "Connect users to LP-backed credit",
        }),
        alt: `AppKit - ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `AppKit - ${SITE_NAME}`,
    description:
      "Connect DEX, wallet, and app users to Avana LP-backed credit with AppKit integration tools and partner economics.",
    images: [
      buildOgImagePath({
        title: `AppKit - ${SITE_NAME}`,
        subtitle: "Connect users to LP-backed credit",
      }),
    ],
  },
  keywords: [
    "AppKit",
    "LP-backed credit integration",
    "DEX integration",
    "wallet integration",
    "embedded credit",
    "partner API",
    "Avana",
  ],
}

const appKitFeatures = [
  {
    title: "Intent capture",
    description:
      "Turn LP position views, portfolio pages, and trading flows into natural borrowing entry points.",
  },
  {
    title: "Protocol handoff",
    description:
      "Pass user context into Avana so the credit flow opens with the right wallet, market, and collateral path.",
  },
  {
    title: "Shared monetization",
    description:
      "Build a revenue line around credit access without becoming the lender or risk engine.",
  },
  {
    title: "Product control",
    description:
      "Choose where credit appears, which users see it, and how the path fits your existing experience.",
  },
] as const

const appKitFaqItems: InlineFaqItem[] = [
  {
    value: "appkit-1",
    question: "Which teams should use AppKit?",
    answer:
      "AppKit is for DEXs, wallets, portfolio apps, and other products where users already hold or manage LP positions. It helps those products connect users to Avana credit from the right moment in the user journey.",
  },
  {
    value: "appkit-2",
    question: "What does a partner control?",
    answer:
      "Partners control placement, product context, user education, and the surrounding interface. Avana provides the borrowing flow, risk checks, collateral handling, and settlement logic.",
  },
  {
    value: "appkit-3",
    question: "How do partners participate economically?",
    answer:
      "Partner economics can be structured around referral, routing, or integration revenue depending on the relationship. The point is to make credit access valuable for the product that originates the user.",
  },
  {
    value: "appkit-4",
    question: "Does the partner become the lender?",
    answer:
      "No. The partner introduces the user to the credit flow, but Avana remains responsible for the protocol rules, health logic, and settlement path.",
  },
  {
    value: "appkit-5",
    question: "Can AppKit work across different product surfaces?",
    answer:
      "Yes. The same integration model can support web apps, wallets, mobile products, DEX interfaces, and portfolio dashboards, with the final experience shaped around the partner's product.",
  },
]

export default function AppKitPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 pt-10 sm:px-6 sm:pt-12 md:px-8 md:pt-20 lg:max-w-[64rem] 2xl:max-w-[72rem] lg:min-h-0 lg:px-0">
        <div className="relative z-0">
          <section className="pb-4 md:pb-6 lg:pb-8 xl:pb-10">
            <div className="w-full pt-3 pb-6 md:pt-5 md:pb-10 lg:pb-2 xl:pb-3">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
                <div className="order-2 mb-8 w-full lg:mb-0 lg:w-[55%]">
                  <div className="relative mx-auto w-full max-w-none lg:mx-0 lg:max-w-[650px] xl:max-w-[700px]">
                    <Image
                      src="/images/Hero__4_.png"
                      alt="Borrow interface"
                      width={1400}
                      height={1400}
                      className="h-auto w-full rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
                      sizes="(max-width: 1024px) calc(100vw - 40px), 700px"
                      priority
                    />
                  </div>
                </div>

                <div className="order-1 mb-8 w-full text-left lg:order-2 lg:mb-0 lg:w-[45%]">
                  <h1 className="mb-3 max-w-[13ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:max-w-[12ch] md:text-5xl lg:text-5xl xl:text-6xl">
                    <span className="lg:whitespace-nowrap">Bring credit</span>
                    <br />
                    <span className="lg:whitespace-nowrap">to LP users.</span>
                  </h1>

                  <p className="mb-5 max-w-[36ch] text-base leading-relaxed text-gray-600 sm:max-w-[40ch] md:mb-6 md:text-lg">
                    AppKit gives DEXs, wallets, and apps a way to connect LP users to Avana borrowing from the
                    products they already use.
                  </p>

                  <div className="flex max-w-md flex-row flex-wrap items-start gap-2 sm:gap-3">
                    <Link
                      href="/developers"
                      prefetch={false}
                      className="inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-gray-800"
                    >
                      View docs
                    </Link>
                    <Link
                      href="/credit-lines"
                      prefetch={false}
                      className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                    >
                      See credit lines
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <ProductStorySection
        eyebrow="For partners"
        eyebrowTone="violet"
        titleLines={["Distribution", "for LP-backed credit."]}
        paragraphs={[
          "LP users already make capital decisions inside DEXs, wallets, and portfolio tools. AppKit lets those products offer a direct path into Avana when borrowing is the next useful action.",
          "The partner owns the user relationship and product context. Avana owns the credit rules, health checks, and settlement path. That split lets partners add a meaningful financial action without becoming a lending protocol.",
        ]}
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="relative z-0 flex flex-1 flex-col">
          <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20 2xl:space-y-36 2xl:pt-18 2xl:pb-18">
            <BusinessAppKitShowcaseSection />

            <ProductFeatureScrollSection
              eyebrow="Integration model"
              eyebrowTone="violet"
              title="Built for partners that already understand the user."
              items={appKitFeatures}
              panels={[
                <div key="a1" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.05),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Partner menu</span>
                        <span className="rounded-full border border-violet-100 bg-violet-50 px-2 py-0.5 text-[8px] font-semibold text-violet-500">
                          Embedded
                        </span>
                      </div>
                      <div className="mt-3 space-y-2">
                        {[
                          ["Pool", "Review position"],
                          ["Borrow", "Use collateral"],
                          ["Manage", "Track health"],
                        ].map(([label, sub]) => (
                          <div key={label} className="rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-semibold text-[#18323c]">{label}</span>
                              <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">
                                Avana
                              </span>
                            </div>
                            <p className="mt-1 text-[9px] text-gray-500">{sub}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>,
                <div key="a2" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(139,92,246,0.05),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-3">
                        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-500">
                          <span>Kit</span>
                          <span>API</span>
                        </div>
                        <div className="mt-3 space-y-2">
                          {["openCredit()", "healthStatus()", "repayPosition()"].map((fn) => (
                            <div key={fn} className="rounded-lg border border-violet-100 bg-white px-3 py-2 text-[10px] font-mono text-violet-700">
                              {fn}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-[72%] rounded-full bg-violet-500 panel-bar-pulse" />
                      </div>
                    </div>
                  </div>
                </div>,
                <div key="a3" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.04),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-violet-200 bg-violet-50 text-violet-500">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Economics</span>
                          <p className="mt-1 text-sm font-semibold text-[#18323c]">Originate useful borrower demand.</p>
                          <p className="mt-1.5 text-[9px] leading-5 text-gray-500">
                            Partners can turn existing LP traffic into a new credit distribution channel.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
                <div key="a4" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.04),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">White label</span>
                        <span className="rounded-full border border-violet-100 bg-violet-50 px-2 py-0.5 text-[8px] font-semibold text-violet-500">
                          Flexible
                        </span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {[
                          ["Placement", "Yours"],
                          ["Credit", "Avana"],
                          ["Context", "Shared"],
                          ["Path", "Flexible"],
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

            <section className="relative -mx-4 overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#f8f7fc_0%,#eee8f8_50%,#f5f3fa_100%)] px-6 py-12 sm:-mx-6 sm:px-10 md:px-12 md:py-16 lg:py-20 2xl:py-18">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(139,92,246,0.10),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(99,102,241,0.08),transparent_35%)]" />
              <div className="relative z-10">
                <div className="max-w-[600px] space-y-3">
                  <SectionEyebrow tone="violet">Why teams use AppKit</SectionEyebrow>
                  <SectionTitle>Existing LP traffic becomes a credit channel.</SectionTitle>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-5">
                  {[
                    {
                      stat: "1",
                      label: "intent",
                      title: "Meet active LPs in context",
                      description:
                        "Borrowing appears when users are already thinking about liquidity, exposure, and capital needs.",
                    },
                    {
                      stat: "0",
                      label: "build",
                      title: "Avoid building a credit protocol",
                      description:
                        "Partners can add borrowing access without owning underwriting, liquidation, or settlement systems.",
                    },
                    {
                      stat: "Shared",
                      label: "revenue",
                      title: "Create partner economics",
                      description:
                        "The integration can support referral, routing, or commercial arrangements around originated demand.",
                    },
                    {
                      stat: "API",
                      label: "surface",
                      title: "Fit multiple product shapes",
                      description:
                        "Use the same primitives across dashboards, wallets, DEX interfaces, and mobile flows.",
                    },
                  ].map((item) => (
                    <article key={item.title} className="flex flex-col rounded-2xl bg-white/70 p-6 backdrop-blur-sm">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[2.4rem] font-medium leading-none tracking-[-0.04em] text-violet-600">
                          {item.stat}
                        </span>
                        <span className="text-sm font-medium text-violet-400">{item.label}</span>
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-[#18323c]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <HomepageNewsroomSection collection="platform" eyebrowTone="violet" />

            <div className="pb-16 md:pb-24 2xl:pb-22">
              <InlineFaqSection
                title="Frequently asked questions."
                items={appKitFaqItems}
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
