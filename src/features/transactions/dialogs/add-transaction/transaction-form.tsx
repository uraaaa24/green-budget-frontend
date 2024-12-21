import SubmitButton from '@/components/common/buttons/submit-button'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import AmountFormField from './components/amount-form-field'
import CategoryFormField from './components/category-form-field'
import DateFormField from './components/date-form-field'
import NoteFormField from './components/note-form-field'

const TransactionForm = () => {
  // TODO: スキーマを定義してバリデーションを追加する
  const form = useForm({
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
