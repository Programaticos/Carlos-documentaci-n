import Link from "next/link";

function MiTabla(): React.ReactElement {
  return (
    <>
      {" "}
      <table border={1}>
        <thead>
          <tr>
            <th>Título1</th>
            <th>Título2</th>
            <th>Título3</th>
            <th>Título4</th>
            <th>Título5</th>
            <th>Título6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
          </tr>
          <tr>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
          </tr>
          <tr>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
          </tr>
        </tbody>
      </table>
      <Link href="../">Home</Link> | <Link href="./">Back</Link>
    </>
  );
}

export default MiTabla;
