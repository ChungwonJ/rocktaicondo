import React from "react";
import { useRouter } from "next/router";
import { GOLF } from "@/define/itemList";
import MainSwiper from "@/components/MainSwiper";
import Spiner from "@/components/Spiner";
import Link from "next/link";
import Map from "@/components/Map";

function GolfComponent() {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id === "undefined") {
    return (
      <>
        <Spiner />
      </>
    )
  }

  const golf = GOLF.find((item) => item.id === id);

  return (
    <div>
      {golf && (
        <>
          <MainSwiper itemList={golf.img} />
          <div className="golfTxt">
            <h2>{golf.name}</h2>
            <h3>설계자 및 디자인</h3>
            <ul>
              <li>설계자: {golf.designer}</li>
              <li>특징: {golf.characteristics}</li>
            </ul>

            <h3>시설</h3>
            <ul>
              <li>클럽하우스: {golf.clubhouse}</li>
              <li>부대시설: {golf.facility}</li>
            </ul>

            <h3>코스 특징</h3>
            <ul>
            <li>홀: {golf.hall}</li>
              <li>주요 요소: {golf.element}</li>
              <li>난이도: {golf.difficulty}</li>
            </ul>

            <h3>특별한 경험</h3>
            <ul>
              <li>경치: {golf.scenery}</li>
              <li>이벤트: {golf.event}</li>
            </ul>

            <Map 
              title={golf.title}
              lat={golf.lat}
              lng={golf.lng}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default GolfComponent;
