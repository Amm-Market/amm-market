import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { BadgeDollarSign, Compass, Handshake, LayoutTemplate, ShieldCheck, Workflow } from "lucide-react"
import BusinessAppKitShowcaseSection from "@/components/business-appkit-showcase"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
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
    icon: Compass,
  },
  {
    title: "Protocol handoff",
    description:
      "Pass user context into Avana so the credit flow opens with the right wallet, market, and collateral path.",
    icon: Workflow,
  },
  {
    title: "Shared monetization",
    description:
      "Build a revenue line around credit access without becoming the lender or risk engine.",
    icon: BadgeDollarSign,
  },
  {
    title: "Product control",
    description:
      "Choose where credit appears, which users see it, and how the path fits your existing experience.",
    icon: Handshake,
  },
  {
    title: "Embedded UX",
    description:
      "Keep borrowing inside the product surface your users already trust instead of sending them into a disconnected flow.",
    icon: LayoutTemplate,
  },
  {
    title: "Risk separation",
    description:
      "Let Avana handle health checks, collateral logic, and settlement while your team stays focused on distribution.",
    icon: ShieldCheck,
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

function AppKitFeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: LucideIcon
}) {
  const Icon = icon

  return (
    <article className="flex flex-col rounded-[1.75rem] bg-[#f7f7f5] p-5 md:p-6">
      <div className="flex h-8 w-8 items-center justify-center text-[#111111]">
        <Icon className="h-8 w-8" strokeWidth={1.85} />
      </div>

      <h3 className="mt-5 text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.04em] text-[#111111] md:mt-6 md:text-[1.55rem]">
        {title}
      </h3>
      <p className="mt-3 max-w-[22rem] text-[0.98rem] leading-[1.58] text-[#5f6b77] md:text-[1.02rem]">
        {description}
      </p>
    </article>
  )
}

export default function AppKitPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 pt-10 sm:px-6 sm:pt-12 md:px-8 md:pt-20 lg:max-w-[64rem] 2xl:max-w-[72rem] lg:min-h-0 lg:px-0">
        <div className="relative z-0">
          <section className="border-b border-gray-200 pb-10 md:pb-14 lg:pb-16 xl:pb-18">
            <div className="w-full pt-3 pb-10 md:pt-5 md:pb-14 lg:pb-8 xl:pb-10">
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

      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="relative z-0 flex flex-1 flex-col">
          <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20 2xl:space-y-36 2xl:pt-18 2xl:pb-18">
            <BusinessAppKitShowcaseSection />

            <section className="pt-12 md:pt-16 lg:pt-20">
              <div className="space-y-4 text-left">
                <SectionEyebrow tone="violet">Integration model</SectionEyebrow>
                <SectionTitle>Built for DEXs that already own LP flow.</SectionTitle>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 lg:grid-cols-3 lg:gap-5">
                {appKitFeatures.map((feature) => (
                  <AppKitFeatureCard
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                  />
                ))}
              </div>
            </section>

            <section className="bg-white py-12 md:py-16 lg:py-20">
              <div className="site-content-shell">
                <div className="mx-auto grid w-full max-w-[90rem] items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:grid-rows-[auto_auto] lg:gap-18">
                  <div className="max-w-[33rem] pt-2 lg:col-start-1 lg:row-start-1 lg:pt-6">
                    <SectionEyebrow tone="violet">For partners</SectionEyebrow>
                    <SectionTitle className="mt-5 max-w-none !text-[clamp(2rem,8.5vw,4.4rem)] !leading-[0.96] text-[#111111] lg:!text-[3.5rem]">
                      <span className="block whitespace-nowrap">Distribution for</span>
                      <span className="block whitespace-nowrap">LP-backed credit.</span>
                    </SectionTitle>

                    <p className="mt-7 max-w-[28rem] text-[0.98rem] leading-[1.62] tracking-[-0.01em] text-[#111111]/80 md:text-[1.04rem]">
                      AppKit helps DEXs, wallets, and apps embed Avana borrowing into the user journeys they already
                      own. Keep the experience native while Avana handles credit logic, execution, and settlement in
                      the background.
                    </p>
                  </div>

                  <div className="relative order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:order-none lg:pt-1">
                    <div className="relative aspect-[1.18/1] overflow-hidden rounded-[24px] bg-transparent md:rounded-[28px] lg:rounded-[32px]">
                      <Image
                        src="/images/leverage-hero-placeholder.webp"
                        alt="Person holding a smartphone showing a finance app"
                        fill
                        className="object-cover object-[55%_42%]"
                        sizes="(max-width: 1024px) 100vw, 54vw"
                      />
                    </div>
                  </div>

                  <div className="order-3 max-w-[33rem] pt-10 lg:col-start-1 lg:row-start-2 lg:order-none lg:pt-0">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                      <Link
                        href="/developers"
                        prefetch={false}
                        className="inline-flex h-[4.15rem] items-center justify-center rounded-full bg-black px-10 text-[1.02rem] font-semibold tracking-[-0.02em] text-white transition-transform hover:-translate-y-0.5 hover:bg-neutral-900"
                      >
                        View docs
                      </Link>
                      <Link
                        href="/credit-lines"
                        prefetch={false}
                        className="inline-flex h-[4.15rem] items-center justify-center rounded-full border border-black/10 bg-white px-10 text-[1.02rem] font-semibold tracking-[-0.02em] text-[#111111] transition-transform hover:-translate-y-0.5 hover:bg-neutral-50"
                      >
                        See credit lines
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative -mx-4 overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#f8f7fc_0%,#eee8f8_50%,#f5f3fa_100%)] px-6 py-12 sm:-mx-6 sm:px-10 md:px-12 md:py-16 lg:py-20 2xl:py-18">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(139,92,246,0.10),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(99,102,241,0.08),transparent_35%)]" />
              <div className="relative z-10">
                <div className="max-w-[600px] space-y-3">
                  <SectionEyebrow tone="violet">Why partners choose AppKit</SectionEyebrow>
                  <SectionTitle>End-to-end LP credit rails.</SectionTitle>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-5">
                  {[
                    {
                      stat: "01",
                      label: "experience",
                      title: "Own the experience",
                      description:
                        "Keep the borrowing flow inside your product while Avana handles credit in the background.",
                    },
                    {
                      stat: "02",
                      label: "execution",
                      title: "Advanced execution",
                      description:
                        "Access LP-backed credit with reliable execution, clear routing, and responsive market handling.",
                    },
                    {
                      stat: "03",
                      label: "controls",
                      title: "Built for compliance",
                      description:
                        "Ship with infrastructure that is designed around security, risk controls, and privacy-aware operations.",
                    },
                    {
                      stat: "04",
                      label: "launch",
                      title: "Fast-track your launch",
                      description:
                        "Move faster with modular APIs, partner support, and a rollout path that fits your product surface.",
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
