import { z } from 'zod'

export const transactionSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  category_id: z.string(),
  amount: z.number().positive(),
  transaction_type: z.enum(['income', 'expense']),
  date: z.string().datetime(),
  description: z.string()
})

export const createTransactionSchema = transactionSchema.omit({ id: true })
