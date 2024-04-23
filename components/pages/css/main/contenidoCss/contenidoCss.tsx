import styled from "styled-components";
import ContenidoCssStyled from "./contenidoCssStyled";
const TituloH2 = styled.h2`
  font-size: 54px;
  color: white;
  background-color: green;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px;
  bottom: 32px;
  margin-bottom: 0;
`;

const DivContainer = styled.div`
  margin: 48px;
  border: 2px solid green;
  border-radius: 0 0 5px 5px;
  margin-top: 0;
  height: 220px;
  position: relative;
  top: -2px;
`;

function ContenidoCss(props: any) {
  return (
    <>
      <ContenidoCssStyled>
        <TituloH2>{props.contenidoPresente.titulo}</TituloH2>
        <DivContainer>
          <p>{props.contenidoPresente.descripcion}</p>
          <p>Ejemplo: {props.contenidoPresente.ejemplos[0].titulo}</p>
          <p>{props.contenidoPresente.ejemplos[0].descripcion}</p>
        </DivContainer>
      </ContenidoCssStyled>
    </>
  );
}

export default ContenidoCss;
