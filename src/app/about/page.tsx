import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ProtocolRoadmapSection from "@/components/protocol-roadmap-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

const pageDescription =
  "Meet Avana, a dedicated LP-as-collateral protocol built on Aave v4 with specialized Spokes, a shared Hub, and an Invest Spoke designed for AMM liquidity markets."

export const metadata: Metadata = {
  title: "About",
  description: pageDescription,
  alternates: {
    canonical: siteRoutes.about,
  },
  openGraph: {
    title: "About",
    description: pageDescription,
    url: siteRoutes.about,
    images: [
      {
        url: buildOgImagePath({
          title: "About",
          subtitle: "LP-as-collateral protocol built on Aave v4",
        }),
        alt: "About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About",
    description: pageDescription,
    images: [
      buildOgImagePath({
        title: "About",
        subtitle: "LP-as-collateral protocol built on Aave v4",
      }),
    ],
  },
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="pb-16 pt-24 lg:pb-24 lg:pt-40">
        <div className="site-content-shell">
          <div className="mx-auto max-w-4xl text-center">
            <h1
              aria-label={`Introducing ${SITE_NAME}: A lending protocol for LP collateral`}
              className="text-[2.35rem] font-[580] leading-[0.96] tracking-[-0.06em] text-gray-950 sm:text-[3.2rem] lg:text-[4.5rem]"
            >
              <span className="text-gray-950">Introducing {SITE_NAME}:</span>
              <br />
              <span className="text-[#01AACF] lg:whitespace-nowrap">
                <span className="block lg:inline">A lending protocol</span>
                <span className="hidden lg:inline"> </span>
                <span className="block lg:inline">for LP collateral</span>
              </span>
            </h1>
          </div>

          <div className="relative mt-10 aspect-[1630/965] w-full overflow-hidden rounded-sm border border-black/8 bg-gray-100 lg:mt-14">
            <Image
              src="/images/Avana About.png"
              alt="Avana about hero image"
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-8 lg:mt-14">
            <p className="text-[0.98rem] font-normal leading-[1.65] tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
              One of the most important sources of collateral demand in crypto is hiding in plain sight. For years,
              DeFi has treated AMMs primarily as trading infrastructure and LP positions as passive liquidity. Yet
              major AMMs already hold billions in liquidity, and the opportunity to make that capital usable as
              collateral has become increasingly difficult to ignore. AMMs are now more mature, liquidity is deeper,
              oracle infrastructure is stronger, and market participants are far more familiar with how LP positions
              behave across stable, correlated, and volatile pairs than they were in earlier generations of the market.
            </p>
            <p className="text-[0.98rem] font-normal leading-[1.65] tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
              We believe the next major expansion in DeFi lending markets will come from protocols that can understand
              AMM liquidity, its risk, and its pool structure. That is why we are building Avana as a dedicated
              lending protocol for LP collateral across AMM markets, with specialized Aave v4 Spokes for different
              liquidity designs, a central Aave v4 Hub for shared borrowing liquidity, and an Aave v4 Invest Spoke
              that supplies the capital behind those markets.
            </p>
            <p className="text-[0.98rem] font-normal leading-[1.65] tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
              Avana is designed to transform AMM liquidity into structured collateral markets, allowing LP positions
              across hundreds of pools to participate in lending through architecture built specifically for their risk
              profile, pool design, and liquidity behavior.
            </p>
            <div className="space-y-5 border-t border-gray-200 pt-8">
              <div className="space-y-3">
                <SectionEyebrow tone="cyan">Risk Management</SectionEyebrow>
                <SectionTitle>Protocol Operations</SectionTitle>
              </div>

              <div className="space-y-5 text-[1.08rem] font-normal leading-[1.7] tracking-[-0.025em] text-gray-900 sm:text-[1.18rem]">
                <p>
                  To keep risk management clear and accountable, Avana&apos;s operations are structured across
                  specialized contributor scopes, each responsible for a defined area of the protocol.
                </p>
                <div className="rounded-[28px] bg-gray-50/70 p-5 sm:p-6">
                  <div className="grid gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-8">
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold tracking-[-0.03em] text-gray-950">
                        Protocol Core team
                      </h3>
                      <p className="text-[0.98rem] leading-[1.65] text-gray-700">
                        The Protocol Core team oversees Avana&apos;s technical risk, including the smart contracts, LP
                        collateral framework, liquidation systems, oracle infrastructure, access control, execution
                        environment, and upgrade architecture across integrated AMMs and lending hubs.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-semibold tracking-[-0.03em] text-gray-950">
                        Governance & Operations team
                      </h3>
                      <p className="text-[0.98rem] leading-[1.65] text-gray-700">
                        The Governance & Operations team manages ecosystem growth, proposal coordination, treasury
                        operations, incentive programs, and collateral onboarding processes.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-semibold tracking-[-0.03em] text-gray-950">
                        Market Risk team
                      </h3>
                      <p className="text-[0.98rem] leading-[1.65] text-gray-700">
                        The Market Risk team is responsible for quantitative modeling of LP collateral behavior,
                        liquidity depth, volatility, liquidation dynamics, concentrated liquidity exposure, pricing
                        integrity, and parameter optimization under varying market conditions.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-semibold tracking-[-0.03em] text-gray-950">
                        Collateral Risk team
                      </h3>
                      <p className="text-[0.98rem] leading-[1.65] text-gray-700">
                        The Collateral Risk team focuses on qualitative assessment, including structural review of
                        listed assets, liquidity sources, governance structures, protocol dependencies, and broader
                        collateral integrity across supported markets.
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  This separation of responsibilities helps ensure that technical infrastructure, governance
                  operations, market risk, and collateral assessment are managed independently across the ecosystem.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <ProtocolRoadmapSection />
            </div>
            <p className="text-[1.2rem] font-normal leading-[1.5] tracking-[-0.03em] text-gray-900 sm:text-[1.35rem]">
              We are a small team working on a large problem. If you&apos;re interested in joining this research
              effort,{" "}
              <Link
                href={siteRoutes.earlyAccess}
                className="font-medium text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black"
              >
                we would love to hear from you.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
