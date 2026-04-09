import Image from "next/image"

export default function WebappHero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center px-4 pb-8 pt-[42px] sm:px-6 sm:pt-[56px] lg:px-10 lg:pb-0">
        <div className="w-full max-w-[1180px]">
          <div className="max-w-[720px] pb-8 sm:pb-10 lg:pb-12">
            <p className="max-w-[620px] text-[1.48rem] font-normal leading-[1.12] tracking-[-0.04em] text-[#121212] sm:text-[1.55rem] lg:text-[1.95rem]">
              Keep liquidity on your favorite DEX,
              <br />
              then borrow against it with Avana.
            </p>
          </div>

          <div className="relative mx-auto w-full">
            <Image
              src="/images/5.webp"
              alt="Avana homepage hero visual"
              width={2048}
              height={1705}
              priority
              className="h-auto w-full rounded-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 92vw, 1180px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
