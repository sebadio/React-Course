import { fireEvent, render, screen } from "@testing-library/react";

import { AddCategory } from "../../src/Components/AddCategory";

describe("Pruebas en AddCategory", () => {
  test("AddCategory deberia hacer match con el snapshot", () => {
    const { container } = render(<AddCategory onNewCategory={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  test("Deberia de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Rimuru" } });
    expect(input.value).toBe("Rimuru");
  });

  test("El valor de la caja de texto deberia de volver a ser null despues de hacer submit", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "Rimuru" } });
    expect(input.value).toBe("Rimuru");

    fireEvent.submit(form);
    expect(input.value).toBeFalsy();
  });

  test("onChangedInput deberia para ser llamado", () => {
    const inputValue = "Rimuru";
    const onChangedInput = jest.fn();

    render(<AddCategory onNewCategory={onChangedInput} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);

    fireEvent.submit(form);

    expect(onChangedInput).toHaveBeenCalledTimes(1);
    expect(onChangedInput).toHaveBeenCalledWith(inputValue);
  });

  test("onChangedInput deberia NO ser llamado ya que el input esta vacio", () => {
    const onChangedInput = jest.fn();
    render(<AddCategory onNewCategory={onChangedInput} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onChangedInput).toHaveBeenCalledTimes(0);
  });
});
