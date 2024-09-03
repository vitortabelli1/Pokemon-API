// src/app/store/pokemon/pokemon.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonService } from '../../services/pokemon.service';
import * as PokemonActions from './pokemon.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PokemonEffects {
  loadPokemons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.loadPokemons),
      mergeMap(() =>
        this.pokemonService.getPokemons().pipe(
          map(pokemons => PokemonActions.loadPokemonsSuccess({ pokemons })),
          catchError(error => of(PokemonActions.loadPokemonsFailure({ error })))
        )
      )
    )
  );

  loadPokemonDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.loadPokemonDetails),
      mergeMap(action =>
        this.pokemonService.getPokemonDetails(action.name).pipe(
          map(pokemon => PokemonActions.loadPokemonDetailsSuccess({ pokemon })),
          catchError(error => of(PokemonActions.loadPokemonDetailsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}
}
