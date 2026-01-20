import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '../ui/card'

describe('Card', () => {
  it('renders Card with children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies default styling', () => {
    render(<Card data-testid="card">Content</Card>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('bg-card', 'rounded-xl', 'border', 'shadow-sm')
  })

  it('applies custom className', () => {
    render(<Card className="custom-card">Content</Card>)
    expect(screen.getByText('Content')).toHaveClass('custom-card')
  })

  it('has data-slot attribute', () => {
    render(<Card>Content</Card>)
    expect(screen.getByText('Content')).toHaveAttribute('data-slot', 'card')
  })
})

describe('CardHeader', () => {
  it('renders CardHeader with children', () => {
    render(<CardHeader>Header</CardHeader>)
    expect(screen.getByText('Header')).toBeInTheDocument()
  })

  it('has data-slot attribute', () => {
    render(<CardHeader>Header</CardHeader>)
    expect(screen.getByText('Header')).toHaveAttribute('data-slot', 'card-header')
  })
})

describe('CardTitle', () => {
  it('renders CardTitle with children', () => {
    render(<CardTitle>Title</CardTitle>)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  it('has font-semibold class', () => {
    render(<CardTitle>Title</CardTitle>)
    expect(screen.getByText('Title')).toHaveClass('font-semibold')
  })

  it('has data-slot attribute', () => {
    render(<CardTitle>Title</CardTitle>)
    expect(screen.getByText('Title')).toHaveAttribute('data-slot', 'card-title')
  })
})

describe('CardDescription', () => {
  it('renders CardDescription with children', () => {
    render(<CardDescription>Description</CardDescription>)
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('has muted text styling', () => {
    render(<CardDescription>Description</CardDescription>)
    expect(screen.getByText('Description')).toHaveClass('text-muted-foreground')
  })

  it('has data-slot attribute', () => {
    render(<CardDescription>Description</CardDescription>)
    expect(screen.getByText('Description')).toHaveAttribute('data-slot', 'card-description')
  })
})

describe('CardContent', () => {
  it('renders CardContent with children', () => {
    render(<CardContent>Content</CardContent>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('has padding class', () => {
    render(<CardContent>Content</CardContent>)
    expect(screen.getByText('Content')).toHaveClass('px-6')
  })

  it('has data-slot attribute', () => {
    render(<CardContent>Content</CardContent>)
    expect(screen.getByText('Content')).toHaveAttribute('data-slot', 'card-content')
  })
})

describe('CardFooter', () => {
  it('renders CardFooter with children', () => {
    render(<CardFooter>Footer</CardFooter>)
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  it('has flex items-center styling', () => {
    render(<CardFooter>Footer</CardFooter>)
    expect(screen.getByText('Footer')).toHaveClass('flex', 'items-center')
  })

  it('has data-slot attribute', () => {
    render(<CardFooter>Footer</CardFooter>)
    expect(screen.getByText('Footer')).toHaveAttribute('data-slot', 'card-footer')
  })
})

describe('CardAction', () => {
  it('renders CardAction with children', () => {
    render(<CardAction>Action</CardAction>)
    expect(screen.getByText('Action')).toBeInTheDocument()
  })

  it('has data-slot attribute', () => {
    render(<CardAction>Action</CardAction>)
    expect(screen.getByText('Action')).toHaveAttribute('data-slot', 'card-action')
  })
})

describe('Card composition', () => {
  it('renders full card with all components', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
          <CardDescription>A test card description</CardDescription>
          <CardAction>
            <button>Edit</button>
          </CardAction>
        </CardHeader>
        <CardContent>Main content here</CardContent>
        <CardFooter>
          <button>Submit</button>
        </CardFooter>
      </Card>
    )

    expect(screen.getByText('Test Card')).toBeInTheDocument()
    expect(screen.getByText('A test card description')).toBeInTheDocument()
    expect(screen.getByText('Main content here')).toBeInTheDocument()
    expect(screen.getByText('Edit')).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })
})
