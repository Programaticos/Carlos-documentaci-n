import { useState } from "react";
import Color from "../color/color";
import Background from "../background/background";
import Border from "../border/border";
import CssListStyled from "./cssListStyled";

function CssList(): React.ReactElement {
  const [rendered, setRendered] = useState<React.ReactElement | null>(null);

  function clickHandler(titulo: string) {
    switch (titulo) {
      case "Color":
        setRendered(<Color />);
        break;
      case "Background":
        setRendered(<Background />);
        break;
      case "Border":
        setRendered(<Border />);
        break;

      default:
        setRendered(null);
    }
  }
  return (
    <>
      <CssListStyled>
        <button className="cssList" onClick={() => clickHandler("Color")}>
          Color
        </button>
        <button className="cssList" onClick={() => clickHandler("Background")}>
          Background
        </button>
        <button className="cssList" onClick={() => clickHandler("Border")}>
          Border
        </button>
      </CssListStyled>
      <div>{rendered}</div>
    </>
  );
}

export default CssList;
