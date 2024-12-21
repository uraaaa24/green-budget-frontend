import { BaseFormField } from '@/components/common/form-field'
import BaseSelect from '@/components/common/select'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const DUMMY_BIG_CATEGORIES = [
  { value: 'income', label: 'Income' },
  { value: 'expense', label: 'Expense' },
  { value: 'transfer', label: 'Transfer' },
  { value: 'adjustment', label: 'Adjustment' },
  { value: 'reimbursement', label: 'Reimbursement' }
]

const CategoryFormField = () => {
  const { control } = useFormContext()

  return (
    <BaseFormField
      name="category"
      control={control}
      label="Category"
      renderContent={(field) => <BaseSelect {...field} options={DUMMY_BIG_CATEGORIES} />}
    />
  )
}

export default CategoryFormField
