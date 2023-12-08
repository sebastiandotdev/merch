import Image from 'next/image'
import { GitHub, Nextjs } from './icons'

export default function Footer() {
  return (
    <footer className='w-11/12 max-w-5xl mx-auto mt-24 sm:!mt-28 mb-8 flex items-center justify-between flex-col lg:flex-row gap-y-8'>
      <span className='flex items-center gap-4'>
        <a
          href='https://nextjs.com'
          className='flex gap-2 items-center font-amiko bg-white rounded-md border border-gray-300 p-1.5'
        >
          <Image src='/next-js_1.png' alt='Nextjs' width={20} height={20} />
          Made with Nextjs
        </a>
        <a
          className='hover:underline flex gap-2 items-center font-amiko'
          href='https://github.com//merch'
        >
          Source
          <GitHub className='h-5 w-5 text-gray-500' />
        </a>
      </span>

      <a
        href='https://github.com/labs-company'
        target='_blank'
        className='text-gray-600 hover:underline font-amiko'
      >
        Powered by castrogarciajs
      </a>
    </footer>
  )
}
