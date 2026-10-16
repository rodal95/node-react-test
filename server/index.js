import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() })
})

app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'mundo'
  res.json({ message: `Hola, ${name}! Saludos desde Node.js en Railway 🚂` })
})

const clientDist = path.join(__dirname, '..', 'client', 'dist')
app.use(express.static(clientDist))
app.get(/^(?!\/api).*/, (_req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
