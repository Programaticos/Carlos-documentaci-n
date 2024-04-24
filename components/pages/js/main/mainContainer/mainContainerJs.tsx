import { useState } from "react";
import ContenidoCss from "../contenidoCss/contenidoJs";
import Selector from "../selector/selector";
import { JsJsonStructure } from "../selector/types";
import { jsJson } from "@/data/mocks/jsJson";
import MainContainerJsStyled from "./mainContainerJsStyled";

function MainContainerJs(): React.ReactElement {
  const [contenidoPresente, setContenidoPresente] = useState<JsJsonStructure>(
    jsJson[0]
  );

  return (
    <>
      <MainContainerJsStyled>
        <Selector
          contenidoPresente={contenidoPresente}
          setContenidoPresente={setContenidoPresente}
        />
        <ContenidoCss contenidoPresente={contenidoPresente} />
      </MainContainerJsStyled>
    </>
  );
}

export default MainContainerJs;
