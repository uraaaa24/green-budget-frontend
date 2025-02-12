import SubmitButton from '@/components/common/buttons/submit-button'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CreateTransaction,
  createTransactionSchema,
  TRANSACTION_TYPES
} from '../../_schemas/validation'
import { useCreateTransaction } from '../../_hooks/use-create-transaction'
import { useRouter } from 'next/navigation'
import {
  AmountField,
  // CategoryField,
  DateField,
  NoteField,
  TransactionTypeField
} from './form-fields'

const TransactionForm = () => {
  const router = useRouter()

  const { createTransaction, isLoading, error } = useCreateTransaction()

  const form = useForm({
    resolver: zodResolver(createTransactionSchema),
    defaultValues: {
      date: new Date(),
      category_id: null,
      amount: 0,
      note: '',
      transaction_type: TRANSACTION_TYPES.expense
    }
  })

  const onSubmit = (data: CreateTransaction) => {
    createTransaction(data)
    router.refresh()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <TransactionTypeField />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <DateField />
          {/* TODO: カテゴリーの使用が決まったら表示 */}
          {/* <CategoryField /> */}
        </div>
        <AmountField />
        <NoteField />

        <div className="flex justify-center pt-4">
          {isLoading && <p className="text-gray-500">Saving...</p>}
          {error && <p className="text-red-500">{error.message}</p>}
          <SubmitButton label="Save" className="w-full" />
        </div>
      </form>
    </Form>
  )
}

export default TransactionForm
