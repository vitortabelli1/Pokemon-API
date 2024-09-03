// src/app/store/pokemon/pokemon.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from './pokemon.reducer';

const getPokemonState = createFeatureSelector<PokemonState>('pokemon');

export const selectPokemonNames = createSelector(
  getPokemonState,
  (state: PokemonState) => state.pokemons.map(pokemon => pokemon.name)
);

export const selectShowResults = createSelector(
  getPokemonState,
  (state: PokemonState) => state.pokemons.length > 0
);

export const selectSelectedPokemonDetails = createSelector(
  getPokemonState,
  (state: PokemonState) => state.selectedPokemon
);
