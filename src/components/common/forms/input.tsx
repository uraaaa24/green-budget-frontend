import { Input } from '@/components/ui/input'
import React, { ComponentProps } from 'react'

type BaseInputProps = ComponentProps<'input'>

const BaseInput = ({ ...props }: BaseInputProps) => {
  return <Input {...props} />
}

export default BaseInput
