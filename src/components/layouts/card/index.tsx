import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Card
} from '@/components/ui/card'
import React, { ReactNode } from 'react'

type BaseCardProps = {
  header?: {
    title?: string
    description?: string
  }
  content: ReactNode
  footer?: ReactNode
  className?: string
}

const BaseCard = ({ header, content, footer, className }: BaseCardProps) => {
  return (
    <Card className={className}>
      {header && (
        <CardHeader>
          {header.title && <CardTitle className="text-2xl">{header.title}</CardTitle>}
          {header.description && <CardDescription>{header.description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}

export default BaseCard
