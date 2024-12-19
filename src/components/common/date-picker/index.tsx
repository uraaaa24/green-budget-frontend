import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'
import { format } from 'date-fns'
import BaseCalendar from '../calendar'

type DatePickerProps = {
  value: Date | undefined
  setValue: Dispatch<SetStateAction<Date | undefined>>
}

const DatePicker = ({ value, setValue }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
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
        <BaseCalendar mode="single" selected={value} onSelect={setValue} />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker
