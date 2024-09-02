import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service'; // Importe o serviço

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true
})
export class SearchComponent implements OnInit {
  searchResults: string[] = [];
  showResults: boolean = false; 

  constructor(private pokemonService: PokemonApiService) {}

  ngOnInit() {
    // Inicialmente, não faça nada até que o usuário comece a digitar
  }

  onSearch(event: any) {
    const query = event.target.value.toUpperCase();
    
    if (query.length > 0) {
      this.pokemonService.getPokemons().subscribe(results => {
        this.searchResults = results
          .filter(pokemon => pokemon.name.toUpperCase().includes(query))
          .map(pokemon => pokemon.name);
        
        this.showResults = this.searchResults.length > 0; // Mostra os resultados se houver correspondências
      });
    } else {
      this.searchResults = [];
      this.showResults = false; // Esconde os resultados se não houver busca
    }
  }
}
