import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SectionHeader } from '../shared/SectionHeader'

describe('SectionHeader', () => {
  it('renders title', () => {
    render(<SectionHeader title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders description when provided', () => {
    render(<SectionHeader title="Title" description="Test description" />)
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('does not render description when not provided', () => {
    const { container } = render(<SectionHeader title="Title Only" />)
    
    // Should only have the title element, no paragraph
    const paragraphs = container.querySelectorAll('p')
    expect(paragraphs.length).toBe(0)
  })

  it('applies custom className', () => {
    const { container } = render(
      <SectionHeader title="Title" className="custom-class" />
    )

    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('title has correct heading styling', () => {
    render(<SectionHeader title="Styled Title" />)
    const title = screen.getByText('Styled Title')

    expect(title).toHaveClass('type-marketing-section-title', 'text-gray-900')
  })

  it('description has correct styling', () => {
    render(<SectionHeader title="Title" description="Styled Description" />)
    const description = screen.getByText('Styled Description')

    expect(description).toHaveClass('type-marketing-section-lead', 'text-gray-600')
  })

  it('container has flex-col layout', () => {
    const { container } = render(<SectionHeader title="Title" />)
    expect(container.firstChild).toHaveClass('flex', 'flex-col', 'gap-2')
  })

  it('title is an h2 element', () => {
    render(<SectionHeader title="Heading Level" />)
    const title = screen.getByRole('heading', { level: 2 })
    expect(title).toHaveTextContent('Heading Level')
  })
})
