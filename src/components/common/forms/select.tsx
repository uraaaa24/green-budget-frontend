import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

type Option = {
  value: string
  label: string
}

type BaseSelectProps = {
  placeholder?: string
  options: Option[]
  value: string
  onChange: (value: string) => void
}

const BaseSelect = ({ options, value, onChange, placeholder, ...props }: BaseSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger {...props} className="hover:bg-gray-50">
        <SelectValue placeholder={placeholder || 'Select an option'} />
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
