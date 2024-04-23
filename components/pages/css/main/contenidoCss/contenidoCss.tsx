import styled from "styled-components";
import ContenidoCssStyled from "./contenidoCssStyled";
import { useState } from "react";
import BotonEjemplo from "../botonEjemplo";

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
  color: green;
  padding: 20px;
`;

const OtroDivStyled = styled.div`
  background-color: green;
  border-radius: 5px;
  color: white;
  width: 120px;
  padding: 5px;
  button {
    background-color: inherit;
    color: white;
    font-family: inherit;
    border: none;
    box-shadow: none;
  }
`;

const OtroDivMas = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const YOtroDivMas = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

function ContenidoCss(props: any) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleClick = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <ContenidoCssStyled>
        <TituloH2>{props.contenidoPresente.titulo}</TituloH2>
        <DivContainer>
          <p>{props.contenidoPresente.descripcion}</p>
          <OtroDivMas>
            {props.contenidoPresente.ejemplos?.map(
              (ejemplo: any, i: number) => {
                return (
                  <OtroDivStyled key={i}>
                    <BotonEjemplo
                      ejemplo={ejemplo}
                      onClick={() => handleClick()}
                    >
                      {ejemplo.titulo}{" "}
                      <YOtroDivMas>
                        {modalVisible && ejemplo.descripcion}
                      </YOtroDivMas>
                    </BotonEjemplo>
                  </OtroDivStyled>
                );
              }
            )}
          </OtroDivMas>
        </DivContainer>
      </ContenidoCssStyled>
    </>
  );
}

export default ContenidoCss;
