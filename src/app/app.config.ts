import { ApplicationConfig } from '@angular/core';  // Importa o tipo ApplicationConfig, que é usado para definir a configuração da aplicação Angular
import { provideHttpClient } from '@angular/common/http';  // Importa a função provideHttpClient, que fornece o cliente HTTP para fazer solicitações de rede
import { provideClientHydration } from '@angular/platform-browser';  // Importa a função provideClientHydration, que fornece suporte para hidratação no cliente

export const appConfig: ApplicationConfig = {  // Define e exporta a configuração da aplicação como uma constante do tipo ApplicationConfig
  providers: [  // Lista de provedores que serão usados para configurar a aplicação
    provideClientHydration(),  // Adiciona o provedor de hidratação do cliente, necessário para restaurar o estado da aplicação no navegador
    provideHttpClient()  // Adiciona o provedor do cliente HTTP, necessário para realizar solicitações de rede
  ]
};
