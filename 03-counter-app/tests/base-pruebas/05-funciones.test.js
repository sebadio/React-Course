import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("Get user debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUsuario debe retornar un objeto", () => {
    const name = "Rimuru";

    const usuarioActivo = getUsuarioActivo(name);

    expect(usuarioActivo).toEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
