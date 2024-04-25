import Head from "next/head";
import Link from "next/link";
import MiFooter from "@/components/layout/footer/miFooter";
import MiHeader from "@/components/layout/header/miHeader";
import Saludo from "@/components/layout/header/saludo";
import MainContainerJs from "@/components/pages/js/main/mainContainer/mainContainerJs";
export default function Js() {
  return (
    <>
      <Head>
        <title>Javascript</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jsFav.png" />
      </Head>
      <MiHeader />
      <Saludo titulo="Javascript" />
      <main>
        <MainContainerJs />
      </main>

      <br />
      <Link href="./">Home</Link>
      <br />
      <br />
      <Link
        href="https://developer.mozilla.org/es/docs/Web/JavaScript"
        target="_blank"
      >
        Pulsa para ver la documentación oficial de JS
      </Link>

      <MiFooter />
    </>
  );
}
