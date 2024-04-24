import { MiBoton } from "@/components/otrosComponentes/MiBoton";
import { Select } from "@/components/otrosComponentes/Select";
import MiFooter from "@/components/layout/footer/miFooter";
import MiHeader from "@/components/layout/header/miHeader";
import Formulario from "@/components/pages/html/main/formulario";
import Head from "next/head";
import Link from "next/link";

export default function HtmlFormulario() {
  return (
    <>
      <Head>
        <title>Fomulario</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/htmlFav.png" />
      </Head>
      <MiHeader />
      <main>
        <Formulario />
      </main>
      <MiFooter />
    </>
  );
}
