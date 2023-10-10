import React from 'react'
import Image from 'next/image'
import CardSwiper from './CardSwiper'
const Review = () => {
  return (
    <section className='section_layout'>
       <hgroup className='grid justify-center items-center'>
        <h1 className='text_header'>Punimet</h1>
      </hgroup>
      <div className='grid grid-cols-1 mt-3'>
         <CardSwiper/>
      </div>
    </section>
  )
}

export default Review