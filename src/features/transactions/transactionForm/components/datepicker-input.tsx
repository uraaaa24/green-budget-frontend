'use client'

import FormField from '@/components/elements/form-control'
import Input from '@/components/elements/input'
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
          <Input type="date" {...field} />
        </FormField>
      )}
    />
  )
}

export default DatepickerInput
