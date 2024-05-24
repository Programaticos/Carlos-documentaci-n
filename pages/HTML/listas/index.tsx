import Head from "next/head";
import Link from "next/link";
import MiFooter from "@/components/layout/footer/miFooter";
import MiHeader from "@/components/layout/header/miHeader";
import MiLista from "@/components/pages/html/main/miLista";

export default function HtmlListas() {
  return (
    <>
      <Head>
        <title>Listas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/htmlFav.png" />
      </Head>
      <MiHeader />
      <MiLista />
      <MiFooter />
    </>
  );
}
