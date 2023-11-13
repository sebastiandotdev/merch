'use client'

import Image from 'next/image'
import { Add, Minus } from '../../../components/icons'
import { Data } from '../../../lib/types'
import { useEffect, useState } from 'react'
import Messsage from '../../../components/message'

export default function Product({ product }: { product: Data }) {
  const [increment, setIncrement] = useState({
    incrementPrice: product.price,
    incrementProduct: 1,
  })
  const [isSave, setIsSave] = useState(false)
  const [isSuccessfuly, setIsSuccesfuly] = useState(false)
  const [messages, setMessage] = useState({
    message: '',
    description: '',
  })

  const incrementPrice = () => {
    setIncrement({
      incrementPrice: increment.incrementPrice + product.price,
      incrementProduct: increment.incrementProduct + 1,
    })
  }
  const decrementPrice = () => {
    if (increment.incrementPrice > product.price) {
      setIncrement({
        incrementPrice: increment.incrementPrice - product.price,
        incrementProduct: increment.incrementProduct - 1,
      })
    }
  }
  const addShoppingCart = () => {
    const existingProducts = JSON.parse(
      localStorage.getItem('products') || '[]',
    ) as Data[]

    const productExists = existingProducts.some(
      (p: Data) => p.id === product.id,
    )

    if (!productExists) {
      existingProducts.push({ ...product, ...increment })
      localStorage.setItem('products', JSON.stringify(existingProducts))

      setMessage({
        message: 'Successfully added',
        description: 'The product has been added to the cart',
      })
      setIsSuccesfuly(true)
      setIsSave(true)
    }
  }
  useEffect(() => {
    const existingProducts = JSON.parse(
      localStorage.getItem('products') || '[]',
    ) as Data[]
    const productExists = existingProducts.some(
      (p: Data) => p.id === product.id,
    )
    setIsSave(productExists)
  }, [product.id, isSave])
  return (
    <>
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
        <h2 className='uppercase font-amiko text-4xl pt-4'>{product.title}</h2>

        <p className='font-amiko uppercase text-2xl py-6'>
          $ {increment.incrementPrice} COP
        </p>
        <div className='border border-black p-2 flex items-center justify-between max-w-[10rem]'>
          <button
            className='text-xl cursor-pointer'
            onClick={decrementPrice}
            style={{
              color:
                increment.incrementPrice === product.price ? '#ccc' : '#000',
              cursor:
                increment.incrementPrice === product.price
                  ? 'not-allowed'
                  : 'pointer',
            }}
            disabled={increment.incrementPrice === product.price}
          >
            <Minus />
          </button>
          <small className='font-amiko text-xl uppercase'>
            {increment.incrementProduct}
          </small>
          <button className='text-xl cursor-pointer' onClick={incrementPrice}>
            <Add />
          </button>
        </div>
        <div className='py-6'>
          <input
            type='button'
            value='Buy it now'
            className='py-3 bg-gray-400 block w-full mt-4 text-white font-amiko cursor-pointer hover:opacity-90'
          />
          <input
            type='button'
            value='Add to cart'
            className='py-3 bg-blue-500 block w-full mt-4 text-white font-amiko cursor-pointer hover:opacity-90'
            style={{
              backgroundColor: isSave ? '#ccc' : '#3b82f6',
              cursor: isSave ? 'not-allowed' : 'pointer',
            }}
            onClick={addShoppingCart}
            disabled={isSave}
          />
        </div>
      </aside>

      {isSuccessfuly ? (
        <Messsage
          message={messages.message}
          description={messages.description}
        />
      ) : (
        ''
      )}
    </>
  )
}
