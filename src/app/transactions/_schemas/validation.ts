import { z } from 'zod'

export const TransactionType = {
  income: 'income',
  expense: 'expense'
} as const
export type TransactionType = keyof typeof TransactionType

export const createTransactionSchema = z.object({
  category_id: z.number().int().optional().nullable(),
  amount: z.number().int(),
  transaction_type: z.nativeEnum(TransactionType),
  date: z.date(),
  note: z.string().optional().nullable()
})
export type CreateTransaction = z.infer<typeof createTransactionSchema>
