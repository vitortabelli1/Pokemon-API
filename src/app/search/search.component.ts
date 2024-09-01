import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para fazer requisições HTTP
import { catchError, map } from 'rxjs/operators'; // Importa operadores RxJS
import { of } from 'rxjs'; // Importa operador RxJS para lidar com erros

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  noResultsMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) { // Injeta HttpClient
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  ngOnInit() {}

  onSearch() {
    const query = this.searchForm.get('query')?.value.trim();

    if (query) {
      this.http.get<any[]>('assets/mock-api/db.json').pipe(
        map(data => data.filter(item => item.name.toLowerCase() === query.toLowerCase())), // Filtra os dados
        catchError(err => {
          console.error('Error fetching data', err);
          return of([]); // Retorna um array vazio em caso de erro
        })
      ).subscribe(filteredData => {
        if (filteredData.length > 0) {
          // Se o nome for encontrado, redireciona para o JSON
          window.location.href = 'assets/mock-api/db.json';
        } else {
          this.noResultsMessage = 'Não encontrado.';
        }
      });
    } else {
      this.noResultsMessage = '';
    }
  }
}
