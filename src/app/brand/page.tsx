"use client"

import Image from "next/image"
import { Check, Copy, Download } from "lucide-react"
import { useState, type ReactNode } from "react"
import { brandOutfitFont } from "@/app/brand/brand-fonts"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type LogoVariant = "horizontal" | "vertical" | "icon"

interface BrandFaqItem {
  value: string
  question: string
  answer: ReactNode
}

interface BrandLogoVariant {
  id: LogoVariant
  title: string
  description: string
  src: string
  alt: string
  mobileImageClassName: string
  desktopImageClassName: string
}

const BRAND_KIT_URL = "/avana-brand-kit.zip"

const brandAssetPath = (path: string) => encodeURI(path)
const mobileLogoImageClassName = "w-full max-w-[11rem]"
const logoImageClassName = "w-full max-w-[27rem]"

const avanaColors = {
  white: "#FFFFFF",
  ink: "#0F1518",
  charcoal: "#2F414B",
  cyan: "#01AACF",
  taupe: "#BC846F",
  rust: "#9E5537",
} as const

const logoVariants: readonly BrandLogoVariant[] = [
  {
    id: "horizontal",
    title: "Full (Horizontal)",
    description:
      "This is the primary logo that is most recognizable. It works well in most environments. The vertical version is available when space is constrained or limited.",
    src: brandAssetPath("/Full (Horizontal).png"),
    alt: "Avana personal full logo",
    mobileImageClassName: mobileLogoImageClassName,
    desktopImageClassName: logoImageClassName,
  },
  {
    id: "vertical",
    title: "Full (Personal)",
    description:
      "This version of the logo is available for instances where space is constrained or limited.",
    src: brandAssetPath("/Full (Personal).png"),
    alt: "Avana personal full logo",
    mobileImageClassName: mobileLogoImageClassName,
    desktopImageClassName: logoImageClassName,
  },
  {
    id: "icon",
    title: "Logo",
    description:
      "It's called an icon because it's iconic. It's simple and can be used as a shorthand for the Full logo.",
    src: brandAssetPath("/Logo.png"),
    alt: "Avana logo",
    mobileImageClassName: mobileLogoImageClassName,
    desktopImageClassName: logoImageClassName,
  },
] as const

const colorGroups = [
  {
    title: "Main Colors",
    description: "The primary foundation of the brand. These should lead most surfaces and key interface moments.",
    colors: [
      {
        name: "Avana White",
        hex: avanaColors.white,
        usage: "Primary surface color for clean product backgrounds, cards, and spacious content layouts.",
      },
      {
        name: "Avana Ink",
        hex: avanaColors.ink,
        usage: "Primary dark anchor for logo usage, key buttons, core text, and high-contrast interface accents.",
      },
    ],
  },
  {
    title: "Secondary Colors",
    description: "Supporting accents for emphasis, data callouts, and softer moments of hierarchy across the system.",
    colors: [
      {
        name: "Avana Charcoal",
        hex: avanaColors.charcoal,
        usage: "Support text, borders, and subtle UI structure when pure ink feels too heavy.",
      },
      {
        name: "Avana Cyan",
        hex: avanaColors.cyan,
        usage: "Primary accent color for active states, highlights, and recognizable brand moments.",
      },
      {
        name: "Avana Taupe",
        hex: avanaColors.taupe,
        usage: "Soft editorial accent for warm callouts, balance, and understated supporting blocks.",
      },
      {
        name: "Avana Rust",
        hex: avanaColors.rust,
        usage: "Deeper accent for contrast, emphasis, and restrained use inside charts or branded illustrations.",
      },
    ],
  },
] as const

const guidelines = [
  { allowed: true, text: "Use only official Avana marks", icon: "logo" },
  { allowed: true, text: "Use approved Avana icon colorways only", icon: "icon" },
  { allowed: true, text: "Keep lockups in the Avana system", icon: "palette" },
  { allowed: false, text: "Do not stretch the logo", icon: "stretch" },
  { allowed: false, text: "Do not rotate the logo", icon: "rotate" },
  { allowed: false, text: "Do not crowd the mark", icon: "spacing" },
] as const

const brandSections = {
  logo: { eyebrow: "Primary mark", title: "Logo" },
  typography: { eyebrow: "Voice & rhythm", title: "Typography" },
  color: { eyebrow: "Palette system", title: "Color" },
  concept: { eyebrow: "Brand idea", title: "Concept" },
  guidelines: { eyebrow: "Use it well", title: "Logo Guidelines" },
} as const

const faqItems: BrandFaqItem[] = [
  {
    value: "download-assets",
    question: "How do I download the brand assets?",
    answer:
      "Use the download button at the top of this page. It bundles the original Avana PNG and Avana SVG folders into one store-only zip so the files are not altered or recompressed.",
  },
  {
    value: "color-swaps",
    question: "Can I recolor the Avana logo to match my project?",
    answer:
      "No. Keep the approved Avana palette intact so the brand stays recognizable across product, partner, and editorial contexts.",
  },
  {
    value: "pairing-marks",
    question: "Can I pair the Avana mark with another brand?",
    answer:
      "Yes, as long as both marks have enough clear space and neither one feels like a modified treatment of the other.",
  },
  {
    value: "why-guidelines",
    question: "Why do these guidelines matter?",
    answer:
      "Consistency builds trust. A stable logo, palette, and typography system helps Avana feel dependable wherever people encounter it.",
  },
] as const

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    color="currentColor"
    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
  >
    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
)

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    color="currentColor"
    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
  >
    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
)

function BrandFaqSection({ items }: { items: readonly BrandFaqItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 pb-4 md:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] md:gap-6 md:pb-0 lg:grid-cols-[minmax(0,25rem)_minmax(0,1fr)] lg:gap-8">
      <div className="space-y-3 md:max-w-[25rem] md:pt-2">
        <SectionTitle as="h3" className="max-w-none font-medium leading-[0.96]">
          <span className="block whitespace-nowrap">Frequently asked</span>
          <span className="block whitespace-nowrap">questions.</span>
        </SectionTitle>
      </div>
      <div className="min-w-0 md:max-w-[32rem] md:justify-self-end lg:max-w-[34rem]">
        <Accordion type="single" collapsible orientation="vertical" className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value} className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
              <AccordionTrigger className="type-accordion-question group gap-4 p-0 text-left text-gray-900 hover:underline [&>svg.size-4]:hidden">
                {item.question}
                <PlusIcon />
                <MinusIcon />
              </AccordionTrigger>
              <AccordionContent className="type-accordion-answer pt-2 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

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

export default function BrandPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)
  const [activeLogoVariant, setActiveLogoVariant] = useState<LogoVariant>("horizontal")

  const activeVariant = logoVariants.find((variant) => variant.id === activeLogoVariant) ?? logoVariants[0]

  const copyToClipboard = (text: string) => {
    void navigator.clipboard.writeText(text)
    setCopiedColor(text)
    window.setTimeout(() => setCopiedColor(null), 2000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <section className="bg-white py-14 md:py-20">
        <div className="site-content-shell">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <h1 className="text-[clamp(3rem,7vw,5.25rem)] font-semibold tracking-[-0.08em] text-[#0F1518]">
              Brand
            </h1>
            <p className="max-w-xl text-[1rem] font-medium leading-[1.55] tracking-[-0.03em] text-[#2F414B] md:text-[1.05rem]">
              Official Avana marks, typography, colors, and usage guidance.
            </p>
            <a
              href={BRAND_KIT_URL}
              download
              className="inline-flex items-center gap-2 rounded-full bg-[#0F1518] px-4 py-2.5 text-sm font-medium tracking-[-0.02em] text-white transition hover:bg-[#2F414B]"
            >
              <span>Download Kit</span>
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-white">
        <div className="site-content-shell">
          <section className="py-12 md:py-16">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow tone="cyan">{brandSections.logo.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.logo.title}</SectionTitle>
            </div>

            <div className="grid items-start gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-0">
                {logoVariants.map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    className={`flex w-full flex-col gap-3 border-t border-gray-200 py-5 text-left transition-all duration-200 ${
                      activeLogoVariant === variant.id ? "opacity-100" : "opacity-50 hover:opacity-75"
                    }`}
                    onMouseEnter={() => setActiveLogoVariant(variant.id)}
                    onFocus={() => setActiveLogoVariant(variant.id)}
                    onClick={() => setActiveLogoVariant(variant.id)}
                  >
                    <div className="relative flex aspect-[7/3] items-center justify-center rounded-[20px] border border-[#0F1518]/15 md:hidden">
                      <BrandAssetImage src={variant.src} alt={variant.alt} className={variant.mobileImageClassName} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{variant.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{variant.description}</p>
                  </button>
                ))}
              </div>

                <div className="group relative hidden h-[400px] items-center justify-center rounded-[20px] border border-[#0F1518]/15 md:flex">
                  {logoVariants.map((variant) => (
                    <div
                      key={variant.id}
                      className={`absolute flex items-center justify-center text-[#6DB0EA] transition-all duration-300 ease-in-out ${
                        activeLogoVariant === variant.id ? "scale-100 opacity-100" : "scale-50 opacity-0"
                      }`}
                    >
                      <BrandAssetImage
                        src={variant.src}
                        alt={variant.alt}
                        className={variant.desktopImageClassName}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow tone="cyan">{brandSections.typography.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.typography.title}</SectionTitle>
            </div>

            <div className="grid items-start gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[#0F1518]">Diatype</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Our primary typeface. The live product uses static Diatype cuts at Regular 400, Medium 500,
                  and Bold 700 so the interface stays fast while keeping its editorial rhythm.
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
                  Backup specimen only. Outfit is loaded on this page alone as a reference and is not part of the
                  main first-paint font path on the live site.
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

          <section className="py-12 md:py-16">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow tone="cyan">{brandSections.color.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.color.title}</SectionTitle>
            </div>

            <div className="space-y-12">
              {colorGroups.map((group) => (
                <div key={group.title} className="grid items-start gap-8 md:grid-cols-2">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-[#0F1518]">{group.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{group.description}</p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {group.colors.map((color) => (
                      <div
                        key={color.hex}
                        className="flex items-stretch gap-4 overflow-hidden rounded-[20px] border border-[#2F414B]/10"
                      >
                        <button
                          type="button"
                          className="group relative h-24 w-24 flex-shrink-0 cursor-pointer md:h-28 md:w-28"
                          style={{ backgroundColor: color.hex }}
                          onClick={() => copyToClipboard(color.hex)}
                        >
                          {color.hex === avanaColors.white ? (
                            <div className="absolute inset-0 border-r border-[#2F414B]/10" />
                          ) : null}
                          <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-lg bg-white/90 px-2 py-1 text-xs font-medium text-gray-600 opacity-0 transition-opacity group-hover:opacity-100">
                            {copiedColor === color.hex ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                            {copiedColor === color.hex ? "Copied" : color.hex}
                          </span>
                        </button>
                        <div className="flex min-w-0 flex-1 flex-col justify-center py-3 pr-3">
                          <p className="font-semibold text-[#0F1518]">{color.name}</p>
                          <p className="mt-0.5 text-sm text-gray-500">{color.usage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow tone="cyan">{brandSections.concept.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.concept.title}</SectionTitle>
            </div>

            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[#0F1518]">The AMM Curve</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Rooted in the origins of automated market makers is the x*y=k formula that powers DeFi. The Avana
                  identity draws from that elegant constant-product curve and the smooth movement of liquidity.
                </p>
              </div>

              <div className="relative flex aspect-[4/3] items-center justify-center rounded-[20px] border border-[#2F414B]/10 bg-[#F5F8F9] p-10">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 opacity-30">
                    <svg className="h-full w-full" viewBox="0 0 200 150">
                      {[...Array(9)].map((_, i) => (
                        <line
                          key={`v-${i}`}
                          x1={25 * (i + 1)}
                          y1="0"
                          x2={25 * (i + 1)}
                          y2="150"
                          stroke={avanaColors.charcoal}
                          strokeWidth="0.5"
                        />
                      ))}
                      {[...Array(5)].map((_, i) => (
                        <line
                          key={`h-${i}`}
                          x1="0"
                          y1={30 * (i + 1)}
                          x2="200"
                          y2={30 * (i + 1)}
                          stroke={avanaColors.charcoal}
                          strokeWidth="0.5"
                        />
                      ))}
                    </svg>
                  </div>

                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 150">
                    <path
                      d="M 20 130 Q 40 80, 60 60 Q 80 45, 100 35 Q 130 25, 180 20"
                      fill="none"
                      stroke={avanaColors.cyan}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line x1="20" y1="130" x2="20" y2="15" stroke={avanaColors.ink} strokeWidth="2" />
                    <line x1="20" y1="130" x2="185" y2="130" stroke={avanaColors.ink} strokeWidth="2" />
                    <text x="95" y="145" fill={avanaColors.charcoal} fontSize="10" textAnchor="middle">
                      Token X
                    </text>
                    <text
                      x="10"
                      y="75"
                      fill={avanaColors.charcoal}
                      fontSize="10"
                      textAnchor="middle"
                      transform="rotate(-90, 10, 75)"
                    >
                      Token Y
                    </text>
                  </svg>

                  <span className="absolute -bottom-2 -right-2 text-sm font-semibold text-[#0F1518]">Fig. 1</span>
                </div>
              </div>
            </div>

            <div className="mt-12 grid items-center gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[#0F1518]">Liquidity & Connection</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  The Avana mark suggests directed movement across assets, pools, and ecosystems. It is a visual cue
                  for connected liquidity rather than a static badge.
                </p>
              </div>

              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[20px] border border-[#2F414B]/10 bg-[#F5F8F9] p-10">
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="absolute h-48 w-48 rounded-full border-2 border-dashed border-[#BC846F]/45" />
                  <div className="absolute h-32 w-32 rounded-full border-2 border-dashed border-[#01AACF]/45" />

                  <div className="relative z-10 rounded-full bg-white p-5 shadow-[0_18px_40px_rgba(15,21,24,0.08)]">
                    <BrandAssetImage
                      src={brandAssetPath("/Avana PNG/Avana Icon (Black) PNG.png")}
                      alt="Avana icon"
                      className="w-[4.5rem]"
                    />
                  </div>

                  <div className="absolute left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-[#01AACF]/35 bg-[#01AACF]/12" />
                  <div className="absolute right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-[#BC846F]/40 bg-[#BC846F]/16" />
                  <div className="absolute left-1/2 top-4 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-[#2F414B]/25 bg-white" />
                  <div className="absolute bottom-4 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-[#9E5537]/35 bg-[#9E5537]/12" />
                </div>

                <span className="absolute -bottom-2 -right-2 text-sm font-semibold text-[#0F1518]">Fig. 2</span>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow tone="cyan">{brandSections.guidelines.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.guidelines.title}</SectionTitle>
            </div>

            <div className="mb-12 grid items-start gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[#0F1518]">Do&apos;s and Don&apos;ts</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Preserve the integrity of the Avana system. The mark is strongest when it stays crisp, calm, and
                  unmistakably ours.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {guidelines.map((item, index) => (
                  <div key={index} className="relative flex flex-col items-center gap-3">
                    <div className="flex aspect-square w-full items-center justify-center rounded-[20px] border border-[#2F414B]/10 bg-[#F5F8F9] p-4">
                      {item.icon === "logo" ? (
                        <BrandAssetImage
                          src={brandAssetPath("/Avana PNG/Avana Full (Personal) PNG.png")}
                          alt="Official Avana logo"
                          className="w-full max-w-[8rem]"
                        />
                      ) : null}
                      {item.icon === "icon" ? (
                        <BrandAssetImage
                          src={brandAssetPath("/Avana PNG/Avana Icon (Black) PNG.png")}
                          alt="Avana icon"
                          className="w-full max-w-[3.75rem]"
                        />
                      ) : null}
                      {item.icon === "palette" ? (
                        <BrandAssetImage
                          src={brandAssetPath("/Avana PNG/Avana Full (Business) PNG.png")}
                          alt="Avana business logo"
                          className="w-full max-w-[7.25rem]"
                        />
                      ) : null}
                      {item.icon === "stretch" ? (
                        <div className="origin-center scale-x-125 scale-y-75 opacity-55">
                          <BrandAssetImage
                            src={brandAssetPath("/Avana PNG/Avana Full (Personal) PNG.png")}
                            alt="Stretched logo example"
                            className="w-full max-w-[8rem]"
                          />
                        </div>
                      ) : null}
                      {item.icon === "rotate" ? (
                        <div className="rotate-45 opacity-55">
                          <BrandAssetImage
                            src={brandAssetPath("/Avana PNG/Avana Icon (Black) PNG.png")}
                            alt="Rotated icon example"
                            className="w-full max-w-[3.75rem]"
                          />
                        </div>
                      ) : null}
                      {item.icon === "spacing" ? (
                        <div className="flex items-center gap-1">
                          <BrandAssetImage
                            src={brandAssetPath("/Avana PNG/Avana Icon (Black) PNG.png")}
                            alt="Crowded spacing example"
                            className="w-full max-w-[3rem]"
                          />
                          <span className="text-base font-semibold text-[#2F414B]">Partner</span>
                        </div>
                      ) : null}
                    </div>
                    <p className="text-center text-xs leading-tight text-gray-600">{item.text}</p>

                    {item.allowed ? (
                      <svg className="absolute right-2 top-2 h-5 w-5 text-emerald-500" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9.33333 18L4 12" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    ) : (
                      <svg className="absolute right-2 top-2 h-5 w-5 text-[#9E5537]" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="pb-16 md:pb-24">
            <BrandFaqSection items={faqItems} />
          </div>
        </div>
      </main>
    </div>
  )
}
