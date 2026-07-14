import dynamic from "next/dynamic"
import type { Metadata } from "next"
import WebappHero from "@/components/webapp-hero"
import LogoMarquee from "@/components/logo-marquee"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
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
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <div className="aspect-[4/5] w-full bg-gradient-to-br from-gray-200 to-gray-300 sm:aspect-[2/1]" />
          <div className="border-t border-gray-200 bg-white p-4 sm:hidden">
            <div className="h-5 w-24 rounded-full bg-gray-200" />
            <div className="mt-3 h-4 w-5/6 rounded-full bg-gray-100" />
          </div>
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
      <WebappHero />
      <LogoMarquee />
      <section className="bg-white pt-16 pb-24 md:pt-20 md:pb-32 2xl:pt-18 2xl:pb-29">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[76rem]">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,29rem)_minmax(0,1fr)] md:gap-10 lg:gap-12 xl:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]">
              <div className="space-y-4">
                <SectionEyebrow tone="cyan">What&apos;s new</SectionEyebrow>
                <SectionTitle>
                  <span className="block lg:whitespace-nowrap">Unlock Capital</span>
                  <span className="block lg:whitespace-nowrap">from Amm Markets.</span>
                </SectionTitle>
              </div>
              <div className="space-y-8 text-left text-[#39515b]">
                <p className="max-w-[42rem] text-[1.08rem] leading-[1.6] tracking-[-0.02em] lg:text-[1.18rem]">
                  In 2021, <strong className="font-semibold text-gray-900">Aave</strong> launched <strong className="font-semibold text-gray-900">AMM Market</strong> and proved <strong className="font-semibold text-gray-900">LP positions</strong> could serve as collateral, but it was built for the simpler DEXs of that era. <strong className="font-semibold text-gray-900">Avana</strong> picks up where that left off, designed for today&apos;s DEXs and LP types, treating each position as <strong className="font-semibold text-gray-900">collateral</strong> shaped by dual oracles and stronger risk controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
