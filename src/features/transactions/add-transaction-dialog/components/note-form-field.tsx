import { BaseFormField } from '@/components/common/form-field'
import BaseInput from '@/components/common/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const NoteFormField = () => {
  const { control } = useFormContext()

  return (
    <BaseFormField
      name="note"
      control={control}
      label="Note"
      renderContent={(field) => (
        <BaseInput {...field} type="text" placeholder="Additional information" />
      )}
    />
  )
}

export default NoteFormField
