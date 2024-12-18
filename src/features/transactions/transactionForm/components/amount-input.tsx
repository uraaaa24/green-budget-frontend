import FormField from '@/components/common/form-control'
import Input from '@/components/common/input'
import React from 'react'

import { Controller, useFormContext } from 'react-hook-form'

const AmountInput = () => {
  const { control } = useFormContext()

  return (
    <Controller
      name="amount"
      control={control}
      render={({ field }) => (
        <FormField label="Amount">
          <Input type="number" {...field} />
        </FormField>
      )}
    />
  )
}

export default AmountInput
