import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import EarlyAccessCtaBox from '@/components/EarlyAccessCtaBox'

describe('EarlyAccessCtaBox', () => {
  it('renders call-to-action heading', () => {
    render(<EarlyAccessCtaBox />)
    expect(screen.getByText('Take your LP journey further, faster')).toBeInTheDocument()
  })

  it('renders Early Access link', () => {
    render(<EarlyAccessCtaBox />)
    const link = screen.getByRole('link', { name: 'Early Access' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://web.crypto.com/hub/market')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('has rounded container and section layout', () => {
    const { container } = render(<EarlyAccessCtaBox />)
    expect(container.querySelector('.rounded-2xl')).toBeInTheDocument()
    expect(container.querySelector('section.border-t')).toBeInTheDocument()
  })

  it('renders as section element', () => {
    const { container } = render(<EarlyAccessCtaBox />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })
})
