import React, { useState } from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

export default function AddCurrency() {
  const genderOptions = [
    { key: 'b', text: 'BTC', value: 'BTC' },
    { key: 'e', text: 'ETH', value: 'ETH' },
    { key: 'a', text: 'ADA', value: 'ADA' },
  ]

  const onSelectChange = (evt: any, data: any) => {
    console.log(data.value)
  }

  const addCurrency = async (event: any) => {
    event.preventDefault()
    console.log(event.target.symbol)
    console.log(event.target.description.value)
    // const res = await fetch(
    //   'https://hooks.zapier.com/hooks/catch/123456/abcde',
    //   {
    //     body: JSON.stringify({
    //       name: event.target.name.value,
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     method: 'POST',
    //   }
    // )

    // const result = await res.json()
    // console.log()
    // result.user => 'Ada Lovelace'
  }

  return (
    <Form onSubmit={addCurrency}>
      <Form.Group widths="equal">
        <Form.Field
          name="symbol"
          control={Select}
          options={genderOptions}
          onChange={onSelectChange}
          label={{ children: 'symbol', htmlFor: 'form-select-control-gender' }}
          placeholder="Symbol"
          search
          searchInput={{ id: 'form-select-control-gender' }}
        />
      </Form.Group>
      <Form.Field
        id="form-textarea-control-opinion"
        name="description"
        control={TextArea}
        label="Description"
        placeholder="Description"
      />

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
