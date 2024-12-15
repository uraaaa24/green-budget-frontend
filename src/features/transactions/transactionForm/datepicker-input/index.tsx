'use client'

import Input from '@/components/input'
import React, { useRef } from 'react'

const DatepickerInput = () => {
  const ref = useRef<HTMLInputElement>(null)

  const defaultDate = new Date().toISOString().split('T')[0]

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor="date" className="text-sm font-medium text-gray-700">
        Date
      </label>
      <Input ref={ref} type="date" id="date" name="date" defaultValue={defaultDate} />
    </div>
  )
}

export default DatepickerInput
