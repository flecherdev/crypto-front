import React, { useEffect, useState } from 'react'
import {
  Form,
  TextArea,
  Button,
  Select,
  Input,
  Label,
  Divider,
  Segment,
  Table,
  Header,
  Icon,
} from 'semantic-ui-react'
import { RatesService } from '../../service/rates'

export default function AddRate() {
  const [requestRate, setrequestRate] = useState<IRateResponse>()

  let formRate: IRates = {
    id_currency: 0,
    value: '',
  }

  let symbolSearch = ''

  const genderOptions = [
    { key: 1, text: 'BTC', value: 'BTC' },
    { key: 2, text: 'ETH', value: 'ETH' },
    { key: 3, text: 'ADA', value: 'ADA' },
  ]

  const onSelectChange = (evt: any, data: any) => {
    const filter = genderOptions
      .filter((currency) => currency.value == data.value)
      .map((coin) => (formRate.id_currency = coin.key))
  }

  const onCotizacion = (evt: any, data: any) => {
    formRate.value = data ? data.value : ''
  }

  const onDate = (evt: any, data: any) => {
    formRate.created_at = data.value ? data.value : ''
  }

  const addCurrency = async (event: any) => {
    // console.log('entro al endpoint')
    event.preventDefault()
    const data = await new RatesService().upsert(formRate)
  }

  const onSelectSearchQuote = (evt: any, data: any) => {
    symbolSearch = data.value
    // console.log(symbolSearch)

    reqQuoete(symbolSearch)
  }

  const reqQuoete = async (symbol: string) => {
    const res = await new RatesService().getBySymbol(symbol)

    const data = await new RatesService()
      .getBySymbol(symbol)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.body)
        setrequestRate(data.body)
      })
  }

  return (
    <Segment>
      <Divider horizontal>New Quote</Divider>
      <Form onSubmit={addCurrency}>
        <Form.Group widths="equal">
          <Form.Field
            name="symbol"
            control={Select}
            options={genderOptions}
            onChange={onSelectChange}
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
            onChange={onCotizacion}
            control={Input}
            type="text"
            label="Amount"
            placeholder="Value"
          />
          <Form.Field
            name="date"
            onChange={onDate}
            control={Input}
            type="date"
            label="Date"
            placeholder="Date/Time"
          />
        </Form.Group>
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Add New"
          label=""
          type="submit"
        />
        <Divider horizontal>
          <Header as="h4">
            <Icon name="bar chart" />
            Specifications Last quote
          </Header>
        </Divider>
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

        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={2}>Currency</Table.Cell>
              <Table.Cell>{requestRate?.currency.symbol}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Create Ar</Table.Cell>
              <Table.Cell>{requestRate?.created_at}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Value</Table.Cell>
              <Table.Cell>{requestRate?.value}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Form>
    </Segment>
  )
}
