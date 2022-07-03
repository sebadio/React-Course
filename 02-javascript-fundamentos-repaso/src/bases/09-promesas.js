import { getHeroeById } from "./bases/08-import&export";
import { getHeroeByOwner } from "./bases/08-import&export";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(getHeroeById(2));
//     // reject("No se pudo encontrar el heroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log(heroe);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getHeroeById(id) === undefined) {
        reject(`No se pudo encontrar el heroe con el ID: ${id}`);
      } else {
        resolve(getHeroeById(id));
      }
    }, 2000);
  });
};

getHeroeByIdAsync(14)
  .then((heroe) => {
    console.log(heroe);
  })
  .catch((err) => {
    console.warn(err);
  })
  .finally(() => {
    console.log("Finished");
  });
