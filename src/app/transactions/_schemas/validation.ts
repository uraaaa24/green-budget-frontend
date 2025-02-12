import { z } from 'zod'

export const TRANSACTION_TYPES = {
  income: 'income',
  expense: 'expense'
} as const
export type TransactionType = keyof typeof TRANSACTION_TYPES

export const createTransactionSchema = z.object({
  category_id: z.number().int().optional().nullable(),
  amount: z.number().int().positive(),
  transaction_type: z.nativeEnum(TRANSACTION_TYPES),
  date: z.date(),
  note: z.string().optional().nullable()
})
export type CreateTransaction = z.infer<typeof createTransactionSchema>
