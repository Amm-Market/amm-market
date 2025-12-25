"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import {
  BookOpen,
  FileText,
  Code,
  Repeat,
  CreditCard,
  TrendingUp,
  Zap,
  ArrowUpDown,
  Bot,
  Workflow,
  Search,
  Database,
  Award,
  Router,
  Shield,
  BarChart,
  Umbrella,
  FileCheck,
  ShieldAlert,
} from "lucide-react"

export default function DeveloperSidebar() {
  const pathname = usePathname()
  const sidebarRef = useRef<HTMLElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        setScrollPosition(sidebarRef.current.scrollTop)
      }
    }

    const sidebarElement = sidebarRef.current
    if (sidebarElement) {
      sidebarElement.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (sidebarElement) {
        sidebarElement.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + "/")
  }

  return (
    <aside
      ref={sidebarRef}
      className="hidden md:block w-56 border-r border-gray-200 h-[calc(100vh-73px)] overflow-y-auto sticky top-[73px]"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style jsx>{`
        aside::-webkit-scrollbar {
          display: none;
          width: 0;
        }
      `}</style>
      <div className="pt-4">{/* Sidebar content starts below */}</div>

      <nav className="px-4 pb-4">
        <div className="mb-6">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Getting Started</div>

          <ul className="space-y-1">
            <li>
              <Link
                href="/developers/getting-started/overview"
                className={`flex items-center text-sm ${
                  isActive("/developers/getting-started/overview")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <BookOpen
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/getting-started/overview")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 0 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Overview
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Uniswap v4 Hooks</div>

          <ul className="space-y-1">
            <li>
              <Link
                href="/developers/hooks/mev-protection"
                className={`flex items-center text-sm ${
                  isActive("/developers/hooks/mev-protection")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <Shield
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/hooks/mev-protection")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 150 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                MEV Protection
              </Link>
            </li>
            <li>
              <Link
                href="/developers/hooks/auto-compound"
                className={`flex items-center text-sm ${
                  isActive("/developers/hooks/auto-compound")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <Repeat
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/hooks/auto-compound")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 200 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Auto Compound
              </Link>
            </li>
            <li>
              <Link
                href="/developers/hooks/supply-and-borrow"
                className={`flex items-center text-sm ${
                  isActive("/developers/hooks/supply-and-borrow")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <CreditCard
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/hooks/supply-and-borrow")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 250 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Supply and Borrow
              </Link>
            </li>
            <li>
              <Link
                href="/developers/hooks/long-and-short"
                className={`flex items-center text-sm ${
                  isActive("/developers/hooks/long-and-short")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <TrendingUp
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/hooks/long-and-short")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 300 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Long and Short
              </Link>
            </li>
            <li>
              <Link
                href="/developers/hooks/gasless-swap"
                className={`flex items-center text-sm ${
                  isActive("/developers/hooks/gasless-swap")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <Zap
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/hooks/gasless-swap")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 350 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Gasless Swap
              </Link>
            </li>
            <li>
              <Link
                href="/developers/hooks/long-tail-assets"
                className={`flex items-center text-sm ${
                  isActive("/developers/hooks/long-tail-assets")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <ArrowUpDown
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/hooks/long-tail-assets")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 400 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Long Tail Assets
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Mini Copilot</div>

          <ul className="space-y-1">
            <li>
              <Link
                href="/developers/copilot/ai-introduction"
                className={`flex items-center text-sm ${
                  isActive("/developers/copilot/ai-introduction")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <Bot
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/copilot/ai-introduction")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 450 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                AI Introduction
              </Link>
            </li>
            <li>
              <Link
                href="/developers/copilot/workflow"
                className={`flex items-center text-sm ${
                  isActive("/developers/copilot/workflow")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <Workflow
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/copilot/workflow")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 500 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Generalized Workflow
              </Link>
            </li>
            <li>
              <Link
                href="/developers/copilot/query-example"
                className={`flex items-center text-sm ${
                  isActive("/developers/copilot/query-example")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <Search
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/copilot/query-example")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 550 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Query Example
              </Link>
            </li>
            <li>
              <Link
                href="/developers/copilot/protocols"
                className={`flex items-center text-sm ${
                  isActive("/developers/copilot/protocols")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <Database
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/copilot/protocols")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 600 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Protocol Supported
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Eigenlayer AVS</div>

          <ul className="space-y-1">
            <li>
              <Link
                href="/developers/eigenlayer/technical-spec"
                className={`flex items-center text-sm ${
                  isActive("/developers/eigenlayer/technical-spec")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <FileText
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/eigenlayer/technical-spec")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 650 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Technical Spec
              </Link>
            </li>
            <li>
              <Link
                href="/developers/eigenlayer/risk-framework"
                className={`flex items-center text-sm ${
                  isActive("/developers/eigenlayer/risk-framework")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <ShieldAlert
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/eigenlayer/risk-framework")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 750 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Risk Framework
              </Link>
            </li>
            <li>
              <Link
                href="/developers/eigenlayer/rewards"
                className={`flex items-center text-sm ${
                  isActive("/developers/eigenlayer/rewards")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <Award
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/eigenlayer/rewards")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 800 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Rewards Programs
              </Link>
            </li>
            <li>
              <Link
                href="/developers/eigenlayer/router"
                className={`flex items-center text-sm ${
                  isActive("/developers/eigenlayer/router")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <Router
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/eigenlayer/router")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 850 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Router Contract
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Security & Compliance</div>

          <ul className="space-y-1">
            <li>
              <Link
                href="/developers/security/smart-contracts"
                className={`flex items-center text-sm ${
                  isActive("/developers/security/smart-contracts")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <Code
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/security/smart-contracts")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 900 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Smart Contracts
              </Link>
            </li>
            <li>
              <Link
                href="/developers/security/price-oracle"
                className={`flex items-center text-sm ${
                  isActive("/developers/security/price-oracle")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <BarChart
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/security/price-oracle")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 950 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Price Oracle
              </Link>
            </li>
            <li>
              <Link
                href="/developers/security/insurance"
                className={`flex items-center text-sm ${
                  isActive("/developers/security/insurance")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <Umbrella
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/security/insurance")
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 1000 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Insurance Funds
              </Link>
            </li>
            <li>
              <Link
                href="/developers/security/legal"
                className={`flex items-center text-sm ${
                  isActive("/developers/security/legal")
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } py-1 px-2 rounded-md group transition-all duration-200`}
              >
                <FileCheck
                  className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    isActive("/developers/security/legal") ? "text-blue-600" : "text-gray-500 group-hover:text-blue-500"
                  } ${scrollPosition > 1050 ? "transform translate-y-[1px]" : ""} group-hover:scale-110`}
                />
                Legal Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}

