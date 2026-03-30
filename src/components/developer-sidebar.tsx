"use client"

/**
 * DeveloperSidebar - The main navigation sidebar for developer documentation.
 * 
 * @description
 * Renders a sticky sidebar with hierarchical navigation for the /developers section.
 * Features include:
 * - Collapsible sections with icons
 * - Active state highlighting based on current route
 * - Color-coded sections for visual distinction
 * - Smooth hover animations on icons and text
 * 
 * @exports
 * - navigationSections: Array of navigation structure (used by PageNavigation)
 * - DeveloperSidebar: The sidebar component
 * 
 * @layout
 * - Hidden on mobile (md:block)
 * - Fixed width: 256px
 * - Sticky positioning below header
 * - Full height with hidden scrollbar
 * 
 * @sections
 * - Introduction (blue)
 * - Getting Started (emerald)
 * - Protocol Architecture (violet)
 * - Liquidation Framework (amber)
 * - Supported Integrations (cyan)
 * - Safety Mechanisms (rose)
 * - Legal & Compliance (slate)
 * 
 * @example
 * // Used in developers layout
 * <DeveloperSidebar />
 * 
 * @see src/app/developers/layout.tsx - Where this component is rendered
 * @see src/components/page-navigation.tsx - Uses exported navigationSections
 */
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bug,
  BookOpen,
  Rocket,
  Layers,
  AlertTriangle,
  Plug,
  Shield,
  Scale,
  FileText,
  Lightbulb,
  Map as MapIcon,
  BookMarked,
  Download,
  Coins,
  Settings,
  CreditCard,
  LogOut,
  Gift,
  Workflow,
  Percent,
  Heart,
  DollarSign,
  Award,
  Flame,
  ArrowRight,
  ListChecks,
  Server,
  Droplets,
  Router,
  BarChart3,
  Gauge,
  Building,
  Umbrella,
  FileWarning,
  Gavel,
} from "lucide-react"

// Navigation structure - exported for use in PageNavigation component
export const navigationSections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: BookOpen,
    items: [
      { href: "/developers/introduction", label: "Overview", icon: FileText },
      { href: "/developers/introduction/key-concepts", label: "Key Concepts", icon: Lightbulb },
      { href: "/developers/introduction/testnet-roadmap", label: "Testnet & Roadmap", icon: MapIcon },
      { href: "/developers/introduction/glossary", label: "Glossary", icon: BookMarked },
    ],
  },
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Rocket,
    items: [
      { href: "/developers/getting-started", label: "Deposit LP", icon: Download },
      { href: "/developers/getting-started/borrow-assets", label: "Borrow Assets", icon: Coins },
      { href: "/developers/getting-started/manage-loans", label: "Manage Loans", icon: Settings },
      { href: "/developers/getting-started/repay-loans", label: "Repay Loans", icon: CreditCard },
      { href: "/developers/getting-started/withdraw-collateral", label: "Withdraw Collateral", icon: LogOut },
      { href: "/developers/getting-started/claim-lp-fees", label: "Claim LP Fees", icon: Gift },
    ],
  },
  {
    id: "architecture",
    title: "Protocol Architecture",
    icon: Layers,
    items: [
      { href: "/developers/architecture", label: "Borrow Spoke", icon: Workflow },
      { href: "/developers/architecture/invest-spoke", label: "Invest Spoke", icon: Coins },
      { href: "/developers/architecture/collateral-factors", label: "Collateral Factors", icon: Percent },
      { href: "/developers/architecture/health-factor", label: "Health Factor", icon: Heart },
      { href: "/developers/architecture/platform-fees", label: "Platform Fees", icon: DollarSign },
      { href: "/developers/architecture/incentives", label: "Incentives Programs", icon: Award },
    ],
  },
  {
    id: "liquidation",
    title: "Liquidation Framework",
    icon: AlertTriangle,
    items: [
      { href: "/developers/liquidation", label: "Liquidation Design", icon: Flame },
      { href: "/developers/liquidation/flow", label: "Liquidation Flow", icon: ArrowRight },
      { href: "/developers/liquidation/examples", label: "Liquidation Examples", icon: ListChecks },
    ],
  },
  {
    id: "integrations",
    title: "Supported Integrations",
    icon: Plug,
    items: [
      { href: "/developers/integrations", label: "Supported DEXes", icon: Server },
      { href: "/developers/integrations/allowed-pools", label: "Allowed LP Pools", icon: Droplets },
      { href: "/developers/integrations/router-contract", label: "Router Contract", icon: Router },
      { href: "/developers/integrations/price-oracles", label: "Price Oracles", icon: BarChart3 },
    ],
  },
  {
    id: "safety",
    title: "Safety Mechanisms",
    icon: Shield,
    items: [
      { href: "/developers/safety", label: "Risk Framework", icon: Gauge },
      { href: "/developers/safety/contracts", label: "Smart Contract", icon: Building },
      { href: "/developers/safety/bug-bounty", label: "Bug Bounty", icon: Bug },
      { href: "/developers/safety/insurance", label: "Insurance Funds", icon: Umbrella },
    ],
  },
  {
    id: "legal",
    title: "Legal & Compliance",
    icon: Scale,
    items: [
      { href: "/developers/legal", label: "Security Disclosures", icon: FileWarning },
      { href: "/developers/legal/disclaimer", label: "Legal Disclaimer", icon: Gavel },
    ],
  },
]

// Color palette per section
const sectionColors: Record<string, { headerBg: string; headerText: string; itemBg: string; itemText: string; icon: string }> = {
  introduction: { headerBg: "bg-blue-50", headerText: "text-blue-700", itemBg: "bg-blue-100", itemText: "text-blue-700", icon: "text-blue-600" },
  "getting-started": { headerBg: "bg-emerald-50", headerText: "text-emerald-700", itemBg: "bg-emerald-100", itemText: "text-emerald-700", icon: "text-emerald-600" },
  architecture: { headerBg: "bg-violet-50", headerText: "text-violet-700", itemBg: "bg-violet-100", itemText: "text-violet-700", icon: "text-violet-600" },
  liquidation: { headerBg: "bg-amber-50", headerText: "text-amber-700", itemBg: "bg-amber-100", itemText: "text-amber-700", icon: "text-amber-600" },
  integrations: { headerBg: "bg-cyan-50", headerText: "text-cyan-700", itemBg: "bg-cyan-100", itemText: "text-cyan-700", icon: "text-cyan-600" },
  safety: { headerBg: "bg-rose-50", headerText: "text-rose-700", itemBg: "bg-rose-100", itemText: "text-rose-700", icon: "text-rose-600" },
  legal: { headerBg: "bg-slate-100", headerText: "text-slate-700", itemBg: "bg-slate-200", itemText: "text-slate-700", icon: "text-slate-600" },
}

export default function DeveloperSidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href
  }

  const isSectionActive = (section: (typeof navigationSections)[0]) => {
    return section.items.some((item) => pathname === item.href || pathname?.startsWith(item.href + "/"))
  }

  return (
    <aside className="hidden md:block w-64 border-r border-gray-200 h-[calc(100vh-73px)] sticky top-[73px]">
      {/* Scrollable content */}
      <div
        className="h-full overflow-y-auto pr-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
          @keyframes wiggle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-12deg); }
            75% { transform: rotate(12deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
          }
          .hover-wiggle:hover {
            animation: wiggle 0.4s ease-in-out;
          }
          .hover-pulse:hover {
            animation: pulse 0.3s ease-in-out;
          }
          .group:hover .group-hover-wiggle {
            animation: wiggle 0.4s ease-in-out;
          }
          .group:hover .group-hover-pulse {
            animation: pulse 0.3s ease-in-out;
          }
        `}</style>
        <nav className="py-6 px-4">
          {navigationSections.map((section) => {
            const SectionIcon = section.icon
            const sectionActive = isSectionActive(section)
            const colors = sectionColors[section.id]

            return (
              <div key={section.id} className="mb-2">
                {/* Section Header */}
                <div
                  className={`flex items-center py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 group cursor-default ${sectionActive
                      ? `${colors.headerBg} ${colors.headerText}`
                      : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <SectionIcon
                      className={`h-4 w-4 transition-all duration-300 group-hover-wiggle ${sectionActive ? colors.icon : "text-gray-500 group-hover:text-gray-700"
                        }`}
                    />
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {section.title}
                    </span>
                  </div>
                </div>

                {/* Section Items */}
                <ul className="mt-1 ml-3 pl-3 border-l border-gray-200 space-y-0.5">
                  {section.items.map((item) => {
                    const ItemIcon = item.icon
                    const itemActive = isActive(item.href)

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-2 py-1.5 px-2.5 rounded-md text-sm transition-all duration-200 group ${itemActive
                              ? `${colors.itemBg} ${colors.itemText} font-medium`
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                        >
                          <ItemIcon
                            className={`h-3.5 w-3.5 transition-all duration-300 group-hover-pulse ${itemActive
                                ? colors.icon
                                : "text-gray-400 group-hover:text-gray-600"
                              }`}
                          />
                          <span className="transition-transform duration-200 group-hover:translate-x-1">
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
