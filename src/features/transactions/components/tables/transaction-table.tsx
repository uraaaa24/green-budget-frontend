import React from 'react'
import BaseCard from '@/components/layouts/card'
import { ColumnDef } from '@tanstack/react-table'
import { Transaction } from '../../schemas/type'
import DataTable from '@/components/common/tables/data-table'
import { CardTitle } from '@/components/ui/card'
import AddTransactionDialog from '../dialogs/add-transaction'

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'transaction_type',
    header: 'Type'
  },
  {
    accessorKey: 'date',
    header: 'Date'
  },
  {
    accessorKey: 'amount',
    header: 'Amount'
  },
  {
    accessorKey: 'category_id',
    header: 'Category'
  },
  {
    accessorKey: 'description',
    header: 'Description'
  }
]

type TransactionTableProps = {
  transactions: Transaction[]
}

const TransactionTable = ({ transactions }: TransactionTableProps) => {
  return (
    <BaseCard
      header={
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">Transaction history</CardTitle>
          <div>
            <AddTransactionDialog />
          </div>
        </div>
      }
      content={<DataTable columns={columns} data={transactions} />}
    />
  )
}

export default TransactionTable
