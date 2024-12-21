import { BaseFormField } from '@/components/common/form-field'
import BaseInput from '@/components/common/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const AmountInput = () => {
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

export default AmountInput
