import SubmitButton from '@/components/common/buttons/submit-button'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import AmountFormField from './form-fields/amount-form-field'
import CategoryFormField from './form-fields/category-form-field'
import DateFormField from './form-fields/date-form-field'
import NoteFormField from './form-fields/note-form-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { createTransactionSchema } from '@/features/transactions/schemas/schema'

const TransactionForm = () => {
  // TODO: スキーマを定義してバリデーションを追加する
  const form = useForm({
    resolver: zodResolver(createTransactionSchema),
    defaultValues: {
      date: new Date().toISOString().split('T')[0],
      category: 'Food',
      amount: 0,
      note: ''
    }
  })

  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <DateFormField />
          <CategoryFormField />
        </div>
        <AmountFormField />
        <NoteFormField />

        <div className="flex justify-center pt-4">
          <SubmitButton label="Save" className="w-full" />
        </div>
      </form>
    </Form>
  )
}

export default TransactionForm
