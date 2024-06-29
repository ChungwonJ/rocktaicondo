import React from "react";
import { useRouter } from "next/router";
import { GOLF } from "@/define/itemList";
import MainSwiper from "@/components/MainSwiper";
import Spiner from "@/components/Spiner";

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

  const selectedGolf = GOLF.find((item) => item.id === id);

  return (
    <div>
      {selectedGolf && (
        <>
          <MainSwiper itemList={selectedGolf.img} />
          <div>
            <h2>{selectedGolf.name}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default GolfComponent;
