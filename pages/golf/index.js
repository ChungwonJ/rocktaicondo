import { GOLF } from "@/define/itemList";
import React from "react";
import { useRouter } from "next/router";

function Golf() {
  const router = useRouter();
  return (
    <>
    <h1 className='golfTitle'>골프장</h1>
      <ul className="golfList">
        {GOLF.map((item, id) => (
          <li
            key={id}
            onClick={() => {
              router.push(`/golf/${item.id}`);
            }}
          >
            <span>{id + 1}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Golf;
