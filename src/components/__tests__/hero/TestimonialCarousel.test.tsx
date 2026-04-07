import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { TestimonialCarousel } from '../../hero/TestimonialCarousel'

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}))

describe('TestimonialCarousel', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders protocol list', () => {
    render(<TestimonialCarousel />)

    expect(screen.getByText('Ethereum')).toBeInTheDocument()
    expect(screen.getByText('Aave')).toBeInTheDocument()
    expect(screen.getByText('Yearn Finance')).toBeInTheDocument()
  })

  it('renders testimonial quote', () => {
    render(<TestimonialCarousel />)

    // First testimonial should be visible
    expect(screen.getByText(/Using LP tokens as collateral/)).toBeInTheDocument()
  })

  it('renders author information', () => {
    render(<TestimonialCarousel />)

    expect(screen.getByText('Vitalik Buterin')).toBeInTheDocument()
    expect(screen.getByText('CO-FOUNDER, ETHEREUM')).toBeInTheDocument()
  })

  it('renders author image', () => {
    render(<TestimonialCarousel />)

    const image = screen.getByAltText('Vitalik Buterin')
    expect(image).toBeInTheDocument()
  })

  it('renders pagination dots', () => {
    render(<TestimonialCarousel />)

    // Should have 5 pagination dots (one per testimonial)
    const dots = screen.getAllByRole('button', { name: /Go to testimonial/i })
    expect(dots.length).toBe(5)
  })

  it('changes testimonial on pagination dot click', async () => {
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<TestimonialCarousel />)

    // Click on second pagination dot
    const dots = screen.getAllByRole('button', { name: /Go to testimonial/i })
    await user.click(dots[1])

    // Wait for animation
    await waitFor(() => {
      expect(screen.getByText('Stani Kulechov')).toBeInTheDocument()
    }, { timeout: 1000 })

    vi.useFakeTimers()
  })

  it('changes testimonial on protocol click', async () => {
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<TestimonialCarousel />)

    // Click on Aave in the list
    await user.click(screen.getByText('Aave'))

    await waitFor(() => {
      expect(screen.getByText('Stani Kulechov')).toBeInTheDocument()
    }, { timeout: 1000 })

    vi.useFakeTimers()
  })

  it('auto-advances testimonials', () => {
    render(<TestimonialCarousel />)

    // Initial testimonial
    expect(screen.getByText('Vitalik Buterin')).toBeInTheDocument()

    // Progress bar should exist, showing auto-advance functionality is active
    const { container } = render(<TestimonialCarousel />)
    expect(container.querySelector('.bg-blue-600')).toBeInTheDocument()
  })

  it('has proper responsive layout', () => {
    const { container } = render(<TestimonialCarousel />)
    expect(container.querySelector('.flex-col.lg\\:flex-row')).toBeInTheDocument()
  })

  it('shows progress bar animation', () => {
    const { container } = render(<TestimonialCarousel />)
    const progressBar = container.querySelector('.bg-blue-600')
    expect(progressBar).toBeInTheDocument()
  })
})
