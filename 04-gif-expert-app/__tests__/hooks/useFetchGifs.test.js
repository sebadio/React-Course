import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en useFetchGifs.js", () => {
  test("Debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Pokemon"));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("El array de imagenes debe de ser mayor a 0", async () => {
    const { result } = renderHook(() => useFetchGifs("Pokemon"));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 5000, // Esto hace que espere 5 segundos a que lleguen las imagenes antes de tirar error
      }
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
