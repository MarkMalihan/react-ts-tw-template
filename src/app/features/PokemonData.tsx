import { Button } from "@/components/ui/Button";
import usePokemon from "@/hooks/usePokemon";

const PokemonData = () => {
  const {handleSearch, searchQuery, setSearchQuery, isLoading, error, pokemon, typeColors} = usePokemon()

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

      {/* isLoading State */}
      {isLoading && (
        <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
          Loading...
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-lg font-semibold text-red-600"> {error instanceof Error ? error.message : "An error occurred while fetching the data."}</div>
      )}

      {/* Pokémon Data */}
      {pokemon && !isLoading && (
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
            <span className="font-bold">ID:</span> {pokemon.id}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            <span className="font-bold">Height:</span> {pokemon.height / 10} m
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            <span className="font-bold">Weight:</span> {pokemon.weight / 10} kg
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            <span>Abilities:</span>{" "}
            {pokemon.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}
          </p>
          <p className="mt-2">
            <span className="text-gray-600 dark:text-gray-300">Types:</span>{" "}
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
