"use client"

const FALLBACK_LOGO = "https://coin-logos.simplr.sh/images/ethereum/standard.png"

interface TokenLogoProps {
  src: string
  className?: string
}

export function TokenLogo({ src, className = "" }: TokenLogoProps) {
  const imageSrc = src || FALLBACK_LOGO

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageSrc}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={`h-7 w-7 shrink-0 rounded-none object-contain ${className}`}
    />
  )
}
