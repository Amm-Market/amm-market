import { NextRequest, NextResponse } from "next/server"
import { defaultLocale, localeCodes } from "@/i18n/locales"

const localeSet = new Set<string>(localeCodes)
const internalRewriteHeader = "x-avana-locale-rewrite"

/**
 * Keep the default locale out of public URLs while serving the pre-rendered
 * `[locale]` route. This avoids request-time locale detection and the
 * rewrite/redirect loop produced by `localePrefix: "as-needed"`.
 */
export default function proxy(request: NextRequest) {
  if (request.headers.get(internalRewriteHeader) === "1") {
    return NextResponse.next()
  }

  const pathname = request.nextUrl.pathname
  const firstSegment = pathname.split("/")[1]

  if (firstSegment === defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/"
    return NextResponse.redirect(url, 308)
  }

  if (localeSet.has(firstSegment)) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set(internalRewriteHeader, "1")

  return NextResponse.rewrite(url, {
    request: { headers: requestHeaders },
  })
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}
