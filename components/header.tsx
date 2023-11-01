import Image from 'next/image'
import petCat from '../public/not-bg-cat-pet.png'
import Cart from './cart'
import Navbar from './navbar'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className='border-b border-b-gray-300 text-center p-1'>
        <small className='font-amiko'>Welcome to our Shop</small>
      </header>
      <header className='bg-white shadow-md h-[100px] w-full relative'>
        <nav className='w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-between relative'>
          <div className='flex items-center gap-x-4'>
            <Link href='/'>
              <Image
                src={petCat}
                alt='The pet land merch'
                className='w-auto h-12 rounded-full'
              />
            </Link>
            <Navbar />
          </div>
          <div>
            <Cart />
          </div>
        </nav>
      </header>
    </>
  )
}
