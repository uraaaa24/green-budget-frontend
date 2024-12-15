import React, { cloneElement, isValidElement, ReactElement, useId } from 'react'

type FormFieldProps = {
  id?: string
  label: string
  children: ReactElement<{ id?: string }>
}

const FormField = ({ id, label, children }: FormFieldProps) => {
  const uuId = useId()
  id ??= uuId

  const cloneChildren = isValidElement(children) ? cloneElement(children, { id }) : children

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {cloneChildren}
    </div>
  )
}

export default FormField
