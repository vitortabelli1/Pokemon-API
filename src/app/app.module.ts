import { NgModule } from '@angular/core';  // Importa o decorador NgModule, que é usado para definir um módulo Angular
import { BrowserModule } from '@angular/platform-browser';  // Importa o BrowserModule, necessário para aplicações Angular que rodam no navegador
import { HttpClientModule } from '@angular/common/http';  // Importa o HttpClientModule, que fornece o cliente HTTP para fazer requisições de rede
import { CommonModule } from '@angular/common';  // Importa o CommonModule, que fornece diretivas e pipes comuns, como ngIf e ngFor
import { AppComponent } from './app.component';  // Importa o componente raiz da aplicação
import { ButtonComponent } from './button/button.component';  // Importa o componente ButtonComponent, que define um botão reutilizável
import { FormsModule } from '@angular/forms';  // Importa o FormsModule, necessário para trabalhar com formulários e vinculação de dados
import { UppercasePipe } from './pipes/uppercase.pipe';  // Importa o pipe UppercasePipe, que transforma o texto em maiúsculas
import { SearchComponent } from './search/search.component';  // Importa o componente SearchComponent, que é usado para buscar Pokémons

@NgModule({
  declarations: [
    // Declara os componentes e pipes que pertencem a este módulo
    AppComponent,  // Componente raiz da aplicação
    ButtonComponent,  // Componente de botão reutilizável
    UppercasePipe,  // Pipe para transformar texto em maiúsculas
    ChangeTitleComponent  // Componente para alterar o título da aplicação
  ],

  imports: [
    // Importa outros módulos necessários para este módulo
    BrowserModule,  // Módulo necessário para aplicações Angular que rodam no navegador
    HttpClientModule,  // Módulo necessário para realizar requisições HTTP
    CommonModule,  // Módulo que fornece diretivas e pipes comuns
    FormsModule,  // Módulo necessário para trabalhar com formulários
    SearchComponent  // Importa o SearchComponent diretamente, pois é um componente independente
  ],
  
  providers: [
    // Aqui você pode fornecer serviços e outras dependências, se necessário
  ],
  
  bootstrap: [AppComponent]  // Define o componente raiz que será inicializado quando a aplicação começar
})
export class AppModule { }
