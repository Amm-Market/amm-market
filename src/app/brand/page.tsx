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
    { name: "Absolute Zero", type: "Primary", hex: "#0048ba" },
    { name: "Dark", type: "Secondary", hex: "#000308" },
    { name: "Light Blue", type: "Secondary", hex: "#ebf2ff" },
    { name: "White", type: "Secondary", hex: "#ffffff" }
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
      {/* Hero Section - Soft Pastel Aesthetic */}
      <section className="relative flex items-center border-b border-gray-100 bg-[#faf9f7] py-16 md:min-h-[50vh] md:py-24 overflow-hidden">
        {/* Soft gradient blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] translate-x-1/4 -translate-y-1/4">
          <div className="absolute inset-0 bg-[radial-gradient(circle,#fce7f3_0%,#fbcfe8_40%,transparent_70%)] opacity-80 blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] -translate-x-1/4 translate-y-1/4">
          <div className="absolute inset-0 bg-[radial-gradient(circle,#dbeafe_0%,#bfdbfe_40%,transparent_70%)] opacity-70 blur-3xl" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-[radial-gradient(circle,#fef3c7_0%,#fde68a_30%,transparent_60%)] opacity-40 blur-3xl" />
        </div>
        
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
          <h1 className="text-4xl md:text-6xl text-gray-900 mb-6 leading-tight">
            Dex Mini<br />
            <strong className="font-serif italic text-[#0048ba]">Brand Kit</strong>
          </h1>
          <button className="inline-flex items-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-2xl font-medium text-lg shadow-lg shadow-gray-900/10 hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/15 hover:-translate-y-0.5 transition-all active:scale-95">
            Download Brand Kit
            <Download className="w-5 h-5" />
          </button>
        </div>
      </section>

      <main className="flex-1 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          
          {/* Logo Section - 01 */}
          <section className="py-12 md:py-16">
            <div className="flex items-end gap-5 mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Logo</h2>
              <small className="mb-1 font-mono text-gray-500">01</small>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Typography</h2>
              <small className="mb-1 font-mono text-gray-500">02</small>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left - Description */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-900">Inter</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our primary typeface. A modern, highly legible sans-serif designed for screens. 
                  Inter features a tall x-height for improved readability at small sizes and includes 
                  a wide range of weights for versatile typography.
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
                <h3 className="text-xl font-semibold text-gray-900">Playfair Display</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Used for emphasis. With its high contrast strokes and elegant serifs, 
                  Playfair Display adds personality and sophistication to headlines and accent text.
                </p>
              </div>

              <div className="relative flex flex-col gap-5 md:border-b-0">
                <div className="w-full leading-none text-gray-900 overflow-hidden">
                  <div className="text-[120px] md:text-[160px] font-serif italic whitespace-nowrap tracking-[-0.02em]">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Color</h2>
              <small className="mb-1 font-mono text-gray-500">03</small>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left - Description */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-900">Blue</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  It's Dex Mini's primary color — that's how strongly we feel about it. 
                  Blue is what people associate with the brand and makes Dex Mini instantly recognizable.
                  <br /><br />
                  Black, white, and greys supplement our blues. Black and White can be applied 
                  to the logo when additional contrast is necessary.
                </p>
              </div>

              {/* Right - Color swatches */}
              <div className="flex flex-col gap-4">
                {brandColors.map((color) => (
                  <div
                    key={color.hex}
                    className="group relative aspect-[4/1] w-full rounded-[20px] cursor-pointer transition-transform hover:scale-[1.02]"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyToClipboard(color.hex)}
                  >
                    {/* Border for white color */}
                    {color.hex === "#ffffff" && (
                      <div className="absolute inset-0 rounded-[20px] border border-gray-200" />
                    )}
                    
                    {/* Copy button */}
                    <button className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white text-gray-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 border border-gray-200">
                      {copiedColor === color.hex ? (
                        <>
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy {color.hex}</span>
                        </>
                      )}
                    </button>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Concept</h2>
              <small className="mb-1 font-mono text-gray-500">04</small>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Logo Guidelines</h2>
              <small className="mb-1 font-mono text-gray-500">05</small>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-900">Do's and Don'ts</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  If you're ever tempted to try something creative with this logo — don't. 
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQ</h2>
              <small className="mb-1 font-mono text-gray-500">06</small>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-900">Why do I need to follow these guidelines?</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We don't want anyone to misrepresent Dex Mini's brand. Keeping things consistent 
                  instills recognizability and trust.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-900">Can I use a different logo color to match my project's theme?</h3>
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
