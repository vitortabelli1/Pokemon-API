import { Component, OnInit } from '@angular/core';
import { MockApiService } from './mock-api.service'; // Serviço atualizado

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: any[] = [];
  selectedPokemon: any;

  constructor(private mockApiService: MockApiService) { }

  ngOnInit(): void {
    this.mockApiService.getPokemons().subscribe(data => {
      this.pokemons = data.results; // Recebe a lista de Pokémon do JSON
    });
  }

  showDetails(name: string): void {
    this.mockApiService.getPokemonDetails(name).subscribe(data => {
      this.selectedPokemon = data;
      alert(`Nome: ${data.name}\nTipo: ${data.types.map((type: any) => type.type.name).join(', ')}`);
    });
  }
}
