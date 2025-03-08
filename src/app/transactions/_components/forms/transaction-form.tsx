import SubmitButton from '@/components/common/buttons/submit-button'
import React, { useEffect, useMemo } from 'react'
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
  CategoryField,
  DateField,
  NoteField,
  TransactionTypeField
} from './form-fields'

type TransactionFormProps = {
  defaultValues?: Partial<CreateTransaction>
  onDialogClose: () => void
}

/**
 * Form to create a new transaction
 */
const TransactionForm = ({
  defaultValues: _defaultValues,
  onDialogClose
}: TransactionFormProps) => {
  const router = useRouter()

  const { createTransaction, isLoading, error } = useCreateTransaction()

  const defaultValues = useMemo(() => {
    const {
      date = new Date(),
      category_id = null,
      amount = 0,
      note = '',
      transaction_type = TRANSACTION_TYPES.expense
    } = _defaultValues || {}

    return { date, category_id, amount, note, transaction_type }
  }, [_defaultValues])

  const form = useForm({
    resolver: zodResolver(createTransactionSchema),
    defaultValues
  })

  const watchedTransactionType = form.watch('transaction_type')

  // Reset the form when the transaction type changes
  useEffect(() => {
    form.reset({
      ...defaultValues,
      transaction_type: watchedTransactionType
    })
  }, [watchedTransactionType, form, defaultValues])

  const onSubmit = async (data: CreateTransaction) => {
    await createTransaction(data)
    onDialogClose()
    router.refresh()
  }

  return (
    <Form {...form} key={watchedTransactionType}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <TransactionTypeField />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <DateField />
          <CategoryField />
        </div>
        <AmountField />
        <NoteField />

        <div className="flex justify-center pt-4">
          {isLoading && <p className="text-gray-500">Saving...</p>}
          {error && <p className="text-red-500">{error.message}</p>}
          <SubmitButton label="保存" className="w-full" />
        </div>
      </form>
    </Form>
  )
}

export default TransactionForm
