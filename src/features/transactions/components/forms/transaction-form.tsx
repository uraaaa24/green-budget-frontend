import SubmitButton from '@/components/common/buttons/submit-button'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createTransactionSchema } from '@/features/transactions/schemas/schema'
import TransactionTypeField from './form-fields/transaction-type-field'
import AmountField from './form-fields/amount-field'
import CategoryField from './form-fields/category-field'
import DateField from './form-fields/date-field'
import NoteField from './form-fields/note-field'

const TransactionForm = () => {
  const form = useForm({
    resolver: zodResolver(createTransactionSchema),
    defaultValues: {
      date: new Date(),
      categoryId: 101,
      amount: 0,
      note: '',
      transactionType: 'expense'
    }
  })

  const onSubmit = (data: unknown) => {
    console.log('################################', data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <TransactionTypeField />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <DateField />
          <CategoryField />
        </div>
        <AmountField />
        <NoteField />

        <div className="flex justify-center pt-4">
          <SubmitButton label="Save" className="w-full" />
        </div>
      </form>
    </Form>
  )
}

export default TransactionForm
