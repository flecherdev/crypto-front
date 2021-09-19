export class CurrencyService {
  url = 'http://localhost:3001/currencies'

  constructor() {}

  async getAll() {
    const response = await fetch(this.url)
    return response
  }

  async getById() {}

  async upsert() {}
}
