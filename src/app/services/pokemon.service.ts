import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  // Método para obter a lista de Pokémons
  getPokemons(limit: number = 20): Observable<Pokemon[]> {
    return this.http.get<any>(`${this.apiUrl}?limit=${limit}`).pipe(
      map(response => response.results)
    );
  }

  // Método para obter detalhes de um Pokémon
  getPokemonDetails(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}${name}`);
  }
}
