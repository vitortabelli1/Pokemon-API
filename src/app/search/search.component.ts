import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../services/pokemon-api.service';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  searchResults: string[] = [];
  showResults: boolean = false;
  selectedPokemonDetails: Pokemon | null = null;

  constructor(
    private pokemonApiService: PokemonApiService,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {}

  onSearch(event: any) {
    this.searchText = event.target.value.toUpperCase();

    if (this.searchText.length > 0) {
      this.pokemonApiService.getPokemons().subscribe((results: Pokemon[]) => {
        this.searchResults = results
          .filter(pokemon => pokemon.name.toUpperCase().startsWith(this.searchText))
          .map(pokemon => pokemon.name)
          .sort();
        
        this.showResults = this.searchResults.length > 0;
      });
    } else {
      this.searchResults = [];
      this.showResults = false;
    }
  }

  showDetails(pokemonName: string): void {
    console.log('Clicou em: ', pokemonName); // Verifique se o nome do Pokémon está sendo recebido
    this.pokemonService.getPokemonDetails(pokemonName).subscribe((details: Pokemon) => {
      console.log('Detalhes recebidos: ', details); // Verifique se os detalhes estão sendo recebidos
      // Limita os game_indices a 2 itens
      details.game_indices = details.game_indices.slice(0, 2);
      this.selectedPokemonDetails = details;
    });
  }
}
