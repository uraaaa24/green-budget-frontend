import { z } from 'zod'

import { createTransactionSchema } from './schema'

export type TransactionType = 'income' | 'expense'

export type Transaction = {
  id: number
  userId: string
  category: {
    id: number
    name: string
  }
  amount: number
  transaction_type: TransactionType
  date: string // ISO date format
  note: string
}

export type CreateTransaction = z.infer<typeof createTransactionSchema>
