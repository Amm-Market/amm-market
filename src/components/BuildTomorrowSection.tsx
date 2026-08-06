import Image from "next/image"
import Link from "next/link"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { siteRoutes } from "@/lib/site"

/**
 * BuildTomorrowSection — Ways to use Avana with product visual.
 */

const productCards = [
  {
    title: "Borrow",
    description: "Borrow against LP positions while your liquidity stays active in the underlying AMM.",
    href: siteRoutes.borrow,
    image: "/images/home-product-borrow-cropped.png",
    imageAlt: "Borrow capacity interface",
    imageClassName: "object-contain",
  },
  {
    title: "Lend",
    description: "Supply capital into Hub-connected lending markets and earn from LP-backed borrower demand.",
    href: siteRoutes.lend,
    image: "/images/home-product-lend.png",
    imageAlt: "Lend market cash account interface",
    imageClassName: "object-cover object-top",
  },
  {
    title: "Multiply",
    description: "Use LP-backed credit to create managed leverage without exiting your base liquidity position.",
    href: siteRoutes.multiply,
    image: "/images/home-product-multiply.png",
    imageAlt: "Portfolio interface",
    imageClassName: "object-cover object-top",
  },
] as const

export function BuildTomorrowSection() {
  return (
    <section
      data-section="ways-to-use-avana"
      className="w-full bg-inherit site-section-gap"
    >
      <div className="site-content-shell">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,29rem)_minmax(0,1fr)] md:gap-10 lg:gap-12 xl:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]">
          <div className="space-y-4">
            <SectionEyebrow tone="violet">Meet Avana</SectionEyebrow>
            <SectionTitle>
              <span className="block">A lending protocol</span>
              <span className="block">for LP-backed loans</span>
            </SectionTitle>
          </div>
          <div className="text-left text-[#39515b]">
            <p className="max-w-[42rem] text-[1.08rem] leading-[1.6] tracking-[-0.02em] lg:text-[1.18rem]">
              In 2021, <strong className="font-semibold text-[#111111]">Aave</strong> launched{" "}
              <strong className="font-semibold text-[#111111]">AMM Market</strong> and proved{" "}
              <strong className="font-semibold text-[#111111]">LP positions</strong> could serve as collateral,
              but it was built for the simpler DEXs of that era.{" "}
              <strong className="font-semibold text-[#111111]">Avana</strong>{" "}picks up where that left off,
              designed for today&apos;s DEXs and LP types, treating each position as{" "}
              <strong className="font-semibold text-[#111111]">collateral</strong> shaped by dual oracles and
              stronger risk controls.
            </p>
          </div>
        </div>

        <div className="mt-24 md:mt-32 2xl:mt-28">
          <div className="mb-6 flex max-w-[600px] flex-col gap-2 sm:mb-8 md:max-w-none">
            <SectionEyebrow tone="violet">Avana Markets</SectionEyebrow>
            <SectionTitle>
              <span className="block md:hidden">Unlock Capital</span>
              <span className="block md:hidden">from Amm Markets</span>
              <span className="hidden md:block">Unlock Capital from Amm Markets</span>
            </SectionTitle>
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
                    <h3 className="text-[1.7rem] font-medium leading-none tracking-[-0.055em] text-[#1b2028] md:text-[1.9rem]">
                      {card.title}
                    </h3>
                    <Link
                      href={card.href}
                      className="inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-[#8ec5e2] px-5 text-sm font-semibold tracking-[-0.02em] text-[#187da8] transition-colors hover:border-[#01AACF] hover:bg-[#01AACF] hover:text-white"
                    >
                      Learn more
                    </Link>
                  </div>
                  <p className="mt-5 max-w-[25rem] text-[1.05rem] leading-[1.48] tracking-[-0.035em] text-[#667184] md:text-[1.12rem]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildTomorrowSection
