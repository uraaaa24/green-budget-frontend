import React, { cloneElement, isValidElement, ReactElement, useId } from 'react'
import { FieldError } from 'react-hook-form'

type FormFieldProps = {
  id?: string
  label: string
  children: ReactElement<{ id?: string }>
  error?: FieldError
}

const FormField = ({ id, label, children, error }: FormFieldProps) => {
  const uuId = useId()
  id ??= uuId

  const cloneChildren = isValidElement(children) ? cloneElement(children, { id }) : children

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {cloneChildren}
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  )
}

export default FormField
