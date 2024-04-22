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
        <TituloH2>{props.contenidoPresente}</TituloH2>
        <DivContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            architecto aspernatur nihil itaque distinctio ipsa corporis ea.
            Exercitationem ratione, fugiat voluptate totam sit rerum distinctio
            quisquam corrupti, vel, recusandae unde.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            aspernatur expedita quia quae iusto incidunt cupiditate. Quo quidem,
            culpa ad autem velit eaque aperiam praesentium esse quam fuga
            facilis excepturi.
          </p>
        </DivContainer>
      </ContenidoCssStyled>
    </>
  );
}

export default ContenidoCss;
