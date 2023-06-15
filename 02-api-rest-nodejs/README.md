# Node.js - Resumo de Api Rest

Este é um resumo sobre o que foi estudado no Módulo 02. Abaixo estão as perguntas respondidas neste documento e documentação da api de transação.

## Tópicos

O que é o TypeScript? <br/>
O que é o Fastify? <br/>
O que é o Knex? <br/>
Como conectar com o banco de dados usando o Knex? <br/>
O que é uma API REST? <br/>
Quais são os principais métodos HTTP? <br/>
Quais são os códigos de status mais utilizados e para que servem? <br/>
O que são rotas? <br/>
Para que servem os cookies? <br/>
O que são middlewares? <br/>
Quais são os tipos de testes? <br/>
Exemplo de código de rota de transações com Fastify, Knex e Zod. <br/>

### O que é o TypeScript?

TypeScript é um superconjunto de JavaScript que adiciona recursos de tipagem estática ao JavaScript. Ele permite a definição de tipos de dados para variáveis, parâmetros de função, propriedades de objeto e muito mais. O TypeScript ajuda a detectar erros de digitação e oferece recursos avançados de autocompletar e refatoração. Ele é amplamente utilizado no desenvolvimento de aplicativos Node.js para aumentar a segurança e a robustez do código.

### O que é o Fastify?

Fastify é um framework web para Node.js focado em desempenho e eficiência. Ele oferece um tempo de resposta extremamente rápido, baixo consumo de recursos e suporte para rotas, validação de entrada, autenticação, plugins e muito mais. O Fastify é altamente escalável e adequado para construir APIs robustas e eficientes.

### O que é o Knex?

O Knex é um construtor de consultas SQL para Node.js. Ele fornece uma interface fluente para criar e executar consultas de banco de dados em diferentes sistemas de gerenciamento de banco de dados (como PostgreSQL, MySQL, SQLite, etc.). O Knex permite definir esquemas de banco de dados, criar tabelas, inserir, atualizar, excluir e consultar dados de forma fácil e eficiente.

### Como conectar com o banco de dados?

Para conectar com um banco de dados utilizando o Knex, você precisa configurar as informações de conexão no arquivo de configuração. Essas informações geralmente incluem o host, porta, usuário, senha e nome do banco de dados. O Knex utiliza essas informações para estabelecer a conexão com o banco de dados e executar as consultas. Além disso, você precisa ter o driver correto instalado para o sistema de gerenciamento de banco de dados específico que está utilizando.

### O que é uma API REST?

Uma API REST (Representational State Transfer) é um conjunto de princípios arquiteturais para projetar serviços web. Ela define uma abordagem padronizada para a comunicação entre sistemas distribuídos usando o protocolo HTTP. Uma API REST utiliza os métodos HTTP (GET, POST, PUT, DELETE) para realizar operações em recursos, que são identificados por URLs. Ela permite que os sistemas se comuniquem de forma independente da plataforma e do idioma, facilitando a integração e a interoperabilidade.

### Quais são os principais métodos HTTP?

Os principais métodos HTTP, também conhecidos como verbos HTTP, são:

- GET: Solicita a obtenção de um recurso específico. É usado para recuperar dados do servidor.
- POST: Envia dados ao servidor para criar um novo recurso. É comumente usado para enviar formulários ou enviar dados JSON para processamento.
- PUT: Atualiza completamente um recurso existente com os dados fornecidos. Substitui completamente o conteúdo anterior.
- PATCH: Atualiza parcialmente um recurso existente com os dados fornecidos. Geralmente usado para atualizações incrementais.
- DELETE: Remove um recurso específico do servidor.

### Quais são os códigos de status mais utilizados e para que servem?

Os códigos de status HTTP são números de três dígitos enviados pelo servidor em resposta a uma requisição HTTP. Eles fornecem informações sobre o resultado da requisição e ajudam a entender o estado da resposta. Alguns códigos de status comuns são:

200 OK: Indica que a requisição foi bem-sucedida e a resposta contém os dados solicitados.
201 Created: Indica que a requisição foi bem-sucedida e um novo recurso foi criado.
400 Bad Request: Indica que a requisição é inválida ou malformada.
401 Unauthorized: Indica que a requisição requer autenticação e as credenciais fornecidas são inválidas.
403 Forbidden: Indica que a requisição é válida, mas o servidor recusa a ação solicitada.
404 Not Found: Indica que o recurso solicitado não foi encontrado.
500 Internal Server Error: Indica um erro interno no servidor.
Esses são apenas alguns exemplos, existem muitos outros códigos de status que podem ser utilizados em diferentes situações para indicar o resultado da requisição.

### O que são rotas?

Rotas são pontos de extremidade em uma aplicação web que são acessíveis através de URLs específicas. Elas definem como a aplicação deve responder a diferentes requisições HTTP (como GET, POST, PUT, DELETE) em diferentes URLs. As rotas são responsáveis por mapear as requisições recebidas para a função correspondente que irá lidar com a requisição e enviar a resposta apropriada de volta ao cliente. Em frameworks como o Fastify, as rotas são definidas usando uma sintaxe específica e podem ter middlewares associados para executar tarefas adicionais antes de lidar com a requisição.

### Para que servem os cookies?

Cookies são pequenos arquivos de texto armazenados no navegador do usuário. Eles são usados para armazenar informações sobre a interação do usuário com um site ou aplicativo. Os cookies são enviados pelo servidor para o navegador durante a resposta a uma requisição HTTP e são armazenados pelo navegador. Em solicitações subsequentes, os cookies são enviados de volta ao servidor, permitindo que o servidor identifique e acompanhe o usuário ao longo das sessões. Os cookies podem ser usados para armazenar informações de autenticação, preferências do usuário, dados de sessão e muito mais.

### O que são middlewares?

Middlewares são funções que são executadas no fluxo de processamento de uma requisição HTTP entre o recebimento da requisição e o envio da resposta. Eles permitem a execução de lógica adicional antes ou depois do processamento principal da requisição. Os middlewares são usados para realizar tarefas como autenticação, validação de entrada, manipulação de erros, registro de logs, entre outros. Eles podem ser aplicados em nível de aplicação, rota ou até mesmo em nível de trecho de código específico. Os middlewares oferecem uma forma flexível de estender e personalizar o comportamento de uma aplicação web.

### Quais tipos de testes?

Existem vários tipos de testes que podem ser aplicados em uma aplicação:

- Testes Unitários: Testam componentes individuais, como funções ou classes, isolados de suas dependências. São usados para garantir que cada unidade de código funcione corretamente.

- Testes de Integração: Testam a interação entre diferentes componentes ou módulos de uma aplicação. Verificam se as partes integradas funcionam corretamente em conjunto.

- Testes de Aceitação: Testam se a aplicação atende aos requisitos e expectativas dos usuários. São geralmente escritos em uma linguagem mais próxima da linguagem natural e validam cenários de uso real.

- Testes Funcionais: Testam as funcionalidades da aplicação de ponta a ponta. São usados para verificar se a aplicação atende aos requisitos funcionais e se os fluxos de trabalho estão corretos.

- Testes de Desempenho: Testam a capacidade de resposta e o desempenho da aplicação sob diferentes cargas e condições. Avaliam o tempo de resposta, o consumo de recursos e a escalabilidade da aplicação.

- Testes de Segurança: Testam as vulnerabilidades e a segurança da aplicação. Verificam se a aplicação está protegida contra ataques comuns e se as informações sensíveis estão devidamente protegidas.

É importante escolher o tipo de teste adequado para cada contexto e objetivo, a fim de garantir a qualidade e a confiabilidade da aplicação.

### Exemplo de código de rota de transações com Fastify, Knex e Zod.

#### API de Transações

Este repositório contém o código para uma API de Transações que permite aos usuários gerenciar transações. A API fornece vários endpoints para realizar operações relacionadas a transações.

| Endpoint | Método | Middleware           | Descrição                   | Parâmetros da Requisição                                                                                                           | Resposta                                  |
| -------- | ------ | -------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| /        | GET    | checkSessionIdExists | Obter todas as transações   | Nenhum                                                                                                                             | Retorna um array de transações            |
| /:id     | GET    | checkSessionIdExists | Obter transação por ID      | id (string): ID da transação a ser recuperada                                                                                      | Retorna o objeto da transação             |
| /summary | GET    | checkSessionIdExists | Obter resumo das transações | Nenhum                                                                                                                             | Retorna a soma dos valores das transações |
| /        | POST   | Nenhum               | Criar transação             | title (string): Título da transação<br>amount (number): Valor da transação<br>type (enum): Tipo da transação ("credit" ou "debit") | Retorna o código de status 201 (Criado)   |

## Uso

Para usar a API de Transações, siga as etapas abaixo:

Instale as dependências necessárias: npm install
Inicie o servidor: npm start
Acesse os endpoints da API usando os métodos e URLs apropriados.
Certifique-se de ter o ID da sessão necessário nos cookies da requisição para os endpoints autenticados.
Tecnologias Utilizadas
A API de Transações é construída utilizando as seguintes tecnologias:

- Node.js
- Fastify (framework web)
- Knex (construtor de consultas SQL)
- SQLite (banco de dados para desenvolvimento)
- PostgreSQL (banco de dados para produção)
- Zod (validação de esquema)
- TypeScript
- Vitest (framework de testes)
- Supertest (biblioteca de testes)

## Contribuição

Se você deseja contribuir para este projeto, siga estas etapas:

- Faça um fork do repositório.
- Crie um novo branch: git checkout -b meu-branch
- Faça suas alterações e as comita: git commit -m "Minhas alterações"
- Faça o push para o branch: git push origin meu-branch
- Abra um pull request neste repositório.

## Licença

Feito com 🤍 por Wallysson.
