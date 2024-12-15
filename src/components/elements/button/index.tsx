import { cx } from '@/utils'
import React, { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

const Button = ({ disabled, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={cx(
        'px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-light disabled:bg-gray-300 disabled:text-gray-400 disabled:pointer-events-none',
        className
      )}
    />
  )
}

export default Button
