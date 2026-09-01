import { LocalizedMarketing } from "@/components/localized-marketing"
import Image from "next/image"
import { Download } from "lucide-react"
import { brandOutfitFont } from "@/app/[locale]/brand/brand-fonts"
import { BrandColorPalette, BrandLogoShowcase } from "@/app/[locale]/brand/brand-interactions"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

const BRAND_KIT_URL = "/avana-brand-kit.zip"

const brandAssetPath = (path: string) => encodeURI(path)

const guidelineAvoidItems = [
  { text: "Do not stretch or compress the logo.", icon: "stretch" },
  { text: "Do not rotate or flip the mark.", icon: "rotate" },
  { text: "Do not recolor the logo outside approved colorways.", icon: "recolor" },
  { text: "Do not crop the mark or place it too close to an edge.", icon: "crop" },
  { text: "Do not add shadows, gradients, outlines, or effects.", icon: "effects" },
  { text: "Do not crowd the mark with partner logos or UI labels.", icon: "spacing" },
] as const

const brandSections = {
  logo: { eyebrow: "Primary mark", title: "Logo" },
  typography: { eyebrow: "Voice & rhythm", title: "Typography" },
  color: { eyebrow: "Palette system", title: "Color" },
  concept: { eyebrow: "Avana Token", title: "Icon" },
  guidelines: { eyebrow: "Use it well", title: "Logo Guidelines" },
} as const

const faqItems: InlineFaqItem[] = [
  {
    value: "download-assets",
    question: "How do I download the brand assets?",
    answer:
      "Use the download button at the top of this page. The kit includes the approved PNG and SVG files for the Avana wordmark and icon.",
  },
  {
    value: "color-swaps",
    question: "Can I recolor the Avana logo to match my project?",
    answer:
      "No. Use the approved colorways in the kit. Recoloring the mark makes partner pages and product surfaces feel inconsistent.",
  },
  {
    value: "pairing-marks",
    question: "Can I pair the Avana mark with another brand?",
    answer:
      "Yes. Keep enough clear space around both marks, match their visual weight, and avoid treatments that make either logo look modified.",
  },
  {
    value: "why-guidelines",
    question: "Why do these guidelines matter?",
    answer:
      "They keep Avana recognizable across docs, integrations, launch posts, dashboards, and partner pages.",
  },
]

function BrandAssetImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={3000}
      height={1500}
      className={`h-auto object-contain ${className}`}
    />
  )
}

export default async function BrandPage() {
  return (
    <LocalizedMarketing keys={["brand/page", "brand/brand-interactions"]}>
    <div className="flex min-h-screen flex-col bg-white">
      <section className="bg-white pt-14 pb-0 md:pt-20">
        <div className="site-content-shell">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <h1 className="type-index-title text-foreground">
              Brand
            </h1>
            <p className="max-w-xl text-[1rem] leading-[1.55] tracking-[-0.02em] text-type-secondary md:text-[1.05rem]">
              Official Avana logos, colors, typography, and rules for using the brand clearly.
            </p>
            <a
              href={BRAND_KIT_URL}
              download
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#151c22]/80 bg-white px-5 text-[0.98rem] font-semibold tracking-[-0.02em] text-[#151c22] transition-[background-color,border-color,color] duration-200 ease-out hover:border-[#01AACF] hover:bg-[#01AACF] hover:text-white"
            >
              <span>Download Kit</span>
              <Download className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-white">
        <div className="site-content-shell">
          <section className="site-section-gap">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow tone="cyan">{brandSections.logo.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.logo.title}</SectionTitle>
            </div>

            <BrandLogoShowcase />
          </section>

          <section className="site-section-gap">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow tone="cyan">{brandSections.typography.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.typography.title}</SectionTitle>
            </div>

            <div className="grid items-start gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[#0F1518]">Diatype</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Avana uses Diatype for product and marketing surfaces. It keeps dense protocol content readable while
                  still feeling sharp and editorial.
                </p>
              </div>

              <div className="relative flex flex-col gap-5 border-b border-gray-200 pb-4">
                <div className="w-full overflow-hidden leading-none tracking-[-0.04em] text-[#0F1518]">
                  <div className="text-[120px] font-normal whitespace-nowrap md:text-[160px]">AaBbCc</div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[#0F1518]">Outfit</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Outfit is a fallback specimen for contexts where Diatype is unavailable. Diatype remains the primary
                  typeface for the product experience.
                </p>
              </div>

              <div className="relative flex flex-col gap-5 md:border-b-0">
                <div className="w-full overflow-hidden leading-none text-[#0F1518]">
                  <div className={`${brandOutfitFont.className} text-[120px] font-semibold italic whitespace-nowrap tracking-[-0.02em] md:text-[160px]`}>
                    AaBbCc
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section-gap">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow tone="cyan">{brandSections.color.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.color.title}</SectionTitle>
            </div>

            <BrandColorPalette />
          </section>

          <section className="site-section-gap">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow tone="cyan">{brandSections.concept.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.concept.title}</SectionTitle>
            </div>

            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[#0F1518]">Primary Token Mark</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Avana token uses the circular mark as the default asset image for exchange listings, token pages,
                  market tables, and launch materials.
                </p>
              </div>

              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[20px] border border-[#2F414B]/10 bg-white p-6">
                <Image
                  src="/images/brand/avana-token-circle.jpg"
                  alt="Avana circular 3D token icon"
                  width={900}
                  height={900}
                  sizes="(min-width: 768px) 360px, 76vw"
                  className="h-[72%] w-[72%] object-contain"
                />
              </div>
            </div>

            <div className="mt-12 grid items-center gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[#0F1518]">Framed Token Mark</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Avana token uses the rounded-square mark for interfaces that expect a square asset tile, including
                  wallets, app grids, dashboards, and compact product views.
                </p>
              </div>

              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[20px] border border-[#2F414B]/10 bg-white p-6">
                <Image
                  src="/images/brand/avana-token-square.jpg"
                  alt="Avana rounded-square 3D token icon"
                  width={600}
                  height={900}
                  sizes="(min-width: 768px) 360px, 76vw"
                  className="h-[88%] w-[88%] object-contain"
                />
              </div>
            </div>
          </section>

          <section className="site-section-gap">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow tone="cyan">{brandSections.guidelines.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.guidelines.title}</SectionTitle>
            </div>

            <div className="mb-12 grid items-start gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[#0F1518]">Things to avoid</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Keep the Avana mark intact. These examples show the treatments that make the logo harder to read or
                  less recognizable.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {guidelineAvoidItems.map((item, index) => (
                  <div key={index} className="relative flex flex-col items-center gap-3">
                    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[20px] border border-[#2F414B]/10 bg-[#F8FAFB] p-4">
                      {item.icon === "stretch" ? (
                        <div className="origin-center scale-x-125 scale-y-75 opacity-45 grayscale">
                          <BrandAssetImage
                            src={brandAssetPath("/Avana PNG/Avana Full (Personal) PNG.png")}
                            alt="Stretched logo example"
                            className="w-full max-w-[8rem]"
                          />
                        </div>
                      ) : null}
                      {item.icon === "rotate" ? (
                        <div className="rotate-45 opacity-45 grayscale">
                          <BrandAssetImage
                            src={brandAssetPath("/Avana PNG/Avana Icon (Black) PNG.png")}
                            alt="Rotated icon example"
                            className="w-full max-w-[5rem]"
                          />
                        </div>
                      ) : null}
                      {item.icon === "recolor" ? (
                        <div className="flex items-center gap-1.5">
                          <div className="text-[#9E5537] hue-rotate-60 saturate-150">
                            <BrandAssetImage
                              src={brandAssetPath("/Avana PNG/Avana Icon (Personal) PNG.png")}
                              alt="Recolored logo example"
                              className="w-full max-w-[4rem]"
                            />
                          </div>
                          <div className="text-[#BC846F] hue-rotate-180 saturate-150">
                            <BrandAssetImage
                              src={brandAssetPath("/Avana PNG/Avana Icon (Personal) PNG.png")}
                              alt="Second recolored logo example"
                              className="w-full max-w-[4rem]"
                            />
                          </div>
                        </div>
                      ) : null}
                      {item.icon === "crop" ? (
                        <div className="-mr-16 overflow-hidden opacity-45 grayscale">
                          <BrandAssetImage
                            src={brandAssetPath("/Avana PNG/Avana Icon (Black) PNG.png")}
                            alt="Cropped logo example"
                            className="w-full max-w-[6rem]"
                          />
                        </div>
                      ) : null}
                      {item.icon === "effects" ? (
                        <div className="blur-[2px] drop-shadow-[0_16px_12px_rgba(1,170,207,0.45)] opacity-45 grayscale">
                          <BrandAssetImage
                            src={brandAssetPath("/Avana PNG/Avana Icon (Black) PNG.png")}
                            alt="Logo with effects example"
                            className="w-full max-w-[5rem]"
                          />
                        </div>
                      ) : null}
                      {item.icon === "spacing" ? (
                        <div className="flex items-center gap-0.5 opacity-45 grayscale">
                          <BrandAssetImage
                            src={brandAssetPath("/Avana PNG/Avana Icon (Black) PNG.png")}
                            alt="Crowded spacing example"
                            className="w-full max-w-[3rem]"
                          />
                          <span className="text-base font-semibold text-[#2F414B]">Partner</span>
                        </div>
                      ) : null}
                      <span className="pointer-events-none absolute inset-x-5 top-1/2 h-1 -translate-y-1/2 rotate-[-48deg] rounded-full bg-[#ff8f6f]" />
                    </div>
                    <p className="text-center text-xs leading-tight text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="pt-8 pb-16 md:pt-14 md:pb-24">
            <InlineFaqSection items={faqItems} withTopBorder={false} />
          </div>
        </div>
      </main>
    </div>
  </LocalizedMarketing>
)
}
