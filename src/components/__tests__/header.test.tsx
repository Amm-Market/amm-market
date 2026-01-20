import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Header from '../header'

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}))

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Header', () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
  })

  it('renders the logo link', () => {
    render(<Header />)
    const logoLink = screen.getByRole('link', { name: '' })
    // Logo links to home
    expect(document.querySelector('a[href="/"]')).toBeInTheDocument()
  })

  it('renders Early Access link', () => {
    render(<Header />)
    const earlyAccessLinks = screen.getAllByText('Early Access')
    expect(earlyAccessLinks.length).toBeGreaterThan(0)
  })

  it('renders mobile menu button', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })
    expect(menuButton).toBeInTheDocument()
  })

  it('opens mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(menuButton)

    // Mobile menu should be visible
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu on second click', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })

    // Open
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    // Close
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('has Products dropdown trigger', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: 'Products menu' })).toBeInTheDocument()
  })

  it('has Resources dropdown trigger', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: 'Resources menu' })).toBeInTheDocument()
  })

  it('renders Developers text', () => {
    render(<Header />)
    const devElements = screen.getAllByText('Developers')
    expect(devElements.length).toBeGreaterThan(0)
  })

  it('has nav element', () => {
    const { container } = render(<Header />)
    const nav = container.querySelector('nav')
    expect(nav).toBeInTheDocument()
  })

  it('renders spacer div', () => {
    const { container } = render(<Header />)
    const spacer = container.querySelector('.h-14.md\\:h-24')
    expect(spacer).toBeInTheDocument()
  })

  it('has scroll event listener', () => {
    const addListenerSpy = vi.spyOn(window, 'addEventListener')

    render(<Header />)

    expect(addListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function), expect.anything())
  })

  it('shows header initially', () => {
    const { container } = render(<Header />)
    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('translate-y-0')
  })

  it('mobile menu has Products accordion', async () => {
    const user = userEvent.setup()
    render(<Header />)

    // Open mobile menu
    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))

    // Find Products button in mobile menu
    const productsButtons = screen.getAllByText('Products')
    expect(productsButtons.length).toBeGreaterThan(0)
  })

  it('mobile menu has Resources accordion', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))

    const resourcesButtons = screen.getAllByText('Resources')
    expect(resourcesButtons.length).toBeGreaterThan(0)
  })

  it('mobile menu has Developers accordion', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))

    const developersButtons = screen.getAllByText('Developers')
    expect(developersButtons.length).toBeGreaterThan(0)
  })
})
