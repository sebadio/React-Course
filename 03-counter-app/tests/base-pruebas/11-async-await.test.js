import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("11-async-await", () => {
  test("getImagen deberia devolver una imagen", async () => {
    const imagen = await getImagen().then(console.log);
    expect(typeof imagen).toBe("string");
  });
});
