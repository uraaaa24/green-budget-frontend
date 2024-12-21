'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import TransactionForm from './transaction-form'

const AddTransactionDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add transaction</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Add Transaction</DialogTitle>
        </DialogHeader>

        <TransactionForm />
      </DialogContent>
    </Dialog>
  )
}

export default AddTransactionDialog
