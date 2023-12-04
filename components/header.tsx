import Image from 'next/image'
import petCat from '../public/alternative-logotipo.jpeg'
import Cart from './shopping-cart'
import Navbar from './navbar'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-white shadow-md h-[100px] w-full relative'>
      <nav className='w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-between relative flex-col lg:flex-row'>
        <div className='flex items-center gap-x-4'>
          <Link href='/'>
            <Image
              src={petCat}
              alt='The pet land merch'
              className='w-auto h-16 rounded-full'
            />
          </Link>
          <Navbar />
        </div>
        <div>
          <Cart />
        </div>
      </nav>
    </header>
  )
}
