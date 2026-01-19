"use client"

import { Download, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function BrandPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(text)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const downloadLogo = (type: string, color: string, format: string) => {
    // Download functionality - in production, this would trigger actual file downloads
    // For now, we'll use a programmatic download approach if files exist
    const filename = `${type}-${color}.${format.toLowerCase()}`
    const filePath = `/downloads/logos/${filename}`

    // Attempt to download the file
    const link = document.createElement("a")
    link.href = filePath
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">

      <main className="flex-1 py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-24">
          {/* Hero Section with cloud background */}
          <div className="relative mb-20 py-16 px-6 rounded-3xl overflow-hidden bg-gradient-to-b from-sky-500 to-blue-600 text-white">
            {/* More realistic cloud effect with multiple layers and blur */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJza3kiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCI+PGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMTAwIiBjeT0iMTAwIiByPSI0MCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMzAwIiBjeT0iMjAwIiByPSI1MCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iNTAwIiBjeT0iMTUwIiByPSI2MCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMjAwIiBjeT0iMzAwIiByPSI1NSIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iNDAwIiBjeT0iMzUwIiByPSI0NSIgb3BhY2l0eT0iMC4zIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NreSkiLz48L3N2Zz4=')] opacity-70"></div>

            {/* Large fluffy cloud groups */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              {/* Cloud group 1 - top left */}
              <div className="absolute -top-10 -left-10 blur-[2px]">
                <div className="absolute w-32 h-16 bg-white rounded-full opacity-80"></div>
                <div className="absolute w-24 h-16 bg-white rounded-full opacity-80 top-4 left-16"></div>
                <div className="absolute w-28 h-16 bg-white rounded-full opacity-80 top-2 left-8"></div>
                <div className="absolute w-20 h-14 bg-white rounded-full opacity-80 top-8 left-20"></div>
                <div className="absolute w-24 h-14 bg-white rounded-full opacity-80 top-6 left-12"></div>
              </div>

              {/* Cloud group 2 - top right */}
              <div className="absolute -top-5 right-10 blur-[2px]">
                <div className="absolute w-36 h-20 bg-white rounded-full opacity-80"></div>
                <div className="absolute w-28 h-18 bg-white rounded-full opacity-80 top-6 right-16"></div>
                <div className="absolute w-32 h-18 bg-white rounded-full opacity-80 top-4 right-8"></div>
                <div className="absolute w-24 h-16 bg-white rounded-full opacity-80 top-10 right-20"></div>
                <div className="absolute w-28 h-16 bg-white rounded-full opacity-80 top-8 right-12"></div>
              </div>

              {/* Cloud group 3 - bottom left */}
              <div className="absolute bottom-5 left-20 blur-[1px]">
                <div className="absolute w-40 h-20 bg-white rounded-full opacity-70"></div>
                <div className="absolute w-32 h-18 bg-white rounded-full opacity-70 bottom-6 left-16"></div>
                <div className="absolute w-36 h-18 bg-white rounded-full opacity-70 bottom-4 left-8"></div>
                <div className="absolute w-28 h-16 bg-white rounded-full opacity-70 bottom-10 left-20"></div>
                <div className="absolute w-32 h-16 bg-white rounded-full opacity-70 bottom-8 left-12"></div>
              </div>

              {/* Cloud group 4 - bottom right */}
              <div className="absolute bottom-10 right-10 blur-[1px]">
                <div className="absolute w-36 h-18 bg-white rounded-full opacity-70"></div>
                <div className="absolute w-28 h-16 bg-white rounded-full opacity-70 bottom-4 right-16"></div>
                <div className="absolute w-32 h-16 bg-white rounded-full opacity-70 bottom-2 right-8"></div>
                <div className="absolute w-24 h-14 bg-white rounded-full opacity-70 bottom-8 right-20"></div>
                <div className="absolute w-28 h-14 bg-white rounded-full opacity-70 bottom-6 right-12"></div>
              </div>
            </div>

            {/* Content */}
            <div className="relative text-center z-10">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-blue-700 bg-white bg-opacity-80 rounded-full">
                Brand Resources
              </span>
              <h1 className="text-4xl font-bold mb-3 text-white drop-shadow-md">Brand Guidelines</h1>
              <p className="text-base text-white text-opacity-90 max-w-xl mx-auto">
                Our brand assets help create a consistent and recognizable identity across all platforms.
              </p>
            </div>
          </div>

          {/* Guidelines Section - Improved Design */}
          <section className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md border border-blue-100 p-8 md:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full opacity-20 -ml-10 -mb-10"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Brand Assets</h2>
                  <p className="text-blue-600 mt-1">Guidelines for consistent brand representation</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Please do the following:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Use the official logo</p>
                        <p className="text-gray-600 text-sm">Always use the unmodified Dex Mini logo</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Maintain clarity</p>
                        <p className="text-gray-600 text-sm">Ensure the logo is clear and free from distortion</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Respect clear space</p>
                        <p className="text-gray-600 text-sm">Maintain the logo's visual impact with proper spacing</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Accurate representation</p>
                        <p className="text-gray-600 text-sm">Use the logo in ways that accurately reflect our brand</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Please avoid the following:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Altering the logo</p>
                        <p className="text-gray-600 text-sm">Including colors, proportions, or elements</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Blending with other logos</p>
                        <p className="text-gray-600 text-sm">Keep our logo distinct and separate</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Misleading context</p>
                        <p className="text-gray-600 text-sm">
                          Using the logo in a way that misrepresents the Dex Mini brand
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Low resolution usage</p>
                        <p className="text-gray-600 text-sm">Using pixelated or low-quality versions of the logo</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-gray-700">
                  We love seeing the community's creativity! When designing assets for Dex Mini, please ensure they
                  align with our brand. Our logos are a great source of inspiration. We're eager to see what you come up
                  with!
                </p>
              </div>
            </div>
          </section>

          {/* Logomark Section */}
          <section>
            <h2 className="text-3xl font-bold mb-10 text-gray-900">Logomark</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* White Icon */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-200">
                <div className="bg-gray-800 p-8 flex items-center justify-center h-48">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <span className="text-gray-800 text-2xl font-bold">D</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-3">Icon White</h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => downloadLogo("icon", "white", "SVG")}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>SVG</span>
                    </button>
                    <button
                      onClick={() => downloadLogo("icon", "white", "PNG")}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>PNG</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Blue Icon */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-200">
                <div className="bg-white p-8 flex items-center justify-center h-48">
                  <div className="w-24 h-24 bg-[#0048ba] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">D</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-3">Icon Blue</h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => downloadLogo("icon", "blue", "SVG")}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>SVG</span>
                    </button>
                    <button
                      onClick={() => downloadLogo("icon", "blue", "PNG")}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>PNG</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Black Icon */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-200">
                <div className="bg-white p-8 flex items-center justify-center h-48">
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">D</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-3">Icon Black</h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => downloadLogo("icon", "black", "SVG")}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>SVG</span>
                    </button>
                    <button
                      onClick={() => downloadLogo("icon", "black", "PNG")}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>PNG</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Wordmark Section */}
          <section>
            <h2 className="text-3xl font-bold mb-10 text-gray-900">Wordmark</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* White Wordmark */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-200">
                <div className="bg-gray-800 p-8 flex items-center justify-center h-48">
                  <div className="text-white text-4xl font-bold tracking-tight">MINI</div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-3">Mini White</h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => downloadLogo("wordmark", "white", "SVG")}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>SVG</span>
                    </button>
                    <button
                      onClick={() => downloadLogo("wordmark", "white", "PNG")}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>PNG</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Blue Wordmark */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-200">
                <div className="bg-white p-8 flex items-center justify-center h-48">
                  <div className="text-[#0048ba] text-4xl font-bold tracking-tight">MINI</div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-3">Mini Blue</h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => downloadLogo("wordmark", "blue", "SVG")}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>SVG</span>
                    </button>
                    <button
                      onClick={() => downloadLogo("wordmark", "blue", "PNG")}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>PNG</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Black Wordmark */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-200">
                <div className="bg-white p-8 flex items-center justify-center h-48">
                  <div className="text-black text-4xl font-bold tracking-tight">MINI</div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-3">Mini Black</h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => downloadLogo("wordmark", "black", "SVG")}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>SVG</span>
                    </button>
                    <button
                      onClick={() => downloadLogo("wordmark", "black", "PNG")}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>PNG</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Full Logo Section */}
          <section>
            <h2 className="text-3xl font-bold mb-10 text-gray-900">Full Logo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* White Full Logo */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-200">
                <div className="bg-gray-800 p-8 flex items-center justify-center h-48">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-800 text-xl font-bold">D</span>
                    </div>
                    <div className="text-white text-3xl font-bold tracking-tight">MINI</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-3">Full White</h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => downloadLogo("full", "white", "SVG")}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>SVG</span>
                    </button>
                    <button
                      onClick={() => downloadLogo("full", "white", "PNG")}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>PNG</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Blue Full Logo */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-200">
                <div className="bg-white p-8 flex items-center justify-center h-48">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#0048ba] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xl font-bold">D</span>
                    </div>
                    <div className="text-[#0048ba] text-3xl font-bold tracking-tight">MINI</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-3">Full Blue</h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => downloadLogo("full", "blue", "SVG")}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>SVG</span>
                    </button>
                    <button
                      onClick={() => downloadLogo("full", "blue", "PNG")}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>PNG</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Black Full Logo */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-200">
                <div className="bg-white p-8 flex items-center justify-center h-48">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xl font-bold">D</span>
                    </div>
                    <div className="text-black text-3xl font-bold tracking-tight">MINI</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-3">Full Black</h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => downloadLogo("full", "black", "SVG")}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>SVG</span>
                    </button>
                    <button
                      onClick={() => downloadLogo("full", "black", "PNG")}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <span>PNG</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Colors Section */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-10 text-gray-900">Colors</h2>

            <div>
              <p className="mb-6 text-gray-600">These colors form the fundamental color scheme of the brand.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Primary Color */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                  <div className="h-32 bg-[#0048ba]"></div>
                  <div className="p-6">
                    <h4 className="font-medium text-lg mb-1">Absolute Zero</h4>
                    <p className="text-sm text-gray-500 mb-2">Primary</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-600 font-mono">#0048ba</span>
                      <button
                        onClick={() => copyToClipboard("#0048ba")}
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        {copiedColor === "#0048ba" ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Secondary Colors */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                  <div className="h-32 bg-[#000308]"></div>
                  <div className="p-6">
                    <h4 className="font-medium text-lg mb-1">Dark</h4>
                    <p className="text-sm text-gray-500 mb-2">Secondary</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-600 font-mono">#000308</span>
                      <button
                        onClick={() => copyToClipboard("#000308")}
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        {copiedColor === "#000308" ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                  <div className="h-32 bg-[#ebf2ff]"></div>
                  <div className="p-6">
                    <h4 className="font-medium text-lg mb-1">Light Blue</h4>
                    <p className="text-sm text-gray-500 mb-2">Secondary</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-600 font-mono">#ebf2ff</span>
                      <button
                        onClick={() => copyToClipboard("#ebf2ff")}
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        {copiedColor === "#ebf2ff" ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                  <div className="h-32 bg-[#ffffff]"></div>
                  <div className="p-6">
                    <h4 className="font-medium text-lg mb-1">White</h4>
                    <p className="text-sm text-gray-500 mb-2">Secondary</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-600 font-mono">#ffffff</span>
                      <button
                        onClick={() => copyToClipboard("#ffffff")}
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        {copiedColor === "#ffffff" ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold mb-10 text-gray-900">Typography</h2>
            <p className="mb-8 text-gray-600">The three typefaces that define the brand.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-4 font-['Inter']">Inter</h3>
                <p className="font-['Inter'] mb-4 text-gray-700">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz
                  <br />
                  0123456789
                </p>
                <div className="font-['Inter'] font-bold text-gray-900">
                  The quick brown fox jumps over the lazy dog.
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-4 font-['Roboto']">Roboto</h3>
                <p className="font-['Roboto'] mb-4 text-gray-700">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz
                  <br />
                  0123456789
                </p>
                <div className="font-['Roboto'] font-bold text-gray-900">
                  The quick brown fox jumps over the lazy dog.
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-4 font-['Arial']">Arial</h3>
                <p className="font-['Arial'] mb-4 text-gray-700">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz
                  <br />
                  0123456789
                </p>
                <div className="font-['Arial'] font-bold text-gray-900">
                  The quick brown fox jumps over the lazy dog.
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

