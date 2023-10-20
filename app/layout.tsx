import type { Metadata } from 'next'
import '@/static/globals.css'

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
        <main>{children}</main>
      </body>
    </html>
  )
}
