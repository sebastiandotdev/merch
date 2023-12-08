'use client'

import { useEffect, useState } from 'react'
import supabase from '../../../lib/supabase'
import { Data, Param } from '../../../lib/types'
import Product from './product'
import BackBanner from '../../../components/back-banner'

export default function ProductById({ params }: Param) {
  const [value, setValue] = useState<Data[]>([])
  const getProductId = () => {
    const match = params.id.match(/-(\d+)\/?$/)

    return match ? parseInt(match[1]) : null
  }
  const funcGetByName = async (productId: number) => {
    try {
      const { data, error } = await supabase
        .from('merch')
        .select('*')
        .eq('id', productId)
      if (error) throw new Error(error.message)

      setValue(data)
    } catch (error) {
      console.log(error)
      return
    }
  }
  useEffect(() => {
    const id = getProductId()
    if (id) {
      funcGetByName(id)
    }
    return () => {}
  }, [])
  return (
    <>
      <section className='px-6'>
        <BackBanner title='Regresar'>
          <h2 className='font-amiko text-xl font-light'>Merch Storage</h2>
        </BackBanner>
      </section>
      {value.map((product) => (
        <section
          className='w-11/12 max-w-5xl mx-auto pt-16 grid lg:grid-cols-2 gap-x-6 relative auto-cols-auto'
          key={product.id}
        >
          <Product product={product} />
        </section>
      ))}
    </>
  )
}
