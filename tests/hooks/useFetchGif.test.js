import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../src-own/hooks/useFetchGif";

describe("Pruebas en el hook useFetchGif", () => {
  test("debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGif("One Punch"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe de regresar el estado inicial", async () => {
    const { result } = renderHook(() => useFetchGif("One Punch"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
