import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe("Pruebas en FirstApp.jsx", () => {
  test("Debe hacer match con el snapshot", () => {
    const title = "Hola soy Rimuru";
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el titulo en un H1", () => {
    const titulo = "Hola soy Rimuru";
    const { container, getByText } = render(<FirstApp title={titulo} />);

    expect(getByText(titulo)).toBeTruthy;

    const h1 = container.querySelector("h1");

    expect(h1.innerHTML).toContain(titulo);
  });
});
