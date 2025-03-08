'use client'

import { useMemo } from 'react'
import BaseCard from '@/components/layouts/card'
import DataTable from '@/components/common/tables/data-table'
import { CardTitle } from '@/components/ui/card'
import AddTransactionDialog from '../dialogs/add-transaction'
import { ColumnDef } from '@tanstack/react-table'
import DateHeader from './headers/date-header'
import { Transaction } from '../../_types/transaction'
import { useDateRange } from '@/contexts/date-range-context'
import ActionsCell from './cells/actions-cell'
import SelectCell from './cells/select-cell'
import SelectHeader from './headers/select-header'
import { AmountCell } from './cells/amount-cell'
import { CategoryCell } from './cells/category-cell'
import { DateCell } from './cells/date-cell'
import { NoteCell } from './cells/note-cell'

type TransactionTableProps = {
  transactions: Transaction[]
}

const TransactionTable = ({ transactions }: TransactionTableProps) => {
  const { startDate, endDate } = useDateRange()

  const startOfDay = useMemo(() => new Date(new Date(startDate).setHours(0, 0, 0, 0)), [startDate])
  const endOfDay = useMemo(() => new Date(new Date(endDate).setHours(23, 59, 59, 999)), [endDate])

  /**
   * 指定された日付範囲内の取引を抽出し、最新順にソートする
   */
  const filteredTransactions = useMemo(() => {
    return transactions
      .filter((transaction) => {
        const transactionDate = new Date(transaction.date)
        return transactionDate >= startOfDay && transactionDate <= endOfDay
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [transactions, startOfDay, endOfDay])

  const columns: ColumnDef<Transaction>[] = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => <SelectHeader table={table} />,
        cell: ({ row }) => <SelectCell row={row} />
      },
      {
        accessorKey: 'date',
        header: ({ column }) => <DateHeader column={column} />,
        cell: ({ row }) => <DateCell date={row.original.date} />
      },
      {
        accessorKey: 'category',
        header: 'Category',
        cell: ({ row }) => <CategoryCell category={row.original.category} />
      },
      {
        accessorKey: 'amount',
        header: 'Amount',
        cell: ({ row }) => {
          const { amount, transaction_type: transactionType } = row.original
          return <AmountCell transactionType={transactionType} amount={amount} />
        }
      },
      {
        accessorKey: 'note',
        header: 'Note',
        cell: ({ row }) => <NoteCell note={row.original.note} />
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => <ActionsCell id={row.original.id} />
      }
    ],
    []
  )

  return (
    <BaseCard
      header={
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">Transaction history</CardTitle>
          <AddTransactionDialog />
        </div>
      }
      content={<DataTable columns={columns} data={filteredTransactions} />}
    />
  )
}

export default TransactionTable
