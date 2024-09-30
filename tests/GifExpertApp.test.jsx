import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src-own/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<GifExpertApp />);
    // screen.debug();
    expect(container).toMatchSnapshot();
  });

  test("debe de tener 0 categorias", () => {
    render(<GifExpertApp />);
    // screen.debug();

    expect(screen.queryByText("GifGrid")).toBeNull();
  });

  test("should ", () => {});
});
