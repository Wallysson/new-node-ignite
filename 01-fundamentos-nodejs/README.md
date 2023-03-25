# Node.js - Resumo de Conceitos e Códigos

Este é um resumo de conceitos e códigos relacionados ao Node.js. Abaixo estão as perguntas respondidas neste documento.

## Tópicos

O que é Node.js?
O que é NPM?
O que é package.json?
O que são módulos em Node.js?
O que são callbacks em Node.js?
O que é o Event Loop do Node.js?
O que é o processo de stream em Node.js?
O que são Streams, stdin, stdout, pipe e buffers em Node.js?
O que é o middleware em Node.js?
Exemplo de Código feito na aula

### O que é Node.js?

Node.js é um ambiente de tempo de execução de JavaScript que permite que você execute código JavaScript do lado do servidor. Ele usa o mecanismo V8 JavaScript do Google Chrome e fornece uma maneira de executar o JavaScript fora de um navegador da Web.

### O que é NPM?

NPM significa Node Package Manager. Ele é um gerenciador de pacotes para a plataforma Node.js que ajuda na instalação, atualização e remoção de módulos Node.js.

### O que é package.json?

O arquivo package.json é um arquivo que contém informações sobre o projeto, como o nome, a versão, as dependências e os scripts de execução. Ele é usado pelo NPM para instalar e gerenciar as dependências do projeto.

### O que são módulos em Node.js?

Módulos em Node.js são arquivos JavaScript que exportam uma ou mais funções, objetos ou valores para serem usados em outros arquivos JavaScript.

### O que são callbacks em Node.js?

Callbacks são funções que são passadas como argumentos para outras funções e são executadas quando a função original é concluída. Eles são usados em Node.js para lidar com operações assíncronas.

### O que é o Event Loop do Node.js?

O Event Loop é o mecanismo em Node.js que permite que ele seja assíncrono e não bloqueante. Ele executa um loop infinito que verifica se há tarefas a serem executadas e, quando uma tarefa é concluída, ela é colocada na fila para ser executada.

### O que é o processo de stream em Node.js?

O processo de stream em Node.js é usado para ler e gravar dados em pequenos pedaços em vez de tudo de uma vez. Isso é útil para trabalhar com grandes quantidades de dados ou para trabalhar com dados em tempo real.

### O que são Streams, stdin, stdout, pipe e buffers em Node.js?

Streams são fluxos de dados que podem ser lidos ou gravados em pequenos pedaços. stdin e stdout são fluxos de entrada e saída padrão em Node.js. Pipe é um método que conecta uma fonte de fluxo a um destino de fluxo. Buffers são matrizes de bytes usadas para armazenar dados binários em Node.js.

### O que é o middleware em Node.js?

Middleware em Node.js é um software que se situa entre um sistema operacional e as aplicações que rodam sobre ele. Em Node.js, o middleware é usado para adicionar funcionalidades adicionais às aplicações web, como manipulação de rotas, autenticação e outras funcionalidades.

### Exemplo de Código feito na aula

```javascript
import http from 'node:http'
import { json } from './middlewares/json.js'

const users = []

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  if (method === 'GET' && url === '/users') {
    return res.end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body

    users.push({
      id: 1,
      name,
      email
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)
```
