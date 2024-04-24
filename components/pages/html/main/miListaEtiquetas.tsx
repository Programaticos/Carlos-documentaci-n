import Link from "next/link";

function MiListaEtiquetas(): React.ReactElement {
  return (
    <>
      {" "}
      <ul>
        <li>
          <Link href="/HTML/listas">Listas</Link>
        </li>
        <li>
          <Link href="/HTML/encabezados">Encabezados</Link>
        </li>
        <li>
          <Link href="/HTML/parrafos">Párrafos</Link>
        </li>
        <li>
          <Link href="/HTML/anchor">Anchor</Link>
        </li>
        <li>
          <Link href="/HTML/img">Imagen</Link>
        </li>
        <li>
          <Link href="/HTML/button">Botones</Link>
        </li>
        <li>
          <Link href="/HTML/tabla">Tabla</Link>
        </li>
        <li>
          <Link href={"/HTML/formulario"}>Formulario</Link>
        </li>
        <li>
          <Link href={"/HTML/iFrame"}>iframe</Link>
        </li>
      </ul>
    </>
  );
}

export default MiListaEtiquetas;
