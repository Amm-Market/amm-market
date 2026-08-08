import { getLocale } from "next-intl/server"
import { redirect } from "@/i18n/navigation"

export default async function IntroductionRedirectPage() {
  const locale = await getLocale()
  redirect({ href: "/developers", locale })
}
