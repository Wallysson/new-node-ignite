import fs from 'node:fs'
import { parse } from 'csv-parse'

const csvPath = new URL('./tasks.csv', import.meta.url)
const stream = fs.createReadStream(csvPath)

const csvParse = parse({
  columns: true,
  delimiter: ','
})

async function parseCSV() {
  const readStream = stream.pipe(csvParse)

  for await (const chunk of readStream) {
    const { title, description } = chunk

    await fetch('http://localhost:3334/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description })
    })
  }
}

parseCSV()
