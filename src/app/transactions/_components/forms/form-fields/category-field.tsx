import { BaseFormField } from '@/components/common/forms/form-field'
import BaseSelect from '@/components/common/forms/select'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const DUMMY_BIG_CATEGORIES = [
  { value: '1', label: 'Income' },
  { value: '2', label: 'Expense' },
  { value: '3', label: 'Transfer' },
  { value: '4', label: 'Adjustment' },
  { value: '5', label: 'Reimbursement' }
]

const CategoryField = () => {
  const { control } = useFormContext()

  return (
    <BaseFormField
      name="category"
      control={control}
      label="Category"
      required
      renderContent={(field) => (
        <BaseSelect {...field} defaultValue={field.value} options={DUMMY_BIG_CATEGORIES} />
      )}
    />
  )
}

export default CategoryField
