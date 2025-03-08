'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ComponentProps } from 'react'

type BaseCalendarProps = ComponentProps<typeof DayPicker>

const BaseSingleCalendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: BaseCalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent hover:bg-primary-light p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-muted-foreground rounded-lg w-8 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-primary-light [&:has([aria-selected].day-outside)]:bg-primary-light/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-lg'
        ),
        day_selected:
          'bg-primary-light text-primary-foreground hover:bg-primary-light hover:text-primary-foreground focus:bg-primary-light focus:text-primary-foreground',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-primary-light/20 hover:text-inherit'
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_today: 'bg-primary-light/20 text-inherit',
        day_outside:
          'day-outside text-muted-foreground aria-selected:bg-primary-light/50 aria-selected:text-primary-foreground hover:bg-primary-light/20 hover:text-inherit',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle: 'aria-selected:bg-primary-light aria-selected:text-primary-foreground',
        day_hidden: 'invisible',
        ...classNames
      }}
      components={{
        // eslint-disable-next-line react/prop-types
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn('h-4 w-4', className)} {...props} />
        ),
        // eslint-disable-next-line react/prop-types
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn('h-4 w-4', className)} {...props} />
        )
      }}
      {...props}
    />
  )
}

export default BaseSingleCalendar
