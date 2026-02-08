/**
 * WebappHero - Crypto.com-style hero component for the webapp page.
 *
 * @description
 * A visually striking hero section with:
 * - Gradient background (dark blue to light gray)
 * - App icon + label
 * - Headlines
 * - Glassmorphism CTA buttons (desktop/mobile variants)
 * - Hero image
 * - Bottom gradient fade
 */

export default function WebappHero() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(rgb(0, 22, 90) 0%, rgb(39, 61, 93) 32.21%, rgb(163, 179, 202) 65.87%, rgb(255, 255, 255) 100%)",
      }}
    >
      {/* Main hero content */}
      <div className="flex z-[100] mx-auto w-full max-w-[1200px] flex-col items-center gap-4 px-4 sm:px-6 pb-8 pt-[64px] sm:pt-[80px] lg:gap-8 lg:px-16 lg:pb-0">
        {/* Headlines */}
        <div className="flex flex-col items-center gap-3 sm:gap-6">
          <h1
            className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[84px] font-[550] leading-[110%] sm:leading-[100%] lg:leading-[110%] tracking-[-0.5px] sm:tracking-[-1px] lg:tracking-[-1.68px] text-center text-[#F7F9FA] max-w-[320px] sm:max-w-none"
            style={{ maxWidth: 1000 }}
          >
            Unlock Your LP Potential
          </h1>
          <p className="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-[600] leading-[140%] sm:leading-normal text-center text-[#A0A9BE] max-w-[280px] sm:max-w-none">
            Supply liquidity at your favorite DEX & borrow against it here
          </p>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden flex-wrap items-center justify-center gap-4 lg:flex transition-all duration-1200 ease-in-out translate-y-0 opacity-100">
          {/* Create Account button */}
          <a
            className="group relative flex h-10 min-w-16 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[24px] border bg-white/8 px-[18px] py-2 backdrop-blur-xl transition-all duration-300 ease-out hover:bg-white/12 active:scale-95 border-white/20 hover:border-white/30"
            href="https://accounts.crypto.com/signup"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%]"></div>
            <div className="pointer-events-none absolute inset-[1px] rounded-[23px] bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="flex flex-row items-center justify-center gap-1">
              <p className="text-[15px] leading-normal font-medium tracking-[-0.28px] text-gray-50">
                Create Account
              </p>
              <div className="h-4 w-4">
                <img
                  alt="Trailing icon"
                  className="object-fill h-4 w-4"
                  loading="lazy"
                  src="https://mkt-static.crypto.com/arrow-forward.svg"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>

          {/* Get the app button */}
          <a
            className="group relative flex h-10 min-w-16 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[24px] border bg-white/8 px-[18px] py-2 backdrop-blur-xl transition-all duration-300 ease-out hover:bg-white/12 active:scale-95 border-white/20 hover:border-white/30"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%]"></div>
            <div className="pointer-events-none absolute inset-[1px] rounded-[23px] bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="flex flex-row items-center justify-center gap-1">
              <div className="h-4 w-4">
                <img
                  alt="Leading icon"
                  className="object-fill h-4 w-4"
                  loading="lazy"
                  src="https://mkt-static.crypto.com/download.svg"
                />
              </div>
              <p className="text-[15px] leading-normal font-medium tracking-[-0.28px] text-gray-50">
                Get the app
              </p>
            </div>
            <div className="absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>
        </div>

        {/* Hero image */}
        <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[450px] lg:max-w-[536px] mx-auto">
          <img
            alt="AMM Market webapp interface"
            className="object-contain h-auto w-full"
            loading="lazy"
            src="https://mkt-static.crypto.com/cdc_home_producthero_mainapp_usa_2x.webp"
          />
        </div>

        {/* Mobile CTA */}
        <div className="flex w-full flex-col items-center justify-center gap-3 px-4 lg:hidden">
          <a
            className="group relative flex h-10 min-w-16 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[24px] border bg-white/8 px-[18px] py-2 backdrop-blur-xl transition-all duration-300 ease-out hover:bg-white/12 active:scale-95 border-white/20 hover:border-white/30 w-full max-w-[366px]"
            href="https://web.crypto.com/hub/market"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%]"></div>
            <div className="pointer-events-none absolute inset-[1px] rounded-[23px] bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="flex flex-row items-center justify-center gap-1">
              <div className="h-4 w-4">
                <img
                  alt="Leading icon"
                  className="object-fill h-4 w-4"
                  loading="lazy"
                  src="https://mkt-static.crypto.com/download.svg"
                />
              </div>
              <p className="text-[15px] leading-normal font-medium tracking-[-0.28px] text-gray-50">
                Get the app
              </p>
            </div>
            <div className="absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute z-20 right-0 bottom-0 left-0 hidden md:block md:h-[160px] lg:h-[200px]"
        style={{
          background: "linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 70%)",
        }}
      />
    </div>
  )
}
