import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header activePage="community" />
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
    </>
  )
}

