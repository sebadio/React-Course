import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en GifExpertApp.jsx", () => {
  test("Deberia hacer match con el snapshot", () => {
    render(<GifExpertApp />);
    expect(screen).toMatchSnapshot();
  });

  test("Deberia de existir el titulo", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("Gif-expert-app")).toBeTruthy();
  });

  test('Deberia de existir la categoria "Valorant"', () => {
    render(<GifExpertApp />);
    expect(screen.getByText("Valorant")).toBeTruthy();
  });

  test("Deberia de existir el div de loading", () => {
    render(<GifExpertApp />);
    expect(screen.getByLabelText("div")).toBeTruthy();
  });

  test("El valor del input deberia de cambiar al escribir en el", () => {
    render(<GifExpertApp />);
    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Rimuru" },
    });

    expect(screen.getByRole("textbox").value).toBe("Rimuru");
  });

  test("El valor del input deberia de estar vacio al hacer un submit", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, {
      target: { value: "Rimuru" },
    });
    expect(screen.getByRole("textbox").value).toBe("Rimuru");

    fireEvent.submit(form);
    expect(input.value).toBeFalsy();
  });

  test("Se deberia crear una nueva categoria al hacer un submit", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const inputValue = "Rimuru";
    const form = screen.getByRole("form");

    fireEvent.input(input, {
      target: { value: inputValue },
    });
    expect(screen.getByRole("textbox").value).toBe(inputValue);

    fireEvent.submit(form);

    expect(screen.getByText(inputValue)).toBeTruthy();
  });

  test("NO se deberia crear una nueva categoria al hacer un submit vacio", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const inputValue = "";
    const form = screen.getByRole("form");

    fireEvent.input(input, {
      target: { value: inputValue },
    });
    expect(screen.getByRole("textbox").value).toBe(inputValue);

    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 1 }).length).toBe(1);
  });
});
