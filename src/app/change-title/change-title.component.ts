import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-title',
  templateUrl: './change-title.component.html',
  styleUrls: ['./change-title.component.css'],
  standalone: true,
  imports: [FormsModule]  // Importar FormsModule para usar ngModel
})
export class ChangeTitleComponent {
  newTitle: string = '';

  constructor(private titleService: Title) { }

  updateTitle() {
    if (this.newTitle.trim()) {
      this.titleService.setTitle(this.newTitle);
    }
  }
}
