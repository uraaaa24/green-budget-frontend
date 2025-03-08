import { Transaction } from '@/app/transactions/_types/transaction'
import { Checkbox } from '@/components/ui/checkbox'
import { Table } from '@tanstack/react-table'
import React from 'react'

type SelectHeaderProps = {
  table: Table<Transaction>
}

const SelectHeader = ({ table }: SelectHeaderProps) => {
  return (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    />
  )
}

export default SelectHeader
