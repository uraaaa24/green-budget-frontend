import Table from '@/components/elements/table'
import React from 'react'
import Card from '@/components/layouts/box'
import { formatMonthRange } from '@/utils'

const TransactionTable = () => {
  const monthRange = formatMonthRange(new Date())

  return (
    <Card>
      <h2 className="pb-4 text-2xl font-bold">{monthRange}</h2>
      <Table />
    </Card>
  )
}

export default TransactionTable
