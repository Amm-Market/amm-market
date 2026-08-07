import createMiddleware from "next-intl/middleware"
import { NextRequest, NextResponse } from "next/server"
import { routing } from "@/i18n/routing"

const handleI18n = createMiddleware(routing)

/**
 * next-intl routing + request header so RSC can resolve the active path
 * for docs/marketing localization maps.
 *
 * Path is set on the *request* (not only the response) so `headers().get`
 * works during SSG/SSR.
 */
export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-pathname", pathname)

  // Pass expanded headers into the next-intl middleware request.
  const intlRequest = new NextRequest(request.url, {
    headers: requestHeaders,
    method: request.method,
  })

  const response = handleI18n(intlRequest)

  if (response instanceof NextResponse) {
    response.headers.set("x-pathname", pathname)
    // Next.js request-header override convention (forwards into RSC).
    response.headers.set("x-middleware-request-x-pathname", pathname)
    const existing = response.headers.get("x-middleware-override-headers")
    const names = new Set(
      (existing ? existing.split(",") : [])
        .map((s) => s.trim())
        .filter(Boolean)
        .concat("x-pathname"),
    )
    response.headers.set("x-middleware-override-headers", Array.from(names).join(","))
  }

  return response
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}
