import NavbarList from './navbar'
import { render, screen } from '@testing-library/react'

test('should render the navbar', () => {
  render(<NavbarList />)
  const navbar = screen.queryByRole('list') as HTMLUListElement

  const li = navbar.querySelector('#li') as HTMLLIElement
  expect(li.tagName.toLowerCase()).toBe('li')
  expect(li.textContent).toBe('Home')
  expect(li.textContent).not.toBe('Shop')
  expect(li.textContent).not.toBe('About')
})
