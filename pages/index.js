import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Room from "./room";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>RakThai</title>
        <meta name="description" content="태국에 모든것 RakThai입니다." />
        <meta name="keywords" content="태국, 태국여행, 태국수입, 골프, 태국골프, 방콕, 파타야, 락타이" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="RakThai"/>
        <meta property="og:description" content="태국에 모든것 RakThai입니다."/>
        <meta property="og:image" content="/logo.jpg"/>
        <meta property="og:url" content="https://rakthaicondo.vercel.app"></meta>
        <meta name="naver-site-verification" content="a3c52e8fae8364875a0b84e0464ed52e3e2bef54" />
        <meta name="google-site-verification" content="M5QjhTbql7-t5VHxzfMM3z6czfD2681UAgt36oD2wHs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Room/>
    </>
  );
}
