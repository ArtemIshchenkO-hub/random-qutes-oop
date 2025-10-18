import Quote from './Quote.js'
import RandomQuote from './RandomQuote.js'

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn')
    this.randomQuoteAPIBtn = document.getElementById('random-quote-api-btn')
    this.quoteTextElement = document.getElementById('quote-text')
    this.quoteAuthorEl = document.getElementById('quote-author')
    this.currentQuote = null
    this.init()
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText()
    this.quoteAuthorEl.textContent = this.currentQuote.formatAuthor()
  }

  changeCurrentCuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote
      this.displayCurrentQuote()
    }
  }

  getRandomQuote() {
    this.changeCurrentCuote(RandomQuote.getRandomQuote())
  }

  // getRandomQuoteViaAPI() {
  //   RandomQuote.getRandomQuoteViaAPI().then((quote) => {
  //     this.changeCurrentCuote(quote)
  //   })
  // }

  async getRandomQuoteViaAPI() {
    this.changeCurrentCuote(await RandomQuote.getRandomQuoteViaAPI())
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote())
    this.randomQuoteAPIBtn.addEventListener('click', () =>
      this.getRandomQuoteViaAPI()
    )
  }
}

export default RandomQuotesApp
