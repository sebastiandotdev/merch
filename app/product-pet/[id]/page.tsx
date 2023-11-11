import supabase from '../../../lib/supabase'
import { Data, Param } from '../../../lib/types'
import Product from './product'

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
         <Product product={product}/>
        </section>
      ))}
    </>
  )
}
