import type React from "react"

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex-1 bg-white">{children}</main>
  )
}

