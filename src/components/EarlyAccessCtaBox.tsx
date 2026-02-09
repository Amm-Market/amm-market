import Image from "next/image"

/**
 * Dark blue CTA box: "Take your LP journey further, faster" + Early Access button + phone mockup.
 * Used on homepage and webapp so the phone shows on both.
 */
export default function EarlyAccessCtaBox() {
  return (
    <section className="border-t border-gray-100 py-8 md:py-6">
      <div className="mx-auto max-w-4xl rounded-2xl md:rounded-3xl bg-[#001d6e] px-6 py-5 md:px-10 md:py-6 shadow-xl shadow-black/20">
        <div className="flex flex-col md:flex-row md:gap-6 lg:gap-8 md:items-center">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-md leading-tight">
              Take your LP journey further, faster
            </h3>
            <a
              className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:bg-gray-100 transition-colors"
              href="https://web.crypto.com/hub/market"
              rel="noopener noreferrer"
              target="_blank"
            >
              Early Access
            </a>
          </div>
          <div className="flex shrink-0 justify-center md:justify-end w-full max-w-[240px] mx-auto md:mx-0 md:max-w-none md:w-[240px]">
            <div className="relative w-full aspect-[320/500] drop-shadow-2xl">
              <Image
                alt="App preview on phone"
                className="relative w-full h-full object-contain object-center"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 240px, 240px"
                src="https://mkt-site-asset.crypto.com/assets/app/download-the-app.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
