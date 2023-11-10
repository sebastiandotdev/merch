import Image from 'next/image'
import { Add, Minus } from '../../../components/icons'
import Link from 'next/link'
import supabase from '../../../lib/supabase'
import { Data, Param } from '../../../lib/types'

export default async function ProductById({ params }: Param) {
  const funcGetByName = async () => {
    try {
      const { data, error } = await supabase
        .from('merch')
        .select('*')
        .eq('id', params.id)
      if (error) throw new Error(error.message)

      return data
    } catch (error) {
      console.log(error)
      return
    }
  }

  const value = (await funcGetByName()) as Data[]

  return (
    <>
      {value.map((product) => (
        <section
          className='w-11/12 max-w-5xl mx-auto pt-16 grid grid-cols-2 gap-x-6 relative'
          key={product.id}
        >
          <figure className='overflow-hidden py-4'>
            <Image
              src={product.photo}
              alt='Example Product By ID'
              className='object-cover aspect-square'
              width={400}
              height={400}
            />
          </figure>
          <aside className='py-4 w-full px-20 sticky top-0'>
            <h5 className='uppercase text-gray-400 font-amiko'>Pet land</h5>
            <h2 className='uppercase font-amiko text-4xl pt-4'>
              {product.title}
            </h2>

            <p className='font-amiko uppercase text-2xl py-6'>
              $ {product.price} COP
            </p>
            <div className='border border-black p-2 cursor-pointer flex items-center justify-between max-w-[10rem]'>
              <Link href='#' className='text-xl'>
                <Add />
              </Link>
              <small className='font-amiko text-xl uppercase'>0</small>
              <Link href='#' className='text-xl'>
                <Minus />
              </Link>
            </div>
            <div className='py-6'>
              <input
                type='button'
                value='Sold Out'
                className='py-3 border border-gray-400 block w-full text-gray-400 font-amiko cursor-pointer'
              />
              <input
                type='button'
                value='Buy it now'
                className='py-3 bg-gray-400 block w-full mt-4 text-white font-amiko cursor-pointer'
              />
              <input
                type='button'
                value='Add to cart'
                className='py-3 bg-blue-500 block w-full mt-4 text-white font-amiko cursor-pointer'
              />
            </div>
          </aside>
        </section>
      ))}
    </>
  )
}
