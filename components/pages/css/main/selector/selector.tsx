import SelectorStyled from "./selectorStyled";
import { cssJson } from "@/cssJson";
import StyledDiv from "./StyledDiv";
import React from "react";
import { CssJsonStructure } from "./types";

export default function Selector(props: any): React.ReactElement {
  return (
    <SelectorStyled>
      {cssJson.map((e: CssJsonStructure, i: number) => {
        return (
          <StyledDiv
            key={i}
            onClick={() => {
              props.setContenidoPresente(e);
            }}
            selected={props.contenidoPresente === e ? true : false}
          >
            {e?.titulo}
          </StyledDiv>
        );
      })}
    </SelectorStyled>
  );
}
