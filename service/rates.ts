export class RatesService {
  url = 'http://localhost:3001/rates'
  constructor() {}

  async getAll() {}

  async getBySymbol(symbol: string) {
    const res = await fetch(`${this.url}/${symbol}`)
    return res
  }

  async getBySymbolAndLimit(symbol: string, count: string) {
    const res = await fetch(`${this.url}/${symbol}/${count}`)
    console.log(`${this.url}/${symbol}/${count}`)
    return res
  }

  async upsert(rate: IRates) {
    const res = await fetch(this.url, {
      body: JSON.stringify(rate),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    return res
  }
}
