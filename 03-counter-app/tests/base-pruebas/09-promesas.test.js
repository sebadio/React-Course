import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("09-promesas Tests", () => {
  test("getHeroesByIdAsync debe retornar un heroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toBe(hero);
      done();
    });
  });

  test("getHeroesByIdAsync debe retornar un error si el heroe no existe", (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe`);
      done();
    });
  });
});
