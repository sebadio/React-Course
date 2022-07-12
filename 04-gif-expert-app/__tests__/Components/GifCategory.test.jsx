import { render, screen } from "@testing-library/react";

import { GifCategory } from "../../src/Components/GifCategory";

describe("Tests en GifCategory", () => {
  const image = {
    key: "Test",
    url: "https://test.com/",
    title: "Test",
  };

  test("Deberia de hacer match con el snapshot", () => {
    const { container } = render(<GifCategory key={image.key} {...image} />);

    expect(container).toMatchSnapshot();
  });

  test("Deberia de mostrar con el URL y el alt indicado", () => {
    render(<GifCategory key={image.key} {...image} />);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(image.url);
    expect(alt).toBe(image.title);
  });

  test("Titulo deberia existir en el componente", () => {
    render(<GifCategory key={image.key} {...image} />);

    expect(screen.getByText).toBeTruthy;
  });
});
