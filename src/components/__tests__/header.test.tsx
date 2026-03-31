import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import Header from '../header'

vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}))

vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}))

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Header', () => {
  it('renders the home logo link', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Avana' })).toHaveAttribute('href', '/')
  })

  it('renders the direct desktop navigation links', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Borrow' })).toHaveAttribute('href', '/borrow')
    expect(screen.getByRole('link', { name: 'Invest' })).toHaveAttribute('href', '/invest')
    expect(screen.getByRole('link', { name: 'Earn' })).toHaveAttribute('href', '/earn')
    expect(screen.getByRole('link', { name: 'Platform' })).toHaveAttribute('href', '/platform')
    expect(screen.queryByRole('link', { name: 'Developers' })).not.toBeInTheDocument()
  })

  it('renders desktop CTA links', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Early Access' })).toHaveAttribute('href', '/early-access')
    expect(screen.getByRole('link', { name: 'Launch App' })).toHaveAttribute('href', '/')
  })

  it('does not render the old grouped desktop menu triggers', () => {
    render(<Header />)

    expect(screen.queryByRole('button', { name: 'Products menu' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Resources menu' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Developers menu' })).not.toBeInTheDocument()
  })

  it('renders the mobile menu button', () => {
    const { container } = render(<Header />)

    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    expect(menuButton).toBeInTheDocument()
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveClass('rounded-full')
    expect(container.querySelector('[data-framer-name="Navigation Mobile"]')).toBeInTheDocument()
    expect(container.querySelector('[data-framer-name="Container"]')).toBeInTheDocument()
    expect(container.querySelector('[data-framer-name="Menu Button"]')).toBeInTheDocument()
  })

  it('opens the full-screen mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
  })

  it('closes the mobile menu from the close button', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))

    await waitFor(() => {
      expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    })
  })

  it('renders the mobile links in the planned order', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const mobileLinks = within(mobileNav).getAllByRole('link')

    expect(mobileLinks.map((link) => link.getAttribute('href'))).toEqual([
      '/',
      '/borrow',
      '/invest',
      '/earn',
      '/platform',
      '/lightpaper',
      '/developers',
      '/blog',
      '/early-access',
      '/',
    ])

    expect(within(mobileNav).getByText('01')).toBeInTheDocument()
    expect(within(mobileNav).getByText('09')).toBeInTheDocument()
  })

  it('does not render grouped mobile headings', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).queryByText('Products')).not.toBeInTheDocument()
    expect(within(mobileNav).queryByText('Resources')).not.toBeInTheDocument()
  })

  it('closes the mobile menu after clicking a mobile link', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', { name: /Blog/i }))

    await waitFor(() => {
      expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    })
  })
})
