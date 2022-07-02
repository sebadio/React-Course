const arreglo = [1, 2, 3, 4];

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

// No utilizar el push, utilizar el "spread"

let arreglo2 = [...arreglo, 5];
// los tres puntos ( ... ) es el operador spread

let arreglo3 = arreglo2.map((x) => {
  return x * 2;
});
// la funcion .map(), funciona como un for each, pero para crear un nuevo array con los valores despues de pasarlos por una funcion ej: array.map((x)=>{return ${elemento del array} * 2})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
