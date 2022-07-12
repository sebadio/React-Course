import { render, screen } from "@testing-library/react";

import getGifs from "../../src/helpers/getGifs";

describe("Pruebas en getGifs.js", () => {
  test("Deberia devolver un array con los gifs", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBeGreaterThan(0);

    for (let i = 0; i < gifs.length; i++) {
      expect(gifs[i]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
      });
    }
  });
});
