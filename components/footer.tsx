import Image from 'next/image'
import { GitHub, Nextjs } from './icons'

export default function Footer() {
  return (
    <footer className='w-11/12 max-w-5xl mx-auto mt-24 sm:!mt-28 mb-8 flex items-center justify-between'>
      <span className='flex items-center gap-4'>
        <a
          href='https://nextjs.com'
          className='hover:underline flex gap-2 items-center font-amiko'
        >
          made with
          <Nextjs />
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
        href='https://fresh.deno.dev'
        target='_blank'
        className='text-gray-600 hover:underline font-amiko'
      >
        Powered by labs
      </a>
    </footer>
  )
}
