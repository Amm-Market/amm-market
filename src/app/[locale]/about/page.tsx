import { createPageMetadata } from "@/lib/i18n/page-metadata"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import ProtocolRoadmapSection from "@/components/protocol-roadmap-section"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { SITE_NAME } from "@/lib/site"
import { LocalizedMarketing } from "@/components/localized-marketing"

export async function generateMetadata() {
  return createPageMetadata("about", "/about")
}


export default async function AboutPage() {
  return (
    <LocalizedMarketing keys={["about/page", "protocol-roadmap-section"]}>
    <main className="bg-white">
      <section className="pb-16 pt-24 lg:pb-24 lg:pt-40">
        <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 2xl:px-0">
          <div className="mx-auto text-center">
            <h1
              aria-label={`Introducing ${SITE_NAME}: A lending protocol for LP-backed loans`}
              className="text-[2.35rem] font-[580] leading-[0.96] tracking-[-0.06em] text-gray-950 sm:text-[3.2rem] lg:text-[4.5rem]"
            >
              <span className="text-gray-950">{`Introducing ${SITE_NAME}:`}</span>
              <br />
              <span className="text-[#01AACF]">
                A lending protocol for LP-backed loans
              </span>
            </h1>
          </div>

          <div className="relative mt-10 aspect-[1630/965] w-full overflow-hidden rounded-sm border border-black/8 bg-gray-100 lg:mt-14">
            <Image
              src="/images/Avana About.webp"
              alt="Avana about hero image"
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-8 lg:mt-14">
            <p className="text-[1.06rem] font-semibold leading-[1.55] tracking-[-0.025em] text-gray-950 sm:text-[1.18rem]">
              One of crypto&apos;s most important sources of collateral is hiding in plain sight:{" "}
              <span className="text-[#01AACF]">AMM liquidity.</span>
            </p>
            <p className="text-[0.98rem] font-normal leading-[1.65] tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
              Major AMMs already hold billions in liquidity, yet LP positions are still treated mostly as passive
              positions rather than productive collateral. Avana brings that liquidity into lending markets for
              today&apos;s DEXs and LP types, using dual oracles and stronger risk controls.
            </p>
            <p className="text-[0.98rem] font-normal leading-[1.65] tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
              That requires more than listing LP tokens as collateral. Avana is built around specialized Aave v4 Spokes
              for different DEX designs, several Aave v4 Hubs organized around lowest-risk, correlated, and higher-range
              LP markets, and an Aave v4 Lend Spoke that supplies the capital behind those markets.
            </p>
            <p className="text-[0.98rem] font-normal leading-[1.65] tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
              <span className="font-semibold text-gray-950">The end state is simple:</span> LP positions that can earn
              in AMMs, back loans in lending markets, and carry risk controls specific to the pools they come from.
            </p>
            <div className="space-y-5 pt-8">
              <div className="space-y-3">
                <SectionEyebrow tone="cyan">Protocol Operations</SectionEyebrow>
                <SectionTitle>Risk Management</SectionTitle>
              </div>

              <div className="space-y-5 text-[0.98rem] font-normal leading-[1.65] tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
                <p>
                  Risk management in Avana is split across specialized contributor scopes so no single team owns every
                  assumption behind an LP collateral market.
                </p>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-[0.98rem] font-semibold tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
                      01. Protocol team
                    </h3>
                    <p>
                      Protocol owns the design and implementation of Avana&apos;s lending system, including smart
                      contracts, LP collateral architecture, liquidation systems, oracle infrastructure, access control,
                      execution environment, and upgrades across integrated AMMs and lending hubs.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-[0.98rem] font-semibold tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
                      02. Operations team
                    </h3>
                    <p>
                      Operations coordinates the day-to-day protocol layer, including treasury processes, incentive
                      programs, ecosystem growth, contributor workflows, and collateral onboarding operations.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-[0.98rem] font-semibold tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
                      03. Market Risk team
                    </h3>
                    <p>
                      Market Risk owns the quantitative side of LP collateral: liquidity depth, volatility, price
                      behavior, concentrated liquidity exposure, liquidation dynamics, pricing integrity, and parameter
                      tuning across market conditions.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-[0.98rem] font-semibold tracking-[-0.025em] text-gray-900 sm:text-[1.08rem]">
                      04. Collateral Risk team
                    </h3>
                    <p>
                      Collateral Risk owns the qualitative side of onboarding and monitoring, including asset structure,
                      liquidity sources, governance dependencies, protocol dependencies, and broader collateral
                      integrity across supported markets.
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-gray-950">
                  The goal is clean separation, with technical execution, operations, market modeling, and collateral
                  review each owned independently.
                </p>
              </div>
            </div>
            <div className="pt-8">
              <ProtocolRoadmapSection />
            </div>
            <p className="text-[1.2rem] font-normal leading-[1.5] tracking-[-0.03em] text-gray-900 sm:text-[1.35rem]">
              We are a small team working on a large problem. If you&apos;re interested in joining this research
              effort,{" "}
              <Link
                href="https://twitter.com/avana_labs"
                className="font-medium text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black"
              >
                we would love to hear from you.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  </LocalizedMarketing>
)
}
