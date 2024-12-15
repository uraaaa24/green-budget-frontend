'use client'

import React from 'react'
import DatepickerInput from './components/datepicker-input'

import { useForm, FormProvider } from 'react-hook-form'
import CategoryInput from './components/category-input'
import AmountInput from './components/amount-input'
import NoteInput from './components/note-input'

const TransactionForm = () => {
  const methods = useForm()

  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  return (
    <div className="max-w-lg bg-white p-8 rounded-3xl">
      <h2 className="text-2xl font-bold mb-2">Add Transaction</h2>
      <p className="text-gray-600 mb-6 text-md">Record your income or expense below.</p>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
          {/* Date Input */}
          <DatepickerInput />
          {/* Category Input */}
          <CategoryInput />

          {/* Amount Input */}
          <AmountInput />

          {/* Note Input */}
          <NoteInput />

          {/* Submit Button */}
        </form>
      </FormProvider>
    </div>
  )
}

export default TransactionForm
