import { z } from 'zod'

const transactionType = z.enum(['income', 'expense'])

export const transactionSchema = z.object({
  id: z.string().uuid(),
  // userId: z.string().uuid(),
  // categoryId: z.string(),
  amount: z.number().positive(),
  transactionType: transactionType,
  date: z.date(),
  note: z.string().optional()
})

export const createTransactionSchema = transactionSchema.omit({ id: true })
