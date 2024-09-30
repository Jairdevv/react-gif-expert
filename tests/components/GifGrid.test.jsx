import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src-own/components";
import { useFetchGif } from "../../src-own/hooks/useFetchGif";

jest.mock("../../src-own/hooks/useFetchGif");

describe("Pruebas en <GifGrid/>", () => {
  const category = "Saitama";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGif.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se cargan las imagenes del useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];

    useFetchGif.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
