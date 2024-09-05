import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.css', // Caminho correto para o arquivo global de estilos
    './media-queries.css'
  ],
  standalone: true
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
}
