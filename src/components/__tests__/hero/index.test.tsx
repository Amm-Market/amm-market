import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { HeroSection } from '../../hero/index'

// Mock all hero sub-components for faster tests
vi.mock('../../hero/HeroHeader', () => ({
  HeroHeader: () => <div data-testid="hero-header">HeroHeader</div>,
}))

vi.mock('../../hero/TrustedByMarquee', () => ({
  TrustedByMarquee: () => <div data-testid="trusted-marquee">TrustedByMarquee</div>,
}))

vi.mock('../../hero/HowItWorks', () => ({
  HowItWorks: () => <div data-testid="how-it-works">HowItWorks</div>,
}))

vi.mock('../../hero/DashboardPreview', () => ({
  DashboardPreview: () => <div data-testid="dashboard-preview">DashboardPreview</div>,
}))

vi.mock('../../hero/BorrowAcrossDexs', () => ({
  BorrowAcrossDexs: () => <div data-testid="borrow-dexs">BorrowAcrossDexs</div>,
}))

vi.mock('../../hero/PoolTicker', () => ({
  PoolTicker: () => <div data-testid="pool-ticker">PoolTicker</div>,
}))

vi.mock('../../hero/GetMoreSection', () => ({
  GetMoreSection: () => <div data-testid="get-more">GetMoreSection</div>,
}))

vi.mock('../../hero/BorrowConfidence', () => ({
  BorrowConfidence: () => <div data-testid="borrow-confidence">BorrowConfidence</div>,
}))

vi.mock('../../hero/AboutAave', () => ({
  AboutAave: () => <div data-testid="about-aave">AboutAave</div>,
}))

vi.mock('../../hero/TestimonialCarousel', () => ({
  TestimonialCarousel: () => <div data-testid="testimonial-carousel">TestimonialCarousel</div>,
}))

vi.mock('../../hero/FAQSection', () => ({
  FAQSection: () => <div data-testid="faq-section">FAQSection</div>,
}))

vi.mock('../../hero/FinalCTA', () => ({
  FinalCTA: () => <div data-testid="final-cta">FinalCTA</div>,
}))

// Mock IntersectionObserver for lazy sections
class MockIntersectionObserver {
  private callback: IntersectionObserverCallback
  private static instances: MockIntersectionObserver[] = []

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    MockIntersectionObserver.instances.push(this)
  }

  observe = vi.fn()
  disconnect = vi.fn()
  unobserve = vi.fn()

  static triggerAll() {
    MockIntersectionObserver.instances.forEach((instance) => {
      instance.callback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        instance as unknown as IntersectionObserver
      )
    })
  }

  static reset() {
    MockIntersectionObserver.instances = []
  }
}

describe('HeroSection (index)', () => {
  beforeEach(() => {
    MockIntersectionObserver.reset()
    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: MockIntersectionObserver,
    })
  })

  it('renders above-the-fold content immediately', () => {
    render(<HeroSection />)

    expect(screen.getByTestId('hero-header')).toBeInTheDocument()
    expect(screen.getByTestId('trusted-marquee')).toBeInTheDocument()
    expect(screen.getByTestId('how-it-works')).toBeInTheDocument()
    expect(screen.getByTestId('dashboard-preview')).toBeInTheDocument()
  })

  it('renders lazy-loaded sections when visible', () => {
    render(<HeroSection />)

    // Trigger intersection for all lazy sections
    act(() => {
      MockIntersectionObserver.triggerAll()
    })

    expect(screen.getByTestId('borrow-dexs')).toBeInTheDocument()
    expect(screen.getByTestId('pool-ticker')).toBeInTheDocument()
    expect(screen.getByTestId('get-more')).toBeInTheDocument()
    expect(screen.getByTestId('borrow-confidence')).toBeInTheDocument()
    expect(screen.getByTestId('about-aave')).toBeInTheDocument()
    expect(screen.getByTestId('testimonial-carousel')).toBeInTheDocument()
    expect(screen.getByTestId('faq-section')).toBeInTheDocument()
    expect(screen.getByTestId('final-cta')).toBeInTheDocument()
  })

  it('has proper wrapper styling', () => {
    const { container } = render(<HeroSection />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveClass('min-h-screen', 'bg-white', 'overflow-hidden')
  })

  it('renders divider between sections', () => {
    const { container } = render(<HeroSection />)
    expect(container.querySelector('.border-b.border-gray-200')).toBeInTheDocument()
  })

  it('wraps content in max-width container', () => {
    const { container } = render(<HeroSection />)
    expect(container.querySelector('.max-w-7xl')).toBeInTheDocument()
  })
})
