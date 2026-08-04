import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ProtocolRoadmapSection from "@/components/protocol-roadmap-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

const pageDescription =
  "Meet Avana, a dedicated LP-as-collateral protocol built on Aave v4 with specialized Spokes, a shared Hub, and a Lend Spoke designed for AMM liquidity markets."

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
        <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 2xl:px-0">
          <div className="mx-auto text-center">
            <h1
              aria-label={`Introducing ${SITE_NAME}: A lending protocol for LP-backed loans`}
              className="text-[2.35rem] font-[580] leading-[0.96] tracking-[-0.06em] text-gray-950 sm:text-[3.2rem] lg:text-[4.5rem]"
            >
              <span className="text-gray-950">Introducing {SITE_NAME}:</span>
              <br />
              <span className="text-[#01AACF]">
                <span className="hidden lg:inline whitespace-nowrap">A lending protocol for LP&#8209;backed loans</span>
                <span className="lg:hidden">
                  <span className="block md:inline">A lending protocol for</span>
                  <span className="block md:inline md:ml-2">LP&#8209;backed loans</span>
                </span>
              </span>
            </h1>
          </div>

          <div className="relative mt-10 aspect-[1630/965] w-full overflow-hidden rounded-sm border border-black/8 bg-gray-100 lg:mt-14">
            <Image
              src="/images/Avana About.webp"
              alt="Avana about hero image"
              fill
              preload
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-8 lg:mt-14">
            <p className="text-[0.98rem] font-normal leading-[1.65] tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
              One of crypto&apos;s most important sources of collateral is hiding in plain sight: AMM liquidity.
              Major AMMs already hold billions, yet LP positions are still treated mostly as passive liquidity
              rather than productive collateral. Aave&apos;s 2021 AMM Market proved that LP positions could back
              loans, but it was built for the simpler DEXs of that era. Avana extends that model to today&apos;s
              DEXs and LP types, using dual oracles and stronger risk controls.
            </p>
            <p className="text-[0.98rem] font-normal leading-[1.65] tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
              We believe the next major expansion in DeFi lending markets will come from protocols that can understand
              AMM liquidity, its risk, and its pool structure. That is why we are building Avana as a dedicated
              lending protocol for LP collateral across AMM markets, with specialized Aave v4 Spokes for different
              liquidity designs, a central Aave v4 Hub for shared borrowing liquidity, and an Aave v4 Lend Spoke
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

              <div className="space-y-5 text-[0.98rem] font-normal leading-[1.65] tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
                <p>
                  To keep risk management clear and accountable, Avana&apos;s operations are structured across
                  specialized contributor scopes, each responsible for a defined area of the protocol.
                </p>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-[0.98rem] font-semibold tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
                      Protocol Core team
                    </h3>
                    <p>
                      The Protocol Core team oversees Avana&apos;s technical risk, including the smart contracts, LP
                      collateral framework, liquidation systems, oracle infrastructure, access control, execution
                      environment, and upgrade architecture across integrated AMMs and lending hubs.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-[0.98rem] font-semibold tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
                      Governance & Operations team
                    </h3>
                    <p>
                      The Governance & Operations team manages ecosystem growth, proposal coordination, treasury
                      operations, incentive programs, and collateral onboarding processes.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-[0.98rem] font-semibold tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
                      Market Risk team
                    </h3>
                    <p>
                      The Market Risk team is responsible for quantitative modeling of LP collateral behavior,
                      liquidity depth, volatility, liquidation dynamics, concentrated liquidity exposure, pricing
                      integrity, and parameter optimization under varying market conditions.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-[0.98rem] font-semibold tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
                      Collateral Risk team
                    </h3>
                    <p>
                      The Collateral Risk team focuses on qualitative assessment, including structural review of
                      listed assets, liquidity sources, governance structures, protocol dependencies, and broader
                      collateral integrity across supported markets.
                    </p>
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
