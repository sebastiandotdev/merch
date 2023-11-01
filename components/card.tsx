import Link from 'next/link'
import { IconCart } from './icons'
import Image from 'next/image'
import exampleImage from '../public/example-photo.jpg'

export default function Card() {
  return (
    <Link href='#' className='gruop' role='link'>
      <header className='w-full relative border-2 border-gray-200 rounded-xl'>
        <article className='w-full h-full flex items-center justify-center bg-[rgba(255,255,255,0.6)] opacity-0 hover:opacity-100 transition-opacity z-10 absolute duration-500'>
          <IconCart size={30} />
        </article>
        <figure className='aspect-square w-full bg-white rounded-xl overflow-hidden'>
          <Image
            src={exampleImage}
            width={400}
            height={400}
            alt='example'
            className='w-full h-full object-center object-contain absolute block'
          />
        </figure>
      </header>
      <footer className='flex items-center justify-between mt-3'>
        <h3 className='text-lg text-gray-800 font-medium relative'>
          Example
          <span className='bg-gray-800 h-[3px] w-0 group-hover:!w-full absolute bottom-[-2px] left-0 transition-all duration-500'></span>
        </h3>
        <strong className='text-lg font-bold text-gray-800'>$19.00</strong>
      </footer>
    </Link>
  )
}
