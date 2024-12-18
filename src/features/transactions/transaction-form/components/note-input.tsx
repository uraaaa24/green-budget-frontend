import FormField from '@/components/common/form-control'
import BaseInput from '@/components/common/input'
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
          <BaseInput type="text" placeholder="Additional information" {...field} />
        </FormField>
      )}
    />
  )
}

export default NoteInput
