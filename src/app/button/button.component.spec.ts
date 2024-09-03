import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  // Configuração inicial para os testes
  beforeEach(async () => {
    // Configura o módulo de teste para o ButtonComponent
    await TestBed.configureTestingModule({
      imports: [ButtonComponent] // Importa o ButtonComponent para os testes
    })
    .compileComponents(); // Compila os componentes do módulo de teste
    
    // Cria uma instância do ButtonComponent para testes
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance; // Obtém a instância do componente
    fixture.detectChanges(); // Detecta mudanças e atualiza o DOM para refletir as propriedades iniciais
  });

  // Teste para verificar se o componente foi criado com sucesso
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica se a instância do componente foi criada corretamente
  });
});
