import { useState } from "react";
import ContenidoCss from "../contenidoCss/contenidoCss";
import Selector from "../selector/selector";
import MainContainerStyled from "./mainContainerStyled";

function MainContainer() {
  const [contenidoPresente, setContenidoPresente] = useState<number>(0);

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
