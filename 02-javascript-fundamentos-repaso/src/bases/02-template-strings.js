const nombre = "Rimuru";
const apellido = "Tempest";

const nombreCompleto = `${nombre} ${apellido}`;
// this is the same as nombre + " " + apellido

console.log(nombreCompleto);

function getSaludo() {
  return `Hola, yo soy ${nombreCompleto}, no soy un slime malo!`;
}

console.log(`Este es un texto: ${getSaludo()}`);
