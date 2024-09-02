import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true
})
export class SearchComponent implements OnInit {
  searchResults: string[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.currentResults.subscribe(results => {
      this.searchResults = results;
    });
  }

  onSearch(event: any) {
    const query = event.target.value.toUpperCase();
    this.pokemonService.filterResults(query);
  }
}
