import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import MiFooter from "@/components/layout/footer/miFooter";
import MiHeader from "@/components/layout/header/miHeader";

const inter = Inter({ subsets: ["latin"] });

export default function ReactComponent() {
  return (
    <>
      <Head>
        <title>Hook React</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/reactFav.png" />
      </Head>
      <MiHeader />
      <main>
        <h2>Hook de React</h2>
        <p>
          Los hooks te permiten usar el estado y otras características de React
          sin escribir una clase.
        </p>
        <h3>Use State:</h3>
        <p>
          El hook useState es una de las herramientas más fundamentales en React
          para manejar el estado en una aplicación. Es una forma sencilla de
          crear y actualizar variables de estado en un componente de React sin
          tener que escribir una clase completa.
        </p>
        <Link href="../">Home</Link> | <Link href="./">Back</Link>
      </main>
      <MiFooter />
    </>
  );
}
