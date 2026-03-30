"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

interface NavLink {
  href: string
  label: string
}

const desktopLinks: NavLink[] = [
  { href: "/open-spoke", label: "Open Spoke" },
  { href: "/stable-spoke", label: "Stable Spoke" },
  { href: "/bluechip-spoke", label: "Bluechip Spoke" },
  { href: "/developers", label: "Developers" },
]

const mobileLinks: NavLink[] = [
  { href: "/", label: "Overview" },
  { href: "/open-spoke", label: "Open Spoke" },
  { href: "/stable-spoke", label: "Stable Spoke" },
  { href: "/bluechip-spoke", label: "Bluechip Spoke" },
  { href: "/developers", label: "Developers" },
  { href: "/lightpaper", label: "Lightpaper" },
  { href: "/blog", label: "Blog" },
  { href: "/early-access", label: "Early Access" },
  { href: "/webapp", label: "Launch App" },
]

const ctas: NavLink[] = [
  { href: "/early-access", label: "Early Access" },
  { href: "/webapp", label: "Launch App" },
]

const logoSrc = "/aave-temp-wordmark.svg"
const ease = [0.22, 1, 0.36, 1] as const

function isActivePath(pathname: string | null, href: string): boolean {
  if (href === "/") {
    return pathname === "/"
  }

  return pathname === href || pathname?.startsWith(`${href}/`) === true
}

export default function Header(): React.JSX.Element {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredDesktopLink, setHoveredDesktopLink] = useState<string | null>(null)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/8 bg-[linear-gradient(rgba(255,255,255,0.91)_0%,rgba(255,255,255,0.91)_100%)] backdrop-blur-[7px]">
        <div className="mx-auto flex h-16 max-w-[1520px] items-center justify-between gap-6 px-4 sm:px-6 lg:h-[72px] lg:px-8">
          <div className="inline-flex shrink-0 items-center">
            <Link
              href="/"
              aria-label="AMM Market"
              data-framer-name="Logo"
              className="inline-flex items-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc}
                alt="Aave Logo"
                className="h-[22px] w-auto sm:h-[24px]"
              />
            </Link>
          </div>

          <nav aria-label="Primary navigation" className="hidden flex-1 items-center gap-8 md:flex lg:gap-10">
            {desktopLinks.map((link) => {
              const isActive = isActivePath(pathname, link.href)
              const showUnderline = isActive || hoveredDesktopLink === link.href

              return (
                <motion.div
                  key={link.href}
                  whileHover={{ y: -1.5 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  onHoverStart={() => setHoveredDesktopLink(link.href)}
                  onHoverEnd={() =>
                    setHoveredDesktopLink((current) => (current === link.href ? null : current))
                  }
                >
                  <Link
                    href={link.href}
                    onFocus={() => setHoveredDesktopLink(link.href)}
                    onBlur={() =>
                      setHoveredDesktopLink((current) => (current === link.href ? null : current))
                    }
                    className={`relative inline-flex items-center py-2 text-[14px] font-medium tracking-[-0.03em] transition ${
                      isActive ? "text-black" : "text-black/90 hover:text-black"
                    }`}
                  >
                    <span>{link.label}</span>
                    <motion.span
                      initial={false}
                      className="absolute bottom-0 left-0 h-px w-full origin-left bg-black"
                      animate={{
                        scaleX: showUnderline ? 1 : 0,
                        opacity: showUnderline ? 1 : 0.72,
                      }}
                      transition={{ duration: 0.78, ease }}
                    />
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <motion.div whileHover={{ y: -1.5, scale: 1.01 }} transition={{ duration: 0.18, ease: "easeOut" }}>
              <Link
                href={ctas[0].href}
                className="inline-flex h-10 items-center justify-center rounded-full bg-[#ece9e4] px-4 text-[13px] font-medium tracking-[-0.03em] text-black transition hover:bg-[#e4e0db]"
              >
                {ctas[0].label}
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -1.5, scale: 1.01 }} transition={{ duration: 0.18, ease: "easeOut" }}>
              <Link
                href={ctas[1].href}
                className="inline-flex h-10 items-center justify-center rounded-full bg-black px-4 text-[13px] font-medium tracking-[-0.03em] text-white transition hover:bg-black/88"
              >
                {ctas[1].label}
              </Link>
            </motion.div>
          </div>

          <div
            className="ml-auto flex items-center md:hidden"
            data-framer-name="Navigation Mobile"
          >
            <div
              className="flex items-center justify-end"
              data-framer-name="Container"
            >
              <div
                className="rounded-full"
                data-framer-name="Menu Button"
              >
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.975 }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/12 bg-white text-black shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition hover:border-black/18 hover:bg-black/[0.02]"
                  aria-label="Open menu"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-site-nav"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M3 5H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M3 9H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M3 13H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.58, ease }}
            className="fixed inset-0 z-[60] bg-white md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.46, ease }}
              className="flex h-16 items-center justify-between border-b border-black/8 px-4 sm:px-6"
            >
              <Link
                href="/"
                aria-label="AMM Market"
                className="inline-flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoSrc}
                  alt="Aave Logo"
                  className="h-[22px] w-auto"
                />
              </Link>

              <motion.button
                type="button"
                whileTap={{ scale: 0.975 }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/12 bg-white text-black shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition hover:border-black/18 hover:bg-black/[0.02]"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 4L14 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </motion.button>
            </motion.div>

            <motion.nav
              id="mobile-site-nav"
              aria-label="Mobile navigation"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    duration: 0.65,
                    ease,
                    delayChildren: 0.12,
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="h-[calc(100dvh-4rem)] overflow-y-auto px-4 pb-10 pt-10 sm:px-6"
            >
              <ol>
                {mobileLinks.map((link, index) => {
                  const isActive = isActivePath(pathname, link.href)

                  return (
                    <motion.li
                      key={link.href}
                      className="border-b border-black/10"
                      variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { duration: 0.5, ease } },
                      }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-end justify-between gap-5 py-3"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span
                          className={`text-[clamp(1.7rem,7.1vw,2.45rem)] font-semibold leading-[0.98] tracking-[-0.05em] ${
                            isActive ? "text-black" : "text-black/95"
                          }`}
                        >
                          {link.label}
                        </span>
                        <span className="shrink-0 pb-0.5 text-[0.95rem] font-medium tracking-[-0.03em] text-black/75">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.li>
                  )
                })}
              </ol>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
