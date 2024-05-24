import Link from "next/link";
import React from "react";
import AnchorStyled from "./anchorStyled";

function Anchor(): React.ReactElement {
  return (
    <>
      <AnchorStyled>
        <p>Esto es un ancla</p>
        <Link href="../">Home</Link> | <Link href="./">Back</Link>
      </AnchorStyled>
    </>
  );
}
export default Anchor;
