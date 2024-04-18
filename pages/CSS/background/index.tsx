import Head from "next/head";
import Link from "next/link";
import MiFooter from "@/components/layout/footer/miFooter";
import MiHeader from "@/components/layout/header/miHeader";
import Background from "@/components/pages/css/main/background";

export default function Css() {
  return (
    <>
      <Head>
        <title>Css background</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cssFav.webp" />
      </Head>
      <MiHeader />
      <main>
        <Background />
        <Link href="../">Home</Link> | <Link href="./">Back</Link>
      </main>
      <MiFooter />
    </>
  );
}
