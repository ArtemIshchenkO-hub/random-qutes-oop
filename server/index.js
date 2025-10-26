import express from 'express'
import quotes from './data/quotes.js'
import cors from 'cors'

const app = express()
const PORT = 3000

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]
  return quote
}

const corsOptions = {
  origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
}

app.use(cors(corsOptions))

app.get('/quotes/random-quote', (req, res) => {
  const randomQuote = getRandomQuote()
  res.json(randomQuote)
})

app.listen(PORT, () => {
  console.log(`Quotes API service is running on http://localhost:${PORT}`)
})
