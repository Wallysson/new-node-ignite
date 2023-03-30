<p align="center">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
</p>

# 💻 Desafio #01

Esta é uma API desenvolvida em Node.js para realizar o CRUD de tasks (tarefas), como parte do primeiro desafio da trilha de Node.js do Ignite da @Rocketseat. </br>

A API conta com as seguintes funcionalidades: </br>

- Criação de uma task
- Listagem de todas as tasks
- Atualização de uma task pelo id
- Remover uma task pelo id
- Marcar pelo id uma task como completa
- Importação de tasks em massa por um arquivo CSV

## 🚀 Tecnologias

- [NodeJS](https://nodejs.org/en)
- [CSVParse](https://csv.js.org/parse/)

## 📑 Rotas e regras de negócio

As tasks possuem a seguinte estrutura: </br>

- id - Identificador único de cada task
- title - Título da task
- description - Descrição detalhada da task
- completed_at - Data de quando a task foi concluída. O valor inicial é null
- created_at - Data de quando a task foi criada
- updated_at - Data de quando a task foi atualizada

As rotas disponíveis são: </br>

- POST - /tasks: cria uma nova task no banco de dados, com os campos title e description enviados no body da requisição. Os campos id, created_at, updated_at e completed_at são preenchidos automaticamente.
- GET - /tasks: lista todas as tasks salvas no banco de dados, com possibilidade de filtro por title e description.
- PUT - /tasks/:id: atualiza uma task pelo id. O body da requisição deve conter somente o title e/ou description para serem atualizados. Se for enviado somente o title, significa que o description não pode ser atualizado e vice-versa. É feita uma validação se o id pertence a uma task salva no banco de dados antes da atualização.
- DELETE - /tasks/:id: remove uma task pelo id. É feita uma validação se o id pertence a uma task salva no banco de dados antes da remoção.
- PATCH - /tasks/:id/complete: marca a task como completa ou não. Antes da alteração, é feita uma validação se o id pertence a uma task salva no banco de dados.
  Além disso, é possível importar tasks em massa por um arquivo CSV. A importação é feita por meio do formato multipart/form-data. Mais detalhes sobre como realizar a importação podem ser encontrados no link Criação via CSV com Stream (1).

## ✍🏼 Considerações finais

O desenvolvimento desse projeto foi uma oportunidade incrível para aprender mais sobre Node.js e desenvolvimento de APIs. O desafio me permitiu conhecer a base e o funcionamento do Node.js, como o uso de rotas e validações de dados, além de explorar novas bibliotecas e ferramentas que certamente serão úteis em projetos futuros.
