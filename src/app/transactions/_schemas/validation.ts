import { z } from 'zod'

export const TransactionType = {
  income: 'income',
  expense: 'expense'
} as const
export type TransactionType = keyof typeof TransactionType

export const createTransactionSchema = z.object({
  category_id: z.string(),
  amount: z.number().positive(),
  transactionType: z.nativeEnum(TransactionType),
  date: z.date(),
  note: z.string().optional()
})
export type CreateTransaction = z.infer<typeof createTransactionSchema>
