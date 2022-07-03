// import, export y funciones comunes de arreglos

import heroes, { owners } from "../data/heroes";

// console.log(owners);

// tarea

export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

// console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) => {
  return heroes.filter((element) => element.owner === owner);
};

// console.log(getHeroeByOwner("DC"));
