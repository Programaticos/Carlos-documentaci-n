import Link from "next/link";
import Image from "next/image";

function MiImg() {
  return (
    <>
      <main className="imgContainer">
        <h1>Etiqueta img</h1>
        <p>
          La etiqueta img se usa para insertar imágenes, <br /> aunque esto es
          el componente de Next Image
        </p>
        <Image
          width={300}
          height={200}
          src={"/img/204.jpg"}
          alt="Cat with status 204"
        />
        <div>
          <Link href="../">Home</Link> | <Link href="./">Back</Link>
        </div>
      </main>
    </>
  );
}

export default MiImg;
