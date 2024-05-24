import Link from "next/link";

function MiParrafo(): React.ReactElement {
  return (
    <>
      {" "}
      <h2>Esto es un párrafo:</h2>
      <p>
        Lo que yo te diga, esto es un párrafo &lt;p&gt;.<br></br>
        <br></br>
        Lorem, <time dateTime="20:00">20:00</time> ipsum dolor sit amet
        consectetur adipisicing elit. Dolorem exercitationem, dolore, <br></br>{" "}
        rerum doloribus veritatis voluptates corrupti rem, est sapiente soluta
        pariatur tenetur ab facilis sed ex ipsam. Blanditiis, nemo recusandae?
      </p>
      <Link href="../">Home</Link> | <Link href="./">Back</Link>
    </>
  );
}

export default MiParrafo;
