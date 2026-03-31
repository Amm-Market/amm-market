import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
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
  it('renders the logo', () => {
    render(<Footer />)
    const logo = screen.getByAltText('Avana wordmark')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation sections', () => {
    render(<Footer />)

    expect(screen.getByText('Explore')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Developers')).toBeInTheDocument()
    expect(screen.getByText('Legal')).toBeInTheDocument()
  })

  it('renders top-level navigation links for desktop coverage', () => {
    const { container } = render(<Footer />)

    expect(container.querySelector('a[href="/borrow"]')).toHaveTextContent('Borrow')
    expect(container.querySelector('a[href="/invest"]')).toHaveTextContent('Invest')
    expect(container.querySelector('a[href="/earn"]')).toHaveTextContent('Earn')
    expect(container.querySelector('a[href="/platform"]')).toHaveTextContent('Platform')
  })

  it('renders Products links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Lightpaper' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Early Access' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Launch App' })).toHaveAttribute('href', '/')
  })

  it('renders Resources links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog')
    expect(screen.getByRole('link', { name: 'FAQ' })).toHaveAttribute('href', '/faq')
    expect(screen.getByRole('link', { name: 'Brand' })).toHaveAttribute('href', '/brand')
  })

  it('renders Developers links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Documentation' })).toHaveAttribute('href', '/developers')
    expect(screen.getByRole('link', { name: 'Introduction' })).toHaveAttribute('href', '/developers/introduction')
  })

  it('does not render social media links', () => {
    render(<Footer />)

    expect(screen.queryByRole('link', { name: 'Avana on X' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Avana on Discord' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Avana on GitHub' })).not.toBeInTheDocument()
  })

  it('renders legal links inside the footer sections', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '/privacy')
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '/terms')
  })

  it('renders the legal disclosure inside the footer', () => {
    render(<Footer />)

    expect(screen.getByText(/Borrowing against LP tokens involves risk/)).toBeInTheDocument()
    expect(screen.getByText(/This material is for informational purposes only/)).toBeInTheDocument()
  })

  it('does not render the copyright tagline', () => {
    render(<Footer />)

    expect(screen.queryByText(/Designed with love/)).not.toBeInTheDocument()
    expect(screen.queryByText(/©/)).not.toBeInTheDocument()
  })

  it('has proper footer element structure', () => {
    const { container } = render(<Footer />)

    const footer = container.querySelector('footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('site-content-shell')
  })

  it('renders the current footer section links', () => {
    render(<Footer />)

    expect(screen.getByText('Explore')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Developers')).toBeInTheDocument()
    expect(screen.getByText('Legal')).toBeInTheDocument()
  })
})
