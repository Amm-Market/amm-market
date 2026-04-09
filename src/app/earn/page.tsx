import { permanentRedirect } from "next/navigation"
import { siteRoutes } from "@/lib/site"

export default function EarnPage() {
  permanentRedirect(siteRoutes.leverage)
}
