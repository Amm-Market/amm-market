"use client"

import Link from "next/link"
import { siteRoutes } from "@/lib/site"
import type { DesktopMenuId, NavLink } from "@/components/header-nav-data"

interface DesktopMenuItem extends NavLink {
  description?: string
}

interface DesktopMenuGroup {
  id: DesktopMenuId
  label: string
  eyebrow: string
  items: DesktopMenuItem[]
  supportingTitle?: string
  supportingItems: DesktopMenuItem[]
}

const desktopMenus: readonly DesktopMenuGroup[] = [
  {
    id: "individuals",
    label: "Individuals",
    eyebrow: "Explore Individuals",
    items: [
      { href: siteRoutes.borrow, label: "Borrow" },
      { href: siteRoutes.lend, label: "Lend" },
      { href: siteRoutes.trade, label: "Trade" },
    ],
    supportingTitle: "What you can do",
    supportingItems: [
      {
        href: siteRoutes.borrow,
        label: "Borrow against LP positions",
        description: "Unlock liquidity from concentrated or volatile LP exposure without leaving the strategy.",
      },
      {
        href: siteRoutes.trade,
        label: "Open LP-backed trade",
        description: "Use supported AMM positions as collateral to add managed directional exposure without leaving the pool.",
      },
      {
        href: siteRoutes.lend,
        label: "Lend capital through the Hub",
        description: "Move borrowed capital into structured allocation paths with clearer execution context.",
      },
    ],
  },
  {
    id: "businesses",
    label: "Businesses",
    eyebrow: "Explore Businesses",
    items: [
      { href: siteRoutes.creditLines, label: "Credit Lines" },
      { href: siteRoutes.liquidators, label: "Liquidators" },
      { href: siteRoutes.appkit, label: "AppKit" },
    ],
    supportingTitle: "Coming soon",
    supportingItems: [
      {
        href: siteRoutes.creditLines,
        label: "Credit Lines",
        description:
          "Existing product surface for business credit lines and the primary place to explore the current workflow.",
      },
      {
        href: siteRoutes.liquidators,
        label: "Liquidators",
        description: "Placeholder page for the new businesses section, with more detail to come once the experience is defined.",
      },
      {
        href: siteRoutes.appkit,
        label: "AppKit",
        description: "Placeholder page for the new businesses section, with more detail to come once the product is ready.",
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    eyebrow: "Explore Resources",
    items: [
      { href: siteRoutes.lightpaper, label: "Lightpaper" },
      { href: siteRoutes.blog, label: "Blog" },
      { href: siteRoutes.faq, label: "FAQ" },
      { href: siteRoutes.brand, label: "Brand" },
    ],
    supportingTitle: "Where to look",
    supportingItems: [
      {
        href: siteRoutes.lightpaper,
        label: "Read the protocol paper",
        description: "See the system design, risk model, and architecture behind the protocol.",
      },
      {
        href: siteRoutes.blog,
        label: "Follow product notes",
        description: "Track launches, technical updates, and the product decisions shaping the roadmap.",
      },
      {
        href: siteRoutes.faq,
        label: "Find quick answers",
        description: "Jump into short explanations for the most common protocol and product questions.",
      },
      {
        href: siteRoutes.brand,
        label: "Browse brand materials",
        description: "Review approved marks, colors, and visual guidance for partner-facing surfaces.",
      },
    ],
  },
  {
    id: "developers",
    label: "Developers",
    eyebrow: "Explore Developers",
    items: [
      { href: "/developers/introduction/key-concepts", label: "Introduction" },
      { href: siteRoutes.developers, label: "Overview" },
      { href: "/developers/architecture", label: "Architecture" },
      { href: "/developers/liquidation", label: "Liquidation" },
    ],
    supportingTitle: "Highlights",
    supportingItems: [
      {
        href: siteRoutes.developers,
        label: "Start with the overview",
        description: "Get the core protocol mental model before moving into implementation detail.",
      },
      {
        href: "/developers/getting-started",
        label: "Follow the borrower flow",
        description: "See the path from deposit to borrowing, repayment, and collateral withdrawal.",
      },
      {
        href: "/developers/architecture",
        label: "Review the protocol model",
        description: "Understand how the hub, spokes, pricing, and controls fit together.",
      },
      {
        href: "/developers/liquidation",
        label: "Understand liquidation paths",
        description: "Learn how LP collateral is monitored, unwound, and settled under stress.",
      },
    ],
  },
  {
    id: "about",
    label: "Labs",
    eyebrow: "Explore Labs",
    items: [
      { href: siteRoutes.about, label: "About" },
      { href: siteRoutes.careers, label: "Career" },
    ],
    supportingTitle: "Learn more",
    supportingItems: [
      {
        href: siteRoutes.about,
        label: "About",
        description: "Read more about the current company and product thesis behind Avana.",
      },
      {
        href: siteRoutes.careers,
        label: "Career",
        description: "Placeholder page for future roles, openings, and team opportunities.",
      },
    ],
  },
] as const

function toSentenceCase(value: string) {
  if (!value) return value

  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}

interface HeaderDesktopMenuPanelProps {
  menuId: DesktopMenuId
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onExited: () => void
  animationCycle: number
}

export default function HeaderDesktopMenuPanel({
  menuId,
  isOpen,
  onOpen,
  onClose,
  onExited,
  animationCycle,
}: HeaderDesktopMenuPanelProps) {
  const menu = desktopMenus.find((entry) => entry.id === menuId)

  if (!menu) {
    return null
  }

  return (
    <div
      id={`desktop-menu-${menu.id}`}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onTransitionEnd={(event) => {
        if (!isOpen && event.target === event.currentTarget) {
          onExited()
        }
      }}
      className={`fixed left-0 right-0 top-16 z-40 hidden transform-gpu md:top-[54px] md:block transition-[opacity,transform] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-6 opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="border-b border-black/6 bg-white shadow-[0_24px_72px_rgba(0,0,0,0.04)]">
        <div className="w-full bg-white px-4 py-5 sm:px-6 md:px-5 md:py-5 lg:px-6 xl:px-8">
          <div
            key={`${menu.id}-${animationCycle}`}
            className="grid gap-6 lg:min-h-[14.75rem] lg:grid-cols-[minmax(0,19rem)_minmax(15rem,18rem)] lg:gap-2.5 xl:grid-cols-[minmax(0,20rem)_minmax(15rem,18rem)] xl:gap-3"
          >
            <div className="space-y-2.5">
              <p className="text-[0.78rem] font-medium tracking-[-0.02em] text-black/76">{toSentenceCase(menu.eyebrow)}</p>
              <div className="space-y-1">
                {menu.items.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    suppressHydrationWarning
                    className={`group flex items-start gap-4 py-1.5 text-left text-black transition-[opacity,color,filter] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-black/74 ${
                      isOpen ? "opacity-100 blur-0" : "opacity-[0.18] blur-[0.2px]"
                    }`}
                    style={{ transitionDelay: `${180 + index * 55}ms` }}
                  >
                    <span className="text-[clamp(1.5rem,1.95vw,2.45rem)] font-[430] leading-[1.04] tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div
              className={`space-y-2.5 pt-0.5 transition-[opacity,filter] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "opacity-100 blur-0" : "opacity-[0.16] blur-[0.2px]"
              }`}
              style={{ transitionDelay: "280ms" }}
            >
              {menu.supportingTitle ? (
                <p className="text-[0.78rem] font-medium tracking-[-0.02em] text-black/76">{menu.supportingTitle}</p>
              ) : null}
              <div className="space-y-3">
                {menu.supportingItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    aria-label={item.label}
                    suppressHydrationWarning
                    className="group block min-h-[2.8rem] text-left"
                  >
                    <div className="flex items-start gap-[0.6875rem]">
                      <span
                        aria-hidden="true"
                        className="pt-1 text-[0.56rem] font-medium tracking-[0.16em] text-black/24"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[0.78rem] font-medium leading-[1.24] tracking-[-0.02em] text-black/76 transition-colors duration-200 group-hover:text-black">
                          {item.label}
                        </p>
                        {item.description ? (
                          <p className="mt-1 max-w-[24rem] text-[0.68rem] leading-[1.42] tracking-[-0.01em] text-black/46 transition-colors duration-200 group-hover:text-black/58">
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
