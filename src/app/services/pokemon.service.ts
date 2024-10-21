import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // URL base para a API do Pokémon
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  // Injeção de dependência do HttpClient para realizar requisições HTTP
  constructor(private http: HttpClient) {}

  // Método para obter todos os Pokémons
  getAllPokemons(): Observable<Pokemon[]> {
    // Primeiro, faz uma requisição para obter o número total de Pokémons
    return this.http.get<any>(`${this.apiUrl}?limit=1`).pipe(
      // Extrai o número total de Pokémons da resposta
      map(response => response.count),
      // Faz uma segunda requisição com o limite total de Pokémons para obter todos de uma vez
      switchMap(total => this.http.get<any>(`${this.apiUrl}?limit=${total}`)),
      // Extrai a lista de resultados da resposta da API
      map(response => response.results)
    );
  }

  // Método para obter os detalhes de um Pokémon específico pelo nome
  getPokemonDetails(name: string): Observable<Pokemon> {
    // Faz uma requisição GET para a API do Pokémon para obter detalhes de um Pokémon específico
    return this.http.get<Pokemon>(`${this.apiUrl}${name}`);
  }
}
