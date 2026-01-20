import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import ErrorBoundary from '../error-boundary'

describe('ErrorBoundary', () => {
  const originalConsoleError = console.error

  beforeEach(() => {
    console.error = vi.fn()
  })

  afterEach(() => {
    console.error = originalConsoleError
  })

  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <div>Test Content</div>
      </ErrorBoundary>
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('renders children initially without error', () => {
    render(
      <ErrorBoundary>
        <div>Content</div>
      </ErrorBoundary>
    )

    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('has proper component structure', () => {
    const { container } = render(
      <ErrorBoundary>
        <div data-testid="child">Content</div>
      </ErrorBoundary>
    )

    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  it('renders nested children', () => {
    render(
      <ErrorBoundary>
        <div>
          <span>Nested Content</span>
        </div>
      </ErrorBoundary>
    )

    expect(screen.getByText('Nested Content')).toBeInTheDocument()
  })

  it('registers error event listener', () => {
    const addListenerSpy = vi.spyOn(window, 'addEventListener')
    
    render(
      <ErrorBoundary>
        <div>Content</div>
      </ErrorBoundary>
    )

    expect(addListenerSpy).toHaveBeenCalledWith('error', expect.any(Function))
  })

  it('removes event listener on unmount', () => {
    const removeListenerSpy = vi.spyOn(window, 'removeEventListener')
    
    const { unmount } = render(
      <ErrorBoundary>
        <div>Content</div>
      </ErrorBoundary>
    )

    unmount()

    expect(removeListenerSpy).toHaveBeenCalledWith('error', expect.any(Function))
  })

  it('cleans up event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')

    const { unmount } = render(
      <ErrorBoundary>
        <div>Content</div>
      </ErrorBoundary>
    )

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('error', expect.any(Function))
  })
})
