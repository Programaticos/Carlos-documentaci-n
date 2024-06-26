import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Contador from "@/components/pages/home/footer/contador";
import MiFooter from "@/components/layout/footer/miFooter";
import MiHeader from "@/components/layout/header/miHeader";

const inter = Inter({ subsets: ["latin"] });

export default function ReactComponent() {
  return (
    <>
      <Head>
        <title>Componentes React</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/reactFav.png" />
      </Head>
      <MiHeader />
      <main>
        <h2>Esto es un componente de React</h2>
        <p>
          Los componentes permiten separar la interfaz de usuario en piezas
          independientes, reutilizables y pensar en cada pieza de forma aislada.
        </p>
        <p>Esto es un ejemplo de componente:</p>
        <Contador />
        <Link href="../">Home</Link> | <Link href="./">Back</Link>
      </main>
      <MiFooter />
    </>
  );
}
