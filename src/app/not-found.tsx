import type { Metadata } from "next"
import { RootNotFoundDocument } from "@/components/root-not-found-document"
import { SITE_NAME } from "@/lib/site"
import "./globals.css"

/**
 * Root not-found: used when `notFound()` bubbles past the locale segment
 * (e.g. invalid `[locale]` values rejected in the locale layout).
 * Owns its own document shell because the root layout only passes children through.
 */
export const metadata: Metadata = {
  title: `Page not found | ${SITE_NAME}`,
  description: "This page isn't available.",
  robots: { index: false, follow: true },
}

export default function RootNotFound() {
  return <RootNotFoundDocument />
}
