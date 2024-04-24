import { useState } from "react";
import { FirstDivStyled, SecondDivStyled } from "./styles";
import CodeSample from "../codeSample/codeSample";

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
            <CodeSample codigo={props.ejemplo?.codigo} />
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
