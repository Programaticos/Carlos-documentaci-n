import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import MiFooter from "@/components/layout/footer/miFooter";
import MiHeader from "@/components/layout/header/miHeader";
import Saludo from "@/components/layout/header/saludo";

const inter = Inter({ subsets: ["latin"] });

export default function Typescript() {
  return (
    <>
      <Head>
        <title>Typescript</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tsFav.png" />
      </Head>
      <MiHeader />
      <main className={` ${inter.className}`}>
        <Saludo titulo="Typescript" />
      </main>
      <Link href="https://www.typescriptlang.org/" target="_blank">
        <h3>Pulsa para ver la documentación oficial de TS</h3>
      </Link>
      <Link href="./">Home</Link>
      <MiFooter />
    </>
  );
}
