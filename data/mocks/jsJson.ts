export const jsJson = [
  {
    titulo: "Funciones",
    descripcion:
      "Las funciones en JavaScript son bloques de código reutilizable que realizan una tarea específica. Puedes definir tus propias funciones y llamarlas en cualquier parte de tu código. Las funciones también pueden aceptar argumentos y devolver valores, lo que las hace flexibles y poderosas.\n\nEjemplo:\n\n// Definición de una función que suma dos números\nfunction sumar(a, b) {\n  return a + b;\n}\n\n// Llamada a la función con argumentos\nlet resultado = sumar(5, 3);\nconsole.log(resultado); // Output: 8",
    ejemplo: [
      {
        titulo: "Funciones",
        codigo: `
    function saludar(nombre) {
      return 'Hola, ' + nombre + '!';
    }

    const mensaje = saludar('Mundo');
    console.log(mensaje); // Output: Hola, Mundo!
  `,
      },
    ],
  },
];
