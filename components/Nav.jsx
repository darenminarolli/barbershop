import React from 'react'

const Nav = () => {
  return (
    <nav className='flex-center m-5 right-10'>
       <ul className=' w-full flex justify-center items-center  gap-5 text-sm sm:text-lg cursor-pointer center_top'>
         <li ><a className='hover:border-b' href="#"> Kreu</a> </li>
         <li ><a className='hover:border-b' href="#"> Rreth nesh</a></ li>
         <li ><a className='hover:border-b' href="#"> Vlersimet </a></li>
         <li ><a className='hover:border-b' href="#"> Kontakt</a></li>
       </ul>
    </nav>
  )
}

export default Nav