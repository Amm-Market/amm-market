import Image from "next/image"
import { withMarketingI18n } from "@/lib/content-i18n/with-marketing-i18n"

export default async function WebappHero() {
  return withMarketingI18n(['webapp-hero'], (
    <div className="relative overflow-hidden bg-white">
      <div className="site-content-shell pt-8 pb-0 sm:pt-10 lg:pt-12">
        <div className="relative mx-auto w-full">
          <Image
            src="/avana-pool-hero.png"
            alt="Avana homepage hero visual"
            width={1444}
            height={869}
            priority
            quality={62}
            className="h-auto w-full rounded-none"
            sizes="(max-width: 768px) 100vw, (max-width: 1536px) 64rem, 72rem"
          />
        </div>
      </div>
    </div>
  ))
}
