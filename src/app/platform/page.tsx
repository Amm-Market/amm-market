import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import HomepageNewsroomSection from "@/components/homepage/HomepageNewsroomSection"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

export const metadata: Metadata = {
  title: "Platform - Avana",
  description:
    "Explore the Avana platform for LP-backed borrowing, financing workflows, monitoring, and advanced LP management.",
}

const platformFaqItems: InlineFaqItem[] = [
  {
    value: "platform-1",
    question: "Which wallets are supported?",
    answer:
      "Avana supports major EVM wallets including MetaMask, Coinbase Wallet, WalletConnect compatible wallets, and hardware wallets connected through WalletConnect. Any wallet that can sign EVM transactions can use the app.",
  },
  {
    value: "platform-2",
    question: "Which chains does the app support?",
    answer:
      "Ethereum mainnet is supported at launch. Additional deployments such as Base and Arbitrum can be added in later phases, with multi chain position management exposed through a unified interface once live.",
  },
  {
    value: "platform-3",
    question: "How do automation tools work?",
    answer:
      "The app lets users configure automated actions around position health, leverage, and price levels. These rules can reduce leverage, increase leverage, repay debt, or fully close a position when predefined conditions are reached.",
  },
  {
    value: "platform-4",
    question: "Can I use the protocol without the official interface?",
    answer:
      "Yes. Avana is permissionless and open source, so users and developers can interact directly with the smart contracts or build their own interface. The official app is the main interface, but it is not the only access point.",
  },
  {
    value: "platform-5",
    question: "Are there fees for using the app?",
    answer:
      "The official interface may include an optional frontend fee. This does not change the underlying borrow or supply rates and can be avoided by using a self hosted interface or interacting directly with the protocol.",
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
        src="/images/homepage.png"
        alt={alt}
        width={2880}
        height={2111}
        className="aspect-[16/9] w-full object-cover"
        sizes="(max-width: 768px) 100vw, 1200px"
      />
    </div>
  )
}

export default function PlatformPage() {
  return (
    <main className="bg-white">
      <section className="bg-white pt-10 pb-8 md:pt-14 md:pb-10 lg:pt-16">
        <div className="px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="mx-auto w-full max-w-[90rem] space-y-10 md:space-y-12 lg:space-y-14">
              <div className="pt-20 md:pt-28 lg:pt-32">
                <h1 className="text-left text-[clamp(2.4rem,5.8vw,4.3rem)] font-normal leading-[0.98] tracking-[-0.065em] text-[#111111]">
                  <span className="block whitespace-nowrap">One platform for every</span>
                  <span className="block whitespace-nowrap">Amm Markets needs</span>
                </h1>
              </div>

              <section className="opacity-100 [transform:perspective(1200px)]">
                <div className="relative overflow-hidden rounded-[18px] bg-[#f4f1ea] md:rounded-[22px] lg:rounded-[24px]">
                  <div className="relative aspect-square w-full md:aspect-[1360/640]">
                    <img
                      src="https://framerusercontent.com/images/wHZUVowhaR4lNZZRsYJJW7ik9M.jpg?scale-down-to=1024&width=8368&height=5584"
                      alt="Two people are sitting in the office, discussing the upcoming project."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-white/0 to-white/55 blur-2xl md:h-20 lg:h-24" />
                </div>
              </section>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="relative z-0 flex flex-1 flex-col">
          <div className="site-content-width space-y-32 pt-16 pb-16 md:space-y-40 md:pt-20 md:pb-20">
            <section>
              <div className="mb-8 max-w-[650px] space-y-3 text-left">
                <SectionEyebrow tone="violet">How it works</SectionEyebrow>
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
                <SectionEyebrow tone="violet">Financing</SectionEyebrow>
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
                <SectionEyebrow tone="violet">Platform Tools</SectionEyebrow>
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

            <HomepageNewsroomSection collection="platform" eyebrowTone="violet" />

            <div className="pb-16 md:pb-24">
              <InlineFaqSection title="Frequently asked questions." items={platformFaqItems} eyebrowTone="violet" withTopBorder={false} />
            </div>
          </div>
        </div>
      </div>

      <section className="w-full pt-32 md:pt-40">
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
                <h2 className="text-center text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-white lg:text-[48px]">
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
                  prefetch={false}
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
                  prefetch={false}
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
                      src="/images/homepage.png"
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col items-center justify-center gap-3 px-4 lg:hidden">
                <Link
                  className="group relative flex h-10 w-full max-w-[366px] min-w-16 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-[24px] border border-white/20 bg-white/8 px-[18px] py-2 backdrop-blur-xl transition-all duration-300 ease-out hover:border-white/30 hover:bg-white/12 active:scale-95"
                  href="/faq"
                  prefetch={false}
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
                <div key={stat.title} className="flex flex-col gap-4 pt-4">
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
        </div>
      </section>
    </main>
  )
}
