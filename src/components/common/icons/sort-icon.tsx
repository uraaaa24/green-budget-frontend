import { SortDirection } from '@tanstack/react-table'
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react'
import React from 'react'

type SortIconProps = {
  direction: false | SortDirection
  className?: string
}

const SortIcon = ({ direction, className }: SortIconProps) => {
  switch (direction) {
    case 'asc':
      return <ArrowUp className={className} />
    case 'desc':
      return <ArrowDown className={className} />
    default:
      return <ArrowUpDown className={className} />
  }
}

export default SortIcon
