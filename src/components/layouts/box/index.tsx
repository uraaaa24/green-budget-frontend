import { cx } from '@/libs'
import React, { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

const Card = ({ children, className }: CardProps) => {
  return <div className={cx('rounded-2xl border bg-white p-4 sm:p-6', className)}>{children}</div>
}

export default Card
