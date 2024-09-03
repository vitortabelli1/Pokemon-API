// Importa o Decorador Component do Angular e outras dependências
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Define o componente ChangeTitleComponent
@Component({
  selector: 'app-change-title', // Seletor do componente para uso no HTML
  templateUrl: './change-title.component.html', // Caminho para o arquivo de template HTML
  styleUrls: ['./change-title.component.css'], // Caminho para o arquivo de estilos CSS
  standalone: true, // Indica que o componente é autônomo (standalone) e pode ser usado independentemente
  imports: [FormsModule]  // Importa o FormsModule para usar a diretiva ngModel no template
})
export class ChangeTitleComponent {
  // Propriedade para armazenar o novo título inserido pelo usuário
  newTitle: string = '';

  // Construtor que injeta o serviço Title para manipulação do título da página
  constructor(private titleService: Title) { }

  // Método para atualizar o título da página
  updateTitle() {
    // Verifica se o novo título não está vazio ou apenas com espaços
    if (this.newTitle.trim()) {
      // Atualiza o título da página usando o serviço Title
      this.titleService.setTitle(this.newTitle);
    }
  }
}
