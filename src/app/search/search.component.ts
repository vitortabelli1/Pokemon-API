import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [CommonModule]  // Importa o CommonModule para usar diretivas Angular como ngIf e ngFor
})
export class SearchComponent implements OnInit {
  searchText: string = '';  // Armazena o texto da pesquisa
  searchResults: string[] = [];  // Armazena os resultados da pesquisa (nomes dos Pokémons)
  showResults: boolean = false;  // Controla se os resultados da pesquisa devem ser exibidos
  selectedPokemonDetails: Pokemon | null = null;  // Armazena os detalhes do Pokémon selecionado

  // Injeta o serviço de Pokémon
  constructor(private pokemonService: PokemonService) {}

  // Método chamado quando o componente é inicializado
  ngOnInit() {}

  // Método chamado quando o usuário digita na caixa de pesquisa
  onSearch(event: any) {
    this.searchText = event.target.value.toUpperCase();  // Converte o texto da pesquisa para maiúsculas

    // Verifica se há texto na pesquisa
    if (this.searchText.length > 0) {
      // Chama o serviço para buscar a lista de Pokémons
      this.pokemonService.getPokemons().subscribe((results: Pokemon[]) => {
        // Filtra e mapeia os resultados baseados no texto da pesquisa
        this.searchResults = results
          .filter(pokemon => pokemon.name.toUpperCase().startsWith(this.searchText))
          .map(pokemon => pokemon.name)
          .sort();
        
        // Define se os resultados devem ser exibidos
        this.showResults = this.searchResults.length > 0;
      });
    } else {
      // Se o texto da pesquisa estiver vazio, limpa os resultados e esconde-os
      this.searchResults = [];
      this.showResults = false;
    }
  }

  // Método chamado quando o usuário clica em um Pokémon para ver os detalhes
  showDetails(pokemonName: string): void {
    console.log('Clicou em: ', pokemonName);  // Verifica se o nome do Pokémon está sendo recebido
    // Chama o serviço para buscar os detalhes do Pokémon selecionado
    this.pokemonService.getPokemonDetails(pokemonName).subscribe((details: Pokemon) => {
      console.log('Detalhes recebidos: ', details);  // Verifica se os detalhes estão sendo recebidos
      // Limita os game_indices a 2 itens
      details.game_indices = details.game_indices.slice(0, 2);
      // Define os detalhes do Pokémon selecionado
      this.selectedPokemonDetails = details;
    });
  }
}
