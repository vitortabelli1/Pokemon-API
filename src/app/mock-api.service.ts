import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private apiUrl = 'assets/mock-api/db.json'; // Caminho para o arquivo JSON

  constructor(private http: HttpClient) {}

  searchData(query: string): Observable<any[]> {
    if (!query) {
      return of([]); // Retorna um array vazio se a consulta estiver vazia
    }

    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => {
        // Filtra os dados e retorna apenas os Pokémon que correspondem à consulta
        return data
          .filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
          .map(item => ({ name: item.name, type: item.type }));
      }),
      catchError(error => {
        console.error('Error fetching data', error);
        return of([]); // Retorna um array vazio em caso de erro
      })
    );
  }
}
