import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from './models/pokemon.model'; // Certifique-se de que o caminho está correto

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemons(limit: number = 20): Observable<Pokemon[]> {
    return this.http.get<any>(`${this.apiUrl}?limit=${limit}`).pipe(
      map(response => response.results)
    );
  }

}
