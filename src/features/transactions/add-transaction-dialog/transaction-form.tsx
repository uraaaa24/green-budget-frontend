import SubmitButton from '@/components/common/button/submit-button'
import React from 'react'
import { useForm } from 'react-hook-form'
import AmountInput from './components/amount-input'
import CategoryInput from './components/category-input'
import DatepickerInput from './components/datepicker-input'
import NoteInput from './components/note-input'
import { Form } from '@/components/ui/form'

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
          <DatepickerInput />
          <CategoryInput />
        </div>
        <AmountInput />
        <NoteInput />

        <div className="flex justify-center pt-4">
          <SubmitButton label="Save" className="w-full" />
        </div>
      </form>
    </Form>
  )
}

export default TransactionForm