import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MockApiService } from '../mock-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule] // Importa ReactiveFormsModule para formulários reativos
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  searchResults: any[] = [];

  constructor(private fb: FormBuilder, private mockApiService: MockApiService) {
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  ngOnInit() {}

  onSearch() {
    const query = this.searchForm.get('query')?.value;
    this.mockApiService.searchData(query).subscribe({
      next: (data) => {
        this.searchResults = data;
      },
      error: (err) => console.error(err)
    });
  }
}
