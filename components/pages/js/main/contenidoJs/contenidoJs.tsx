import BotonEjemplo from "../botonEjemplo/botonEjemplo";
import { DivContainer, OtroDivMas, OtroDivStyled, TituloH2 } from "./styles";
import { JsJsonStructure } from "../selector/types";
import ContenidoJsStyled from "./contenidoJsStyled";

function ContenidoJs(props: any): React.ReactElement {
  return (
    <>
      <ContenidoJsStyled>
        <TituloH2>{props.contenidoPresente.titulo}</TituloH2>
        <DivContainer>
          <p>{props.contenidoPresente.descripcion}</p>
          <OtroDivMas>
            {props.contenidoPresente.ejemplos?.map(
              (ejemplos: JsJsonStructure, i: number) => {
                return (
                  <OtroDivStyled key={i}>
                    <BotonEjemplo ejemplo={ejemplos}>
                      {ejemplos.titulo}{" "}
                    </BotonEjemplo>
                  </OtroDivStyled>
                );
              },
            )}
          </OtroDivMas>
        </DivContainer>
      </ContenidoJsStyled>
    </>
  );
}

export default ContenidoJs;
