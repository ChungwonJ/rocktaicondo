import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Room from "./room";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>락타이콘도 - 태국여행 및 콘도 예약 | 태국 부동산 및 예약 시스템</title>
        <meta name="description" content="태국여행을 계획 중이라면, 방콕, 파타야 등 다양한 지역의 콘도를 쉽게 예약하세요. 락타이콘도는 최고의 태국 부동산 정보를 제공합니다." />
        <meta name="keywords" content="태국여행, 태국 콘도 예약, 태국 부동산, 방콕 콘도 예약, 파타야 콘도 예약, 태국 여행 예약, 태국 부동산 시스템" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="태국여행 및 콘도 예약 - 락타이콘도 | 태국 부동산 및 예약 시스템" />
        <meta property="og:description" content="태국여행을 계획 중이라면, 방콕, 파타야 등 다양한 지역의 콘도를 쉽게 예약하세요. 락타이콘도는 최고의 태국 부동산 정보를 제공합니다." />
        <meta property="og:image" content="/logo.jpg" />
        <meta property="og:url" content="https://rakthaicondo.vercel.app" />
        <meta name="naver-site-verification" content="a3c52e8fae8364875a0b84e0464ed52e3e2bef54" />
        <meta name="google-site-verification" content="M5QjhTbql7-t5VHxzfMM3z6czfD2681UAgt36oD2wHs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Room />
    </>
  );
}
