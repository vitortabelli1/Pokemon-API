import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: any[] = [];
  selectedPokemon: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(data => {
      this.pokemons = data.results; // Recebe a lista de Pokémon
    });
  }

  showDetails(name: string): void {
    this.pokemonService.getPokemonDetails(name).subscribe(data => {
      this.selectedPokemon = data;
      alert(`Nome: ${data.name}\nTipo: ${data.types.map((type: any) => type.type.name).join(', ')}`);
    });
  }
}
