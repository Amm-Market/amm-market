"use client"

import { Download, Copy, Check } from "lucide-react"
import { useState } from "react"

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

const BrandKitBook = () => (
  <a
    href={BRAND_KIT_URL}
    className="group relative mx-auto block w-fit no-underline"
    aria-label="Download the brand kit"
  >
    <div className="relative [perspective:1600px]">
      <div className="relative h-[300px] w-[214px] [transform-style:preserve-3d] [transform:rotateY(-16deg)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[transform:rotateY(-22deg)_rotateX(6deg)_translateY(-6px)]">
        <div
          aria-hidden="true"
          className="absolute inset-y-[10px] left-[-10px] w-[14px] rounded-l-[12px] bg-zinc-200"
          style={{ transform: "rotateY(74deg)", transformOrigin: "right center" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[24px] border border-black/10 bg-zinc-100"
          style={{ transform: "translate3d(10px, 6px, -6px)" }}
        />
        <div className="absolute inset-0 flex flex-col rounded-[24px] border border-black/10 bg-[linear-gradient(180deg,#ffffff_0%,#f6f6f3_100%)] px-6 py-6 shadow-[0_28px_60px_rgba(0,0,0,0.16)]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
            Avana
          </span>

          <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-[18px] bg-gray-950 text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)]">
            <div className="grid grid-cols-2 gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#45DEC4]" />
              <span className="h-3 w-3 rounded-full bg-[#0070F3]" />
              <span className="h-3 w-3 rounded-full bg-[#E5484D]" />
              <span className="h-3 w-3 rounded-full bg-white/90" />
            </div>
          </div>

          <div className="mt-8 space-y-1.5">
            <p className="text-[28px] font-semibold leading-[0.95] tracking-[-0.07em] text-gray-950">
              Avana
            </p>
            <p className="text-[28px] font-semibold leading-[0.95] tracking-[-0.07em] text-gray-950">
              Brand Kit
            </p>
          </div>

          <div className="mt-auto flex items-end justify-between gap-4">
            <p className="max-w-[9rem] text-[12px] leading-5 text-gray-500">
              Marks, typography, color, and usage standards.
            </p>
            <span className="rounded-full border border-black/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">
              2026
            </span>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-y-[10px] right-[-10px] w-[14px] rounded-r-[12px] bg-zinc-200"
          style={{ transform: "rotateY(88deg)", transformOrigin: "left center" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[24px] border border-black/8 bg-zinc-50/90"
          style={{ transform: "translateZ(-10px)" }}
        />
      </div>
      <div className="mx-auto mt-5 h-6 w-36 rounded-full bg-black/12 blur-xl transition-all duration-500 group-hover:w-40 group-hover:bg-black/18" />
    </div>
  </a>
)

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

  const brandColors = [
    { name: "Sapphire Sky", hex: "#016ecf", usage: "Primary buttons, links, and CTAs. Use for the main brand actions and interactive elements." },
    { name: "Cool Sky", hex: "#6db0ea", usage: "Hover states, secondary highlights, and badges. Use for accents that need to feel lighter than Sapphire Sky." },
    { name: "White", hex: "#fefefe", usage: "Cards, modals, and content surfaces. Use where you need maximum contrast on dark backgrounds." },
    { name: "Deep Navy", hex: "#00165a", usage: "Header, footer, and navigation. Use for main chrome and high-contrast brand blocks." },
    { name: "White Smoke", hex: "#f2f2f2", usage: "Page and section backgrounds. Use for the default app background and subtle surfaces." },
    { name: "Silver", hex: "#a7a8aa", usage: "Secondary text, captions, and inactive UI. Use for supporting copy and disabled states." },
    { name: "Gunmetal", hex: "#414347", usage: "Body text and borders. Use for primary reading text and dividers." },
  ]

  const guidelines = [
    { allowed: true, text: "Use only the official logos", icon: "logo" },
    { allowed: true, text: "Use the icon in brand colors only", icon: "icon" },
    { allowed: true, text: "Network icons use white icon on blue background", icon: "network" },
    { allowed: false, text: "Don't stretch or skew the logo", icon: "stretch" },
    { allowed: false, text: "Don't rotate the logo", icon: "rotate" },
    { allowed: false, text: "Don't place other elements too closely to the logo", icon: "spacing" }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-gray-200 bg-white py-12 md:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gray-200" />
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden md:block md:h-9 md:w-9">
          <div className="absolute right-0 top-0 h-9 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 h-px w-9 bg-gray-200" />
        </div>

        <div className="site-content-shell relative z-10">
          <div className="relative grid items-center gap-10 md:grid-cols-3 md:gap-12">
            <div aria-hidden="true" className="pointer-events-none absolute bottom-0 top-0 left-[66.666%] hidden w-px bg-gray-200 md:block" />

            <div className="order-2 flex flex-col items-center gap-5 text-center md:order-1 md:col-span-2 md:items-start md:pr-14 md:text-left">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                Editorial Callout
              </span>
              <div className="space-y-4">
                <h1 className="text-[2rem] font-semibold leading-[0.96] tracking-[-0.07em] text-gray-950 md:text-[3rem]">
                  Brand Systems 101.
                </h1>
                <p className="max-w-[44rem] text-[1.05rem] font-medium leading-[1.45] tracking-[-0.03em] text-gray-900 md:text-[1.3rem]">
                  See how we build and apply the Avana brand. Learn about our marks,
                  typography, colors, and commitment to high polish.
                </p>
              </div>
              <a
                href={BRAND_KIT_URL}
                className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-medium tracking-[-0.02em] text-white transition hover:bg-black"
              >
                <span>Download the brand kit</span>
                <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="order-1 flex items-center justify-center md:order-2 md:col-span-1 md:justify-end md:pl-10">
              <BrandKitBook />
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-white">
        <div className="site-content-shell">
          
          {/* Logo Section - 01 */}
          <section className="py-12 md:py-16">
            <div className="flex items-end gap-5 mb-8 md:mb-12">
              <h2 className="type-marketing-section-title text-gray-900">Logo</h2>
              <small className="type-meta-label text-gray-500">01</small>
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

          {/* Divider */}
          <div className="h-px w-full bg-gray-200" />

          {/* Typography Section - 02 */}
          <section className="py-12 md:py-16">
            <div className="flex items-end gap-5 mb-8 md:mb-12">
              <h2 className="type-marketing-section-title text-gray-900">Typography</h2>
              <small className="type-meta-label text-gray-500">02</small>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left - Description */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-900">Diatype</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our primary typeface. The live system uses static Diatype cuts at Regular 400,
                  Medium 500, Bold 700, and Black 900 so the site reads denser and more intentional
                  than the previous variable-first setup.
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
                  Backup typeface only. The fallback stack is limited to static Outfit Regular,
                  Medium, and Bold so the site stays close to the Diatype rhythm if the primary face
                  ever fails to load.
                </p>
              </div>

              <div className="relative flex flex-col gap-5 md:border-b-0">
                <div className="w-full leading-none text-gray-900 overflow-hidden">
                  <div className="text-[120px] md:text-[160px] font-semibold italic whitespace-nowrap tracking-[-0.02em]">
                    AaBbCc
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="h-px w-full bg-gray-200" />

          {/* Color Section - 03 */}
          <section className="py-12 md:py-16">
            <div className="flex items-end gap-5 mb-8 md:mb-12">
              <h2 className="type-marketing-section-title text-gray-900">Color</h2>
              <small className="type-meta-label text-gray-500">03</small>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left - Description */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-900">Palette</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Sapphire Sky and Cool Sky are our primary blues; Deep Navy anchors the brand. 
                  White and White Smoke provide backgrounds and contrast. Silver and Gunmetal 
                  are used for secondary text and UI elements.
                </p>
              </div>

              {/* Right - Color swatches with usage */}
              <div className="flex flex-col gap-4">
                {brandColors.map((color) => (
                  <div
                    key={color.hex}
                    className="flex gap-4 items-stretch rounded-[20px] border border-gray-200 overflow-hidden transition-transform hover:scale-[1.01]"
                  >
                    <button
                      type="button"
                      className="group relative flex-shrink-0 w-24 md:w-28 h-24 md:h-28 rounded-l-[18px] cursor-pointer"
                      style={{ backgroundColor: color.hex }}
                      onClick={() => copyToClipboard(color.hex)}
                    >
                      {["#fefefe", "#f2f2f2"].includes(color.hex.toLowerCase()) && (
                        <div className="absolute inset-0 rounded-l-[18px] border border-gray-200" />
                      )}
                      <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-lg bg-white/90 px-2 py-1 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        {copiedColor === color.hex ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                        {copiedColor === color.hex ? "Copied" : color.hex}
                      </span>
                    </button>
                    <div className="flex flex-col justify-center py-3 pr-3 flex-1 min-w-0">
                      <p className="font-semibold text-gray-900">{color.name}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="h-px w-full bg-gray-200" />

          {/* Concept Section - 04 */}
          <section className="py-12 md:py-16">
            <div className="flex items-end gap-5 mb-8 md:mb-12">
              <h2 className="type-marketing-section-title text-gray-900">Concept</h2>
              <small className="type-meta-label text-gray-500">04</small>
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

          {/* Divider */}
          <div className="h-px w-full bg-gray-200" />

          {/* Logo Guidelines Section - 05 */}
          <section className="py-12 md:py-16">
            <div className="flex items-end gap-5 mb-8 md:mb-12">
              <h2 className="type-marketing-section-title text-gray-900">Logo Guidelines</h2>
              <small className="type-meta-label text-gray-500">05</small>
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

          {/* Divider */}
          <div className="h-px w-full bg-gray-200" />

          {/* FAQ Section - 06 */}
          <section className="py-12 md:py-16 min-h-[50vh]">
            <div className="flex items-end gap-5 mb-8 md:mb-12">
              <h2 className="type-marketing-section-title text-gray-900">FAQ</h2>
              <small className="type-meta-label text-gray-500">06</small>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-900">Why do I need to follow these guidelines?</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We don&apos;t want anyone to misrepresent Avana&apos;s brand. Keeping things consistent
                  instills recognizability and trust.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-900">Can I use a different logo color to match my project&apos;s theme?</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Tempting, but no. Swapping out our colors compromises the integrity of our brand.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-900">Can I pair this logo with another brand?</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Yes! We love a good partnership. Give our logos enough space to stand out and shine on their own.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-900">How do I download these assets?</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  You can copy all the various logos and assets throughout this page, or download the full{" "}
                  <a href="#" className="text-[#0048ba] hover:underline">Brand Kit here</a>.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
