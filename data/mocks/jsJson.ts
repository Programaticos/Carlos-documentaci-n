export const jsJson = [
  {
    titulo: "Funciones",
    descripcion:
      "Las funciones en JavaScript son bloques de código reutilizable que realizan una tarea específica. Puedes definir tus propias funciones y llamarlas en cualquier parte de tu código. Las funciones también pueden aceptar argumentos y devolver valores, lo que las hace flexibles y poderosas.",
    ejemplos: [
      {
        titulo: "Función",
        codigo: `
          function saludar(nombre) {
            return 'Hola, ' + nombre + '!';
          }

          const mensaje = saludar('Mundo');
          console.log(mensaje); // Output: Hola, Mundo!
        `,
      },
      {
        titulo: "Otra Función",
        codigo: `
          function sumar(a, b) {
            return a + b;
          }

          const resultado = sumar(5, 3);
          console.log(resultado); // Output: 8
        `,
      },
    ],
  },
  {
    titulo: "Clases",
    descripcion:
      "Las clases en JavaScript son una forma de definir objetos y su comportamiento. Utilizan la palabra clave `class` para definir una plantilla para la creación de objetos. Las clases pueden tener un constructor para inicializar propiedades y métodos para definir comportamientos.",
    ejemplos: [
      {
        titulo: "Clase",
        codigo: `
          class Rectangulo {
            constructor(ancho, altura) {
              this.ancho = ancho;
              this.altura = altura;
            }

            calcularArea() {
              return this.ancho * this.altura;
            }
          }

          const rect = new Rectangulo(10, 5);
          console.log(rect.calcularArea()); // Output: 50
        `,
      },
    ],
  },
  {
    titulo: "Operadores",
    descripcion:
      "Los operadores en JavaScript son símbolos que realizan operaciones en uno o más operandos. Pueden ser aritméticos, de comparación, lógicos, de asignación, entre otros. Los operadores permiten realizar cálculos, comparaciones y otras acciones en el código JavaScript.",
    ejemplos: [
      {
        titulo: "Operadores",
        codigo: `
          let a = 5;
          let b = 3;

          // Operadores aritméticos
          let suma = a + b; // 8
          let resta = a - b; // 2
          let multiplicacion = a * b; // 15
          let division = a / b; // ~1.67

          // Operadores de comparación
          let igualdad = a === b; // false
          let desigualdad = a !== b; // true
          let mayorQue = a > b; // true
          let menorQue = a < b; // false
        `,
      },
    ],
  },

  {
    titulo: "Variables",
    descripcion:
      "Las variables en JavaScript se utilizan para almacenar datos. Pueden contener valores de diferentes tipos, como números, cadenas de texto, booleanos, objetos, etc. Las variables se pueden declarar utilizando las palabras clave `var`, `let` o `const`.",
    ejemplos: [
      {
        titulo: "Variables",
        codigo: `
          // Declaración de variables
          var x = 5;
          let y = "Hola";
          const z = true;

          // Modificación de variables
          x = 10;
          y = "Adiós";
          // z = false; // Esto generaría un error, las constantes no se pueden reasignar

          console.log(x, y, z);
        `,
      },
    ],
  },
  {
    titulo: "Arrays",
    descripcion:
      "Los arrays en JavaScript son estructuras de datos que se utilizan para almacenar múltiples valores en una sola variable. Pueden contener cualquier tipo de dato y su tamaño puede cambiar dinámicamente. Los arrays se definen utilizando corchetes `[]` y los elementos se separan por comas.",
    ejemplos: [
      {
        titulo: "Arrays",
        codigo: `
          // Declaración de un array
          const frutas = ["Manzana", "Banana", "Fresa"];

          // Acceso a elementos del array
          console.log(frutas[0]); // Output: Manzana

          // Añadir elementos al array
          frutas.push("Naranja");
          console.log(frutas); // Output: ["Manzana", "Banana", "Fresa", "Naranja"]

          // Eliminar elementos del array
          frutas.pop();
          console.log(frutas); // Output: ["Manzana", "Banana", "Fresa"]
        `,
      },
    ],
  },
  {
    titulo: "Objetos",
    descripcion:
      "Los objetos en JavaScript son colecciones de pares de clave-valor. Se utilizan para representar entidades con propiedades y métodos. Los objetos se definen utilizando llaves `{}` y las propiedades se acceden mediante la notación de punto o corchetes.",
    ejemplos: [
      {
        titulo: "Objetos",
        codigo: `
          // Declaración de un objeto
          const persona = {
            nombre: "Juan",
            edad: 30,
            ciudad: "Madrid"
          };

          // Acceso a propiedades del objeto
          console.log(persona.nombre); // Output: Juan
          console.log(persona["edad"]); // Output: 30

          // Modificación de propiedades del objeto
          persona.edad = 35;
          console.log(persona.edad); // Output: 35

          // Añadir nuevas propiedades al objeto
          persona.profesion = "Ingeniero";
          console.log(persona); // Output: { nombre: "Juan", edad: 35, ciudad: "Madrid", profesion: "Ingeniero" }
        `,
      },
    ],
  },
  {
    titulo: "Condicionales",
    descripcion:
      "Los condicionales en JavaScript se utilizan para tomar decisiones basadas en condiciones específicas. Pueden ser simples (`if`), múltiples (`if...else if...else`) o anidados. Los condicionales evalúan una expresión y ejecutan un bloque de código si la expresión es verdadera.",
    ejemplos: [
      {
        titulo: "Condicionales",
        codigo: `
          let edad = 18;

          if (edad >= 18) {
            console.log("Eres mayor de edad");
          } else {
            console.log("Eres menor de edad");
          }
        `,
      },
    ],
  },
  {
    titulo: "Bucles",
    descripcion:
      "Los bucles en JavaScript se utilizan para ejecutar repetidamente un bloque de código mientras se cumpla una condición específica. Los bucles más comunes son `for`, `while` y `do...while`. Se utilizan para automatizar tareas repetitivas.",
    ejemplos: [
      {
        titulo: "Bucles",
        codigo: `
          // Bucle for
          for (let i = 0; i < 5; i++) {
            console.log(i);
          }

          // Bucle while
          let j = 0;
          while (j < 5) {
            console.log(j);
            j++;
          }

          // Bucle do...while
          let k = 0;
          do {
            console.log(k);
            k++;
          } while (k < 5);
        `,
      },
    ],
  },
  {
    titulo: "Funciones de Flecha",
    descripcion:
      "Las funciones de flecha son una forma abreviada de escribir funciones en JavaScript. Son funciones anónimas que pueden ser más concisas y expresivas que las funciones tradicionales. Se definen utilizando la sintaxis `() => {}`.",
    ejemplos: [
      {
        titulo: "Funciones de flecha",
        codigo: `
          // Función tradicional
          function sumar(a, b) {
            return a + b;
          }

          // Función de flecha
          const sumarArrow = (a, b) => a + b;

          console.log(sumar(5, 3)); // Output: 8
          console.log(sumarArrow(5, 3)); // Output: 8
        `,
      },
    ],
  },
  {
    titulo: "Promesas",
    descripcion:
      "Las promesas en JavaScript se utilizan para manejar operaciones asincrónicas. Representan un valor que puede estar disponible ahora, en el futuro o nunca. Las promesas tienen tres estados: pendiente, cumplida y rechazada.",
    ejemplos: [
      {
        titulo: "Promesas",
        codigo: `
          // Ejemplo de promesa que se resuelve después de un tiempo
          const miPromesa = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve("¡Promesa resuelta!");
            }, 2000);
          });

          // Usar la promesa
          miPromesa.then((resultado) => {
            console.log(resultado); // Output: ¡Promesa resuelta!
          });
        `,
      },
    ],
  },
  {
    titulo: "Async/Await",
    descripcion:
      "Async/Await es una característica de JavaScript que permite escribir código asincrónico de forma síncrona. Utiliza las palabras clave `async` y `await` para manejar promesas de una manera más legible y fácil de entender.",
    ejemplos: [
      {
        titulo: "Async/Await",
        codigo: `
          // Función que devuelve una promesa que se resuelve después de un tiempo
          function esperar(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }

          // Función asincrónica que utiliza async/await
          async function ejecutar() {
            console.log('Inicio');
            await esperar(2000);
            console.log('Fin');
          }

          // Llamada a la función asincrónica
          ejecutar();
        `,
      },
    ],
  },
  {
    titulo: "Módulos",
    descripcion:
      "Los módulos en JavaScript permiten dividir el código en archivos más pequeños y reutilizables. Cada archivo de módulo contiene su propio ámbito y las exportaciones e importaciones se utilizan para compartir código entre diferentes módulos.",
    ejemplos: [
      {
        titulo: "Módulos",
        codigo: `
          // En un archivo llamado modulo.js
          export function saludar(nombre) {
            return 'Hola, ' + nombre + '!';
          }

          // En otro archivo
          import { saludar } from './modulo.js';

          const mensaje = saludar('Mundo');
          console.log(mensaje); // Output: Hola, Mundo!
        `,
      },
    ],
  },
  {
    titulo: "Eventos",
    descripcion:
      "Los eventos en JavaScript son acciones que ocurren en el DOM o en el navegador, como hacer clic en un botón, cargar una página, mover el mouse, etc. Se utilizan para crear interactividad en las páginas web y se pueden manejar mediante event listeners.",
    ejemplos: [
      {
        titulo: "Eventos",
        codigo: `
          // Obtener referencia al botón
          const boton = document.getElementById('miBoton');

          // Agregar un event listener al botón
          boton.addEventListener('click', function() {
            console.log('¡Se hizo clic en el botón!');
          });
        `,
      },
    ],
  },
  {
    titulo: "DOM Manipulación",
    descripcion:
      "La manipulación del DOM en JavaScript se utiliza para cambiar el contenido, la estructura o el estilo de una página web. Permite agregar, eliminar o modificar elementos HTML, así como responder a eventos del usuario.",
    ejemplos: [
      {
        titulo: "DOM Manipulación",
        codigo: `
          // Obtener referencia al elemento
          const titulo = document.getElementById('titulo');

          // Cambiar el contenido del elemento
          titulo.textContent = 'Nuevo Título';

          // Cambiar el estilo del elemento
          titulo.style.color = 'red';

          // Crear un nuevo elemento y agregarlo al DOM
          const nuevoParrafo = document.createElement('p');
          nuevoParrafo.textContent = 'Este es un nuevo párrafo';
          document.body.appendChild(nuevoParrafo);
        `,
      },
    ],
  },
  {
    titulo: "Expresiones Regulares",
    descripcion:
      "Las expresiones regulares en JavaScript se utilizan para buscar y manipular texto basado en patrones específicos. Permiten realizar búsquedas, reemplazos, validaciones y otras operaciones complejas en cadenas de texto.",
    ejemplos: [
      {
        titulo: "Expresiones Regulares",
        codigo: `
          // Ejemplo de validación de correo electrónico
          const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          const correo = 'ejemplo@correo.com';

          if (patronCorreo.test(correo)) {
            console.log('Correo válido');
          } else {
            console.log('Correo inválido');
          }
        `,
      },
    ],
  },
];
