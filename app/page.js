import About from '@/components/About'
import Works from '@/components/Works'
import Contact from '@/components/Contact'
import Image from 'next/image'
import Home from '@/components/Home'

export default function HomePage() {
  return (
     <>
    <section className='flex flex-col'>
      <Home/>
      <About/>
      <Works/>
      <Contact/>
   </section>
 
     </>
  )
}
