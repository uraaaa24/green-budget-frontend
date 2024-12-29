'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import TransactionForm from '../forms/transaction-form'

const AddTransactionDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4" />
          Add transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Add Transaction</DialogTitle>
          <DialogDescription className="text-sm">
            Fill in the form below to add a new transaction
          </DialogDescription>
        </DialogHeader>

        <TransactionForm />
      </DialogContent>
    </Dialog>
  )
}

export default AddTransactionDialog
