import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private dataUrl = 'assets/mock-api/db.json'; // Caminho para o arquivo JSON

  constructor(private http: HttpClient) {}

  // Método para obter todos os dados
  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  // Método para buscar dados com base na consulta
  searchData(query: string): Observable<any[]> {
    return new Observable(observer => {
      this.getData().subscribe(data => {
        const results = data.pokemons.filter((item: any) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        observer.next(results);
        observer.complete();
      });
    });
  }
}
