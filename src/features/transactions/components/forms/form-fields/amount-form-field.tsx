import { BaseFormField } from '@/components/common/forms/form-field'
import BaseInput from '@/components/common/forms/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const AmountFormField = () => {
  const { control } = useFormContext()

  return (
    <BaseFormField
      name="amount"
      control={control}
      label="Amount"
      renderContent={(field) => <BaseInput {...field} type="number" />}
    />
  )
}

export default AmountFormField
