# Curso de Node.js do Ignite da Rocketseat

Este repositório será usado para documentar meu aprendizado no curso de Node.js do Ignite da Rocketseat. No primeiro módulo do curso, aprendi os seguintes tópicos:

## [Módulo 01 - Fundamentos do Node.js](https://github.com/Wallysson/new-node-ignite/tree/main/01-fundamentos-nodejs)

### Tópicos

* O que é Node.js?
* O que é NPM?
* O que é package.json?
* O que são módulos em Node.js?
* O que são callbacks em Node.js?
* O que é o Event Loop do Node.js?
* O que é o processo de stream em Node.js?
* O que são Streams, stdin, stdout, pipe e buffers em Node.js?
* O que é o middleware em Node.js?

## [Challenge 01 - Fundamentos do Node.js](https://github.com/Wallysson/new-node-ignite/tree/main/01-challenge-fundamentos-nodejs)

### Tópicos

* Criação de uma task
* Listagem de todas as tasks
* Atualização de uma task pelo id
* Remoção de uma task pelo id
* Marcação pelo id de uma task como completa

Criação das rotas:

* POST - /tasks: cria uma nova task no banco de dados, com os campos title e description enviados no body da requisição. Os campos id, created_at, updated_at e completed_at são preenchidos automaticamente.
* GET - /tasks: lista todas as tasks salvas no banco de dados, com possibilidade de filtro por title e description.
* PUT - /tasks/🆔 atualiza uma task pelo id. O body da requisição deve conter somente o title e/ou description para serem atualizados. Se for enviado somente o title, significa que o description não pode ser atualizado e vice-versa. É feita uma validação se o id pertence a uma task salva no banco de dados antes da atualização.
* DELETE - /tasks/🆔 remove uma task pelo id. É feita uma validação se o id pertence a uma task salva no banco de dados antes da remoção.
* PATCH - /tasks/:id/complete: marca a task como completa ou não. Antes da alteração, é feita uma validação se o id pertence a uma task salva no banco de dados.
