'use client'

import DatePicker from '@/components/common/date-picker'
import FormField from '@/components/common/form-control'
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
          <DatePicker value={field.value} setValue={field.onChange} />
        </FormField>
      )}
    />
  )
}

export default DatepickerInput
