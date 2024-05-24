import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSample = (props: any) => {
  return (
    <div>
      <h2>Ejemplo de Código JavaScript</h2>
      <SyntaxHighlighter language="javascript" style={ghcolors}>
        {props.codigo}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSample;
