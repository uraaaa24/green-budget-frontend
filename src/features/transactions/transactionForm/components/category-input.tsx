import FormField from '@/components/common/form-control'
import BaseSelect from '@/components/common/select'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const BIG_CATEGORIES = [
  { value: 'income', label: 'Income' },
  { value: 'expense', label: 'Expense' },
  { value: 'transfer', label: 'Transfer' },
  { value: 'adjustment', label: 'Adjustment' },
  { value: 'reimbursement', label: 'Reimbursement' }
]

const CategoryInput = () => {
  const { control } = useFormContext()

  return (
    <Controller
      name="category"
      control={control}
      render={({ field }) => (
        <FormField label="Category">
          <BaseSelect {...field} options={BIG_CATEGORIES} />
        </FormField>
      )}
    />
  )
}

export default CategoryInput
