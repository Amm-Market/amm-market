import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import BuildTomorrowSection from "@/components/BuildTomorrowSection"
import HeroSection from "@/components/hero-section"
import WebappHero from "@/components/webapp-hero"
import { SectionTitle } from "@/components/shared"
import { LocalizedMarketing } from "@/components/localized-marketing"
import { resolveLocaleParam, type LocaleParamsProps } from "@/lib/i18n/locale-params"
import { languageAlternates } from "@/lib/i18n/path"
import { buildOgImagePath, SITE_NAME, SITE_URL, siteRoutes } from "@/lib/site"

export const dynamic = "force-static"

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  const locale = await resolveLocaleParam(params)
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

export default async function Home({ params }: LocaleParamsProps) {
  const locale = await resolveLocaleParam(params)
  const t = await getTranslations({ locale, namespace: "home" })

  return (
    <LocalizedMarketing locale={locale} keys={["page","BuildTomorrowSection","hero-section","homepage/HomepageTestimonialSection","homepage/HomepageFaqSection","homepage/HomepageNewsroomSection","webapp-hero"]}>
      <section className="bg-white pt-10 pb-10 md:pt-14 md:pb-12 2xl:pt-12 2xl:pb-11">
        <div className="site-content-shell">
          <div className="mx-auto grid w-fit max-w-full grid-cols-1 gap-5 text-center md:grid-cols-[auto_auto] md:items-end md:gap-10 md:text-left lg:gap-14">
            <div className="space-y-4">
              <SectionTitle variant="display" className="text-center md:text-left">
                <span className="block lg:whitespace-nowrap">{t("hero.titleLine1")}</span>
                <span className="block lg:whitespace-nowrap">{t("hero.titleLine2")}</span>
              </SectionTitle>
            </div>
            <div className="space-y-8">
              <p className="type-display-lead mx-auto max-w-[42rem] md:mx-0">
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
      <WebappHero locale={locale} />
      <div className="pt-8 md:pt-10">
        <div className="border-t border-border/80" aria-hidden="true" />
      </div>
      <BuildTomorrowSection locale={locale} />
      <HeroSection locale={locale} />
    </LocalizedMarketing>
  )
}
