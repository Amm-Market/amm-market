import type React from "react"
import { notFound } from "next/navigation"
import { isSupportedLocale, SUPPORTED_LOCALES } from "@/lib/locales"

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isSupportedLocale(locale)) {
    notFound()
  }

  return children
}
