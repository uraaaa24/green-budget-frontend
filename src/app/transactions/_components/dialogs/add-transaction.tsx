'use client'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import TransactionForm from '../forms/transaction-form'
import BaseDialog from '@/components/common/dialogs/dialog'
import { useState } from 'react'

/**
 * Dialog to add a new transaction
 */
const AddTransactionDialog = () => {
  const [open, setOpen] = useState(false)

  return (
    <BaseDialog
      trigger={
        <Button>
          <Plus className="h-4 w-4" />
          Add transaction
        </Button>
      }
      open={open}
      onOpenChange={() => setOpen(!open)}
      title="Add Transaction"
      description="Fill in the form below to add a new transaction"
      contentProps={{
        className: 'md:w-auto w-full h-full md:h-auto'
      }}
    >
      <TransactionForm onDialogClose={() => setOpen(false)} />
    </BaseDialog>
  )
}

export default AddTransactionDialog
