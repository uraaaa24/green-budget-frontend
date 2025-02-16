import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import React, { ComponentProps, ReactNode } from 'react'

type BaseDialogProps = {
  trigger: ReactNode
  open?: boolean
  onOpenChange?: () => void
  title: string
  description?: string
  children?: ReactNode
  footer?: ReactNode
  contentProps?: ComponentProps<typeof DialogContent>
}

const BaseDialog = ({
  trigger,
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  contentProps
}: BaseDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent {...contentProps}>
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          {description && <DialogDescription className="text-sm">{description}</DialogDescription>}
        </DialogHeader>
        {children && <div className="my-4">{children}</div>}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}

export default BaseDialog
