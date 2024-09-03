// Importa as dependências necessárias para testar o componente
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChangeTitleComponent } from './change-title.component';

// Descreve o conjunto de testes para o componente ChangeTitleComponent
describe('ChangeTitleComponent', () => {
  let component: ChangeTitleComponent;
  let fixture: ComponentFixture<ChangeTitleComponent>;
  let titleService: Title;

  // Configura o ambiente de teste antes de cada teste
  beforeEach(async () => {
    // Configura o módulo de teste com o componente ChangeTitleComponent e o FormsModule
    await TestBed.configureTestingModule({
      imports: [ChangeTitleComponent, FormsModule], // Importa o componente e o módulo necessário para testes de formulários
      providers: [Title] // Fornece o serviço Title que será injetado no componente
    })
    .compileComponents(); // Compila os componentes declarados
  });

  // Configura o fixture e o componente antes de cada teste
  beforeEach(() => {
    // Cria uma instância do componente ChangeTitleComponent
    fixture = TestBed.createComponent(ChangeTitleComponent);
    component = fixture.componentInstance;
    titleService = TestBed.inject(Title); // Injeta o serviço Title
    fixture.detectChanges(); // Detecta as mudanças no fixture
  });

  // Testa se o componente é criado corretamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica se a instância do componente foi criada com sucesso
  });

  // Testa se o título é atualizado corretamente quando updateTitle é chamado com uma string não vazia
  it('should update title when updateTitle is called with a non-empty string', () => {
    const newTitle = 'New Page Title'; // Define um novo título para o teste
    spyOn(titleService, 'setTitle'); // Cria um espião no método setTitle do serviço Title

    component.newTitle = newTitle; // Define o novo título no componente
    component.updateTitle(); // Chama o método para atualizar o título

    // Verifica se o método setTitle foi chamado com o novo título
    expect(titleService.setTitle).toHaveBeenCalledWith(newTitle);
  });

  // Testa se o título não é atualizado quando updateTitle é chamado com uma string vazia
  it('should not update title when updateTitle is called with an empty string', () => {
    spyOn(titleService, 'setTitle'); // Cria um espião no método setTitle do serviço Title

    component.newTitle = ''; // Define o novo título como uma string vazia
    component.updateTitle(); // Chama o método para atualizar o título

    // Verifica se o método setTitle não foi chamado
    expect(titleService.setTitle).not.toHaveBeenCalled();
  });
});
