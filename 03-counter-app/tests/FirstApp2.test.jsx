import { render, screen } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe("Pruebas en FirstApp.jsx", () => {
  const titulo = "Hola! Soy Rimuru el slime!";
  const subTitulo = "No soy un slime malo!";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={titulo} />);

    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hola! Soy Rimuru el slime!"', () => {
    render(<FirstApp title={titulo} />);
    expect(screen.getByText(titulo)).toBeTruthy;
  });

  test("Debe de mostrar el titulo en un H1", () => {
    render(<FirstApp title={titulo} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      titulo
    );
  });

  test("Debe de mostrar el subtitulo enviado por las props", () => {
    render(<FirstApp title={titulo} subTitle={subTitulo} />);

    expect(screen.getByText(subTitulo).innerHTML).toContain(subTitulo);
  });
});
