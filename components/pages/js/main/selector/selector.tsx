import SelectorStyled from "./selectorStyled";
import StyledDiv from "./styledDiv";
import { JsJsonStructure } from "./types";
import { jsJson } from "@/data/mocks/jsJson";

export default function Selector(props: any): React.ReactElement {
  return (
    <SelectorStyled>
      {jsJson.map((element: JsJsonStructure, i: number) => {
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
