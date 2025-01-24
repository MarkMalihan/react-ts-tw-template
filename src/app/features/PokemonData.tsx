import React, { useState } from "react";
import { Pokemon } from "@/models/AppModels";
import { searchPokemon } from "@/services/SampleService";
import { Button } from "@/components/ui/Button";

const PokemonData: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = async (query: string) => {
    if (!query.trim()) {
      return;
    }

    setLoading(true);
    setError(null);
    setPokemon(null);

    try {
      const result = await searchPokemon(query.trim().toLowerCase());

      if (result) {
        setPokemon(result);
      } else {
        setError("No Pokémon found. Please try another name or ID.");
      }
    } catch (err) {
      setError("Failed to fetch Pokémon data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPokemon(searchQuery);
  };

  const typeColors: Record<string, string> = {
    normal: "bg-gray-500",
    fighting: "bg-red-500",
    flying: "bg-blue-400",
    poison: "bg-purple-500",
    ground: "bg-yellow-500",
    rock: "bg-gray-700",
    bug: "bg-green-500",
    ghost: "bg-indigo-500",
    steel: "bg-gray-600",
    fire: "bg-orange-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-400",
    psychic: "bg-pink-500",
    ice: "bg-teal-400",
    dragon: "bg-red-700",
    dark: "bg-gray-800",
    fairy: "bg-pink-300",
    unknown: "bg-gray-400",
    shadow: "bg-black", // Shadow is special, can be handled as such
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center mb-6 w-full max-w-md dark:text-white border rounded-lg"
      >
        <input
          type="text"
          placeholder="Search Pokémon by name or ID"
          className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-0"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          type="submit"
          variant="primary"
          className="rounded-none rounded-r-lg"
        >
          Search
        </Button>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
          Loading...
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-lg font-semibold text-red-600">{error}</div>
      )}

      {/* Pokémon Data */}
      {pokemon && !loading && (
        <div className="bg-gray-300 dark:bg-slate-800 rounded-lg p-8 max-w-sm w-full text-center">
          <img
            className="w-32 h-32 mx-auto"
            src={pokemon.sprites.front_default || ""}
            alt={`${pokemon.name} sprite`}
          />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white capitalize mt-4">
            {pokemon.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            <strong>ID:</strong> {pokemon.id}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            <strong>Height:</strong> {pokemon.height / 10} m
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            <strong>Weight:</strong> {pokemon.weight / 10} kg
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            <strong>Abilities:</strong>{" "}
            {pokemon.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}
          </p>
          <p className="mt-2">
            <strong className="text-gray-600 dark:text-gray-300">Types:</strong>{" "}
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className={`inline-block px-3 py-1 text-sm font-semibold text-gray-100 rounded-full ${
                  typeColors[type.type.name] || "bg-gray-300"
                }`}
              >
                {type.type.name}
              </span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default PokemonData;
