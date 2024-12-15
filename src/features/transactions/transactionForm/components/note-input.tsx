import FormField from '@/components/elements/form-control'
import Input from '@/components/elements/input'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const NoteInput = () => {
  const { control } = useFormContext()

  return (
    <Controller
      name="note"
      control={control}
      render={({ field }) => (
        <FormField label="Note">
          <Input type="text" placeholder="Additional information" {...field} />
        </FormField>
      )}
    />
  )
}

export default NoteInput
