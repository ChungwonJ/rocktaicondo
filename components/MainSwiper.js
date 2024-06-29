import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import { Autoplay, EffectFade } from 'swiper/modules';

export default function MainSwiper() {
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
        <SwiperSlide>
          <img className='swiperImg' src="/images/swipe1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiperImg' src="/images/swipe2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiperImg' src="/images/swipe3.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiperImg' src="/images/swipe4.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}