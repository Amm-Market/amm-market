import dynamic from "next/dynamic"
import type { Metadata } from "next"
import { getLocale, getTranslations } from "next-intl/server"
import WebappHero from "@/components/webapp-hero"
import { SectionTitle } from "@/components/shared"
import { LazySection } from "@/components/ui/lazy-section"
import { LocalizedMarketing } from "@/components/localized-marketing"
import { languageAlternates } from "@/lib/i18n/path"
import { buildOgImagePath, SITE_NAME, SITE_URL, siteRoutes } from "@/lib/site"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: "meta" })

  return {
    title: t("home.title"),
    description: t("home.description"),
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
      languages: languageAlternates(siteRoutes.home),
    },
    openGraph: {
      title: `${SITE_NAME} - ${t("home.title")}`,
      description: t("ogDescription"),
      url: SITE_URL,
      images: [
        {
          url: buildOgImagePath({
            title: SITE_NAME,
            subtitle: t("ogSubtitle"),
          }),
          alt: t("ogAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: [
        buildOgImagePath({
          title: SITE_NAME,
          subtitle: t("ogSubtitle"),
        }),
      ],
    },
  }
}

const DeferredBuildTomorrowSection = dynamic(() => import("@/components/BuildTomorrowSection"))
const DeferredHeroSection = dynamic(() => import("@/components/hero-section"), {
  loading: () => <DeferredHomepageSectionsFallback />,
})

function BuildTomorrowSectionFallback() {
  return (
    <section className="w-full bg-inherit site-section-gap" aria-hidden="true">
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
        className="feature-card rounded-[28px] border border-gray-200 p-6 md:p-8"
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

export default async function Home() {
  const t = await getTranslations("home")

  return (
    <LocalizedMarketing keys={["page","BuildTomorrowSection","hero-section","homepage/HomepageTestimonialSection","homepage/HomepageFaqSection","homepage/HomepageNewsroomSection","webapp-hero"]}>
      <section className="bg-white pt-10 pb-10 md:pt-14 md:pb-12 2xl:pt-12 2xl:pb-11">
        <div className="site-content-shell">
          <div className="mx-auto grid w-fit max-w-full grid-cols-1 gap-5 text-center md:grid-cols-[auto_auto] md:items-end md:gap-10 md:text-left lg:gap-14">
            <div className="space-y-4">
              <SectionTitle className="text-center font-medium md:text-left">
                <span className="block lg:whitespace-nowrap">{t("hero.titleLine1")}</span>
                <span className="block lg:whitespace-nowrap">{t("hero.titleLine2")}</span>
              </SectionTitle>
            </div>
            <div className="space-y-8">
              <p className="mx-auto max-w-[42rem] text-[1.08rem] leading-[1.6] tracking-[-0.02em] text-[#39515b] md:mx-0 lg:text-[1.18rem]">
                <span className="md:hidden">
                  {t("hero.subtitleMobileLines.0")}
                  <br />
                  {t("hero.subtitleMobileLines.1")}
                  <br />
                  {t("hero.subtitleMobileLines.2")}
                </span>
                <span className="hidden md:inline">
                  {t("hero.subtitleDesktopLines.0")}
                  <br />
                  {t("hero.subtitleDesktopLines.1")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <WebappHero />
      <div className="pt-8 md:pt-10">
        <div className="border-t border-[#01AACF]" aria-hidden="true" />
      </div>
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
    </LocalizedMarketing>
  )
}
