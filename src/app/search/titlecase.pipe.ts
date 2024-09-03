import { Pipe, PipeTransform } from '@angular/core';

// Define o pipe com o nome 'titlecase'
@Pipe({
  name: 'titlecase'
})
export class TitleCasePipe implements PipeTransform {

  // Implementa o método transform do PipeTransform
  transform(value: string): string {
    // Verifica se o valor é nulo ou vazio e retorna-o sem alterações
    if (!value) return value;

    // Converte o valor para minúsculas, divide-o em palavras, capitaliza a primeira letra de cada palavra
    // e junta as palavras de volta em uma string com espaços
    return value
      .toLowerCase()  // Converte todo o texto para minúsculas
      .split(' ')  // Divide o texto em um array de palavras com base no espaço
      .map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)  // Capitaliza a primeira letra da palavra e junta com o restante da palavra
      )
      .join(' ');  // Junta o array de palavras em uma única string com espaços
  }

}
