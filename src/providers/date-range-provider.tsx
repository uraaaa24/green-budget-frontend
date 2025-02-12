'use client'

import { DateRangeContext, DateRangeContextType } from '@/contexts/date-range-context'
import { dateRangeReducer, initialDateRange } from '@/reducers/date-range-reducer'
import { ReactNode, useReducer } from 'react'

type DateRangeProviderProps = {
  children: ReactNode
}

export const DateRangeProvider = ({ children }: DateRangeProviderProps) => {
  const [state, dispatch] = useReducer(dateRangeReducer, initialDateRange)

  const contextValue: DateRangeContextType = {
    startDate: state.startDate,
    endDate: state.endDate,
    setDateRange: (dateRange) => dispatch({ type: 'SET_DATE_RANGE', payload: dateRange })
  }

  return <DateRangeContext.Provider value={contextValue}>{children}</DateRangeContext.Provider>
}
