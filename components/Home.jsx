import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
    <section className='section_layout'>

    <div className='grid justify-center items-center'>     
    <h1 className='text_header '>Berberi me i mire ne Tiron!</h1>
     <h5 className='flex justify-center items-center text-sm'>Me eksperienc 10 vjecare ne treg.</h5>
    </div>
     <div className='container'>
     <Image src='/assets/images/Img.jpg' className='img rounded shadow-md ' width={250} height={150} alt='photo'/>
     
     <Image src='/assets/images/Img2.jpg' className='img rounded shadow-md ' width={250} height={150} alt='photo'/>

     </div>
    </section>
     </>
  )
}

export default Home