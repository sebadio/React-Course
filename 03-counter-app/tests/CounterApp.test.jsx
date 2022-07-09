import { render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe("Pruebas en CounterApp.jsx", () => {
  const valorInicial = 100;

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={valorInicial} />);

    expect(container).toMatchSnapshot();
  });

  test("El H2 'Counter debe mostrar el valor que se le de'", () => {
    render(<CounterApp value={valorInicial} />);

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      String(valorInicial)
    );
  });
});
