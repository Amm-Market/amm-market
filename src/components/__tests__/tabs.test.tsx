import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs'

describe('Tabs', () => {
  it('renders tabs with default value', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )

    expect(screen.getByText('Tab 1')).toBeInTheDocument()
    expect(screen.getByText('Tab 2')).toBeInTheDocument()
    expect(screen.getByText('Content 1')).toBeInTheDocument()
  })

  it('switches content when clicking tabs', async () => {
    const user = userEvent.setup()

    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )

    // Initially shows tab1 content
    expect(screen.getByText('Content 1')).toBeInTheDocument()

    // Click tab2
    await user.click(screen.getByText('Tab 2'))
    expect(screen.getByText('Content 2')).toBeInTheDocument()
  })

  it('applies active state to selected tab', async () => {
    const user = userEvent.setup()

    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )

    const tab1 = screen.getByText('Tab 1')
    const tab2 = screen.getByText('Tab 2')

    // Tab 1 is initially active
    expect(tab1).toHaveAttribute('data-state', 'active')
    expect(tab2).toHaveAttribute('data-state', 'inactive')

    // Click tab2
    await user.click(tab2)
    expect(tab1).toHaveAttribute('data-state', 'inactive')
    expect(tab2).toHaveAttribute('data-state', 'active')
  })

  it('applies custom className to Tabs', () => {
    render(
      <Tabs defaultValue="tab1" className="custom-tabs">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content</TabsContent>
      </Tabs>
    )

    expect(screen.getByRole('tablist').closest('[data-slot="tabs"]')).toHaveClass('custom-tabs')
  })

  it('applies custom className to TabsList', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList className="custom-list">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content</TabsContent>
      </Tabs>
    )

    expect(screen.getByRole('tablist')).toHaveClass('custom-list')
  })

  it('has data-slot attributes', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content</TabsContent>
      </Tabs>
    )

    expect(screen.getByRole('tablist')).toHaveAttribute('data-slot', 'tabs-list')
    expect(screen.getByRole('tab')).toHaveAttribute('data-slot', 'tabs-trigger')
    expect(screen.getByRole('tabpanel')).toHaveAttribute('data-slot', 'tabs-content')
  })

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup()

    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
        <TabsContent value="tab3">Content 3</TabsContent>
      </Tabs>
    )

    // Focus on first tab
    screen.getByText('Tab 1').focus()

    // Press right arrow to move to tab2
    await user.keyboard('{ArrowRight}')
    expect(screen.getByText('Tab 2')).toHaveFocus()

    // Press right arrow to move to tab3
    await user.keyboard('{ArrowRight}')
    expect(screen.getByText('Tab 3')).toHaveFocus()
  })

  it('handles disabled tabs', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" disabled>Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )

    expect(screen.getByText('Tab 2')).toBeDisabled()
  })
})
