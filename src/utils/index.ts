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
export const formatDatePretty = (date: Date) => {
  return format(date, 'dd MMM yyyy')
}
