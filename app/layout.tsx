import '../public/styles/globals.css'

import { CartContext } from './Provider'
import Footer from '../components/footer'
import Header from '../components/header'
import type { Metadata } from 'next'

type LayoutProps = {
  children: React.ReactNode
}
export const metadata: Metadata = {
  title: 'Pet Land',
  description: 'The Shop Pet Land - The best pet shop in the world',
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <body>
        <CartContext>
          <Header />
          <main className='relative'>
            {children}
            <hr />
            <section className='pb-[2.5rem] max-w-md mx-auto'>
              <h2 className=' text-center my-10'>Subscribe to our email</h2>

              <form action='#' className='text-center'>
                <label
                  htmlFor='email'
                  className='border border-[#121212] mb-[2rem] p-3'
                >
                  <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    className='outline-none w-max lg:w-full'
                  />
                </label>
              </form>
            </section>
            <hr />
          </main>
          <Footer />
        </CartContext>
      </body>
    </html>
  )
}
