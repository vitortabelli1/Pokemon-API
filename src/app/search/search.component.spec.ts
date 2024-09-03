import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { PokemonService } from '../services/pokemon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [CommonModule, HttpClientTestingModule],
      providers: [PokemonService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should update search results and show results', () => {
    const event = { target: { value: 'Pikachu' } } as any;

    component.onSearch(event);

    // Simula a resposta da API
    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/?limit=20');
    expect(req.request.method).toBe('GET');
    req.flush({
      results: [
        { name: 'Pikachu' },
        { name: 'Bulbasaur' }
      ]
    });

    fixture.detectChanges();

    expect(component.searchResults).toEqual(['PIKACHU']);
    expect(component.showResults).toBeTrue();
  });

  it('should clear search results when input is empty', () => {
    const event = { target: { value: '' } } as any;

    component.onSearch(event);

    fixture.detectChanges();

    expect(component.searchResults).toEqual([]);
    expect(component.showResults).toBeFalse();
  });

  it('should show details of selected Pokémon', () => {
    const pokemonName = 'Pikachu';

    component.showDetails(pokemonName);

    // Simula a resposta da API para os detalhes do Pokémon
    const req = httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    expect(req.request.method).toBe('GET');
    req.flush({
      name: pokemonName,
      abilities: [],
      game_indices: [{ version: { name: 'Red' } }, { version: { name: 'Blue' } }]
    });

    fixture.detectChanges();

    expect(component.selectedPokemonDetails).toBeTruthy();
    if (component.selectedPokemonDetails) {
      expect(component.selectedPokemonDetails.name).toBe('Pikachu');
      expect(component.selectedPokemonDetails.game_indices.length).toBe(2);
    }
  });

  afterEach(() => {
    httpMock.verify();
  });
});
