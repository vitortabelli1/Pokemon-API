export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonGameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  name: string;
  abilities: PokemonAbility[];
  game_indices: PokemonGameIndex[];
}
