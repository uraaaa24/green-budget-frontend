import { CardHeader, CardTitle, CardContent, CardFooter, Card } from '@/components/ui/card'
import { isString } from '@/lib/type-guards'
import React, { ReactNode } from 'react'

type BaseCardProps = {
  header?: ReactNode
  content: ReactNode
  footer?: ReactNode
  className?: string
}

const BaseCard = ({ header, content, footer, className }: BaseCardProps) => {
  return (
    <Card className={className}>
      {header && (
        <CardHeader>{isString(header) ? <CardTitle>{header}</CardTitle> : header}</CardHeader>
      )}
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}

export default BaseCard
