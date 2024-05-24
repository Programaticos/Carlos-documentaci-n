import { MiBoton } from "@/components/otrosComponentes/MiBoton";
import { Select } from "@/components/otrosComponentes/Select";
import Link from "next/link";

function Formulario(): React.ReactElement {
  return (
    <>
      <h1>Esto es un formulario</h1>
      <div className="miFormulario">
        <form action="" className="contenido">
          <div className="sets">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu nombre aquí"
              required
            />
          </div>
          <br />
          <div className="sets">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="email" required />
          </div>
          <br />
          <div className="sets">
            <label htmlFor="adress">Direccion de envío</label>
            <input
              type="text"
              id="adress"
              placeholder="Tu dirección aquí"
              required
            />
          </div>
          <br />
          <div className="sets">
            <label htmlFor="city">Ciudad</label>
            <input
              type="text"
              id="city"
              placeholder="Esto es un placeholder"
              required
            />
          </div>
          <br />
          <div className="sets">
            <label htmlFor="cp">Código Postal</label>
            <input type="number" id="cp" placeholder="Código postal" required />
          </div>
          <br />
          <div className="sets">
            <label htmlFor="date">Fecha nacimiento</label>
            <input type="date" id="date" required />
          </div>
          <br />
          <div>
            <label htmlFor="textArea">Texto</label>
            <textarea id="textArea"></textarea>
          </div>
          <br />
          <p>Este select es un componente</p>
          <br />
          <Select />
          <br />
          <p>Este botón es un componente</p>
          <MiBoton titulo="Enter" />
        </form>
      </div>
      <br />
      <Link href="../">Home</Link> | <Link href="./">Back</Link>
    </>
  );
}

export default Formulario;
