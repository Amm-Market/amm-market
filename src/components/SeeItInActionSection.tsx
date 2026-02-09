"use client"

import { useState, useRef } from "react"
import { LazySection } from "@/components/ui/lazy-section"

const dashboardTabs = [
  { id: "deposit" as const, label: "Deposit", video: "https://cdn-front.freepik.com/home/anon-rvmp/spaces/spaces_op.webm" },
  { id: "borrow" as const, label: "Borrow", video: "https://cdn-front.freepik.com/home/anon-rvmp/spaces/spaces_op.webm" },
  { id: "monitor" as const, label: "Monitor", video: "https://cdn-front.freepik.com/home/anon-rvmp/spaces/spaces_op.webm" },
  { id: "claim" as const, label: "Claim Fees", video: "https://cdn-front.freepik.com/home/anon-rvmp/spaces/spaces_op.webm" },
]

export default function SeeItInActionSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeTab, setActiveTab] = useState<"deposit" | "borrow" | "monitor" | "claim">("deposit")
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      if (newVolume === 0) {
        setIsMuted(true)
        videoRef.current.muted = true
      } else if (isMuted) {
        setIsMuted(false)
        videoRef.current.muted = false
      }
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const percentage = clickX / rect.width
      const newTime = percentage * duration
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <>
      <div className="mx-auto max-w-5xl px-6 lg:px-0">
        <div className="border-t border-gray-100" />
      </div>

      <LazySection minHeight="400px">
        <div id="dashboard" className="mx-auto max-w-5xl px-6 lg:px-0 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 lg:mb-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                See It In Action
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Manage your LP positions without leaving the dashboard.
              </p>
            </div>

            <div className="hidden lg:flex gap-2" role="tablist">
              {dashboardTabs.map((tab) => (
                <button
                  key={tab.id}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-6 border rounded-full bg-white text-sm transition-all hover:border-gray-400 hover:text-gray-900 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "opacity-100 border-gray-900 text-gray-900 font-medium"
                      : "opacity-80 border-gray-300 text-gray-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex lg:hidden justify-center gap-1.5 sm:gap-2 mb-6" role="tablist">
            {dashboardTabs.map((tab) => (
              <button
                key={`mobile-${tab.id}`}
                aria-selected={activeTab === tab.id}
                role="tab"
                onClick={() => setActiveTab(tab.id)}
                className={`py-1.5 px-2.5 sm:py-2 sm:px-5 border rounded-full bg-white text-xs sm:text-sm transition-all hover:border-gray-400 hover:text-gray-900 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "opacity-100 border-gray-900 text-gray-900 font-medium"
                    : "opacity-80 border-gray-300 text-gray-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative flex flex-col gap-6 md:gap-8 items-center">
            <div className="w-full aspect-video overflow-hidden rounded-xl md:rounded-2xl bg-black">
              <div className="relative w-full max-w-full h-full group">
                <video
                  key={activeTab}
                  ref={videoRef}
                  className="relative z-10 block w-full h-full object-cover"
                  height="100%"
                  width="100%"
                  loop
                  muted={isMuted}
                  playsInline
                  preload="none"
                  src={dashboardTabs.find((tab) => tab.id === activeTab)?.video}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                <div
                  className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                  onClick={togglePlayPause}
                  role="button"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && togglePlayPause()}
                >
                  <div className="bg-black/40 backdrop-blur-sm rounded-full p-4 hover:bg-black/60 transition-colors">
                    {isPlaying ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col gap-2">
                    <div
                      className="w-full h-3 md:h-1.5 bg-white/30 rounded-full cursor-pointer group/timeline"
                      onClick={handleSeek}
                      role="slider"
                      aria-label="Video progress"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={duration > 0 ? Math.round((currentTime / duration) * 100) : 0}
                    >
                      <div
                        className="h-full bg-blue-500 rounded-full relative"
                        style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : "0%" }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/timeline:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={togglePlayPause}
                          className="text-white hover:text-blue-400 transition-colors"
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                          {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="6" y="4" width="4" height="16" />
                              <rect x="14" y="4" width="4" height="16" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                          )}
                        </button>
                        <span className="text-white text-xs font-mono">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={toggleMute}
                            className="text-white hover:text-blue-400 transition-colors"
                            aria-label={isMuted ? "Unmute video" : "Mute video"}
                          >
                            {isMuted || volume === 0 ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <line x1="23" y1="9" x2="17" y2="15" />
                                <line x1="17" y1="9" x2="23" y2="15" />
                              </svg>
                            ) : volume < 0.5 ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                              </svg>
                            )}
                          </button>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="w-16 h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                            aria-label="Volume"
                          />
                        </div>

                        <button
                          onClick={() => videoRef.current?.requestFullscreen()}
                          className="text-white hover:text-blue-400 transition-colors"
                          aria-label="Enter fullscreen"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                            <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                            <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      <div className="mx-auto max-w-5xl px-6 lg:px-0">
        <div className="border-t border-gray-100" />
      </div>
    </>
  )
}
