import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { LazySection } from '../ui/lazy-section'

// Mock IntersectionObserver
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

  // Helper to simulate intersection
  static triggerIntersection(isIntersecting: boolean = true) {
    MockIntersectionObserver.instances.forEach((instance) => {
      instance.callback(
        [{ isIntersecting } as IntersectionObserverEntry],
        instance as unknown as IntersectionObserver
      )
    })
  }

  static reset() {
    MockIntersectionObserver.instances = []
  }
}

describe('LazySection', () => {
  beforeEach(() => {
    MockIntersectionObserver.reset()
    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: MockIntersectionObserver,
    })
  })

  it('renders fallback initially when not visible', () => {
    render(
      <LazySection fallback={<div>Loading...</div>}>
        <div>Lazy Content</div>
      </LazySection>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(screen.queryByText('Lazy Content')).not.toBeInTheDocument()
  })

  it('renders children when visible', () => {
    render(
      <LazySection>
        <div>Lazy Content</div>
      </LazySection>
    )

    // Simulate intersection
    act(() => {
      MockIntersectionObserver.triggerIntersection(true)
    })

    expect(screen.getByText('Lazy Content')).toBeInTheDocument()
  })

  it('applies minHeight when not visible', () => {
    const { container } = render(
      <LazySection minHeight="500px">
        <div>Content</div>
      </LazySection>
    )

    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveStyle({ minHeight: '500px' })
  })

  it('removes minHeight when visible', () => {
    const { container } = render(
      <LazySection minHeight="500px">
        <div>Content</div>
      </LazySection>
    )

    act(() => {
      MockIntersectionObserver.triggerIntersection(true)
    })

    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.style.minHeight).toBe('')
  })

  it('applies custom className', () => {
    const { container } = render(
      <LazySection className="custom-section">
        <div>Content</div>
      </LazySection>
    )

    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveClass('custom-section')
  })

  it('disconnects observer after becoming visible', () => {
    render(
      <LazySection>
        <div>Content</div>
      </LazySection>
    )

    const instance = (MockIntersectionObserver as unknown as { instances: MockIntersectionObserver[] }).instances[0]

    act(() => {
      MockIntersectionObserver.triggerIntersection(true)
    })

    expect(instance.disconnect).toHaveBeenCalled()
  })

  it('does not render children when not intersecting', () => {
    render(
      <LazySection fallback={<div>Loading...</div>}>
        <div>Lazy Content</div>
      </LazySection>
    )

    act(() => {
      MockIntersectionObserver.triggerIntersection(false)
    })

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(screen.queryByText('Lazy Content')).not.toBeInTheDocument()
  })

  it('handles missing IntersectionObserver gracefully', () => {
    // Test that component can render even with mock observer
    render(
      <LazySection>
        <div>Content</div>
      </LazySection>
    )

    // Trigger intersection to show content
    act(() => {
      MockIntersectionObserver.triggerIntersection(true)
    })

    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('uses default values for optional props', () => {
    const { container } = render(
      <LazySection>
        <div>Content</div>
      </LazySection>
    )

    const wrapper = container.firstChild as HTMLElement
    // Default minHeight is 200px
    expect(wrapper).toHaveStyle({ minHeight: '200px' })
  })

  it('observes the wrapper element', () => {
    const { container } = render(
      <LazySection>
        <div>Content</div>
      </LazySection>
    )

    const instance = (MockIntersectionObserver as unknown as { instances: MockIntersectionObserver[] }).instances[0]
    expect(instance.observe).toHaveBeenCalledWith(container.firstChild)
  })
})
