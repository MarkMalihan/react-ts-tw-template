import { Pokemon } from "@/models/AppModels";

export const searchPokemon = async (
  params: string
): Promise<Pokemon | null> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data: Pokemon = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
};
