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
      className="w-full min-h-12 p-3 text-sm bg-neutral border border-gray-300 rounded-md focus:outline-none focus:border-primary-light transition"
    />
  )
}

export default Input
