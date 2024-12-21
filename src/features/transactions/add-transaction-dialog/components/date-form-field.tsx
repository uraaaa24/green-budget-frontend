'use client'

import DatePicker from '@/components/common/date-picker'
import { BaseFormField } from '@/components/common/form-field'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const DateFormField = () => {
  const { control } = useFormContext()

  return (
    <BaseFormField
      name="date"
      control={control}
      label="Date"
      renderContent={(field) => <DatePicker {...field} setValue={field.onChange} />}
    />
  )
}

export default DateFormField
