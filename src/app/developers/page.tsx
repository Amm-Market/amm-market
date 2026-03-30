import type { Metadata } from "next"
import Link from "next/link"
import {
  BookOpen,
  Rocket,
  Layers,
  AlertTriangle,
  Plug,
  Shield,
  Scale,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Developer Documentation",
  description: "Complete technical documentation for AMM Market. Learn about LP collateral, health factors, liquidation, integrations, and smart contract architecture.",
}

const sections = [
  {
    title: "Introduction",
    description: "High-level overview of AMM Market Spoke and how LP tokens are used as collateral within Aave v4.",
    href: "/developers/introduction",
    icon: BookOpen,
  },
  {
    title: "Getting Started",
    description: "Learn how to deposit LP tokens, borrow assets, manage loans, and claim fees.",
    href: "/developers/getting-started",
    icon: Rocket,
  },
  {
    title: "Protocol Architecture",
    description: "Understand Borrow Spoke and Invest Spoke architecture, collateral factors, health factor calculations, and fee structures.",
    href: "/developers/architecture",
    icon: Layers,
  },
  {
    title: "Liquidation Framework",
    description: "Learn about liquidation conditions, flow, and see concrete examples of liquidation scenarios.",
    href: "/developers/liquidation",
    icon: AlertTriangle,
  },
  {
    title: "Supported Integrations",
    description: "Explore supported DEXes, allowed LP pools, router contracts, and price oracle systems.",
    href: "/developers/integrations",
    icon: Plug,
  },
  {
    title: "Safety Mechanisms",
    description: "Review the protocol-wide risk framework, smart contract architecture, bug bounty, and insurance fund mechanisms.",
    href: "/developers/safety",
    icon: Shield,
  },
  {
    title: "Legal & Compliance",
    description: "Security disclosures, known risks, and legal disclaimers for protocol usage.",
    href: "/developers/legal",
    icon: Scale,
  },
]

export default function DevelopersPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">AMM Market Documentation</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Complete technical documentation for integrating with AMM Market, the Aave v4 Spoke that enables 
          borrowing against LP positions. Learn how to deposit collateral, manage loans, and build on top 
          of the protocol.
        </p>
      </div>

      {/* Quick Start Banner */}
      <div className="mb-10 p-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">New to AMM Market?</h2>
            <p className="text-blue-100">Start with the Introduction to understand core concepts.</p>
          </div>
          <Link
            href="/developers/introduction"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Section Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section) => {
          const Icon = section.icon

          return (
            <Link
              key={section.href}
              href={section.href}
              className="group p-5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-gray-100">
                  <Icon className="h-5 w-5 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
              </div>
            </Link>
          )
        })}
      </div>

      {/* Version Info */}
      <div className="mt-10 pt-6 border-t border-gray-200">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
            Testnet
          </span>
          <span>Built on Aave v4</span>
          <span>Last updated: January 2026</span>
        </div>
      </div>
    </div>
  )
}
