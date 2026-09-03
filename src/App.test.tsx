import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('AI PDF Intelligence', () => {
  it('renders the document workspace', () => {
    render(<App />)
    expect(screen.getByText('DOCUMENA')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Ask with context/i })).toBeInTheDocument()
    expect(screen.getAllByText('Q3 Product Strategy').length).toBeGreaterThan(0)
  })
})
