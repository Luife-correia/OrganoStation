# OrganoStation

OrganoStation é uma aplicação web desenvolvida em Angular para catalogação e exploração de jogos clássicos do PlayStation 2. O projeto surgiu a partir dos estudos com o projeto Organo da Alura e evoluiu para uma aplicação autoral, com identidade visual própria inspirada nos símbolos clássicos do PlayStation.

## Sobre o projeto

A proposta do OrganoStation é reunir títulos marcantes do PlayStation 2 em uma interface visual, organizada e fácil de navegar. A aplicação apresenta jogos separados por gênero, permite explorar a lista completa do catálogo, pesquisar títulos específicos e marcar jogos como favoritos.

O projeto foi desenvolvido com foco em componentização, organização de dados, manipulação de estado local e construção de uma experiência visual personalizada dentro do ecossistema Angular.

## Funcionalidades

- Listagem de jogos clássicos do PlayStation 2.
- Organização dos jogos por gênero.
- Página com todos os jogos cadastrados.
- Barra de pesquisa para localizar títulos pelo nome.
- Sistema de favoritos com controle local em memória.
- Navegação por categorias pela sidebar.
- Botão de retorno ao topo durante a rolagem da página.
- Layout com cabeçalho, menu lateral, área principal e rodapé.
- Identidade visual inspirada no universo PlayStation.

## Gêneros catalogados

- Action Adventure
- Hack and Slash
- Fighting
- Racing
- RPG
- Sports
- Survival horror
- First Person Shooter

## Tecnologias utilizadas

- Angular 21
- Angular CLI
- TypeScript
- HTML
- CSS
- Prettier

## Estrutura do projeto

```text
src/
  app/
    componentes/
      barra-pesquisa/
      cabecalho/
      genero-jogo/
      jogo/
      lista-jogos/
      rodape/
      sidebar/
      todos-jogos/
    app.config.ts
    app.routes.ts
    app.ts
    mock-jogos.ts
  main.ts
public/
```

### Principais componentes

- `barra-pesquisa`: controla a busca de jogos, exibição de resultados, favoritos e botão de voltar ao topo.
- `cabecalho`: apresenta a área inicial da aplicação e a chamada para explorar o catálogo.
- `sidebar`: concentra a navegação principal por rotas e gêneros.
- `lista-jogos`: organiza os jogos por gênero a partir dos dados locais.
- `genero-jogo`: renderiza uma seção de jogos agrupados por categoria.
- `jogo`: exibe as informações de cada jogo e controla a marcação como favorito.
- `todos-jogos`: exibe o catálogo completo de jogos cadastrados.

## Como executar o projeto

### Pré-requisitos

Antes de começar, é necessário ter instalado:

- Node.js
- npm
- Angular CLI

### Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

### Servidor de desenvolvimento

Para iniciar a aplicação localmente:

```bash
npm start
```

Depois, acesse:

```text
http://localhost:4200/
```

A aplicação será recarregada automaticamente sempre que os arquivos forem alterados.

### Build de produção

Para gerar uma versão otimizada do projeto:

```bash
npm run build
```

Os arquivos finais serão gerados no diretório `dist/`.

### Testes

Para executar os testes configurados no projeto:

```bash
npm test
```

## Dados da aplicação

Atualmente, o catálogo de jogos é mantido localmente no arquivo `src/app/mock-jogos.ts`. Cada jogo possui informações como nome, desenvolvedor, gênero, imagem e status de favorito.

Essa estrutura facilita a evolução futura do projeto para integração com APIs, persistência de favoritos, filtros avançados e novas formas de organização do catálogo.

## Origem e evolução

OrganoStation nasceu como uma extensão dos estudos realizados no projeto Organo da Alura. A partir da base de aprendizado em Angular, a proposta foi reinterpretada para outro contexto: um catálogo temático de jogos de PlayStation 2, com nova identidade visual, novos componentes, novas regras de exibição e uma experiência mais personalizada.



This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
