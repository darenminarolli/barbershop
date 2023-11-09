import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='section_layout overflow-x-hidden'>
       <hgroup className='grid justify-center items-center'>
          <h1 className='text_header'>Kontakt</h1>
      </hgroup>
      <div className='grid justify-center items-center '>
         <hgroup className='grid  gap-2 mt-3'>
            <p className='flex justify-center items-center font-thin'>-RREGULLONI IMAZHIN TUAJ-</p>
            <h1 className='text-xl sm:text-3xl font-bold text-center mb-5'>Ndihuni te lire te na kontaktoni,<br/>
              per te rezervuar nje orar.
            </h1>
         </hgroup>
         <div className='grid grid-cols-3'>
            <p>Tel:0683292847</p>
            <div className='mb-5 '>
              <Image src="/assets/images/logo-barber-removebg-preview.png" alt="logo" width={100} height={100} className='opacity-70' />
              <div className='flex  gap-5 pl-2'>
              <a href="https://instagram.com/profesional_sallon?igshid=MThtNXc1Nm0wend6eQ==">
              <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
              </a>
              <a href="https://instagram.com/profesional_sallon?igshid=MThtNXc1Nm0wend6eQ==">
              <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              </div>

            </div>
            <p className='text-sm sm:text-base'>Adresa: Rr. Besim Imami, <br />
            afer gjimnazit Arben Broci.</p>
         </div>
      </div>
    </section>
  )
}

export default Contact