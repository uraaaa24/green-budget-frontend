import Table from '@/components/common/table'
import React from 'react'
import BaseCard from '@/components/layouts/card'
import { formatMonthRange } from '@/utils'

const TransactionTable = () => {
  const monthRange = formatMonthRange(new Date())

  return <BaseCard header={{ title: monthRange }} content={<Table />} />
}

export default TransactionTable
