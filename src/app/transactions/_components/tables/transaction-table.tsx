'use client'

import React from 'react'
import BaseCard from '@/components/layouts/card'
import { ColumnDef } from '@tanstack/react-table'
import DataTable from '@/components/common/tables/data-table'
import { CardTitle } from '@/components/ui/card'
import AddTransactionDialog from '../dialogs/add-transaction'
import { Transaction } from '../../_types/transaction'
import { useDateRange } from '@/contexts/date-range-context'
import { AmountCell, CategoryCell, DateCell, NoteCell } from './cells'

type TransactionTableProps = {
  transactions: Transaction[]
}

const TransactionTable = ({ transactions }: TransactionTableProps) => {
  const columns: ColumnDef<Transaction>[] = [
    {
      accessorKey: 'date',
      header: 'Date',
      cell: ({ getValue }) => {
        return <DateCell date={getValue() as string} />
      }
    },
    {
      accessorKey: 'category',
      header: 'Category',
      cell: ({ getValue }) => {
        return <CategoryCell category={getValue() as string} />
      }
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
      cell: ({ row, getValue }) => {
        const amount = getValue() as number
        const transaction = row.original
        const transactionType = transaction.transaction_type

        return <AmountCell transactionType={transactionType} amount={amount} />
      }
    },
    {
      accessorKey: 'note',
      header: 'Note',
      cell: ({ getValue }) => {
        return <NoteCell note={getValue() as string} />
      }
    }
  ]

  // TODO: api取得時に日付の範囲でフィルタリングできるようになったら、この処理は不要
  const { dateRange } = useDateRange()
  const { startDate, endDate } = dateRange
  const filteredTransactions = transactions.filter((transaction) => {
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
