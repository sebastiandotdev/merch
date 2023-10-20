import Image from 'next/image'
import petCat from '@/static/bg-cat-pet-land.jpeg'
import petLogo from '@/static/petland.png'
import { Cart } from './cart'

export default function Header() {
  return (
    <header className='bg-hero-pattern h-[110px] sm:!h-[144px] w-full bg-cover bg-no-repeat relative'>
      <div className='rainfall w-full h-full absolute' />
      <nav className='w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-between relative'>
        <a href='/'>
          <Image
            src={petCat}
            alt='The pet land merch'
            className='w-auto h-12 rounded-full shadow'
          />
        </a>
        <h1 className='font-amiko text-2xl'>The pet land shop</h1>
        <Cart />
      </nav>
    </header>
  )
}
