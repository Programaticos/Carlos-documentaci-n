import Link from "next/link";

function MiBoton2(): React.ReactElement {
  return (
    <>
      <button type="submit">Enter</button>
      <Link href="../">Home</Link> | <Link href="./">Back</Link>
    </>
  );
}

export default MiBoton2;
