import React, { ComponentProps } from 'react'

const BIG_CATEGORIES = [
  'Food',
  'Transportation',
  'Health',
  'Entertainment',
  'Education',
  'Investment',
  'Other'
]

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
      className="w-full p-3 text-sm bg-neutral text-gray-900 border border-gray-300 rounded-md"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

const CategoryInput = () => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor="category" className="text-sm font-medium text-gray-700">
        Category
      </label>
      <Select id="category" name="category" defaultValue="Food" options={BIG_CATEGORIES} />
    </div>
  )
}

export default CategoryInput
