import { NAVLIST } from "@/define";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Facebook from "@/components/atoms/icon/Facebook";
import Instargram from "@/components/atoms/icon/Instargram";
import { SNSLINK } from "@/define";
import Hamberger from "@/components/atoms/icon/Hamberger";

function Header(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const headerClassName = scrollPosition < 100 ? 'header' : 'changeHeader';
  const facebookLink = SNSLINK.find(sns => sns.title === 'facebook').link;
  const instargramLink = SNSLINK.find(sns => sns.title === 'instargram').link;

  return (
    <>
      <header className={headerClassName}>
        <section className="headerSection">
          <div className="headerGrid">
            <div className="headerOne">
              <Hamberger/>
              <Link href={'/'}>ansr</Link>
            </div>
            <nav className="headerTwo">
              <ul className="navList">
                {NAVLIST.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.list}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="headerThree">
              <Link href={facebookLink} target="_blank"><Facebook /></Link>
              <Link href={instargramLink} target="_blank"><Instargram /></Link>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;