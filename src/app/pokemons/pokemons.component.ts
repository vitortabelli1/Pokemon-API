import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../pokemon.service'; // Importe o serviço

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  private apiUrl = 'assets/mock-api/db.json'; // Caminho para o arquivo local

  constructor(private http: HttpClient, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.pokemonService.updateResults(data.pokemons.map(pokemon => pokemon.name));
    });
  }
}
