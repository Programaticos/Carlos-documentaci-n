import Head from "next/head";
import Link from "next/link";
import MiFooter from "@/components/layout/footer/miFooter";
import MiHeader from "@/components/layout/header/miHeader";
import Encabezado from "@/components/pages/html/main/encabezado";

export default function HtmlEncabezados() {
  return (
    <>
      <Head>
        <title>Encabezados</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/htmlFav.png" />
      </Head>
      <MiHeader />
      <main>
        <Encabezado />
      </main>
      <MiFooter />
    </>
  );
}
