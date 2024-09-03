import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';  // Importa funções e tipos necessários para configurar a aplicação Angular
import { provideServerRendering } from '@angular/platform-server';  // Importa a função para fornecer renderização no lado do servidor
import { appConfig } from './app.config';  // Importa a configuração da aplicação definida em um arquivo separado

const serverConfig: ApplicationConfig = {  // Define uma configuração específica para a renderização no lado do servidor
  providers: [  // Lista de provedores para a configuração
    provideServerRendering()  // Adiciona o provedor de renderização no lado do servidor
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);  // Mescla a configuração da aplicação com a configuração específica do servidor e exporta a configuração resultante
