import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import CheckIcon from "@/components/check-icon"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import ProductFeatureScrollSection from "@/components/product-feature-scroll-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

const bluechipSpokeFaqItems: InlineFaqItem[] = [
  {
    value: "bluechip-1",
    question: "What do I earn by staking AVA?",
    answer:
      "Stakers earn a share of protocol value through AVA emissions and selected protocol fees, including liquidation penalties and other revenue sources approved by governance. Rewards accrue continuously and can be claimed based on the staking design.",
  },
  {
    value: "bluechip-2",
    question: "Is there a lockup period?",
    answer:
      "Staking can be flexible or time locked depending on the final design. Flexible staking allows exit after a short cooldown, while locked staking offers higher reward weight in exchange for a fixed commitment period.",
  },
  {
    value: "bluechip-3",
    question: "What is the risk of staking AVA?",
    answer:
      "The main risk is slashing during a protocol shortfall event, where losses exceed the system’s other protection layers. This is intended as a last resort and is supported by overcollateralization, conservative risk parameters, and controlled liquidation design.",
  },
  {
    value: "bluechip-4",
    question: "How is staking APR determined?",
    answer:
      "Staking APR is based on the total rewards distributed to stakers relative to the total amount staked. As borrowing activity, liquidation volume, and protocol usage grow, the reward pool can grow as well.",
  },
  {
    value: "bluechip-5",
    question: "Can I stake and use the protocol at the same time?",
    answer:
      "Yes. Staking AVA is separate from supplying assets or borrowing against LP positions. You can stake, lend, and borrow at the same time, with each action serving a different role in the protocol.",
  },
]

const earnFeatureItems = [
  {
    title: "Protocol backstop",
    description: "Earn is designed for capital that sits behind the system as a deeper protection layer during stress.",
  },
  {
    title: "Residual shortfall cover",
    description: "The product is framed around qualifying deficits that remain after liquidation has already done its job.",
  },
  {
    title: "Governance rules",
    description: "Coverage scope, recapitalization paths, and response criteria are meant to stay explicit and auditable.",
  },
  {
    title: "Risk-layer alignment",
    description: "Returns are tied to protocol health, making this a stronger alignment product than passive capital supply.",
  },
  {
    title: "Higher-conviction rewards",
    description: "Because the role is deeper in the protection stack, upside is designed for users willing to shoulder more risk.",
  },
] as const

const earnUseCaseHighlights = [
  "View a monthly breakdown of all your income sources.",
  "Refine your view by asset class or reward stream.",
  "See your estimated earnings for the next 12 months.",
] as const

export const metadata: Metadata = {
  title: "Earn - Blue-Chip LP Collateral",
  description: "Avana Earn supports established LP collateral with higher borrowing power and conservative risk settings for major assets.",
}

export default function EarnPage() {
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
                  <h1 className="mb-3 max-w-[13ch] text-4xl font-medium leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:mb-5 md:max-w-[11ch] md:text-5xl lg:text-5xl xl:text-6xl">
                    <span className="whitespace-nowrap">Backstop protocol</span>
                    <br />
                    <span className="whitespace-nowrap">for higher yield.</span>
                  </h1>

                  <p className="mb-5 max-w-[34ch] text-base leading-relaxed text-gray-600 sm:max-w-[38ch] md:mb-6 md:text-lg">
                    Backstop Avana in shortfall events, take first-loss risk, and earn the highest rewards for aligned capital.
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

      <section className="border-t border-gray-200 bg-white pt-8 pb-8 md:pt-6 md:pb-10">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[76rem]">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,27rem)_minmax(0,1fr)] md:items-center md:gap-8 lg:gap-10 xl:grid-cols-[minmax(0,28rem)_minmax(0,1fr)]">
              <div className="space-y-4 md:self-center">
                <SectionEyebrow tone="amber">Avana Relaunch</SectionEyebrow>
                <SectionTitle className="max-w-[15ch] text-[clamp(2.4rem,4.2vw,4rem)] leading-[0.98] lg:text-[3.25rem]">
                  <span className="block">Share in</span>
                  <span className="block">protocol upside.</span>
                </SectionTitle>
              </div>
              <div className="flex items-center justify-center pt-1 md:justify-end">
                <div className="relative w-full max-w-[22rem] sm:max-w-[22rem] md:max-w-[23rem] md:-translate-x-4 lg:max-w-[26rem] lg:-translate-x-6 xl:max-w-[28rem]">
                  <Image
                    src="/images/Avana 2.webp"
                    alt="Avana illustration"
                    width={800}
                    height={800}
                    className="h-auto w-full"
                    sizes="(min-width: 1280px) 28rem, (min-width: 1024px) 26rem, (min-width: 768px) 23rem, (min-width: 640px) 22rem, 22rem"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-8 pb-10 md:pt-12 md:pb-14">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[76rem]">
            <div className="flex flex-col gap-6">
              <div className="flex max-w-[600px] flex-col gap-2">
                <SectionEyebrow tone="amber">How it works</SectionEyebrow>
                <SectionTitle>Earn with flexibility</SectionTitle>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-6 md:p-8">
                <span className="text-5xl font-bold text-gray-300 md:text-6xl">1</span>
                <h3 className="mt-6 mb-3 text-lg font-semibold text-gray-900 md:text-xl">
                  Rewards accrue continuously
                </h3>
                <p className="text-sm text-gray-600 md:text-base">
                  Rewards accrue continuously from protocol fees, liquidation penalties, and AVA emissions. Claim at any time without changing your staked position or stepping away from the protocol.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 md:p-8">
                <span className="text-5xl font-bold text-gray-300 md:text-6xl">2</span>
                <h3 className="mt-6 mb-3 text-lg font-semibold text-gray-900 md:text-xl">
                  Unstake when you choose
                </h3>
                <p className="text-sm text-gray-600 md:text-base">
                  There are no forced lockup periods, so you can unstake your AVA whenever you choose. A short cooldown supports protocol stability while keeping your capital within reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-8 pb-10 md:pt-12 md:pb-14">
        <div className="site-content-shell">
          <div className="mx-auto grid w-full max-w-[76rem] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-12 xl:gap-16">
            <div className="max-w-[34rem] space-y-7">
              <div className="space-y-4">
                <SectionEyebrow tone="amber">Use Cases</SectionEyebrow>
                <SectionTitle className="max-w-[11ch] text-[clamp(2.4rem,4.3vw,4.2rem)] leading-[0.95] tracking-[-0.04em]">
                  Chart your earning journey.
                </SectionTitle>
                <p className="max-w-[31rem] text-[1.02rem] leading-[1.72] text-[#5f6f84] md:text-[1.08rem]">
                  It is easy to monitor your income sources with a monthly breakdown built for larger positions and
                  protocol-protection capital.
                </p>
                <p className="max-w-[31rem] text-[1rem] leading-[1.72] text-[#5f6f84] md:text-[1.05rem]">
                  Like Aave Umbrella, the risk is that protection capital can be slashed if the protocol has to absorb a
                  shortfall. That risk is real, but it is also defined, monitored, and paired with transparent reward
                  flows rather than left vague.
                </p>
              </div>

              <ul className="space-y-4">
                {earnUseCaseHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#edf4ff] text-[#2f6df6]">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-[1.01rem] leading-7 tracking-[-0.01em] text-[#17324a]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex min-h-[28rem] items-center justify-center rounded-[2rem] border border-gray-200 bg-[#f7f6f2] p-5 sm:min-h-[31rem] sm:p-6 lg:p-8">
              <div className="flex w-full max-w-[24rem] flex-col items-center justify-center rounded-[1.8rem] border border-dashed border-[#d7dde7] bg-white px-8 py-12 text-center">
                <span className="inline-flex rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#7d90ab]">
                  Placeholder
                </span>
                <h3 className="mt-4 text-[1.25rem] font-semibold leading-[1.15] tracking-[-0.03em] text-[#15263a]">
                  Earnings visual goes here.
                </h3>
                <p className="mt-3 max-w-[17rem] text-sm leading-6 text-[#6c7a8d]">
                  Reserved for a future chart or product graphic for the Earn experience.
                </p>
                <div className="mt-6 grid w-full grid-cols-3 gap-2.5 opacity-55">
                  <div className="h-14 rounded-2xl border border-dashed border-[#d7dde7] bg-[#fbfcfd]" />
                  <div className="h-14 rounded-2xl border border-dashed border-[#d7dde7] bg-[#fbfcfd]" />
                  <div className="h-14 rounded-2xl border border-dashed border-[#d7dde7] bg-[#fbfcfd]" />
                </div>
                <div className="mt-2 h-28 w-full rounded-[1.4rem] border border-dashed border-[#d7dde7] bg-[#fbfcfd]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col">
        <div className="flex-1 flex flex-col relative z-0">
        {/* Rest of page content */}
        <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20">
          <ProductFeatureScrollSection
            eyebrowTone="amber"
            title="Borrow more on stronger collateral."
            items={earnFeatureItems}
          />

          <section>
            <div className="max-w-[780px] space-y-3 text-left">
              <SectionEyebrow tone="amber">Safe returns.</SectionEyebrow>
              <SectionTitle>Backed by the Avana Umbrella.</SectionTitle>
            </div>
            <div className="mt-8 overflow-hidden rounded-[28px] border border-gray-200 bg-black shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <Image
                src="/images/A_1.png"
                alt="Avana relaunch illustration"
                width={3840}
                height={2400}
                className="h-auto w-full"
                sizes="(min-width: 1280px) 76rem, (min-width: 768px) 100vw, 100vw"
                priority={false}
              />
            </div>
          </section>

          <HomepageNewsroomSection collection="earn" eyebrowTone="amber" />

          <div className="pb-16 md:pb-24">
            <InlineFaqSection title="Frequently asked questions." items={bluechipSpokeFaqItems} eyebrowTone="amber" withTopBorder={false} />
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}
