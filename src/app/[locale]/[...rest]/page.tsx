import { notFound } from "next/navigation"

/**
 * Catch-all for unknown paths under a valid locale (e.g. /faq-typo or /fr/missing).
 * Invokes notFound() so `[locale]/not-found.tsx` renders inside the locale layout
 * (which owns <html>/<body>).
 */
export default function CatchAllPage() {
  notFound()
}
