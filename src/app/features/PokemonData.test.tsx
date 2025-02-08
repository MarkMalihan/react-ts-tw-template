import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { searchPokemon } from "@/services/SampleService";
import PokemonData from "./PokemonData";

// Mock the searchPokemon service
vi.mock("@/services/SampleService", () => ({
  searchPokemon: vi.fn(),
}));

describe("PokemonData Component", () => {
  it("renders search input and button", () => {
    render(<PokemonData />);

    expect(
      screen.getByPlaceholderText(/search pokémon by name or id/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("updates input field correctly", () => {
    render(<PokemonData />);

    const input = screen.getByPlaceholderText(
      /search pokémon by name or id/i
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "pikachu" } });

    expect(input.value).toBe("pikachu");
  });

  it("displays loading state when searching", async () => {
    (searchPokemon as vi.mock).mockImplementation(() => new Promise(() => {}));

    render(<PokemonData />);

    fireEvent.change(
      screen.getByPlaceholderText(/search pokémon by name or id/i),
      {
        target: { value: "pikachu" },
      }
    );
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    expect(await screen.findByText(/loading.../i)).toBeInTheDocument();
  });

  it("displays Pokémon data on successful fetch", async () => {
    (searchPokemon as vi.mock).mockResolvedValue({
      name: "pikachu",
      id: 25,
      height: 4,
      weight: 60,
      sprites: { front_default: "pikachu.png" },
      abilities: [{ ability: { name: "static" } }],
      types: [{ type: { name: "electric" } }],
    });

    render(<PokemonData />);

    fireEvent.change(
      screen.getByPlaceholderText(/search pokémon by name or id/i),
      {
        target: { value: "pikachu" },
      }
    );
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    await waitFor(() =>
      expect(screen.getByText(/pikachu/i)).toBeInTheDocument()
    );

    const idElement = screen.getByText(/ID:/i);
    expect(idElement).toBeInTheDocument();

    const numberElement = screen.getByText("25");
    expect(numberElement).toBeInTheDocument();

    const heightElement = screen.getByText(/height:/i);
    expect(heightElement).toBeInTheDocument();

    const heightValue = screen.getByText("0.4 m");
    expect(heightValue).toBeInTheDocument();

    const weightElement = screen.getByText(/weight:/i);
    expect(weightElement).toBeInTheDocument();

    const weightValue = screen.getByText("6 kg");
    expect(weightValue).toBeInTheDocument();

    expect(screen.getByText(/static/i)).toBeInTheDocument();
    expect(screen.getByText(/electric/i)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /pikachu sprite/i })
    ).toHaveAttribute("src", "pikachu.png");
  });

  it("displays error message if Pokémon is not found", async () => {
    (searchPokemon as vi.mock).mockResolvedValue(null);

    render(<PokemonData />);

    fireEvent.change(
      screen.getByPlaceholderText(/search pokémon by name or id/i),
      {
        target: { value: "unknownPokemon" },
      }
    );
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    expect(await screen.findByText(/no pokémon found/i)).toBeInTheDocument();
  });

  it("handles API errors gracefully", async () => {
    (searchPokemon as vi.mock).mockRejectedValue(new Error("Network error"));

    render(<PokemonData />);

    fireEvent.change(
      screen.getByPlaceholderText(/search pokémon by name or id/i),
      {
        target: { value: "pikachu" },
      }
    );
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    expect(
      await screen.findByText(/failed to fetch pokémon data/i)
    ).toBeInTheDocument();
  });
});
