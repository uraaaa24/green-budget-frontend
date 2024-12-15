import React, { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'>

const Input = ({ type, id, name, placeholder, defaultValue, ...props }: InputProps) => {
  return (
    <input
      {...props}
      type={type}
      id={id}
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full p-3 text-sm bg-neutral text-gray-900 border border-gray-300 rounded-md"
    />
  )
}

export default Input
