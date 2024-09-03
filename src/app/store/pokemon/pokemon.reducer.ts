// src/app/store/pokemon/pokemon.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { Pokemon } from '../../models/pokemon.model';
import * as PokemonActions from './pokemon.actions';

export interface PokemonState {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon | null;
  error: string | null;
}

export const initialState: PokemonState = {
  pokemons: [],
  selectedPokemon: null,
  error: null
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.loadPokemonsSuccess, (state, { pokemons }) => ({
    ...state,
    pokemons,
    error: null
  })),
  on(PokemonActions.loadPokemonsFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(PokemonActions.loadPokemonDetailsSuccess, (state, { pokemon }) => ({
    ...state,
    selectedPokemon: pokemon,
    error: null
  })),
  on(PokemonActions.loadPokemonDetailsFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(PokemonActions.filterPokemons, (state, { searchText }) => ({
    ...state,
    pokemons: state.pokemons.filter(pokemon => pokemon.name.toUpperCase().includes(searchText))
  })),
  on(PokemonActions.clearSearchResults, state => ({
    ...state,
    pokemons: []
  })),
  on(PokemonActions.clearSelectedPokemon, state => ({
    ...state,
    selectedPokemon: null
  }))
);
