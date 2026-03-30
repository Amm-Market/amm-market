import { NextResponse, type NextRequest } from "next/server"
import { createNextMiddleware } from "gt-next/middleware"
import { DEFAULT_LOCALE, SITE_LOCALE_COOKIE, isSupportedLocale } from "@/lib/locales"

const gtMiddleware = createNextMiddleware({
  localeRouting: true,
  prefixDefaultLocale: false,
})

function getPathLocale(pathname: string): string {
  const firstSegment = pathname.split("/")[1]
  return isSupportedLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE
}

export default async function proxy(request: NextRequest) {
  const pathLocale = getPathLocale(request.nextUrl.pathname)
  const cookieLocale = request.cookies.get(SITE_LOCALE_COOKIE)?.value

  // Keep locale resolution deterministic for the current pathname before render.
  if ((request.method === "GET" || request.method === "HEAD") && cookieLocale !== pathLocale) {
    const redirectResponse = NextResponse.redirect(request.nextUrl)
    redirectResponse.cookies.set(SITE_LOCALE_COOKIE, pathLocale, {
      path: "/",
      sameSite: "lax",
    })

    return redirectResponse
  }

  const response = await gtMiddleware(request)
  response.cookies.set(SITE_LOCALE_COOKIE, pathLocale, {
    path: "/",
    sameSite: "lax",
  })

  return response
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_next/webpack-hmr|favicon.ico|robots.txt|sitemap.xml|og|.*\\..*).*)",
  ],
}
