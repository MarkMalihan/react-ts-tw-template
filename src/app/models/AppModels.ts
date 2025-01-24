export type SampleModel = {
  name: string;
  description: string;
};

// Type for abilities
export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

// Type for game indices
export interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

// Type for held items
export interface HeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: {
    rarity: number;
    version: {
      name: string;
      url: string;
    };
  }[];
}

// Type for moves
export interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    version_group: {
      name: string;
      url: string;
    };
    move_learn_method: {
      name: string;
      url: string;
    };
  }[];
}

// Type for stats
export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

// Type for types
export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

// Main Pokémon interface
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other?: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      "official-artwork": {
        front_default: string | null;
      };
    };
  };
  stats: Stat[];
  types: PokemonType[];
}
