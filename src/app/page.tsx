import dynamic from "next/dynamic"
import type { Metadata } from "next"
import WebappHero from "@/components/webapp-hero"
import { SectionTitle } from "@/components/shared"
import { LazySection } from "@/components/ui/lazy-section"
import { buildOgImagePath, SITE_NAME, SITE_URL, siteRoutes } from "@/lib/site"

export const metadata: Metadata = {
  title: "Borrow Against LP Positions on Aave v4",
  description:
    "Avana lets liquidity providers borrow against active LP positions while staying in the pool and continuing to earn fees.",
  keywords: [
    "LP collateral",
    "borrow against LP positions",
    "Aave v4",
    "DeFi lending",
    "liquidity provider loans",
    "AMM collateral",
  ],
  alternates: {
    canonical: siteRoutes.home,
  },
  openGraph: {
    title: `${SITE_NAME} - Borrow Against LP Positions on Aave v4`,
    description:
      "Avana turns LP positions into borrowable collateral while preserving trading fee exposure and pool activity.",
    url: SITE_URL,
    images: [
      {
        url: buildOgImagePath({
          title: SITE_NAME,
          subtitle: "Borrow against LP positions on Aave v4",
        }),
        alt: `${SITE_NAME} homepage`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Borrow Against LP Positions on Aave v4`,
    description:
      "Borrow against active LP positions while staying in the pool and continuing to earn fees.",
    images: [
      buildOgImagePath({
        title: SITE_NAME,
        subtitle: "Borrow against LP positions on Aave v4",
      }),
    ],
  },
}

const DeferredBuildTomorrowSection = dynamic(() => import("@/components/BuildTomorrowSection"))
const DeferredHeroSection = dynamic(() => import("@/components/hero-section"), {
  loading: () => <DeferredHomepageSectionsFallback />,
})

// Note: Metadata is defined in layout.tsx with title template
// Homepage uses the default title from the template

function BuildTomorrowSectionFallback() {
  return (
    <section className="w-full bg-inherit pb-16 md:pb-20 2xl:pb-18" aria-hidden="true">
      <div className="site-content-shell">
        <div className="mb-6 flex max-w-[600px] animate-pulse flex-col gap-2 sm:mb-8">
          <div className="h-3 w-28 rounded-full bg-gray-200" />
          <div className="h-10 w-72 rounded-2xl bg-gray-200" />
        </div>
        <div className="overflow-hidden rounded-[1.35rem] bg-gray-100 md:rounded-[1.6rem]">
          <div className="aspect-[4/5] w-full bg-gradient-to-br from-gray-200 to-gray-300 sm:aspect-[2/1]" />
        </div>
      </div>
    </section>
  )
}

function DeferredHomepageSectionsFallback() {
  return (
    <div className="site-content-shell pb-16 md:pb-20 2xl:pb-18">
      <div
        aria-hidden="true"
        className="rounded-[28px] border border-gray-200 bg-gray-50 p-6 md:p-8"
      >
        <div className="animate-pulse space-y-4">
          <div className="h-3 w-28 rounded-full bg-gray-200" />
          <div className="h-10 w-72 max-w-full rounded-2xl bg-gray-200" />
          <div className="h-4 w-[92%] rounded-full bg-gray-200" />
          <div className="h-4 w-[78%] rounded-full bg-gray-200" />
          <div className="h-4 w-[64%] rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="bg-white pt-10 pb-10 md:pt-14 md:pb-12 2xl:pt-12 2xl:pb-11">
        <div className="site-content-shell">
          <div className="mx-auto grid w-fit max-w-full grid-cols-1 gap-5 text-center md:grid-cols-[auto_auto] md:items-start md:gap-10 md:text-left lg:gap-14">
            <div className="space-y-4">
              <SectionTitle className="text-center md:text-left">
                <span className="block lg:whitespace-nowrap">Unlock Capital</span>
                <span className="block lg:whitespace-nowrap">from Amm Markets</span>
              </SectionTitle>
            </div>
            <div className="space-y-8">
              <p className="mx-auto max-w-[34rem] text-[1.2rem] font-normal leading-[1.2] tracking-[-0.04em] text-[#121212] sm:text-[1.55rem] sm:leading-[1.12] md:mx-0 lg:text-[1.95rem]">
                Turn your liquidity pool positions
                <br />
                into collateral and borrow against them
                <br />
                here without leaving the pool.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WebappHero />
      <LazySection
        rootMargin="240px"
        minHeight="560px"
        fallback={<BuildTomorrowSectionFallback />}
      >
        <DeferredBuildTomorrowSection />
      </LazySection>
      <LazySection rootMargin="320px" minHeight="640px" fallback={<DeferredHomepageSectionsFallback />}>
        <DeferredHeroSection />
      </LazySection>
    </>
  )
}
