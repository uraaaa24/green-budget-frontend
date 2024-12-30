import { z } from 'zod'

const transactionType = z.enum(['income', 'expense'])

export const transactionSchema = z.object({
  id: z.string().uuid(),
  category: z.string(),
  amount: z.number().positive(),
  transactionType: transactionType,
  date: z.date(),
  note: z.string().optional()
})

export const createTransactionSchema = transactionSchema.omit({ id: true })
