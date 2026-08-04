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
      "Use this as the default Avana wordmark. It has the clearest contrast and works best on light backgrounds, product pages, partner decks, and documentation.",
    src: brandAssetPath("/Full (Horizontal).png"),
    alt: "Avana full black logo",
    mobileImageClassName: mobileLogoImageClassName,
    desktopImageClassName: logoImageClassName,
  },
  {
    id: "vertical",
    title: "Full Cyan",
    description:
      "Use the cyan wordmark when the page already has a quiet layout and needs a stronger Avana signal. Keep it on white or very light backgrounds.",
    src: brandAssetPath("/Full (Personal).png"),
    alt: "Avana full cyan logo",
    mobileImageClassName: mobileLogoImageClassName,
    desktopImageClassName: logoImageClassName,
  },
  {
    id: "icon",
    title: "Logo",
    description:
      "Use the icon when the full wordmark would be too small to read, such as app icons, social avatars, favicons, or compact partner lists.",
    src: brandAssetPath("/Logo.png"),
    alt: "Avana logo",
    mobileImageClassName: mobileLogoImageClassName,
    desktopImageClassName: logoImageClassName,
  },
] as const

const colorGroups = [
  {
    title: "Core Colors",
    description: "The Avana palette is intentionally simple: white for space, ink for clarity, and cyan for recognition.",
    colors: [
      {
        name: "Avana White",
        hex: "#FFFFFF",
        usage: "Primary surface for product pages, cards, documentation, and layouts that need room to breathe.",
      },
      {
        name: "Avana Ink",
        hex: "#0F1518",
        usage: "Main text and dark logo color. Use it when contrast and authority matter.",
      },
      {
        name: "Avana Cyan",
        hex: "#01AACF",
        usage: "Primary accent for active states, links, key highlights, and Avana-led calls to action.",
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
