import type { Metadata } from "next"
import Link from "next/link"
import ProtocolRoadmapSection from "@/components/protocol-roadmap-section"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

const pageDescription =
  "Meet Avana, a dedicated LP-as-collateral protocol built on Aave v4 with specialized Spokes, a shared Hub, and an Invest Spoke designed for AMM liquidity markets."

export const metadata: Metadata = {
  title: `About - ${SITE_NAME}`,
  description: pageDescription,
  alternates: {
    canonical: siteRoutes.about,
  },
  openGraph: {
    title: `About ${SITE_NAME}`,
    description: pageDescription,
    url: siteRoutes.about,
    images: [
      {
        url: buildOgImagePath({
          title: `About ${SITE_NAME}`,
          subtitle: "LP-as-collateral protocol built on Aave v4",
        }),
        alt: `About ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${SITE_NAME}`,
    description: pageDescription,
    images: [
      buildOgImagePath({
        title: `About ${SITE_NAME}`,
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
              aria-label={`Introducing ${SITE_NAME}: An LP-as-Collateral Protocol Built on Aave V4`}
              className="text-[2.35rem] font-[580] leading-[0.96] tracking-[-0.06em] text-gray-950 sm:text-[3.2rem] lg:text-[4.5rem]"
            >
              <span className="text-gray-950">Introducing {SITE_NAME}:</span>
              <br />
              <span className="text-gray-500">An LP-as-Collateral Protocol</span>
              <br />
              <span className="text-gray-500">Built on Aave V4</span>
            </h1>
          </div>

          <div
            aria-hidden="true"
            className="relative mt-10 aspect-video w-full overflow-hidden rounded-sm border border-black/8 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_30%),linear-gradient(135deg,_#f8fafc_0%,_#e2e8f0_55%,_#f8fafc_100%)] lg:mt-14"
          >
            <div className="absolute inset-x-[10%] top-[18%] h-[1px] bg-black/10" />
            <div className="absolute inset-x-[14%] top-[28%] h-[1px] bg-black/8" />
            <div className="absolute inset-x-[8%] bottom-[20%] h-[1px] bg-black/8" />
            <div className="absolute left-[11%] top-[16%] h-[68%] w-[1px] bg-black/8" />
            <div className="absolute right-[13%] top-[22%] h-[54%] w-[1px] bg-black/8" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500 backdrop-blur-sm sm:px-5">
                About Avana
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-8 lg:mt-14">
            <p className="text-[1.2rem] font-normal leading-[1.5] tracking-[-0.03em] text-gray-900 sm:text-[1.35rem]">
              One of the most important sources of collateral demand in crypto is hiding in plain sight. For years,
              DeFi has treated AMMs primarily as trading infrastructure and LP positions as passive liquidity. Yet
              major AMMs already hold billions in liquidity, and the opportunity to make that capital usable as
              collateral has become increasingly difficult to ignore. AMMs are now more mature, liquidity is deeper,
              oracle infrastructure is stronger, and market participants are far more familiar with how LP positions
              behave across stable, correlated, and volatile pairs than they were in earlier generations of the market.
            </p>
            <p className="text-[1.2rem] font-normal leading-[1.5] tracking-[-0.03em] text-gray-900 sm:text-[1.35rem]">
              We believe the next major expansion in DeFi lending markets will come from protocols that can understand
              AMM liquidity, its risk, and its pool structure. That is why we are building Avana as a dedicated
              lending protocol for LP collateral across AMM markets, with specialized Aave v4 Spokes for different
              liquidity designs, a central Aave v4 Hub for shared borrowing liquidity, and an Aave v4 Invest Spoke
              that supplies the capital behind those markets.
            </p>
            <p className="text-[1.2rem] font-normal leading-[1.5] tracking-[-0.03em] text-gray-900 sm:text-[1.35rem]">
              Avana is designed to transform AMM liquidity into structured collateral markets, allowing LP positions
              across hundreds of pools to participate in lending through architecture built specifically for their risk
              profile, pool design, and liquidity behavior.
            </p>
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
