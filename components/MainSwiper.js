import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade } from 'swiper/modules';

export default function MainSwiper(props) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mainSwiper"
      >
        {props.itemList.map((item,index)=>(
          <SwiperSlide key={index}>
          <img className='swiperImg' src={item.imgSrc} />
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}