import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'assets/mock-api/db.json'; // Caminho para o arquivo local
  private resultsSubject = new BehaviorSubject<string[]>([]);
  private allResults: string[] = [];
  currentResults = this.resultsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.allResults = data.map((pokemon: any) => pokemon.name.toUpperCase());
      this.resultsSubject.next(this.allResults);
    });
  }

  filterResults(query: string) {
    const filteredResults = this.allResults.filter(name =>
      name.toLowerCase().includes(query.toLowerCase())
    );
    this.resultsSubject.next(filteredResults);
  }
}
