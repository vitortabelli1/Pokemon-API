import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'; // URL da PokéAPI

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?limit=10`); // Limita a 10 Pokémon para simplificar
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${name}`);
  }
}
