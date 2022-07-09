import { fireEvent, render, screen } from "@testing-library/react";
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

  test("Al hacer click en el boton de +1 deberia sumar 1 al counter", () => {
    render(<CounterApp value={valorInicial} />);

    fireEvent.click(screen.getByText("+1"));

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      String(valorInicial + 1)
    );
  });

  test("Al hacer click en el boton de -1 deberia restar 1 al counter", () => {
    render(<CounterApp value={valorInicial} />);

    fireEvent.click(screen.getByText("-1"));

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      String(valorInicial - 1)
    );
  });

  test("Al hacer click en el boton de reset, este deberia resetear el valor", () => {
    render(<CounterApp value={valorInicial} />);

    fireEvent.click(screen.getByText("Reset"));

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("0");
  });
});
