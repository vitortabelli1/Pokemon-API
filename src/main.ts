import { bootstrapApplication } from '@angular/platform-browser';  // Importa a função bootstrapApplication para inicializar a aplicação Angular no navegador
import { AppComponent } from './app/app.component';  // Importa o componente raiz da aplicação, que será iniciado
import { provideHttpClient } from '@angular/common/http';  // Importa o provedor de cliente HTTP necessário para fazer requisições HTTP

// Inicializa a aplicação Angular com o componente raiz e o provedor de cliente HTTP
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient()  // Adiciona o provedor de cliente HTTP à configuração da aplicação para permitir a comunicação com APIs
  ]
}).catch(err => console.error(err));  // Captura e exibe qualquer erro que ocorra durante a inicialização da aplicação
