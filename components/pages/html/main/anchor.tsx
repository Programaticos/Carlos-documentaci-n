import Link from "next/link";

function Anchor() {
  return (
    <>
      <p>Esto es un ancla</p>
      <Link href="../">Home</Link> | <Link href="./">Back</Link>
    </>
  );
}
export default Anchor;
