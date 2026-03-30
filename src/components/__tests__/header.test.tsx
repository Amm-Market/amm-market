import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import Header from '../header'

const { pushMock } = vi.hoisted(() => ({
  pushMock: vi.fn(),
}))

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
  useRouter: () => ({
    push: pushMock,
  }),
}))

vi.mock('gt-next/client', () => ({
  useGT: () => (value: string) => value,
  useLocaleSelector: () => ({
    locale: 'en-US',
    locales: ['en-US', 'es-ES', 'fr-FR'],
    setLocale: vi.fn(),
    getLocaleProperties: (locale: string) => {
      const properties: Record<string, Record<string, string>> = {
        'en-US': {
          code: 'en-US',
          name: 'English (United States)',
          nativeName: 'English (United States)',
          languageName: 'English',
          nativeLanguageName: 'English',
          nameWithRegionCode: 'English (United States)',
          nativeNameWithRegionCode: 'English (United States)',
          regionName: 'United States',
          nativeRegionName: 'United States',
        },
        'es-ES': {
          code: 'es-ES',
          name: 'Spanish (Spain)',
          nativeName: 'Español (España)',
          languageName: 'Spanish',
          nativeLanguageName: 'Español',
          nameWithRegionCode: 'Spanish (Spain)',
          nativeNameWithRegionCode: 'Español (España)',
          regionName: 'Spain',
          nativeRegionName: 'España',
        },
        'fr-FR': {
          code: 'fr-FR',
          name: 'French (France)',
          nativeName: 'Français (France)',
          languageName: 'French',
          nativeLanguageName: 'Français',
          nameWithRegionCode: 'French (France)',
          nativeNameWithRegionCode: 'Français (France)',
          regionName: 'France',
          nativeRegionName: 'France',
        },
      }

      return properties[locale]
    },
  }),
}))

describe('Header', () => {
  it('renders the home logo link', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'AMM Market' })).toHaveAttribute('href', '/')
  })

  it('renders the direct desktop navigation links', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Open Spoke' })).toHaveAttribute('href', '/open-spoke')
    expect(screen.getByRole('link', { name: 'Stable Spoke' })).toHaveAttribute('href', '/stable-spoke')
    expect(screen.getByRole('link', { name: 'Bluechip Spoke' })).toHaveAttribute('href', '/bluechip-spoke')
    expect(screen.getByRole('link', { name: 'Developers' })).toHaveAttribute('href', '/developers')
  })

  it('renders desktop CTA links', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Early Access' })).toHaveAttribute('href', '/early-access')
    expect(screen.getByRole('link', { name: 'Launch App' })).toHaveAttribute('href', '/webapp')
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

  it('renders language picker triggers in desktop and mobile chrome', () => {
    render(<Header />)

    expect(screen.getAllByRole('button', { name: 'Choose language' })).toHaveLength(2)
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
      '/open-spoke',
      '/stable-spoke',
      '/bluechip-spoke',
      '/developers',
      '/lightpaper',
      '/blog',
      '/early-access',
      '/webapp',
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

  it('opens the language dialog from the picker trigger', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getAllByRole('button', { name: 'Choose language' })[0])

    expect(screen.getByRole('dialog', { name: 'Language and region' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
    expect(screen.getByText('Español')).toBeInTheDocument()
  })
})
