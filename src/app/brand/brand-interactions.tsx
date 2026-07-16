"use client"

import Image from "next/image"
import { Check, Copy } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type LogoVariant = "horizontal" | "vertical" | "icon"

interface BrandLogoVariant {
  id: LogoVariant
  title: string
  description: string
  src: string
  alt: string
  mobileImageClassName: string
  desktopImageClassName: string
}

const brandAssetPath = (path: string) => encodeURI(path)
const mobileLogoImageClassName = "w-full max-w-[11rem]"
const logoImageClassName = "w-full max-w-[27rem]"

const logoVariants: readonly BrandLogoVariant[] = [
  {
    id: "horizontal",
    title: "Full Black",
    description:
      "This is the primary logo that is most recognizable. It works well in most environments. The vertical version is available when space is constrained or limited.",
    src: brandAssetPath("/Full (Horizontal).png"),
    alt: "Avana full black logo",
    mobileImageClassName: mobileLogoImageClassName,
    desktopImageClassName: logoImageClassName,
  },
  {
    id: "vertical",
    title: "Full Cyan",
    description:
      "This version of the logo is available for instances where space is constrained or limited.",
    src: brandAssetPath("/Full (Personal).png"),
    alt: "Avana full cyan logo",
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
        hex: "#FFFFFF",
        usage: "Primary surface color for clean product backgrounds, cards, and spacious content layouts.",
      },
      {
        name: "Avana Ink",
        hex: "#0F1518",
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
        hex: "#2F414B",
        usage: "Support text, borders, and subtle UI structure when pure ink feels too heavy.",
      },
      {
        name: "Avana Cyan",
        hex: "#01AACF",
        usage: "Primary accent color for active states, highlights, and recognizable brand moments.",
      },
      {
        name: "Avana Taupe",
        hex: "#BC846F",
        usage: "Soft editorial accent for warm callouts, balance, and understated supporting blocks.",
      },
      {
        name: "Avana Rust",
        hex: "#9E5537",
        usage: "Deeper accent for contrast, emphasis, and restrained use inside charts or branded illustrations.",
      },
    ],
  },
] as const

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

export function BrandLogoShowcase() {
  const [activeLogoVariant, setActiveLogoVariant] = useState<LogoVariant>("horizontal")

  return (
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
  )
}

export function BrandColorPalette() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)
  const resetTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current)
      }
    }
  }, [])

  const copyToClipboard = (text: string) => {
    void navigator.clipboard.writeText(text)
    setCopiedColor(text)

    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current)
    }

    resetTimerRef.current = window.setTimeout(() => {
      setCopiedColor(null)
      resetTimerRef.current = null
    }, 2000)
  }

  return (
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
                  {color.hex === "#FFFFFF" ? (
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
  )
}
