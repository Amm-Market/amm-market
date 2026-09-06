import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { FeatureCardTitle, SectionIntro } from "@/components/shared"
import type { AppLocale } from "@/i18n/locales"
import { withMarketingI18n } from "@/lib/content-i18n/with-marketing-i18n"
import { siteRoutes } from "@/lib/site"

/**
 * BuildTomorrowSection — Ways to use Avana with product visual.
 */

const productCards = [
  {
    title: "Borrow",
    description:
      "Borrow against LP positions while your liquidity stays active in the underlying AMM.",
    href: siteRoutes.borrow,
    image: "/images/home-product-borrow-cropped.png",
    imageAlt: "Borrow capacity interface",
    imageClassName: "object-contain",
  },
  {
    title: "Lend",
    description:
      "Supply capital into Hub-connected lending markets and earn from LP-backed borrower demand.",
    href: siteRoutes.lend,
    image: "/images/home-product-lend.png",
    imageAlt: "Lend market cash account interface",
    imageClassName: "object-cover object-top",
  },
  {
    title: "Multiply",
    description:
      "Use LP-backed credit to create managed leverage without exiting your base liquidity position.",
    href: siteRoutes.multiply,
    image: "/images/home-product-multiply.png",
    imageAlt: "Portfolio interface",
    imageClassName: "object-cover object-top",
  },
] as const

export default async function BuildTomorrowSection({ locale }: { locale: AppLocale }) {
  return withMarketingI18n(locale, ["BuildTomorrowSection"], (
    <section
      data-section="ways-to-use-avana"
      className="w-full bg-inherit site-section-gap"
    >
      <div className="site-content-shell">
        <div className="mb-6 flex max-w-[600px] flex-col gap-2 sm:mb-8 md:max-w-none">
          <SectionIntro
            eyebrow="Avana Markets"
            eyebrowTone="violet"
            title="Unlock Capital from AMM Markets"
          />
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3">
            {productCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col rounded-[1.35rem] border border-[#bcc8d6] bg-white p-4 md:rounded-[1.6rem] md:p-5"
              >
                <div className="relative aspect-[1.56/1] overflow-hidden rounded-[1rem] bg-[#e8edf5] md:rounded-[1.15rem]">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className={card.imageClassName}
                  />
                </div>
                <div className="mt-7 flex flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <FeatureCardTitle as="h3">{card.title}</FeatureCardTitle>
                    <Link
                      href={card.href}
                      className="inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-[#8ec5e2] px-5 text-sm tracking-[-0.02em] text-type-accent transition-colors hover:border-[#01AACF] hover:bg-[#01AACF] hover:text-white"
                    >
                      Learn more
                    </Link>
                  </div>
                  <p className="type-body-copy mt-5 max-w-[25rem]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  ))
}
