'use client'

import { Transaction } from '@/app/transactions/_types/transaction'
import BaseButton from '@/components/common/buttons/base-button'
import SortIcon from '@/components/common/icons/sort-icon'
import { Column } from '@tanstack/react-table'
import React from 'react'

type DateHeaderProps = {
  column: Column<Transaction, unknown>
}

const DateHeader = ({ column }: DateHeaderProps) => {
  const direction = column.getIsSorted()

  return (
    <BaseButton variant="ghost" onClick={() => column.toggleSorting(direction === 'asc')}>
      日付
      <SortIcon direction={direction} className="ml-2 h-4 w-4" />
    </BaseButton>
  )
}

export default DateHeader
