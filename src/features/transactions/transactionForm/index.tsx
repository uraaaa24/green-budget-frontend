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
    <div className="max-w-lg bg-white p-8 rounded-3xl">
      <h2 className="text-2xl font-bold mb-2">Add Transaction</h2>
      <p className="text-gray-500 mb-6 text-sm">Record your income or expense below.</p>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <DatepickerInput />
            <CategoryInput />
          </div>
          <AmountInput />
          <NoteInput />

          <SubmitButton label="Add Transaction" />
        </form>
      </FormProvider>
    </div>
  )
}

export default TransactionForm
