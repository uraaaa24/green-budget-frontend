'use client'

import FormField from '@/components/elements/form-field'
import Input from '@/components/elements/input'
import React from 'react'

const DatepickerInput = () => {
  const defaultDate = new Date().toISOString().split('T')[0]

  return (
    <FormField label="Date">
      <Input type="date" name="date" defaultValue={defaultDate} />
    </FormField>
  )
}

export default DatepickerInput
