import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Logo and social */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8">
            <Link href="/" className="inline-block">
              <Image src="/aave-logo.svg" alt="Aave Logo" width={100} height={32} className="h-7 w-auto" />
            </Link>
            <div className="flex space-x-3">
              <Link href="https://twitter.com/aaveaave" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/aave" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://discord.gg/aave" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Discord className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <Link href="/developers" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Developers
            </Link>
            <Link href="/research" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Research
            </Link>
            <Link href="/insight" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Insight
            </Link>
            <Link href="/community" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Community
            </Link>
            <Link
              href="/developers/security/terms"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Terms
            </Link>
            <Link
              href="/developers/security/legal"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Legal
            </Link>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <p className="text-gray-500 text-xs">© {currentYear} Aave. All rights reserved.</p>
          <p className="text-gray-500 text-xs mt-2 sm:mt-0">Discover and Invest in DeFi</p>
        </div>
      </div>
    </footer>
  )
}

