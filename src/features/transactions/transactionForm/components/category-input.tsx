import FormField from '@/components/elements/form-control'
import Select from '@/components/elements/select'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const BIG_CATEGORIES = [
  'Food',
  'Transportation',
  'Health',
  'Entertainment',
  'Education',
  'Investment',
  'Other'
]

const CategoryInput = () => {
  const { control } = useFormContext()

  return (
    <Controller
      name="category"
      control={control}
      render={({ field }) => (
        <FormField label="Category">
          <Select {...field} options={BIG_CATEGORIES} />
        </FormField>
      )}
    />
  )
}

export default CategoryInput
