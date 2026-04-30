import { permanentRedirect } from "next/navigation"
import { siteRoutes } from "@/lib/site"

export default function PlatformRedirectPage() {
  permanentRedirect(siteRoutes.creditLines)
}
