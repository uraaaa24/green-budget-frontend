import { format } from 'date-fns'

/**
 * Format date to string  'YYYY-MM-DD'
 */
export const formattedDate = (date: Date) => {
  return format(date, 'yyyy-MM-dd')
}
