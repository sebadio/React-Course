import { render, screen } from "@testing-library/react";

import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GifGrid.jsx", () => {
  test("Deberia hacer match con el snapshot", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    const { container } = render(<GifGrid category={"Rimuru"} />);

    expect(container).toMatchSnapshot();
  });

  test("Deberia de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={"Rimuru"} />);

    expect(screen.getByLabelText("div")).toBeTruthy();
  });

  test("Debe de mostrar items cuando se cargan las imagenes", () => {
    const gifs = [
      {
        id: "123",
        title: "Rimuru",
        url: "https://localhost/Rimuru.jpg/",
      },
      {
        id: "321",
        title: "Veldora",
        url: "https://localhost/Veldora.jpg/",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={"Rimuru"} />);

    expect(screen.getAllByRole("img").length).toBe(gifs.length);
  });
});
