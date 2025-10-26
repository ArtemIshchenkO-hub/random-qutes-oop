import quotes from '../data/quotes.js'
import MathUtils from '../utils/MathUtils.js'
import Quote from './Quote.js'

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length)
    const { id, text, author } = quotes[randomIndex]
    return new Quote(id, text, author)
  }

  static async getRandomQuoteViaAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random'
    const options = { headers: { 'Content-Type': 'aplication/json' } }

    try {
      const response = await fetch(url, options)
      const { id, quote, author } = await response.json()
      return new Quote(id, quote, author)
    } catch (error) {
      console.error(error)
    }
  }

  static async getRandomQuoteViaOwnAPI() {
    const url = 'http://localhost:3000/quotes/random-quote'
    const options = { headers: { 'Content-Type': 'aplication/json' } }

    try {
      const response = await fetch(url, options)
      const quote = await response.json()
      const { id, text, author } = quote
      return new Quote(id, text, author)
    } catch (error) {
      console.error(error)
    }
  }

  //   static getRandomQuoteViaAPI() {
  //     const url = 'https://quoteslate.vercel.app/api/quotes/random'
  //     const options = { headers: { 'Content-Type': 'aplication/json' } }
  //     return fetch(url, options)
  //       .then((response) => response.json())
  //       .then(({ id, quote, author }) => new Quote(id, quote, author))
  //       .catch((error) => console.error(error))
  //   }
}

export default RandomQuote
