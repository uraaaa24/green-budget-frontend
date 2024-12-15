import FormField from '@/components/elements/form-field'
import Input from '@/components/elements/input'
import React from 'react'

const NoteInput = () => {
  return (
    <FormField label="Note">
      <Input type="text" name="note" placeholder="Additional information" />
    </FormField>
  )
}

export default NoteInput
