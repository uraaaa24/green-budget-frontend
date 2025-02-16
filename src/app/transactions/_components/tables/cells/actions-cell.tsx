import { useDeleteTransaction } from '@/app/transactions/_hooks/udr-delete-transaction'
import BaseDialog from '@/components/common/dialogs/dialog'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { useState } from 'react'

type ActionsCellProps = {
  id: number
}

const DeleteAction = ({ id }: ActionsCellProps) => {
  const [open, setOpen] = useState(false)

  const { deleteTransaction, isLoading, error, done } = useDeleteTransaction()

  const handleDialogClose = () => {
    setOpen(!open)
  }

  const handleDelete = async () => {
    await deleteTransaction(id.toString())

    if (done) {
      setOpen(false)
    }
  }

  return (
    <BaseDialog
      open={open}
      onOpenChange={handleDialogClose}
      trigger={
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(true)}
          className="rounded-lg text-red-500 hover:bg-red-100 hover:text-red-600"
        >
          <Trash className="h-3 w-3" />
        </Button>
      }
      title="Delete Transaction"
      description="Are you sure you want to delete this transaction?"
      footer={
        <>
          <Button
            variant="outline"
            disabled={isLoading}
            onClick={handleDialogClose}
            className="rounded-lg"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            disabled={isLoading}
            onClick={handleDelete}
            className="rounded-lg"
          >
            Delete
          </Button>
        </>
      }
    >
      {error && <p className="text-red-500">{error.message}</p>}
    </BaseDialog>
  )
}

const ActionsCell = ({ id }: ActionsCellProps) => {
  return (
    <div className="flex items-center space-x-1">
      <DeleteAction id={id} />
    </div>
  )
}

export default ActionsCell
