import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
    <div className='grid justify-center items-center'>     
    <h1 className='text-xl sm:text-4xl font-bold'>Berberi me i mire ne Tiron!</h1>
     <h5 className='flex justify-center items-center text-sm'>Me eksperienc 10 vjecare ne treg.</h5>
    </div>

     <div className='img_container  '>
     <Image src='/assets/images/Img.jpg' className='img rounded shadow-md ' width={250} height={150} alt='photo'/>
     
     <Image src='/assets/images/Img2.jpg' className='img rounded shadow-md ' width={250} height={150} alt='photo'/>

     </div>
     </>
  )
}

export default Home