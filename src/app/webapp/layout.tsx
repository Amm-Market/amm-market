import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web App - Manage Your LP Positions",
  description: "AMM Market web application - deposit LP tokens, borrow assets, manage loans, and track your portfolio all in one place.",
}

export default function WebappLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
