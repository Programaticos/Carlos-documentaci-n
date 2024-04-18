import { useState } from "react";

function Contador() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setcount(count + 1)}>Incrementar</button>
      <button onClick={() => setcount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default Contador;
