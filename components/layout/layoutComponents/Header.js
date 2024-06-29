import Link from "next/link";
import React, { useState, useEffect } from "react";

function Header() {

  return (
    <>
      <header>
        <Link href='/'>Rocktai</Link>
      </header>
    </>
  );
}

export default Header;