"use client"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false)
  const [developersMenuOpen, setDevelopersMenuOpen] = useState(false)

  // Determine active page from pathname
  const activePage = pathname?.startsWith("/products")
    ? "products"
    : pathname?.startsWith("/developers")
    ? "developers"
    : pathname === "/"
    ? "home"
    : pathname?.startsWith("/community")
    ? "community"
    : pathname?.startsWith("/research")
    ? "research"
    : pathname?.startsWith("/brand")
    ? "brand"
    : undefined

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="top-[-1px] transition-[border] delay-75 sticky z-20 border-b border-gray-200/50 bg-gray-50/80 backdrop-blur-[20px]">
      <header className="mx-auto w-full max-w-5xl transition-colors delay-150 pt-2 pb-2 px-4 sm:pt-3 sm:pb-3 sm:px-6 relative">
        <div className="flex w-full items-center justify-between">
            {/* Logo - Left */}
            <Link href="/" className="hover:opacity-80" aria-label="Logo">
              <div className="bg-blue-500 text-white rounded-full p-1.5">
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

            {/* Navigation and CTA - Right */}
            <div className="flex items-center space-x-6">
              <nav aria-label="Main" className="relative flex max-w-max flex-1 items-center justify-center z-30 max-md:hidden">
                <div style={{ position: "relative" }}>
                  <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                    <li>
                      <Link
                        href="/products"
                        className={`whitespace-nowrap ring-offset-background ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97] disabled:cursor-not-allowed text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 inline-flex h-10 w-max items-center justify-center bg-transparent px-4 py-2 rounded-md ${activePage === "products" ? "bg-accent/50 text-accent-foreground" : ""}`}
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <div
                        className="relative"
                        onMouseEnter={() => setResourcesMenuOpen(true)}
                        onMouseLeave={() => setResourcesMenuOpen(false)}
                      >
                        <button
                          className={`whitespace-nowrap ring-offset-background ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97] disabled:cursor-not-allowed text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 inline-flex h-10 w-max items-center justify-center bg-transparent px-4 py-2 rounded-md ${resourcesMenuOpen ? "bg-accent/50 text-accent-foreground" : ""}`}
                        >
                          Resources
                        </button>
                    <div
                      id="viewport-wrapper"
                      className={`absolute left-0 top-full flex justify-center ${
                        resourcesMenuOpen ? "pointer-events-auto" : "pointer-events-none"
                      }`}
                      style={{ left: "auto", right: 0 }}
                    >
                      <div
                        id="viewport"
                        className={`origin-top-center relative mt-1.5 h-auto w-[calc(100vw-2rem)] overflow-hidden rounded-md border bg-white text-gray-900 shadow-lg transition-[height,width,opacity,transform] duration-200 ease-in-out ${
                          resourcesMenuOpen
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                        } md:w-[420px]`}
                        style={{ "--radix-navigation-menu-viewport-width": "420px" } as React.CSSProperties}
                      >
                        <div className="left-0 top-0 w-full flex flex-col bg-white p-3 gap-3 md:min-w-[420px]">
                          <Link
                            href="/blog"
                            className="flex items-center px-3 py-2 gap-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => setResourcesMenuOpen(false)}
                          >
                            <div className="flex size-11 min-w-11 items-center justify-center rounded-md bg-blue-100">
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
                            <div className="text-sm font-medium">
                              <div className="flex items-center gap-2">
                                Blog
                              </div>
                              <p className="text-gray-500 text-xs font-normal">The latest news and updates.</p>
                            </div>
                          </Link>
                          <Link
                            href="/brand"
                            className="flex items-center px-3 py-2 gap-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => setResourcesMenuOpen(false)}
                          >
                            <div className="flex size-11 min-w-11 items-center justify-center rounded-md bg-orange-100">
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
                            <div className="text-sm font-medium">
                              <div className="flex items-center gap-2">
                                Brand
                              </div>
                              <p className="text-gray-500 text-xs font-normal">Assets, examples and guides.</p>
                            </div>
                          </Link>
                          <Link
                            href="/faq"
                            className="flex items-center px-3 py-2 gap-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => setResourcesMenuOpen(false)}
                          >
                            <div className="flex size-11 min-w-11 items-center justify-center rounded-md bg-purple-100">
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
                                className="text-purple-600"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                              </svg>
                            </div>
                            <div className="text-sm font-medium">
                              <div className="flex items-center gap-2">
                                FAQ
                              </div>
                              <p className="text-gray-500 text-xs font-normal">Answers to common questions.</p>
                            </div>
                          </Link>
                          <Link
                            href="/help"
                            className="flex items-center px-3 py-2 gap-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => setResourcesMenuOpen(false)}
                          >
                            <div className="flex size-11 min-w-11 items-center justify-center rounded-md bg-green-100">
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
                                className="text-green-600"
                              >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                            </div>
                            <div className="text-sm font-medium">
                              <div className="flex items-center gap-2">
                                Help & Support
                              </div>
                              <p className="text-gray-500 text-xs font-normal">Guides, articles and more.</p>
                            </div>
                          </Link>
                          <Link
                            href="/community"
                            className="flex items-center px-3 py-2 gap-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => setResourcesMenuOpen(false)}
                          >
                            <div className="flex size-11 min-w-11 items-center justify-center rounded-md bg-indigo-100">
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
                                className="text-indigo-600"
                              >
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                              </svg>
                            </div>
                            <div className="text-sm font-medium">
                              <div className="flex items-center gap-2">
                                Community
                              </div>
                              <p className="text-gray-500 text-xs font-normal">Join the conversation chat.</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                    </li>
                    <li>
                      <div
                        className="relative"
                        onMouseEnter={() => setDevelopersMenuOpen(true)}
                        onMouseLeave={() => setDevelopersMenuOpen(false)}
                      >
                        <button
                          className={`whitespace-nowrap ring-offset-background ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97] disabled:cursor-not-allowed text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 inline-flex h-10 w-max items-center justify-center bg-transparent px-4 py-2 rounded-md ${developersMenuOpen ? "bg-accent/50 text-accent-foreground" : ""}`}
                        >
                          Developers
                        </button>
                        <div
                          id="viewport-wrapper-developers"
                          className={`absolute left-0 top-full flex justify-center ${
                            developersMenuOpen ? "pointer-events-auto" : "pointer-events-none"
                          }`}
                          style={{ left: "auto", right: 0 }}
                        >
                          <div
                            id="viewport-developers"
                            className={`origin-top-center relative mt-1.5 h-auto w-[calc(100vw-2rem)] overflow-hidden rounded-md border bg-white text-gray-900 shadow-lg transition-[height,width,opacity,transform] duration-200 ease-in-out ${
                              developersMenuOpen
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                            } md:w-[420px]`}
                            style={{ "--radix-navigation-menu-viewport-width": "420px" } as React.CSSProperties}
                          >
                            <div className="left-0 top-0 w-full flex flex-col bg-white p-3 gap-3 md:min-w-[420px]">
                              <Link
                                href="/research"
                                className="flex items-center px-3 py-2 gap-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => setDevelopersMenuOpen(false)}
                              >
                                <div className="flex size-11 min-w-11 items-center justify-center rounded-md bg-blue-100">
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
                                <div className="text-sm font-medium">
                                  <div className="flex items-center gap-2">
                                    Research
                                  </div>
                                  <p className="text-gray-500 text-xs font-normal">Technical overview and analysis.</p>
                                </div>
                              </Link>
                              <Link
                                href="/developers"
                                className="flex items-center px-3 py-2 gap-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => setDevelopersMenuOpen(false)}
                              >
                                <div className="flex size-11 min-w-11 items-center justify-center rounded-md bg-purple-100">
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
                                    className="text-purple-600"
                                  >
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                  </svg>
                                </div>
                                <div className="text-sm font-medium">
                                  <div className="flex items-center gap-2">
                                    Documentation
                                  </div>
                                  <p className="text-gray-500 text-xs font-normal">Technical guides for developers.</p>
                                </div>
                              </Link>
                              <Link
                                href="/developers/security"
                                className="flex items-center px-3 py-2 gap-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => setDevelopersMenuOpen(false)}
                              >
                                <div className="flex size-11 min-w-11 items-center justify-center rounded-md bg-red-100">
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
                                    className="text-red-600"
                                  >
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                  </svg>
                                </div>
                                <div className="text-sm font-medium">
                                  <div className="flex items-center gap-2">
                                    Security
                                  </div>
                                  <p className="text-gray-500 text-xs font-normal">Audit reports and information.</p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>

              {/* CTA Button - Hidden on mobile */}
              <Link
                href="/early-access"
                className="hidden md:inline-flex bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
              >
                Try Testnet
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97] disabled:pointer-events-none size-9 rounded-sm bg-gray-100 hover:bg-gray-200 w-fit md:hidden group"
                aria-haspopup="menu"
                aria-expanded={mobileMenuOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  color="currentColor"
                  className={`group-data-[state=open]:hidden ${mobileMenuOpen ? "hidden" : ""}`}
                >
                  <path d="M4 8.5L20 8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                  <path d="M4 15.5L20 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  color="currentColor"
                  className={`hidden group-data-[state=open]:block ${mobileMenuOpen ? "block" : "hidden"}`}
                >
                  <path d="M5 5L19 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                  <path d="M19 5L5 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200/50 shadow-lg z-30 mt-1 mx-[-1rem] sm:mx-[-1.5rem]">
              <nav className="flex flex-col p-4 gap-2">
                <Link
                  href="/products"
                  className="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <div className="flex flex-col">
                  <button
                    onClick={() => setResourcesMenuOpen(!resourcesMenuOpen)}
                    className="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Resources
                  </button>
                  {resourcesMenuOpen && (
                    <div className="pl-4 mt-1 flex flex-col gap-1">
                      <Link
                        href="/blog"
                        className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setResourcesMenuOpen(false)
                        }}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/brand"
                        className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setResourcesMenuOpen(false)
                        }}
                      >
                        Brand
                      </Link>
                      <Link
                        href="/faq"
                        className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setResourcesMenuOpen(false)
                        }}
                      >
                        FAQ
                      </Link>
                      <Link
                        href="/help"
                        className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setResourcesMenuOpen(false)
                        }}
                      >
                        Help & Support
                      </Link>
                      <Link
                        href="/community"
                        className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setResourcesMenuOpen(false)
                        }}
                      >
                        Community
                      </Link>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <button
                    onClick={() => setDevelopersMenuOpen(!developersMenuOpen)}
                    className="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Developers
                  </button>
                  {developersMenuOpen && (
                    <div className="pl-4 mt-1 flex flex-col gap-1">
                      <Link
                        href="/research"
                        className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setDevelopersMenuOpen(false)
                        }}
                      >
                        Research
                      </Link>
                      <Link
                        href="/developers"
                        className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setDevelopersMenuOpen(false)
                        }}
                      >
                        Documentation
                      </Link>
                      <Link
                        href="/developers/security"
                        className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setDevelopersMenuOpen(false)
                        }}
                      >
                        Security
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/developers"
                  className="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Developers
                </Link>
                <Link
                  href="/early-access"
                  className="mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Try Testnet
                </Link>
              </nav>
            </div>
          )}
        </header>
      </div>
  )
}

