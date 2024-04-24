import Link from "next/link";

function MiLista(): React.ReactElement {
  return (
    <>
      <main>
        <h1>Estos serían los ejemplos de las distintas listas de HTML:</h1>
        <p>Aparece el tipo de lista, un ejemplo y el código de la misma</p>
        <h2>Lista Desordenada</h2>
        <ul>
          <li>Manzanas</li>
          <li>Plátanos</li>
          <li>Uvas</li>
          <li>Peras</li>
        </ul>
        <pre>
          &lt;ul&gt; &lt;li&gt;Manzanas&lt;/li&gt; &lt;li&gt;Plátanos&lt;/li&gt;
          &lt;li&gt;Uvas&lt;/li&gt; &lt;li&gt;Peras&lt;/li&gt; &lt;/ul&gt;
        </pre>
        <h2>Lista Ordenada</h2>
        <ol>
          <li>Desayuno</li>
          <li>Almuerzo</li>
          <li>Cena</li>
        </ol>
        <pre>
          &lt;ol&gt; &lt;li&gt;Desayuno&lt;/li&gt; &lt;li&gt;Almuerzo&lt;/li&gt;
          &lt;li&gt;Cena&lt;/li&gt; &lt;/ol&gt;
        </pre>
        <h2>Lista de Definiciones</h2>
        <dl>
          <dt>HTML</dt>
          <dd>Lenguaje de marcado utilizado para crear páginas web.</dd>
          <dt>CSS</dt>
          <dd>Lenguaje utilizado para dar estilo a las páginas web.</dd>
          <dt>JavaScript</dt>
          <dd>
            Lenguaje de programación utilizado para crear interactividad en
            páginas web.
          </dd>
        </dl>
        <pre>
          &lt;dl&gt; &lt;dt&gt;HTML&lt;/dt&gt; &lt;dd&gt;Lenguaje de marcado
          utilizado para crear páginas web.&lt;/dd&gt; &lt;dt&gt;CSS&lt;/dt&gt;
          &lt;dd&gt;Lenguaje utilizado para dar estilo a las páginas <br />
          web.&lt;/dd&gt; &lt;dt&gt;JavaScript&lt;/dt&gt; &lt;dd&gt;Lenguaje de
          programación utilizado para crear interactividad en páginas
          web.&lt;/dd&gt; &lt;/dl&gt;
        </pre>
        <Link href="../">Home</Link> | <Link href="./">Back</Link>
      </main>
    </>
  );
}

export default MiLista;
