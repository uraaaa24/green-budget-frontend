import { z } from 'zod'

import { createTransactionSchema } from './schema'

export type Transaction = {
  id: number
  userId: string
  category_id: string
  amount: number
  transaction_type: 'income' | 'expense'
  date: string
  description: string
}

export type CreateTransaction = z.infer<typeof createTransactionSchema>
