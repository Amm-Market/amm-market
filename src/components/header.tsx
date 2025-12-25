"use client"
import Link from "next/link"
import { useState } from "react"

interface HeaderProps {
  activePage?: string
}

export default function Header({ activePage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100">
      <div className="w-full">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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

            <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-6">
                <Link
                  href="/"
                  className={`text-gray-600 hover:text-gray-900 font-medium ${activePage === "home" ? "text-gray-900" : ""}`}
                >
                  Home
                </Link>
                <Link
                  href="/research"
                  className={`text-gray-600 hover:text-gray-900 font-medium ${activePage === "research" ? "text-gray-900" : ""}`}
                >
                  Research
                </Link>
                <Link
                  href="/insight"
                  className={`text-gray-600 hover:text-gray-900 font-medium ${activePage === "insight" ? "text-gray-900" : ""}`}
                >
                  Insight
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setResourcesMenuOpen(!resourcesMenuOpen)}
                    className={`text-gray-600 hover:text-gray-900 font-medium flex items-center ${activePage === "resources" ? "text-gray-900" : ""}`}
                  >
                    Resources
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
                      className={`ml-1 transition-transform duration-200 ${resourcesMenuOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {resourcesMenuOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-md border border-gray-100 w-48 py-2 z-20">
                      <Link
                        href="/community"
                        className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        Community
                      </Link>
                      <Link
                        href="https://aave.com/investors"
                        className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-center justify-between">
                          <span>Investor Relations</span>
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
                            className="ml-1"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </div>
                      </Link>
                      <Link
                        href="https://docs.aave.com/overview"
                        className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-center justify-between">
                          <span>Technical Overview</span>
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
                            className="ml-1"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </div>
                      </Link>
                      <Link
                        href="/brand"
                        className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        Brand Assets
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/developers"
                  className={`text-gray-600 hover:text-gray-900 font-medium ${activePage === "developers" ? "text-gray-900" : ""}`}
                >
                  Developers
                </Link>
              </div>
            </nav>

            <div className="flex items-center">
              <Link
                href="/early-access"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg inline-block"
              >
                Get Early Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

