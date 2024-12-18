import { ComponentProps } from 'react'

type SelectProps = ComponentProps<'select'> & {
  options: string[]
}

const Select = ({ id, name, defaultValue, options, ...props }: SelectProps) => {
  return (
    <select
      {...props}
      id={id}
      name={name}
      defaultValue={defaultValue}
      className="w-full min-h-10 p-2 text-sm bg-neutral border border-gray-300 rounded-md focus:outline-none focus:border-primary-light transition"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Select
