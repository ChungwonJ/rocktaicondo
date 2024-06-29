import React from "react";
import { useRouter } from "next/router";
import { LuCalendarCheck } from "react-icons/lu";
import { RiKakaoTalkLine } from "react-icons/ri";
import { IoGolfOutline } from "react-icons/io5";
import { LuHotel } from "react-icons/lu";
import Link from "next/link";

function Footer() {
  const router = useRouter();

  const currentPath = router.asPath;

  const getIconColor = (path) => {
    if (path === '/golf') {
      return currentPath.startsWith('/golf') ? "#0d6efd" : "black";
    }
    return currentPath === path ? "#0d6efd" : "black";
  };
  return (
    <>
      <footer>
        <div onClick={()=>{router.push('/')}}>
          <LuHotel color={getIconColor('/')}/>
          <span style={{color : getIconColor('/')}}>콘도</span>
        </div>
        <div onClick={()=>{router.push('/golf')}}>
          <IoGolfOutline color={getIconColor('/golf')}/>
          <span style={{color : getIconColor('/golf')}}>골프</span>
        </div>
        <div onClick={()=>{router.push('/reservation')}}>
          <LuCalendarCheck color={getIconColor('/reservation')}/>
          <span style={{color : getIconColor('/reservation')}}>예약</span>
        </div>
        <div>
          <Link href='http://pf.kakao.com/_BqUkxj/chat' _blank="true">
            <RiKakaoTalkLine/>
            문의
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
