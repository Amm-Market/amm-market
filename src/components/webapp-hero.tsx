import Image from "next/image"

export default function WebappHero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="w-full max-w-[1180px]">
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
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 2rem), 1080px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
