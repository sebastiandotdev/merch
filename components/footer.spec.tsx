import Footer from './footer'
import { render, screen } from '@testing-library/react'

test('should render the footer', () => {
  render(<Footer />)
  const footer = screen.queryByRole('contentinfo') as HTMLElement
  expect(footer.tagName.toLowerCase()).toBe('footer')
  expect(footer.textContent).toContain('Powered by castrogarciajs')
  expect(footer.textContent).toContain('Source')
  expect(footer.textContent).toContain('Made with Nextjs')
  expect(footer.className).toContain('flex')
})

test('should render nodes children', () => {
  render(<Footer />)
  const footer = screen.queryByRole('contentinfo') as HTMLElement
  expect(footer.children.length).toBe(2)
  expect(footer.children[0].tagName.toLowerCase()).toBe('span')
  expect(footer.children[1].tagName.toLowerCase()).toBe('a')
})
