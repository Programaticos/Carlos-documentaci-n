import Link from "next/link";

function MiListaEtiquetas() {
  return (
    <>
      {" "}
      <Link
        href="https://developer.mozilla.org/es/docs/Web/HTML"
        target="_blank"
      >
        <h3>Pulsa para ver la documentación oficial de html</h3>
      </Link>
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
      <Link href="./">Home</Link>
    </>
  );
}

export default MiListaEtiquetas;
