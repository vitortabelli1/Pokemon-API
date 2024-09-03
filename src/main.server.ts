import { bootstrapApplication } from '@angular/platform-browser';  // Importa a função bootstrapApplication para inicializar a aplicação Angular
import { AppComponent } from './app/app.component';  // Importa o componente raiz da aplicação, que será iniciado
import { config } from './app/app.config.server';  // Importa a configuração da aplicação específica para o ambiente do servidor

// Função para inicializar a aplicação com o componente raiz e configuração fornecida
const bootstrap = () => bootstrapApplication(AppComponent, config);

// Exporta a função de bootstrap como padrão para ser usada em outras partes da aplicação ou pelo sistema de módulos
export default bootstrap;
