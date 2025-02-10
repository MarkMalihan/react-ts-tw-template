import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { searchPokemon } from "@/services/SampleService";
import PokemonData from "./PokemonData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Mock the searchPokemon service
vi.mock("@/services/SampleService", () => ({
  searchPokemon: vi.fn(),
}));

describe("PokemonData Component", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
  });

  const renderWithQueryClient = (ui: React.ReactElement) =>
    render(
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    );

  it("renders search input and button", () => {
    renderWithQueryClient(<PokemonData />);

    expect(
      screen.getByPlaceholderText(/search pokémon by name or id/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("updates input field correctly", () => {
    renderWithQueryClient(<PokemonData />);

    const input = screen.getByPlaceholderText(
      /search pokémon by name or id/i
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "pikachu" } });

    expect(input.value).toBe("pikachu");
  });

  it("displays loading state when searching", async () => {
    (searchPokemon as vi.mock).mockImplementation(() => new Promise(() => {}));

    renderWithQueryClient(<PokemonData />);

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
    // Correct the mock assertion to vi.Mock
    (searchPokemon as vi.Mock).mockResolvedValue({
      name: "pikachu",
      id: 25,
      height: 4,
      weight: 60,
      sprites: { front_default: "pikachu.png" },
      abilities: [{ ability: { name: "static" } }],
      types: [{ type: { name: "electric" } }],
    });

    renderWithQueryClient(<PokemonData />);

    fireEvent.change(
      screen.getByPlaceholderText(/search pokémon by name or id/i),
      {
        target: { value: "pikachu" },
      }
    );
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    // Wait for the data to be displayed
    await waitFor(() => {
      expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
    });

    // Check other data points
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("0.4 m")).toBeInTheDocument();
    expect(screen.getByText("6 kg")).toBeInTheDocument();
    expect(screen.getByText(/static/i)).toBeInTheDocument();
    expect(screen.getByText(/electric/i)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /pikachu sprite/i })
    ).toHaveAttribute("src", "pikachu.png");
  });

  it("displays error message if Pokémon is not found", async () => {
    (searchPokemon as vi.mock).mockResolvedValue(null);

    renderWithQueryClient(<PokemonData />);

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
    const errorMessage = "No Pokémon found. Please try another name or ID.";
    // Ensure the mock simulates an error response
    (searchPokemon as vi.mock).mockRejectedValueOnce(new Error(errorMessage));

    renderWithQueryClient(<PokemonData />);

    fireEvent.change(
      screen.getByPlaceholderText(/search pokémon by name or id/i),
      {
        target: { value: "pikachuw" },
      }
    );
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    // Wait for the error message to appear
    await waitFor(() =>
      expect(screen.getByText(errorMessage)).toBeInTheDocument()
    );
  });
});
