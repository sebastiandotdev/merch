import Link from 'next/link'
import CardBuy from '../components/card-buy'
import { Data } from '../lib/types'

const getMerchs = async <T = [],>(): Promise<T> => {
  try {
    const res = await fetch('https://merch-inky.vercel.app/api')
    const json = await res.json()

    return json.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
export default async function HomePage() {
  const merchs = await getMerchs<Data[]>()

  return (
    <>
      <section className='h-[50vh] lg:h-screen bg-hero-pattern bg-cover bg-no-repeat relative flex items-start lg:items-center justify-start'>
        <div className='bg-gray-400 opacity-30 lg:h-full w-full absolute'></div>
        <article className='p-6 z-50 w-max'>
          <h2 className='font-amiko text-5xl py-8 whitespace-pre-wrap font-semibold'>
            Browse our latest products
          </h2>
          <Link
            href='/catalog'
            className='border-2 lg:border-zinc-800 lg:hover:border-zinc-950 py-2 px-6 hover:cursor-pointer hover:transition-colors text-lg border-zinc-950'
          >
            Shop all
          </Link>
        </article>
      </section>
      <section className='w-11/12 max-w-5xl mx-auto mt-24'>
        <h2 className='font-amiko text-4xl font-semibold mb-10'>
          Featured Products
        </h2>
        <div className='grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10'>
          {merchs.map((merch) => (
            <CardBuy
              key={merch.id}
              name={merch.title}
              image={merch.photo}
              price={merch.price}
              description={merch.description}
            />
          ))}
        </div>
      </section>
    </>
  )
}
