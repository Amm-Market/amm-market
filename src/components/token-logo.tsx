"use client"

import { getTokenIconSrc } from "@/lib/token-icons"

interface TokenLogoProps {
  symbol: string
  className?: string
}

export function TokenLogo({ symbol, className = "" }: TokenLogoProps) {
  const src = getTokenIconSrc(symbol)

  if (!src) {
    const initials = symbol.slice(0, 3).toUpperCase()
    return (
      <span
        aria-hidden="true"
        className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e6eefc] text-[0.55rem] font-semibold text-[#1f2937] ${className}`}
      >
        {initials}
      </span>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={`h-7 w-7 shrink-0 rounded-full object-contain ${className}`}
    />
  )
}
