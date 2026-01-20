"use client"

/**
 * Header - The main navigation header component.
 * 
 * @description
 * A responsive floating pill-style navigation that includes:
 * - Logo link to homepage
 * - Desktop dropdown menus for Products, Resources, and Developers
 * - Mobile hamburger menu with accordion submenus
 * - Scroll-aware visibility (hides on scroll down, shows on scroll up)
 * - Active state indication based on current route
 * 
 * @features
 * - Responsive: Pill nav on desktop (md+), full-width on mobile
 * - Accessible: ARIA labels on mobile menu toggle
 * - Smart: Auto-closes menus on route change
 * - Animated: Smooth transitions for dropdowns and visibility
 * 
 * @example
 * // Used in root layout
 * <Header />
 * 
 * @todo Consider extracting mobile menu into separate component
 * @todo Add keyboard navigation support for dropdown menus
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
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setProductsMenuOpen(false)
    setResourcesMenuOpen(false)
    setDevelopersMenuOpen(false)
  }, [pathname])

  // Scroll detection - hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        // Always show near top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide (only after scrolling past 100px)
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Determine active page from pathname
  const activePage = pathname?.startsWith("/lightpaper") || pathname?.startsWith("/open-spoke") || pathname?.startsWith("/stable-spoke") || pathname?.startsWith("/webapp")
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
      {/* Floating Pill Navigation */}
      <nav className={`flex flex-col items-end fixed top-0 inset-x-0 z-50 flex-none p-2 h-14 md:my-2 md:rounded-full border-0 md:border md:border-gray-200/50 backdrop-blur-lg md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 text-gray-900 md:shadow-sm md:bg-white/60 md:max-w-3xl md:w-auto transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full md:-translate-y-[calc(100%+2rem)]"
        }`}>
        <div className="flex gap-2 justify-between items-center w-full md:gap-1">
          {/* Logo */}
          <Link href="/" className="relative z-[70]">
            <div className="bg-blue-500 text-white rounded-full p-1.5 ml-2 md:ml-3 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
              </svg>
            </div>
          </Link>

          {/* Spacer for mobile */}
          <div className="flex-1 md:hidden"></div>

          {/* Desktop Navigation Items */}
          {/* Products Dropdown */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setProductsMenuOpen(true)}
            onMouseLeave={() => setProductsMenuOpen(false)}
          >
            <button
              className={`hidden select-none px-3 md:flex group items-center font-medium transition-all py-1.5 rounded-full border flex-none cursor-pointer hover:bg-black/5 border-transparent ${productsMenuOpen || activePage === "products"
                  ? "bg-black/5 text-gray-900"
                  : "text-gray-600"
                }`}
              aria-expanded={productsMenuOpen}
              aria-haspopup="true"
              aria-label="Products menu"
            >
              <span>Products</span>
            </button>

            {/* Products Dropdown Menu */}
            <div
              className="absolute top-full left-[-80px] pt-6 w-[600px] z-50"
              style={{
                pointerEvents: productsMenuOpen ? "auto" : "none",
                opacity: productsMenuOpen ? 1 : 0,
                transform: productsMenuOpen ? "translateY(0px)" : "translateY(14px)",
                transition: "opacity 200ms ease, transform 200ms ease",
              }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-2">
                <div className="flex flex-row">
                  {/* Left Column - Menu Items */}
                  <div className="flex-1">
                    <Link
                      href="/open-spoke"
                      className="flex relative gap-4 items-center justify-between px-4 pr-12 py-2.5 text-base text-gray-900 hover:bg-black/5 transition-all rounded-lg group"
                      onClick={() => setProductsMenuOpen(false)}
                    >
                      <div className="w-[44px] h-[44px] flex-shrink-0 rounded-lg shadow-sm group-hover:shadow transition-shadow bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-medium flex items-center gap-2">Open Spoke</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-900 transition">
                          Permissionless cross-chain liquidity
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/stable-spoke"
                      className="flex relative gap-4 items-center justify-between px-4 pr-12 py-2.5 text-base text-gray-900 hover:bg-black/5 transition-all rounded-lg group"
                      onClick={() => setProductsMenuOpen(false)}
                    >
                      <div className="w-[44px] h-[44px] flex-shrink-0 rounded-lg shadow-sm group-hover:shadow transition-shadow bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                          <path d="M12 18V6" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-medium flex items-center gap-2">Stable Spoke</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-900 transition">
                          Optimized stablecoin infrastructure
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/webapp"
                      className="flex relative gap-4 items-center justify-between px-4 pr-12 py-2.5 text-base text-gray-900 hover:bg-black/5 transition-all rounded-lg group"
                      onClick={() => setProductsMenuOpen(false)}
                    >
                      <div className="w-[44px] h-[44px] flex-shrink-0 rounded-lg shadow-sm group-hover:shadow transition-shadow bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <line x1="3" y1="9" x2="21" y2="9" />
                          <line x1="9" y1="21" x2="9" y2="9" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-medium flex items-center gap-2">Webapp</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-900 transition">
                          Your gateway to DeFi
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* Right Column - Featured Content */}
                  <div className="flex-1 flex">
                    <Link
                      href="/lightpaper"
                      className="block p-4 bg-white rounded-lg hover:bg-black/5 transition-colors group flex-1"
                      onClick={() => setProductsMenuOpen(false)}
                    >
                      <div className="mb-3">
                        <div className="w-full h-24 bg-gradient-to-br from-blue-100 via-purple-100 to-emerald-100 rounded-md shadow-sm group-hover:shadow transition-shadow flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="font-medium text-gray-900 text-base leading-tight">
                          Lightpaper
                        </div>
                        <div className="text-sm text-gray-500 group-hover:text-gray-900 transition">
                          Learn in depth about the platform
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
            className="relative hidden md:block"
            onMouseEnter={() => setResourcesMenuOpen(true)}
            onMouseLeave={() => setResourcesMenuOpen(false)}
          >
            <button
              className={`hidden select-none px-3 md:flex group items-center font-medium transition-all py-1.5 rounded-full border flex-none cursor-pointer hover:bg-black/5 border-transparent ${resourcesMenuOpen ? "bg-black/5 text-gray-900" : "text-gray-600"
                }`}
              aria-expanded={resourcesMenuOpen}
              aria-haspopup="true"
              aria-label="Resources menu"
            >
              <span>Resources</span>
            </button>

            {/* Resources Dropdown Menu */}
            <div
              className="absolute top-full left-[-140px] pt-6 w-[600px] z-50"
              style={{
                pointerEvents: resourcesMenuOpen ? "auto" : "none",
                opacity: resourcesMenuOpen ? 1 : 0,
                transform: resourcesMenuOpen ? "translateY(0px)" : "translateY(14px)",
                transition: "opacity 200ms ease, transform 200ms ease",
              }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-2">
                <div className="flex flex-row">
                  {/* Left Column - Menu Items */}
                  <div className="flex-1">
                    <Link
                      href="/blog"
                      className="flex relative gap-4 items-center justify-between px-4 pr-12 py-2.5 text-base text-gray-900 hover:bg-black/5 transition-all rounded-lg group"
                      onClick={() => setResourcesMenuOpen(false)}
                    >
                      <div className="w-[44px] h-[44px] flex-shrink-0 rounded-lg shadow-sm group-hover:shadow transition-shadow bg-blue-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-600"
                        >
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-medium flex items-center gap-2">Blog</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-900 transition">
                          The latest news and updates
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/brand"
                      className="flex relative gap-4 items-center justify-between px-4 pr-12 py-2.5 text-base text-gray-900 hover:bg-black/5 transition-all rounded-lg group"
                      onClick={() => setResourcesMenuOpen(false)}
                    >
                      <div className="w-[44px] h-[44px] flex-shrink-0 rounded-lg shadow-sm group-hover:shadow transition-shadow bg-orange-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orange-600"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-medium flex items-center gap-2">Brand</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-900 transition">
                          Assets, examples and guides
                        </p>
                      </div>
                    </Link>

                    <a
                      href="https://twitter.com/dexmini"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex relative gap-4 items-center justify-between px-4 pr-12 py-2.5 text-base text-gray-900 hover:bg-black/5 transition-all rounded-lg group"
                      onClick={() => setResourcesMenuOpen(false)}
                    >
                      <div className="w-[44px] h-[44px] flex-shrink-0 rounded-lg shadow-sm group-hover:shadow transition-shadow bg-sky-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-sky-500"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-medium flex items-center gap-1">
                          Community
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-400"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-900 transition">
                          Follow us on X/Twitter
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Right Column - Featured Content */}
                  <div className="flex-1 flex">
                    <Link
                      href="/faq"
                      className="block p-4 bg-white rounded-lg hover:bg-black/5 transition-colors group flex-1"
                      onClick={() => setResourcesMenuOpen(false)}
                    >
                      <div className="mb-3">
                        <div className="w-full h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-md shadow-sm group-hover:shadow transition-shadow flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-purple-600"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="font-medium text-gray-900 text-base leading-tight">
                          FAQ & Help Center
                        </div>
                        <div className="text-sm text-gray-500 group-hover:text-gray-900 transition">
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
            className="relative hidden md:block"
            onMouseEnter={() => setDevelopersMenuOpen(true)}
            onMouseLeave={() => setDevelopersMenuOpen(false)}
          >
            <div
              className={`hidden select-none px-3 md:flex group items-center font-medium transition-all py-1.5 rounded-full border flex-none cursor-pointer hover:bg-black/5 border-transparent ${developersMenuOpen || activePage === "developers"
                  ? "bg-black/5 text-gray-900"
                  : "text-gray-600"
                }`}
            >
              <span>Developers</span>
            </div>

            {/* Developers Dropdown Menu */}
            <div
              className="absolute top-full left-[-150px] pt-6 w-[500px] z-50"
              style={{
                pointerEvents: developersMenuOpen ? "auto" : "none",
                opacity: developersMenuOpen ? 1 : 0,
                transform: developersMenuOpen ? "translateY(0px)" : "translateY(14px)",
                transition: "opacity 200ms ease, transform 200ms ease",
              }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-2">
                <div className="flex flex-row gap-2">
                  {/* Documentation Card */}
                  <Link
                    href="/developers"
                    className="block p-4 bg-white rounded-lg hover:bg-black/5 transition-colors group flex-1"
                    onClick={() => setDevelopersMenuOpen(false)}
                  >
                    <div className="mb-3">
                      <div className="w-full h-24 bg-gradient-to-br from-purple-100 to-violet-100 rounded-md shadow-sm group-hover:shadow transition-shadow flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-600"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="font-medium text-gray-900 text-base leading-tight">
                        Documentation
                      </div>
                      <div className="text-sm text-gray-500 group-hover:text-gray-900 transition">
                        Technical guides for developers
                      </div>
                    </div>
                  </Link>

                  {/* Getting Started Card */}
                  <a
                    href="https://github.com/aave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-white rounded-lg hover:bg-black/5 transition-colors group flex-1"
                    onClick={() => setDevelopersMenuOpen(false)}
                  >
                    <div className="mb-3">
                      <div className="w-full h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-md shadow-sm group-hover:shadow transition-shadow flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <polyline points="16 18 22 12 16 6"></polyline>
                          <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="font-medium text-gray-900 text-base leading-tight flex items-center gap-1">
                        Getting Started
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-400"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </div>
                      <div className="text-sm text-gray-500 group-hover:text-gray-900 transition">
                        Start building with our SDK
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/early-access"
            className="select-none flex items-center font-medium transition-all py-1.5 rounded-full border flex-none ml-1 px-3 border-black/10 hover:bg-black/5 text-gray-900"
          >
            <span>Early Access</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden transition-all"
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
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Content */}
        <div
          className={`absolute top-14 left-0 right-0 bg-white border-b border-gray-200/50 shadow-lg transition-transform duration-300 ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <nav className="flex flex-col p-4 gap-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Products Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setProductsMenuOpen(!productsMenuOpen)}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors flex items-center justify-between ${productsMenuOpen || activePage === "products" ? "bg-black/5 text-gray-900" : "text-gray-900 hover:bg-black/5"
                  }`}
              >
                <span>Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-5 transition-transform duration-200 ${productsMenuOpen ? "rotate-180" : ""
                    }`}
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
                className={`overflow-hidden transition-all duration-300 ${productsMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="pl-4 py-2 flex flex-col gap-1">
                  <Link
                    href="/open-spoke"
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-black/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                      </svg>
                    </div>
                    <div>
                      <span className="block">Open Spoke</span>
                      <span className="text-xs text-gray-400">Cross-chain liquidity</span>
                    </div>
                  </Link>
                  <Link
                    href="/stable-spoke"
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-black/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 18V6" />
                      </svg>
                    </div>
                    <div>
                      <span className="block">Stable Spoke</span>
                      <span className="text-xs text-gray-400">Stablecoin AMM</span>
                    </div>
                  </Link>
                  <Link
                    href="/webapp"
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-black/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="3" y1="9" x2="21" y2="9" />
                      </svg>
                    </div>
                    <div>
                      <span className="block">Webapp</span>
                      <span className="text-xs text-gray-400">DeFi interface</span>
                    </div>
                  </Link>
                  <Link
                    href="/lightpaper"
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-black/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-600"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                      </svg>
                    </div>
                    <div>
                      <span className="block">Lightpaper</span>
                      <span className="text-xs text-gray-400">Learn more</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setResourcesMenuOpen(!resourcesMenuOpen)}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors flex items-center justify-between ${resourcesMenuOpen ? "bg-black/5 text-gray-900" : "text-gray-900 hover:bg-black/5"
                  }`}
              >
                <span>Resources</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-5 transition-transform duration-200 ${resourcesMenuOpen ? "rotate-180" : ""
                    }`}
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
                className={`overflow-hidden transition-all duration-300 ${resourcesMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="pl-4 py-2 flex flex-col gap-1">
                  <Link
                    href="/blog"
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-black/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    </div>
                    <span>Blog</span>
                  </Link>
                  <Link
                    href="/brand"
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-black/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-600"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </div>
                    <span>Brand</span>
                  </Link>
                  <Link
                    href="/faq"
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-black/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                    <span>FAQ</span>
                  </Link>
                  <a
                    href="https://twitter.com/dexmini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-black/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-sky-500"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                      </svg>
                    </div>
                    <span className="flex items-center gap-1">
                      Community
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400"
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
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors flex items-center justify-between ${developersMenuOpen ? "bg-black/5 text-gray-900" : "text-gray-900 hover:bg-black/5"
                  }`}
              >
                <span>Developers</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-5 transition-transform duration-200 ${developersMenuOpen ? "rotate-180" : ""
                    }`}
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
                className={`overflow-hidden transition-all duration-300 ${developersMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="pl-4 py-2 flex flex-col gap-1">
                  <Link
                    href="/developers"
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-black/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <span>Documentation</span>
                  </Link>
                  <a
                    href="https://github.com/aave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-black/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <span className="flex items-center gap-1">
                      Getting Started
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400"
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

            {/* Mobile CTA */}
            <div className="pt-4 mt-2 border-t border-gray-200/50">
              <Link
                href="/early-access"
                className="flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Early Access
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-14 md:h-24" />
    </>
  )
}
