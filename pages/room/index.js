import AccordionComponent from '@/components/AccordionComponent'
import MainSwiper from '@/components/MainSwiper'
import { ROOMS } from '@/define/itemList'
import React from 'react'
import { useRouter } from 'next/router'
import Map from '@/components/Map'

function Room() {
  const router = useRouter()
  return (
    <>
      <MainSwiper itemList={ROOMS}/>
      <section className='roomSection'>
        <h1 className='roomTitle'>Kaset Nawamin SUPALAI CUTE</h1>
        <ul className='roomTxt'>
          <li>BTS역 도보 5분이내</li>
          <li>호텔보다 저렴한 가격</li>
          <li>주변 완벽한 편의시설</li>
          <li>음식점, 편의점 바로 숙소 앞</li>
          <li>24시간 CCTV</li>
          <li>장기,단기 가능!</li>
        </ul>
      <div>
        <AccordionComponent />
      </div>

      </section>
      <div className='roomBtn'>
        <button onClick={()=>{router.push('/reservation')}}>예약하기</button>
      </div>
    </>
  )
}

export default Room