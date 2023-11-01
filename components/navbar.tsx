import Link from 'next/link'
import { navbarMerch } from '../lib/utils'

export default function Navbar() {
  return (
    <ul className='flex justify-center items-center gap-5 mx-7'>
      {navbarMerch.map((link) => (
        <li key={link.id}>
          <Link href={link.href} className='hover:underline font-amiko'>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
