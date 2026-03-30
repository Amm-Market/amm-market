import { permanentRedirect } from "next/navigation"

export default function IntroductionRedirectPage() {
  permanentRedirect("/developers")
}
