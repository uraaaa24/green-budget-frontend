import { BaseFormField } from '@/components/common/forms/form-field'
import BaseInput from '@/components/common/forms/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export const AmountField = () => {
  const { control } = useFormContext()

  const handleChange = (value: string, onChange: (value: number) => void) => {
    const v = value.replace(/[０-９．]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
    if (!isNaN(Number(v))) {
      onChange(Number(v))
    }
  }

  return (
    <BaseFormField
      name="amount"
      control={control}
      label="金額"
      required
      renderContent={(field) => (
        <BaseInput
          {...field}
          type="text"
          onChange={(e) => handleChange(e.target.value, field.onChange)}
        />
      )}
    />
  )
}
