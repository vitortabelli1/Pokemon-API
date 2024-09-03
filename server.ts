import { APP_BASE_HREF } from '@angular/common';  // Importa o token de injeção para a base URL da aplicação Angular
import { CommonEngine } from '@angular/ssr';  // Importa o motor de renderização para Server-Side Rendering (SSR) da Angular
import express from 'express';  // Importa o framework Express para criar o servidor
import { fileURLToPath } from 'node:url';  // Importa a função para converter URLs em caminhos de arquivo
import { dirname, join, resolve } from 'node:path';  // Importa funções para manipulação de caminhos de arquivos
import bootstrap from './src/main.server';  // Importa a função de bootstrap da aplicação para renderização no servidor

export function app(): express.Express {
  const server = express();  // Cria uma instância do servidor Express
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));  // Obtém o diretório do arquivo atual
  const browserDistFolder = resolve(serverDistFolder, '../browser');  // Resolve o caminho para a pasta de distribuição do navegador
  const indexHtml = join(serverDistFolder, 'index.server.html');  // Obtém o caminho para o arquivo HTML do servidor

  const commonEngine = new CommonEngine();  // Cria uma instância do motor de renderização SSR

  server.set('view engine', 'html');  // Define o motor de visualização para HTML
  server.set('views', browserDistFolder);  // Define o diretório de visualizações para a pasta de distribuição do navegador

  // Serve arquivos estáticos como CSS, JavaScript e imagens com um cache de 1 ano
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // Roteia todas as requisições para renderização do servidor
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;  // Obtém detalhes da requisição

    commonEngine
      .render({
        bootstrap,  // Função de bootstrap para a renderização da aplicação Angular
        documentFilePath: indexHtml,  // Caminho para o arquivo HTML do servidor
        url: `${protocol}://${headers.host}${originalUrl}`,  // URL completa da requisição
        publicPath: browserDistFolder,  // Caminho para arquivos públicos
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],  // Fornecedores de dependência, incluindo a base URL
      })
      .then((html) => res.send(html))  // Envia o HTML renderizado como resposta
      .catch((err) => next(err));  // Passa erros para o middleware de erro
  });

  return server;  // Retorna a instância do servidor
}

function run(): void {
  const port = process.env['PORT'] || 4000;  // Obtém a porta do ambiente ou usa a porta padrão 4000

  // Inicia o servidor Node
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);  // Exibe uma mensagem quando o servidor está ouvindo
  });
}

run();  // Executa a função para iniciar o servidor
