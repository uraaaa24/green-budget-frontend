import { BaseFormField } from '@/components/common/forms/form-field'
import BaseInput from '@/components/common/forms/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export const NoteField = () => {
  const { control } = useFormContext()

  return (
    <BaseFormField
      name="note"
      control={control}
      label="メモ"
      renderContent={(field) => (
        <BaseInput {...field} type="text" placeholder="Additional information" />
      )}
    />
  )
}
