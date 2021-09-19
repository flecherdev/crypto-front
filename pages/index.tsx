import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { CurrencyService } from '../service/currency'

const Home = () => {
  const [listCurrency, setLitCurrency] = useState<ICurrency[]>([])

  useEffect(() => {
    const data = new CurrencyService()
      .getAll()
      .then((response) => response.json())
      .then((data) => {
        console.log(data.body)
        setLitCurrency(data.body)
      })
  }, [])
  return (
    <div>
      <Navbar />
      <h1>Hola Crypto next js</h1>
      {listCurrency.map((currency) => (
        <div key={currency.id}>
          <div>{currency.description}</div>
          <div>{currency.symbol}</div>
        </div>
      ))}
    </div>
  )
}

export default Home
