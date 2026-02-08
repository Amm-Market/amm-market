"use client"

/**
 * Header - The main navigation header component.
 *
 * @description
 * A dark sticky navigation header (crypto.com style) that includes:
 * - Crypto.com logo link to homepage
 * - Desktop dropdown menus for Products, Resources, and Developers
 * - Mobile hamburger menu with accordion submenus
 * - Active state indication based on current route
 *
 * @features
 * - Responsive: Full nav on desktop (md+), hamburger on mobile
 * - Accessible: ARIA labels on mobile menu toggle
 * - Smart: Auto-closes menus on route change
 * - Animated: Smooth transitions for dropdowns
 *
 * @example
 * // Used in root layout
 * <Header />
 *
 * @see src/app/layout.tsx - Where this component is rendered
 */
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header(): React.JSX.Element {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsMenuOpen, setProductsMenuOpen] = useState(false)
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false)
  const [developersMenuOpen, setDevelopersMenuOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setProductsMenuOpen(false)
    setResourcesMenuOpen(false)
    setDevelopersMenuOpen(false)
  }, [pathname])

  // Determine active page from pathname
  const activePage =
    pathname?.startsWith("/lightpaper") ||
    pathname?.startsWith("/open-spoke") ||
    pathname?.startsWith("/stable-spoke") ||
    pathname?.startsWith("/webapp")
      ? "products"
      : pathname?.startsWith("/developers")
        ? "developers"
        : pathname === "/"
          ? "home"
          : pathname?.startsWith("/blog")
            ? "blog"
            : pathname?.startsWith("/brand")
              ? "brand"
              : pathname?.startsWith("/faq")
                ? "faq"
                : undefined

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Reset submenus when closing
    if (mobileMenuOpen) {
      setProductsMenuOpen(false)
      setResourcesMenuOpen(false)
      setDevelopersMenuOpen(false)
    }
  }

  return (
    <>
      {/* Dark Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-[#00165a]">
        <div className="mx-auto flex h-[54px] max-w-[1460px] items-center justify-between px-4">
          {/* Left: Logo + Nav */}
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="w-[120px] mr-2">
              <img
                decoding="async"
                fetchPriority="high"
                loading="eager"
                alt="Crypto.com Logo"
                className="h-[24px] w-[120px]"
                src="https://mkt-site-asset.crypto.com/assets/logo/crypto-com.svg"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="mx-8 hidden md:flex items-center">
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsMenuOpen(true)}
                onMouseLeave={() => setProductsMenuOpen(false)}
              >
                <button
                  className={`tracking-[0.14px] relative cursor-pointer pt-[17px] pr-8 pb-[17px] text-[14px] leading-[20px] font-medium transition-colors ${
                    productsMenuOpen || activePage === "products"
                      ? "text-[#6db0ea]"
                      : "text-[#fefefe] hover:text-[#6db0ea]"
                  }`}
                  aria-expanded={productsMenuOpen}
                  aria-haspopup="true"
                  aria-label="Products menu"
                >
                  Products
                </button>

                {/* Products Dropdown Menu */}
                <div
                  className="absolute top-full left-[-80px] pt-2 w-[600px] z-50"
                  style={{
                    pointerEvents: productsMenuOpen ? "auto" : "none",
                    opacity: productsMenuOpen ? 1 : 0,
                    transform: productsMenuOpen ? "translateY(0px)" : "translateY(14px)",
                    transition: "opacity 200ms ease, transform 200ms ease",
                  }}
                >
                  <div className="bg-[#fefefe] rounded-xl shadow-2xl border border-[#a7a8aa]/30 p-3">
                    <div className="flex flex-row">
                      {/* Left Column - Menu Items */}
                      <div className="flex-1">
                        <Link
                          href="/open-spoke"
                          className="flex relative gap-4 items-center justify-between px-4 pr-12 py-2.5 text-[#414347] hover:bg-blue-50 transition-all rounded-lg group"
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          <div className="w-[44px] h-[44px] flex-shrink-0 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
                            {/* Concentric rings - network/cross-chain */}
                            <div className="relative w-[32px] h-[32px]">
                              <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-200 group-hover:animate-spin-slow" />
                              <div className="absolute inset-[6px] rounded-full border-[1.5px] border-blue-400 group-hover:animate-spin-slow-reverse" />
                              <div className="absolute inset-[12px] rounded-full bg-blue-500 group-hover:animate-pulse-soft" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-base font-semibold text-[#414347] flex items-center gap-2">Open Spoke</p>
                            <p className="text-sm text-[#a7a8aa] group-hover:text-[#414347] transition">
                              Permissionless cross-chain liquidity
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/stable-spoke"
                          className="flex relative gap-4 items-center justify-between px-4 pr-12 py-2.5 text-[#414347] hover:bg-blue-50 transition-all rounded-lg group"
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          <div className="w-[44px] h-[44px] flex-shrink-0 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
                            {/* Stacked coins - stablecoin */}
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <ellipse cx="14" cy="8" rx="8" ry="3" className="fill-emerald-100 stroke-emerald-400" strokeWidth="1.5" />
                              <path d="M6 8v4c0 1.66 3.58 3 8 3s8-1.34 8-3V8" className="stroke-emerald-400" strokeWidth="1.5" fill="none" />
                              <ellipse cx="14" cy="12" rx="8" ry="3" className="fill-emerald-50" />
                              <path d="M6 12v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" className="stroke-emerald-500" strokeWidth="1.5" fill="none" />
                              <ellipse cx="14" cy="16" rx="8" ry="3" className="fill-emerald-100" />
                              <path d="M6 16v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" className="stroke-emerald-600 group-hover:stroke-emerald-500" strokeWidth="1.5" fill="none" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-base font-semibold text-[#414347] flex items-center gap-2">Stable Spoke</p>
                            <p className="text-sm text-[#a7a8aa] group-hover:text-[#414347] transition">
                              Optimized stablecoin infrastructure
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/bluechip-spoke"
                          className="flex relative gap-4 items-center justify-between px-4 pr-12 py-2.5 text-[#414347] hover:bg-blue-50 transition-all rounded-lg group"
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          <div className="w-[44px] h-[44px] flex-shrink-0 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
                            {/* Diamond/gem - bluechip */}
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 6h14l3 6-10 12L3 12l3-6z" className="fill-amber-50 stroke-amber-400" strokeWidth="1.5" />
                              <path d="M3 12h20" className="stroke-amber-300" strokeWidth="1.5" />
                              <path d="M13 24l-4-12 4-6 4 6-4 12z" className="fill-amber-100 stroke-amber-500 group-hover:fill-amber-200" strokeWidth="1" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-base font-semibold text-[#414347] flex items-center gap-2">Bluechip Spoke</p>
                            <p className="text-sm text-[#a7a8aa] group-hover:text-[#414347] transition">
                              Blue-chip LP collateral, higher LTV
                            </p>
                          </div>
                        </Link>
                      </div>

                      {/* Right Column - Featured Content */}
                      <div className="flex-1 flex">
                        <Link
                          href="/webapp"
                          className="block p-4 rounded-lg hover:bg-blue-50 transition-colors group flex-1"
                          onClick={() => setProductsMenuOpen(false)}
                        >
                          <div className="mb-3">
                            <div className="w-full h-24 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden border border-gray-100">
                              {/* Dashboard with mini chart */}
                              <div className="relative w-[100px] h-[60px]">
                                <div className="absolute inset-0 rounded-lg bg-white border border-gray-200 p-2">
                                  <div className="flex gap-1 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                                    <div className="w-2 h-2 rounded-full bg-blue-200" />
                                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                                  </div>
                                  <svg className="w-full h-[28px]" viewBox="0 0 80 28" preserveAspectRatio="none">
                                    <path d="M0,20 Q10,18 20,15 T40,10 T60,8 T80,5" fill="none" stroke="#3b82f6" strokeWidth="2" className="group-hover:animate-draw-line" />
                                    <circle cx="80" cy="5" r="3" fill="#3b82f6" className="group-hover:animate-pulse" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-semibold text-[#414347] text-base leading-tight">Webapp</div>
                            <div className="text-sm text-[#a7a8aa] group-hover:text-[#414347] transition">
                              Your gateway to DeFi
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setResourcesMenuOpen(true)}
                onMouseLeave={() => setResourcesMenuOpen(false)}
              >
                <button
                  className={`tracking-[0.14px] relative cursor-pointer pt-[17px] pr-8 pb-[17px] text-[14px] leading-[20px] font-medium transition-colors ${
                    resourcesMenuOpen ? "text-[#6db0ea]" : "text-[#fefefe] hover:text-[#6db0ea]"
                  }`}
                  aria-expanded={resourcesMenuOpen}
                  aria-haspopup="true"
                  aria-label="Resources menu"
                >
                  Resources
                </button>

                {/* Resources Dropdown Menu */}
                <div
                  className="absolute top-full left-[-140px] pt-2 w-[600px] z-50"
                  style={{
                    pointerEvents: resourcesMenuOpen ? "auto" : "none",
                    opacity: resourcesMenuOpen ? 1 : 0,
                    transform: resourcesMenuOpen ? "translateY(0px)" : "translateY(14px)",
                    transition: "opacity 200ms ease, transform 200ms ease",
                  }}
                >
                  <div className="bg-[#fefefe] rounded-xl shadow-2xl border border-[#a7a8aa]/30 p-3">
                    <div className="flex flex-row">
                      {/* Left Column - Menu Items */}
                      <div className="flex-1">
                        <Link
                          href="/blog"
                          className="flex relative gap-4 items-center justify-between px-4 pr-12 py-2.5 text-[#414347] hover:bg-blue-50 transition-all rounded-lg group"
                          onClick={() => setResourcesMenuOpen(false)}
                        >
                          <div className="w-[44px] h-[44px] flex-shrink-0 rounded-xl bg-gray-50 flex items-center justify-center">
                            {/* Pencil/edit icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 3l5 5-12 12H4v-5L16 3z" className="fill-blue-50 stroke-blue-400 group-hover:fill-blue-100" strokeWidth="1.5" strokeLinejoin="round" />
                              <path d="M14 5l5 5" className="stroke-blue-300" strokeWidth="1.5" />
                              <path d="M4 15l5 5" className="stroke-blue-500" strokeWidth="1.5" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-base font-semibold text-[#414347] flex items-center gap-2">Blog</p>
                            <p className="text-sm text-[#a7a8aa] group-hover:text-[#414347] transition">
                              The latest news and updates
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/brand"
                          className="flex relative gap-4 items-center justify-between px-4 pr-12 py-2.5 text-[#414347] hover:bg-blue-50 transition-all rounded-lg group"
                          onClick={() => setResourcesMenuOpen(false)}
                        >
                          <div className="w-[44px] h-[44px] flex-shrink-0 rounded-xl bg-gray-50 flex items-center justify-center">
                            {/* Color palette - three dots */}
                            <div className="flex gap-1.5">
                              <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:animate-pulse" />
                              <div className="w-3 h-3 rounded-full bg-blue-300 group-hover:animate-pulse" style={{ animationDelay: "0.1s" }} />
                              <div className="w-3 h-3 rounded-full bg-gray-400 group-hover:animate-pulse" style={{ animationDelay: "0.2s" }} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-base font-semibold text-[#414347] flex items-center gap-2">Brand</p>
                            <p className="text-sm text-[#a7a8aa] group-hover:text-[#414347] transition">
                              Assets, examples and guides
                            </p>
                          </div>
                        </Link>

                        <a
                          href="https://twitter.com/dexmini"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex relative gap-4 items-center justify-between px-4 pr-12 py-2.5 text-[#414347] hover:bg-blue-50 transition-all rounded-lg group"
                          onClick={() => setResourcesMenuOpen(false)}
                        >
                          <div className="w-[44px] h-[44px] flex-shrink-0 rounded-xl bg-gray-50 flex items-center justify-center">
                            {/* X/Twitter logo */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" className="fill-gray-700 group-hover:fill-blue-600 transition-colors" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-base font-semibold flex items-center gap-1 text-[#414347]">
                              Community
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#a7a8aa"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                            </p>
                            <p className="text-sm text-[#a7a8aa] group-hover:text-[#414347] transition">
                              Follow us on X/Twitter
                            </p>
                          </div>
                        </a>
                      </div>

                      {/* Right Column - Featured Content */}
                      <div className="flex-1 flex">
                        <Link
                          href="/faq"
                          className="block p-4 rounded-lg hover:bg-blue-50 transition-colors group flex-1"
                          onClick={() => setResourcesMenuOpen(false)}
                        >
                          <div className="mb-3">
                            <div className="w-full h-24 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                              {/* Question mark with circular gauge */}
                              <div className="relative w-[60px] h-[60px]">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
                                  <circle cx="30" cy="30" r="26" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                                  <circle cx="30" cy="30" r="26" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="130 33" className="group-hover:animate-pulse-soft" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-xl font-bold text-blue-600">?</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-semibold text-[#414347] text-base leading-tight">
                              FAQ & Help Center
                            </div>
                            <div className="text-sm text-[#a7a8aa] group-hover:text-[#414347] transition">
                              Find answers to common questions
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Developers Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDevelopersMenuOpen(true)}
                onMouseLeave={() => setDevelopersMenuOpen(false)}
              >
                <div
                  className={`tracking-[0.14px] relative cursor-pointer pt-[17px] pr-8 pb-[17px] text-[14px] leading-[20px] font-medium transition-colors ${
                    developersMenuOpen || activePage === "developers"
                      ? "text-[#6db0ea]"
                      : "text-[#fefefe] hover:text-[#6db0ea]"
                  }`}
                >
                  Developers
                </div>

                {/* Developers Dropdown Menu */}
                <div
                  className="absolute top-full left-[-150px] pt-2 w-[500px] z-50"
                  style={{
                    pointerEvents: developersMenuOpen ? "auto" : "none",
                    opacity: developersMenuOpen ? 1 : 0,
                    transform: developersMenuOpen ? "translateY(0px)" : "translateY(14px)",
                    transition: "opacity 200ms ease, transform 200ms ease",
                  }}
                >
                  <div className="bg-[#fefefe] rounded-xl shadow-2xl border border-[#a7a8aa]/30 p-3">
                    <div className="flex flex-row gap-2">
                      {/* Documentation Card */}
                      <Link
                        href="/developers"
                        className="block p-4 rounded-lg hover:bg-blue-50 transition-colors group flex-1"
                        onClick={() => setDevelopersMenuOpen(false)}
                      >
                        <div className="mb-3">
                          <div className="w-full h-24 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                            {/* Terminal/code window */}
                            <div className="relative w-[90px] h-[60px]">
                              <div className="absolute inset-0 rounded-lg bg-white border border-gray-200 overflow-hidden">
                                <div className="h-4 bg-gray-100 border-b border-gray-200 flex items-center gap-1 px-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                </div>
                                <div className="p-1.5 space-y-1">
                                  <div className="flex gap-1">
                                    <span className="text-[8px] text-blue-500">&lt;</span>
                                    <div className="h-1.5 w-8 bg-blue-200 rounded" />
                                    <span className="text-[8px] text-blue-500">/&gt;</span>
                                  </div>
                                  <div className="h-1.5 w-12 bg-gray-200 rounded" />
                                  <div className="h-1.5 w-10 bg-blue-100 rounded" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="font-semibold text-[#414347] text-base leading-tight">Documentation</div>
                          <div className="text-sm text-[#a7a8aa] group-hover:text-[#414347] transition">
                            Technical guides for developers
                          </div>
                        </div>
                      </Link>

                      {/* Lightpaper Card */}
                      <Link
                        href="/lightpaper"
                        className="block p-4 rounded-lg hover:bg-blue-50 transition-colors group flex-1"
                        onClick={() => setDevelopersMenuOpen(false)}
                      >
                        <div className="mb-3">
                          <div className="w-full h-24 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                            {/* Document with lightbulb */}
                            <div className="relative">
                              <div className="w-[50px] h-[60px] rounded-lg bg-white border border-gray-200 p-2">
                                <div className="space-y-1.5">
                                  <div className="h-1.5 w-full bg-gray-200 rounded" />
                                  <div className="h-1.5 w-3/4 bg-gray-200 rounded" />
                                  <div className="h-1.5 w-full bg-gray-100 rounded" />
                                  <div className="h-1.5 w-2/3 bg-gray-100 rounded" />
                                </div>
                              </div>
                              {/* Lightbulb indicator */}
                              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-100 border border-yellow-300 flex items-center justify-center group-hover:animate-pulse-soft">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                  <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" className="fill-yellow-400 stroke-yellow-500" strokeWidth="1.5" />
                                  <path d="M10 21h4" className="stroke-yellow-500" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="font-semibold text-[#414347] text-base leading-tight">Lightpaper</div>
                          <div className="text-sm text-[#a7a8aa] group-hover:text-[#414347] transition">
                            Learn in depth about the platform
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Right: Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/early-access"
              className="flex h-[32px] items-center justify-center rounded-[24px] bg-[#6db0ea]/25 px-3 text-[14px] leading-[20px] font-semibold text-[#016ecf] hover:bg-[#6db0ea]/35 transition-colors"
            >
              Early Access
            </Link>
            <Link
              href="/webapp"
              className="flex h-[32px] items-center justify-center rounded-[72px] bg-[#016ecf] px-3 text-[14px] leading-[20px] font-semibold text-[#fefefe] hover:bg-[#016ecf]/90 transition-opacity"
            >
              Launch App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden text-[#fefefe] transition-all"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

        {/* Mobile Menu Content - light panel for readability */}
        <div
          className={`absolute top-[54px] left-0 right-0 bg-[#f2f2f2] border-b border-[#a7a8aa]/40 shadow-xl transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-col p-4 gap-1 max-h-[calc(100vh-54px)] overflow-y-auto">
            {/* Products Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setProductsMenuOpen(!productsMenuOpen)}
                className={`px-4 py-3 text-base font-semibold rounded-lg transition-colors flex items-center justify-between ${
                  productsMenuOpen || activePage === "products"
                    ? "bg-[#6db0ea]/20 text-[#00165a]"
                    : "text-[#414347] hover:bg-[#e5e5e5]"
                }`}
              >
                <span>Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-5 transition-transform duration-200 ${productsMenuOpen ? "rotate-180" : ""}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Products Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  productsMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 py-2 flex flex-col gap-1">
                  <Link
                    href="/open-spoke"
                    className="flex items-center gap-3 px-4 py-2.5 text-[#414347] hover:bg-blue-50 rounded-lg transition-colors group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      {/* Concentric rings */}
                      <div className="relative w-5 h-5">
                        <div className="absolute inset-0 rounded-full border border-blue-200" />
                        <div className="absolute inset-[4px] rounded-full border border-blue-400" />
                        <div className="absolute inset-[8px] rounded-full bg-blue-500" />
                      </div>
                    </div>
                    <div>
                      <span className="block font-medium text-[#414347]">Open Spoke</span>
                      <span className="text-xs text-[#a7a8aa]">Cross-chain liquidity</span>
                    </div>
                  </Link>
                  <Link
                    href="/stable-spoke"
                    className="flex items-center gap-3 px-4 py-2.5 text-[#414347] hover:bg-blue-50 rounded-lg transition-colors group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      {/* Stacked coins */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <ellipse cx="12" cy="7" rx="6" ry="2" className="fill-emerald-100 stroke-emerald-400" strokeWidth="1.5" />
                        <path d="M6 7v3c0 1.1 2.7 2 6 2s6-.9 6-2V7" className="stroke-emerald-500" strokeWidth="1.5" />
                        <path d="M6 10v3c0 1.1 2.7 2 6 2s6-.9 6-2v-3" className="stroke-emerald-500" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-medium text-[#414347]">Stable Spoke</span>
                      <span className="text-xs text-[#a7a8aa]">Stablecoin AMM</span>
                    </div>
                  </Link>
                  <Link
                    href="/bluechip-spoke"
                    className="flex items-center gap-3 px-4 py-2.5 text-[#414347] hover:bg-blue-50 rounded-lg transition-colors group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      {/* Diamond */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6h12l3 5-9 10-9-10 3-5z" className="fill-amber-50 stroke-amber-400" strokeWidth="1.5" />
                        <path d="M3 11h18" className="stroke-amber-300" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-medium text-[#414347]">Bluechip Spoke</span>
                      <span className="text-xs text-[#a7a8aa]">Blue-chip LP collateral</span>
                    </div>
                  </Link>
                  <Link
                    href="/webapp"
                    className="flex items-center gap-3 px-4 py-2.5 text-[#414347] hover:bg-blue-50 rounded-lg transition-colors group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      {/* Mini chart */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="2" className="stroke-blue-400" strokeWidth="1.5" />
                        <path d="M6 15l4-4 3 2 5-5" className="stroke-blue-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="18" cy="8" r="2" className="fill-blue-500" />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-medium text-[#414347]">Webapp</span>
                      <span className="text-xs text-[#a7a8aa]">DeFi interface</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setResourcesMenuOpen(!resourcesMenuOpen)}
                className={`px-4 py-3 text-base font-semibold rounded-lg transition-colors flex items-center justify-between ${
                  resourcesMenuOpen
                    ? "bg-[#6db0ea]/20 text-[#00165a]"
                    : "text-[#414347] hover:bg-[#e5e5e5]"
                }`}
              >
                <span>Resources</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-5 transition-transform duration-200 ${resourcesMenuOpen ? "rotate-180" : ""}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Resources Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  resourcesMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 py-2 flex flex-col gap-1">
                  <Link
                    href="/blog"
                    className="flex items-center gap-3 px-4 py-2.5 text-[#414347] hover:bg-blue-50 rounded-lg transition-colors group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      {/* Pencil */}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M16 3l5 5-12 12H4v-5L16 3z" className="fill-blue-50 stroke-blue-400" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="font-medium text-[#414347]">Blog</span>
                  </Link>
                  <Link
                    href="/brand"
                    className="flex items-center gap-3 px-4 py-2.5 text-[#414347] hover:bg-blue-50 rounded-lg transition-colors group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      {/* Color dots */}
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <div className="w-2 h-2 rounded-full bg-blue-300" />
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                      </div>
                    </div>
                    <span className="font-medium text-[#414347]">Brand</span>
                  </Link>
                  <Link
                    href="/faq"
                    className="flex items-center gap-3 px-4 py-2.5 text-[#414347] hover:bg-blue-50 rounded-lg transition-colors group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      {/* Question mark in circle */}
                      <div className="w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-500">?</span>
                      </div>
                    </div>
                    <span className="font-medium text-[#414347]">FAQ</span>
                  </Link>
                  <a
                    href="https://twitter.com/dexmini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 text-[#414347] hover:bg-blue-50 rounded-lg transition-colors group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      {/* X/Twitter logo */}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" className="fill-gray-700" />
                      </svg>
                    </div>
                    <span className="flex items-center gap-1 font-medium text-[#414347]">
                      Community
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#a7a8aa"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Developers Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setDevelopersMenuOpen(!developersMenuOpen)}
                className={`px-4 py-3 text-base font-semibold rounded-lg transition-colors flex items-center justify-between ${
                  developersMenuOpen
                    ? "bg-[#6db0ea]/20 text-[#00165a]"
                    : "text-[#414347] hover:bg-[#e5e5e5]"
                }`}
              >
                <span>Developers</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-5 transition-transform duration-200 ${developersMenuOpen ? "rotate-180" : ""}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Developers Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  developersMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 py-2 flex flex-col gap-1">
                  <Link
                    href="/developers"
                    className="flex items-center gap-3 px-4 py-2.5 text-[#414347] hover:bg-blue-50 rounded-lg transition-colors group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      {/* Terminal window */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="4" width="18" height="16" rx="2" className="stroke-gray-400" strokeWidth="1.5" />
                        <path d="M3 8h18" className="stroke-gray-300" strokeWidth="1.5" />
                        <path d="M7 12l3 2-3 2" className="stroke-blue-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 16h5" className="stroke-gray-400" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="font-medium text-[#414347]">Documentation</span>
                  </Link>
                  <Link
                    href="/lightpaper"
                    className="flex items-center gap-3 px-4 py-2.5 text-[#414347] hover:bg-blue-50 rounded-lg transition-colors group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      {/* Document with lightbulb */}
                      <div className="relative">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                          <rect x="1" y="1" width="12" height="14" rx="1" className="fill-white stroke-gray-300" strokeWidth="1" />
                          <path d="M3 5h8M3 8h6M3 11h4" className="stroke-gray-200" strokeWidth="1" strokeLinecap="round" />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-yellow-200 border border-yellow-400 flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-yellow-500" />
                        </div>
                      </div>
                    </div>
                    <span className="font-medium text-[#414347]">Lightpaper</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4 mt-2 border-t border-[#a7a8aa]/40 flex flex-col gap-2">
              <Link
                href="/early-access"
                className="flex items-center justify-center px-4 py-3 text-base font-semibold text-[#016ecf] bg-[#6db0ea]/25 rounded-lg hover:bg-[#6db0ea]/35 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Early Access
              </Link>
              <Link
                href="/webapp"
                className="flex items-center justify-center px-4 py-3 text-base font-semibold text-[#fefefe] bg-[#016ecf] hover:bg-[#016ecf]/90 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Launch App
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
