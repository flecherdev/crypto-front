export class CurrencyService {
  url = 'http://localhost:3001/currencies'

  constructor() {}

  async getAll() {
    const response = await fetch(this.url)
    return response
  }

  async getById() {}

  async upsert(currency: ICurrency) {
    const res = await fetch(this.url, {
      body: JSON.stringify(currency),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    return res
  }
}
