'use client'

import { useEffect } from 'react'

export default function Loading() {
  useEffect(() => {
    async function getLoader() {
      const { spiral } = await import('ldrs')
      spiral.register()
    }
    getLoader()
  }, [])
  return (
    <div className='flex items-center justify-center h-screen absolute w-full'>
      <div className='absolute inset-0 bg-[#363636] opacity-50 h-full'></div>
      <l-spiral color='white' size={80}></l-spiral>
    </div>
  )
}
