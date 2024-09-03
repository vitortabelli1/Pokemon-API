import { TestBed } from '@angular/core/testing';  // Importa o TestBed, que é usado para configurar e criar instâncias de serviços para testes
import { PokemonService } from './pokemon.service';  // Importa o serviço PokemonService, que será testado

describe('PokemonService', () => {
  let service: PokemonService;  // Declara uma variável para armazenar a instância do serviço

  beforeEach(() => {
    // Configura o TestBed para este módulo de teste
    TestBed.configureTestingModule({});
    // Injeta o serviço PokemonService no TestBed e o atribui à variável `service`
    service = TestBed.inject(PokemonService);
  });

  // Teste para verificar se o serviço foi criado corretamente
  it('should be created', () => {
    // Verifica se a instância do serviço não é nula ou indefinida
    expect(service).toBeTruthy();
  });
});
