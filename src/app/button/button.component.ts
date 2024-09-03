import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button', // Define o seletor para o componente, que será usado no HTML como <app-button>
  templateUrl: './button.component.html', // URL para o arquivo de template HTML do componente
  styleUrls: ['./button.component.css'], // URL para o arquivo de estilos CSS do componente
  standalone: true // Marca o componente como independente (standalone)
})
export class ButtonComponent {
  @Input() label: string = 'Button'; // Propriedade de entrada para definir o texto do botão, com valor padrão 'Button'
  @Input() type: string = 'button'; // Propriedade de entrada para definir o tipo do botão HTML, com valor padrão 'button'
  @Input() disabled: boolean = false; // Propriedade de entrada para definir se o botão está desativado, com valor padrão 'false'
}
