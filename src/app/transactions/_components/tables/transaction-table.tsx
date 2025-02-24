'use client'

import BaseCard from '@/components/layouts/card'
import { ColumnDef } from '@tanstack/react-table'
import DataTable from '@/components/common/tables/data-table'
import { CardTitle } from '@/components/ui/card'
import AddTransactionDialog from '../dialogs/add-transaction'
import { Transaction } from '../../_types/transaction'
import { useDateRange } from '@/contexts/date-range-context'
import { AmountCell, CategoryCell, DateCell, NoteCell } from './cells'
import ActionsCell from './cells/actions-cell'

type TransactionTableProps = {
  transactions: Transaction[]
}

const TransactionTable = ({ transactions }: TransactionTableProps) => {
  const columns: ColumnDef<Transaction>[] = [
    {
      accessorKey: 'date',
      header: 'Date',
      cell: ({ row }) => {
        return <DateCell date={row.original.date} />
      }
    },
    {
      accessorKey: 'category',
      header: 'Category',
      cell: ({ row }) => {
        return <CategoryCell category={row.original.category} />
      }
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
      cell: ({ row }) => {
        const amount = row.original.amount
        const transaction = row.original
        const transactionType = transaction.transaction_type

        return <AmountCell transactionType={transactionType} amount={amount} />
      }
    },
    {
      accessorKey: 'note',
      header: 'Note',
      cell: ({ row }) => {
        return <NoteCell note={row.original.note} />
      }
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const transaction = row.original

        return <ActionsCell id={transaction.id} />
      }
    }
  ]

  // TODO: api取得時に日付の範囲でフィルタリングできるようになったら、この処理は不要
  const { startDate, endDate } = useDateRange()
  const filteredTransactions = (transactions ?? []).filter((transaction) => {
    const transactionDate = new Date(transaction.date)
    return transactionDate >= startDate && transactionDate <= endDate
  })

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
      content={<DataTable columns={columns} data={filteredTransactions} />}
    />
  )
}

export default TransactionTable
