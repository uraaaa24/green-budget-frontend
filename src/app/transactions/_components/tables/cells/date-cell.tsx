import { formatDatePretty } from '@/utils'

type DateCellProps = {
  date: string
}

export const DateCell = ({ date }: DateCellProps) => {
  const displayDate = formatDatePretty(new Date(date))

  return <span>{displayDate}</span>
}
