// import CustomTooltip from '@/components/common/tooltip'

type NoteCellProps = {
  note: string
}
const MAX_LENGTH = 15
// const DELAY_DURATION = 1000

export const NoteCell = ({ note }: NoteCellProps) => {
  const truncatedNote = note.length > MAX_LENGTH ? `${note.slice(0, MAX_LENGTH)}...` : note

  return (
    // <CustomTooltip content={note} delayDuration={DELAY_DURATION}>
    <span className="w-16 truncate">{truncatedNote}</span>
    // </CustomTooltip>
  )
}
