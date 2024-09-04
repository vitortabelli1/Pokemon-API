Documentação do Projeto Angular

Configuração do Projeto

angular.json
O arquivo angular.json contém a configuração principal do projeto Angular. Ele define as configurações para a construção, teste e execução da aplicação. A configuração inclui:

Componentes e Arquitetura:


Nome do Componente: app-search

Descrição:
O app-search é um componente Angular personalizado que fornece uma interface para realizar pesquisas. Ele inclui um campo de entrada para digitação de termos de pesquisa e exibe uma lista de resultados baseados na entrada do usuário.

Funcionalidade:
Campo de Pesquisa:

Descrição: Um campo de entrada onde o usuário pode digitar os termos que deseja pesquisar.
Comportamento: Atualiza a lista de resultados dinamicamente com base no texto inserido.
Estilos: O campo possui um design inspirado em jogos retro, com um estilo 'gamer' dos anos 90.
Lista de Resultados:

Descrição: Exibe os resultados da pesquisa conforme o usuário digita no campo de pesquisa.
Comportamento: A lista de resultados aparece somente quando há texto inserido e desaparece quando o campo de pesquisa está vazio. A visibilidade é controlada com efeitos de transição para uma exibição suave.
Estilos: Os itens da lista têm um estilo visual que remete a temas retro e de jogos, com bordas, sombras e uma tipografia personalizada.


Nome do Componente: app-button
Descrição:
O app-button é um componente Angular personalizado que representa um botão estilizado com um rótulo específico e um tipo definido. Ele é projetado para acionar ações, como a submissão de formulários, e é estilizado para lembrar os botões dos jogos retro da década de 90.

Funcionalidade:
Rótulo:

Descrição: O texto exibido no botão. No exemplo fornecido, o rótulo é "Pesquisar".
Uso: O rótulo é passado como uma propriedade ao componente e exibido como o texto do botão. Isso permite que o texto do botão seja dinâmico e configurável conforme necessário.

Nome do Componente: app-change-title
Descrição:
O app-change-title é um componente Angular que permite ao usuário alterar o título da página. Ele fornece um campo de entrada para inserir um novo título e um botão para atualizar o título da página com o texto fornecido.

Funcionalidade:
Campo de Entrada de Texto:

Descrição: Um campo de entrada onde o usuário pode digitar um novo título para a página.
Uso: O campo de entrada é vinculado ao modelo ngModel, permitindo uma ligação de dois caminhos entre o campo de entrada e a variável newTitle do componente. O valor digitado pelo usuário é armazenado na propriedade newTitle.

Nome do Componente: app-root
Descrição:
O app-root é o componente principal da aplicação Angular. Ele serve como o ponto de entrada e o contêiner para outros componentes, fornecendo uma estrutura de layout geral para a aplicação.

Serviços: 

Nome do Serviço: PokemonService

Descrição:
O PokemonService é um serviço Angular responsável por interagir com a API do Pokémon para obter informações sobre Pokémons. Ele oferece métodos para buscar uma lista de Pokémons e para obter detalhes específicos de um Pokémon.

Funcionalidade:
URL da API:https://pokeapi.co/api/v2/pokemon/.

Descrição: A URL base para a API do Pokémon é configurada como https://pokeapi.co/api/v2/pokemon/.
Uso: Esta URL é usada como ponto de partida para fazer requisições HTTP para obter dados sobre Pokémons.

Para mais informações:

Cada parte do código tem comentário explicando cada processo de como foi realizado a construção do sistema. 