import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='section_layout'>
      <hgroup className='grid justify-center items-center'>
        <h1 className='text_header'>Rreth nesh</h1>
      </hgroup>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 '>
      <div className='card_about mt-6 w-4/4 rounded-md  text-black bg-slate-100'>
         <div className=''>
           <h1>Ekperienc</h1>
           <div className='flex gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
            </svg>
            
           </div>

         </div>
     </div>
      <Image src='/assets/images/pexels-thgusstavo-santana-1813346.jpg' className='img rounded-md shadow-md mt-6 ' width={250} height={150} alt='photo'/>
     
      </div><br/>
    </section>
  )
}

export default About