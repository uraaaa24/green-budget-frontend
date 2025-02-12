import { z } from 'zod'

export const TransactionTypeMap = {
  income: 'income',
  expense: 'expense'
} as const
export type TransactionType = keyof typeof TransactionTypeMap

export const createTransactionSchema = z.object({
  category_id: z.number().int().optional().nullable(),
  amount: z.number().int(),
  transaction_type: z.nativeEnum(TransactionTypeMap),
  date: z.date(),
  note: z.string().optional().nullable()
})
export type CreateTransaction = z.infer<typeof createTransactionSchema>
