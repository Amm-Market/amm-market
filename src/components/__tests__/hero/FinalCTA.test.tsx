import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import EarlyAccessCtaBox from '@/components/EarlyAccessCtaBox'

vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}))

vi.mock('next/image', () => ({
  default: ({ src, alt, fill: _fill, ...props }: { src: string; alt: string; fill?: boolean }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}))

describe('EarlyAccessCtaBox', () => {
  it('renders call-to-action heading', () => {
    render(<EarlyAccessCtaBox />)
    expect(screen.getByText('Take your LP journey further, faster')).toBeInTheDocument()
  })

  it('renders the external early access link', () => {
    render(<EarlyAccessCtaBox />)
    expect(screen.getByRole('link', { name: 'Early Access' })).toHaveAttribute('href', 'https://web.crypto.com/hub/market')
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

  it('renders the phone app preview image', () => {
    render(<EarlyAccessCtaBox />)
    expect(screen.getByAltText('App preview on phone')).toBeInTheDocument()
  })
})
