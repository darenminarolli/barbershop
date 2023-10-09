import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Barber Shop Tirana',
  description: 'Best Barber in Tirana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <main className='relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6'>
            <div className='relative w-full'>
            <Nav/>
            </div><br/><br/>

            {children}
        </main>
        </body>
    </html>
  )
}
