import Link from "next/link"
import { ChevronRight, ExternalLink, GitlabIcon as GitHub } from "lucide-react"

export default function GettingStartedPage() {
  return (
    <main className="flex-1 max-w-[800px] pl-8 pr-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/developers" className="hover:text-gray-900">
          Developers
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">Getting Started</span>
      </div>

      <h1 className="text-3xl font-bold mb-4">Welcome to Dex Mini</h1>
      <p className="text-gray-600 mb-6">
        Welcome to the official Dex Mini documentation. Whether you're a retail investor, developer, or simply
        exploring, this guide is designed to get you up to speed quickly.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link
          href="/developers/getting-started/quick-start"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          <span>Quick Start</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
        <Link
          href="https://github.com/dex-mini"
          className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <GitHub className="h-4 w-4" />
          <span>GitHub</span>
        </Link>
      </div>

      <div className="mb-10">
        <p className="text-gray-700 mb-6">
          Dex Mini is a next-generation, AI-powered crypto consumer app designed for both retail investors and crypto
          enthusiasts alike. By seamlessly integrating multiple Uniswap V4 hooks—including liquidity provision, lending,
          and leverage—into one cohesive protocol, Dex Mini delivers extra yields while ensuring institutional-grade
          security.
        </p>

        <p className="text-gray-700 mb-6">
          Our mission is to empower users with the tools to master crypto and unlock DeFi's full potential. By
          revolutionizing Uniswap beyond a simple DEX, we are building the premier capital markets infrastructure for
          crypto. Prioritizing long-term liquidity sustainability over short-term yield farming paves the way for mass
          DeFi adoption.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-6">Documentation Sections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Link
          href="/developers/getting-started/overview"
          className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow hover:border-blue-300"
        >
          <h3 className="text-lg font-semibold mb-2 text-blue-600">Overview</h3>
          <p className="text-gray-600">
            Get a high-level introduction to the Dex Mini platform and its core components.
          </p>
        </Link>

        <Link
          href="/developers/getting-started/quick-start"
          className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow hover:border-blue-300"
        >
          <h3 className="text-lg font-semibold mb-2 text-blue-600">Quick Start</h3>
          <p className="text-gray-600">
            Set up your development environment and start building with Dex Mini in minutes.
          </p>
        </Link>

        <Link
          href="/developers/getting-started/core-concepts"
          className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow hover:border-blue-300"
        >
          <h3 className="text-lg font-semibold mb-2 text-blue-600">Core Concepts</h3>
          <p className="text-gray-600">Understand the fundamental principles and architecture behind Dex Mini.</p>
        </Link>

        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-4">Connect with our community and team members for support.</p>
          <div className="flex gap-4">
            <Link href="https://discord.gg/dexmini" className="text-blue-600 hover:text-blue-800 flex items-center">
              <span>Join Discord</span>
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/dex-mini/issues"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <span>GitHub Issues</span>
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Key Features</h2>
      <div className="space-y-6">
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Uniswap V4 Hooks</h3>
          <p className="text-gray-600">
            Explore our custom hooks that extend Uniswap V4 with advanced features like MEV protection,
            auto-compounding, and more.
          </p>
          <Link
            href="/developers/hooks/mev-protection"
            className="text-blue-600 hover:text-blue-800 inline-flex items-center mt-2"
          >
            <span>Explore Hooks</span>
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Mini Copilot</h3>
          <p className="text-gray-600">
            Learn about our AI-powered assistant that helps users navigate the DeFi ecosystem and make informed
            decisions.
          </p>
          <Link
            href="/developers/copilot/ai-introduction"
            className="text-blue-600 hover:text-blue-800 inline-flex items-center mt-2"
          >
            <span>Discover Mini Copilot</span>
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Eigenlayer AVS</h3>
          <p className="text-gray-600">
            Understand our integration with Eigenlayer's Actively Validated Services for enhanced security and
            scalability.
          </p>
          <Link
            href="/developers/eigenlayer/technical-spec"
            className="text-blue-600 hover:text-blue-800 inline-flex items-center mt-2"
          >
            <span>Learn About Eigenlayer AVS</span>
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}

