import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-array", () => {
  test("Deberia retornar un string y un numero", () => {
    const [string, number] = retornaArreglo();

    expect(typeof string).toBe("string");
    expect(typeof number).toBe("number");
  });
});
