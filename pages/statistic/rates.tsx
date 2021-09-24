import { RatesService } from '@rates'
import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Button, Divider, Form, Segment, Select } from 'semantic-ui-react'

export default function Rates() {
  const [data, setData] = useState<IRateResponse>()

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  let symbolSearch = ''
  let countSearch = ''

  const genderOptions = [
    { key: 1, text: 'BTC', value: 'BTC' },
    { key: 2, text: 'ETH', value: 'ETH' },
    { key: 3, text: 'ADA', value: 'ADA' },
  ]

  const getData = (result: IRateResponse) => {
    let date: any[] = []
    let count: any[] = []
    if (result instanceof Array) {
      result.map((quote) => {
        date.push(quote.created_at)
        count.push(quote.value)
      })

      let statistic: any = {
        labels: date,
        datasets: [
          {
            label: '# of quote',
            data: count,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
      console.log(statistic)
      setData(statistic)
      symbolSearch = ''
      count = ''
      statistic = {}
    }
  }

  const countOptions = [
    { key: 2, text: '2', value: '2' },
    { key: 3, text: '3', value: '3' },
    { key: 4, text: '4', value: '4' },
    { key: 5, text: '5', value: '5' },
  ]

  const reqQuoete = async (symbol: string, count: string) => {
    const data = await new RatesService()
      .getBySymbolAndLimit(symbol, count)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          getData(data.body)
        }
      })
  }

  const onSelectSearchQuote = (evt: any, data: any) => {
    symbolSearch = data.value
  }

  const onSelectSetCount = (env: any, data: any) => {
    countSearch = data.value
  }

  const searchRates = () => {
    reqQuoete(symbolSearch, countSearch)
  }

  return (
    <Segment>
      <Divider horizontal>Chart</Divider>
      <Form onSubmit={searchRates}>
        <Form.Group widths="equal">
          <Form.Field
            name="symbol"
            control={Select}
            options={genderOptions}
            onChange={onSelectSearchQuote}
            label={{
              children: 'Symbol',
              htmlFor: 'form-select-control-gender',
            }}
            placeholder="Symbol"
            required={true}
            search
            searchInput={{ id: 'form-select-control-gender' }}
          />
          <Form.Field
            name="symbol"
            control={Select}
            options={countOptions}
            onChange={onSelectSetCount}
            label={{
              children: 'Count',
              htmlFor: 'form-select-control-gender',
            }}
            placeholder="Count"
            required={true}
            search
            searchInput={{ id: 'form-select-control-gender' }}
          />
        </Form.Group>
        <Button type="submit" basic color="orange" content="Touch me" />
      </Form>
      <div>
        <Bar data={data} options={options} />
      </div>
    </Segment>
  )
}
