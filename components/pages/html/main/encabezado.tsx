import Link from "next/link";

function Encabezado() {
  return (
    <>
      {" "}
      <p>
        Los encabezados se usan para marcar título en un texto.<br></br> Esos
        encabezados tienen distintos tamaños que ayudan a identificar el orden
        de la prioridad en el texto.{" "}
      </p>
      <h1>Ejemplo de encabezado 1</h1>
      <p>&lt;h1&gt; Ejemplo de encabezado 1 &lt;/h1&gt;</p>
      <h2>Ejemplo de encabezado 2</h2>
      <p>&lt;h2&gt; Ejemplo de encabezado 2 &lt;/h2&gt;</p>
      <h4>Ejemplo de encabezado 4</h4>
      <p>&lt;h4&gt; Ejemplo de encabezado 4 &lt;/h4&gt;</p>
      <h5>Ejemplo de encabezado 5</h5>
      <p>&lt;h5&gt; Ejemplo de encabezado 5 &lt;/h5&gt;</p>
      <h6>Ejemplo de encabezado 6</h6>
      <p>&lt;h6&gt; Ejemplo de encabezado 6 &lt;/h6&gt;</p>
      <Link href="../">Home</Link> | <Link href="./">Back</Link>
    </>
  );
}

export default Encabezado;
