export class CurrencyService {
  url = 'http://localhost:3001/currencies'

  constructor() {}

  async getAll() {
    const res = await fetch(this.url)
    return res
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
