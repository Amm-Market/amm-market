import Image from "next/image"
import type { AppLocale } from "@/i18n/locales"
import { withMarketingI18n } from "@/lib/content-i18n/with-marketing-i18n"

const heroImageProps = {
  alt: "Avana homepage hero visual",
  width: 1024,
  height: 576,
  priority: true,
  quality: 80,
  className: "h-auto w-full rounded-none",
  sizes: "(max-width: 768px) 100vw, (max-width: 1536px) 64rem, 72rem",
} as const

export default async function WebappHero({ locale }: { locale: AppLocale }) {
  return withMarketingI18n(locale, ['webapp-hero'], (
    <div className="relative overflow-hidden bg-background">
      <div className="site-content-shell pt-8 pb-0 sm:pt-10 lg:pt-12">
        <div className="relative mx-auto w-full">
          <Image
            {...heroImageProps}
            src="/images/avana-express-hero-light.jpg"
            className={`${heroImageProps.className} dark:hidden`}
          />
          <Image
            {...heroImageProps}
            src="/images/avana-express-hero-dark.jpg"
            className={`${heroImageProps.className} hidden dark:block`}
          />
        </div>
      </div>
    </div>
  ))
}
