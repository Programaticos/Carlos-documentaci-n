import Head from "next/head";
import Link from "next/link";
import MiFooter from "@/components/layout/footer/miFooter";
import MiHeader from "@/components/layout/header/miHeader";
import Border from "@/components/pages/css/main/border/border";

export default function CssBorder() {
  return (
    <>
      <Head>
        <title>Css border</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cssFav.webp" />
      </Head>
      <MiHeader />
      <main>
        <Border />
        <Link href="../">Home</Link> | <Link href="./">Back</Link>
      </main>
      <MiFooter />
    </>
  );
}
