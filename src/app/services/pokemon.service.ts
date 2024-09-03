import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';

// Marca a classe como um serviço injetável disponível em toda a aplicação
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // URL base para a API do Pokémon
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  // Injeção de dependência do HttpClient para realizar requisições HTTP
  constructor(private http: HttpClient) {}

  // Método para obter uma lista de Pokémons com um limite opcional
  getPokemons(limit: number = 20): Observable<Pokemon[]> {
    // Faz uma requisição GET para a API do Pokémon com o limite especificado
    return this.http.get<any>(`${this.apiUrl}?limit=${limit}`).pipe(
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
