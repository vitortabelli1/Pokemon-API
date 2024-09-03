import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { PokemonService } from '../services/pokemon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let httpMock: HttpTestingController;

  // Configuração do ambiente de teste antes de cada teste
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],  // Declara o componente a ser testado
      imports: [CommonModule, HttpClientTestingModule],  // Importa módulos necessários para o teste
      providers: [PokemonService]  // Fornece o serviço de Pokémon
    })
    .compileComponents();  // Compila os componentes

    fixture = TestBed.createComponent(SearchComponent);  // Cria uma instância do componente de teste
    component = fixture.componentInstance;  // Obtém a instância do componente
    httpMock = TestBed.inject(HttpTestingController);  // Obtém o controlador de teste HTTP
    fixture.detectChanges();  // Detecta mudanças e atualiza a visualização do componente
  });

  // Testa se o componente foi criado com sucesso
  it('should create the component', () => {
    expect(component).toBeTruthy();  // Verifica se o componente foi criado
  });

  // Testa a atualização dos resultados da pesquisa e exibição dos resultados
  it('should update search results and show results', () => {
    // Simula um evento de entrada com o texto de pesquisa 'Pikachu'
    const event = { target: { value: 'Pikachu' } } as any;

    component.onSearch(event);  // Chama o método de pesquisa do componente

    // Simula a resposta da API para a chamada HTTP
    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/?limit=20');
    expect(req.request.method).toBe('GET');  // Verifica se o método HTTP é GET
    req.flush({
      results: [
        { name: 'Pikachu' },
        { name: 'Bulbasaur' }
      ]
    });

    fixture.detectChanges();  // Atualiza a visualização do componente

    // Verifica se os resultados da pesquisa foram atualizados corretamente
    expect(component.searchResults).toEqual(['PIKACHU']);
    expect(component.showResults).toBeTrue();  // Verifica se os resultados estão sendo exibidos
  });

  // Testa se os resultados da pesquisa são limpos quando o input está vazio
  it('should clear search results when input is empty', () => {
    // Simula um evento de entrada com um texto de pesquisa vazio
    const event = { target: { value: '' } } as any;

    component.onSearch(event);  // Chama o método de pesquisa do componente

    fixture.detectChanges();  // Atualiza a visualização do componente

    // Verifica se os resultados da pesquisa foram limpos
    expect(component.searchResults).toEqual([]);
    expect(component.showResults).toBeFalse();  // Verifica se os resultados não estão sendo exibidos
  });

  // Testa a exibição dos detalhes do Pokémon selecionado
  it('should show details of selected Pokémon', () => {
    const pokemonName = 'Pikachu';  // Nome do Pokémon para testar

    component.showDetails(pokemonName);  // Chama o método para mostrar detalhes do Pokémon

    // Simula a resposta da API para a chamada HTTP de detalhes do Pokémon
    const req = httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    expect(req.request.method).toBe('GET');  // Verifica se o método HTTP é GET
    req.flush({
      name: pokemonName,
      abilities: [],
      game_indices: [{ version: { name: 'Red' } }, { version: { name: 'Blue' } }]
    });

    fixture.detectChanges();  // Atualiza a visualização do componente

    // Verifica se os detalhes do Pokémon foram recebidos e processados corretamente
    expect(component.selectedPokemonDetails).toBeTruthy();
    if (component.selectedPokemonDetails) {
      expect(component.selectedPokemonDetails.name).toBe('Pikachu');
      expect(component.selectedPokemonDetails.game_indices.length).toBe(2);  // Verifica se os índices de jogo foram limitados a 2
    }
  });

  // Limpa as chamadas HTTP após cada teste
  afterEach(() => {
    httpMock.verify();  // Verifica se não há chamadas HTTP pendentes
  });
});
