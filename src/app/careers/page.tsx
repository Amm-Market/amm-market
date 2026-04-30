import type { Metadata } from "next"
import Link from "next/link"
import CareersShowcaseSection from "@/components/careers-showcase"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import ProductFeatureScrollSection from "@/components/product-feature-scroll-section"
import ProductStorySection from "@/components/product-story-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

export const metadata: Metadata = {
  title: `Careers - ${SITE_NAME}`,
  description:
    "Join Avana and help build the credit infrastructure that powers LP-backed borrowing for businesses and partner products.",
  alternates: {
    canonical: siteRoutes.careers,
  },
  openGraph: {
    title: `Careers - ${SITE_NAME}`,
    description:
      "Join Avana and help build the credit infrastructure that powers LP-backed borrowing for businesses and partner products.",
    url: siteRoutes.careers,
    images: [
      {
        url: buildOgImagePath({
          title: `Careers - ${SITE_NAME}`,
          subtitle: "Build the infrastructure behind LP-backed credit",
        }),
        alt: `Careers - ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Careers - ${SITE_NAME}`,
    description:
      "Join Avana and help build the credit infrastructure that powers LP-backed borrowing for businesses and partner products.",
    images: [
      buildOgImagePath({
        title: `Careers - ${SITE_NAME}`,
        subtitle: "Build the infrastructure behind LP-backed credit",
      }),
    ],
  },
  keywords: [
    "Avana careers",
    "fintech jobs",
    "protocol engineering",
    "product design",
    "LP-backed credit",
    "credit infrastructure",
  ],
}

const careersFeatures = [
  {
    title: "Small team, broad scope",
    description:
      "Move between product, protocol, and partner work without waiting for five handoffs to land.",
  },
  {
    title: "Clear ownership",
    description:
      "You own outcomes, not just tickets. That means setting direction, shipping, and iterating with urgency.",
  },
  {
    title: "Taste matters",
    description:
      "The team cares about how things feel, not just whether they function. Good design and sharp writing matter.",
  },
  {
    title: "Work close to users",
    description:
      "Partner feedback, borrower behavior, and operator needs shape the roadmap in real time.",
  },
] as const

const careersFaqItems: InlineFaqItem[] = [
  {
    value: "careers-1",
    question: "Are you hiring right now?",
    answer:
      "We grow deliberately, so openings may change over time. This page is the best place to understand what kind of people fit the team and what kind of work we care about.",
  },
  {
    value: "careers-2",
    question: "What kind of people thrive here?",
    answer:
      "People who are comfortable with ambiguity, care about craft, and want to work on financial plumbing that must be both understandable and reliable.",
  },
  {
    value: "careers-3",
    question: "What does success look like?",
    answer:
      "Success means shipping useful work quickly, tightening the product loop, and making a hard credit system feel clear to the people using it.",
  },
  {
    value: "careers-4",
    question: "How does the team work?",
    answer:
      "The team stays close to product details, moves quickly, and makes decisions with enough context to keep the work coherent across protocol and front end.",
  },
  {
    value: "careers-5",
    question: "How should I reach out?",
    answer:
      "If the page feels like a fit, keep an eye on the site for openings and follow the broader Avana product surface to understand the direction of the company.",
  },
]

export default function CareersPage() {
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
                          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-violet-500">Hiring</span>
                          <h2 className="mt-3 text-2xl font-normal leading-[1.02] tracking-[-0.05em] text-[#18323c] sm:text-[2.5rem]">
                            Help build the infrastructure behind LP-backed credit.
                          </h2>
                          <p className="mt-4 max-w-[32rem] text-sm leading-6 text-gray-600">
                            Avana is looking for people who like hard product problems, care about execution, and want
                            to make financial plumbing feel simple enough for businesses to trust.
                          </p>
                        </div>

                        <div className="grid gap-4">
                          <div className="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">Team</p>
                            <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#18323c]">Small</p>
                            <p className="mt-1 text-sm text-gray-600">More ownership, fewer layers.</p>
                          </div>
                          <div className="rounded-[22px] border border-white/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">Work</p>
                            <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#18323c]">High taste</p>
                            <p className="mt-1 text-sm text-gray-600">Product details matter here.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 mb-8 w-full text-left lg:order-2 lg:mb-0 lg:w-[45%]">
                  <h1 className="mb-3 max-w-[14ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:max-w-[12ch] md:text-5xl lg:text-5xl xl:text-6xl">
                    <span className="lg:whitespace-nowrap">Build the product</span>
                    <br />
                    <span className="lg:whitespace-nowrap">that builds trust.</span>
                  </h1>

                  <p className="mb-5 max-w-[36ch] text-base leading-relaxed text-gray-600 sm:max-w-[40ch] md:mb-6 md:text-lg">
                    Careers at Avana are for people who want to work on the interfaces, protocol logic, and partner
                    surfaces that turn LP-backed credit into something businesses and operators can actually use.
                  </p>

                  <div className="flex max-w-md flex-row flex-wrap items-start gap-2 sm:gap-3">
                    <Link
                      href="/lightpaper"
                      prefetch={false}
                      className="inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-gray-800"
                    >
                      Read lightpaper
                    </Link>
                    <Link
                      href="/developers"
                      prefetch={false}
                      className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                    >
                      Explore the protocol
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <ProductStorySection
        eyebrow="What we value"
        eyebrowTone="violet"
        titleLines={["Small team,", "high ownership."]}
        paragraphs={[
          "Avana is the kind of team where product, protocol, and design need to stay in the same conversation. That keeps the work coherent and lets the team ship things that feel intentional instead of stitched together.",
          "The company values clear thinking, honest feedback, and a strong point of view. If you like working close to the details and shaping the system rather than just operating inside it, this is the kind of environment that tends to fit.",
        ]}
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="relative z-0 flex flex-1 flex-col">
          <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20 2xl:space-y-36 2xl:pt-18 2xl:pb-18">
            <CareersShowcaseSection />

            <ProductFeatureScrollSection
              eyebrow="Team model"
              eyebrowTone="violet"
              title="The best teams are specific about how they work."
              items={careersFeatures}
              panels={[
                <div key="c1" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.05),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Team cadence</span>
                        <span className="rounded-full border border-violet-100 bg-violet-50 px-2 py-0.5 text-[8px] font-semibold text-violet-500">
                          Focused
                        </span>
                      </div>
                      <div className="mt-3 space-y-2">
                        {[
                          ["Plan", "Choose what matters"],
                          ["Build", "Ship the work"],
                          ["Learn", "Tighten the loop"],
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
                <div key="c2" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(139,92,246,0.05),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-3">
                        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-500">
                          <span>What matters</span>
                          <span>3 pillars</span>
                        </div>
                        <div className="mt-3 space-y-2">
                          {["Clarity", "Speed", "Taste"].map((item) => (
                            <div key={item} className="rounded-lg border border-violet-100 bg-white px-3 py-2 text-[10px] font-semibold text-violet-700">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-[78%] rounded-full bg-violet-500 panel-bar-pulse" />
                      </div>
                    </div>
                  </div>
                </div>,
                <div key="c3" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.04),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-violet-200 bg-violet-50 text-violet-500">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                            <path d="M11 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-400">Growth</span>
                          <p className="mt-1 text-sm font-semibold text-[#18323c]">Room to shape the stack.</p>
                          <p className="mt-1.5 text-[9px] leading-5 text-gray-500">
                            People here influence product, protocol, and partner experience as the company grows.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
                <div key="c4" className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(139,92,246,0.04),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[15.75rem] rounded-[20px] border border-gray-200 bg-white p-4">
                      <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-3">
                        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-500">
                          <span>Signals</span>
                          <span>Always on</span>
                        </div>
                        <div className="mt-3 space-y-2">
                          {["Users", "Partners", "Protocol"].map((item) => (
                            <div key={item} className="rounded-lg border border-emerald-100 bg-white px-3 py-2 text-[10px] font-semibold text-emerald-700">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
              ]}
            />

            <section>
              <div className="space-y-4 text-left">
                <SectionEyebrow tone="violet">Open questions</SectionEyebrow>
                <SectionTitle>Good candidates ask good questions.</SectionTitle>
                <p className="max-w-[40rem] text-[1.02rem] leading-[1.72] text-[#5f6f84] md:text-[1.08rem]">
                  We like people who think carefully about the system, not just the surface. The best fits usually care
                  about product detail, technical nuance, and how financial tools behave in the real world.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-5 md:mt-14 lg:flex-row lg:gap-6">
                {[
                  {
                    title: "Product judgment",
                    description: "You can spot what should be simplified, what should be preserved, and why.",
                  },
                  {
                    title: "Strong writing",
                    description: "You explain decisions clearly enough that teammates and users can follow them.",
                  },
                  {
                    title: "Comfort with ambiguity",
                    description: "You can move forward when the answer is not obvious and the stakes are real.",
                  },
                ].map((item, index) => (
                  <article
                    key={item.title}
                    className="relative flex flex-1 flex-col rounded-[1.6rem] border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-gray-300 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)] md:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[2.8rem] font-medium leading-none tracking-[-0.05em] text-gray-200 md:text-[3.2rem]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-violet-100/80 text-violet-600">
                        <span className="text-sm font-semibold">0{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-[#18323c] md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-[0.94rem] md:leading-[1.7]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <HomepageNewsroomSection
              eyebrow="From the company"
              eyebrowTone="violet"
              title="What Avana is building now"
              collection="home"
            />

            <InlineFaqSection
              eyebrow="Careers FAQ"
              eyebrowTone="violet"
              items={careersFaqItems}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
