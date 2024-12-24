'use client'

import { DateRange } from '@/reducers/date-range-reducer'
import { createContext, useContext } from 'react'

export type DateRangeContextType = {
  dateRange: DateRange
  setDateRange: (dateRange: DateRange) => void
}

export const DateRangeContext = createContext<DateRangeContextType | undefined>(undefined)

export const useDateRange = (): DateRangeContextType => {
  const context = useContext(DateRangeContext)
  if (!context) {
    throw new Error('useDateRange must be used within a DateRangeProvider')
  }
  return context
}
