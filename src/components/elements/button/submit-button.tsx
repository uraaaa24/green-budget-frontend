import React, { ComponentProps } from 'react'
import Button from '.'
import { cx } from '@/utils'
import { LoaderCircle } from 'lucide-react'

type SubmitButtonProps = ComponentProps<'button'> & {
  label: string
  isLoading?: boolean
}

const SubmitButton = ({ label, isLoading, ...props }: SubmitButtonProps) => {
  return (
    <Button
      {...props}
      className={cx(
        'relative flex items-center justify-center',
        isLoading && 'pointer-events-none'
      )}
    >
      <span className={cx(isLoading && 'opacity-70')}>{label}</span>

      {isLoading && (
        <LoaderCircle className="absolute w-5 h-5 animate-spin text-accent" aria-hidden="true" />
      )}
    </Button>
  )
}

export default SubmitButton
