'use client'

import FormField from '@/components/common/form-control'
import BaseInput from '@/components/common/input'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const DatepickerInput = () => {
  const { control } = useFormContext()

  return (
    <Controller
      name="date"
      control={control}
      render={({ field }) => (
        <FormField label="Date">
          <BaseInput type="date" {...field} />
        </FormField>
      )}
    />
  )
}

export default DatepickerInput
