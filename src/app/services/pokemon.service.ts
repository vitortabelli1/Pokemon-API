// pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/'; // URL da API real

  constructor(private http: HttpClient) {}

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${name}`);
  }
}
