import Quote from './Quote.js'
import RandomQuote from './RandomQuote.js'

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn')
    this.randomQuoteAPIBtn = document.getElementById('random-quote-api-btn')
    this.randomQuoteOwnAPIBtn = document.getElementById(
      'random-quote-own-api-btn'
    )
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

  randomQuoteHandler() {
    this.changeCurrentCuote(RandomQuote.getRandomQuote())
  }

  // getRandomQuoteViaAPI() {
  //   RandomQuote.getRandomQuoteViaAPI().then((quote) => {
  //     this.changeCurrentCuote(quote)
  //   })
  // }

  // async randomQuoteHandlerViaAPI() {
  //   this.changeCurrentCuote(await RandomQuote.getRandomQuoteViaAPI())
  // }

  // async randomQuoteHandlerViaOwnAPI() {
  //   this.changeCurrentCuote(await RandomQuote.getRandomQuoteViaOwnAPI())
  // }

  async randomQuoteHandlerViaAPI(isOwnAPI = false) {
    this.changeCurrentCuote(
      isOwnAPI
        ? await RandomQuote.getRandomQuoteViaOwnAPI()
        : await RandomQuote.getRandomQuoteViaAPI()
    )
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () =>
      this.randomQuoteHandler()
    )
    this.randomQuoteAPIBtn.addEventListener('click', () =>
      this.randomQuoteHandlerViaAPI()
    )
    this.randomQuoteOwnAPIBtn.addEventListener('click', () =>
      this.randomQuoteHandlerViaAPI(true)
    )
  }
}

export default RandomQuotesApp
