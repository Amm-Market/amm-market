import type { Metadata } from "next"
import { RootNotFoundDocument } from "@/components/root-not-found-document"
import { SITE_NAME } from "@/lib/site"
import "./globals.css"

/**
 * Routing-level 404 when no app route matches at all.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/not-found#global-not-foundjs-experimental
 */
export const metadata: Metadata = {
  title: `Page not found | ${SITE_NAME}`,
  description: "This page isn't available.",
  robots: { index: false, follow: true },
}

export default function GlobalNotFound() {
  return <RootNotFoundDocument />
}
