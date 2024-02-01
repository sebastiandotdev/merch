'use client'

import { useEffect, useState } from 'react'
import supabase from '../../lib/supabase'
import { Data } from '../../lib/types'

import GetMerchs from '../get-merchs'

export default function PageCatalog() {
  const [merchs, setMerchs] = useState<Data[]>([])
  useEffect(() => {
    const getMerchs = async () => {
      try {
        const { data } = await supabase.from('merch').select('*')

        setMerchs(data as Data[])
      } catch (error) {
        console.error('Error fetching data:', error)
        throw error
      }
    }
    getMerchs()
  }, [])

  const handleChangeOrderProduct = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const value = e.target.value
    let sortedMerchs = [...merchs]
    switch (value) {
      case 'up':
        sortedMerchs = sortedMerchs.sort((a, b) =>
          a.title.localeCompare(b.title),
        )
        setMerchs([...sortedMerchs])
        break
      case 'fa':
        sortedMerchs = sortedMerchs.sort((a, b) =>
          b.title.localeCompare(a.title),
        )
        setMerchs([...sortedMerchs])
        break
      default:
        sortedMerchs = sortedMerchs.sort((a, b) => a.id - b.id)
        setMerchs([...sortedMerchs])
        break
    }
  }
  return (
    <section className='w-11/12 max-w-5xl mx-auto mt-12'>
      <h2 className='text-4xl  mb-12'>Products</h2>
      <header className='flex justify-between items-center mb-12'>
        <nav className='flex items-center'>
          <h5 className=' text-md text-zinc-600'>Filter:</h5>
        </nav>
        <nav className='flex items-center gap-x-4'>
          <select
            name='#'
            id='#'
            className='outline-none -mt-2 border-none rounded-md'
            onChange={handleChangeOrderProduct}
          >
            <option value=''>Default sorting</option>
            <option value='up'>Order upward</option>
            <option value='fa'>Order falling</option>
          </select>
          <small className=' text-md text-zinc-600'>
            {merchs.length > 0 ? merchs.length : 0} products
          </small>
        </nav>
      </header>
      <section className='grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10'>
        <GetMerchs data={merchs} />
      </section>
    </section>
  )
}
