import { useQuery } from "@tanstack/react-query";
import { searchPokemon } from "@/services/SampleService";
import { useState } from "react";

const fetchPokemon = async (query: string) => {
  const result = await searchPokemon(query.trim().toLowerCase());
  if (!result) {
    throw new Error("No Pokémon found. Please try another name or ID.");
  }
  return result;
};

const usePokemon = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const {
    data: pokemon,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["pokemon", searchQuery],
    queryFn: () => fetchPokemon(searchQuery),
    enabled: false,
    retry: false,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      refetch();
    }
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
    shadow: "bg-black",
  };

  return {
    pokemon,
    searchQuery,
    setSearchQuery,
    isLoading,
    error,
    handleSearch,
    typeColors,
  };
};

export default usePokemon;
