// Desestructuracion
// Asignacion desestructurante

const persona = {
  nombre: "Rimuru",
  apellido: "Tempest",
  edad: 2,
  clave: "Ciel",
};

// const { nombre, apellido, edad, clave } = persona;

// console.log(nombre, apellido, edad, clave);

const retornarUsuario = ({ nombre, edad, apellido, clave }) => {
  return {
    nombre: nombre,
    apellido: apellido,
    nombreClave: clave,
    edad: edad,
  };
};

console.log(retornarUsuario(persona));

// const { nombreClave, edad } = useContext(persona);

// console.log(nombreClave, edad);

// use context no funciona como dice el tutorial por algun motivo
