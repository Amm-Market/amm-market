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

const sections = [
  {
    title: "Introduction",
    description: "High-level overview of AMM Market Spoke and how LP tokens are used as collateral within Aave v4.",
    href: "/developers/introduction",
    icon: BookOpen,
    color: "blue",
  },
  {
    title: "Getting Started",
    description: "Learn how to deposit LP tokens, borrow assets, manage loans, and claim fees.",
    href: "/developers/getting-started",
    icon: Rocket,
    color: "green",
  },
  {
    title: "Protocol Architecture",
    description: "Understand spokes design, collateral factors, health factor calculations, and fee structures.",
    href: "/developers/architecture",
    icon: Layers,
    color: "purple",
  },
  {
    title: "Liquidation Framework",
    description: "Learn about liquidation conditions, flow, and see concrete examples of liquidation scenarios.",
    href: "/developers/liquidation",
    icon: AlertTriangle,
    color: "orange",
  },
  {
    title: "Supported Integrations",
    description: "Explore supported DEXes, allowed LP pools, router contracts, and price oracle systems.",
    href: "/developers/integrations",
    icon: Plug,
    color: "cyan",
  },
  {
    title: "Safety Mechanisms",
    description: "Review risk parameters, smart contract architecture, and insurance fund mechanisms.",
    href: "/developers/safety",
    icon: Shield,
    color: "emerald",
  },
  {
    title: "Legal & Compliance",
    description: "Security disclosures, known risks, and legal disclaimers for protocol usage.",
    href: "/developers/legal",
    icon: Scale,
    color: "gray",
  },
]

const colorClasses: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    hover: "hover:border-blue-300 hover:bg-blue-50/80",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-100",
    hover: "hover:border-green-300 hover:bg-green-50/80",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-100",
    hover: "hover:border-purple-300 hover:bg-purple-50/80",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100",
    hover: "hover:border-orange-300 hover:bg-orange-50/80",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    border: "border-cyan-100",
    hover: "hover:border-cyan-300 hover:bg-cyan-50/80",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    hover: "hover:border-emerald-300 hover:bg-emerald-50/80",
  },
  gray: {
    bg: "bg-gray-50",
    text: "text-gray-600",
    border: "border-gray-200",
    hover: "hover:border-gray-300 hover:bg-gray-100/80",
  },
}

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
          const colors = colorClasses[section.color]

          return (
            <Link
              key={section.href}
              href={section.href}
              className={`group p-5 rounded-xl border ${colors.border} ${colors.hover} transition-all duration-200`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-lg ${colors.bg}`}>
                  <Icon className={`h-5 w-5 ${colors.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
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
