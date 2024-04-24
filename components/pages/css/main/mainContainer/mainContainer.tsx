import { useState } from "react";
import ContenidoCss from "../contenidoCss/contenidoCss";
import Selector from "../selector/selector";
import MainContainerStyled from "./mainContainerStyled";
import { cssJson } from "@/data/mocks/cssJson";
import { CssJsonStructure } from "../selector/types";

function MainContainer(): React.ReactElement {
  const [contenidoPresente, setContenidoPresente] = useState<CssJsonStructure>(
    cssJson[0]
  );

  return (
    <>
      <MainContainerStyled>
        <Selector
          contenidoPresente={contenidoPresente}
          setContenidoPresente={setContenidoPresente}
        />
        <ContenidoCss contenidoPresente={contenidoPresente} />
      </MainContainerStyled>
    </>
  );
}

export default MainContainer;
