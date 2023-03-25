import { Readable, Transform, Writable } from 'node:stream'

class OneHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 100)
  }
}

// Na versão mais recente do Node.js, é necessário adicionar uma propriedade a mais no objeto do fetch

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneHundredStream(),
  duplex: 'half' // adicione essa linha
}).then(response =>
  response.text().then(data => {
    console.log(data)
  })
)
