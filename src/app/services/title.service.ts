import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Marca a classe como um serviço injetável disponível em toda a aplicação
@Injectable({
  providedIn: 'root'
})
export class TitleService {
  // Injeção de dependência do Title para manipulação do título da página
  constructor(private titleService: Title) { }

  // Método para definir o título da página
  setTitle(newTitle: string) {
    // Usa o método setTitle do TitleService para definir o novo título da página
    this.titleService.setTitle(newTitle);
  }
}
