import Link from "next/link";
import React from "react";
import { PiAirplane } from "react-icons/pi";
import { LuCalendarCheck } from "react-icons/lu";
import Button from 'react-bootstrap/Button';

function Qna() {
  return (
    <>
      <section>
        <div className="qnaGrid">
          <Button variant="primary">
            <Link href="http://pf.kakao.com/_BqUkxj/chat">
            <LuCalendarCheck/>
              <p>콘도문의</p>
            </Link>
          </Button>
          <Button variant="primary">
            <Link href="http://pf.kakao.com/_Cekkxj/chat">
              <PiAirplane />
              <p>특송문의</p>
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

export default Qna;
