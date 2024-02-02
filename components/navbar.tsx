import Link from 'next/link'
import { navbarMerch } from '../lib/utils'

export default function Navbar() {
  return (
    <ul className='flex justify-center items-center gap-5 mx-7' role='list'>
      {navbarMerch.map((link) => (
        <li key={link.id} id='li'>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}
