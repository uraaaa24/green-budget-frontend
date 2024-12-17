import { cx } from '@/libs'
import React, { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

const Button = ({ disabled, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={cx(
        'rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-light disabled:pointer-events-none disabled:bg-gray-300 disabled:text-gray-400',
        className
      )}
    />
  )
}

export default Button
