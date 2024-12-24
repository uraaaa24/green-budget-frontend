import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import React, { ComponentProps, Dispatch, SetStateAction } from 'react'
import { format } from 'date-fns'
import BaseSingleCalendar from '../calendar'

type DatePickerProps = ComponentProps<'button'> & {
  value: Date | undefined
  setValue: Dispatch<SetStateAction<Date | undefined>>
}

const DatePicker = ({ value, setValue, ...props }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger {...props} asChild>
        <Button
          variant="outline"
          className={cn(
            'justify-start text-left font-normal hover:bg-gray-50 hover:text-inherit',
            !value && 'text-muted-foreground'
          )}
        >
          <CalendarIcon />
          {value ? format(value, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <BaseSingleCalendar mode="single" selected={value} onSelect={setValue} initialFocus />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker