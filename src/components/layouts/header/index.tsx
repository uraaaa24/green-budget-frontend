'use client'

import { useDateRange } from '@/contexts/date-range-context'
import { formatDate } from '@/utils'
import React, { ComponentProps } from 'react'

type HeaderProps = ComponentProps<'header'> & {
  label: string
}

const Header = ({ label, ...props }: HeaderProps) => {
  const { dateRange } = useDateRange()

  const dateRangeText = `${formatDate(dateRange.startDate)} - ${formatDate(dateRange.endDate)}`

  return (
    <header {...props} className="space-y-4 pb-2">
      <h1 className="text-4xl font-bold">{label}</h1>
      <p className="text-sm text-gray-500">{dateRangeText}</p>
    </header>
  )
}

export default Header
