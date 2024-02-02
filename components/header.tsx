import Cart from './shopping-cart'
import Navbar from './navbar'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='h-24 fixed inset-0 w-full z-10 flex justify-around items-center'>
      <nav className='justify-start relative flex-col lg:flex-row flex items-center gap-x-4'>
        <Link href='/' className='text-2xl font-bold uppercase'>
          Logo
        </Link>
        <Navbar />
      </nav>
      <Cart />
    </header>
  )
}
