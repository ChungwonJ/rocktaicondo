import React from "react";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter()
  return (
    <>
      <footer>
        <div onClick={()=>{router.push('/')}}>condo</div>
        <div onClick={()=>{router.push('/golf')}}>golf</div>
        <div onClick={()=>{router.push('/reservation')}}>예약</div>
        <div>4</div>
      </footer>
    </>
  );
}

export default Footer;
