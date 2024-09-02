import { Component } from '@angular/core';
import { ButtonComponent } from './button/button.component'; // Importe o ButtonComponent
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ButtonComponent, SearchComponent] // Adicione o ButtonComponent aqui
})
export class AppComponent {
  title = 'my-new-project';
}
