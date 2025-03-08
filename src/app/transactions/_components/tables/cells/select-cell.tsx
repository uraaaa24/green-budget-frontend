import { Transaction } from '@/app/transactions/_types/transaction'
import { Checkbox } from '@/components/ui/checkbox'
import { Row } from '@tanstack/react-table'
import React from 'react'

type SelectCellProps = {
  row: Row<Transaction>
}

const SelectCell = ({ row }: SelectCellProps) => {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
    />
  )
}

export default SelectCell
