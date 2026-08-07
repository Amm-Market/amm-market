import type React from "react"
import "./globals.css"

/**
 * Root layout must exist for App Router, but locale HTML lives in
 * `app/[locale]/layout.tsx` so `lang` / `dir` can vary per request.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
