// funciones en JS

function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

//No hacer una funcion asi!, se puede sobre escribir de esta forma:

saludar = 30;

console.log(saludar);
// y este console.log devolvera 30, mostrando que la funcion quedo inutilizada

//la idea es hacer una funcion adentro de una constante

const saludo = (nombre) => {
  return `Hola ${nombre}!`;
};

console.log(saludo("Rimuru"));

// en este caso si sobre escribimos el saludo, lo que pasaria es que nos daria error ya que estamos tratando de re definir una constante

// tambien podemos acortar esa funcion aun mas!

const saludo2 = (nombre) => `Hola ${nombre}!!`;

console.log(saludo2("Rimuru"));

//para regresar un objeto sin la palabra return y sin las { } hacemos:

const getuser = () => ({
  uid: "asda8989",
  username: "Manas: Ciel",
});

console.log(getuser());

// ejercicio:

// function getUsuarioActivo(nombre) {
//   return {
//     uid: "123abc",
//     username: nombre,
//   };
// }

// const usuarioActivo = getUsuarioActivo("Veldora");
// console.log(usuarioActivo);

const getUsuarioActivo = (nombre) => ({ uid: "123adb", username: nombre });

const usuarioActivo = getUsuarioActivo("Veldora");
console.log(usuarioActivo);
