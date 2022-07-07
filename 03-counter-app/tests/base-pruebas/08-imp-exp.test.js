import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("08-imp-exp", () => {
  test("getHeroeByID debe retornar un heroe por ID", () => {
    const id = 1;

    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeByID debe retornar undefined si no existe el id", () => {
    const id = 109;

    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test("getHeroeByOwner debe retornar un arreglo de los heroes de DC", () => {
    const owner = "DC";

    const hero = getHeroesByOwner(owner);

    expect(hero).toEqual(hero.filter((hero) => hero.owner === owner));

    expect(hero.length).toBe(3);
  });

  test("getHeroeByOwner debe retornar un arreglo de los heroes de Marvel", () => {
    const owner = "Marvel";

    const hero = getHeroesByOwner(owner);

    expect(hero).toEqual(hero.filter((hero) => hero.owner === owner));

    expect(hero.length).toBe(2);
  });

  test("getHeroeByOwner debe retornar un array vacio si no existe el owner", () => {
    const owner = "JumpForce";

    const hero = getHeroesByOwner(owner);

    expect(hero).toEqual(hero.filter((hero) => hero.owner === owner));
  });
});
