import type { Metadata } from 'next'
import '../public/styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { CartContext } from './Provider'

export const metadata: Metadata = {
  title: 'The Shop Pet Land',
  description: 'The Shop Pet Land - The best pet shop in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <CartContext>
          <Header />
          <main className='relative'>
            {children}
            <hr />
            <section className='pb-[2.5rem] max-w-md mx-auto'>
              <h2 className='font-amiko text-center my-10'>
                Subscribe to our email
              </h2>

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
