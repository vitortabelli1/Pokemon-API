// src/app/pipes/uppercase.pipe.ts

// Importa os decoradores e interfaces necessários do Angular core.
import { Pipe, PipeTransform } from '@angular/core';

// Define o Pipe 'uppercase' usando o decorator @Pipe. 
// Isso permite que o Angular reconheça e utilize este pipe em templates.
@Pipe({
  name: 'uppercase'  // Nome do pipe, que será usado no template para aplicar o pipe
})
export class UppercasePipe implements PipeTransform {
  
  // Implementa o método 'transform' da interface PipeTransform.
  // Este método é responsável por transformar o valor passado para o pipe.
  transform(value: string): string {
    // Converte o valor para maiúsculas e retorna.
    return value.toUpperCase();
  }
}
