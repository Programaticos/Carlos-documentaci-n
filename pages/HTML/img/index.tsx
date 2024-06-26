import MiFooter from "@/components/layout/footer/miFooter";
import MiHeader from "@/components/layout/header/miHeader";
import MiImg from "@/components/pages/html/main/miImg";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function HtmlImg() {
  return (
    <>
      <Head>
        <title>Imagen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/htmlFav.png" />
      </Head>
      <MiHeader />
      <MiImg />
      <MiFooter />
    </>
  );
}
