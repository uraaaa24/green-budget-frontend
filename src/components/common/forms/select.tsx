import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { ComponentProps } from 'react'

type Option = {
  value: string
  label: string
}

type BaseSelectProps = ComponentProps<typeof SelectTrigger> & {
  placeholder?: string
  options: Option[]
  defaultValue?: string
}

const BaseSelect = ({ options, defaultValue, ...props }: BaseSelectProps) => {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger {...props} className="hover:bg-gray-50">
        <SelectValue placeholder={'Select an option'} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} className="focus:bg-primary-light">
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default BaseSelect
