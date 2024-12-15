import FormField from '@/components/elements/form-field'
import Input from '@/components/elements/input'
import React from 'react'

const AmountInput = () => {
  return (
    <FormField label="Amount">
      <Input type="number" name="amount" />
    </FormField>
  )
}

export default AmountInput
