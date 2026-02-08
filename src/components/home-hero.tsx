/**
 * HomeHero - Full-bleed gradient hero component for the home page.
 *
 * @description
 * A visually striking hero section with:
 * - Gradient background (dark blue to light gray)
 * - Centered headline and subtext
 * - CTA button
 * - Large hero image with negative margin overlap
 * - Bottom gradient fade
 */

import Image from "next/image"

export default function HomeHero() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(rgb(0, 22, 90) 0%, rgb(39, 61, 93) 32.21%, rgb(163, 179, 202) 65.87%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className="flex absolute z-10 top-[64px] left-0 right-0 flex-col items-center px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center">
          <h1
            className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[84px] font-[550] leading-[105%] sm:leading-[100%] lg:leading-[110%] tracking-[-0.5px] sm:tracking-[-1px] lg:tracking-[-1.68px] mb-4 sm:mb-6 text-center text-[#F7F9FA]"
            style={{ maxWidth: 1000 }}
          >
            Borrow Up To 80% Against Your LPs
          </h1>
          <div className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-[600] leading-[140%] sm:leading-normal mb-4 sm:mb-6 text-center text-[#A0A9BE]">
            <div className="payload-richtext">
              <p>Supply liquidity at your favorite DEX & borrow against it here</p>
            </div>
          </div>
          <a
            className="relative flex h-[59px] p-[12px_24px] cursor-pointer items-center justify-center rounded-[10px] bg-[#1199FA]"
            href="https://web.crypto.com/hub/market"
            rel="noreferrer"
            target="_blank"
          >
            <p className="text-[14px] font-[600] leading-[142%] mr-2 text-[#F7F9FA]">Get Started</p>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 32 32"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.959 8.62574C18.3494 8.23532 18.9825 8.23554 19.373 8.62574L26.04 15.2927L26.1064 15.366C26.2522 15.5439 26.333 15.7678 26.333 15.9998C26.3329 16.2649 26.2275 16.5193 26.04 16.7068L19.373 23.3728C18.9825 23.7632 18.3495 23.7633 17.959 23.3728C17.569 22.9823 17.5688 22.3491 17.959 21.9587L22.9189 16.9998H6.66602C6.11414 16.9994 5.66619 16.5517 5.66602 15.9998C5.66602 15.4477 6.11403 15.0001 6.66602 14.9998H22.9189L17.959 10.0398C17.5689 9.64936 17.5689 9.01618 17.959 8.62574Z"
                fill="#F7F9FA"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex px-4 md:px-0 mt-[320px] sm:mt-[360px] md:mt-[380px] lg:mt-[400px] -mb-[140px] lg:-mb-[260px]">
        <div className="object-contain">
          <Image
            alt="cdc home homehero global"
            className="object-contain"
            fetchPriority="high"
            loading="eager"
            src="https://mkt-static.crypto.com/cdc_home_homehero_global_1_1x.webp"
            width={1920}
            height={1080}
          />
        </div>
      </div>
      <div
        className="absolute z-20 right-0 bottom-0 left-0 h-[140px]"
        style={{
          background: "linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 60%)",
        }}
      />
    </div>
  )
}
