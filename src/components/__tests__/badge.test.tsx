import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Badge } from '../ui/badge'

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('applies default variant styling', () => {
    render(<Badge>Default</Badge>)
    const badge = screen.getByText('Default')
    expect(badge).toHaveClass('bg-primary')
  })

  it('applies secondary variant styling', () => {
    render(<Badge variant="secondary">Secondary</Badge>)
    const badge = screen.getByText('Secondary')
    expect(badge).toHaveClass('bg-secondary')
  })

  it('applies destructive variant styling', () => {
    render(<Badge variant="destructive">Destructive</Badge>)
    const badge = screen.getByText('Destructive')
    expect(badge).toHaveClass('bg-destructive')
  })

  it('applies outline variant styling', () => {
    render(<Badge variant="outline">Outline</Badge>)
    const badge = screen.getByText('Outline')
    expect(badge).toHaveClass('text-foreground')
  })

  it('applies custom className', () => {
    render(<Badge className="custom-class">Custom</Badge>)
    const badge = screen.getByText('Custom')
    expect(badge).toHaveClass('custom-class')
  })

  it('renders as a span by default', () => {
    render(<Badge>Span</Badge>)
    const badge = screen.getByText('Span')
    expect(badge.tagName).toBe('SPAN')
  })

  it('can render as child element with asChild', () => {
    render(
      <Badge asChild>
        <a href="#">Link Badge</a>
      </Badge>
    )
    const badge = screen.getByText('Link Badge')
    expect(badge.tagName).toBe('A')
  })

  it('has data-slot attribute', () => {
    render(<Badge>Slotted</Badge>)
    const badge = screen.getByText('Slotted')
    expect(badge).toHaveAttribute('data-slot', 'badge')
  })

  it('is inline-flex display', () => {
    render(<Badge>Flex</Badge>)
    const badge = screen.getByText('Flex')
    expect(badge).toHaveClass('inline-flex')
  })
})
