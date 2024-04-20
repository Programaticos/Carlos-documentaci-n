import Head from "next/head";
import MiFooter from "@/components/layout/footer/miFooter";
import MiHeader from "@/components/layout/header/miHeader";
import Anchor from "@/components/pages/html/main/anchor/anchor";

export default function HtmlAnchor() {
  return (
    <>
      <Head>
        <title>Ancla</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/htmlFav.png" />
      </Head>
      <MiHeader />
      <main>
        <Anchor />
      </main>
      <MiFooter />
    </>
  );
}