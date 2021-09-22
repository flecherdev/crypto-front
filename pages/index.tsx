import React, { useState, useEffect } from 'react'
import { CurrencyService } from '@currency'
import { Card, Grid, Image } from 'semantic-ui-react'

const Home = () => {
  const [listCurrency, setLitCurrency] = useState<ICurrency[]>([])

  useEffect(() => {
    const data = new CurrencyService()
      .getAll()
      .then((response) => response.json())
      .then((data) => {
        setLitCurrency(data.body)
      })
  }, [])
  return (
    <div>
      <Grid>
        <Grid.Row>
          {listCurrency.map((currency) => (
            <Grid.Column key={currency.id} width={5}>
              <Card>
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src={`img/${currency.symbol}.png`}
                  />
                  <Card.Header>
                    {currency.description.toUpperCase()}
                  </Card.Header>
                  <Card.Meta>{currency.symbol}</Card.Meta>
                  <Card.Description>{currency.description}</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Home
