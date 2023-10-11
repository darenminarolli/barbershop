import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex-center m-5 right-10 '>
       <ul className=' w-full flex justify-center items-center  gap-5 text-sm sm:text-lg cursor-pointer center_top'>
         <li ><Link className='hover:border-b' href="#"> Kreu</Link> </li>
         <li ><Link className='hover:border-b' href="#about"> Rreth nesh</Link></ li>
         <li ><Link className='hover:border-b' href="#works"> Punimet </Link></li>
         <li ><Link className='hover:border-b' href="#contact"> Kontakt</Link></li>
       </ul>
    </nav>
  )
}

export default Nav