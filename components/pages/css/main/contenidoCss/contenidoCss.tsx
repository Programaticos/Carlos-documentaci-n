import ContenidoCssStyled from "./contenidoCssStyled";
import BotonEjemplo from "../botonEjemplo/botonEjemplo";
import { CssJsonStructure } from "../selector/types";
import { DivContainer, OtroDivMas, OtroDivStyled, TituloH2 } from "./styles";

function ContenidoCss(props: any): React.ReactElement {
  return (
    <>
      <ContenidoCssStyled>
        <TituloH2>{props.contenidoPresente.titulo}</TituloH2>
        <DivContainer>
          <p>{props.contenidoPresente.descripcion}</p>
          <OtroDivMas>
            {props.contenidoPresente.ejemplos?.map(
              (ejemplo: CssJsonStructure, i: number) => {
                return (
                  <OtroDivStyled key={i}>
                    <BotonEjemplo ejemplo={ejemplo}>
                      {ejemplo.titulo}{" "}
                    </BotonEjemplo>
                  </OtroDivStyled>
                );
              },
            )}
          </OtroDivMas>
        </DivContainer>
      </ContenidoCssStyled>
    </>
  );
}

export default ContenidoCss;
