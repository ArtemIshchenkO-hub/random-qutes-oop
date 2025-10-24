import express from 'express'
import quotes from './data/quotes.js'

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]
  return quote
}

const app = express()
const PORT = 3000

app.get('/quotes/random-quote', (req, res) => {
  const randomQuote = getRandomQuote()
  res.json(randomQuote)
})

app.listen(PORT, () => {
  console.log(`Quotes API service is running on http://localhost:${PORT}`)
})
