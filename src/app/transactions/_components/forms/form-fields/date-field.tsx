'use client'

import DatePicker from '@/components/common/forms/date-picker'
import { BaseFormField } from '@/components/common/forms/form-field'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export const DateField = () => {
  const { control } = useFormContext()

  return (
    <BaseFormField
      name="date"
      control={control}
      label="Date"
      required
      renderContent={(field) => (
        <DatePicker {...field} selected={field.value} onSelect={field.onChange} />
      )}
    />
  )
}
