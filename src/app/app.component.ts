import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [SearchComponent] // Adicione componentes standalone aqui
})
export class AppComponent {
  title = 'my-new-project';
}
