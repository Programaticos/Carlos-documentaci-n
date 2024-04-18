import Link from "next/link";

function CssList() {
  return (
    <>
      <ul>
        <li>
          <Link href={"/CSS/color"}>Color</Link>
        </li>
        <li>
          <Link href={"/CSS/background"}>Background</Link>
        </li>
        <li>
          <Link href={"/CSS/border"}>Border</Link>
        </li>
      </ul>
    </>
  );
}

export default CssList;
