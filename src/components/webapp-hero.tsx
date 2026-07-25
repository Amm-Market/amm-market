import Image from "next/image"

export default function WebappHero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="site-content-shell py-8 sm:py-10 lg:py-12">
        <div className="relative mx-auto w-full">
          <Image
            src="/avana-pool-hero.png"
            alt="Avana homepage hero visual"
            width={1444}
            height={869}
            preload
            fetchPriority="high"
            quality={62}
            className="h-auto w-full rounded-none"
            sizes="(max-width: 768px) 100vw, (max-width: 1536px) 64rem, 72rem"
          />
        </div>
      </div>
    </div>
  )
}
