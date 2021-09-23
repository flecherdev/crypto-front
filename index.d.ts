type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type ICurrencyID = string

type ICurrency = {
  id?: number
  description: string
  symbol: string
}

type IRates = {
  id?: number
  id_currency: number
  value: string
  created_at?: Date
}

type IRateResponse = {
  id: number
  created_at: Date
  id_currency: number
  currency: ICurrency
  value: string
}
