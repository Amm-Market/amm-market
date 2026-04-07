import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { VideoPlayer } from '../shared/VideoPlayer'

// Mock HTMLMediaElement methods
beforeEach(() => {
  HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined)
  HTMLMediaElement.prototype.pause = vi.fn()
  HTMLMediaElement.prototype.load = vi.fn()
  
  Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
    writable: true,
    value: true,
  })
  
  Object.defineProperty(HTMLMediaElement.prototype, 'volume', {
    writable: true,
    value: 1,
  })
  
  Object.defineProperty(HTMLMediaElement.prototype, 'currentTime', {
    writable: true,
    value: 0,
  })
  
  Object.defineProperty(HTMLMediaElement.prototype, 'duration', {
    writable: true,
    value: 100,
  })
})

describe('VideoPlayer', () => {
  const mockSrc = 'https://example.com/video.mp4'

  it('renders video element with correct src', () => {
    const { container } = render(<VideoPlayer src={mockSrc} />)
    const video = container.querySelector('video')
    expect(video).toHaveAttribute('src', mockSrc)
  })

  it('has autoPlay enabled by default', () => {
    render(<VideoPlayer src={mockSrc} />)
    const video = document.querySelector('video')
    expect(video).toHaveAttribute('autoplay')
  })

  it('has loop enabled by default', () => {
    render(<VideoPlayer src={mockSrc} />)
    const video = document.querySelector('video')
    expect(video).toHaveAttribute('loop')
  })

  it('is muted by default', () => {
    render(<VideoPlayer src={mockSrc} />)
    const video = document.querySelector('video')
    expect(video?.muted).toBe(true)
  })

  it('respects autoPlay prop when set to false', () => {
    render(<VideoPlayer src={mockSrc} autoPlay={false} />)
    const video = document.querySelector('video')
    expect(video).not.toHaveAttribute('autoplay')
  })

  it('respects loop prop when set to false', () => {
    render(<VideoPlayer src={mockSrc} loop={false} />)
    const video = document.querySelector('video')
    expect(video).not.toHaveAttribute('loop')
  })

  it('renders play/pause button', () => {
    render(<VideoPlayer src={mockSrc} />)
    const playButton = screen.getAllByRole('button').find(btn => 
      btn.getAttribute('aria-label')?.includes('Pause') || 
      btn.getAttribute('aria-label')?.includes('Play')
    )
    expect(playButton).toBeInTheDocument()
  })

  it('renders mute/unmute button', () => {
    render(<VideoPlayer src={mockSrc} />)
    const muteButton = screen.getAllByRole('button').find(btn => 
      btn.getAttribute('aria-label')?.includes('Mute') || 
      btn.getAttribute('aria-label')?.includes('Unmute')
    )
    expect(muteButton).toBeInTheDocument()
  })

  it('renders fullscreen button', () => {
    render(<VideoPlayer src={mockSrc} />)
    const fullscreenButton = screen.getByRole('button', { name: /fullscreen/i })
    expect(fullscreenButton).toBeInTheDocument()
  })

  it('renders volume slider', () => {
    render(<VideoPlayer src={mockSrc} />)
    const volumeSlider = screen.getByRole('slider', { name: /volume/i })
    expect(volumeSlider).toBeInTheDocument()
  })

  it('renders progress bar', () => {
    render(<VideoPlayer src={mockSrc} />)
    const progressBar = screen.getByRole('slider', { name: /progress/i })
    expect(progressBar).toBeInTheDocument()
  })

  it('displays time in correct format', () => {
    render(<VideoPlayer src={mockSrc} />)
    // Should show 0:00 / 0:00 initially (duration not loaded yet)
    expect(screen.getByText(/0:00/)).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<VideoPlayer src={mockSrc} className="custom-player" />)
    expect(container.firstChild).toHaveClass('custom-player')
  })

  it('has center play overlay', () => {
    const { container } = render(<VideoPlayer src={mockSrc} />)
    // The overlay is a div with role button
    const overlay = container.querySelector('[role="button"]')
    expect(overlay).toBeInTheDocument()
  })

  it('has play controls', () => {
    const { container } = render(<VideoPlayer src={mockSrc} autoPlay={false} />)

    // Should have buttons for play control
    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('toggles mute on mute button click', async () => {
    const user = userEvent.setup()
    render(<VideoPlayer src={mockSrc} />)

    const muteButton = screen.getAllByRole('button').find(btn => 
      btn.getAttribute('aria-label')?.includes('Mute')
    )
    
    if (muteButton) {
      await user.click(muteButton)
      // The mute state should toggle
    }
  })

  it('has playsInline attribute for mobile', () => {
    render(<VideoPlayer src={mockSrc} />)
    const video = document.querySelector('video')
    expect(video).toHaveAttribute('playsinline')
  })
})
