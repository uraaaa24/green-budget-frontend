import { TransactionType } from '../_schemas/validation'

export type Transaction = {
  id: number
  userId: string
  category: {
    id: number
    name: string
  }
  amount: number
  transaction_type: TransactionType
  date: string
  note: string
}
