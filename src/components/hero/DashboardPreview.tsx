"use client"

import { useState } from "react"
import { VideoPlayer } from "@/components/shared"
import { dashboardTabs } from "@/data/hero-data"

/**
 * DashboardPreview - Tabbed video player showing app functionality.
 */
export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(dashboardTabs[0].id)

  const currentVideo = dashboardTabs.find((tab) => tab.id === activeTab)?.video ?? dashboardTabs[0].video

  return (
    <div className="flex flex-col py-16 md:py-24">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
          Designed for Degens
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-[600px]">
          A seamless experience from deposit to withdrawal.
        </p>
      </div>
      {/* Dashboard Tabs */}
      <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
        {dashboardTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Video Preview */}
      <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
        <div className="aspect-[16/10] w-full">
          <VideoPlayer
            key={activeTab}
            src={currentVideo}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview
