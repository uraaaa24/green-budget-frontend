'use client'

import React from 'react'
import DatepickerInput from './components/datepicker-input'

import { useForm, FormProvider } from 'react-hook-form'
import CategoryInput from './components/category-input'
import AmountInput from './components/amount-input'
import NoteInput from './components/note-input'
import SubmitButton from '@/components/elements/button/submit-button'

const TransactionForm = () => {
  // TODO: スキーマを定義してバリデーションを追加する
  const methods = useForm({
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
    <div className="max-w-lg rounded-3xl border bg-white p-4 sm:p-6">
      <h2 className="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold">Add Transaction</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DatepickerInput />
            <CategoryInput />
          </div>
          <AmountInput />
          <NoteInput />

          <div className="pt-4">
            <SubmitButton label="Add Transaction" className="w-full" />
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default TransactionForm
