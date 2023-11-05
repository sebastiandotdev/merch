import Image from 'next/image'
import exampleImage from '../public/example-photo.jpg'
import Link from 'next/link'
import { IconCart } from './icons'

export default function CardBuy() {
  return (
    <Link href='#' className='group'>
      <header className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 relative'>
        <aside className='w-full h-full flex items-center justify-center bg-[rgba(255,255,255,0.6)] opacity-0 hover:opacity-90 transition-opacity z-10 absolute duration-500'>
          <IconCart size={30} />
        </aside>
        <Image
          src={exampleImage}
          alt='example'
          width={400}
          height={400}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </header>
      <div className='mt-4 flex justify-between'>
        <div className='container px-0.5'>
          <h3 className='text-md text-gray-700 font-amiko'>Basic Tee</h3>
          <p className='mt-1 text-sm text-gray-500 font-amiko'>Aspen White</p>
        </div>
        <p className='text-md font-medium text-gray-900 font-amiko'>$10.000</p>
      </div>
    </Link>
  )
}
