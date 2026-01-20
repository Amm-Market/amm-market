import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Footer from '../footer'

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}))

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}))

describe('Footer', () => {
  beforeEach(() => {
    // Mock Date for consistent year
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-20'))
  })

  it('renders the logo', () => {
    render(<Footer />)
    const logo = screen.getByAltText('Aave Logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation sections', () => {
    render(<Footer />)

    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Developers')).toBeInTheDocument()
  })

  it('renders Products links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Lightpaper' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Early Access' })).toBeInTheDocument()
  })

  it('renders Resources links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Research' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Community' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Brand' })).toBeInTheDocument()
  })

  it('renders Developers links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Documentation' })).toHaveAttribute('href', '/developers')
    expect(screen.getByRole('link', { name: 'Hooks' })).toHaveAttribute('href', '/developers/hooks')
  })

  it('renders social media links', () => {
    render(<Footer />)

    const links = screen.getAllByRole('link')
    const hrefs = links.map(link => link.getAttribute('href'))

    // Check for external links
    expect(hrefs.some(href => href?.includes('twitter.com'))).toBe(true)
    expect(hrefs.some(href => href?.includes('discord.gg'))).toBe(true)
    expect(hrefs.some(href => href?.includes('github.com'))).toBe(true)
  })

  it('renders legal links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '/privacy')
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '/terms')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)

    expect(screen.getByText(/© 2026/)).toBeInTheDocument()
    expect(screen.getByText(/Designed with love/)).toBeInTheDocument()
  })

  it('has proper footer element structure', () => {
    const { container } = render(<Footer />)

    const footer = container.querySelector('footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('mx-auto', 'w-full', 'max-w-5xl')
  })
})
