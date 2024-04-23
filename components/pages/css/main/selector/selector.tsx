import styled from "styled-components";
import SelectorStyled from "./selectorStyled";

const StyledDiv = styled.div<{ selected: boolean }>`
  margin: 5px;
  border-radius: 3px;
  height: 20px;
  padding-top: 10px;
  align-items: center;
  display: flex;
  padding-left: 10px;
  background-color: green;
  color: white;
  cursor: pointer;
  transition: all 0.5s;
  ${(props) => props.selected && "Background: #9b9bc0"}
`;

export default function Selector(props: any) {
  return (
    <SelectorStyled>
      {["Background", "Color", "Border", "Padding", "Margin", "Display"].map(
        (e: String, i: number) => {
          return (
            <StyledDiv
              key={i}
              onClick={() => {
                props.setContenidoPresente(e);
              }}
              selected={props.contenidoPresente === e ? true : false}
            >
              {e}
            </StyledDiv>
          );
        }
      )}
    </SelectorStyled>
  );
}
