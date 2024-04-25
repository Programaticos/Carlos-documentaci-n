import { useState } from "react";
import Selector from "../selector/selector";
import { JsJsonStructure } from "../selector/types";
import MainContainerJsStyled from "./mainContainerJsStyled";
import ContenidoJs from "../contenidoJs/contenidoJs";
import { jsJson } from "@/data/mocks/jsJson";

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
        <ContenidoJs contenidoPresente={contenidoPresente} />
      </MainContainerJsStyled>
    </>
  );
}

export default MainContainerJs;
