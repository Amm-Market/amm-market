import type { Metadata } from "next"
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
    "Embed Avana LP-backed credit into partner DEX, wallet, or app surfaces with AppKit, APIs, and revenue-sharing integrations.",
  alternates: {
    canonical: siteRoutes.appkit,
  },
  openGraph: {
    title: `AppKit - ${SITE_NAME}`,
    description:
      "Embed Avana LP-backed credit into partner DEX, wallet, or app surfaces with AppKit, APIs, and revenue-sharing integrations.",
    url: siteRoutes.appkit,
    images: [
      {
        url: buildOgImagePath({
          title: `AppKit - ${SITE_NAME}`,
          subtitle: "Embed LP-backed credit inside partner products",
        }),
        alt: `AppKit - ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `AppKit - ${SITE_NAME}`,
    description:
      "Embed Avana LP-backed credit into partner DEX, wallet, or app surfaces with AppKit, APIs, and revenue-sharing integrations.",
    images: [
      buildOgImagePath({
        title: `AppKit - ${SITE_NAME}`,
        subtitle: "Embed LP-backed credit inside partner products",
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
    title: "Native partner menus",
    description:
      "Surface Borrow, Manage, and Exit actions where your users already trade, hold, or monitor liquidity.",
  },
  {
    title: "API-first routing",
    description:
      "Keep your UI and Avana's credit engine separate while the integration feels fully native to the host product.",
  },
  {
    title: "Partner economics",
    description:
      "Capture fees or share revenue on the same surface that brings LP-backed borrowing into your product.",
  },
  {
    title: "White-label control",
    description:
      "Preserve brand, permissioning, and product flow while Avana handles collateral logic and settlement underneath.",
  },
] as const

const appKitFaqItems: InlineFaqItem[] = [
  {
    value: "appkit-1",
    question: "What is AppKit for?",
    answer:
      "AppKit is for teams that want to expose Avana LP-backed credit inside their own product. A DEX, wallet, or portfolio app can add a menu entry or embedded module that routes users into Avana without sending them away from the main interface.",
  },
  {
    value: "appkit-2",
    question: "What does the integration actually expose?",
    answer:
      "Partners can expose the actions users need most: borrow, repay, monitor health, and manage positions. The partner owns the front end, while Avana provides the credit logic and settlement rails underneath.",
  },
  {
    value: "appkit-3",
    question: "How do partners make money?",
    answer:
      "The integration is designed so partners can capture fees or share in the economics of the flow while still keeping the experience inside their own product surface.",
  },
  {
    value: "appkit-4",
    question: "Does AppKit replace the protocol UI?",
    answer:
      "No. AppKit complements the protocol interface. It gives external products a way to embed Avana's credit layer in a custom experience instead of forcing users to leave for a separate dashboard.",
  },
  {
    value: "appkit-5",
    question: "Is the integration only for one venue family?",
    answer:
      "No. The point is to let partner products tap into LP-backed credit through Avana's kit and API surfaces, then present that capability in whatever menu or workflow best fits their users.",
  },
]

export default function AppKitPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 pt-10 sm:px-6 sm:pt-12 md:px-8 md:pt-20 lg:max-w-[64rem] lg:min-h-0 lg:px-0">
        <div className="relative z-0">
          <section className="pb-4 md:pb-6 lg:pb-8 xl:pb-10">
            <div className="w-full pt-3 pb-6 md:pt-5 md:pb-10 lg:pb-2 xl:pb-3">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
                <div className="order-2 mb-8 w-full lg:mb-0 lg:w-[55%]">
                  <div className="relative mx-auto w-full max-w-none lg:mx-0 lg:max-w-[650px] xl:max-w-[700px]">
                    <div className="relative overflow-hidden rounded-[24px] border border-gray-200 bg-[linear-gradient(180deg,#f7f4ee_0%,#efe8e3_100%)] p-5 sm:rounded-[32px] lg:rounded-[40px]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_55%)]" />
                      <div className="relative grid gap-4 md:grid-cols-3">
                        <div className="rounded-[22px] border border-white/70 bg-white/70 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:col-span-2">
                          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-violet-500">Partner UI</span>
                          <h2 className="mt-3 text-2xl font-normal leading-[1.02] tracking-[-0.05em] text-[#18323c] sm:text-[2.5rem]">
                            Add an Avana credit menu to the product your users already trust.
                          </h2>
                          <p className="mt-4 max-w-[32rem] text-sm leading-6 text-gray-600">
                            Surface borrow, repay, and manage actions inside a DEX, wallet, or trading app while Avana
                            handles LP-backed credit behind the scenes.
                          </p>
                        </div>

                        <div className="grid gap-4">
                          <div className="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">Menu</p>
                            <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#18323c]">Borrow</p>
                            <p className="mt-1 text-sm text-gray-600">Use LP positions as credit.</p>
                          </div>
                          <div className="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">Revenue</p>
                            <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#18323c]">Fee share</p>
                            <p className="mt-1 text-sm text-gray-600">Monetize the integration surface.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 mb-8 w-full text-left lg:order-2 lg:mb-0 lg:w-[45%]">
                  <h1 className="mb-3 max-w-[13ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:max-w-[12ch] md:text-5xl lg:text-5xl xl:text-6xl">
                    <span className="lg:whitespace-nowrap">Make LP-backed credit</span>
                    <br />
                    <span className="lg:whitespace-nowrap">feel native to your product.</span>
                  </h1>

                  <p className="mb-5 max-w-[36ch] text-base leading-relaxed text-gray-600 sm:max-w-[40ch] md:mb-6 md:text-lg">
                    AppKit gives DEXs, wallets, and apps a way to surface Avana inside their own UI. Partners can
                    route users into LP-backed credit, keep the experience branded, and participate in the economics
                    of the flow.
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
        titleLines={["Your UI,", "Avana credit."]}
        paragraphs={[
          "AppKit is for products that already have user trust and want to turn that surface into a place where LP-backed credit can happen naturally. A partner can expose Avana actions inside a menu, side panel, or embedded module, then route the user into borrowing, monitoring, or repayment without breaking the host experience.",
          "The partner keeps the front-end relationship and product context. Avana keeps the credit logic, health checks, and settlement engine. That split is the point: the user feels like they never left the product they came to use, while the protocol still enforces the real borrowing rules underneath.",
        ]}
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="relative z-0 flex flex-1 flex-col">
          <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20 2xl:space-y-36 2xl:pt-18 2xl:pb-18">
            <BusinessAppKitShowcaseSection />

            <ProductFeatureScrollSection
              eyebrow="Integration model"
              eyebrowTone="violet"
              title="Built for products that want credit without context switching."
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
                          ["Swap", "Trade assets"],
                          ["Borrow", "LP-backed credit"],
                          ["Manage", "Health and repayment"],
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
                          <p className="mt-1 text-sm font-semibold text-[#18323c]">Share the surface, keep the brand.</p>
                          <p className="mt-1.5 text-[9px] leading-5 text-gray-500">
                            Partners can collect fees on the integration while Avana supplies the borrowing rails.
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
                          ["Brand", "Yours"],
                          ["Rules", "Avana's"],
                          ["Fees", "Shared"],
                          ["UX", "Native"],
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
                  <SectionTitle>Partners keep the surface. Avana keeps the credit engine.</SectionTitle>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-5">
                  {[
                    {
                      stat: "1",
                      label: "surface",
                      title: "Add credit where users already are",
                      description:
                        "Show LP-backed borrowing inside the menus and workflows people already use every day.",
                    },
                    {
                      stat: "0",
                      label: "friction",
                      title: "Keep the product experience native",
                      description:
                        "The user sees one product, while Avana handles the borrowing, health, and settlement layer.",
                    },
                    {
                      stat: "Shared",
                      label: "economics",
                      title: "Monetize the integration",
                      description:
                        "Partners can charge fees or share revenue from the same surface that routes users into credit.",
                    },
                    {
                      stat: "API",
                      label: "first",
                      title: "Build once, ship across surfaces",
                      description:
                        "Use the same integration model for web apps, wallets, and mobile products.",
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
