import CustomTooltip from '@/components/common/tooltip'

type NoteCellProps = {
  note: string
}
const MAX_LENGTH = 20

export const NoteCell = ({ note }: NoteCellProps) => {
  const truncatedNote = note.length > MAX_LENGTH ? `${note.slice(0, MAX_LENGTH)}...` : note

  return (
    <CustomTooltip content={note}>
      <span className="block max-w-[150px] truncate rounded-md">{truncatedNote}</span>
    </CustomTooltip>
  )
}
