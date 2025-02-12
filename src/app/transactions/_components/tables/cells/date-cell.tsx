import { formattedDatePretty } from '@/utils'

type DateCellProps = {
  date: string
}

export const DateCell = ({ date }: DateCellProps) => {
  const displayDate = formattedDatePretty(new Date(date))

  return <span>{displayDate}</span>
}
