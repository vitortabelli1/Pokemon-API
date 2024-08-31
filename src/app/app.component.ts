import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adicione se precisar de CommonModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Certifique-se de que está marcado como standalone
})
export class AppComponent {
  title = 'pokemon-app'; // Atualize com o nome do seu projeto
}
