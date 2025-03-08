'use client'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import TransactionForm from '../forms/transaction-form'
import BaseDialog from '@/components/common/dialogs/dialog'
import { useState } from 'react'
import { CreateTransaction } from '../../_schemas/validation'

type AddTransactionDialogProps = {
  defaultValues?: Partial<CreateTransaction>
}

/**
 * Dialog to add a new transaction
 */
const AddTransactionDialog = ({ defaultValues }: AddTransactionDialogProps) => {
  const [open, setOpen] = useState(false)

  return (
    <BaseDialog
      trigger={
        <Button>
          <Plus className="h-4 w-4" />
          家計簿に追加
        </Button>
      }
      open={open}
      onOpenChange={() => setOpen(!open)}
      title="家計簿に追加"
      contentProps={{
        className:
          'mx-auto w-full h-full rounded-none md:w-lg md:h-auto md:rounded-lg px-4 md:px-6 overflow-y-auto'
      }}
    >
      <TransactionForm defaultValues={defaultValues} onDialogClose={() => setOpen(false)} />
    </BaseDialog>
  )
}

export default AddTransactionDialog
