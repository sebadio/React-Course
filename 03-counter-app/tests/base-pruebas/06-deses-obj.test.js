import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("06-deses-obj tests", () => {
  test("a", () => {
    const nombre = "Rimuru";
    const nombreClave = "Rimuru Tempest";
    const anios = 2;
    const rango = "Demon Lord";
    const latlng = {
      lat: 14.1232,
      lng: -12.3232,
    };

    const user = usContext(nombreClave, nombre, anios, rango);

    expect(user).toEqual({
      nombre: nombre,
      nombreClave: nombreClave,
      anios: anios,
      rango: rango,
      latlng: latlng,
    });
  });
});
