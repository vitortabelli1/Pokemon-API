import { TestBed } from '@angular/core/testing';  // Importa TestBed para configurar o módulo de teste do Angular
import { AppComponent } from './app.component';  // Importa o componente que será testado

describe('AppComponent', () => {
  // Configura o ambiente de teste para o AppComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],  // Declara o componente que será testado
    }).compileComponents();  // Compila os componentes para garantir que estejam prontos para os testes
  });

  // Teste para verificar se o componente é criado com sucesso
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);  // Cria uma instância do componente AppComponent
    const app = fixture.componentInstance;  // Obtém a instância do componente AppComponent
    expect(app).toBeTruthy();  // Verifica se a instância do componente foi criada com sucesso (não é null ou undefined)
  });

  // Teste para verificar se o componente tem o título correto
  it(`should have the 'my-new-project' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);  // Cria uma instância do componente AppComponent
    const app = fixture.componentInstance;  // Obtém a instância do componente AppComponent
    expect(app.title).toEqual('my-new-project');  // Verifica se a propriedade 'title' do componente é igual a 'my-new-project'
  });

  // Teste para verificar se o título é renderizado corretamente na página
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);  // Cria uma instância do componente AppComponent
    fixture.detectChanges();  // Detecta alterações no componente para atualizar o DOM
    const compiled = fixture.nativeElement as HTMLElement;  // Obtém o elemento DOM nativo do componente
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, my-new-project');  // Verifica se o conteúdo do elemento <h1> contém o texto 'Hello, my-new-project'
  });
});
