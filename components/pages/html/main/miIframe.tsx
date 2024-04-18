import Link from "next/link";

function MiIFrame() {
  return (
    <>
      <h1>Esto es un iFrame </h1>
      <iframe
        src="https://www.desnivel.com"
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="1000"
        height="400"
      ></iframe>
      <br />
      <Link href="../">Home</Link> | <Link href="./">Back</Link>
    </>
  );
}

export default MiIFrame;
