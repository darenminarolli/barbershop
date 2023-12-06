'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';



const CardSwiper = () => {

    const cardData = [
      { image: 'https://images.pexels.com/photos/2809652/pexels-photo-2809652.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { image: 'https://images.pexels.com/photos/2521978/pexels-photo-2521978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { image: 'https://cdn.wisebarber.com/wisebarber/images/mkp8mvu578r4ofr.jpg?width=1200&quality=80' },
      { image: 'https://images.pexels.com/photos/4422102/pexels-photo-4422102.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { image: 'https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { image: 'https://images.pexels.com/photos/4663136/pexels-photo-4663136.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
      { image: 'https://images.pexels.com/photos/12304515/pexels-photo-12304515.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
      { image: 'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=600' }, 
      ];
      
  return (
    <Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper mt-4"
  >
   {cardData.map((card, index) => (
        <SwiperSlide key={index}>
          <img
            src={card.image} 
            alt={`Card ${index + 1}`}
            className="object-cover h-full w-full"
          />
        </SwiperSlide>
      ))}
  </Swiper>
  )
}

export default CardSwiper