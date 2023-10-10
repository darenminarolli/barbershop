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
        { image: '/assets/images/pexels-thgusstavo-santana-1813346.jpg' }, // Image paths (replace with your image URLs)
        { image: '/assets/images/pexels-thgusstavo-santana-1813346.jpg' },
        { image: '/assets/images/pexels-thgusstavo-santana-1813346.jpg' },
        { image: '/assets/images/pexels-thgusstavo-santana-1813346.jpg' },
        { image: '/assets/images/pexels-thgusstavo-santana-1813346.jpg' },
        { image: '/assets/images/pexels-thgusstavo-santana-1813346.jpg' },
        { image: '/assets/images/pexels-thgusstavo-santana-1813346.jpg' },
        { image: '/assets/images/pexels-thgusstavo-santana-1813346.jpg' },
        { image: '/assets/images/pexels-thgusstavo-santana-1813346.jpg' },
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
            src={card.image} // Replace with the correct path to your image
            alt={`Card ${index + 1}`}
            className="object-cover h-full w-full"
          />
        </SwiperSlide>
      ))}
  </Swiper>
  )
}

export default CardSwiper