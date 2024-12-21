import React, { ComponentProps } from 'react'
import { LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type SubmitButtonProps = ComponentProps<'button'> & {
  label?: string
  isLoading?: boolean
}

const SubmitButton = ({ label = 'Save', isLoading, ...props }: SubmitButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        'relative flex items-center justify-center',
        isLoading && 'pointer-events-none'
      )}
    >
      <span className={cn(isLoading && 'opacity-70')}>{label}</span>

      {isLoading && (
        <LoaderCircle className="absolute h-5 w-5 animate-spin text-accent" aria-hidden="true" />
      )}
    </Button>
  )
}

export default SubmitButton
