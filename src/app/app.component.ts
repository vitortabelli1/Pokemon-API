import { Component, OnInit } from '@angular/core';  // Importa as dependências para criar um componente Angular e inicializar
import { Title } from '@angular/platform-browser';  // Importa a classe Title para manipular o título da página
import { ButtonComponent } from './button/button.component';  // Importa o componente ButtonComponent
import { SearchComponent } from './search/search.component';  // Importa o componente SearchComponent
import { ChangeTitleComponent } from "./change-title/change-title.component";  // Importa o componente ChangeTitleComponent

@Component({
  selector: 'app-root',  // Define o seletor do componente que será usado no HTML
  templateUrl: './app.component.html',  // Define o caminho para o template HTML do componente
  styleUrls: ['./app.component.css'],  // Define o caminho para o arquivo de estilos CSS do componente
  standalone: true,  // Marca o componente como independente, o que significa que ele pode ser usado sem precisar ser declarado em um módulo
  imports: [ButtonComponent, SearchComponent, ChangeTitleComponent]  // Declara os componentes que são importados e utilizados neste componente
})
export class AppComponent implements OnInit {  // Define a classe do componente e implementa a interface OnInit para usar o hook de ciclo de vida ngOnInit
  title = 'Pokemon-API';  // Define a propriedade 'title' que será usada para definir o título da página

  constructor(private titleService: Title) {}  // Injeta o serviço Title no construtor para permitir a manipulação do título da página

  ngOnInit() {  // Hook de ciclo de vida que é chamado após a inicialização do componente
    this.titleService.setTitle(this.title);  // Define o título da página usando o serviço Title
  }
}
