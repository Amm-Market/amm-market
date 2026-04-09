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
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Docs')).toBeInTheDocument()
  })

  it('renders the brand description and social icons', () => {
    render(<Footer />)

    expect(screen.getByText(/Avana is an LP-collateral protocol on Aave v4/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Avana on Twitter' })).toHaveAttribute('href', 'https://twitter.com/dexmini')
    expect(screen.getByRole('link', { name: 'Avana on GitHub' })).toHaveAttribute('href', 'https://github.com/aave')
    expect(screen.getByRole('link', { name: 'Avana on Telegram' })).toHaveAttribute('href', 'https://t.me/dexmini')
    expect(screen.getByRole('link', { name: 'Avana on Discourse' })).toHaveAttribute('href', 'https://governance.aave.com')
  })

  it('renders top-level navigation links for desktop coverage', () => {
    const { container } = render(<Footer />)

    expect(container.querySelector('a[href="/borrow"]')).toHaveTextContent('Borrow')
    expect(container.querySelector('a[href="/invest"]')).toHaveTextContent('Invest')
    expect(container.querySelector('a[href="/earn"]')).toHaveTextContent('Earn')
    expect(container.querySelector('a[href="/platform"]')).toHaveTextContent('Platform')
  })

  it('renders Resources links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Lightpaper' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog')
    expect(screen.getByRole('link', { name: 'FAQ' })).toHaveAttribute('href', '/faq')
    expect(screen.getByRole('link', { name: 'Brand' })).toHaveAttribute('href', '/brand')
  })

  it('renders Docs links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Developers' })).toHaveAttribute('href', '/developers')
    expect(screen.getByRole('link', { name: 'Lightpaper' })).toHaveAttribute('href', '/lightpaper')
    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '/privacy')
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '/terms')
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
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Docs')).toBeInTheDocument()
    expect(screen.getByText('Social')).toBeInTheDocument()
  })
})
