import { Button, ButtonProps } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

// NOTE: ここで他の variant に対する hover スタイルを追加することが可能
const CUSTOM_STYLES: Record<string, string> = {
  ghost: 'hover:bg-black/5 hover:text-current'
}

type BaseButtonProps = ButtonProps & {
  variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost'
}

const BaseButton = ({ variant = 'default', className, ...props }: BaseButtonProps) => {
  const customClass = CUSTOM_STYLES[variant]

  return <Button variant={variant} {...props} className={cn(className, customClass)} />
}

export default BaseButton
