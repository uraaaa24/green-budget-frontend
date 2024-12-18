'use client'

import React from 'react'
import AmountInput from './components/amount-input'
import DatepickerInput from './components/datepicker-input'
import { useForm, FormProvider } from 'react-hook-form'
import CategoryInput from './components/category-input'
import NoteInput from './components/note-input'

import SubmitButton from '@/components/common/button/submit-button'
import BaseCard from '@/components/layouts/card'

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
    <BaseCard
      header={{ title: 'Add Transaction' }}
      content={
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
      }
      className="max-w-lg"
    ></BaseCard>
  )
}

export default TransactionForm
