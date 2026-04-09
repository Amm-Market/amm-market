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
    expect(screen.getAllByAltText('Avana icon')).toHaveLength(2)
    expect(screen.getAllByAltText('Avana wordmark')).toHaveLength(2)
  })

  it('renders the desktop menu groups and utility buttons', () => {
    render(<Header />)

    expect(screen.getByRole('button', { name: 'Products' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Resources' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Developers' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Lightpaper' })).toHaveAttribute('href', '/lightpaper')
    expect(screen.getByRole('link', { name: 'Try Sandbox' })).toHaveAttribute('href', 'https://app.avana.cc')
    expect(screen.getByRole('link', { name: 'Try Sandbox' })).toHaveAttribute('target', '_blank')
  })

  it('does not render the old grouped desktop menu triggers', () => {
    render(<Header />)

    expect(screen.queryByRole('button', { name: 'Products menu' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Resources menu' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Developers menu' })).not.toBeInTheDocument()
  })

  it('opens the products desktop menu with numbered rows', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Products' }))

    const productsPanel = document.getElementById('desktop-menu-products')
    expect(productsPanel).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Products' })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Borrow' })).toHaveAttribute('href', '/borrow')
    expect(screen.getByRole('link', { name: 'Invest' })).toHaveAttribute('href', '/invest')
    expect(screen.getByRole('link', { name: 'Earn' })).toHaveAttribute('href', '/earn')
    expect(screen.getByRole('link', { name: 'Platform' })).toHaveAttribute('href', '/platform')
    expect(within(productsPanel as HTMLElement).getAllByText('01').length).toBeGreaterThan(0)
    expect(within(productsPanel as HTMLElement).getAllByText('03').length).toBeGreaterThan(0)
  })

  it('keeps Lightpaper out of the resources menu while exposing it as a desktop utility button', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Resources' }))

    const resourcesPanel = document.getElementById('desktop-menu-resources')
    expect(resourcesPanel).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Lightpaper' })).toHaveAttribute('href', '/lightpaper')
    expect(within(resourcesPanel as HTMLElement).queryByRole('link', { name: 'Lightpaper' })).not.toBeInTheDocument()
    expect(within(resourcesPanel as HTMLElement).getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
    expect(within(resourcesPanel as HTMLElement).getByRole('link', { name: 'Brand' })).toHaveAttribute('href', '/brand')
    expect(within(resourcesPanel as HTMLElement).queryByRole('link', { name: 'Privacy' })).not.toBeInTheDocument()
  })

  it('switches desktop menus and shows the matching panel content', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Products' }))
    expect(screen.getByRole('link', { name: 'Borrow' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Developers' }))

    const developersPanel = document.getElementById('desktop-menu-developers')
    expect(developersPanel).toBeInTheDocument()
    expect(within(developersPanel as HTMLElement).getAllByRole('link', { name: 'Introduction' })[0]).toHaveAttribute('href', '/developers/introduction/key-concepts')
    expect(within(developersPanel as HTMLElement).getAllByRole('link', { name: 'Overview' })[0]).toHaveAttribute('href', '/developers')
    expect(within(developersPanel as HTMLElement).getAllByRole('link', { name: 'Architecture' })[0]).toHaveAttribute('href', '/developers/architecture')
    expect(within(developersPanel as HTMLElement).getAllByRole('link', { name: 'Liquidation' })[0]).toHaveAttribute('href', '/developers/liquidation')
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
      '/borrow',
      '/invest',
      '/earn',
      '/platform',
      '/about',
      '/lightpaper',
      '/blog',
      '/faq',
      '/developers',
      'https://app.avana.cc',
    ])

    expect(within(mobileNav).getByRole('link', { name: /^Borrow01$/ })).toHaveAttribute('href', '/borrow')
    expect(within(mobileNav).getByText('01')).toBeInTheDocument()
    expect(within(mobileNav).getByText('05')).toBeInTheDocument()
    expect(within(mobileNav).getByText('09')).toBeInTheDocument()
    expect(within(mobileNav).getByText('10')).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: /^About05$/ })).toHaveAttribute('href', '/about')
    expect(within(mobileNav).getByRole('link', { name: /^Try Sandbox10$/ })).toHaveAttribute('href', 'https://app.avana.cc')
    expect(within(mobileNav).queryByRole('link', { name: 'Launch App' })).not.toBeInTheDocument()
    expect(within(mobileNav).queryByRole('link', { name: 'Early Access' })).not.toBeInTheDocument()
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
