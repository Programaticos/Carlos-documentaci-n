import SelectorStyled from "./selectorStyled";
import { cssJson } from "@/data/mocks/cssJson";
import { CssJsonStructure } from "./types";
import StyledDiv from "./styledDiv";

export default function Selector(props: any): React.ReactElement {
  return (
    <SelectorStyled>
      {cssJson.map((element: CssJsonStructure, i: number) => {
        return (
          <StyledDiv
            key={i}
            onClick={() => {
              props.setContenidoPresente(element);
            }}
            selected={props.contenidoPresente === element ? true : false}
          >
            {element?.titulo}
          </StyledDiv>
        );
      })}
    </SelectorStyled>
  );
}
