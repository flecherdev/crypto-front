import React from 'react'
import { Form, TextArea, Button, Select, Input, Label } from 'semantic-ui-react'
import { RatesService } from '../../service/rates'

export default function AddRate() {
  let formRate: IRates = {
    id_currency: 0,
    value: '',
  }

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
    console.log('entro al endpoint')
    event.preventDefault()

    const data = await new RatesService().upsert(formRate)

    // const data = new CurrencyService()
    //   .upsert(formCurrency)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //   })
  }

  return (
    <Form onSubmit={addCurrency}>
      <Form.Group widths="equal">
        <Form.Field
          name="symbol"
          control={Select}
          options={genderOptions}
          onChange={onSelectChange}
          label={{ children: 'Symbol', htmlFor: 'form-select-control-gender' }}
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

      {/* <Form.Field
        onChange={onTextArea}
        id="form-textarea-control-opinion"
        name="description"
        control={TextArea}
        required={true}
        label="Description"
        placeholder="Description"
      /> */}

      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Add New"
        label=""
        type="submit"
      />
    </Form>
  )
}
