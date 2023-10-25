import { render, screen, within } from '@testing-library/react'

test('Example', () => {
  render(<div>Example</div>)
  const element = screen.getByText('Example')
  expect(element).toBeDefined()
})
