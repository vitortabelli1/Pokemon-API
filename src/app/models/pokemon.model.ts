// src/app/models/pokemon.model.ts

// Interface para representar a habilidade de um Pokémon.
// Inclui a propriedade 'ability' que é um objeto com 'name' e 'url'.
export interface PokemonAbility {
  ability: {
    name: string;  // Nome da habilidade do Pokémon
    url: string;   // URL para obter mais detalhes sobre a habilidade
  };
}

// Interface para representar o índice do jogo de um Pokémon.
// Inclui a propriedade 'version', que é um objeto com 'name' e 'url',
// e 'game_index' que é um número que indica o índice do jogo.
export interface PokemonGameIndex {
  game_index: number;  // Índice do jogo do Pokémon
  version: {
    name: string;  // Nome da versão do jogo
    url: string;   // URL para obter mais detalhes sobre a versão do jogo
  };
}

// Interface para representar um Pokémon.
// Inclui as propriedades 'name', 'abilities' e 'game_indices'.
// 'abilities' é um array de habilidades do Pokémon, e 'game_indices' é um array de índices de jogos.
export interface Pokemon {
  name: string;  // Nome do Pokémon
  abilities: PokemonAbility[];  // Lista de habilidades do Pokémon, usando a interface PokemonAbility
  game_indices: PokemonGameIndex[];  // Lista de índices de jogos do Pokémon, usando a interface PokemonGameIndex
}
