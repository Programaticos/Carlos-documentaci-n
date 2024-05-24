import { useState } from "react";
import { FirstDivStyled, SecondDivStyled } from "./styles";

export default function BotonEjemplo(props: any): React.ReactElement {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <>
      {modalVisible && (
        <FirstDivStyled
          onClick={() => {
            setModalVisible(false);
          }}
        >
          <SecondDivStyled>
            <h2>{props.ejemplo?.titulo}</h2>
            {props.ejemplo?.descripcion}
          </SecondDivStyled>
        </FirstDivStyled>
      )}
      <button
        onClick={() => {
          setModalVisible(true);
        }}
      >
        {props.ejemplo?.titulo}
      </button>
    </>
  );
}
