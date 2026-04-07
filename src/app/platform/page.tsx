import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import WebappHero from "@/components/webapp-hero"
import EarlyAccessCtaBox from "@/components/EarlyAccessCtaBox"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

export const metadata: Metadata = {
  title: "Platform - Avana",
  description:
    "Explore the Avana platform for LP-backed borrowing, financing workflows, monitoring, and advanced LP management.",
}

const platformFaqItems: InlineFaqItem[] = [
  {
    value: "platform-1",
    question: "How do I get a credit line?",
    answer:
      "Deposit LP tokens such as Uniswap or Balancer exposure. You keep earning fees while they are deposited, then borrow instantly through the protocol and repay whenever you choose.",
  },
  {
    value: "platform-2",
    question: "Do I keep earning on my LP while I borrow?",
    answer:
      "Yes. Your LP stays in the pool, and the associated yield continues to accrue while the position is being used as collateral.",
  },
  {
    value: "platform-3",
    question: "What can I use the borrowed funds for?",
    answer:
      "Borrowed funds can support leverage, hedging, shorting, or general liquidity access across venues, subject to risk assessment and market availability.",
  },
  {
    value: "platform-4",
    question: "How is my position monitored?",
    answer:
      "The interface is built around real-time health and position updates, with deep liquidity access, competitive rates, and protocol-native monitoring.",
  },
  {
    value: "platform-5",
    question: "Who is the platform for?",
    answer:
      "It is designed for LPs and power users who want one place to manage positions, financing, and more advanced liquidity workflows.",
  },
]

const financingFeatures = [
  {
    title: "Flexible settlement",
    description: "Deploy a single line of credit to access liquidity across multiple venues.",
    accent: "bg-violet-100 text-violet-600",
    icon: (
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    ),
  },
  {
    title: "Unlock capital efficiency",
    description:
      "Borrow against assets in custody for leverage, shorting, and bespoke financing strategies.",
    accent: "bg-purple-100 text-purple-600",
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    title: "Retain control",
    description: "Pledge assets in your custody vault as collateral to minimize counterparty risk.",
    accent: "bg-fuchsia-100 text-fuchsia-600",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: "Earn while you borrow",
    description:
      "Generate yield on pledged assets, with distributions credited directly into your vault.",
    accent: "bg-pink-100 text-pink-600",
    icon: (
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    ),
  },
]

const placeholderFeatures = [
  { title: "Feature 1", description: "Description for feature 1." },
  { title: "Feature 2", description: "Description for feature 2." },
  { title: "Feature 3", description: "Description for feature 3." },
  { title: "Feature 4", description: "Description for feature 4." },
]

const advancedStats = [
  {
    title: "Real-time monitoring",
    description: "Instant position updates and health tracking across all your LPs.",
  },
  {
    title: "Competitive rates",
    description: "Low borrowing fees and minimal protocol costs for more efficient capital access.",
  },
  {
    title: "Deep liquidity",
    description: "Access liquidity across 50+ supported pools for tighter spreads and better execution.",
  },
  {
    title: "Pro-grade reliability",
    description: "High uptime with automated risk management and MEV-aware execution paths.",
  },
]

function FeatureCard({
  title,
  description,
  accent,
  icon,
}: {
  title: string
  description: string
  accent: string
  icon: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-gray-200 p-6">
      <div className="mb-3 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${accent}`}>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {icon}
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ImagePanel({ alt }: { alt: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <Image
        src="https://assets-cms.kraken.com/images/51n36hrp/facade/28d0735d033c2d44d6cb337e78eb036fb75bde4f-3756x2088.jpg?w=1536&fit=min"
        alt={alt}
        width={1536}
        height={854}
        className="aspect-[16/9] w-full object-cover"
      />
    </div>
  )
}

export default function PlatformPage() {
  return (
    <main className="bg-white">
      <WebappHero />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="relative z-0 flex flex-1 flex-col">
          <div className="site-content-width space-y-12 pb-16">
            <section>
              <div className="mb-8 max-w-[650px] space-y-3 text-left">
                <SectionEyebrow>How it works</SectionEyebrow>
                <SectionTitle>LP borrowing, simplified.</SectionTitle>
              </div>

              <div className="max-w-[650px] space-y-4">
                <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500">
                    <span className="text-sm font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Deposit LP tokens</h3>
                    <p className="text-sm text-gray-600">
                      Add Uniswap or Balancer positions and keep earning fees while they remain deposited.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500">
                    <span className="text-sm font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Unlock credit line</h3>
                    <p className="text-sm text-gray-600">
                      Borrow instantly and repay anytime while continuing to manage fees and collateral.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="mb-8 max-w-[650px] space-y-3 text-left">
                <SectionEyebrow>Financing</SectionEyebrow>
                <SectionTitle>Flexible capital, one interface.</SectionTitle>
              </div>

              <div className="mb-6">
                <ImagePanel alt="Financing dashboard" />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {financingFeatures.map((feature) => (
                  <FeatureCard key={feature.title} {...feature} />
                ))}
              </div>

              <p className="mt-8 text-center text-sm text-gray-500">Subject to risk assessment and availability</p>
            </section>

            <section>
              <div className="mb-8 max-w-[650px] space-y-3 text-left">
                <SectionEyebrow>Platform Tools</SectionEyebrow>
                <SectionTitle>Manage every position in one place.</SectionTitle>
              </div>

              <div className="mb-6">
                <ImagePanel alt="Section dashboard" />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {placeholderFeatures.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                    accent={index % 2 === 0 ? "bg-violet-100 text-violet-600" : "bg-purple-100 text-purple-600"}
                    icon={index % 2 === 0 ? <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /> : <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />}
                  />
                ))}
              </div>

              <p className="mt-8 text-center text-sm text-gray-500">Subject to risk assessment and availability</p>
            </section>

            <section>
              <InlineFaqSection eyebrow="FAQ" title="Frequently asked questions." items={platformFaqItems} />
            </section>
          </div>
        </div>
      </div>

      <section className="mb-[-32px] w-full pb-[32px] lg:mb-[-64px] lg:pb-[64px]">
        <div
          className="overflow-hidden rounded-tl-[32px] rounded-tr-[32px] pt-[96px] lg:rounded-tl-[64px] lg:rounded-tr-[64px] lg:pt-[64px]"
          style={{
            background:
              "linear-gradient(185deg, rgba(0, 22, 90, 0) 10%, rgb(0, 22, 90) 90.38%), linear-gradient(rgb(0, 22, 90) 0%, rgb(163, 179, 202) 100%)",
          }}
        >
          <div className="site-content-shell">
            <div className="flex flex-col items-center gap-4 px-8 pb-8 lg:gap-8 lg:px-16 lg:pb-0">
              <div className="flex flex-row items-center justify-center gap-2.5">
                <div className="h-[35px] w-[35px]">
                  <svg className="h-[35px] w-[35px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <p className="text-[15px] font-medium leading-normal text-gray-300 lg:text-[16px]">
                  Advanced LP Management
                </p>
              </div>

              <div className="flex max-w-[366px] flex-col items-center gap-1 lg:max-w-none">
                <h2 className="text-center text-[32px] font-black leading-[1.08] tracking-[-0.02em] text-white lg:text-[48px]">
                  Power meets precision
                </h2>
                <h3 className="text-center text-[18px] font-medium leading-[1.45] text-gray-300 lg:text-[22px]">
                  Manage positions with institutional-grade tools and deeper liquidity
                </h3>
              </div>

              <div className="hidden flex-wrap items-center justify-center gap-4 lg:flex">
                <Link
                  className="group relative flex h-10 min-w-16 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-[24px] border border-white/20 bg-white/8 px-[18px] py-2 backdrop-blur-xl transition-all duration-300 ease-out hover:border-white/30 hover:bg-white/12 active:scale-95"
                  href="/faq"
                >
                  <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%]" />
                  <div className="pointer-events-none absolute inset-[1px] rounded-[23px] bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex flex-row items-center justify-center gap-1">
                    <p className="text-[15px] font-medium leading-normal tracking-[-0.28px] text-gray-50">
                      Get Early Access
                    </p>
                  </div>
                </Link>

                <Link
                  className="group relative flex h-10 min-w-16 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-[24px] border border-white/20 bg-white/8 px-[18px] py-2 backdrop-blur-xl transition-all duration-300 ease-out hover:border-white/30 hover:bg-white/12 active:scale-95"
                  href="/developers"
                >
                  <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%]" />
                  <div className="pointer-events-none absolute inset-[1px] rounded-[23px] bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex flex-row items-center justify-center gap-1">
                    <p className="text-[15px] font-medium leading-normal tracking-[-0.28px] text-gray-50">
                      View Docs
                    </p>
                  </div>
                </Link>
              </div>

              <div className="relative w-full">
                <div className="relative left-1/2 h-auto w-screen -translate-x-1/2">
                  <div className="relative aspect-[1600/760] w-full">
                    <Image
                      alt="Power meets precision"
                      className="object-fill"
                      fill
                      loading="lazy"
                      sizes="100vw"
                      src="https://mkt-static.crypto.com/cdc_home_exchangehero_usd.webp"
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col items-center justify-center gap-3 px-4 lg:hidden">
                <Link
                  className="group relative flex h-10 w-full max-w-[366px] min-w-16 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-[24px] border border-white/20 bg-white/8 px-[18px] py-2 backdrop-blur-xl transition-all duration-300 ease-out hover:border-white/30 hover:bg-white/12 active:scale-95"
                  href="/faq"
                >
                  <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%]" />
                  <div className="pointer-events-none absolute inset-[1px] rounded-[23px] bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex flex-row items-center justify-center gap-1">
                    <p className="text-[15px] font-medium leading-normal tracking-[-0.28px] text-gray-50">
                      Get Early Access
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col bg-white">
          <div className="site-content-shell py-8 lg:py-16">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-8">
              {advancedStats.map((stat) => (
                <div key={stat.title} className="flex flex-col gap-4 border-t border-gray-200 pt-4">
                  <p className="text-[17px] font-semibold leading-normal tracking-[-0.01em] text-gray-900 lg:text-[19px]">
                    {stat.title}
                  </p>
                  <p className="text-[15px] font-normal leading-[1.6] text-gray-600 lg:text-[16px]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="site-content-shell">
            <EarlyAccessCtaBox />
          </div>
        </div>
      </section>
    </main>
  )
}
