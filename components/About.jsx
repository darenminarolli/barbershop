import Image from 'next/image'
import React from 'react'
import Data from '@/data/Data.json'
const About = () => {

  return (
    <section id='about' className='section_layout'>
      <hgroup className='grid justify-center items-center'>
        <h1 className='text_header'>Rreth nesh</h1>
      </hgroup>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 '>
      <div className='card_about  mt-6  rounded-md  text-black bg-slate-100'>
      {Data.map((card, index) => (
        <div key={index} className='card_container'>
          <h1 className='card_header'>{card.title}</h1>
          <div className='small_card'>
          <div dangerouslySetInnerHTML={{ __html: card.icon }} />
            <p>{card.text}</p>
          </div>
        </div>
      ))}
     </div>
      <Image src='/assets/images/pexels-thgusstavo-santana-1813346.jpg' className='w-full hover:cursor-pointer rounded-md shadow-md mt-6 ' width={250} height={250} alt='photo'/>
     
      </div><br/>
    </section>
  )
}

export default About