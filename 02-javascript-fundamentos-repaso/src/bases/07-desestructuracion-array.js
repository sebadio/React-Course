const personajes = ["Rimuru", "Ciel", "Kaguya", "Shirogane"];

const [, , p3] = personajes;

console.log(p3);

const retornarArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornarArreglo();

console.log(letras, numeros);

// Tarea

const a = (valor) => {
  // en vez de "a" la funcion se deberia llamar useState
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, funcion] = a("Rimuru"); // en vez de "a" la funcion se deberia llamar useState

console.log(nombre);
funcion();

// useState tampoco funciona como dice el tutorial
