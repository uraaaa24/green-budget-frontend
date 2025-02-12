import { format } from 'date-fns'

/**
 * Format date to string  'YYYY-MM-DD'
 */
export const formattedDate = (date: Date) => {
  return format(date, 'yyyy-MM-dd')
}

/**
 * Format date to string 'dd MMM yyyy'
 */
export const formattedDatePretty = (date: Date, yearHidden = false) => {
  return format(date, yearHidden ? 'dd MMM' : 'dd MMM yyyy')
}
