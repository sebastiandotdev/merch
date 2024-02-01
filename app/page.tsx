import Image from 'next/image'
import imageCat from '../public/background-pet-cat.jpg'
import Postgres from './postgres'

export default async function HomePage() {
  return (
    <>
      <section className='md:h-screen relative flex items-start lg:items-center justify-start -z-10'>
        <div className='bg-gray-400 opacity-30 w-full absolute inset-0 lg:!h-full'></div>
        <figure className='h-full'>
          <Image
            src={imageCat}
            alt='Pet land is cool'
            className='h-full object-cover'
          />
        </figure>
      </section>

      <section className='w-11/12 max-w-5xl mx-auto mt-24 pb-[2.5rem]'>
        <h2 className='font-amiko text-4xl font-semibold mb-10'>
          Featured Products
        </h2>
        <div className='grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10'>
          <Postgres />
        </div>
      </section>
    </>
  )
}
