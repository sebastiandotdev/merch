import Link from 'next/link'
import type { ReactNode } from 'react'

export default function BackBanner({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {
  return (
    <header className='flex justify-between items-center gap-x-4 px-4 py-6 my-6 mx-auto'>
      <Link href='/' className='cursor-pointer'>
        <nav className='flex items-center gap-2'>
          <div className='rounded hover:opacity-90 cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-chevron-left'
              width='30'
              height='30'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M15 6l-6 6l6 6' />
            </svg>
          </div>
          <h2 className=' font-light text-xl uppercase -mb-0.5'>{title}</h2>
        </nav>
      </Link>
      <div className='px-2 flex items-center gap-4'>
        {children}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-building-store'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M3 21l18 0' />
          <path d='M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4' />
          <path d='M5 21l0 -10.15' />
          <path d='M19 21l0 -10.15' />
          <path d='M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4' />
        </svg>
      </div>
    </header>
  )
}
