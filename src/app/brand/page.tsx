"use client"

import { Download, Copy, Check } from "lucide-react"
import { useState } from "react"
import { brandOutfitFont } from "@/app/brand/brand-fonts"
import InlineFaqSection from "@/components/InlineFaqSection"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

// Logo SVG Components
const LogoIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="currentColor" />
    <path d="M30 50h40M50 30v40" stroke="white" strokeWidth="6" strokeLinecap="round" />
  </svg>
)

const LogoHorizontal = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="w-12 h-12 rounded-full bg-current flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
        <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
    <span className="text-4xl font-bold tracking-tight">MINI</span>
  </div>
)

const LogoVertical = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center gap-3 ${className}`}>
    <div className="w-16 h-16 rounded-full bg-current flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
        <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
    <span className="text-3xl font-bold tracking-tight">MINI</span>
  </div>
)

type LogoVariant = "horizontal" | "vertical" | "icon"

const BRAND_KIT_URL = "#"

export default function BrandPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)
  const [copiedSvg, setCopiedSvg] = useState(false)
  const [activeLogoVariant, setActiveLogoVariant] = useState<LogoVariant>("horizontal")

  const copyToClipboard = (text: string, type: "color" | "svg" = "color") => {
    navigator.clipboard.writeText(text)
    if (type === "color") {
      setCopiedColor(text)
      setTimeout(() => setCopiedColor(null), 2000)
    } else {
      setCopiedSvg(true)
      setTimeout(() => setCopiedSvg(false), 2000)
    }
  }

  const copySvg = () => {
    const svgCode = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="45" fill="#0048ba"/>
  <path d="M30 50h40M50 30v40" stroke="white" stroke-width="6" stroke-linecap="round"/>
</svg>`
    copyToClipboard(svgCode, "svg")
  }

  const logoVariants = [
    {
      id: "horizontal" as LogoVariant,
      title: "Full (Horizontal)",
      description: "This is the primary logo that is most recognizable. It works well in most environments. The vertical version is available when space is constrained or limited."
    },
    {
      id: "vertical" as LogoVariant,
      title: "Full (Vertical)",
      description: "This version of the logo is available for instances where space is constrained or limited."
    },
    {
      id: "icon" as LogoVariant,
      title: "Logo",
      description: "It's called an icon because it's iconic. It's simple and can be used as a shorthand for the Full logo."
    }
  ]

  const colorGroups = [
    {
      title: "Main Colors",
      description: "The quiet base of the Avana interface. These are the surfaces users live on most.",
      colors: [
        {
          name: "White",
          hex: "#ffffff",
          usage: "Primary surface color. Use for cards, raised panels, and clean reading areas.",
        },
        {
          name: "White Smoke",
          hex: "#f2f2f2",
          usage: "Page and section backgrounds. Use for the default app background and subtle surfaces.",
        },
      ],
    },
    {
      title: "Secondary Colors",
      description: "Support colors for hierarchy and readability. These keep the UI crisp without stealing focus.",
      colors: [
        {
          name: "Silver",
          hex: "#a7a8aa",
          usage: "Secondary text, captions, and inactive UI. Use for supporting copy and disabled states.",
        },
        {
          name: "Gunmetal",
          hex: "#414347",
          usage: "Body text and borders. Use for primary reading text and dividers.",
        },
      ],
    },
  ]

  const guidelines = [
    { allowed: true, text: "Use only the official logos", icon: "logo" },
    { allowed: true, text: "Use the icon in brand colors only", icon: "icon" },
    { allowed: true, text: "Network icons use white icon on blue background", icon: "network" },
    { allowed: false, text: "Don't stretch or skew the logo", icon: "stretch" },
    { allowed: false, text: "Don't rotate the logo", icon: "rotate" },
    { allowed: false, text: "Don't place other elements too closely to the logo", icon: "spacing" }
  ]

  const brandSections = {
    logo: { eyebrow: "Primary mark", title: "Logo" },
    typography: { eyebrow: "Voice & rhythm", title: "Typography" },
    color: { eyebrow: "Palette system", title: "Color" },
    concept: { eyebrow: "Brand idea", title: "Concept" },
    guidelines: { eyebrow: "Use it well", title: "Logo Guidelines" },
    faq: { eyebrow: "Common questions", title: "FAQ" },
  } as const

  const faqItems = [
    {
      value: "download-assets",
      question: "How do I download the brand assets?",
      answer:
        "Use the download button at the top of this page for the full kit, or copy individual assets directly from the logo section.",
    },
    {
      value: "color-swaps",
      question: "Can I recolor the Avana logo to match my project?",
      answer:
        "No. Keep the approved palette intact so Avana stays recognizable across partner surfaces and product contexts.",
    },
    {
      value: "pairing-marks",
      question: "Can I pair the Avana mark with another brand?",
      answer:
        "Yes, as long as each mark has enough space to read clearly and neither one feels like a treatment of the other.",
    },
    {
      value: "why-guidelines",
      question: "Why do these guidelines matter?",
      answer:
        "Consistency builds trust. A stable logo, palette, and type system helps Avana feel reliable wherever people encounter it.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-white py-14 md:py-20">
        <div className="site-content-shell">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <h1 className="text-[clamp(3rem,7vw,5.25rem)] font-semibold tracking-[-0.08em] text-black">
              Brand
            </h1>
            <p className="max-w-xl text-[1rem] font-medium leading-[1.55] tracking-[-0.03em] text-gray-600 md:text-[1.05rem]">
              Marks, typography, colors, and usage.
            </p>
            <a
              href={BRAND_KIT_URL}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium tracking-[-0.02em] text-gray-950 transition hover:bg-gray-50"
            >
              <span>Download Kit</span>
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-white">
        <div className="site-content-shell">
          
          {/* Logo Section - 01 */}
          <section className="py-12 md:py-16">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow>{brandSections.logo.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.logo.title}</SectionTitle>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left - Logo variants list */}
              <div className="flex flex-col gap-0">
                {logoVariants.map((variant) => (
                  <div
                    key={variant.id}
                    className={`flex flex-col gap-3 py-5 border-t border-gray-200 cursor-pointer transition-all duration-200 ${
                      activeLogoVariant === variant.id ? "opacity-100" : "opacity-50 hover:opacity-75"
                    }`}
                    onMouseEnter={() => setActiveLogoVariant(variant.id)}
                  >
                    {/* Mobile preview */}
                    <div className="md:hidden relative flex aspect-[7/3] items-center justify-center rounded-[20px] bg-gray-100">
                      <div className="text-[#0048ba]">
                        {variant.id === "horizontal" && <LogoHorizontal />}
                        {variant.id === "vertical" && <LogoVertical />}
                        {variant.id === "icon" && <LogoIcon className="w-16 h-16" />}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{variant.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{variant.description}</p>
                  </div>
                ))}
              </div>

              {/* Right - Interactive preview */}
              <div className="hidden md:flex relative h-[400px] items-center justify-center rounded-[20px] bg-gray-100 group">
                {/* Horizontal Logo */}
                <div className={`absolute text-[#0048ba] transition-all duration-300 ease-in-out ${
                  activeLogoVariant === "horizontal" ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}>
                  <LogoHorizontal />
                </div>

                {/* Vertical Logo */}
                <div className={`absolute text-[#0048ba] transition-all duration-300 ease-in-out ${
                  activeLogoVariant === "vertical" ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}>
                  <LogoVertical />
                </div>

                {/* Icon Logo */}
                <div className={`absolute text-[#0048ba] transition-all duration-300 ease-in-out ${
                  activeLogoVariant === "icon" ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}>
                  <LogoIcon className="w-24 h-24" />
                </div>

                {/* Copy SVG button */}
                <button
                  onClick={copySvg}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white text-gray-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 border border-gray-200"
                >
                  {copiedSvg ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy SVG</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </section>

          {/* Typography Section - 02 */}
          <section className="py-12 md:py-16">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow>{brandSections.typography.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.typography.title}</SectionTitle>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left - Description */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-900">Diatype</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our primary typeface. The live system uses static Diatype cuts at Regular 400,
                  Medium 500, and Bold 700 so the site stays fast while keeping the same editorial rhythm.
                </p>
              </div>

              {/* Right - Font specimen */}
              <div className="relative flex flex-col gap-5 border-b border-gray-200 pb-4">
                <div className="w-full leading-none tracking-[-0.04em] text-gray-900 overflow-hidden">
                  <div className="text-[120px] md:text-[160px] font-normal whitespace-nowrap">
                    AaBbCc
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary font */}
            <div className="grid md:grid-cols-2 gap-8 items-start mt-8">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-900">Outfit</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Backup specimen only. Outfit is loaded on this page alone as a reference and is not part
                  of the global first-paint font path for the live product.
                </p>
              </div>

              <div className="relative flex flex-col gap-5 md:border-b-0">
                <div className="w-full leading-none text-gray-900 overflow-hidden">
                  <div className={`${brandOutfitFont.className} text-[120px] md:text-[160px] font-semibold italic whitespace-nowrap tracking-[-0.02em]`}>
                    AaBbCc
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Color Section - 03 */}
          <section className="py-12 md:py-16">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow>{brandSections.color.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.color.title}</SectionTitle>
            </div>

            <div className="space-y-12">
              {colorGroups.map((group) => (
                <div key={group.title} className="grid items-start gap-8 md:grid-cols-2">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-gray-900">{group.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{group.description}</p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {group.colors.map((color) => (
                      <div
                        key={color.hex}
                        className="flex items-stretch gap-4 overflow-hidden rounded-[20px] border border-gray-200"
                      >
                        <button
                          type="button"
                          className="group relative h-24 w-24 flex-shrink-0 cursor-pointer md:h-28 md:w-28"
                          style={{ backgroundColor: color.hex }}
                          onClick={() => copyToClipboard(color.hex)}
                        >
                          {["#ffffff", "#f2f2f2"].includes(color.hex.toLowerCase()) && (
                            <div className="absolute inset-0 border-r border-gray-200" />
                          )}
                          <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-lg bg-white/90 px-2 py-1 text-xs font-medium text-gray-600 opacity-0 transition-opacity group-hover:opacity-100">
                            {copiedColor === color.hex ? (
                              <Check className="h-3 w-3 text-green-500" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                            {copiedColor === color.hex ? "Copied" : color.hex}
                          </span>
                        </button>
                        <div className="flex min-w-0 flex-1 flex-col justify-center py-3 pr-3">
                          <p className="font-semibold text-gray-900">{color.name}</p>
                          <p className="mt-0.5 text-sm text-gray-500">{color.usage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Concept Section - 04 */}
          <section className="py-12 md:py-16">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow>{brandSections.concept.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.concept.title}</SectionTitle>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Description */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-900">The AMM Curve</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Rooted in the origins of automated market makers is the x*y=k formula that powers DeFi. 
                  Our brand identity draws inspiration from this elegant mathematical concept — 
                  the constant product curve that enables permissionless trading.
                </p>
              </div>

              {/* Right - AMM Curve Visual */}
              <div className="relative flex aspect-[4/3] items-center justify-center rounded-[20px] bg-gray-100 p-10">
                <div className="relative w-full h-full">
                  {/* Grid lines */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 200 150">
                      {/* Vertical grid lines */}
                      {[...Array(9)].map((_, i) => (
                        <line
                          key={`v-${i}`}
                          x1={25 * (i + 1)}
                          y1="0"
                          x2={25 * (i + 1)}
                          y2="150"
                          stroke="#0048ba"
                          strokeWidth="0.5"
                        />
                      ))}
                      {/* Horizontal grid lines */}
                      {[...Array(5)].map((_, i) => (
                        <line
                          key={`h-${i}`}
                          x1="0"
                          y1={30 * (i + 1)}
                          x2="200"
                          y2={30 * (i + 1)}
                          stroke="#0048ba"
                          strokeWidth="0.5"
                        />
                      ))}
                    </svg>
                  </div>
                  
                  {/* AMM Curve */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150">
                    <path
                      d="M 20 130 Q 40 80, 60 60 Q 80 45, 100 35 Q 130 25, 180 20"
                      fill="none"
                      stroke="#0048ba"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Axes */}
                    <line x1="20" y1="130" x2="20" y2="15" stroke="#0048ba" strokeWidth="2" />
                    <line x1="20" y1="130" x2="185" y2="130" stroke="#0048ba" strokeWidth="2" />
                    {/* Labels */}
                    <text x="95" y="145" fill="#0048ba" fontSize="10" textAnchor="middle">Token X</text>
                    <text x="10" y="75" fill="#0048ba" fontSize="10" textAnchor="middle" transform="rotate(-90, 10, 75)">Token Y</text>
                  </svg>
                  
                  {/* Figure label */}
                  <span className="absolute -bottom-2 -right-2 text-sm font-semibold text-gray-900">Fig. 1</span>
                </div>
              </div>
            </div>

            {/* Second concept row */}
            <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-900">Liquidity & Connection</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The cross symbol in our logo represents the intersection of assets, 
                  the meeting point where liquidity flows. It symbolizes the connection 
                  between different tokens, chains, and users in the DeFi ecosystem.
                </p>
              </div>

              <div className="relative flex aspect-[4/3] items-center justify-center rounded-[20px] bg-gray-100 p-10 overflow-hidden">
                {/* Animated connection lines */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Center logo */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-[#0048ba] flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white">
                      <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-48 h-48 border-2 border-dashed border-blue-200 rounded-full" />
                    <div className="absolute w-32 h-32 border-2 border-dashed border-blue-300 rounded-full" />
                  </div>
                  
                  {/* Connection nodes */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300" />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300" />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300" />
                </div>
                
                <span className="absolute -bottom-2 -right-2 text-sm font-semibold text-gray-900">Fig. 2</span>
              </div>
            </div>
          </section>

          {/* Logo Guidelines Section - 05 */}
          <section className="py-12 md:py-16">
            <div className="mb-8 space-y-3 md:mb-12">
              <SectionEyebrow>{brandSections.guidelines.eyebrow}</SectionEyebrow>
              <SectionTitle>{brandSections.guidelines.title}</SectionTitle>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-900">Do&apos;s and Don&apos;ts</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  If you&apos;re ever tempted to try something creative with this logo, don&apos;t.
                  Channel your creative spark into whatever the logo will live on instead.
                </p>
              </div>

              {/* Guidelines grid */}
              <div className="grid grid-cols-3 gap-4">
                {guidelines.map((item, index) => (
                  <div key={index} className="relative flex flex-col items-center gap-3">
                    <div className="flex aspect-square w-full items-center justify-center rounded-[20px] bg-gray-100 text-[#0048ba]">
                      {/* Icon based on type */}
                      {item.icon === "logo" && <LogoHorizontal className="scale-50" />}
                      {item.icon === "icon" && <LogoIcon className="w-12 h-12" />}
                      {item.icon === "network" && (
                        <div className="w-16 h-16 rounded-2xl bg-[#0048ba] flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
                            <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                      )}
                      {item.icon === "stretch" && (
                        <div className="w-20 h-8 rounded-full bg-[#0048ba] opacity-50 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                            <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                      )}
                      {item.icon === "rotate" && (
                        <div className="w-12 h-12 rounded-full bg-[#0048ba] opacity-50 rotate-45 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                            <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                      )}
                      {item.icon === "spacing" && (
                        <div className="flex items-center gap-0">
                          <LogoIcon className="w-10 h-10" />
                          <span className="text-xl font-bold opacity-50">ABC</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 text-center leading-tight">{item.text}</p>
                    
                    {/* Status icon */}
                    {item.allowed ? (
                      <svg className="absolute right-2 top-2 w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9.33333 18L4 12" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    ) : (
                      <svg className="absolute right-2 top-2 w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section - 06 */}
          <InlineFaqSection
            eyebrow={brandSections.faq.eyebrow}
            title={brandSections.faq.title}
            items={faqItems}
            withTopBorder={false}
          />
        </div>
      </main>
    </div>
  )
}
