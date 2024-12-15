import FormField from '@/components/elements/form-field'
import Select from '@/components/elements/select'
import React from 'react'

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
  return (
    <FormField label="Category">
      <Select name="category" defaultValue="Food" options={BIG_CATEGORIES} />
    </FormField>
  )
}

export default CategoryInput
